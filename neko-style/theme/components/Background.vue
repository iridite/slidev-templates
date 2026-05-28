<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'
import GlowBackground from './GlowBackground.vue'
import { isThemeManagedLayout } from '../utils/themeManagedLayouts'

const props = defineProps<{
  background?: string
  withLogo?: boolean
  logoSrc?: string
  withPoweredBy?: boolean
  poweredBySrc?: string
}>()

function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

function isDirectCssBackground(background: string) {
  const value = background.trim()
  return value.startsWith('#')
    || value.startsWith('rgb(')
    || value.startsWith('rgba(')
    || value.startsWith('hsl(')
    || value.startsWith('hsla(')
    || value.startsWith('var(')
    || value.startsWith('linear-gradient(')
    || value.startsWith('radial-gradient(')
    || value.startsWith('conic-gradient(')
    || value.startsWith('repeating-linear-gradient(')
    || value.startsWith('repeating-radial-gradient(')
    || value.startsWith('repeating-conic-gradient(')
    || value.startsWith('url(')
}

function isAssetPathBackground(background: string) {
  const value = background.trim()
  return /^(\/|\.\/|\.\.\/|https?:\/\/|data:)/.test(value)
    || /\.[a-z0-9]+($|\?)/i.test(value)
}

function handleBackground(background?: string): Record<string, string | undefined> {
  const value = background?.trim()
  const useDirectBackground = Boolean(value) && isDirectCssBackground(value!)
  const useAssetPath = Boolean(value) && !useDirectBackground && isAssetPathBackground(value!)

  const style = {
    background: useDirectBackground ? value : undefined,
    color: value && useAssetPath ? 'white' : undefined,
    backgroundImage: useAssetPath ? `url("${resolveAssetUrl(value!)}")` : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  if (!style.background)
    delete style.background

  return style
}

const style = computed(() => handleBackground(props.background))
const { currentSlideRoute } = useNav()
const formatter = computed(() => (currentSlideRoute.value.meta?.slide as any)?.frontmatter || {})
const glowEnabled = computed(() => formatter.value.glow !== false)
const layout = computed(() => formatter.value.layout || 'default')
const shouldRenderLocalGlow = computed(() => !props.background && glowEnabled.value && !isThemeManagedLayout(layout.value))
</script>

<template>
  <div :style="style" class="relative h-full w-full">
    <GlowBackground v-if="shouldRenderLocalGlow" :z-index="0" />
    <div class="relative z-10 h-full w-full">
      <div
        v-if="props.withLogo && props.logoSrc"
        absolute left="[40px]" top="[20px]" w="[144px]" h="[46px]"
        transition="all ease-in-out" duration-500
      >
        <img :src="props.logoSrc" alt="Logo">
      </div>
      <slot />
      <div v-if="props.withPoweredBy && props.poweredBySrc" absolute right="[40px]" bottom="[0px]" w="[144px]" h="[46px]">
        <img :src="props.poweredBySrc" alt="Powered by">
      </div>
    </div>
  </div>
</template>
