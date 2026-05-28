<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon?: string
  tone?: 'sky' | 'teal' | 'violet' | 'cyan' | 'rose' | 'amber'
  variant?: 'default' | 'compact' | 'note'
}>(), {
  icon: 'i-carbon:idea',
  tone: 'sky',
  variant: 'default',
})

const toneColors: Record<NonNullable<typeof props.tone>, string> = {
  sky: '#7dd3fc',
  teal: '#5eead4',
  violet: '#c4b5fd',
  cyan: '#67e8f9',
  rose: '#fda4af',
  amber: '#fcd34d',
}
</script>

<template>
  <div
    class="neko-learning-card"
    :class="[
      props.variant === 'compact' ? 'compact' : '',
      props.variant === 'note' ? 'note-card' : '',
      props.variant === 'compact' ? 'is-visible' : '',
    ]"
  >
    <div :class="props.icon" :style="{ color: toneColors[props.tone] }" />
    <div>
      <slot />
    </div>
  </div>
</template>
