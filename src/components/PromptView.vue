<template>
  <div class="promptContainer" @click="focusInput">
    <div
      class="promptInput"
      :class="{ isEmpty: isPromptEmpty }"
      contenteditable="plaintext-only"
      ref="promptInput"
      @input="handlePromptInput"
      @keyup.escape="leave"
      @keydown="handleKeyDown"
      @keyup="handleKeyup"
      @dblclick.stop="doNothing"
    ></div>
    <PresetSelection v-model="selectedPresetName" />
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui-store'
import { useImageStore } from '@/stores/image-store'
import { usePromptStore } from '@/stores/prompt-store'
import PresetSelection from '@/components/PresetSelection.vue'

// const showRecentPromptsNewerThan = 1000 * 60 * 60 // 1 hour

export default {
  components: {
    PresetSelection
  },
  data: () => {
    return {
      prompt: '',
      promptDraft: '',
      recentPromptIndex: null,
      errorMessage: null,
      hasBeenShownForMoreThanAnInstant: false,
      keyDownAtStart: false,
      keyDownAtEnd: false,
      selectedPresetName: 'No Preset Style'
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
    doNothing() {
      // this just exists to capture the double click event and not let it bubble to HomeView
    },
    focusInput() {
      this.$refs.promptInput.focus()
    },
    focusInputAtEnd() {
      this.$refs.promptInput.focus()
      window.getSelection().selectAllChildren(this.$refs.promptInput)
      window.getSelection().collapseToEnd()
    },
    getCaretPosition() {
      this.$refs.promptInput.focus()
      let _range = document.getSelection().getRangeAt(0)
      let range = _range.cloneRange()
      range.selectNodeContents(this.$refs.promptInput)
      range.setEnd(_range.endContainer, _range.endOffset)
      return range.toString().length
    },
    isCaretAtStart() {
      return this.getCaretPosition() === 0
    },
    isCaretAtEnd() {
      // count the number of <br>, <br/> and <br /> tags in the innerHTML (because
      // the innerText doesn't include them)
      const brCount = (this.$refs.promptInput.innerHTML.match(/<br\s*\/?>/g) || []).length

      // subtract the number of <br> tags to the length of the innerText
      return this.getCaretPosition() === this.$refs.promptInput.innerText.length - brCount
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
        this.$refs.promptInput.innerText = this.promptDraft
        this.prompt = this.promptDraft
      } else {
        this.$refs.promptInput.innerText = recentPrompts[newIndex].text
        this.prompt = recentPrompts[newIndex].text
      }

      this.focusInputAtEnd()
    },
    handlePromptInput() {
      // store the prompt
      this.prompt = this.$refs.promptInput.innerText
      this.promptDraft = this.prompt

      // quit if we don't have any recent prompts
      if (!this.promptStore.recentPrompts || this.promptStore.recentPrompts.length === 0) {
        return
      }

      // if we were cycling through the recent prompts, reset the index so we start
      // back in the right place when we start cycling again
      if (this.recentPromptIndex !== this.promptStore.recentPrompts.length) {
        this.recentPromptIndex = this.promptStore.recentPrompts.length
      }
    },
    handleKeyDown(event) {
      // allow shift enters to add newlines, but prevent regular enter
      if (event.key == 'Enter' && !event.shiftKey) {
        event.preventDefault()
      }

      // keep track of whether the key was pressed at the start or end of the prompt
      this.keyDownAtStart = this.isCaretAtStart()
      this.keyDownAtEnd = this.isCaretAtEnd()
    },
    handleKeyup(event) {
      // generate image on enter, unless it's a shift enter
      if (event.key == 'Enter') {
        if (!event.shiftKey) {
          this.generateImage()
        }
      } else if (event.key === 'ArrowUp') {
        // if the key is up, and we're either on a non-multiline prompt, or we're
        // at the start of the prompt, then cycle up through the recent prompts
        if (!this.isPromptMultiline || this.keyDownAtStart) {
          this.cyclePreviousPrompts(1)
        }
      } else if (event.key === 'ArrowDown') {
        // if the key is down, and we're either on a non-multiline prompt, or we're
        // at the end of the prompt, then cycle down through the recent prompts
        if (!this.isPromptMultiline || this.keyDownAtEnd) {
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
    'promptStore.promptFromVoiceCommand': {
      handler() {
        if (!this.promptStore.promptFromVoiceCommand) {
          return
        }

        // replace the current prompt with the voice command prompt
        this.$refs.promptInput.innerHTML = this.promptStore.promptFromVoiceCommand

        // trigger the input event so the prompt/draft/cycle is stored
        this.handlePromptInput()

        // put the caret at the end of the line
        this.$nextTick(() => {
          this.focusInputAtEnd()
        })
      }
    },
    'promptStore.voiceCommandIncrement': {
      handler() {
        // generate the image
        // TODO: replace this timeout with something better
        setTimeout(() => {
          this.generateImage()
        }, 2000)
      }
    },
    'promptStore.recentPrompts': {
      handler() {
        if (!this.promptStore.recentPrompts || this.promptStore.recentPrompts.length === 0) {
          return
        }

        // NOTE: commenting this out, because it creates a race condition with the prompt
        //       being set by the voice command. Since it's not that important, it's easier
        //       to just leave it out for now, and replace it with the single line below

        // const mostRecentPrompt = this.promptStore.recentPrompts[0]
        // const mostRecentPromptCreatedAt = mostRecentPrompt.createdAt.toDate()
        // const recentPromptCutoff = new Date(new Date().getTime() - showRecentPromptsNewerThan)
        // if (mostRecentPromptCreatedAt > recentPromptCutoff) {
        //   this.$nextTick(() => {
        //     this.$refs.promptInput.innerText = mostRecentPrompt.text
        //     this.prompt = mostRecentPrompt.text
        //     this.recentPromptIndex = 0
        //     this.focusInputAtEnd()
        //   })
        // } else {
        //   this.recentPromptIndex = this.promptStore.recentPrompts.length
        // }

        this.recentPromptIndex = this.promptStore.recentPrompts.length
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
  gap: 2rem;
}

.promptInput {
  width: 80%;
  font-family: var(--poppins-font);
  font-size: min(min(11.5vw, 11.1vh), 4rem);
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
  text-shadow: 0 0 min(min(5vw, 5vh), 1.2rem) rgba(0, 0, 0, 0.6);
  outline: none;
  max-height: calc(100% - 308px);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &.isEmpty {
    height: auto;
  }
}
</style>
