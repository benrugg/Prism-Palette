<template>
  <div class="presetSelectionContainer">
    <b-field>
      <b-select v-model="selectedStyle" @click.stop="void 0">
        <optgroup
          :label="styleGroup.name"
          v-for="styleGroup in presetStyles"
          :key="styleGroup.name"
        >
          <option v-for="style in styleGroup.styles" :value="style.name" :key="style.name">
            {{ style.name }}
          </option>
        </optgroup>
      </b-select>
    </b-field>
  </div>
</template>

<script>
import { presetStyles } from '@/data/preset-styles'

export default {
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      presetStyles
    }
  },
  computed: {
    selectedStyle: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style lang="scss">
.presetSelectionContainer {
  select {
    font-family: var(--base-font);
    font-weight: 400;
    font-size: 1.15rem;
    padding: 0.6rem 1rem;
    height: 3.1rem;
    color: #ffffff;
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    text-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.3);

    &:hover {
      border-color: var(--light-blue-over);
      color: var(--light-blue-over);
    }

    &:focus {
      border-color: rgb(22, 48, 78);
      box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.3);
    }

    &::placeholder {
      color: rgba(#ffffff, 0.5);
    }
  }

  .select:not(.is-multiple) {
    height: unset;
  }

  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: #ffffff;
    top: 1.5rem;
    right: 1.2rem;
    box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.3);
  }
}
</style>
