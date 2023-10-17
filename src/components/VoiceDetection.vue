<template>
  <div class="voiceDetectionContainer">
    <!-- <p @click="stopPorcupine" v-if="state.isListening">Stop</p> -->
    <!-- <p @click="startPorcupine" v-else>Start</p> -->
  </div>
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
      cheetahWorker: null,
      isCheetahRunning: false,
      stopCheatahTimeout: null,
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
    handleTranscript(cheetahTranscript) {
      // if we've reached an endpoint, stop cheetah
      if (cheetahTranscript.isEndpoint) {
        // console.log('stopping at endpoint')
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
    startCheetah() {
      if (this.isCheetahRunning) {
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
      this.stopCheatahTimeout = setTimeout(() => {
        // console.log(`stopping after ${totalSecondsBeforeStopping} total seconds`)
        this.stopCheetah()
      }, totalSecondsBeforeStopping * 1000)
    },
    async stopCheetah() {
      if (!this.isCheetahRunning) {
        return
      }
      this.isCheetahRunning = false

      clearTimeout(this.stopCheatahTimeout)
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
        if (
          isLoaded &&
          this.settingsStore.hasLoadedSettings &&
          this.settingsStore.settings.isVoiceDetectionEnabled
        ) {
          this.startPorcupine()
        }
      }
    },
    // 'porcupineState.isListening': {
    //   handler(isListening) {
    //     if (isListening) {
    //       this.isPorcupineRunning = true
    //     } else {
    //       this.isPorcupineRunning = false
    //     }
    //   }
    // },
    'porcupineState.error': {
      handler(error) {
        this.$buefy.toast.open({
          message: `Voice detection for wake word had an error: ${error.message}`,
          type: 'is-danger',
          duration: 10000
        })
        console.error(error)
      }
    },
    'settingsStore.settings.isVoiceDetectionEnabled': {
      handler(isEnabled) {
        if (!this.hasPorcupineLoaded) {
          return
        }

        if (isEnabled) {
          this.startPorcupine()
        } else {
          this.stopPorcupine()
        }
      },
      immediate: true
    }
  },
  async mounted() {
    // create/load cheetah
    this.cheetahWorker = await CheetahWorker.create(
      import.meta.env.VITE_PICO_VOICE_ACCESS_KEY,
      this.handleTranscript,
      {
        publicPath: '/pico-voice/cheetah_params.pv'
      },
      emptySecondsBeforeStopping
    )
  },
  async onBeforeDestroy() {
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

  // p {
  //   color: #ffffff;
  //   font-family: var(--base-font);
  //   font-size: 1.5rem;
  //   font-weight: 400;
  //   margin: 1.3rem 2rem;
  //   padding: 0.3rem;
  //   cursor: pointer;
  // }
}
</style>
