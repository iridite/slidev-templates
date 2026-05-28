<script setup lang="ts">
interface ArchLayer {
  icon: string
  iconClass?: string
  title: string
  description?: string
  tone?: 'violet' | 'sky' | 'rose' | 'teal' | 'amber' | 'cyan'
}

const props = withDefaults(defineProps<{
  layers?: ArchLayer[]
  columns?: 3 | 4 | 5
}>(), {
  layers: () => [],
  columns: 4,
})

const toneColors: Record<NonNullable<ArchLayer['tone']>, string> = {
  violet: '#c4b5fd',
  sky: '#7dd3fc',
  rose: '#f9a8d4',
  teal: '#5eead4',
  amber: '#fcd34d',
  cyan: '#67e8f9',
}
</script>

<template>
  <ClickStepRegister :count="props.layers.length" />
  <div
    class="neko-layered-arch"
    :style="{ gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))` }"
  >
    <div
      v-for="(layer, idx) in props.layers"
      :key="`${layer.title}-${idx}`"
      class="neko-arch-layer"
      :class="$clicks >= idx + 1 ? 'is-visible' : ''"
      :style="{ transitionDelay: `${idx * 70}ms` }"
    >
      <div :class="[layer.icon, layer.iconClass]" :style="{ color: toneColors[layer.tone ?? 'sky'] }" />
      <strong>{{ layer.title }}</strong>
      <span v-if="layer.description">{{ layer.description }}</span>
    </div>
  </div>
</template>
