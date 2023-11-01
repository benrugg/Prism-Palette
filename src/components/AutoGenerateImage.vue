<template>
  <div class="container"></div>
</template>

<script>
import { mapStores } from 'pinia'
import { useImageStore } from '@/stores/image-store'
import { useSettingsStore } from '@/stores/settings-store'
import { usePromptStore } from '@/stores/prompt-store'

const pollingInterval = 3000
const delayBeforeStartingInterval = 4000

export default {
  data: () => {
    return {
      startIntervalTimeoutId: null,
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
    },
    startIntervalInAMoment() {
      // clear the timeout and interval, if they exist
      this.clearTimeoutAndInterval()

      // in a moment, create an interval to poll for the time to generate a new image
      this.startIntervalTimeoutId = setTimeout(() => {
        this.newImageIntervalId = setInterval(this.generateNewImageWhenItsTime, pollingInterval)
      }, delayBeforeStartingInterval)
    },
    clearTimeoutAndInterval() {
      clearTimeout(this.startIntervalTimeoutId)
      clearInterval(this.newImageIntervalId)
    }
  },
  mounted() {
    // if the window is in focus, start the interval after a moment
    if (document.hasFocus()) {
      this.startIntervalInAMoment()
    }

    // add a listener for window focus to start the interval after a moment
    window.addEventListener('focus', this.startIntervalInAMoment)

    // add a listener for window blur to clear the timeout and interval
    window.addEventListener('blur', this.clearTimeoutAndInterval)
  },
  beforeUnmount() {
    // clear timeout and interval
    this.clearTimeoutAndInterval()

    // remove the window focus and blur listeners
    window.removeEventListener('focus', this.startIntervalInAMoment)
    window.removeEventListener('blur', this.clearTimeoutAndInterval)
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
