// initialize the app
import { initializeApp } from 'firebase-admin/app'

const FIREBASE_CONFIG = JSON.parse(process.env.FIREBASE_CONFIG)

initializeApp({
  storageBucket: FIREBASE_CONFIG.storageBucket
})

// export functions:
export { deleteimage } from './images/delete-image.js'
export { generateimage } from './images/generate-image.js'
