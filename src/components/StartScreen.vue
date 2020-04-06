<template>
  <div class="flex flex-col items-center justify-center text-center p-6">
    <div class="text-6xl text-green-600">♻</div>
    <div class="text-gray-200 text-4xl font-light mb-5">Can I Return?</div>
    <p class="text-secondary text-lg mb-12">
      Use this app to check the barcode on a container to see if it is accepted
      in the
      <br />
      <a href="https://returnandearn.org.au">NSW Return and Earn</a> program.
    </p>
    <button
      class="bg-accent text-white text-xl font-semibold px-10 py-4 rounded-full uppercase tracking-wide"
      @click="$emit('start-input')"
    >
      Enter barcode
    </button>
  </div>
</template>

<script>
export default {
  name: 'StartScreen',

  data() {
    return {
      product: {},
    };
  },
};
</script>
