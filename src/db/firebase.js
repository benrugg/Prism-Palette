import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// import { getAuth, connectAuthEmulator } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: `${import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

export const firebaseApp = initializeApp(firebaseConfig)
export const firestoreDB = getFirestore(firebaseApp)
export const firebaseStorage = getStorage(firebaseApp)
// export const firebaseAuth = getAuth(firebaseApp)

// NOTE: To run the app locally on a new machine, follow these steps:
//    1. Uncomment the following line
//    2. View the console output and copy the token
//    3. Add the token in the Firebase Console > App Check > Apps > Manage Debug Tokens
//    4. Add the token in .env.local as VITE_FIREBASE_APPCHECK_DEBUG_TOKEN
//    5. Comment the following line again
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = true

// in a dev environment, refresh the token every 15 minutes
if (import.meta.env.DEV) {
  const appCheckDebugTokenRefreshTime = window.localStorage.getItem(
    'firebaseAppCheckDebugTokenRefreshTime'
  )
  if (
    !appCheckDebugTokenRefreshTime ||
    Date.now() - parseInt(appCheckDebugTokenRefreshTime) > 1000 * 60 * 15
  ) {
    if (import.meta.env.VITE_FIREBASE_APPCHECK_DEBUG_TOKEN) {
      window.localStorage.setItem('firebaseAppCheckDebugTokenRefreshTime', Date.now())
      self.FIREBASE_APPCHECK_DEBUG_TOKEN = import.meta.env.VITE_FIREBASE_APPCHECK_DEBUG_TOKEN
    }
  }
}

// initialize app check
initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_FIREBASE_APPCHECK_RECAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true
})

// NOTE: To use firestore, auth and functions emulators, update these variables in .env.local
//       You can use them in any combination, as long as you have the emulators running.
if (import.meta.env.DEV) {
  if (import.meta.env.VITE_USE_FIREBASE_FIRESTORE_EMULATOR === 'true') {
    connectFirestoreEmulator(firestoreDB, 'localhost', 8100)
  }
  // if (import.meta.env.VITE_USE_FIREBASE_AUTH_EMULATOR === 'true') {
  //   connectAuthEmulator(firebaseAuth, 'http://localhost:9099')
  // }
}
