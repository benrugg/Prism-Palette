import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { generateImage } from './include/generate-image.js'

export const generateimagecall = onCall(
  { enforceAppCheck: true, timeoutSeconds: 90, secrets: ['STABILITY_API_KEY'] },
  async (request) => {
    // validate the request
    // TODO: add more validation
    if (!request.data.siteId) {
      throw new HttpsError(
        'invalid-argument',
        'The function must be called with "siteId" argument.'
      )
    }

    if (!request.data.prompt) {
      throw new HttpsError(
        'invalid-argument',
        'The function must be called with "prompt" argument.'
      )
    }

    // generate the image
    const response = await generateImage(request.data, process.env.STABILITY_API_KEY)

    // return the response
    return response
  }
)
