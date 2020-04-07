<template>
  <BottomSheet
    :offset="offset"
    :show="show"
    @close="$emit('close')"
    @shown="onShown"
  >
    <div class="flex flex-col h-full relative">
      <AnimatedX
        :show="showX"
        :size="72"
        class="mx-auto -mt-8 mb-4 flex-shrink-0"
      />
      <transition name="fade">
        <div
          v-if="data && showX"
          class="p-6 py-0 flex-grow overflow-y-auto text-center"
        >
          <div class="text-2xl text-primary mb-4">Container not found</div>
          <div class="text-secondary mb-4">{{ data.barcode }}</div>
          <div class="bg-well rounded py-5 px-5">
            <div class="text-secondary text-lg">
              The barcode entered was not found in the Return and Earn Container
              database. Double-check the barcode and try again.
            </div>
          </div>
        </div>
      </transition>
    </div>
  </BottomSheet>
</template>

<script>
import AnimatedX from './AnimatedX.vue';
import BottomSheet from './BottomSheet.vue';

export default {
  name: 'PageContainerNotFound',

  components: { AnimatedX, BottomSheet },

  props: {
    show: Boolean,
    offset: Number,
    data: Object,
  },

  data() {
    return {
      showX: false,
    };
  },

  watch: {
    show(show) {
      if (!show) {
        this.showX = false;
      }
    },
  },

  methods: {
    onShown() {
      setTimeout(() => {
        this.showX = true;
      }, 200);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
