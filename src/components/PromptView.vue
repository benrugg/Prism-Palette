<template>
  <div class="promptContainer" @click="focusInput">
    <input
      class="promptInput"
      type="text"
      v-model="prompt"
      ref="promptInput"
      @keyup.escape="leave"
      @keyup.enter="generateImage"
      @keyup.arrow-up="cyclePreviousPrompts(1)"
      @keyup.arrow-down="cyclePreviousPrompts(-1)"
    />
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui-store'
import { useImageStore } from '@/stores/image-store'
import { usePromptStore } from '@/stores/prompt-store'

const showRecentPromptsNewerThan = 1000 * 60 * 60 // 1 hour

export default {
  data: () => {
    return {
      prompt: '',
      recentPromptIndex: 0,
      errorMessage: null,
      hasBeenShownForMoreThanAnInstant: false
    }
  },
  computed: {
    ...mapStores(useUiStore),
    ...mapStores(useImageStore),
    ...mapStores(usePromptStore)
  },
  methods: {
    focusInput() {
      this.$refs.promptInput.focus()
    },
    leave() {
      this.uiStore.hidePromptView()
    },
    cyclePreviousPrompts(direction) {
      if (!this.hasBeenShownForMoreThanAnInstant) {
        return
      }

      const recentPrompts = this.promptStore.recentPrompts
      if (!recentPrompts || recentPrompts.length === 0) {
        return
      }

      let newIndex = this.recentPromptIndex + direction
      if (newIndex < 0) {
        newIndex = recentPrompts.length
      } else if (newIndex > recentPrompts.length) {
        newIndex = 0
      }

      this.recentPromptIndex = newIndex

      if (newIndex === recentPrompts.length) {
        this.prompt = ''
      } else {
        this.prompt = recentPrompts[newIndex].text
      }
    },
    generateImage() {
      // TODO: handle errors
      // validate and handle errors
      if (this.prompt.trim().length === 0) {
        this.errorMessage = `Please describe what you'd like to create`
        return
      }

      // hide the prompt view
      this.uiStore.hidePromptView(false)

      // generate the image
      this.imageStore.generateImage(this.prompt)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.focusInput()
    })
    setTimeout(() => {
      this.hasBeenShownForMoreThanAnInstant = true
    }, 100)
  },
  watch: {
    'uiStore.promptViewFocusIncrement': {
      handler() {
        this.focusInput()
      }
    },
    'promptStore.recentPrompts': {
      handler() {
        if (!this.promptStore.recentPrompts || this.promptStore.recentPrompts.length === 0) {
          return
        }
        const mostRecentPrompt = this.promptStore.recentPrompts[0]
        const mostRecentPromptCreatedAt = mostRecentPrompt.createdAt.toDate()
        const recentPromptCutoff = new Date(new Date().getTime() - showRecentPromptsNewerThan)
        if (mostRecentPromptCreatedAt > recentPromptCutoff) {
          this.prompt = mostRecentPrompt.text
          this.recentPromptIndex = 0
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.promptContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.promptInput {
  width: 80%;
  font-family: var(--poppins-font);
  font-size: 4rem;
  font-weight: 200;
  letter-spacing: -0.01em;
  color: #ffffff;
  text-align: center;
  appearance: none;
  border: none;
  background-color: transparent;
  text-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.6);
  outline: none;
  // transform: translateY(-1.5rem);
}
</style>
