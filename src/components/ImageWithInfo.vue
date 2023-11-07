<template>
  <div class="imageWithInfoContainer" :class="{ isFavorite, isLoaded }">
    <Transition name="medium-fade">
      <img :src="src" v-show="isLoaded" @load="isLoaded = true" />
    </Transition>
    <div class="favoriteIcon" @click="toggleFavorite">
      <span class="material-symbols-outlined thicker" :class="{ filled: isFavorite }"
        >favorite</span
      >
    </div>
    <div
      class="arrowButton left"
      :class="{ disabled: isAtBeginning }"
      @click="previousImage"
      @dblclick.stop="void 0"
    >
      <span class="material-symbols-outlined">arrow_circle_left</span>
    </div>
    <div
      class="arrowButton right"
      :class="{ disabled: isAtEnd }"
      @click="nextImage"
      @dblclick.stop="void 0"
    >
      <span class="material-symbols-outlined">arrow_circle_right</span>
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
    isAtBeginning: {
      type: Boolean,
      default: false
    },
    isAtEnd: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-favorite', 'next-image', 'previous-image', 'exit'],
  data: () => {
    return {
      isLoaded: false
    }
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite')
    },
    nextImage() {
      if (!this.isAtEnd) {
        this.$emit('next-image')
      }
    },
    previousImage() {
      if (!this.isAtBeginning) {
        this.$emit('previous-image')
      }
    },
    exit() {
      this.$emit('exit')
    },
    handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        this.previousImage()
      } else if (event.key === 'ArrowRight') {
        this.nextImage()
      } else if (event.key === 'Escape') {
        event.stopPropagation() // prevent exiting the image history view
        this.exit()
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown, true) // use the capture phase, to get this event before the HomeView
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, true)
  }
}
</script>

<style lang="scss" scoped>
.imageWithInfoContainer {
  position: relative;
  width: 100%;
  height: 100%;

  img {
    display: block;
    width: auto;
    height: 100%;
    object-fit: contain;
    margin: 0 auto;
    user-select: none;
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

  .arrowButton {
    position: absolute;
    top: 50%;
    color: #ffffff;
    cursor: pointer;
    font-size: 3.6rem;
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
    transform: translateY(-50%);
    user-select: none;
    transition: opacity 0.3s ease-in-out;

    span {
      font-size: inherit;
    }

    &.left {
      left: 1.5rem;
    }

    &.right {
      right: 1.5rem;
    }

    &.disabled {
      opacity: 0.4;
      cursor: default;
      pointer-events: none;
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
