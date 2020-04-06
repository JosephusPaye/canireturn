<template>
  <div id="app" class="bg-primary h-screen w-screen flex relative">
    <transition name="fade">
      <StartScreen
        class="w-full h-full absolute left-0 right-0 bg-primary"
        v-show="view === 'start'"
      />
    </transition>
    <IconButton
      class="absolute bottom-0 right-0 mr-4 mb-4"
      icon="help"
      :seamless="view === 'start'"
    />
  </div>
</template>

<script>
import IconButton from './components/IconButton.vue';
import StartScreen from './components/StartScreen.vue';

export default {
  name: 'App',

  components: { IconButton, StartScreen },

  data() {
    return {
      view: 'start',
    };
  },
};
</script>

<style lang="scss">
@import './assets/tailwind.css';

body {
  color: rgba(0, 0, 0, 0.87);
  @apply text-base;
}

a {
  border-bottom: 1px solid #1e8582;
  box-shadow: 0px -10px 0px #1e8582 inset;
  color: white;
  transition: box-shadow 0.3s ease;

  &:focus,
  &:hover {
    box-shadow: 0px -1.2em 0px #1e8582 inset;
  }
}

.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
