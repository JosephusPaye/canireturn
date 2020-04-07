<template>
  <button
    class="icon-button flex items-center justify-center rounded-md transition duration-200 ease-in-out"
    :class="[
      `text-${size}`,
      seamless
        ? 'text-secondary hover:text-white focus:text-white'
        : 'bg-overlay text-secondary hover:text-white focus:text-white',
    ]"
    @click="$emit('click', $event)"
  >
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby="cameraRearIconTitle"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      v-if="icon === 'switch-camera'"
    >
      <title id="cameraRearIconTitle">Switch the camera</title>
      <path d="M6 12l2-2 2 2" />
      <path d="M8 13a4 4 0 0 0 4 4m4-4a4 4 0 0 0-4-4" />
      <path stroke-linecap="butt" d="M8 12v1m0-3v3m8 0v3" />
      <path d="M18 14l-2 2-2-2" />
      <path
        d="M8 7l.74-1.11A2 2 0 0 1 10.404 5h3.192a2 2 0 0 1 1.664.89L16 7h5v13H3V7h5z"
      />
    </svg>

    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby="plusIconTitle"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      v-else-if="icon === 'zoom-in'"
    >
      <title id="plusIconTitle">Zoom in</title>
      <path d="M20 12L4 12M12 4L12 20" />
    </svg>

    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby="minusIconTitle"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      v-else-if="icon === 'zoom-out'"
    >
      <title id="minusIconTitle">Zoom out</title>
      <path d="M20,12 L4,12" />
    </svg>

    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby="helpIconTitle"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      v-else-if="icon === 'help'"
    >
      <title id="helpIconTitle">Help</title>
      <path
        d="M12 14C12 12 13.576002 11.6652983 14.1186858 11.1239516 14.663127 10.5808518 15 9.82976635 15 9 15 7.34314575 13.6568542 6 12 6 11.1040834 6 10.2998929 6.39272604 9.75018919 7.01541737 9.49601109 7.30334431 9.29624369 7.64043912 9.16697781 8.01061095"
      />
      <line x1="12" y1="17" x2="12" y2="17" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'IconButton',

  props: {
    icon: String,
    seamless: Boolean,
    size: {
      type: String,
      default: '6xl',
    },
  },
};
</script>

<style>
.icon-button {
  width: 1em;
  height: 1em;
}

.icon-button svg {
  width: 0.625em;
  height: 0.625em;
  font-size: inherit;
}
</style>
