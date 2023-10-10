// NOTE: See https://platform.stability.ai/docs/api-reference#tag/v1generation/operation/textToImage
// for supported params

export const generateImage = async (params, api_key) => {
  // set default params (which will also be used to whitelist the passed in params, besides
  // the text prompt(s))
  const default_params = {
    engine_id: 'stable-diffusion-xl-1024-v1-0',
    width: 1344,
    height: 768,
    cfg_scale: 7.0,
    sampler: 'K_DPMPP_2M',
    samples: 1,
    seed: 0,
    steps: 20
  }

  // actualize the params
  const actualized_params = { ...default_params }
  Object.keys(default_params).forEach((key) => {
    if (params[key] === undefined) return
    actualized_params[key] = params[key]
  })

  // add the prompt(s)
  actualized_params.text_prompts = [
    {
      text: params.prompt,
      weight: 1.0
    }
  ]

  if (params.negative_prompt) {
    actualized_params.text_prompts.push({
      text: params.negative_prompt,
      weight: -1.0
    })
  }

  // call the api
  const api_url = `https://api.stability.ai/v1/generation/${actualized_params.engine_id}/text-to-image`

  const response = await fetch(api_url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_key}`
    },
    body: JSON.stringify(actualized_params)
  })

  // return the response
  const data = await response.json()
  return data
}
