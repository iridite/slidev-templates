<script setup lang="ts">
interface CategoryItem {
  icon: string
  label: string
  iconColor?: string
}

interface Category {
  title: string
  icon?: string
  items: CategoryItem[]
}

const props = withDefaults(defineProps<{
  categories?: Category[]
  columns?: 2 | 3 | 4
  iconSize?: string
  gap?: string
}>(), {
  categories: () => [],
  columns: 2,
  iconSize: '32px',
  gap: '12',
})
</script>

<template>
  <ClickStepRegister :count="props.categories.length" />
  <div
    grid
    :style="{ gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))`, gap: `${props.gap === '12' ? '3rem' : props.gap}` }"
  >
    <div
      v-for="(cat, idx) in props.categories"
      :key="`${cat.title}-${idx}`"
      class="transition duration-500 ease-in-out"
      :class="$clicks < idx + 1 ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'"
    >
      <div text-xl font-bold mb-6 flex items-center>
        <div v-if="cat.icon" :class="cat.icon" text-2xl mr-3 />
        <span>{{ cat.title }}</span>
      </div>
      <div class="space-y-6" text-lg>
        <div
          v-for="(item, iIdx) in cat.items"
          :key="`${item.label}-${iIdx}`"
          flex items-center
          :style="{ fontSize: props.iconSize }"
        >
          <div :class="item.icon" mr-3 :style="item.iconColor ? { color: item.iconColor } : {}" />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
