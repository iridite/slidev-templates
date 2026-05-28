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
  <TransitionGroup
    appear
    tag="div"
    class="mt-6 grid gap-5 text-sm"
    :class="props.columns === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'"
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
  >
    <div
      v-for="(item, idx) in props.items"
      :key="`${item.title}-${idx}`"
      class="neko-glass-card p-4"
      :style="{ transitionDelay: `${40 + idx * 55}ms` }"
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
  </TransitionGroup>
</template>
