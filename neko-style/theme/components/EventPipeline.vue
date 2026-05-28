<script setup lang="ts">
import { computed } from 'vue'

interface PipelineStage {
  id: string
  title: string
  subtitle?: string
  tone?: 'cyan' | 'violet' | 'teal' | 'sky' | 'amber' | 'rose'
  icon?: string
  x: number
  y: number
}

interface PipelineToken {
  label: string
  x: number
  y: number
  delay?: number
}

const props = withDefaults(defineProps<{
  stages?: PipelineStage[]
  tokens?: PipelineToken[]
  height?: string
  funnelCenter?: { x: number, y: number }
}>(), {
  stages: () => [],
  tokens: () => [],
  height: '420px',
  funnelCenter: () => ({ x: 450, y: 210 }),
})

const toneColors: Record<NonNullable<PipelineStage['tone']>, string> = {
  cyan: '#67e8f9',
  violet: '#c4b5fd',
  teal: '#5eead4',
  sky: '#7dd3fc',
  amber: '#fcd34d',
  rose: '#fda4af',
}

const maxClick = computed(() => Math.max(
  props.stages.length,
  props.tokens.length > 0 ? 1 : 0,
))

function tokenPath(token: PipelineToken): string {
  const fx = props.funnelCenter.x
  const fy = props.funnelCenter.y
  const cx = (token.x + fx) / 2
  const cy = token.y - 30
  return `M${token.x} ${token.y} Q${cx} ${cy} ${fx} ${fy}`
}
</script>

<template>
  <ClickStepRegister :count="maxClick" />
  <div class="relative" :style="{ height: props.height }">
    <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="neko-pipe-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgb(103 232 249 / 80%)" />
          <stop offset="100%" stop-color="rgb(167 139 250 / 80%)" />
        </linearGradient>
      </defs>

      <!-- Token stream paths -->
      <path
        v-for="(token, idx) in props.tokens"
        :key="`path-${idx}`"
        :d="tokenPath(token)"
        fill="none"
        stroke="url(#neko-pipe-grad)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-dasharray="600"
        class="transition-all duration-700 ease-out"
        :class="$clicks >= 1 ? 'opacity-60' : 'opacity-0'"
        :style="{
          strokeDashoffset: $clicks >= 1 ? '0' : '600',
          transitionDelay: `${(token.delay ?? idx * 80) + 200}ms`,
        }"
      />
    </svg>

    <!-- Token labels -->
    <div
      v-for="(token, idx) in props.tokens"
      :key="`token-${idx}`"
      class="absolute text-xs px-2 py-1 rounded bg-white/8 border border-white/10 transition duration-500 ease-out"
      :class="$clicks >= 1 ? 'opacity-80' : 'opacity-0 translate-y-2'"
      :style="{
        left: `${(token.x / 900) * 100}%`,
        top: `${(token.y / 420) * 100}%`,
        transitionDelay: `${(token.delay ?? idx * 80)}ms`,
      }"
    >
      {{ token.label }}
    </div>

    <!-- Funnel center -->
    <div
      class="absolute neko-glass-card w-20 h-20 rounded-full flex items-center justify-center transition duration-600 ease-out"
      :class="$clicks >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'"
      :style="{
        left: `calc(${(props.funnelCenter.x / 900) * 100}% - 40px)`,
        top: `calc(${(props.funnelCenter.y / 420) * 100}% - 40px)`,
      }"
    >
      <div class="i-carbon:data-volume text-2xl text-cyan-300" />
    </div>

    <!-- Stage labels -->
    <div
      v-for="(stage, idx) in props.stages"
      :key="stage.id"
      class="absolute neko-glass-card p-3 transition duration-500 ease-out"
      :class="$clicks >= idx + 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'"
      :style="{
        left: `${(stage.x / 900) * 100}%`,
        top: `${(stage.y / 420) * 100}%`,
        transitionDelay: `${idx * 100}ms`,
      }"
    >
      <div class="flex items-center gap-2">
        <div v-if="stage.icon" :class="stage.icon" :style="{ color: toneColors[stage.tone ?? 'cyan'] }" />
        <div>
          <div class="text-sm font-semibold" :style="{ color: toneColors[stage.tone ?? 'cyan'] }">{{ stage.title }}</div>
          <div v-if="stage.subtitle" class="text-xs opacity-50 mt-0.5">{{ stage.subtitle }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
