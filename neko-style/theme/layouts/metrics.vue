<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout metrics neko-safe-area h-full flex flex-col justify-between py-8">
      <div>
        <div v-if="$slots.title" class="mb-2">
          <slot name="title" />
        </div>
        <div v-if="$slots.lead" class="text-white/60 text-sm max-w-2xl">
          <slot name="lead" />
        </div>
      </div>

      <div class="my-auto flex-1 flex items-center justify-center">
        <slot />
      </div>

      <div v-if="$slots.footnote" class="text-xs text-white/40 border-t border-white/10 pt-3 mt-4">
        <slot name="footnote" />
      </div>
    </div>
  </Background>
</template>
