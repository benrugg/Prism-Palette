export const applyPresetToPrompt = (prompt, preset) => {
  // if the preset doesn't exist, or the preset prompt doesn't exist, return
  // the untransformed prompt
  if (!preset || !preset.prompt) {
    return prompt
  }

  // if the preset prompt has {prompt} in it, replace it with the prompt
  if (preset.prompt.includes('{prompt}')) {
    return preset.prompt.replace('{prompt}', prompt)
  } else {
    // otherwise, return the prompt concatenated with the preset prompt
    return `${prompt}, ${preset.prompt}`
  }
}
