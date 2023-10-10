<template>
  <div>
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

export default {
  computed: {
    ...mapStores(useImageStore)
  }
}
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 3em 0 0;
}

li {
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  color: white;
  font-weight: 600;
  letter-spacing: -0.01em;
}
</style>
