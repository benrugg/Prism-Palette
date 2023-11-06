<template>
  <Transition name="medium-fade">
    <img class="thumbnail" :src="src" v-show="isLoaded" @load="isLoaded = true" />
  </Transition>
  <img src="@/assets/empty-image.png" v-if="!isLoaded" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      isLoaded: false
    }
  }
}
</script>

<style lang="scss" scoped>
.thumbnail {
  cursor: pointer;
}
</style>
