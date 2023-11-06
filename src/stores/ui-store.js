import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    isMenuMaximized: true,
    isPromptViewShown: false,
    promptViewFocusIncrement: 0,
    isSettingsViewShown: false,
    isImageHistoryViewShown: false,
    isGeneratingImage: false
  }),
  getters: {
    isPromptViewReadyToBeShown() {
      return !(
        this.isGeneratingImage ||
        this.isPromptViewShown ||
        this.isSettingsViewShown ||
        this.isImageHistoryViewShown ||
        this.isMenuMaximized
      )
    },
    doBlurMainImage() {
      return this.isGeneratingImage || this.isSettingsViewShown || this.isImageHistoryViewShown
    }
  },
  actions: {
    maximizeMenu() {
      // maximize the menu, only when an image isn't generating
      if (!this.isGeneratingImage) {
        this.isMenuMaximized = true
      }
    },
    minimizeMenu() {
      this.isMenuMaximized = false
    },
    hideActiveView() {
      if (this.isPromptViewShown) {
        this.hidePromptView()
      } else if (this.isSettingsViewShown) {
        this.hideSettingsView()
      } else if (this.isImageHistoryViewShown) {
        this.hideImageHistoryView()
      }
    },
    showPromptView() {
      this.isPromptViewShown = true
      this.promptViewFocusIncrement++ // this is used to force the prompt view to focus again
      this.isSettingsViewShown = false
      this.isImageHistoryViewShown = false
      this.minimizeMenu()
    },
    hidePromptView(doMaximizeMenu = true) {
      this.isPromptViewShown = false
      if (doMaximizeMenu) {
        this.maximizeMenu()
      }
    },
    showSettingsView() {
      this.isPromptViewShown = false
      this.isSettingsViewShown = true
      this.isImageHistoryViewShown = false
      this.minimizeMenu()
    },
    hideSettingsView() {
      this.isSettingsViewShown = false
      this.maximizeMenu()
    },
    showImageHistoryView() {
      this.isPromptViewShown = false
      this.isSettingsViewShown = false
      this.isImageHistoryViewShown = true
      this.minimizeMenu()
    },
    hideImageHistoryView() {
      this.isImageHistoryViewShown = false
      this.maximizeMenu()
    }
  }
})
