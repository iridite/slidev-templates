<script setup lang="ts">
const props = withDefaults(defineProps<{
  items?: string[]
}>(), {
  items: () => [],
})
</script>

<template>
  <div class="neko-glass-checklist">
    <div
      v-for="(item, idx) in props.items"
      :key="`${idx}-${item}`"
      class="neko-glass-card p-3"
    >
      <span class="mr-1 opacity-70">{{ idx + 1 }})</span>
      <span v-html="item" />
    </div>
  </div>
</template>
