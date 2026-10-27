<script setup lang="ts">
import ClickStepRegister from './ClickStepRegister.vue'

export interface MatrixRow {
  dimension: string
  traditional: string
  modern: string
  tag?: string
}

const props = withDefaults(defineProps<{
  rows?: MatrixRow[]
  traditionalTitle?: string
  modernTitle?: string
  dimensionTitle?: string
  animate?: boolean
  clicksFrom?: number
}>(), {
  rows: () => [],
  traditionalTitle: 'Traditional Approach',
  modernTitle: 'Modern / AI-Powered',
  dimensionTitle: 'Dimension',
  animate: true,
  clicksFrom: 1,
})
</script>

<template>
  <ClickStepRegister v-if="props.animate" :count="props.rows.length" :from="props.clicksFrom" />

  <div class="neko-glass-card rounded-2xl overflow-hidden border border-white/10 w-full text-sm">
    <!-- Header -->
    <div class="grid grid-cols-[1.2fr_2fr_2fr] bg-white/5 border-b border-white/10 px-5 py-3 font-semibold text-xs tracking-wider uppercase">
      <div class="text-white/50">{{ props.dimensionTitle }}</div>
      <div class="text-rose-300/80 flex items-center gap-1.5">
        <div class="i-carbon:close-filled text-sm" />
        {{ props.traditionalTitle }}
      </div>
      <div class="text-emerald-300 flex items-center gap-1.5">
        <div class="i-carbon:checkmark-filled text-sm text-emerald-400" />
        {{ props.modernTitle }}
      </div>
    </div>

    <!-- Rows -->
    <div
      v-for="(row, idx) in props.rows"
      :key="`${row.dimension}-${idx}`"
      class="grid grid-cols-[1.2fr_2fr_2fr] items-center px-5 py-3.5 border-b border-white/5 transition-all duration-400 ease-in-out"
      :class="[
        idx % 2 === 1 ? 'bg-white/[0.02]' : '',
        props.animate && $clicks < props.clicksFrom + idx ? 'opacity-20 blur-[1px]' : 'opacity-100 blur-0',
      ]"
    >
      <div class="font-medium text-white/80 pr-3">{{ row.dimension }}</div>
      <div class="text-white/50 text-xs pr-4 line-through decoration-rose-400/40">{{ row.traditional }}</div>
      <div class="text-white/95 text-xs font-medium flex items-center gap-2">
        <span class="text-emerald-300 font-semibold">{{ row.modern }}</span>
        <span
          v-if="row.tag"
          class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-mono"
        >
          {{ row.tag }}
        </span>
      </div>
    </div>
  </div>
</template>
