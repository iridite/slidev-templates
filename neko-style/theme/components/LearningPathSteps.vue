<script setup lang="ts">
interface PathStep {
  icon: string
  title: string
  tone?: 'blue' | 'purple' | 'green' | 'amber' | 'cyan' | 'violet' | 'rose' | 'indigo'
  items: string[]
}

const props = withDefaults(defineProps<{
  steps?: PathStep[]
  ordered?: boolean
}>(), {
  steps: () => [],
  ordered: true,
})

const toneClasses: Record<NonNullable<PathStep['tone']>, { border: string; bg: string; icon: string }> = {
  blue: { border: 'border-blue-800/60', bg: 'bg-blue-800/20', icon: 'text-blue-400' },
  purple: { border: 'border-purple-800/60', bg: 'bg-purple-800/20', icon: 'text-purple-400' },
  green: { border: 'border-green-800/60', bg: 'bg-green-800/20', icon: 'text-green-400' },
  amber: { border: 'border-amber-800/60', bg: 'bg-amber-800/20', icon: 'text-amber-400' },
  cyan: { border: 'border-cyan-800/60', bg: 'bg-cyan-800/20', icon: 'text-cyan-400' },
  violet: { border: 'border-violet-800/60', bg: 'bg-violet-800/20', icon: 'text-violet-400' },
  rose: { border: 'border-rose-800/60', bg: 'bg-rose-800/20', icon: 'text-rose-400' },
  indigo: { border: 'border-indigo-800/60', bg: 'bg-indigo-800/20', icon: 'text-indigo-400' },
}
</script>

<template>
  <ClickStepRegister :count="props.steps.length" />
  <div class="space-y-4">
    <div
      v-for="(step, idx) in props.steps"
      :key="`${step.title}-${idx}`"
      class="p-3 border rounded-lg backdrop-blur transition duration-500 ease-in-out"
      :class="[
        toneClasses[step.tone ?? 'blue'].border,
        toneClasses[step.tone ?? 'blue'].bg,
        $clicks < idx + 1 ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0',
      ]"
    >
      <div class="font-bold flex items-center gap-2">
        <div :class="[step.icon, 'text-xl', toneClasses[step.tone ?? 'blue'].icon]" />
        <span>{{ step.title }}</span>
      </div>
      <component
        :is="props.ordered ? 'ol' : 'ul'"
        class="text-sm mt-2 space-y-1 pl-4 text-white/80"
        :class="props.ordered ? 'list-decimal' : 'list-disc'"
      >
        <li v-for="(item, iIdx) in step.items" :key="`${item}-${iIdx}`">{{ item }}</li>
      </component>
    </div>
  </div>
</template>
