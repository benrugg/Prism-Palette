<template>
  <div class="homeContainer" @click="showPromptViewIfReady" @dblclick="toggleFullScreen">
    <ImageView />
    <Transition name="fade">
      <PromptView v-if="uiStore.isPromptViewShown" />
    </Transition>
    <Transition name="fade">
      <SettingsView v-if="uiStore.isSettingsViewShown" />
    </Transition>
    <Transition name="delayed-fade-in">
      <div v-if="uiStore.isGeneratingImage">
        <LoadingSpinner />
      </div>
    </Transition>
    <VoiceDetection v-if="!isMobile() && !isBot()" />
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
import VoiceDetection from './VoiceDetection.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  components: {
    HoverMenu,
    ImageView,
    LoadingSpinner,
    PromptView,
    SettingsView,
    VoiceDetection
  },
  computed: {
    ...mapStores(useUiStore)
  },
  methods: {
    showPromptViewIfReady() {
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
    document.addEventListener('keydown', this.showPromptViewIfReady)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.showPromptViewIfReady)
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
