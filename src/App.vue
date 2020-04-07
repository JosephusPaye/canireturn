<template>
  <div id="app" class="bg-primary h-screen w-screen flex relative">
    <PageStart
      class="absolute left-0 right-0 w-full h-full"
      @start-input="push('input', $event)"
      @start-help="push('faq', $event)"
    />
    <PageFaq
      class="absolute left-0 right-0 w-full h-full"
      :show="isVisible('start.faq')"
      :offset="1"
      @close="pop"
    />
    <PageBarcodeInput
      class="absolute left-0 right-0 w-full h-full"
      :show="isVisible('start.input')"
      :offset="1"
      @close="pop"
      @container="push('container-status', $event)"
      @not-found="push('not-found', $event)"
      @error="push('error', $event)"
    />
    <PageContainerNotFound
      class="absolute left-0 right-0 w-full h-full"
      :show="isVisible('start.input.not-found')"
      :offset="2"
      :data="viewData['start.input.not-found']"
      @close="pop"
    />
    <PageContainerCheckError
      class="absolute left-0 right-0 w-full h-full"
      :show="isVisible('start.input.error')"
      :offset="2"
      :data="viewData['start.input.error']"
      @close="pop"
    />
    <PageContainerStatus
      class="absolute left-0 right-0 w-full h-full"
      :show="isVisible('start.input.container-status')"
      :offset="2"
      :data="viewData['start.input.container-status']"
      @close="pop"
      @show-help="push('help', $event)"
    />
    <PageProductDetailHelp
      class="absolute left-0 right-0 w-full h-full"
      :show="isVisible('start.input.container-status.help')"
      :offset="3"
      :data="viewData['start.input.container-status.help']"
      @close="pop"
    />
  </div>
</template>

<script>
import PageStart from './components/PageStart.vue';
import PageFaq from './components/PageFaq.vue';
import PageBarcodeInput from './components/PageBarcodeInput.vue';
import PageContainerStatus from './components/PageContainerStatus.vue';
import PageProductDetailHelp from './components/PageProductDetailHelp.vue';
import PageContainerNotFound from './components/PageContainerNotFound.vue';
import PageContainerCheckError from './components/PageContainerCheckError.vue';

export default {
  name: 'App',

  components: {
    PageStart,
    PageFaq,
    PageBarcodeInput,
    PageContainerStatus,
    PageProductDetailHelp,
    PageContainerNotFound,
    PageContainerCheckError,
  },

  data() {
    return {
      view: 'start',
      viewData: {},
    };
  },

  methods: {
    isVisible(view) {
      return this.view.startsWith(view);
    },

    push(view, data) {
      const viewPath = this.view + '.' + view;
      this.viewData[viewPath] = data;
      this.view = viewPath;
    },

    pop() {
      this.view = this.view
        .split('.')
        .slice(0, -1)
        .join('.');
    },
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
</style>
