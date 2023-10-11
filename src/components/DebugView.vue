<template>
  <div class="debugContainer">
    <div class="prompt">
      <input type="text" v-model="prompt" @keyup.enter="createNewImage" />
      <b-loading :is-full-page="false" v-model="isGenerating" />
    </div>
    <ul>
      <li v-for="image in imageStore.recentImages" :key="image.id">
        {{ image.url }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useImageStore } from '@/stores/image-store'
import { getFirebaseFunction } from '@/utils/get-firebase-function'

export default {
  data: () => {
    return {
      prompt: '',
      isGenerating: false
    }
  },
  computed: {
    ...mapStores(useImageStore),
    generateSmallSize() {
      return this.$route.query.test === '1' || this.$route.query.test === 'true'
    }
  },
  methods: {
    async createNewImage() {
      if (this.isGenerating) {
        return
      }
      this.isGenerating = true

      const params = {
        prompt: this.prompt
      }

      if (this.generateSmallSize) {
        ;(params.width = 512), (params.height = 512), (params.engine_id = 'stable-diffusion-v1-5')
      }

      this.prompt = ''

      const generateImageCall = getFirebaseFunction('generateImageCall')
      await generateImageCall(params)

      this.isGenerating = false
    }
  }
}
</script>

<style lang="scss" scoped>
.debugContainer {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
}

ul {
  list-style: none;
  padding: 0.8em 1em;
  margin: 3em 0 0;
  background-color: rgba(0, 0, 0, 0.3);
  max-width: 600px;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }
}

li {
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  color: white;
  font-weight: 600;
  letter-spacing: -0.01em;

  &:last-child {
    border-bottom: none;
  }
}

.prompt {
  margin-top: 3em;
  width: 100%;
  max-width: 800px;
  padding: 0 1em;
  position: relative;

  input {
    width: 100%;
    font-size: 20px;
    padding: 0.7em;
    font-family: var(--figtree-font);
    font-weight: 300;
  }
}
</style>
