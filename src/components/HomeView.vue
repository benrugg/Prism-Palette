<template>
  <div class="homeContainer">
    <ImageView />
    <!-- <DebugView /> -->
    <HoverMenu />
  </div>
</template>

<script>
import ImageView from '@/components/ImageView.vue'
// import DebugView from '@/components/DebugView.vue'
import HoverMenu from '@/components/HoverMenu.vue'

export default {
  components: {
    ImageView,
    // DebugView,
    HoverMenu
  }
}
</script>

<style lang="scss" scoped>
.homeContainer {
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
}
</style>
