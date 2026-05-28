<script setup lang="ts">
const props = withDefaults(defineProps<{
  code?: string
  lang?: string
  explanationSide?: 'left' | 'right'
}>(), {
  code: '',
  lang: 'typescript',
  explanationSide: 'right',
})
</script>

<template>
  <div class="grid grid-cols-2 gap-6 h-full items-start">
    <div v-if="props.explanationSide === 'right'" class="overflow-auto rounded-lg bg-[#1e1e2e] p-4 text-sm font-mono leading-relaxed">
      <pre class="whitespace-pre-wrap"><code>{{ props.code }}</code></pre>
    </div>
    <div
      class="transition duration-500 ease-in-out"
      :class="$clicks < 1 ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'"
    >
      <slot name="explanation">
        <p class="text-sm opacity-70">Provide explanation via #explanation slot</p>
      </slot>
    </div>
    <div v-if="props.explanationSide === 'left'" class="overflow-auto rounded-lg bg-[#1e1e2e] p-4 text-sm font-mono leading-relaxed">
      <pre class="whitespace-pre-wrap"><code>{{ props.code }}</code></pre>
    </div>
  </div>
</template>
