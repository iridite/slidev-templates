<script setup lang="ts">
const props = withDefaults(defineProps<{
  question: string
  compact?: boolean
}>(), {
  compact: false,
})
</script>

<template>
  <div class="flex justify-center items-center" :class="props.compact ? 'gap-20 px-20 text-xl' : 'gap-20 px-40 text-xl'">
    <div
      absolute
      class="transition duration-500 ease-in-out"
      :class="[
        props.compact ? 'text-4xl' : 'text-6xl',
        $clicks < 1 ? 'text-white scale-100' : 'translate-y--18 scale-40 text-white/30',
      ]"
    >
      <span>{{ props.question }}</span>
    </div>

    <div flex flex-col items-center>
      <slot />
    </div>
  </div>
</template>
