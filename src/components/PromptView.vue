<template>
  <div class="promptContainer">
    <input
      class="promptInput"
      type="text"
      v-model="prompt"
      ref="promptInput"
      @keyup.escape="leave"
      @keyup.enter="generateImage"
    />
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui-store'
import { useImageStore } from '@/stores/image-store'

export default {
  data: () => {
    return {
      prompt: '',
      errorMessage: null
    }
  },
  computed: {
    ...mapStores(useUiStore),
    ...mapStores(useImageStore)
  },
  methods: {
    focusInput() {
      this.$refs.promptInput.focus()
    },
    leave() {
      this.uiStore.hidePromptView()
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
