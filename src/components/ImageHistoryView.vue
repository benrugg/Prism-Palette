<template>
  <div class="imageHistoryContainer">
    <div class="header">
      <b-field>
        <b-select v-model="selectedCategory">
          <option v-for="option in categoryOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </b-select>
      </b-field>
      <span class="closeButton material-symbols-outlined" @click="close">close</span>
    </div>
    <div class="thumbnailContainer">
      <img
        class="thumbnail"
        v-for="image in imageStore.recentImages"
        :key="image.url"
        :src="image.url"
      />
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui-store'
import { useImageStore } from '@/stores/image-store'

export default {
  data: () => {
    return {
      selectedCategory: 'Recent',
      categoryOptions: ['Recent', 'Favorites']
    }
  },
  computed: {
    ...mapStores(useUiStore),
    ...mapStores(useImageStore)
  },
  methods: {
    close() {
      this.uiStore.hideImageHistoryView()
    }
  }
}
</script>

<style lang="scss" scoped>
.imageHistoryContainer {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);

  .header {
    padding: 1.2rem 0 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .closeButton {
      font-size: min(min(13vw, 14vh), 4rem);
      color: #ffffff;
      position: absolute;
      top: 0.7rem;
      right: 0.7rem;
      cursor: pointer;
    }
  }

  .thumbnailContainer {
    padding: 0 1.5rem 1.5rem 1.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

    .thumbnail {
      cursor: pointer;
    }
  }
}
</style>

<style lang="scss">
.imageHistoryContainer {
  select {
    font-family: var(--base-font);
    font-weight: 400;
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
    height: 2.7rem;
    color: var(--light-blue);
    border-color: var(--light-blue);
    background: none;

    &:hover {
      border-color: var(--light-blue-over);
      color: var(--light-blue-over);
    }

    &:focus {
      border-color: rgb(22, 48, 78);
      box-shadow: none;
    }

    &::placeholder {
      color: rgba(var(--light-blue), 0.5);
    }
  }

  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: var(--light-blue);
    top: 1.35rem;
  }
}
</style>
