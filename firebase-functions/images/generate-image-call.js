import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { getFirestore, Timestamp } from 'firebase-admin/firestore'

// export const generateimagecall = onCall({ enforceAppCheck: true }, async (request) => {
export const generateimagecall = onCall(async (request) => {
  // validate the request
  // TODO: do this with an auth include (like in Daily Good)
  // if (!request.auth) {
  //   throw new HttpsError('unauthenticated', 'The function must be called while authenticated.')
  // }
  if (!request.data.prompt) {
    throw new HttpsError('invalid-argument', 'The function must be called with "prompt" argument.')
  }

  // get the prompt
  const prompt = request.data.prompt

  // init firestore
  const db = getFirestore()

  // insert the prompt into the generatedImages collection
  const generatedImagesRef = db.collection('generatedImages')
  const newGeneratedImageRef = generatedImagesRef.doc()
  await newGeneratedImageRef.set({
    prompt: prompt,
    url: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/1600/900`,
    createdAt: Timestamp.now()
  })

  // return success
  return { status: 'success' }
})
