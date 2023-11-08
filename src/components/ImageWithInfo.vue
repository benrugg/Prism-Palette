<template>
  <div class="imageWithInfoContainer" :class="{ isFavorite, isLoaded }">
    <Transition name="medium-fade">
      <img :src="image.url" v-show="isLoaded" @load="onImageLoaded" />
    </Transition>
    <img src="@/assets/empty-image.png" v-if="!isLoaded" />

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

    <div class="moreButtonContainer">
      <b-dropdown aria-role="list" position="is-bottom-left" animation="very-quick-fade">
        <template #trigger>
          <div class="moreButton" @dblclick.stop="void 0">
            <span class="material-symbols-outlined thicker">more_vert</span>
          </div>
        </template>
        <b-dropdown-item aria-role="listitem" @click="handleDeleteImageClick"
          ><span class="deleteIcon material-symbols-outlined thicker">delete</span> Delete
          Image</b-dropdown-item
        >
      </b-dropdown>
    </div>

    <div class="info">
      <div class="textContainer">
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
      <div class="actionContainer">
        <div class="favoriteIcon" @click="toggleFavorite">
          <span class="material-symbols-outlined" :class="{ filled: isFavorite }">favorite</span>
        </div>
      </div>
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
  emits: ['toggle-favorite', 'next-image', 'previous-image', 'exit', 'delete-image'],
  data: () => {
    return {
      isLoaded: false,
      isModalShown: false
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
    onImageLoaded() {
      this.$nextTick(() => {
        this.isLoaded = true
      })
    },
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
        // stop event propagation, to prevent exiting the image history view
        event.stopPropagation()

        // if a modal is not shown, exit
        if (!this.isModalShown) {
          this.exit()
        }
      }
    },
    handleDeleteImageClick() {
      this.isModalShown = true

      this.$buefy.dialog.confirm({
        title: 'Delete this image?',
        message: `Are you sure you want to delete this image?<br /><strong>This can't be undone.</strong>`,
        confirmText: 'Yes, Delete',
        cancelText: 'Cancel',
        type: 'is-danger',
        hasIcon: false,
        onConfirm: this.confirmDelete,
        onCancel: this.cancelDelete
      })
    },
    confirmDelete() {
      this.isModalShown = false
      this.$emit('delete-image')
    },
    cancelDelete() {
      this.isModalShown = false
    }
  },
  watch: {
    image() {
      this.isLoaded = false
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
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0.8rem 1.15rem;
    background-color: rgba(0, 0, 0, 0.6);

    .textContainer {
      flex-grow: 1;

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

    .actionContainer {
      flex-grow: 0;

      .favoriteIcon {
        color: #ffffff;
        line-height: 1em;
        font-size: 2.2rem;
        text-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.4);
        cursor: pointer;

        span {
          display: block;
          font-size: inherit;
        }
      }
    }
  }

  .moreButtonContainer {
    position: absolute;
    top: 1.2rem;
    right: 1rem;

    .moreButton {
      color: #ffffff;
      font-size: 2.7rem;
      cursor: pointer;
      text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.7);
      user-select: none;

      span {
        font-size: inherit;
        display: block;
        letter-spacing: -0.2em;
      }
    }

    .deleteIcon {
      position: relative;
      top: 0.45rem;
      margin-top: -0.5rem;
      margin-right: 0.1rem;
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
}
</style>
