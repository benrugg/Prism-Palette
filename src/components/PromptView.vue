<template>
  <div class="promptContainer" @click="focusInput">
    <div
      class="promptInput"
      :class="{ isEmpty: isPromptEmpty }"
      contenteditable="plaintext-only"
      ref="promptInput"
      @input="handlePromptInput"
      @keydown="handleKeyDown"
      @keyup="handleKeyup"
      @dblclick.stop="doNothing"
    ></div>
    <PresetSelection
      v-model="selectedPresetName"
      @keydown="handleKeyDown"
      @keyup="handleKeyUp"
      @input="handleSelectedPresetChangeByUser"
    />
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui-store'
import { useImageStore } from '@/stores/image-store'
import { usePromptStore } from '@/stores/prompt-store'
import PresetSelection from '@/components/PresetSelection.vue'
import { noPresetName } from '@/data/preset-styles'

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
      selectedPresetName: noPresetName,
      selectedPresetNameDraft: noPresetName
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
    cyclePreviousPrompts(direction) {
      if (!this.hasBeenShownForMoreThanAnInstant) {
        return
      }

      const recentUserPrompts = this.promptStore.recentUserPrompts
      if (!recentUserPrompts || recentUserPrompts.length === 0) {
        return
      }

      let newIndex = this.recentPromptIndex + direction
      if (newIndex < 0) {
        newIndex = recentUserPrompts.length
      } else if (newIndex > recentUserPrompts.length) {
        newIndex = 0
      }

      this.recentPromptIndex = newIndex

      // if we're at the end of the list, then restore the prompt draft and the draft
      // preset selection
      if (newIndex === recentUserPrompts.length) {
        this.$refs.promptInput.innerText = this.promptDraft
        this.prompt = this.promptDraft
        this.selectedPresetName = this.selectedPresetNameDraft
      } else {
        // else, set the prompt to the recent prompt that we've just cycled to
        this.$refs.promptInput.innerText = recentUserPrompts[newIndex].text
        this.prompt = recentUserPrompts[newIndex].text

        // update the preset selection
        this.selectedPresetName = recentUserPrompts[newIndex].presetName || noPresetName
      }

      this.focusInputAtEnd()
    },
    handlePromptInput() {
      // store the prompt
      this.prompt = this.$refs.promptInput.innerText
      this.promptDraft = this.prompt

      // quit if we don't have any recent prompts
      if (!this.promptStore.recentUserPrompts || this.promptStore.recentUserPrompts.length === 0) {
        return
      }

      // if we were cycling through the recent prompts, reset the index so we start
      // back in the right place when we start cycling again. And also set the preset
      // draft to the current preset selection
      if (this.recentPromptIndex !== this.promptStore.recentUserPrompts.length) {
        this.recentPromptIndex = this.promptStore.recentUserPrompts.length
        this.selectedPresetNameDraft = this.selectedPresetName
      }
    },
    handleKeyDown(event) {
      // allow shift enters to add newlines, but prevent regular enter
      if (event.key == 'Enter' && !event.shiftKey) {
        event.preventDefault()
      }

      // quit here if the input ref doesn't exist anymore (this could happen during a transition)
      if (!this.$refs.promptInput) {
        return
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
    handleSelectedPresetChangeByUser(event) {
      // update the selected preset name for the draft prompt whenever the user
      // changes it (but not when it's set programmatically by the recent prompts)
      this.selectedPresetNameDraft = event.target.value
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
      this.imageStore.generateImage(sanitizedPrompt, this.selectedPresetName, 'user')
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
    'promptStore.recentUserPrompts': {
      handler() {
        if (
          !this.promptStore.recentUserPrompts ||
          this.promptStore.recentUserPrompts.length === 0
        ) {
          return
        }

        // set the recent prompt index so it'll start at the prompt draft
        this.recentPromptIndex = this.promptStore.recentUserPrompts.length

        // set the preset selection to the last used preset
        this.selectedPresetName = this.promptStore.recentUserPrompts[0].presetName || noPresetName
        this.selectedPresetNameDraft = this.selectedPresetName
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
