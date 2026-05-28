<script setup lang="ts">
interface IconLabelItem {
  icon: string
  label: string
  iconColor?: string
}

const props = withDefaults(defineProps<{
  items?: IconLabelItem[]
  size?: 'sm' | 'md' | 'lg'
  gap?: string
}>(), {
  items: () => [],
  size: 'md',
  gap: '4',
})

const sizeMap = { sm: 'text-lg', md: 'text-2xl', lg: 'text-3xl' }
</script>

<template>
  <ClickStepRegister :count="props.items.length" />
  <div
    flex flex-wrap items-start content-start
    :style="{ gap: `${props.gap === '4' ? '1rem' : props.gap}` }"
  >
    <div
      v-for="(item, idx) in props.items"
      :key="`${item.label}-${idx}`"
      flex items-center gap-2 w-fit h-fit
      :class="[
        sizeMap[props.size],
        'transition duration-500 ease-in-out',
        $clicks < idx + 1 ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100',
      ]"
    >
      <div :class="item.icon" inline-block :style="item.iconColor ? { color: item.iconColor } : {}" />
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>
