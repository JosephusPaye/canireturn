<template>
  <div class="flex flex-col items-center justify-center text-center p-6">
    <div class="text-6xl text-green-600">♻</div>
    <div class="text-gray-200 text-4xl font-light mb-5">Can I Return?</div>
    <p class="text-secondary text-lg mb-12">
      Use this app to check the barcode on a container to see if it is accepted
      in the
      <a href="https://returnandearn.org.au" target="_blank" rel="noopener"
        >NSW Return and Earn</a
      >
      program.
    </p>
    <button
      class="bg-accent text-white text-xl font-semibold px-10 py-4 rounded-full uppercase tracking-wide"
      @click="$emit('start-input')"
    >
      Enter barcode
    </button>
    <IconButton
      class="absolute bottom-0 right-0 mr-4 mb-4"
      icon="help"
      seamless
      @click="$emit('start-help')"
    />
  </div>
</template>

<script>
import IconButton from './IconButton.vue';

export default {
  name: 'PageStart',
  components: {
    IconButton,
  },
};
</script>
