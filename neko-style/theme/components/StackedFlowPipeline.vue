<script setup lang="ts">
interface PipelineNode {
  icon: string
  iconClass?: string
  title: string
  subtitle?: string
  tone?: 'sky' | 'teal' | 'violet' | 'cyan' | 'rose' | 'amber'
}

const props = withDefaults(defineProps<{
  nodes?: PipelineNode[]
  tall?: boolean
  variant?: 'pipeline' | 'stacked'
}>(), {
  nodes: () => [],
  tall: false,
  variant: 'pipeline',
})

const toneColors: Record<NonNullable<PipelineNode['tone']>, string> = {
  sky: '#7dd3fc',
  teal: '#5eead4',
  violet: '#c4b5fd',
  cyan: '#67e8f9',
  rose: '#fb7185',
  amber: '#fcd34d',
}

const totalClicks = props.variant === 'pipeline' ? props.nodes.length * 2 - 1 : props.nodes.length
</script>

<template>
  <ClickStepRegister :count="totalClicks" />

  <!-- Pipeline variant: nodes with arrows between -->
  <div
    v-if="props.variant === 'pipeline'"
    class="neko-pipeline"
    :style="{
      gridTemplateColumns: props.nodes.map((_, i) => i < props.nodes.length - 1 ? '1fr 60px' : '1fr').join(' '),
    }"
  >
    <template v-for="(node, idx) in props.nodes" :key="`node-${idx}`">
      <div
        class="neko-pipe-node"
        :class="[
          props.tall ? 'tall' : '',
          $clicks >= idx * 2 + 1 ? 'is-visible' : '',
        ]"
        :style="{ transitionDelay: `${idx * 60}ms` }"
      >
        <div :class="[node.icon, node.iconClass]" :style="{ color: toneColors[node.tone ?? 'cyan'] }" />
        <strong>{{ node.title }}</strong>
        <span v-if="node.subtitle" class="text-xs opacity-55 text-center">{{ node.subtitle }}</span>
      </div>
      <div
        v-if="idx < props.nodes.length - 1"
        class="neko-pipe-arrow"
        :class="$clicks >= (idx + 1) * 2 ? 'is-visible' : ''"
      />
    </template>
  </div>

  <!-- Stacked variant: equal columns, no arrows -->
  <div
    v-else
    class="neko-stacked-flow"
    :style="{ gridTemplateColumns: `repeat(${props.nodes.length}, minmax(0, 1fr))` }"
  >
    <div
      v-for="(node, idx) in props.nodes"
      :key="`stack-${idx}`"
      class="neko-stack-row"
      :class="$clicks >= idx + 1 ? 'is-visible' : ''"
      :style="{ transitionDelay: `${idx * 70}ms` }"
    >
      <div :class="[node.icon, node.iconClass]" :style="{ color: toneColors[node.tone ?? 'rose'] }" />
      <strong>{{ node.title }}</strong>
      <span v-if="node.subtitle">{{ node.subtitle }}</span>
    </div>
  </div>
</template>
