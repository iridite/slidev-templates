<script setup lang="ts">
import ClickStepRegister from './ClickStepRegister.vue'

export interface MetricItem {
  value: string
  label: string
  subtext?: string
  trend?: string
  trendTone?: 'up' | 'down' | 'neutral'
  tone?: 'sky' | 'teal' | 'violet' | 'amber' | 'rose' | 'emerald'
  icon?: string
}

const props = withDefaults(defineProps<{
  items?: MetricItem[]
  columns?: 2 | 3 | 4
  animate?: boolean
  clicksFrom?: number
}>(), {
  items: () => [],
  columns: 3,
  animate: true,
  clicksFrom: 1,
})

const toneStyles: Record<string, { value: string; border: string; bg: string }> = {
  sky: { value: 'text-sky-300', border: 'border-sky-500/25', bg: 'bg-sky-500/5' },
  teal: { value: 'text-teal-300', border: 'border-teal-500/25', bg: 'bg-teal-500/5' },
  violet: { value: 'text-violet-300', border: 'border-violet-500/25', bg: 'bg-violet-500/5' },
  amber: { value: 'text-amber-300', border: 'border-amber-500/25', bg: 'bg-amber-500/5' },
  rose: { value: 'text-rose-300', border: 'border-rose-500/25', bg: 'bg-rose-500/5' },
  emerald: { value: 'text-emerald-300', border: 'border-emerald-500/25', bg: 'bg-emerald-500/5' },
}

const colClasses: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
}
</script>

<template>
  <ClickStepRegister v-if="props.animate" :count="props.items.length" :from="props.clicksFrom" />

  <div
    class="grid gap-5 w-full"
    :class="colClasses[props.columns] || 'grid-cols-3'"
  >
    <div
      v-for="(item, idx) in props.items"
      :key="`${item.value}-${idx}`"
      class="neko-glass-card p-6 flex flex-col justify-between border rounded-2xl relative overflow-hidden transition-all duration-500 ease-in-out"
      :class="[
        toneStyles[item.tone ?? 'sky'].border,
        toneStyles[item.tone ?? 'sky'].bg,
        props.animate && $clicks < props.clicksFrom + idx ? 'opacity-0 translate-y-4 scale-95 pointer-events-none' : 'opacity-100 translate-y-0 scale-100',
      ]"
      :style="{ transitionDelay: props.animate ? `${idx * 70}ms` : '0ms' }"
    >
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <div v-if="item.icon" :class="item.icon" class="text-xl opacity-75" />
          <span class="text-xs uppercase tracking-wider font-semibold text-white/60">{{ item.label }}</span>
        </div>
        <div
          v-if="item.trend"
          class="text-xs font-mono font-semibold px-2 py-0.5 rounded-full"
          :class="[
            item.trendTone === 'down' ? 'bg-rose-500/20 text-rose-300' :
            item.trendTone === 'neutral' ? 'bg-white/10 text-white/70' :
            'bg-emerald-500/20 text-emerald-300',
          ]"
        >
          {{ item.trend }}
        </div>
      </div>

      <div class="my-2">
        <div
          class="text-4xl md:text-5xl font-extrabold tracking-tight font-mono leading-none"
          :class="toneStyles[item.tone ?? 'sky'].value"
        >
          {{ item.value }}
        </div>
      </div>

      <div v-if="item.subtext" class="text-xs text-white/50 mt-3 border-t border-white/5 pt-3 leading-relaxed">
        {{ item.subtext }}
      </div>
    </div>
  </div>
</template>
