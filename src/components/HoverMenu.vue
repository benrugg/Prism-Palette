<template>
  <div class="menuContainer" :class="{ isVisible, isMinimized: !uiStore.isMenuMaximized }">
    <div
      class="buttonContainer"
      @pointerover="handlePointerOver"
      @pointerleave="handlePointerLeave"
    >
      <span class="menuIcon">
        <span class="material-symbols-outlined" @click="showPromptView">edit</span>
      </span>
      <span class="menuIcon">
        <span class="material-symbols-outlined">display_settings</span>
      </span>
      <span class="menuIcon">
        <span class="material-symbols-outlined" @click="toggleFullScreen">{{
          isFullScreen ? 'close_fullscreen' : 'pan_zoom'
        }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useUiStore } from '@/stores/ui-store'

const visibilityDuration = 1100

export default {
  data: () => {
    return {
      isVisible: false,
      isHovered: false,
      isFullScreen: false,
      visibilityTimeoutID: null
    }
  },
  computed: {
    ...mapStores(useUiStore)
  },
  methods: {
    clearVisibilityTimer() {
      clearTimeout(this.visibilityTimeoutID)
    },
    startVisibilityTimer() {
      this.clearVisibilityTimer()
      if (this.isHovered) {
        return
      }
      this.visibilityTimeoutID = setTimeout(() => {
        this.isVisible = false
      }, visibilityDuration)
    },
    handlePointerMove() {
      this.isVisible = true
      this.startVisibilityTimer()
    },
    handlePointerOver() {
      this.isVisible = true
      this.isHovered = true
      this.clearVisibilityTimer()
    },
    handlePointerLeave() {
      this.isHovered = false
      this.startVisibilityTimer()
    },
    showPromptView() {
      this.uiStore.showPromptView()
    },
    toggleFullScreen() {
      if (this.isFullScreen) {
        document.exitFullscreen()
      } else {
        document.documentElement.requestFullscreen()
      }
    },
    handleFullScreenChange() {
      this.isFullScreen = document.fullscreenElement
    }
  },
  mounted() {
    // show the menu when the mouse moves
    document.addEventListener('pointermove', this.handlePointerMove)

    // handle fullscreen events
    this.isFullScreen = document.fullscreenElement
    document.addEventListener('fullscreenchange', this.handleFullScreenChange)
  },
  beforeUnmount() {
    // remove event listeners
    document.removeEventListener('pointermove', this.handlePointerMove)
    document.removeEventListener('fullscreenchange', this.handleFullScreenChange)
  }
}
</script>

<style lang="scss" scoped>
$ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);

.menuContainer {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;

  &.isVisible {
    opacity: 1;
  }

  &.isMinimized {
    .buttonContainer {
      top: 94%;
    }

    .menuIcon {
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
      margin: 0 1rem;
      text-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.3);
    }
  }

  .buttonContainer {
    position: absolute;
    top: 50%;
    transition: all 0.5s $ease-out-cubic;
    transform: translateY(-50%);
    pointer-events: all;
  }

  .menuIcon {
    display: inline-block;
    font-size: 9rem;
    width: 9rem;
    height: 9rem;
    margin: 0 1rem;
    color: rgba(255, 255, 255, 0.88);
    text-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition:
      font-size 0.65s $ease-out-cubic,
      width 0.65s $ease-out-cubic,
      height 0.65s $ease-out-cubic,
      margin 0.65s $ease-out-cubic,
      text-shadow 0.65s $ease-out-cubic; // don't use 'all' here, because we want the color to be instant

    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    span {
      font-size: inherit;
    }
  }
}
</style>
