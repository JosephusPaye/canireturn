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
          <div class="text-2xl text-primary mb-5">
            Unable to check container
          </div>
          <div class="bg-well rounded py-5 px-5 mb-5">
            <div class="text-secondary text-lg">
              An error occured when checking the container. Please try again
              later.
            </div>
          </div>
          <a class="text-xl" :href="newIssueUrl" target="_blank" rel="noopener"
            >Report an issue</a
          >
        </div>
      </transition>
    </div>
  </BottomSheet>
</template>

<script>
import AnimatedX from './AnimatedX.vue';
import BottomSheet from './BottomSheet.vue';

export default {
  name: 'PageContainerCheckError',

  components: { AnimatedX, BottomSheet },

  props: {
    show: Boolean,
    offset: Number,
    data: null,
  },

  data() {
    return {
      showX: false,
    };
  },

  computed: {
    newIssueUrl() {
      const url = new URL(
        `https://github.com/JosephusPaye/canireturn/issues/new`
      );
      url.searchParams.set(
        'body',
        'Hi,\n\nI just ran into an issue with the app.\n\nThis was the error message:\n\n```\n' +
          (this.data.stack ? this.data.stack : this.data) +
          '\n```'
      );
      return url.toString();
    },
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
