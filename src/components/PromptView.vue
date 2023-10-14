<template>
  <div class="promptContainer" @click="focusInput">
    <div
      class="promptInput"
      :class="{ isEmpty: isPromptEmpty }"
      contenteditable="plaintext-only"
      ref="promptInput"
      @input="prompt = $event.target.innerText"
      @keyup.escape="leave"
      @keydown.enter="handleEnterKeyDown"
      @keyup="handleKeyup"
    ></div>
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
      recentPromptIndex: null,
      errorMessage: null,
      hasBeenShownForMoreThanAnInstant: false
    }
  },
  computed: {
    ...mapStores(useUiStore),
    ...mapStores(useImageStore),
    ...mapStores(usePromptStore),
    isPromptEmpty() {
      return this.prompt.length === 0
    },
    isPromptEmptyWhenTrimmed() {
      return this.prompt.trim().length === 0
    },
    isPromptMultiline() {
      return this.prompt.trim().includes('\n')
    }
  },
  methods: {
    focusInput() {
      this.$refs.promptInput.focus()
    },
    focusInputAtEnd() {
      const el = this.$refs.promptInput
      el.focus()
      window.getSelection().selectAllChildren(el)
      window.getSelection().collapseToEnd()
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
        this.$refs.promptInput.innerText = ''
        this.prompt = ''
      } else {
        this.$refs.promptInput.innerText = recentPrompts[newIndex].text
        this.prompt = recentPrompts[newIndex].text
        this.focusInputAtEnd()
      }
    },
    handleEnterKeyDown(event) {
      // allow shift enters to add newlines, but prevent regular enter
      if (!event.shiftKey) {
        event.preventDefault()
      }
    },
    handleKeyup(event) {
      // generate image on enter, unless it's a shift enter
      if (event.key == 'Enter') {
        if (!event.shiftKey) {
          this.generateImage()
        }
      } else if (!this.isPromptMultiline) {
        // cycle through recent prompts on up/down arrow keys,
        // unless the prompt is multiline
        if (event.key === 'ArrowUp') {
          this.cyclePreviousPrompts(1)
        } else if (event.key === 'ArrowDown') {
          this.cyclePreviousPrompts(-1)
        }
      }
    },
    generateImage() {
      // validate and handle errors
      if (this.isPromptEmptyWhenTrimmed) {
        this.errorMessage = `Please describe what you'd like to create`
        return
      }

      // hide the prompt view
      this.uiStore.hidePromptView(false)

      // remove empty lines in the prompt
      let sanitizedPrompt = this.prompt.trim()
      sanitizedPrompt = sanitizedPrompt.replace(/\n\s*\n/g, '\n')

      // generate the image
      this.imageStore.generateImage(sanitizedPrompt)
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
          this.$nextTick(() => {
            this.$refs.promptInput.innerText = mostRecentPrompt.text
            this.prompt = mostRecentPrompt.text
            this.recentPromptIndex = 0
            this.focusInputAtEnd()
          })
        } else {
          this.recentPromptIndex = this.promptStore.recentPrompts.length
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
  line-height: 1.37;
  letter-spacing: -0.01em;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  word-break: break-word;
  text-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.6);
  outline: none;
  height: 76%;
  max-height: 76%;
  overflow: scroll;

  &.isEmpty {
    height: auto;
  }
}
</style>
