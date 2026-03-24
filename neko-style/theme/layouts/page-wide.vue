<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout page-wide h-full w-full px-0! py-0!">
      <slot />
    </div>
  </Background>
</template>
