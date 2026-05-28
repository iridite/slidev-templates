<script setup lang="ts">
const props = withDefaults(defineProps<{
  items?: string[]
}>(), {
  items: () => [],
})
</script>

<template>
  <TransitionGroup
    appear
    tag="div"
    class="neko-glass-checklist"
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-3 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
  >
    <div
      v-for="(item, idx) in props.items"
      :key="`${idx}-${item}`"
      class="neko-glass-card p-3"
      :style="{ transitionDelay: `${30 + idx * 50}ms` }"
    >
      <span class="mr-1 opacity-70">{{ idx + 1 }})</span>
      <span v-html="item" />
    </div>
  </TransitionGroup>
</template>
