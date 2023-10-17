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

const porcupineModel = {
  publicPath: '/pico-voice/porcupine_params.pv'
}

const keywordModel = {
  publicPath: '/pico-voice/keyword_prism_en_wasm_v2_2_0.ppn',
  label: 'Prism'
}

const emptySecondsBeforeStopping = 2
const totalSecondsBeforeStopping = 8

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
      transcript: '',
      cheetahWorker: null,
      isCheetahRunning: false,
      stopCheatahTimeout: null
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
      this.transcript += cheetahTranscript.transcript
    },
    startCheetah() {
      if (this.isCheetahRunning) {
        return
      }
      this.isCheetahRunning = true

      this.transcript = ''
      WebVoiceProcessor.subscribe(this.cheetahWorker)

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

      console.log('transcript:', this.transcript)
    }
  },
  watch: {
    'porcupineState.keywordDetection': function (keyword) {
      console.log(`wake word detected: ${keyword?.label}`)
      this.startCheetah()
    },
    'porcupineState.isLoaded': function (isLoaded) {
      if (isLoaded) {
        this.startPorcupine()
      }
    },
    // 'porcupineState.isListening': function (isListening) {
    //   if (isListening) {
    //     this.isPorcupineRunning = true
    //   } else {
    //     this.isPorcupineRunning = false
    //   }
    // },
    'porcupineState.error': function (error) {
      this.$buefy.toast.open({
        message: `Voice detection for wake word had an error: ${error.message}`,
        type: 'is-danger',
        duration: 10000
      })
      console.error(error)
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

  p {
    color: #ffffff;
    font-family: var(--base-font);
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1.3rem 2rem;
    padding: 0.3rem;
    cursor: pointer;
  }
}
</style>
