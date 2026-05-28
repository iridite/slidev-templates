<script setup lang="ts">
interface StatItem {
  icon: string
  value: string
  label?: string
  iconColor?: string
}

const props = withDefaults(defineProps<{
  stats?: StatItem[]
  variant?: 'pill' | 'bare'
}>(), {
  stats: () => [],
  variant: 'bare',
})
</script>

<template>
  <ClickStepRegister :count="props.stats.length" />
  <div
    class="flex items-center justify-center gap-6"
    :class="props.variant === 'pill' ? 'rounded-lg bg-white/10 backdrop-blur-sm px-4 py-2' : ''"
  >
    <div
      v-for="(stat, idx) in props.stats"
      :key="`${stat.value}-${idx}`"
      class="flex items-center gap-2 transition duration-500 ease-in-out"
      :class="$clicks < idx + 1 ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'"
    >
      <div :class="stat.icon" class="text-2xl" :style="stat.iconColor ? { color: stat.iconColor } : {}" />
      <div class="flex flex-col">
        <span class="font-bold text-lg leading-tight">{{ stat.value }}</span>
        <span v-if="stat.label" class="text-xs opacity-60">{{ stat.label }}</span>
      </div>
    </div>
  </div>
</template>
