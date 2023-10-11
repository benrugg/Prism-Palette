<template>
  <div class="menuContainer" :class="{ isVisible, isMinimized: !uiStore.isMenuMaximized }">
    <div
      class="buttonContainer"
      @pointerover="handlePointerOver"
      @pointerleave="handlePointerLeave"
    >
      <b-icon class="menuIcon" icon="keyboard" pack="fas" @click="togglePromptView" />
      <b-icon class="menuIcon" icon="cog" pack="fas" />
      <b-icon
        class="menuIcon"
        :icon="isFullScreen ? 'compress-alt' : 'expand-alt'"
        pack="fas"
        @click="toggleFullScreen"
      />
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
    togglePromptView() {
      this.uiStore.togglePromptView()
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
      width: 5rem;
      height: 4.5rem;
      text-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.3);
    }
  }

  .buttonContainer {
    position: absolute;
    top: 50%;
    transition: all 0.3s ease-out;
    transform: translateY(-50%);
    pointer-events: all;
  }

  .menuIcon {
    font-size: 6rem;
    width: 10rem;
    height: 9rem;
    color: rgba(255, 255, 255, 0.88);
    text-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition:
      font-size 0.3s ease-out,
      width 0.3s ease-out,
      height 0.3s ease-out,
      text-shadow 0.3s ease-out;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
