<template>
  <div class="imageContainer" :class="{ blurred: uiStore.doBlurMainImage }">
    <TransitionGroup :name="transitionName" :duration="transitionDuration">
      <div
        class="mainImage"
        :style="{ 'background-image': 'url(' + image.url + ')' }"
        v-for="image in imagesToDisplay"
        :key="image.url"
      ></div>
    </TransitionGroup>
    <img
      class="preloadingImage"
      :src="imageToLoad.url"
      @load="handleImageLoaded"
      v-if="imageToLoad"
    />
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import isbot from 'isbot'
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui-store'
import { useImageStore } from '@/stores/image-store'
import { useSettingsStore } from '@/stores/settings-store'
import { usePromptStore } from '@/stores/prompt-store'

const imageFadeInDuration = 800
const imageFadeOutDuration = 1100
const newImagePollingInterval = 3000

export default {
  data: () => {
    return {
      imagesToLoad: [],
      imagesToDisplay: [],
      generateNewImageIntervalId: null
    }
  },
  computed: {
    ...mapStores(useUiStore),
    ...mapStores(useImageStore),
    ...mapStores(useSettingsStore),
    ...mapStores(usePromptStore),
    imageToLoad() {
      return this.imagesToLoad.length > 0 ? this.imagesToLoad[0] : null
    },
    transitionName() {
      return this.isBot() ? 'none' : 'image-fade'
    },
    transitionDuration() {
      return {
        enter: this.isBot() ? 0 : imageFadeInDuration,
        leave: this.isBot() ? 0 : imageFadeOutDuration
      }
    }
  },
  methods: {
    handleImageLoaded() {
      // if we are already displaying an image, remove it
      if (this.imagesToDisplay.length > 0) {
        this.imagesToDisplay.shift()
      }

      // add the newly loaded image to the display
      this.imagesToDisplay.push(this.imageToLoad)

      // remove the image from the list of images to load
      this.imagesToLoad.shift()
    },
    isMobile() {
      return isMobile
    },
    isBot() {
      return isbot(navigator.userAgent)
    },
    generateNewImageWhenItsTime() {
      // if this is mobile or a bot, if we don't have a recent image, or if the
      // settings or prompts haven't loaded, stop here
      if (
        this.isMobile() ||
        this.isBot() ||
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
  watch: {
    'imageStore.mostRecentImage': {
      handler: function (newImage) {
        // stop here if we don't have a new image
        if (!newImage) {
          return
        }

        // if we have an image already, remove it
        if (this.imagesToLoad.length > 0) {
          this.imagesToLoad.shift()
        }

        // add the new image
        this.imagesToLoad.push(newImage)
      },
      immediate: true
    }
  },
  mounted() {
    // create an interval to poll for the time to generate a new image
    this.generateNewImageIntervalId = setInterval(
      this.generateNewImageWhenItsTime,
      newImagePollingInterval
    )
  },
  beforeUnmount() {
    // clear the interval to poll for the time to generate a new image
    clearInterval(this.generateNewImageIntervalId)
  }
}
</script>

<style lang="scss" scoped>
.imageContainer {
  transition: all 1.2s ease-out;

  &.blurred {
    filter: blur(2.2rem);
  }
}

.mainImage {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: fixed;
}

.preloadingImage {
  opacity: 0;
  position: fixed;
  height: 1px;
  width: 1px;
}
</style>
