<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  subtitle?: string
  icon?: string
  revealStyle?: 'scale' | 'fade' | 'slide'
}>(), {
  revealStyle: 'fade',
})

const revealClasses = {
  scale: { hidden: 'opacity-0 scale-50', visible: 'opacity-100 scale-100' },
  fade: { hidden: 'opacity-0', visible: 'opacity-100' },
  slide: { hidden: 'opacity-0 translate-y-8', visible: 'opacity-100 translate-y-0' },
}
</script>

<template>
  <ClickStepRegister :count="1" />
  <div class="flex flex-col items-center justify-center h-full text-center px-16">
    <div
      v-if="props.icon"
      :class="[props.icon, 'text-6xl mb-6 transition duration-500 ease-in-out']"
      :style="{ opacity: $clicks < 1 ? '0.3' : '1' }"
    />
    <h2
      class="text-4xl font-bold leading-tight transition duration-700 ease-in-out"
      :class="$clicks < 1 ? revealClasses[props.revealStyle].hidden : revealClasses[props.revealStyle].visible"
    >
      {{ props.text }}
    </h2>
    <p
      v-if="props.subtitle"
      class="mt-4 text-lg opacity-60 transition duration-500 ease-in-out"
      :class="$clicks < 1 ? 'opacity-0 translate-y-4' : 'translate-y-0'"
      :style="{ transitionDelay: '200ms' }"
    >
      {{ props.subtitle }}
    </p>
  </div>
</template>
