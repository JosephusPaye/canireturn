<template>
  <BottomSheet
    :offset="offset"
    :show="show"
    @close="$emit('close')"
    @shown="onShown"
  >
    <div class="flex flex-col h-full relative">
      <AnimatedCheckmark
        v-if="data && data['Registration Status'] === 'Active'"
        :show="showStatusIcon"
        :size="72"
        class="mx-auto -mt-8 mb-4 flex-shrink-0"
      />
      <AnimatedX
        v-else
        :show="showStatusIcon"
        :size="72"
        class="mx-auto -mt-8 mb-4 flex-shrink-0"
      />
      <transition name="fade">
        <div
          v-if="data && showStatusIcon"
          class="p-6 py-0 flex-grow overflow-y-auto"
        >
          <div class="text-2xl text-center text-primary mb-5">
            {{
              data['Registration Status'] === 'Active'
                ? 'This container can be returned!'
                : "This container can't be returned."
            }}
          </div>
          <div class="grid grid-cols-1 gap-3 min-h-0 mb-6">
            <div
              v-for="(data, label) in data"
              :key="label"
              class="bg-well rounded py-2 px-4 flex"
            >
              <div class="flex-grow">
                <div class="text-sm uppercase tracking-widest text-secondary">
                  {{ label }}
                </div>
                <div class="text-lg text-primary">{{ data.value }}</div>
              </div>
              <div v-if="data.help" class="-mr-2">
                <IconButton
                  icon="help"
                  seamless
                  size="5xl"
                  @click="
                    $emit('show-help', {
                      title: label,
                      label: data.value,
                      help: data.help,
                    })
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </BottomSheet>
</template>

<script>
import AnimatedCheckmark from './AnimatedCheckmark.vue';
import AnimatedX from './AnimatedX.vue';
import BottomSheet from './BottomSheet.vue';
import IconButton from './IconButton.vue';

export default {
  name: 'PageContainerStatus',

  components: { AnimatedCheckmark, AnimatedX, BottomSheet, IconButton },

  props: {
    show: Boolean,
    offset: Number,
    data: Object,
  },

  data() {
    return {
      showStatusIcon: false,
    };
  },

  watch: {
    show(show) {
      if (!show) {
        this.showStatusIcon = false;
      }
    },
  },

  methods: {
    onShown() {
      setTimeout(() => {
        this.showStatusIcon = true;
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
