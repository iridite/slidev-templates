<script setup lang="ts">
interface QrItem {
  label: string
  src: string
}

const props = defineProps<{
  items: QrItem[]
}>()
</script>

<template>
  <div flex>
    <div text-sm text="zinc-300" text-right flex flex-row gap-2 mt-6 translate-x-2>
      <div v-for="(item, idx) in props.items" :key="idx" flex items-center flex-col font-bold text-xl>
        <img :src="item.src" w-70>
        <div translate-y--4>{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>
