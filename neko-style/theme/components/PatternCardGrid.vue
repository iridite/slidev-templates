<script setup lang="ts">
type PatternCardItem = {
  title: string
  description: string
  eyebrow?: string
}

const props = withDefaults(defineProps<{
  items?: PatternCardItem[]
  columns?: 2 | 3
}>(), {
  items: () => [],
  columns: 2,
})
</script>

<template>
  <div
    class="mt-6 grid gap-5 text-sm"
    :class="props.columns === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'"
  >
    <div
      v-for="(item, idx) in props.items"
      :key="`${item.title}-${idx}`"
      class="neko-glass-card p-4"
    >
      <div v-if="item.eyebrow" class="mb-2 text-xs uppercase tracking-[0.2em] opacity-60">
        {{ item.eyebrow }}
      </div>
      <div class="mb-2 font-bold">
        {{ item.title }}
      </div>
      <div class="leading-relaxed opacity-75">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>
