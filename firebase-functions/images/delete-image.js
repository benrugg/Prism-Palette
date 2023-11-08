import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'

export const deleteimage = onCall({ enforceAppCheck: true }, async (request) => {
  // get and validate params
  const { imageId, siteId } = request.data
  if (!imageId) {
    throw new HttpsError('invalid-argument', 'Missing id')
  }
  if (!siteId) {
    throw new HttpsError('invalid-argument', 'Missing siteId')
  }

  // init db
  const db = getFirestore()

  // get the image
  const imageRef = db.doc(`sites/${siteId}/images/${imageId}`)
  const imageDoc = await imageRef.get()

  // if the image doesn't exist, return an error
  if (!imageDoc.exists) {
    throw new HttpsError('not-found', 'Image not found')
  }

  // get the image's download url
  const { url: downloadUrl } = imageDoc.data()

  // if the image doesn't have a url, return an error
  if (!downloadUrl) {
    throw new HttpsError('not-found', 'Image url not found')
  }

  // convert the download url into a storage filename
  const urlRegex = /images%2F(.+)\?/
  const imageFilename = downloadUrl.match(urlRegex)[1]

  // init storage
  const storage = getStorage()

  // delete the image from storage
  try {
    const bucket = storage.bucket()
    const fileRef = bucket.file(`sites/${siteId}/images/${imageFilename}`)
    await fileRef.delete()
  } catch (error) {
    // log the error, but don't throw it
    console.error(error)
  }

  // delete the image from firestore
  await imageRef.delete()

  // return success
  return { success: true }
})
