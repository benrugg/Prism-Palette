<template>
  <div
    class="mainImage"
    :style="{ 'background-image': 'url(' + imageStore.mostRecentImage.url + ')' }"
    v-if="!imageStore.isLoadingImages"
  ></div>
</template>

<script>
import { mapStores } from 'pinia'
import { useImageStore } from '@/stores/image-store'

export default {
  computed: {
    ...mapStores(useImageStore)
  }
}
</script>

<style lang="scss" scoped>
.mainImage {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: fixed;
}
</style>
