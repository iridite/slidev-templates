<script setup lang="ts">
interface FeatureItem {
  icon: string
  title: string
  description?: string
  tone?: 'sky' | 'teal' | 'violet' | 'cyan' | 'rose' | 'amber' | 'lime' | 'emerald'
}

const props = withDefaults(defineProps<{
  items?: FeatureItem[]
  columns?: 2 | 3 | 4 | 5
}>(), {
  items: () => [],
  columns: 3,
})

const toneColors: Record<NonNullable<FeatureItem['tone']>, string> = {
  sky: '#7dd3fc',
  teal: '#5eead4',
  violet: '#c4b5fd',
  cyan: '#67e8f9',
  rose: '#fda4af',
  amber: '#fcd34d',
  lime: '#bef264',
  emerald: '#6ee7b7',
}
</script>

<template>
  <ClickStepRegister :count="props.items.length" />
  <div
    class="neko-difficulty-grid"
    :class="`cols-${props.columns}`"
    :style="{ gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))` }"
  >
    <div
      v-for="(item, idx) in props.items"
      :key="`${item.title}-${idx}`"
      class="neko-difficulty-card transition duration-450 ease-out"
      :class="$clicks < idx + 1 ? 'opacity-0 translate-y-5 pointer-events-none' : 'opacity-100 translate-y-0'"
      :style="{ transitionDelay: `${idx * 60}ms` }"
    >
      <div :class="item.icon" :style="{ color: toneColors[item.tone ?? 'sky'] }" />
      <div>
        <strong>{{ item.title }}</strong>
        <span v-if="item.description">{{ item.description }}</span>
      </div>
    </div>
  </div>
</template>
