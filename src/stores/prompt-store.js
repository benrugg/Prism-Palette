import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { firestoreDB } from '@/db/firebase'
import { collection, limit, query, orderBy } from 'firebase/firestore'
import { useCollection } from 'vuefire'

export const usePromptStore = defineStore('prompt', () => {
  // getters:
  const promptFromVoiceCommand = ref('')
  const voiceCommandIncrement = ref(0)

  const recentPromptsQuery = query(
    collection(firestoreDB, `sites/${import.meta.env.VITE_PRISM_SITE_ID}/prompts`),
    orderBy('createdAt', 'desc'),
    limit(100)
  )

  const { data: recentPromptsFromDB } = useCollection(recentPromptsQuery, {
    ssrKey: 'recentUserPrompts'
  })

  const recentUserPrompts = computed(() => {
    // return an empty array if we don't have any recent prompts
    if (!recentPromptsFromDB.value || !recentPromptsFromDB.value.length) {
      return []
    }

    // remove auto-generated images and duplicates that are next to each other
    return recentPromptsFromDB.value.filter((prompt, i) => {
      // remove auto-generated images
      if (prompt.initiatedBy === 'auto') {
        return false
      }

      // don't remove the first prompt
      if (i === 0) {
        return true
      }

      // remove duplicates that are next to each other
      return (
        prompt.text != recentPromptsFromDB.value[i - 1].text ||
        prompt.presetName != recentPromptsFromDB.value[i - 1].presetName
      )
    })
  })

  // actions:
  const setPromptFromVoiceCommand = (prompt) => {
    promptFromVoiceCommand.value = prompt
  }

  const activatePromptFromVoiceCommand = () => {
    voiceCommandIncrement.value++
  }

  return {
    promptFromVoiceCommand,
    voiceCommandIncrement,
    setPromptFromVoiceCommand,
    activatePromptFromVoiceCommand,
    recentUserPrompts
  }
})
