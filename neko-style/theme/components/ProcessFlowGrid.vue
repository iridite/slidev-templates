<script setup lang="ts">
interface ProcessFlowItem {
  title: string
  description?: string
  detail?: string
  icon?: string
  eyebrow?: string
  stepLabel?: string
}

const props = withDefaults(defineProps<{
  items?: ProcessFlowItem[]
  columns?: 2 | 3 | 4
}>(), {
  items: () => [],
  columns: 3,
})

const columnClassMap: Record<2 | 3 | 4, string> = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
}
</script>

<template>
  <div class="mt-6 grid gap-5" :class="columnClassMap[props.columns]">
    <div
      v-for="(item, idx) in props.items"
      :key="`${item.title}-${idx}`"
      v-click="idx + 1"
      class="neko-glass-card flex h-full flex-col gap-4 p-5 transition duration-500 ease-in-out"
      :class="$clicks < idx + 1 ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'"
    >
      <div class="flex items-start gap-4">
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-sm font-semibold"
        >
          <div v-if="item.icon" :class="item.icon" class="text-xl" />
          <span v-else>{{ item.stepLabel ?? String(idx + 1).padStart(2, '0') }}</span>
        </div>

        <div class="min-w-0 flex-1">
          <div v-if="item.eyebrow" class="mb-1 text-[0.7rem] uppercase tracking-[0.22em] opacity-60">
            {{ item.eyebrow }}
          </div>
          <div class="text-lg font-semibold leading-snug">
            {{ item.title }}
          </div>
          <div v-if="item.description" class="mt-2 text-sm leading-relaxed opacity-80">
            {{ item.description }}
          </div>
        </div>
      </div>

      <div v-if="item.detail" class="border-t border-white/8 pt-3 text-xs leading-relaxed opacity-65">
        {{ item.detail }}
      </div>
    </div>
  </div>
</template>
