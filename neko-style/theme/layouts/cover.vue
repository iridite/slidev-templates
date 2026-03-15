<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
  logoSrc?: string
  poweredBySrc?: string
}>()
</script>

<template>
  <Background :background="props.background" with-logo :logo-src="props.logoSrc" with-powered-by :powered-by-src="props.poweredBySrc">
    <div class="slidev-layout" relative h-full w-full flex flex-col justify-center text-white>
      <slot />
    </div>
  </Background>
</template>
