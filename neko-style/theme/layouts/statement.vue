<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout statement" relative h-full w-full flex flex-col items-center justify-center text-center px-16>
      <div class="text-sm uppercase tracking-widest opacity-60 mb-4">
        <slot name="kicker" />
      </div>
      <h1 class="text-4xl font-bold leading-tight">
        <slot />
      </h1>
      <p class="text-lg opacity-70 mt-4 max-w-2xl">
        <slot name="subtitle" />
      </p>
    </div>
  </Background>
</template>
