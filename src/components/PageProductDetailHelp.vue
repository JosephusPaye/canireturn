<template>
  <BottomSheet :offset="offset" :show="show" @close="$emit('close')">
    <div class="p-6 py-8" v-if="data">
      <div class="text-secondary uppercase tracking-widest mb-1">
        {{ data.title }}
      </div>
      <div class="text-primary text-3xl mb-1">{{ data.label }}</div>
      <div class="text-primary text-lg">{{ data.help }}</div>
    </div>
  </BottomSheet>
</template>

<script>
import BottomSheet from './BottomSheet.vue';

export default {
  name: 'PageProductDetailHelp',

  components: { BottomSheet },

  props: {
    show: Boolean,
    offset: Number,
    data: Object,
  },
};
</script>
