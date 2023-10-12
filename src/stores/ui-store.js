import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    isMenuMaximized: true,
    isPromptViewShown: false,
    promptViewFocusIncrement: 0,
    isSettingsViewShown: false,
    isGeneratingImage: false
  }),
  getters: {
    isPromptViewReadyToBeShown() {
      return !(
        this.isGeneratingImage ||
        this.isPromptViewShown ||
        this.isSettingsViewShown ||
        this.isMenuMaximized
      )
    }
  },
  actions: {
    maximizeMenu() {
      this.isMenuMaximized = true
    },
    minimizeMenu() {
      this.isMenuMaximized = false
    },
    showPromptView() {
      this.isPromptViewShown = true
      this.promptViewFocusIncrement++ // this is used to force the prompt view to focus again
      this.isSettingsViewShown = false
      this.minimizeMenu()
    },
    hidePromptView(doMaximizeMenu = true) {
      this.isPromptViewShown = false
      if (doMaximizeMenu) {
        this.maximizeMenu()
      }
    },
    togglePromptView() {
      if (this.isPromptViewShown) {
        this.hidePromptView()
      } else {
        this.showPromptView()
      }
    },
    showSettingsView() {
      this.isPromptViewShown = false
      this.isSettingsViewShown = true
      this.minimizeMenu()
    },
    hideSettingsView() {
      this.isSettingsViewShown = false
      this.maximizeMenu()
    },
    toggleSettingsView() {
      if (this.isSettingsViewShown) {
        this.hideSettingsView()
      } else {
        this.showSettingsView()
      }
    }
  }
})
