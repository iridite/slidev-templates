<script setup lang="ts">
type MotionPrincipleItem = {
  icon?: string
  iconClass?: string
  title: string
  caption: string
  animationClass?: string
}

const props = withDefaults(defineProps<{
  items?: MotionPrincipleItem[]
}>(), {
  items: () => ([
    {
      icon: '🎯',
      title: 'balance-shake',
      caption: '强调关键点',
      animationClass: 'animate-balance-shake',
    },
    {
      icon: '⬆️',
      title: 'balance-move-left',
      caption: '动效区和文案区隔离',
      animationClass: 'animate-balance-move-left',
    },
    {
      icon: '⬇️',
      title: 'balance-move-right',
      caption: '避免图标遮挡说明文字',
      animationClass: 'animate-balance-move-right',
    },
  ]),
})
</script>

<template>
  <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
    <div
      v-for="(item, idx) in props.items"
      :key="`${item.title}-${idx}`"
      class="neko-glass-card p-5 text-center"
    >
      <div class="neko-motion-stage">
        <div class="text-6xl flex items-center justify-center" :class="item.animationClass">
          <div v-if="item.iconClass" :class="item.iconClass" />
          <span v-else>{{ item.icon }}</span>
        </div>
      </div>
      <div class="mb-1 font-bold">
        {{ item.title }}
      </div>
      <div class="neko-motion-caption">
        {{ item.caption }}
      </div>
    </div>
  </div>
</template>
