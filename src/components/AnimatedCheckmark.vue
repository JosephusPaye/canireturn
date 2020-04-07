<template>
  <div
    class="animated-checkmark"
    :class="{ 'is-shown': show }"
    :style="{ fontSize: `${size}px` }"
  ></div>
</template>

<script>
export default {
  name: 'AnimatedCheckmark',
  props: {
    show: Boolean,
    size: {
      type: Number,
      default: 48,
    },
  },
};
</script>

<style lang="scss" scoped>
.animated-checkmark {
  position: relative;
  width: 1em;
  height: 1em;

  // Circular background
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 50%;
    background-color: #4caf50;
    transform-origin: center;
    transform: scale(0);
  }

  &.is-shown {
    // Scale the background in
    &::before {
      transform: scale(1);
      animation: bounce-in 300ms cubic-bezier(0.4, 0, 0.23, 1);
    }

    // Draw the checkmark
    &:after {
      box-sizing: content-box;
      content: '';
      position: absolute;
      top: 0.425em;
      left: 0.2em;
      border-right: 0.11em solid transparent;
      border-bottom: 0.11em solid transparent;
      transform: rotate(45deg);
      transform-origin: 0% 100%;
      animation: draw-check 250ms 300ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
    }
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes draw-check {
  0% {
    width: 0;
    height: 0;
    border-color: #fff;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  33% {
    width: 0.2em;
    height: 0;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  100% {
    width: 0.2em;
    height: 0.5em;
    border-color: #fff;
    transform: translate3d(0, -0.5em, 0) rotate(45deg);
  }
}
</style>
