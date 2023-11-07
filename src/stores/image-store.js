import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { firestoreDB } from '@/db/firebase'
import {
  collection,
  doc,
  getDocs,
  limit,
  startAfter,
  query,
  orderBy,
  updateDoc,
  where
} from 'firebase/firestore'
import { getFirebaseFunction } from '@/utils/get-firebase-function'
import { useCollection } from 'vuefire'
import { useUiStore } from '@/stores/ui-store'
import { useSettingsStore } from '@/stores/settings-store'
import { ToastProgrammatic as Toast } from 'buefy'
import { getPresetByName } from '@/utils/get-preset-by-name'

const recentImagesPerPage = 25
const favoriteImagesPerPage = 25
const secondsBetweenRecentImagesLoads = 1
const secondsBetweenFavoriteImagesLoads = 1
const largeFavoriteImagesListSize = 250

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

  // watch most recent image, and when it changes to a new image, add it to the array
  // of recent images (if we've already loaded some recent images)
  watch(mostRecentImage, (newMostRecentImage, oldMostRecentImage) => {
    if (newMostRecentImage?.url != oldMostRecentImage?.url && recentImages.value.length) {
      recentImages.value = [mostRecentImage.value, ...recentImages.value]
    }
  })

  // get favorite images
  const favoriteImages = ref([])
  const isLoadingFavoriteImages = ref(false)
  let lastLoadedFavoriteImagesAt = new Date(new Date().getTime() - 10000)
  const haveAllFavoriteImagesLoaded = ref(false)
  const lastFavoriteImage = ref(null)

  const nextFavoriteImagesQuery = computed(() => {
    return lastFavoriteImage.value
      ? query(
          collection(firestoreDB, `sites/${import.meta.env.VITE_PRISM_SITE_ID}/images`),
          where('isFavorite', '==', true),
          orderBy('createdAt', 'desc'),
          limit(favoriteImagesPerPage),
          startAfter(lastFavoriteImage.value)
        )
      : query(
          collection(firestoreDB, `sites/${import.meta.env.VITE_PRISM_SITE_ID}/images`),
          where('isFavorite', '==', true),
          orderBy('createdAt', 'desc'),
          limit(favoriteImagesPerPage)
        )
  })

  // get large list of favorites (for the mode where we're viewing favorites instead of
  // generating new images)
  const favoriteImagesForViewingQuery = computed(() => {
    return settingsStore.hasLoadedSettings && settingsStore.settings.viewingMode === 'favorites'
      ? query(
          collection(firestoreDB, `sites/${import.meta.env.VITE_PRISM_SITE_ID}/images`),
          where('isFavorite', '==', true),
          limit(largeFavoriteImagesListSize)
        )
      : null
  })

  const { data: favoriteImagesForViewing } = useCollection(favoriteImagesForViewingQuery, {
    ssrKey: 'favoriteImages'
  })

  // sort the favorite images randomly
  let currentRandomFavoriteImageIndex = ref(0)

  const sortedFavoriteImagesForViewing = computed(() => {
    return favoriteImagesForViewing.value
      ? favoriteImagesForViewing.value.sort(() => Math.random() - 0.5)
      : []
  })

  // return the image that should be shown in the large image viewer (which will either
  // be the most recent image or the next image in the list of randomly sorted favorite images)
  const imageToDisplay = computed(() => {
    return settingsStore.hasLoadedSettings &&
      settingsStore.settings.viewingMode === 'favorites' &&
      sortedFavoriteImagesForViewing.value.length
      ? sortedFavoriteImagesForViewing.value[currentRandomFavoriteImageIndex.value]
      : mostRecentImage.value
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

  // load the next page of favorite images
  const loadNextFavoriteImages = async () => {
    // stop here if we're already loading, if we've loaded all the images, or
    // if it hasn't been long enough since the last load
    if (
      isLoadingFavoriteImages.value ||
      haveAllFavoriteImagesLoaded.value ||
      new Date() - lastLoadedFavoriteImagesAt < 1000 * secondsBetweenFavoriteImagesLoads
    ) {
      return
    }
    isLoadingFavoriteImages.value = true
    lastLoadedFavoriteImagesAt = new Date()

    // load the next page of favorite images
    const { docs } = await getDocs(nextFavoriteImagesQuery.value)

    // if we didn't get any docs, we've loaded all the favorite images
    if (!docs.length) {
      haveAllFavoriteImagesLoaded.value = true
      isLoadingFavoriteImages.value = false
      return
    }

    // save the last favorite image
    lastFavoriteImage.value = docs[docs.length - 1]

    // map the docs to an array of objects with id and data
    const transformedDocs = docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })

    // add the docs to the array
    favoriteImages.value = [...favoriteImages.value, ...transformedDocs]

    // reset the flag
    isLoadingFavoriteImages.value = false
  }

  // show the next random favorite image
  const showNextFavoriteImage = () => {
    currentRandomFavoriteImageIndex.value =
      (currentRandomFavoriteImageIndex.value + 1) % sortedFavoriteImagesForViewing.value.length || 0
  }

  // toggle favorite
  const toggleFavorite = async (imageId, newIsFavorite) => {
    // attempt to find the image in the recent images array
    const recentImage = recentImages.value.find((image) => image.id === imageId)

    // if we found the image, update it
    if (recentImage) {
      recentImage.isFavorite = newIsFavorite
    }

    // if the image is now not a favorite, remove it from the favorite images array,
    // if it's there
    if (!newIsFavorite) {
      const favoriteImageIndex = favoriteImages.value.findIndex((image) => image.id === imageId)
      if (favoriteImageIndex !== -1) {
        favoriteImages.value = [
          ...favoriteImages.value.slice(0, favoriteImageIndex),
          ...favoriteImages.value.slice(favoriteImageIndex + 1)
        ]
      }
    } else {
      // else, if the image is now a favorite, reset the favorite images array (because
      // this is much cleaner than attempting to insert it in the correct place)
      favoriteImages.value = []
      haveAllFavoriteImagesLoaded.value = false
      lastFavoriteImage.value = null
    }

    // update the image in firestore
    const imageRef = doc(
      firestoreDB,
      `sites/${import.meta.env.VITE_PRISM_SITE_ID}/images/${imageId}`
    )
    await updateDoc(imageRef, {
      isFavorite: newIsFavorite
    })
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
    imageToDisplay,
    recentImages,
    isLoadingRecentImages,
    haveAllRecentImagesLoaded,
    favoriteImages,
    isLoadingFavoriteImages,
    haveAllFavoriteImagesLoaded,
    loadNextFavoriteImages,
    loadNextRecentImages,
    showNextFavoriteImage,
    toggleFavorite,
    generateImage
  }
})
