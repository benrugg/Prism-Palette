<template>
  <div class="voiceDetectionContainer">
    <p @click="stop" v-if="state.isListening">Stop</p>
    <p @click="start" v-else>Start</p>
  </div>
</template>

<script>
import { usePorcupine } from '@picovoice/porcupine-vue'

const porcupineModel = {
  publicPath: '/pico-voice/porcupine_params.pv'
}

const keywordModel = {
  publicPath: '/pico-voice/keyword_prism_en_wasm_v2_2_0.ppn',
  label: 'Prism'
}

export default {
  data() {
    const { state, init, start, stop, release } = usePorcupine()

    init(import.meta.env.VITE_PICO_VOICE_ACCESS_KEY, [keywordModel], porcupineModel)

    return {
      state,
      start,
      stop,
      release
    }
  },
  watch: {
    'state.keywordDetection': function (keyword) {
      if (keyword !== null) {
        console.log(`detected: ${keyword.label}`)
      }
    },
    'state.isLoaded': function (isLoaded) {
      console.log('isLoaded', isLoaded)
    },
    'state.isListening': function (isListening) {
      console.log('isListening', isListening)
    },
    'state.error': function (error) {
      console.error(error)
    }
  },
  onBeforeDestroy() {
    this.release()
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
