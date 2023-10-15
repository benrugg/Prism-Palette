import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { firestoreDB } from '@/db/firebase'
import { collection, limit, query, orderBy } from 'firebase/firestore'
import { getFirebaseFunction } from '@/utils/get-firebase-function'
import { useCollection } from 'vuefire'
import { useUiStore } from '@/stores/ui-store'
import { useSettingsStore } from '@/stores/settings-store'
import { ToastProgrammatic as Toast } from 'buefy'

export const useImageStore = defineStore('image', () => {
  // import other stores:
  const uiStore = useUiStore()
  const settingsStore = useSettingsStore()

  // getters:
  const recentImagesQuery = computed(() => {
    return query(
      collection(firestoreDB, `sites/${import.meta.env.VITE_PRISM_SITE_ID}/images`),
      orderBy('createdAt', 'desc'),
      limit(10)
    )
  })

  const { data: recentImages, promise: recentImagesPromise } = useCollection(recentImagesQuery, {
    ssrKey: 'recentImages'
  })

  const isLoadingImages = ref(true)
  recentImagesPromise.value.then(() => {
    isLoadingImages.value = false
  })

  const mostRecentImage = computed(() => {
    return isLoadingImages.value ? null : recentImages.value[0]
  })

  // actions:

  // generate image
  const generateImage = async (prompt) => {
    // stop here if we're already generating an image
    if (uiStore.isGeneratingImage) {
      return
    }
    uiStore.isGeneratingImage = true

    // prepare the params
    const params = {
      prompt: prompt.trim(),
      siteId: import.meta.env.VITE_PRISM_SITE_ID,
      engine_id: settingsStore.settings.sdEngineId,
      width: settingsStore.settings.imageWidth,
      height: settingsStore.settings.imageHeight,
      cfg_scale: settingsStore.settings.cfgScale,
      sampler: settingsStore.settings.sampler,
      steps: settingsStore.settings.steps,
      negative_prompt: settingsStore.settings.useNegativePrompt
        ? settingsStore.settings.negativePrompt
        : null
    }

    // TODO: for debugging. remove this later:
    // params.width = 512
    // params.height = 512
    // params.engine_id = 'stable-diffusion-v1-5'

    // call the firebase function
    try {
      const generateImageCall = getFirebaseFunction('generateImageCall')
      await generateImageCall(params)
    } catch (error) {
      Toast.open({
        message: error.message,
        duration: 10000,
        type: 'is-danger'
      })
      console.error(error)
    }

    // reset the flag
    uiStore.isGeneratingImage = false
  }

  return {
    recentImages,
    mostRecentImage,
    isLoadingImages,
    generateImage
  }
})
