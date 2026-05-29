<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout timeline neko-safe-area" h-full flex flex-col>
      <slot name="title" />
      <div flex-1 flex items-center>
        <slot />
      </div>
    </div>
  </Background>
</template>
