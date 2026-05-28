<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  count?: number
  from?: number
}>(), {
  count: 1,
  from: 1,
})

const stepNumbers = computed(() => {
  const count = Math.max(0, Math.floor(props.count))
  const from = Math.max(0, Math.floor(props.from))
  return Array.from({ length: count }, (_, idx) => from + idx)
})
</script>

<template>
  <div
    v-if="stepNumbers.length"
    aria-hidden="true"
    class="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
  >
    <div
      v-for="step in stepNumbers"
      :key="step"
      v-click="step"
      class="h-0 w-0"
    />
  </div>
</template>
