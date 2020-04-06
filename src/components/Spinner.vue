<template>
  <transition :name="disableTransition ? null : 'spinner--transition-fade'">
    <div
      class="spinner"
      :class="classes"
      :style="{ width: size + 'px', height: size + 'px' }"
    >
      <svg
        class="spinner__indeterminate"
        role="progressbar"
        viewBox="25 25 50 50"
        :aria-valuemax="100"
        :aria-valuemin="0"
      >
        <circle
          class="spinner__indeterminate-path"
          cx="50"
          cy="50"
          fill="none"
          r="20"
          stroke-miterlimit="10"
          :stroke-width="calculatedStroke"
        />
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Spinner',

  props: {
    color: {
      type: String,
      default: 'primary', // 'primary', 'accent', multi-color', 'black', or 'white'
    },
    size: {
      type: Number,
      default: 32,
    },
    stroke: Number,
    autoStroke: {
      type: Boolean,
      default: true,
    },
    disableTransition: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [`spinner--color-${this.color}`];
    },

    calculatedStroke() {
      if (this.stroke) {
        return this.stroke;
      }

      if (this.autoStroke) {
        return parseInt(this.size / 8, 10);
      }

      return 4;
    },
  },
};
</script>

<style lang="scss">
$spinner-rotation-duration: 0.7s !default;
$spinner-color-duration: 6s !default;

.spinner {
  position: relative;
}

.spinner__indeterminate {
  animation: spinner-rotate $spinner-rotation-duration linear infinite;
  bottom: 0;
  height: 100%;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center center;
  width: 100%;
}

.spinner__indeterminate-path {
  stroke-dasharray: 89, 200;
  stroke-dashoffset: -35px;
  stroke-linecap: round;
}

// ================================================
// Colors
// ================================================

.spinner--color-multi-color {
  .spinner__indeterminate-path {
    animation: spinner-color $spinner-color-duration ease-in-out infinite;
  }
}

.spinner--color-primary {
  .spinner__indeterminate-path {
    stroke: #1d3476;
  }
}

.spinner--color-accent {
  .spinner__indeterminate-path {
    stroke: #00ae71;
  }
}

.spinner--color-black {
  .spinner__indeterminate-path {
    stroke: rgba(0, 0, 0, 0.87);
  }
}

.spinner--color-white {
  .spinner__indeterminate-path {
    stroke: white;
  }
}

// ================================================
// Toggle transition
// ================================================

.spinner--transition-fade-enter-active,
.spinner--transition-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.spinner--transition-fade-enter,
.spinner--transition-fade-leave-active {
  opacity: 0;
  transform: scale(0);
}

// ================================================
// Animations
// ================================================

@keyframes spinner-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinner-color {
  0%,
  100% {
    stroke: #f44336;
  }

  40% {
    stroke: #2196f3;
  }

  66% {
    stroke: #4caf50;
  }

  80%,
  90% {
    stroke: #ff9800;
  }
}
</style>
