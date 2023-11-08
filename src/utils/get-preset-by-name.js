import { presetStyles } from '@/data/preset-styles'

export const getPresetByName = (presetName) => {
  if (!presetName) {
    return null
  }

  for (let i = 0; i < presetStyles.length; i++) {
    const styles = presetStyles[i].styles
    for (let j = 0; j < styles.length; j++) {
      if (styles[j].name === presetName) {
        return styles[j]
      }
    }
  }

  return null
}
