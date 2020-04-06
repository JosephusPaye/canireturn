<template>
  <div
    class="relative flex flex-col items-center justify-center text-center p-6"
  >
    <div class="text-6xl text-green-600">♻</div>
    <div class="text-gray-200 text-4xl font-light mb-5">Can I Return?</div>
    <label class="text-secondary text-lg mb-12">
      <div class="mb-2 text-xl">Enter the container barcode:</div>
      <input
        class="text-2xl w-full py-4 px-6 block rounded text-secondary focus:text-inverted focus:bg-white"
        placeholder="Barcode"
        type="number"
        ref="input"
        v-model="barcode"
      />
    </label>
    <Button
      label="Check container"
      label-loading="Checking..."
      :disabled="barcode.trim().length === 0"
      :loading="loading"
      @click="checkContainer"
    ></Button>
    <BottomSheet
      class="absolute bottom-0 left-0 right-0 top-0"
      :show.sync="showBottomSheet"
    >
      <div class="p-6 text-left">
        <div class="text-lg font-semibold text-inverted mb-3">
          Product details
        </div>
        <pre
          class="text-sm w-full h-full overflow-x-auto overflow-y-auto"
          v-text="JSON.stringify(product, null, '  ')"
        ></pre>
      </div>
    </BottomSheet>
  </div>
</template>

<script>
import { checkContainer } from '../api';
import Button from './Button.vue';
import BottomSheet from './BottomSheet.vue';

export default {
  name: 'BarcodeInput',

  components: { Button, BottomSheet },

  data() {
    return {
      loading: false,
      barcode: '',
      product: {},
      showBottomSheet: false,
    };
  },

  methods: {
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },

    checkContainer() {
      if (this.loading) {
        return;
      }

      this.loading = true;

      checkContainer(this.barcode.trim())
        .then(product => {
          this.product = product;
          this.loading = false;
          this.showBottomSheet = true;
        })
        .catch(err => {
          console.log('unable to check product', err);
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss">
input {
  background-color: rgba(255, 255, 255, 0.25);
  transition: all 0.3s ease;
}
</style>
