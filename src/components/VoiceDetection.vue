<template>
  <div class="voiceDetectionContainer"></div>
</template>

<script>
import { usePorcupine } from '@picovoice/porcupine-vue'
import { WebVoiceProcessor } from '@picovoice/web-voice-processor'
import { CheetahWorker } from '@picovoice/cheetah-web'
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui-store'
import { usePromptStore } from '@/stores/prompt-store'
import { useSettingsStore } from '@/stores/settings-store'

const porcupineModel = {
  publicPath: '/pico-voice/porcupine_params.pv'
}

const keywordModel = {
  publicPath: '/pico-voice/keyword_prism_en_wasm_v2_2_0.ppn',
  label: 'Prism'
}

const emptySecondsBeforeStopping = 2
const totalSecondsBeforeStopping = 8
const delayBeforeLoadingLargeCheetahModel = 3000

const commandWordFilterRegex =
  /^(?:hey|please|yo|prism)?[,|.]?\s*(?:show|create|generate|make|draw)?[,|.]?\s*(?:me|us)?[,|.]?\s*(?:picture|a picture|image|an image)?[,|.]?\s*(?:of)?[,|.]?\s*(.*)$/i

export default {
  data() {
    const {
      state: porcupineState,
      init: initPorcupine,
      start: startPorcupine,
      stop: stopPorcupine,
      release: releasePorcupine
    } = usePorcupine()

    initPorcupine(import.meta.env.VITE_PICO_VOICE_ACCESS_KEY, [keywordModel], porcupineModel)

    return {
      porcupineState,
      startPorcupine,
      stopPorcupine,
      releasePorcupine,
      hasPorcupineLoaded: false,
      isPorcupineRunning: false,
      cheetahWorker: null,
      isCheetahRunning: false,
      initCheetahTimeoutId: null,
      stopCheatahTimeoutId: null,
      rawTranscript: ''
    }
  },
  computed: {
    ...mapStores(useUiStore),
    ...mapStores(usePromptStore),
    ...mapStores(useSettingsStore),
    processedTranscript() {
      // process the transcript to remove the command words and just leave the prompt:
      const match = this.rawTranscript.match(commandWordFilterRegex)
      if (match) {
        return match[1].trim()
      } else {
        return this.rawTranscript.trim()
      }
    }
  },
  methods: {
    startPorcupineIfEnabled() {
      // if porcupine is already running, or if the document doesn't have focus,
      // don't start porcupine
      if (this.isPorcupineRunning || document.hasFocus() === false) {
        return
      }

      // start porcupine if it's loaded and voice detection is enabled
      if (
        this.hasPorcupineLoaded &&
        this.settingsStore.hasLoadedSettings &&
        this.settingsStore.settings.isVoiceDetectionEnabled
      ) {
        this.startPorcupine()
      }
    },
    handleTranscript(cheetahTranscript) {
      // if we've reached an endpoint, stop cheetah
      if (cheetahTranscript.isEndpoint) {
        this.stopCheetah()
      }

      // if this is an empty transcript, ignore it
      const transcript = cheetahTranscript.transcript.trim()
      if (!transcript) {
        return
      }

      // add transcript to our running transcript
      this.rawTranscript += cheetahTranscript.transcript

      // handle transcript update
      this.promptStore.setPromptFromVoiceCommand(this.processedTranscript)
    },
    handleCompleteTranscript() {
      console.log('raw transcript:', this.rawTranscript)
      console.log('processed transcript:', this.processedTranscript)

      // set the prompt and tell the prompt store to use it
      this.promptStore.setPromptFromVoiceCommand(this.processedTranscript)
      this.promptStore.activatePromptFromVoiceCommand()
    },
    async initCheetah() {
      this.cheetahWorker = await CheetahWorker.create(
        import.meta.env.VITE_PICO_VOICE_ACCESS_KEY,
        this.handleTranscript,
        {
          publicPath: '/pico-voice/cheetah_params.pv'
        },
        emptySecondsBeforeStopping
      )
    },
    startCheetah() {
      if (this.isCheetahRunning || !this.cheetahWorker) {
        return
      }
      this.isCheetahRunning = true

      // reset the transcript
      this.rawTranscript = ''

      // show the prompt view
      this.uiStore.showPromptView()

      // start cheetah
      WebVoiceProcessor.subscribe(this.cheetahWorker)

      // stop cheetah after a while, if it hasn't stopped already
      this.stopCheatahTimeoutId = setTimeout(() => {
        this.stopCheetah()
      }, totalSecondsBeforeStopping * 1000)
    },
    async stopCheetah() {
      if (!this.isCheetahRunning || !this.cheetahWorker) {
        return
      }
      this.isCheetahRunning = false

      clearTimeout(this.stopCheatahTimeoutId)
      await this.cheetahWorker.flush()
      WebVoiceProcessor.unsubscribe(this.cheetahWorker)

      this.handleCompleteTranscript()
    }
  },
  watch: {
    'porcupineState.keywordDetection': {
      handler(keyword) {
        console.log(`wake word detected: ${keyword?.label}`)
        this.startCheetah()
      }
    },
    'porcupineState.isLoaded': {
      handler(isLoaded) {
        this.hasPorcupineLoaded = isLoaded
        this.startPorcupineIfEnabled()
      }
    },
    'porcupineState.isListening': {
      handler(isListening) {
        if (isListening) {
          this.isPorcupineRunning = true
        } else {
          this.isPorcupineRunning = false
        }
      }
    },
    'porcupineState.error': {
      handler(error) {
        this.$buefy.toast.open({
          message: `Voice detection for wake word had an error: ${error.message || error}`,
          type: 'is-danger',
          duration: 10000
        })
        console.error(error)
      }
    },
    'settingsStore.hasLoadedSettings': {
      handler() {
        this.startPorcupineIfEnabled()
      },
      immediate: true
    },
    'settingsStore.settings.isVoiceDetectionEnabled': {
      handler(isEnabled) {
        if (!this.hasPorcupineLoaded) {
          return
        }

        if (isEnabled) {
          this.startPorcupineIfEnabled()
        } else {
          this.stopPorcupine()
        }
      },
      immediate: true
    },
    'uiStore.isGeneratingImage': {
      handler(isGeneratingImage) {
        if (isGeneratingImage) {
          this.stopPorcupine()
        } else {
          this.startPorcupineIfEnabled()
        }
      }
    }
  },
  mounted() {
    // add a listener for window focus to start porcupine if it's enabled
    window.addEventListener('focus', this.startPorcupineIfEnabled)

    // add a listener for window blur to stop porcupine
    window.addEventListener('blur', this.stopPorcupine)

    // initialize cheetah in a moment
    this.initCheetahTimeoutId = setTimeout(() => {
      this.initCheetah()
    }, delayBeforeLoadingLargeCheetahModel)
  },
  async onBeforeDestroy() {
    // remove the window focus and blur listeners
    window.removeEventListener('focus', this.startPorcupineIfEnabled)
    window.removeEventListener('blur', this.stopPorcupine)

    // clear the timeout to load cheetah, in case it hasn't fired yet
    clearTimeout(this.initCheatahTimeoutId)

    // stop porcupine and cheetah
    this.stopPorcupine()
    this.releasePorcupine()
    this.stopCheetah()
    await this.cheetahWorker.release()
  }
}
</script>

<style lang="scss" scoped>
.voiceDetectionContainer {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
