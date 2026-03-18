<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'
import GlowBackground from './GlowBackground.vue'

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

function handleBackground(background?: string): any {
  const isColor = background && ['#', 'rgb', 'hsl'].some(v => background.indexOf(v) === 0)

  const style = {
    background: isColor ? background : undefined,
    color: background && !isColor ? 'white' : undefined,
    backgroundImage: isColor ? undefined : background ? `url("${resolveAssetUrl(background)}")` : undefined,
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
</script>

<template>
  <div :style="style" class="h-full w-full">
    <GlowBackground v-if="!props.background && glowEnabled" />
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
</template>
