<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout headline neko-safe-area h-full flex flex-col justify-center">
      <div v-if="$slots.eyebrow" class="text-sm font-semibold uppercase tracking-wider text-sky-400/90 mb-3">
        <slot name="eyebrow" />
      </div>
      <div class="max-w-4xl">
        <div class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white/95 mb-6">
          <slot name="default" />
        </div>
        <div v-if="$slots.subtext" class="text-lg md:text-xl text-white/70 leading-relaxed">
          <slot name="subtext" />
        </div>
      </div>
    </div>
  </Background>
</template>
