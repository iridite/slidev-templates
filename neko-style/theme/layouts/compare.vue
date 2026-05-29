<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout compare neko-safe-area" h-full flex flex-col>
      <div grid grid-cols-2 gap-8 flex-1>
        <div flex flex-col>
          <div text-xl font-bold mb-4 pb-2 border-b border-white/20>
            <slot name="left-title" />
          </div>
          <div flex-1>
            <slot name="left" />
          </div>
        </div>
        <div flex flex-col>
          <div text-xl font-bold mb-4 pb-2 border-b border-white/20>
            <slot name="right-title" />
          </div>
          <div flex-1>
            <slot name="right" />
          </div>
        </div>
      </div>
    </div>
  </Background>
</template>
