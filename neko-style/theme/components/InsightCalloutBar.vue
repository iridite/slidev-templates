<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon?: string
  tone?: 'blue' | 'yellow' | 'green' | 'red'
}>(), {
  icon: 'i-carbon:idea',
  tone: 'yellow',
})

const toneClass = {
  blue: 'text-blue-300 border-blue-800/40 bg-blue-900/20',
  yellow: 'text-yellow-300 border-yellow-800/40 bg-yellow-900/20',
  green: 'text-green-300 border-green-800/40 bg-green-900/20',
  red: 'text-red-300 border-red-800/40 bg-red-900/20',
}[props.tone]
</script>

<template>
  <div mt-6 flex justify-center>
    <div class="rounded-lg px-6 py-3 flex items-center gap-3 border" :class="toneClass">
      <div :class="props.icon" text-2xl />
      <span text-lg><slot>Key takeaway goes here.</slot></span>
    </div>
  </div>
</template>
