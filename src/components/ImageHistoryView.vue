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
      <span
        class="backButton material-symbols-outlined"
        @click="closeSelectedImage"
        v-if="selectedImageIndex !== null"
        >arrow_back</span
      >
      <span class="closeButton material-symbols-outlined" @click="close">close</span>
    </div>
    <Transition name="quick-fade">
      <div
        class="thumbnailGridContainer"
        ref="thumbnailGridContainer"
        v-show="selectedImageIndex === null"
      >
        <div class="thumbnailGrid">
          <ImageThumbnail
            v-for="(image, i) in viewedImages"
            :key="image.url"
            :src="image.url"
            :isFavorite="image.isFavorite"
            :isDeleting="!!image.isDeleting"
            @click="
              () => {
                if (!image.isDeleting) {
                  selectedImageIndex = i
                }
              }
            "
            @toggle-favorite="toggleFavorite(image.id, !image.isFavorite)"
          />
        </div>
      </div>
    </Transition>
    <Transition name="quick-fade">
      <div class="imageViewContainer" v-if="selectedImageIndex !== null">
        <ImageWithInfo
          :image="selectedImage"
          :isAtBeginning="isAtBeginningOfMainView"
          :isAtEnd="isAtEndOfMainView"
          @toggle-favorite="toggleFavorite(selectedImage.id, !selectedImage.isFavorite)"
          @previous-image="showPreviousImage"
          @next-image="showNextImage"
          @exit="closeSelectedImage"
          @delete-image="deleteImage(selectedImage.id)"
        />
      </div>
    </Transition>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui-store'
import { useImageStore } from '@/stores/image-store'
import ImageThumbnail from '@/components/ImageThumbnail.vue'
import ImageWithInfo from '@/components/ImageWithInfo.vue'

export default {
  components: {
    ImageThumbnail,
    ImageWithInfo
  },
  data: () => {
    return {
      selectedImageIndex: null,
      selectedCategory: 'Recent',
      categoryOptions: ['Recent', 'Favorites']
    }
  },
  computed: {
    ...mapStores(useUiStore),
    ...mapStores(useImageStore),
    viewedImages() {
      if (this.selectedCategory === 'Recent') {
        return this.imageStore.recentImages
      } else if (this.selectedCategory === 'Favorites') {
        return this.imageStore.favoriteImages
      } else {
        return []
      }
    },
    haveAllImagesInListLoaded() {
      if (this.selectedCategory === 'Recent') {
        return this.imageStore.haveAllRecentImagesLoaded
      } else if (this.selectedCategory === 'Favorites') {
        return this.imageStore.haveAllFavoriteImagesLoaded
      } else {
        return true
      }
    },
    selectedImage() {
      return this.selectedImageIndex !== null ? this.viewedImages?.[this.selectedImageIndex] : null
    },
    isAtBeginningOfMainView() {
      return this.selectedImageIndex === 0
    },
    isAtEndOfMainView() {
      return (
        this.selectedImageIndex === this.viewedImages.length - 1 && this.haveAllImagesInListLoaded
      )
    }
  },
  methods: {
    close() {
      this.uiStore.hideImageHistoryView()
    },
    handleScroll(event) {
      // if we are at the bottom of the scrollable area, load more images
      const bufferDistance = 5

      if (
        event.target.scrollHeight - event.target.scrollTop <=
        event.target.clientHeight + bufferDistance
      ) {
        this.loadNextImages()
      }
    },
    loadNextImages() {
      if (this.selectedCategory === 'Recent') {
        this.imageStore.loadNextRecentImages()
      } else if (this.selectedCategory === 'Favorites') {
        this.imageStore.loadNextFavoriteImages()
      }
    },
    async toggleFavorite(imageId, newIsFavorite) {
      try {
        await this.imageStore.toggleFavorite(imageId, newIsFavorite)
      } catch (error) {
        this.$buefy.toast.open({
          message: error.message,
          type: 'is-danger',
          duration: 10000
        })
      }
    },
    showPreviousImage() {
      this.selectedImageIndex -= 1
      if (this.selectedImageIndex < 0) {
        this.selectedImageIndex = this.viewedImages.length - 1
      }
    },
    showNextImage() {
      this.selectedImageIndex += 1
      if (this.selectedImageIndex >= this.viewedImages.length) {
        this.selectedImageIndex = 0
      }
    },
    closeSelectedImage() {
      this.selectedImageIndex = null
    },
    deleteImage(imageId) {
      this.imageStore.deleteImage(imageId)
      this.closeSelectedImage()
    }
  },
  watch: {
    selectedCategory() {
      // if we selected favorites, and favorites haven't been loaded yet, load them now
      if (this.selectedCategory === 'Favorites' && !this.imageStore.favoriteImages.length) {
        this.imageStore.loadNextFavoriteImages()
      }

      // exit the selected view, if we are in it
      this.closeSelectedImage()
    },
    'imageStore.favoriteImages': {
      handler(newFavoriteImages, oldFavoriteImages) {
        // if we are viewing favorites, and we have a selected image, and the list of favorites
        // gets smaller, exit the selected image view (because we have just toggled the
        // selected image to not be a favorite, and without this, we'll suddenly be shown a
        // different image or get an error)
        if (
          this.selectedCategory === 'Favorites' &&
          this.selectedImageIndex !== null &&
          newFavoriteImages.length < oldFavoriteImages.length
        ) {
          this.closeSelectedImage()
        }
      }
    }
  },
  mounted() {
    // if we haven't already loaded the recent images, do it now
    if (!this.imageStore.recentImages.length) {
      this.imageStore.loadNextRecentImages()
    }

    // add event listener for scrolling to bottom of image history
    this.$refs.thumbnailGridContainer.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    // remove scroll event listener
    this.$refs.thumbnailGridContainer.removeEventListener('scroll', this.handleScroll)
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
    padding: 1.2rem 0 0.8rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .backButton {
      font-size: min(min(13vw, 14vh), 4rem);
      color: #ffffff;
      position: absolute;
      top: 0.7rem;
      left: 0.7rem;
      cursor: pointer;
    }

    .closeButton {
      font-size: min(min(13vw, 14vh), 4rem);
      color: #ffffff;
      position: absolute;
      top: 0.7rem;
      right: 0.7rem;
      cursor: pointer;
    }
  }

  .thumbnailGridContainer {
    position: absolute;
    width: 100%;
    height: calc(100vh - 7rem);
    overflow-y: scroll;

    .thumbnailGrid {
      padding: 0 1.5rem 1.5rem 1.5rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1rem;
    }
  }

  .imageViewContainer {
    position: absolute;
    width: 100%;
    height: calc(100vh - 11rem);
    display: flex;
    justify-content: center;
    align-items: center;
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
