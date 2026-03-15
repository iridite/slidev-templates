<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout" relative h-full flex flex-col items-center justify-center text-5xl text-white font-semibold>
      <h1>
        Thanks
      </h1>
    </div>
  </Background>
</template>
