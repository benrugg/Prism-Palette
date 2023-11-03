import { presetStyles } from '@/data/preset-styles'

// map preset styles to names, skipping the first category of 'no preset style'
const mapPresetStylesToNames = () => {
  const presetNames = []
  for (let i = 1; i < presetStyles.length; i++) {
    const styles = presetStyles[i].styles
    for (let j = 0; j < styles.length; j++) {
      presetNames.push(styles[j].name)
    }
  }
  return presetNames
}

export const getRandomPresetName = () => {
  const presetNames = mapPresetStylesToNames()
  return presetNames[Math.floor(Math.random() * presetNames.length)]
}
