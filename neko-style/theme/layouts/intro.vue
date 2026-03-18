<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout intro h-full grid">
      <div class="my-auto">
        <slot />
      </div>
    </div>
  </Background>
</template>
