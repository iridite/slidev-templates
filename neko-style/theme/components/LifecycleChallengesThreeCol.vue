<script setup lang="ts">
interface LifecycleChallengeItem {
  iconClass?: string
  title: string
  description: string
}

const props = withDefaults(defineProps<{
  items?: LifecycleChallengeItem[]
}>(), {
  items: () => [],
})

const fallbackItems: LifecycleChallengeItem[] = [
  {
    iconClass: 'i-carbon:warning-alt text-amber-300',
    title: 'Dependency Hell',
    description: 'CUDA 与依赖版本漂移导致环境不可复现。',
  },
  {
    iconClass: 'i-carbon:download text-blue-300',
    title: 'Data Preparation',
    description: '数据来源分散，下载与预处理流程冗长。',
  },
  {
    iconClass: 'i-carbon:data-check text-green-300',
    title: 'Governance',
    description: '跨团队共享、版本追踪、复现要求并存。',
  },
]
</script>

<template>
  <div class="grid h-74 grid-cols-1 gap-3 md:grid-cols-3">
    <div
      v-for="(item, idx) in (props.items.length ? props.items : fallbackItems)"
      :key="`${item.title}-${idx}`"
      border="2 solid white/5"
      rounded-lg
      overflow-hidden
      bg="white/5"
      backdrop-blur-sm
    >
      <div flex items-center bg="white/10" px-3 py-2>
        <div :class="item.iconClass || fallbackItems[idx % fallbackItems.length].iconClass" mr-2 />
        <div font-semibold>{{ item.title }}</div>
      </div>
      <div px-4 py-3 text-sm opacity-80>
        {{ item.description }}
      </div>
    </div>
  </div>
</template>
