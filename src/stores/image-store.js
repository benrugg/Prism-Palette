import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { firestoreDB } from '@/db/firebase'
import { collection, limit, query, orderBy } from 'firebase/firestore'
import { getFirebaseFunction } from '@/utils/get-firebase-function'
import { useCollection } from 'vuefire'
import { useUiStore } from '@/stores/ui-store'

export const useImageStore = defineStore('image', () => {
  // import other stores:
  const uiStore = useUiStore()

  // getters:
  const recentImagesQuery = computed(() => {
    return query(
      collection(firestoreDB, 'generatedImages'),
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

  const lastPrompt = ref('')

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
      prompt: prompt.trim()
    }

    // save the prompt
    lastPrompt.value = prompt.trim()

    // TODO: for debugging. remove this later:
    params.width = 512
    params.height = 512
    params.engine_id = 'stable-diffusion-v1-5'

    // call the firebase function
    const generateImageCall = getFirebaseFunction('generateImageCall')
    await generateImageCall(params)

    // TODO: handle errors

    // reset the flag
    uiStore.isGeneratingImage = false
  }

  return {
    recentImages,
    mostRecentImage,
    isLoadingImages,
    generateImage,
    lastPrompt
  }
})
