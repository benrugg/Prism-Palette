<template>
  <div class="settingsContainer" @dblclick.stop="doNothing">
    <div class="settingsInteriorWrap">
      <div class="settingsInterior">
        <div class="settingsTitleBar">
          <h3>Prism Settings</h3>
          <div class="saveIndicatorContainer">
            <Transition name="quick-fade">
              <div class="smallTransparentLoadingContainer">
                <b-loading :is-full-page="false" v-model="settingsStore.isSavingSettings" />
              </div>
            </Transition>
            <Transition name="quick-fade">
              <h6 v-if="wasRecentlySaved">&mdash; &nbsp; Saved</h6>
            </Transition>
          </div>
        </div>
        <span class="closeButton material-symbols-outlined" @click="close">close</span>

        <div
          class="loadingContainer transparentLoadingContainer"
          v-if="!settingsStore.hasLoadedSettings"
        >
          <b-loading :is-full-page="false" v-model="showLoadingSpinner" />
        </div>

        <div class="settings" v-else>
          <div class="settingsSection">
            <h4>View Settings</h4>

            <b-field label="Viewing Mode:">
              <b-select
                placeholder="Viewing Mode"
                v-model="settings.viewingMode"
                @input="saveSettingsAlmostImmediately"
              >
                <option value="generatedRandom">Generate New Images</option>
                <option value="favorites">Show Favorites</option>
              </b-select>
            </b-field>

            <b-field grouped>
              <b-field label="Change Image Every...">
                <b-select
                  placeholder="New Image Interval"
                  v-model="settings.newImageInterval"
                  @input="saveSettingsAlmostImmediately"
                >
                  <option
                    v-for="interval in intervalOptions"
                    :value="interval.value"
                    :key="interval.value"
                  >
                    {{ interval.label }}
                  </option>
                </b-select>
              </b-field>

              <b-field
                label="Change Preset Every..."
                v-if="settings.viewingMode == 'generatedRandom'"
              >
                <b-select
                  placeholder="New Preset Interval"
                  v-model="settings.newPresetInterval"
                  @input="saveSettingsAlmostImmediately"
                >
                  <option
                    v-for="interval in intervalOptions"
                    :value="interval.value"
                    :key="interval.value"
                  >
                    {{ interval.label }}
                  </option>
                </b-select>
              </b-field>

              <b-field
                label="Change Prompt Every..."
                v-if="settings.viewingMode == 'generatedRandom'"
              >
                <b-select
                  placeholder="New Prompt Interval"
                  v-model="settings.newPromptInterval"
                  @input="saveSettingsAlmostImmediately"
                >
                  <option
                    v-for="interval in intervalOptions"
                    :value="interval.value"
                    :key="interval.value"
                  >
                    {{ interval.label }}
                  </option>
                </b-select>
              </b-field>
            </b-field>
          </div>

          <div class="settingsSection">
            <h4>AI Image Settings (Advanced)</h4>

            <b-field label="Stable Diffusion Engine">
              <b-select
                placeholder="Stable Diffusion Engine"
                v-model="settings.sdEngineId"
                @input="selectDefaultDimensionsForNewEngine"
              >
                <option
                  v-for="option in stabilityEngineOptions"
                  :value="option.value"
                  :key="option.value"
                >
                  {{ option.label }}
                </option>
              </b-select>
            </b-field>

            <b-field grouped v-if="isSdxlModelSelected">
              <b-field label="Image Width">
                <b-select
                  placeholder="Width"
                  v-model="settings.imageWidth"
                  @input="saveSettingsAlmostImmediately"
                >
                  <option v-for="option in sdxlModelDimensionOptions" :value="option" :key="option">
                    {{ option }}
                  </option>
                </b-select>
              </b-field>

              <b-field label="Image Height">
                <b-select
                  placeholder="Height"
                  v-model="settings.imageHeight"
                  @input="saveSettingsAlmostImmediately"
                >
                  <option v-for="option in sdxlModelDimensionOptions" :value="option" :key="option">
                    {{ option }}
                  </option>
                </b-select>
              </b-field>
            </b-field>

            <b-field grouped v-else>
              <b-field label="Image Width">
                <b-select
                  placeholder="Width"
                  v-model="settings.imageWidth"
                  @input="saveSettingsAlmostImmediately"
                >
                  <option
                    v-for="option in sdOriginalModelDimensionOptions"
                    :value="option"
                    :key="option"
                  >
                    {{ option }}
                  </option>
                </b-select>
              </b-field>

              <b-field label="Image Height">
                <b-select
                  placeholder="Height"
                  v-model="settings.imageHeight"
                  @input="saveSettingsAlmostImmediately"
                >
                  <option
                    v-for="option in sdOriginalModelDimensionOptions"
                    :value="option"
                    :key="option"
                  >
                    {{ option }}
                  </option>
                </b-select>
              </b-field>
            </b-field>

            <b-field grouped>
              <b-field label="Sampler">
                <b-select
                  placeholder="Sampler"
                  v-model="settings.sampler"
                  @input="saveSettingsAlmostImmediately"
                >
                  <option
                    v-for="option in sdSamplerOptions"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.label }}
                  </option>
                </b-select>
              </b-field>

              <b-field label="Prompt Strength">
                <b-input
                  placeholder="Prompt Strength"
                  type="number"
                  min="0"
                  max="35"
                  step="0.1"
                  v-model="settings.cfgScale"
                  @input="debouncedSaveSettings"
                />
              </b-field>

              <b-field label="Steps">
                <b-input
                  placeholder="Steps"
                  type="number"
                  min="10"
                  max="40"
                  step="1"
                  v-model="settings.steps"
                  @input="debouncedSaveSettings"
                />
              </b-field>
            </b-field>
          </div>

          <div class="settingsSection">
            <h4>Negative Prompt</h4>

            <b-field>
              <b-checkbox
                v-model="settings.useNegativePrompt"
                @input="saveSettingsAlmostImmediately"
                >Use Negative Prompt</b-checkbox
              >
            </b-field>

            <b-field expanded class="noTopMargin" v-if="settings.useNegativePrompt">
              <b-input
                placeholder="ugly, bad art, extra limbs, disfigured, deformed, etc..."
                type="textarea"
                v-model="settings.negativePrompt"
                @input="debouncedSaveSettings"
              />
            </b-field>

            <a
              class="textButton"
              href="javascript:void(0)"
              v-if="settings.useNegativePrompt && !settingsStore.isNegativePromptDefault"
              @click="revertNegativePromptToDefault"
            >
              Revert to default</a
            >
          </div>

          <div class="settingsSection">
            <h4>Voice Commands</h4>

            <b-field>
              <b-checkbox
                v-model="settings.isVoiceDetectionEnabled"
                @input="saveSettingsAlmostImmediately"
                >Enable Voice Commands</b-checkbox
              >
            </b-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useSettingsStore } from '@/stores/settings-store'
import { useUiStore } from '@/stores/ui-store'

const intervalOptions = [
  { label: '30 seconds', value: 30 },
  { label: '45 seconds', value: 45 },
  { label: '1 minute', value: 60 },
  { label: '2 minutes', value: 60 * 2 },
  { label: '3 minutes', value: 60 * 3 },
  { label: '5 minutes', value: 60 * 5 },
  { label: '10 minutes', value: 60 * 10 },
  { label: '15 minutes', value: 60 * 15 },
  { label: '20 minutes', value: 60 * 20 },
  { label: '30 minutes', value: 60 * 30 },
  { label: '45 minutes', value: 60 * 45 },
  { label: '1 hour', value: 60 * 60 },
  { label: '2 hours', value: 60 * 60 * 2 },
  { label: '3 hours', value: 60 * 60 * 3 },
  { label: '4 hours', value: 60 * 60 * 4 },
  { label: '5 hours', value: 60 * 60 * 5 },
  { label: '6 hours', value: 60 * 60 * 6 },
  { label: '12 hours', value: 60 * 60 * 12 },
  { label: '1 day', value: 60 * 60 * 24 },
  { label: '2 days', value: 60 * 60 * 24 * 2 },
  { label: '3 days', value: 60 * 60 * 24 * 3 },
  { label: '1 week', value: 60 * 60 * 24 * 7 }
]

const stabilityEngineOptions = [
  {
    label: 'Stable Diffusion XL v1.0',
    value: 'stable-diffusion-xl-1024-v1-0'
  }
]

const sdOriginalModelDimensionOptions = [
  128, 192, 256, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024, 1152, 1216, 1344
]

const sdxlModelDimensionOptions = [640, 768, 832, 896, 1024, 1152, 1216, 1344]

const default512ModelWidth = 768
const default512ModelHeight = 448
const default768ModelWidth = 1344
const default768ModelHeight = 768
const defaultSdxlModelWidth = 1344
const defaultSdxlModelHeight = 768

const sdSamplerOptions = [
  { label: 'Euler', value: 'K_EULER' },
  { label: 'Euler a', value: 'K_EULER_ANCESTRAL' },
  { label: 'Heun', value: 'K_HEUN' },
  { label: 'DPM2', value: 'K_DPM_2' },
  { label: 'DPM2 a', value: 'K_DPM_2_ANCESTRAL' },
  { label: 'LMS', value: 'K_LMS' },
  { label: 'DPM++ 2S a', value: 'K_DPMPP_2S_ANCESTRAL' },
  { label: 'DPM++ 2M', value: 'K_DPMPP_2M' },
  { label: 'DDIM', value: 'DDIM' },
  { label: 'DDPM', value: 'DDPM' }
]

export default {
  data() {
    return {
      settings: null,
      showLoadingSpinner: true,
      intervalOptions,
      stabilityEngineOptions,
      sdOriginalModelDimensionOptions,
      sdxlModelDimensionOptions,
      sdSamplerOptions,
      saveHandlerTimeout: null,
      wasRecentlySaved: false
    }
  },
  computed: {
    ...mapStores(useSettingsStore),
    ...mapStores(useUiStore),
    isSdxlModelSelected() {
      return this.settings?.sdEngineId?.startsWith('stable-diffusion-xl')
    },
    sanitizedSettings() {
      const sanitizedSettings = { ...this.settings }

      sanitizedSettings.cfgScale = parseFloat(sanitizedSettings.cfgScale)
      if (isNaN(sanitizedSettings.cfgScale)) {
        sanitizedSettings.cfgScale = 7
      } else if (sanitizedSettings.cfgScale < 0) {
        sanitizedSettings.cfgScale = 0
      } else if (sanitizedSettings.cfgScale > 35) {
        sanitizedSettings.cfgScale = 35
      }

      sanitizedSettings.steps = parseInt(sanitizedSettings.steps)
      if (isNaN(sanitizedSettings.steps)) {
        sanitizedSettings.steps = 15
      } else if (sanitizedSettings.steps < 10) {
        sanitizedSettings.steps = 10
      } else if (sanitizedSettings.steps > 40) {
        sanitizedSettings.steps = 40
      }

      return sanitizedSettings
    }
  },
  methods: {
    doNothing() {
      // this just exists to capture the double click event and not let it bubble to HomeView
    },
    updateLocalSettings() {
      if (this.settingsStore.hasLoadedSettings) {
        this.settings = { ...this.settingsStore.settings }
      }
    },
    selectDefaultDimensionsForNewEngine(event) {
      const selectedEngineId = event.target.value
      if (selectedEngineId.startsWith('stable-diffusion-xl')) {
        this.settings.imageWidth = defaultSdxlModelWidth
        this.settings.imageHeight = defaultSdxlModelHeight
      } else if (selectedEngineId.startsWith('stable-diffusion-768')) {
        this.settings.imageWidth = default768ModelWidth
        this.settings.imageHeight = default768ModelHeight
      } else {
        this.settings.imageWidth = default512ModelWidth
        this.settings.imageHeight = default512ModelHeight
      }

      this.saveSettingsAlmostImmediately()
    },
    revertNegativePromptToDefault() {
      this.settingsStore.revertNegativePromptToDefault()
    },
    close() {
      this.uiStore.hideSettingsView()
    },
    saveSettingsAlmostImmediately() {
      clearTimeout(this.saveHandlerTimeout)
      this.saveHandlerTimeout = setTimeout(this.saveSettings, 100)
    },
    debouncedSaveSettings() {
      clearTimeout(this.saveHandlerTimeout)
      this.saveHandlerTimeout = setTimeout(this.saveSettings, 800)
    },
    async saveSettings() {
      try {
        await this.settingsStore.updateSettings(this.sanitizedSettings)
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Error saving settings',
          type: 'is-danger',
          duration: 10000
        })
        console.error(error)
      }
    }
  },
  watch: {
    'settingsStore.hasLoadedSettings': {
      handler: function () {
        this.updateLocalSettings()
      },
      immediate: true
    },
    'settingsStore.isSavingSettings': {
      handler: function () {
        if (!this.settingsStore.isSavingSettings) {
          this.wasRecentlySaved = true
          setTimeout(() => {
            this.wasRecentlySaved = false
          }, 2000)
        }
      }
    },
    'settingsStore.settings': {
      handler: function () {
        this.updateLocalSettings()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.settingsContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .settingsInteriorWrap {
    width: 100%;
    height: 100%;
    max-width: 1000px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .settingsInterior {
    width: 100%;
    height: 100%;
    padding: 40px;
    position: relative;
  }

  .settingsTitleBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.7rem;
    gap: 1rem;
  }

  .saveIndicatorContainer {
    position: relative;
    width: 120px;
    height: 72px;

    h6 {
      font-family: var(--base-font);
      font-weight: 200;
      font-size: 1.2rem;
      color: #ffffff;
      letter-spacing: -0.01em;
      position: absolute;
      top: calc(50% + 3px);
      transform: translateY(-50%);
    }
  }

  .settings {
    width: 100%;
    height: 100%;
    padding-bottom: 190px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .closeButton {
    font-size: min(min(13vw, 14vh), 4rem);
    color: #ffffff;
    position: absolute;
    top: 2.5rem;
    right: 2rem;
    cursor: pointer;
  }

  .loadingContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .settingsSection + .settingsSection {
    margin-top: 3.2rem;
  }

  h3 {
    font-family: var(--base-font);
    font-weight: 200;
    font-size: min(min(10vw, 11vh), 3rem);
    line-height: 1.2em;
    color: #ffffff;
    letter-spacing: -0.02em;
  }

  h4 {
    font-family: var(--base-font);
    font-weight: 200;
    font-size: 2rem;
    color: #ffffff;
    letter-spacing: -0.02em;
    padding-bottom: 0.2rem;
    margin-bottom: 1.4rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .textButton {
    font-family: var(--base-font);
    font-weight: 400;
    font-size: 0.95rem;
    color: var(--light-blue);
    letter-spacing: -0.02em;
    margin-top: 0.4rem;
    cursor: pointer;

    &:hover {
      color: var(--light-blue-over);
    }
  }
}

@media screen and (max-width: 900px) {
  .settingsContainer {
    .settingsInterior {
      padding-top: 20px;
    }

    .settingsTitleBar {
      margin-bottom: 0.9rem;
    }

    .closeButton {
      top: 1.5rem;
    }
  }
}

@media screen and (max-width: 600px) {
  .settingsContainer {
    .settingsInterior {
      padding-right: 6vw;
      padding-left: 6vw;
    }

    .closeButton {
      right: 1rem;
    }
  }
}
</style>

<style lang="scss">
.settingsContainer {
  .field + .field {
    margin-top: 1.9rem;

    &.noTopMargin {
      margin-top: 0;
    }
  }

  .field.is-grouped {
    .field + .field {
      margin-top: 0;
      margin-left: 1.8rem;
    }
  }

  label {
    font-family: var(--base-font);
    font-weight: 500;
    font-size: 1rem;
    color: #ffffff;
    letter-spacing: -0.01em;
    margin-bottom: 0.4rem !important;
  }

  select,
  input,
  textarea {
    font-family: var(--base-font);
    font-weight: 400;
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
    height: 2.7rem;
    color: var(--light-blue);
    border-color: var(--light-blue);
    background: none;

    &:hover {
      border-color: var(--light-blue-over);
      color: var(--light-blue-over);
    }

    &:focus {
      border-color: rgb(22, 48, 78);
      box-shadow: none;
    }

    &::placeholder {
      color: rgba(var(--light-blue), 0.5);
    }
  }

  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: var(--light-blue);
    top: 1.35rem;
  }

  textarea {
    min-height: 6rem !important;
    height: 6rem;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .b-checkbox.checkbox input[type='checkbox'] + .check {
    border: 1px solid var(--light-blue);
  }

  .b-checkbox.checkbox:hover input[type='checkbox']:not(:disabled) + .check {
    border-color: var(--light-blue-over);
  }

  .b-checkbox.checkbox input[type='checkbox']:focus:checked + .check {
    box-shadow: 0 0 0 0.125em rgba(184, 197, 255, 0.25);
  }

  .checkbox {
    .control-label {
      color: var(--light-blue);
    }

    &:hover {
      .control-label {
        color: var(--light-blue-over);
      }
    }
  }

  .b-checkbox.checkbox input[type='checkbox']:checked + .check {
    background-color: transparent;
  }
}

@media screen and (max-width: 700px) {
  .settingsContainer {
    .field.is-grouped {
      flex-direction: column;

      .field {
        margin-right: 0;
      }

      .field + .field {
        margin-top: 1.9rem;
        margin-left: 0;
      }
    }
  }
}
</style>
