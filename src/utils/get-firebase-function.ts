import { getFunctions, httpsCallableFromURL } from 'firebase/functions'

const getFunctionUrl = (functionName: string): string => {
  if (import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_FUNCTIONS_EMULATOR === 'true') {
    return `http://127.0.0.1:5001/${
      import.meta.env.VITE_FIREBASE_PROJECT_ID
    }/us-central1/${functionName}`
  } else {
    return `https://${functionName}-${import.meta.env.VITE_FIREBASE_FUNCTIONS_URL_SUFFIX}`
  }
}

export const getFirebaseFunction = (functionName: string) => {
  return httpsCallableFromURL(getFunctions(), getFunctionUrl(functionName.toLowerCase()))
}
