<template>
  <div class="homeContainer">
    <ImageView />
    <DebugView />
  </div>
</template>

<script>
import ImageView from '@/components/ImageView.vue'
import DebugView from '@/components/DebugView.vue'

export default {
  components: {
    ImageView,
    DebugView
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
