<template>
  <div class="container" :class="{ isFavorite, isLoaded }">
    <Transition name="medium-fade">
      <img class="thumbnail" :src="src" v-show="isLoaded" @load="isLoaded = true" />
    </Transition>
    <img src="@/assets/empty-image.png" v-if="!isLoaded" />
    <div class="favoriteIcon" @click="toggleFavorite">
      <span class="material-symbols-outlined thicker" :class="{ filled: isFavorite }"
        >favorite</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      isLoaded: false
    }
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  .thumbnail {
    cursor: pointer;
  }

  img {
    display: block;
  }

  .favoriteIcon {
    position: absolute;
    bottom: 0.08rem;
    right: 0.4rem;
    color: #ffffff;
    line-height: 1em;
    font-size: 1.8rem;
    text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    opacity: 0;

    span {
      font-size: inherit;
    }
  }

  &.isLoaded:hover,
  &.isLoaded.isFavorite {
    .favoriteIcon {
      opacity: 1;
    }
  }
}
</style>
