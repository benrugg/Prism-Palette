import { HttpsError } from 'firebase-functions/v2/https'
import { getStorage, getDownloadURL } from 'firebase-admin/storage'
import { getFirestore, Timestamp } from 'firebase-admin/firestore'
import { v4 as uuidv4 } from 'uuid'
import { streamToBuffer } from './stream-to-buffer.js'
import { applyPresetToPrompt } from './apply-preset-to-prompt.js'

// NOTE: See https://platform.stability.ai/docs/api-reference#tag/v1generation/operation/textToImage
// for supported params

export const generateImage = async (params, isNewPreset, apiKey, ipAddress) => {
  // set default params (which will also be used to whitelist the passed in params, besides
  // the text prompt(s))
  const defaultParams = {
    engine_id: 'stable-diffusion-xl-1024-v1-0',
    width: 1344,
    height: 768,
    cfg_scale: 7.0,
    sampler: 'K_DPMPP_2M',
    samples: 1,
    seed: Math.floor(Math.random() * 2147483646),
    steps: 15
  }

  // actualize the params
  const actualizedParams = { ...defaultParams }
  Object.keys(defaultParams).forEach((key) => {
    if (params[key] === undefined) return
    actualizedParams[key] = params[key]
  })

  // add the prompt(s):
  actualizedParams.text_prompts = []

  // split the prompt into multiple prompts by newline
  const promptLines = params.prompt.split('\n').filter((line) => line.trim() !== '')

  // add weights to each prompt, defaulting to 1.0
  const promptLinesWithWeights = promptLines.map((line) => {
    // try to match :<number> at the end of the line
    const match = line.match(/:(\d+\.?\d*)$/)

    // if there is a match, return the line and the weight
    if (match) {
      return {
        text: line.replace(match[0], '').trim(),
        weight: parseFloat(match[1])
      }
    }

    // otherwise, return the line and the default weight
    return {
      text: line.trim(),
      weight: 1.0
    }
  })

  // add the prompt lines to the actualized params, while potentially transforming it
  // with the preset
  promptLinesWithWeights.forEach((line) => {
    actualizedParams.text_prompts.push({
      text: applyPresetToPrompt(line.text, params.preset),
      weight: line.weight
    })
  })

  // add the negative prompt or the negative preset prompt, if one exists, (with the
  // negative preset prompt taking precedence)
  const negativePrompt = params.preset?.negative || params.negative_prompt
  if (negativePrompt) {
    actualizedParams.text_prompts.push({
      text: negativePrompt,
      weight: -1.0
    })
  }

  // get the site id
  const siteId = params.siteId

  // NOTE: for debugging:
  // console.log('actualizedParams', actualizedParams)

  // call the api
  const api_url = `https://api.stability.ai/v1/generation/${actualizedParams.engine_id}/text-to-image`
  let response, downloadURL

  try {
    response = await fetch(api_url, {
      method: 'POST',
      headers: {
        Accept: 'image/png',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(actualizedParams)
    })
  } catch (error) {
    throw new HttpsError('internal', 'Stability API had an error while generating an image')
  }

  try {
    // convert the image response from a readable stream to a buffer
    const imageBuffer = await streamToBuffer(response.body)

    // initialize cloud storage, upload the image, then get a permanent download url
    const bucket = getStorage().bucket()
    const fileRef = bucket.file(`sites/${siteId}/images/${uuidv4()}.png`)
    await fileRef.save(imageBuffer, { contentType: 'image/png' })
    downloadURL = await getDownloadURL(fileRef)
  } catch (error) {
    throw new HttpsError('internal', 'Cloud Storage had an error while uploading an image')
  }

  // init firestore
  const db = getFirestore()

  // use a transaction to add multiple records to the database
  try {
    await db.runTransaction(async (transaction) => {
      // insert the prompt into the prompts collection
      const promptsRef = db.collection(`sites/${siteId}/prompts`)
      const newPromptRef = promptsRef.doc()
      transaction.set(newPromptRef, {
        text: params.prompt,
        presetName: params.preset?.name || null,
        createdAt: Timestamp.now(),
        ipAddress: ipAddress
      })

      // insert the image into the images collection
      const imagesRef = db.collection(`sites/${siteId}/images`)
      const newImageRef = imagesRef.doc()
      transaction.set(newImageRef, {
        generationParams: actualizedParams,
        presetName: params.preset?.name || null,
        url: downloadURL,
        createdAt: Timestamp.now(),
        ipAddress: ipAddress
      })

      // if this image used a new preset, update the site's presetLastChangedAt timestamp
      if (isNewPreset) {
        const siteRef = db.doc(`sites/${siteId}`)
        transaction.update(siteRef, {
          presetLastChangedAt: Timestamp.now()
        })
      }
    })
  } catch (error) {
    throw new HttpsError('internal', 'Firestore had an error while creating records')
  }

  // return the url
  return { url: downloadURL }
}
