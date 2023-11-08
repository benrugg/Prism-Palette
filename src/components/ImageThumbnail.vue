<template>
  <div class="imageThumbnailContainer" :class="{ isFavorite, isLoaded, isDeleting }">
    <Transition name="medium-fade">
      <img class="thumbnail" :src="src" v-show="isLoaded" @load="isLoaded = true" />
    </Transition>
    <img src="@/assets/empty-image.png" v-if="!isLoaded" />
    <div class="favoriteIcon" @click="toggleFavorite">
      <span class="material-symbols-outlined thicker" :class="{ filled: isFavorite }"
        >favorite</span
      >
    </div>
    <div class="deleteIcon pulseFadeInAndOut" v-if="isDeleting">
      <span class="material-symbols-outlined">delete</span>
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
    },
    isDeleting: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-favorite'],
  data: () => {
    return {
      isLoaded: false
    }
  },
  methods: {
    toggleFavorite(event) {
      event.stopPropagation()
      this.$emit('toggle-favorite')
    }
  }
}
</script>

<style lang="scss" scoped>
.imageThumbnailContainer {
  position: relative;

  .thumbnail {
    cursor: pointer;
  }

  img {
    display: block;
    width: auto;
    border-radius: 3px;
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

  .deleteIcon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 3.5rem;

    span {
      font-size: inherit;
      display: block;
    }
  }

  &.isDeleting {
    .thumbnail {
      cursor: default;
    }

    img {
      filter: blur(0.5rem);
      opacity: 0.6;
    }

    .favoriteIcon {
      display: none;
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
