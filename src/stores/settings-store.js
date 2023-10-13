import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { firestoreDB } from '@/db/firebase'
import { doc, collection } from 'firebase/firestore'
import { useDocument } from 'vuefire'

const defaultSettings = {
  viewingMode: 'generatedRandom',
  newImageInterval: 60 * 60,
  newPresetInterval: 60 * 60 * 24 * 3,
  newPromptInterval: 60 * 60 * 24,
  sdEngineId: 'stable-diffusion-xl-1024-v1-0',
  imageWidth: 1344,
  imageHeight: 768,
  cfgScale: 7.0,
  sampler: 'K_DPMPP_2M',
  steps: 15
}

export const useSettingsStore = defineStore('settings', () => {
  // getters:
  const { data: siteDoc, promise: siteDocPromise } = useDocument(
    doc(collection(firestoreDB, `sites`), import.meta.env.VITE_PRISM_SITE_ID),
    {
      ssrKey: 'siteSettings'
    }
  )

  const hasLoadedSettings = ref(false)
  siteDocPromise.value.then(() => {
    hasLoadedSettings.value = true
  })

  const settings = computed(() => {
    const loadedSettings = siteDoc.value && siteDoc.value.settings ? siteDoc.value.settings : {}
    return { ...defaultSettings, ...loadedSettings }
  })

  return {
    settings,
    hasLoadedSettings
  }
})