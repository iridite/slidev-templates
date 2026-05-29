<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
  columns?: 2 | 3 | 4
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout cards neko-safe-area" h-full flex flex-col>
      <slot name="title" />
      <div flex-1 grid gap-5 items-start mt-6 :style="{ gridTemplateColumns: `repeat(${props.columns || 3}, minmax(0, 1fr))` }">
        <slot />
      </div>
    </div>
  </Background>
</template>
