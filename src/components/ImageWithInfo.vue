<template>
  <div class="imageWithInfoContainer" :class="{ isFavorite, isLoaded }">
    <Transition name="medium-fade">
      <img :src="image.url" v-show="isLoaded" @load="isLoaded = true" />
    </Transition>
    <div class="info">
      <div v-if="originalPositivePrompts.length > 1">
        <strong>Prompts:</strong>
        <ul>
          <li v-for="(prompt, i) in originalPositivePrompts" :key="`${prompt}${i}`">
            {{ prompt.prompt }} {{ prompt.weight == 1 ? '' : `(weight: ${prompt.weight})` }}
          </li>
        </ul>
      </div>
      <div v-else>
        <strong>Prompt:</strong> {{ originalPositivePrompts[0].prompt }}
        {{
          originalPositivePrompts[0].weight == 1
            ? ''
            : `(weight: ${originalPositivePrompts[0].weight})`
        }}
      </div>
      <p><strong>Preset:</strong> {{ presetStyleName }}</p>
      <p><strong>Created:</strong> {{ createdAtDate }}</p>
    </div>
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
import { noPresetName } from '@/data/preset-styles'
import { getPromptFromPromptWithPreset } from '@/utils/get-prompt-from-prompt-with-preset'

export default {
  props: {
    image: {
      type: String,
      required: true
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
  computed: {
    isFavorite() {
      return this.image.isFavorite
    },
    originalPositivePrompts() {
      const positivePrompts = this.image.generationParams.text_prompts.filter(
        (prompt) => prompt.weight >= 0
      )

      return positivePrompts.map((prompt) => {
        return {
          prompt: getPromptFromPromptWithPreset(prompt.text, this.image.presetName),
          weight: prompt.weight
        }
      })
    },
    presetStyleName() {
      return (this.image.presetName || noPresetName) == noPresetName
        ? 'None'
        : this.image.presetName
    },
    createdAtDate() {
      return new Date(this.image.createdAt.toDate()).toLocaleString()
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
  width: fit-content;
  height: 100%;
  margin: 0 auto;

  img {
    display: block;
    height: 100%;
    object-fit: contain;
    user-select: none;
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.8rem 1.15rem;
    background-color: rgba(0, 0, 0, 0.6);

    div,
    p {
      font-size: 0.9rem;
      color: #ffffff;

      strong {
        font-weight: 600;
        color: inherit;
      }
    }

    ul {
      list-style: disc;
      margin-inline-start: 1.5rem;
    }
  }

  .favoriteIcon {
    position: absolute;
    bottom: 0.08rem;
    right: 0.4rem;
    color: #ffffff;
    line-height: 1em;
    font-size: 1.8rem;
    text-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.4);
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
    font-size: 4.2rem;
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
