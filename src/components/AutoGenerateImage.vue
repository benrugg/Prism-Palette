<template>
  <div class="container"></div>
</template>

<script>
import { mapStores } from 'pinia'
import { useImageStore } from '@/stores/image-store'
import { useSettingsStore } from '@/stores/settings-store'
import { usePromptStore } from '@/stores/prompt-store'

const pollingInterval = 3000

export default {
  data: () => {
    return {
      newImageIntervalId: null
    }
  },
  computed: {
    ...mapStores(useImageStore),
    ...mapStores(useSettingsStore),
    ...mapStores(usePromptStore)
  },
  methods: {
    generateNewImageWhenItsTime() {
      // if we don't have a recent image, or if the settings or prompts haven't loaded, stop here
      if (
        !this.imageStore.mostRecentImage ||
        !this.settingsStore.hasLoadedSettings ||
        this.promptStore.recentPrompts.length === 0
      ) {
        return
      }

      // compare the last image's timestamp + settings.newImageInterval to the current time,
      // and if it's time to generate a new image, do it
      if (
        this.imageStore.mostRecentImage.createdAt.toDate() <
        new Date(Date.now() - this.settingsStore.settings.newImageInterval * 1000)
      ) {
        this.imageStore.generateImage(this.promptStore.recentPrompts[0].text)
      }
    }
  },
  mounted() {
    // create an interval to poll for the time to generate a new image
    this.newImageIntervalId = setInterval(this.generateNewImageWhenItsTime, pollingInterval)
  },
  beforeUnmount() {
    // clear the interval to poll for the time to generate a new image
    clearInterval(this.newImageIntervalId)
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
