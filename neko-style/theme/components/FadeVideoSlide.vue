<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  poster?: string
}>(), {
  poster: '',
})
</script>

<template>
  <div class="neko-fade-video-slide">
    <video
      :src="src"
      :poster="poster"
      autoplay
      loop
      muted
      playsinline
    />
    <div class="neko-fade-heading">
      <slot name="overlay" />
    </div>
  </div>
</template>
