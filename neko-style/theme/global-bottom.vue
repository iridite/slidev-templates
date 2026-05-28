<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'
import GlowBackground from './components/GlowBackground.vue'
import { isThemeManagedLayout } from './utils/themeManagedLayouts'

const { currentSlideRoute } = useNav()
const formatter = computed(() => (currentSlideRoute.value.meta?.slide as any)?.frontmatter || {})
const glowEnabled = computed(() => formatter.value.glow !== false)
const hasBackground = computed(() => Boolean(formatter.value.background))
const layout = computed(() => formatter.value.layout || 'default')
const shouldRenderGlobalGlow = computed(() => glowEnabled.value && !hasBackground.value && isThemeManagedLayout(layout.value))
</script>

<template>
  <GlowBackground v-if="shouldRenderGlobalGlow" />
</template>
