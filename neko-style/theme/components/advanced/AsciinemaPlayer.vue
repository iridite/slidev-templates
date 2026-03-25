<template>
  <NuAsciinemaPlayer
    :src="src"
    :controls="controls"
    :rows="rows"
    :speed="speed"
    w-full
  />
</template>

<script setup lang="ts">
// Requires @nolebase/ui-asciinema and asciinema-player
// Install: npm install @nolebase/ui-asciinema asciinema-player

const props = withDefaults(defineProps<{
  src: string
  controls?: string
  rows?: number
  speed?: number
}>(), {
  controls: 'auto',
  rows: 18,
  speed: 1,
})
</script>
