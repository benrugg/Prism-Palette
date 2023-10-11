import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    isMenuMaximized: true,
    isPromptViewShown: false,
    isSettingsViewShown: false,
    isGeneratingImage: false
  }),
  actions: {
    maximizeMenu() {
      this.isMenuMaximized = true
    },
    minimizeMenu() {
      this.isMenuMaximized = false
    },
    showPromptView() {
      this.isPromptViewShown = true
      this.isSettingsViewShown = false
      this.minimizeMenu()
    },
    hidePromptView() {
      this.isPromptViewShown = false
      this.maximizeMenu()
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
