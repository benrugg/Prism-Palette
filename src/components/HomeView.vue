<template>
  <div class="homeContainer" @click="showPromptViewIfReady">
    <ImageView />
    <Transition name="fade">
      <PromptView v-if="uiStore.isPromptViewShown" />
    </Transition>
    <Transition name="delayed-fade-in">
      <div v-if="uiStore.isGeneratingImage">
        <LoadingSpinner />
      </div>
    </Transition>
    <HoverMenu />
  </div>
</template>

<script>
import ImageView from '@/components/ImageView.vue'
import HoverMenu from '@/components/HoverMenu.vue'
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui-store'
import PromptView from '@/components/PromptView.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  components: {
    HoverMenu,
    ImageView,
    LoadingSpinner,
    PromptView
  },
  computed: {
    ...mapStores(useUiStore)
  },
  methods: {
    showPromptViewIfReady() {
      if (this.uiStore.isPromptViewReadyToBeShown) {
        this.uiStore.showPromptView()
      }
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
