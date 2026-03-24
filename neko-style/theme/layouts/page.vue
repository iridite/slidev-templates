<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout page h-full w-full neko-safe-area">
      <slot />
    </div>
  </Background>
</template>
