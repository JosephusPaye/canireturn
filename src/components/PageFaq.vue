<template>
  <BottomSheet :offset="offset" :show="show" @close="$emit('close')">
    <div class="px-6 py-8 grid grid-cols-1 gap-5 h-full overflow-y-auto">
      <div class="text-primary text-3xl font-light">
        Frequently asked questions
      </div>
      <div class="bg-well rounded py-5 px-5">
        <div class="uppercase tracking-widest text-secondary mb-3">
          What is this?
        </div>
        <div class="text-lg text-primary">
          <p class="mb-2">
            This is an app that allows you to check if a container is accepted
            in the
            <a
              href="https://returnandearn.org.au"
              target="_blank"
              rel="noopener"
              >NSW Return and Earn</a
            >
            program by entering it's barcode.
          </p>
          <p>
            When you enter the container's barcode, the app checks if it's
            elibible for return using the
            <a
              href="https://returnandearn.org.au/how-it-works/containers/"
              target="_blank"
              rel="noopener"
              >eligible containers</a
            >
            database.
          </p>
        </div>
      </div>
      <div class="bg-well rounded py-5 px-5">
        <div class="uppercase tracking-widest text-secondary mb-3">
          How accurate is it?
        </div>
        <div class="text-lg text-primary">
          <p>
            The app uses the official
            <a
              href="https://cds.epa.nsw.gov.au/CDSContainerSearchPage"
              target="_blank"
              rel="noopener"
              >Return and Earn Container Search</a
            >, so it's as accurate as the official database, which may not be
            always be 100% accurate.
          </p>
        </div>
      </div>
      <div class="bg-well rounded py-5 px-5 mb-8">
        <div class="uppercase tracking-widest text-secondary mb-3">
          Who made this and why?
        </div>
        <div class="text-lg text-primary">
          <p class="mb-2">
            This was made by
            <a
              href="https://twitter.com/JosephusPaye"
              target="_blank"
              rel="noopener"
              >Josephus Paye II</a
            >, as a part of his
            <a
              href="https://twitter.com/JosephusPaye/status/1214853295023411200"
              target="_blank"
              rel="noopener"
              >#CreateWeekly</a
            >
            project.
          </p>
          <p>
            The app is open-sourced on
            <a
              href="https://github.com/JosephusPaye/cadence"
              target="_blank"
              rel="noopener"
              >GitHub</a
            >, where you can report issues or contribute code to help make it
            better.
          </p>
        </div>
      </div>
    </div>
  </BottomSheet>
</template>

<script>
import BottomSheet from './BottomSheet.vue';

export default {
  name: 'PageFaq',

  components: { BottomSheet },

  props: {
    show: Boolean,
    offset: Number,
  },
};
</script>
