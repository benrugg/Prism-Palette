<template>
  <div class="container"></div>
</template>

<script>
import { mapStores } from 'pinia'
import { useImageStore } from '@/stores/image-store'
import { useSettingsStore } from '@/stores/settings-store'

export default {
  data: () => {
    return {
      newImageIntervalId: null
    }
  },
  computed: {
    ...mapStores(useImageStore),
    ...mapStores(useSettingsStore)
  },
  methods: {
    startNewImageTimer() {
      this.stopNewImageTimer()
      this.newImageIntervalId = setInterval(() => {
        this.imageStore.showNextFavoriteImage()
      }, this.settingsStore.settings.newImageInterval * 1000)
    },
    stopNewImageTimer() {
      clearInterval(this.newImageIntervalId)
    }
  },
  watch: {
    'settingsStore.settings.viewingMode': {
      handler: function (newViewingMode) {
        // when we switch to viewing favorites, start the timer
        if (newViewingMode === 'favorites') {
          this.startNewImageTimer()
        }
      },
      immediate: true
    },
    'settingsStore.settings.newImageInterval': {
      handler: function () {
        // if the new image interval settings is changed, restart the timer
        if (this.settingsStore.settings.viewingMode === 'favorites') {
          this.startNewImageTimer()
        }
      }
    }
  },
  beforeUnmount() {
    this.stopNewImageTimer()
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
