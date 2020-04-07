<template>
  <div
    class="bottom-sheet-backdrop"
    :class="[show ? 'is-shown' : 'pointer-events-none']"
    @click="$emit('close')"
  >
    <transition name="bottom-sheet" @after-enter="$emit('shown')">
      <div
        class="bg-primary bottom-sheet absolute bottom-0 right-0 left-0"
        :style="{ height: `calc(100% - ${100 * offset}px)` }"
        @click.stop
        v-if="show"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BottomSheet',
  props: {
    show: Boolean,
    offset: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
.bottom-sheet-backdrop {
  background-color: transparent;
  transition: background-color 0.3s;

  &.is-shown {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.bottom-sheet {
  box-shadow: 0 -14px 28px rgba(0, 0, 0, 0.25), 0 -10px 10px rgba(0, 0, 0, 0.22);
}

.bottom-sheet-enter-active,
.bottom-sheet-leave-active {
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
}

.bottom-sheet-enter,
.bottom-sheet-leave-to {
  transform: translateY(105%);
}
</style>
