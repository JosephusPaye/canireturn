<template>
  <button
    class="bg-accent text-white text-xl font-semibold px-10 py-4 rounded-full uppercase tracking-wide flex items-center"
    :class="disabled || loading ? 'opacity-50' : ''"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <Spinner color="white" v-if="loading" class="mr-4" disable-transition />
    <span>{{ loading ? labelLoading || label : label }}</span>
  </button>
</template>

<script>
import Spinner from './Spinner.vue';

export default {
  name: 'Button',

  components: { Spinner },

  props: {
    label: String,
    labelLoading: String,
    loading: Boolean,
    disabled: Boolean,
  },
};
</script>
