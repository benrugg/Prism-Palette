<template>
  <div class="homeContainer" @click="showPromptViewIfReady" @dblclick="toggleFullScreen">
    <ImageView />
    <Transition name="fade">
      <PromptView v-if="uiStore.isPromptViewShown" />
    </Transition>
    <Transition name="fade">
      <SettingsView v-if="uiStore.isSettingsViewShown" />
    </Transition>
    <Transition name="fade">
      <ImageHistoryView v-if="uiStore.isImageHistoryViewShown" />
    </Transition>
    <Transition name="delayed-fade-in">
      <div v-if="uiStore.isGeneratingImage">
        <LoadingSpinner />
      </div>
    </Transition>
    <VoiceDetection v-if="!isMobile() && !isBot()" />
    <AutoGenerateImage v-if="!isMobile() && !isBot()" />
    <HoverMenu />
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import isbot from 'isbot'
import ImageView from '@/components/ImageView.vue'
import HoverMenu from '@/components/HoverMenu.vue'
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui-store'
import PromptView from '@/components/PromptView.vue'
import SettingsView from '@/components/SettingsView.vue'
import ImageHistoryView from '@/components/ImageHistoryView.vue'
import VoiceDetection from '@/components/VoiceDetection.vue'
import AutoGenerateImage from '@/components/AutoGenerateImage.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  components: {
    AutoGenerateImage,
    HoverMenu,
    ImageView,
    LoadingSpinner,
    ImageHistoryView,
    PromptView,
    SettingsView,
    VoiceDetection
  },
  computed: {
    ...mapStores(useUiStore)
  },
  methods: {
    handleKeyDown(event) {
      // on escape key, hide the active view
      if (event.key === 'Escape') {
        this.uiStore.hideActiveView()
      } else {
        // on any other key, show the prompt view, if it's ready to be shown
        this.showPromptViewIfReady()
      }
    },
    showPromptViewIfReady() {
      // show the prompt view if it's ready to be shown
      if (this.uiStore.isPromptViewReadyToBeShown) {
        this.uiStore.showPromptView()
      }
    },
    toggleFullScreen() {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        document.documentElement.requestFullscreen()
      }
    },
    isMobile() {
      return isMobile
    },
    isBot() {
      return isbot(navigator.userAgent)
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
}
</script>

<style lang="scss" scoped>
.homeContainer {
  width: 100vw;
  height: 100vh;
  background-color: #0c1121;
  position: relative;
}
</style>
