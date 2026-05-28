<script setup lang="ts">
import { computed } from 'vue'
import { edgePath } from '../utils/flowGeometry'
import type { FlowEdge, FlowNode } from '../utils/flowGeometry'

const props = withDefaults(defineProps<{
  nodes?: FlowNode[]
  edges?: FlowEdge[]
  height?: string
  viewBox?: string
}>(), {
  nodes: () => [],
  edges: () => [],
  height: '420px',
  viewBox: '0 0 900 420',
})

const toneColors: Record<string, string> = {
  sky: '#7dd3fc',
  teal: '#5eead4',
  violet: '#c4b5fd',
  cyan: '#67e8f9',
  rose: '#fda4af',
  amber: '#fcd34d',
  lime: '#bef264',
  emerald: '#6ee7b7',
}

const computedEdges = computed(() =>
  props.edges.map(edge => ({
    ...edge,
    path: edgePath(props.nodes, edge),
  })),
)

const maxClick = computed(() => {
  const nodeMax = Math.max(0, ...props.nodes.map(n => n.click))
  const edgeMax = Math.max(0, ...props.edges.map(e => e.click))
  return Math.max(nodeMax, edgeMax)
})
</script>

<template>
  <ClickStepRegister :count="maxClick" />
  <div class="relative" :style="{ height: props.height }">
    <!-- SVG edges layer -->
    <svg
      class="absolute inset-0 w-full h-full pointer-events-none"
      :viewBox="props.viewBox"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        v-for="edge in computedEdges"
        :key="edge.id"
        :d="edge.path"
        class="neko-svg-edge"
        :class="$clicks >= edge.click ? 'is-visible' : ''"
        :style="{ transitionDelay: `${edge.click * 50}ms` }"
      />
    </svg>

    <!-- Node cards layer -->
    <div
      v-for="node in props.nodes"
      :key="node.id"
      class="absolute neko-glass-card p-3 transition duration-500 ease-out"
      :class="[
        node.className,
        $clicks >= node.click ? 'opacity-100 scale-100' : 'opacity-0 scale-92 pointer-events-none',
      ]"
      :style="{
        left: `${(node.x / 900) * 100}%`,
        top: `${(node.y / 420) * 100}%`,
        width: `${(node.width / 900) * 100}%`,
        height: node.height ? `${(node.height / 420) * 100}%` : 'auto',
        transitionDelay: `${node.click * 50}ms`,
      }"
    >
      <div class="flex items-center gap-3">
        <div
          :class="[node.icon, node.iconClass]"
          class="text-xl shrink-0"
          :style="{ color: toneColors[node.className?.replace('tone-', '') ?? 'sky'] }"
        />
        <div class="min-w-0">
          <div class="text-sm font-semibold leading-tight">{{ node.title }}</div>
          <div v-if="node.subtitle" class="text-xs opacity-55 mt-1">{{ node.subtitle }}</div>
        </div>
      </div>
      <div v-if="node.tag" class="mt-2 text-[0.65rem] opacity-45 uppercase tracking-wider">
        {{ node.tag }}
      </div>
    </div>
  </div>
</template>
