<template>
  <div
    class="animated-x"
    :class="{ 'is-shown': show }"
    :style="{ fontSize: `${size}px` }"
  >
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'AnimatedX',
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
.animated-x {
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
    background-color: #f44336;
    transform-origin: center;
    transform: scale(0);
  }

  // X container
  span {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: rotate(
      45deg
    ); // Rotated because the x is actually designed as a +
  }

  &.is-shown {
    // Scale the background in
    &::before {
      transform: scale(1);
      animation: bounce-in 300ms cubic-bezier(0.4, 0, 0.23, 1);
    }

    // Draw the first line in the X
    span::before {
      content: '';
      position: absolute;
      top: calc(50% - 0.11em / 2);
      left: 0.2em;
      right: 0.2em;
      height: 0.11em;
      background-color: #fff;
      transform: scaleX(0);
      transform-origin: top left;
      animation: draw-x-line-1 200ms 300ms cubic-bezier(0.4, 0, 0.23, 1)
        forwards;
    }

    // Draw the first line in the X
    span::after {
      content: '';
      position: absolute;
      bottom: 0.2em;
      top: 0.2em;
      left: calc(50% - 0.11em / 2);
      width: 0.11em;
      background-color: #fff;
      transform: scaleY(0);
      transform-origin: top left;
      animation: draw-x-line-2 200ms 400ms cubic-bezier(0.4, 0, 0.23, 1)
        forwards;
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

@keyframes draw-x-line-1 {
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
}

@keyframes draw-x-line-2 {
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1);
  }
}
</style>
