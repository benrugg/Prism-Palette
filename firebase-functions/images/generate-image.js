import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { generateImage } from './include/generate-image.js'

export const generateimage = onCall(
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

    // get the ip address of the request
    const ipAddress =
      request.rawRequest.headers['x-forwarded-for'] ||
      request.rawRequest.headers['x-appengine-user-ip'] ||
      null

    // generate the image
    const response = await generateImage(request.data, process.env.STABILITY_API_KEY, ipAddress)

    // return the response
    return response
  }
)
