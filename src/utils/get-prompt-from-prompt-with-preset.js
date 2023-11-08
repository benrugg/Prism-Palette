import { getPresetByName } from './get-preset-by-name'

export const getPromptFromPromptWithPreset = (promptWithPreset, presetName) => {
  // if the preset name is empty, return the original prompt
  if (!presetName) {
    return promptWithPreset
  }

  // get the preset from the preset name
  const preset = getPresetByName(presetName)

  // if we couldn't find a preset, or if the preset is empty, return the original prompt
  if (!preset || !preset.prompt) {
    return promptWithPreset
  }

  // if the preset prompt has {prompt} in it...
  if (preset.prompt.includes('{prompt}')) {
    // get the text before and after {prompt} in the preset
    const [beforePrompt, afterPrompt] = preset.prompt.split('{prompt}')

    // return the prompt with the before and after text removed
    return promptWithPreset.replace(beforePrompt, '').replace(afterPrompt, '')
  } else {
    // otherwise, remove the preset prompt from the prompt
    return promptWithPreset.replace(`, ${preset.prompt}`, '')
  }
}
