<script setup lang="ts">
import { computed } from 'vue'

interface TerminalLine {
  title: string
  body: string
  tone?: 'cyan' | 'violet' | 'teal' | 'amber' | 'rose' | 'sky'
  click: number
}

interface OrbitStep {
  icon: string
  label: string
  subtitle?: string
  tone?: 'cyan' | 'violet' | 'teal' | 'amber' | 'rose' | 'sky'
  angle: number
  click: number
}

const props = withDefaults(defineProps<{
  terminalLines?: TerminalLine[]
  orbitSteps?: OrbitStep[]
  orbitRadius?: { x: number, y: number }
  orbitCenter?: { x: number, y: number }
  height?: string
}>(), {
  terminalLines: () => [],
  orbitSteps: () => [],
  orbitRadius: () => ({ x: 160, y: 80 }),
  orbitCenter: () => ({ x: 200, y: 140 }),
  height: '380px',
})

const toneColors: Record<string, string> = {
  cyan: '#67e8f9',
  violet: '#c4b5fd',
  teal: '#5eead4',
  amber: '#fcd34d',
  rose: '#fda4af',
  sky: '#7dd3fc',
}

const maxClick = computed(() => Math.max(
  ...props.terminalLines.map(l => l.click),
  ...props.orbitSteps.map(s => s.click),
  0,
))

function stepPosition(angle: number) {
  const rad = (angle * Math.PI) / 180
  return {
    x: props.orbitCenter.x + props.orbitRadius.x * Math.cos(rad),
    y: props.orbitCenter.y + props.orbitRadius.y * Math.sin(rad),
  }
}

const ellipsePath = computed(() => {
  const cx = props.orbitCenter.x
  const cy = props.orbitCenter.y
  const rx = props.orbitRadius.x
  const ry = props.orbitRadius.y
  return `M${cx - rx} ${cy} A${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`
})
</script>

<template>
  <ClickStepRegister :count="maxClick" />
  <div class="grid grid-cols-2 gap-6" :style="{ minHeight: props.height }">
    <!-- Terminal pane -->
    <div class="neko-glass-card p-4 font-mono text-xs overflow-hidden flex flex-col gap-2">
      <div class="text-[0.65rem] uppercase tracking-wider opacity-40 mb-2">Terminal</div>
      <div
        v-for="(line, idx) in props.terminalLines"
        :key="`line-${idx}`"
        class="transition duration-450 ease-out"
        :class="$clicks >= line.click ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'"
        :style="{ transitionDelay: `${idx * 60}ms` }"
      >
        <div class="font-semibold" :style="{ color: toneColors[line.tone ?? 'cyan'] }">
          {{ line.title }}
        </div>
        <div class="opacity-60 mt-0.5 whitespace-pre-wrap">{{ line.body }}</div>
      </div>
    </div>

    <!-- Orbit pane -->
    <div class="relative">
      <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet">
        <!-- Orbit ellipse -->
        <path
          :d="ellipsePath"
          fill="none"
          stroke="rgb(125 211 252 / 20%)"
          stroke-width="2"
          stroke-dasharray="8 6"
        />
      </svg>

      <!-- Orbit steps -->
      <div
        v-for="(step, idx) in props.orbitSteps"
        :key="`step-${idx}`"
        class="absolute -translate-x-1/2 -translate-y-1/2 transition duration-500 ease-out"
        :class="$clicks >= step.click ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'"
        :style="{
          left: `${(stepPosition(step.angle).x / 400) * 100}%`,
          top: `${(stepPosition(step.angle).y / 280) * 100}%`,
          transitionDelay: `${idx * 80}ms`,
        }"
      >
        <div class="neko-glass-card p-3 text-center min-w-[100px]">
          <div :class="step.icon" class="text-xl mx-auto" :style="{ color: toneColors[step.tone ?? 'sky'] }" />
          <div class="text-xs font-semibold mt-1">{{ step.label }}</div>
          <div v-if="step.subtitle" class="text-[0.6rem] opacity-45 mt-0.5">{{ step.subtitle }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
