import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { firestoreDB } from '@/db/firebase'
import { collection, limit, query, orderBy, where } from 'firebase/firestore'
import { useCollection } from 'vuefire'

export const usePromptStore = defineStore('prompt', () => {
  // getters:
  const promptFromVoiceCommand = ref('')
  const voiceCommandIncrement = ref(0)

  const recentUserPromptsQuery = query(
    collection(firestoreDB, `sites/${import.meta.env.VITE_PRISM_SITE_ID}/prompts`),
    where('initiatedBy', '==', 'user'),
    orderBy('createdAt', 'desc'),
    limit(100)
  )

  const { data: recentUserPromptsFromDB } = useCollection(recentUserPromptsQuery, {
    ssrKey: 'recentUserPrompts'
  })

  const recentUserPrompts = computed(() => {
    // return an empty array if we don't have any recent prompts
    if (!recentUserPromptsFromDB.value || !recentUserPromptsFromDB.value.length) {
      return []
    }

    // remove duplicates that are next to each other
    return recentUserPromptsFromDB.value.filter((prompt, i) => {
      if (i === 0) {
        return true
      }

      return (
        prompt.text != recentUserPromptsFromDB.value[i - 1].text ||
        prompt.presetName != recentUserPromptsFromDB.value[i - 1].presetName
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
