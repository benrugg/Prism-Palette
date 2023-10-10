import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { firestoreDB } from '@/db/firebase'
import { collection, limit, query, orderBy } from 'firebase/firestore'
import { useCollection } from 'vuefire'

export const useImageStore = defineStore('image', () => {
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

  return {
    recentImages,
    mostRecentImage,
    isLoadingImages
  }
})
