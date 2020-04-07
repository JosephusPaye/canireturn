<template>
  <label
    class="input block"
    :class="{ 'label-floating': !labelInline, 'label-inline': labelInline }"
  >
    <div class="input-label mb-2 px-6 text-xl">{{ label }}</div>
    <input
      class="text-2xl w-full py-4 px-6 block rounded text-secondary focus:text-inverted outline-none"
      :type="type"
      :placeholder="labelInline ? null : placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="isActive = true"
      @blur="isActive = false"
      ref="input"
    />
  </label>
</template>

<script>
export default {
  name: 'Input',

  props: {
    type: String,
    label: String,
    placeholder: String,
    value: String,
  },

  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    labelInline() {
      return this.value.length === 0 && !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  &.label-inline {
    .input-label {
      cursor: text;
      transform: translateY(56px) scale(1.1);
    }

    input {
      @apply text-secondary;

      &:focus {
        @apply text-inverted;
      }
    }
  }

  &.label-floating {
    input {
      @apply text-primary;

      &:focus {
        @apply text-inverted;
      }
    }

    .input-label {
      transform: translateY(0) scale(1);
    }
  }

  input {
    background-color: rgba(255, 255, 255, 0.25);
    transition: all 0.3s ease;

    &:focus {
      background-color: #fff;
    }
  }
}

.input-label {
  // Behaves like a block, but width is the width of its content.
  // Needed here so label doesn't overflow parent when scaled up (to appear inline).
  display: table;
  width: fit-content;
  transform-origin: left;
  transition: transform 0.3s ease;
  @apply text-secondary;
}

// Fixes glitch in Chrome where label and input value overlap each other
// when webkit-autofill value has not been propagated yet (e.g. https://github.com/vuejs/vue/issues/1331)
// The webkit-autofill value will only be propagated on first click into the viewport.
// Before that .is-inline will be wrongly set and cause the auto filled input value and the label to overlap.
// This fix will style the wrong .is-inline like an .is-floating in case :-webkit-autofill is set.
input:-webkit-autofill + .input-label.label-inline {
  transform: translateY(0) scale(1);
}
</style>
