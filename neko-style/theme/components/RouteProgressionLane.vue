<script setup lang="ts">
interface RouteStep {
  icon: string
  iconClass?: string
  title: string
  subtitle?: string
  tone?: 'teal' | 'sky' | 'violet' | 'cyan' | 'orange'
}

const props = withDefaults(defineProps<{
  steps?: RouteStep[]
  connectorVariant?: 'arrow' | 'hard'
}>(), {
  steps: () => [],
  connectorVariant: 'arrow',
})

const toneVars: Record<NonNullable<RouteStep['tone']>, string> = {
  teal: '45 212 191',
  sky: '56 189 248',
  violet: '167 139 250',
  cyan: '34 211 238',
  orange: '251 146 60',
}

function getStepVar(step: RouteStep) {
  return toneVars[step.tone ?? 'sky']
}

const totalClicks = props.steps.length * 2 - 1
</script>

<template>
  <ClickStepRegister :count="totalClicks" />
  <div
    class="neko-route-lane"
    :style="{
      gridTemplateColumns: props.steps.map((_, i) => i < props.steps.length - 1 ? '1fr 38px' : '1fr').join(' '),
    }"
  >
    <template v-for="(step, idx) in props.steps" :key="`step-${idx}`">
      <div
        class="neko-route-card"
        :class="$clicks >= idx * 2 + 1 ? 'is-visible' : ''"
        :style="{ '--route-rgb': getStepVar(step) }"
      >
        <div class="neko-route-icon" :class="[step.icon, step.iconClass]" />
        <div class="neko-route-label">
          <strong>{{ step.title }}</strong>
          <span v-if="step.subtitle">{{ step.subtitle }}</span>
        </div>
      </div>
      <div
        v-if="idx < props.steps.length - 1"
        class="neko-route-connector"
        :class="[
          $clicks >= (idx + 1) * 2 ? 'is-visible' : '',
          props.connectorVariant === 'hard' ? 'hard' : '',
        ]"
        :style="{ '--route-rgb': getStepVar(step) }"
      />
    </template>
  </div>
</template>
