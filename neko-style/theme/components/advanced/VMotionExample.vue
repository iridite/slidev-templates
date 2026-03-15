<template>
  <div
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1000,
      },
    }"
    class="h-full w-full flex items-center justify-center"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
// Requires @vueuse/motion
// Install: npm install @vueuse/motion
</script>
