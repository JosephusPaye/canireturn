<template>
  <BottomSheet :offset="offset" :show="show" @close="$emit('close')">
    <div class="p-6 py-8">
      <Input
        class="mb-6"
        type="number"
        label="Container barcode"
        placeholder="Enter barcode"
        v-model="barcode"
        ref="input"
      />
      <Button
        label="Check container"
        label-loading="Checking..."
        :disabled="barcode.trim().length === 0"
        :loading="loading"
        @click="checkContainer"
      ></Button>
    </div>
  </BottomSheet>
</template>

<script>
import { checkContainer } from '../api';

import Button from './Button.vue';
import BottomSheet from './BottomSheet.vue';
import Input from './Input.vue';

export default {
  name: 'PageBarcodeInput',

  components: { Button, BottomSheet, Input },

  props: {
    show: Boolean,
    offset: Number,
  },

  data() {
    return {
      loading: false,
      barcode: '',
    };
  },

  methods: {
    focus() {
      this.$nextTick(() => {
        this.$refs.input.$refs.input.focus();
      });
    },

    checkContainer() {
      if (this.loading) {
        return;
      }

      this.loading = true;

      checkContainer(this.barcode.trim())
        .then(container => {
          this.loading = false;
          if (container) {
            this.$emit('container', container);
          } else {
            this.$emit('not-found', { barcode: this.barcode.trim() });
          }
        })
        .catch(err => {
          console.log('unable to check container', err);
          this.loading = false;
          this.$emit('error');
        });
    },
  },
};
</script>
