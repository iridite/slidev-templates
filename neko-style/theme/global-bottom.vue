<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'
import GlowBackground from './components/GlowBackground.vue'

const { currentSlideRoute } = useNav()
const formatter = computed(() => (currentSlideRoute.value.meta?.slide as any)?.frontmatter || {})
const glowEnabled = computed(() => formatter.value.glow !== false)
const hasBackground = computed(() => Boolean(formatter.value.background))
</script>

<template>
  <GlowBackground v-if="glowEnabled && !hasBackground" />
</template>
