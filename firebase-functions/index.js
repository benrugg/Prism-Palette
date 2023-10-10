// initialize the app
import { initializeApp } from 'firebase-admin/app'
initializeApp({
  storageBucket: 'prism-palette.appspot.com'
})

// export functions:
export { generateimagecall } from './images/generate-image-call.js'
// export { generateimagewebhook } from './images/generate-image-webhook.js'
