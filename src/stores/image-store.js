import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { firestoreDB } from '@/db/firebase'
import { collection, getDocs, limit, startAfter, query, orderBy } from 'firebase/firestore'
import { getFirebaseFunction } from '@/utils/get-firebase-function'
import { useCollection } from 'vuefire'
import { useUiStore } from '@/stores/ui-store'
import { useSettingsStore } from '@/stores/settings-store'
import { ToastProgrammatic as Toast } from 'buefy'
import { getPresetByName } from '@/utils/get-preset-by-name'

const recentImagesPerPage = 25
const secondsBetweenRecentImagesLoads = 1

export const useImageStore = defineStore('image', () => {
  // import other stores:
  const uiStore = useUiStore()
  const settingsStore = useSettingsStore()

  // getters:

  // get most recent image
  const mostRecentImageQuery = query(
    collection(firestoreDB, `sites/${import.meta.env.VITE_PRISM_SITE_ID}/images`),
    orderBy('createdAt', 'desc'),
    limit(1)
  )

  const { data: mostRecentImages } = useCollection(mostRecentImageQuery, {
    ssrKey: 'mostRecentImages'
  })

  const mostRecentImage = computed(() => {
    return mostRecentImages.value?.[0]
  })

  // get recent images
  const recentImages = ref([])
  const isLoadingRecentImages = ref(false)
  let lastLoadedRecentImagesAt = new Date(new Date().getTime() - 10000)
  const haveAllRecentImagesLoaded = ref(false)
  const lastRecentImage = ref(null)

  const nextRecentImagesQuery = computed(() => {
    return lastRecentImage.value
      ? query(
          collection(firestoreDB, `sites/${import.meta.env.VITE_PRISM_SITE_ID}/images`),
          orderBy('createdAt', 'desc'),
          limit(recentImagesPerPage),
          startAfter(lastRecentImage.value)
        )
      : query(
          collection(firestoreDB, `sites/${import.meta.env.VITE_PRISM_SITE_ID}/images`),
          orderBy('createdAt', 'desc'),
          limit(recentImagesPerPage)
        )
  })

  // watch most recent image, and add it to the array of recent images (if we've already
  // loaded some recent images)
  watch(mostRecentImage, () => {
    if (mostRecentImage.value && recentImages.value.length) {
      recentImages.value = [mostRecentImage.value, ...recentImages.value]
    }
  })

  // actions:

  // load the next page of recent images
  const loadNextRecentImages = async () => {
    // stop here if we're already loading, if we've loaded all the images, or
    // if it hasn't been long enough since the last load
    if (
      isLoadingRecentImages.value ||
      haveAllRecentImagesLoaded.value ||
      new Date() - lastLoadedRecentImagesAt < 1000 * secondsBetweenRecentImagesLoads
    ) {
      return
    }
    isLoadingRecentImages.value = true
    lastLoadedRecentImagesAt = new Date()

    // load the next page of recent images
    const { docs } = await getDocs(nextRecentImagesQuery.value)

    // if we didn't get any docs, we've loaded all the recent images
    if (!docs.length) {
      haveAllRecentImagesLoaded.value = true
      isLoadingRecentImages.value = false
      return
    }

    // save the last recent image
    lastRecentImage.value = docs[docs.length - 1]

    // map the docs to an array of objects with id and data
    const transformedDocs = docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })

    // add the docs to the array
    recentImages.value = [...recentImages.value, ...transformedDocs]

    // reset the flag
    isLoadingRecentImages.value = false
  }

  // generate image
  const generateImage = async (prompt, presetName, initiatedBy) => {
    // stop here if we're already generating an image
    if (uiStore.isGeneratingImage) {
      return
    }
    uiStore.isGeneratingImage = true

    // determine if this a new preset that wasn't used for the most recent image
    const isNewPreset = mostRecentImage.value?.presetName !== presetName

    // prepare the params
    const params = {
      prompt: prompt.trim(),
      preset: getPresetByName(presetName),
      siteId: import.meta.env.VITE_PRISM_SITE_ID,
      engine_id: settingsStore.settings.sdEngineId,
      width: settingsStore.settings.imageWidth,
      height: settingsStore.settings.imageHeight,
      cfg_scale: settingsStore.settings.cfgScale,
      sampler: settingsStore.settings.sampler,
      steps: settingsStore.settings.steps,
      negative_prompt: settingsStore.settings.useNegativePrompt
        ? settingsStore.settings.negativePrompt
        : null,
      isNewPreset,
      initiatedBy
    }

    // call the firebase function
    try {
      const generateImage = getFirebaseFunction('generateImage')
      await generateImage(params, { something: 'test' })
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
    mostRecentImage,
    recentImages,
    isLoadingRecentImages,
    haveAllRecentImagesLoaded,
    loadNextRecentImages,
    generateImage
  }
})
