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
    limit(50)
  )

  const { data: recentPromptsFromDB } = useCollection(recentPromptsQuery, {
    ssrKey: 'recentPrompts'
  })

  const recentPrompts = computed(() => {
    if (!recentPromptsFromDB.value || !recentPromptsFromDB.value.length) {
      return []
    }

    return recentPromptsFromDB.value.filter((prompt, i) => {
      if (i === 0) {
        return true
      }
      return prompt.text != recentPromptsFromDB.value[i - 1].text
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
    recentPrompts
  }
})
