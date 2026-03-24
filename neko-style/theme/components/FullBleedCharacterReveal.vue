<script setup lang="ts">
interface StatItem {
  icon?: string
  text: string
}

const props = withDefaults(defineProps<{
  image: string
  title?: string
  stats?: StatItem[]
}>(), {
  title: 'Character Spotlight',
  stats: () => [],
})
</script>

<template>
  <div>
    <div
      w-full h-full bg="black/15" absolute backdrop-blur-sm z-100
      :class="[$clicks < 1 ? 'opacity-0' : 'opacity-100']"
      transition duration-1200 ease-in-out
    />

    <img
      :class="[$clicks < 1 ? '' : 'blur-lg scale-120']"
      :src="props.image"
      transition duration-1200 ease-in-out
    >

    <div
      :class="$clicks < 1 ? 'opacity-0' : 'opacity-100'"
      absolute inset-0 w-fit h-fit transition duration-500 ease-in-out z-101
      translate="x-68 y-50"
    >
      <div text="20" font-cuteen text-rose-400 style="-webkit-text-stroke: 6px #ffeef7; paint-order: stroke;">
        {{ props.title }}
      </div>

      <div v-if="props.stats.length" flex gap-4 rounded-lg bg="white/50" text="black/70" backdrop-blur-sm px-2 py-1>
        <div v-for="(item, idx) in props.stats" :key="idx" flex items-center gap-2>
          <div v-if="item.icon" :class="item.icon" text-2xl />
          <div>{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
