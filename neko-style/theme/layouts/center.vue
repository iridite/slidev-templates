<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout center h-full grid">
      <div class="my-auto w-full">
        <slot />
      </div>
    </div>
  </Background>
</template>
