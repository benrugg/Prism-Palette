<template>
  <div class="homeContainer">
    <ImageView />
    <Transition name="fade">
      <PromptView v-if="uiStore.isPromptViewShown" />
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

export default {
  components: {
    ImageView,
    HoverMenu,
    PromptView
  },
  computed: {
    ...mapStores(useUiStore)
  }
}
</script>

<style lang="scss" scoped>
.homeContainer {
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
}
</style>
