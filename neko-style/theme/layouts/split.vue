<script setup lang="ts">
import Background from '../components/Background.vue'

const props = withDefaults(defineProps<{
  background?: string
  ratio?: '5:5' | '4:6' | '6:4' | '3:7' | '7:3'
  gap?: number
}>(), {
  ratio: '5:5',
  gap: 8,
})

const ratioClasses: Record<string, string> = {
  '5:5': 'grid-cols-2',
  '4:6': 'grid-cols-[4fr_6fr]',
  '6:4': 'grid-cols-[6fr_4fr]',
  '3:7': 'grid-cols-[3fr_7fr]',
  '7:3': 'grid-cols-[7fr_3fr]',
}
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout split neko-safe-area h-full flex flex-col justify-center">
      <div v-if="$slots.title" class="mb-5">
        <slot name="title" />
      </div>
      <div
        class="grid flex-1 items-center"
        :class="[
          ratioClasses[props.ratio] || 'grid-cols-2',
          `gap-${props.gap}`,
        ]"
      >
        <div class="split-left h-full flex flex-col justify-center">
          <slot name="left">
            <slot />
          </slot>
        </div>
        <div class="split-right h-full flex flex-col justify-center">
          <slot name="right" />
        </div>
      </div>
    </div>
  </Background>
</template>
