<script setup lang="ts">
interface AccentItem {
  title: string
  description?: string
  icon?: string
  tone?: 'green' | 'blue' | 'purple' | 'red' | 'amber' | 'cyan' | 'violet' | 'indigo'
}

const props = withDefaults(defineProps<{
  items?: AccentItem[]
}>(), {
  items: () => [],
})

const toneClasses: Record<NonNullable<AccentItem['tone']>, { border: string; bg: string; icon: string }> = {
  green: { border: 'border-green-500', bg: 'bg-green-900/20', icon: 'text-green-400' },
  blue: { border: 'border-blue-500', bg: 'bg-blue-900/20', icon: 'text-blue-400' },
  purple: { border: 'border-purple-500', bg: 'bg-purple-900/20', icon: 'text-purple-400' },
  red: { border: 'border-red-500', bg: 'bg-red-900/20', icon: 'text-red-400' },
  amber: { border: 'border-amber-500', bg: 'bg-amber-900/20', icon: 'text-amber-400' },
  cyan: { border: 'border-cyan-500', bg: 'bg-cyan-900/20', icon: 'text-cyan-400' },
  violet: { border: 'border-violet-500', bg: 'bg-violet-900/20', icon: 'text-violet-400' },
  indigo: { border: 'border-indigo-500', bg: 'bg-indigo-900/20', icon: 'text-indigo-400' },
}
</script>

<template>
  <ClickStepRegister :count="props.items.length" />
  <div class="space-y-4">
    <div
      v-for="(item, idx) in props.items"
      :key="`${item.title}-${idx}`"
      class="p-3 border-l-4 rounded-r-lg backdrop-blur transition duration-500 ease-in-out"
      :class="[
        toneClasses[item.tone ?? 'blue'].border,
        toneClasses[item.tone ?? 'blue'].bg,
        $clicks < idx + 1 ? 'opacity-0 translate-x--4 pointer-events-none' : 'opacity-100 translate-x-0',
      ]"
    >
      <div class="font-bold flex items-center gap-2">
        <div v-if="item.icon" :class="[item.icon, 'text-xl', toneClasses[item.tone ?? 'blue'].icon]" />
        <span>{{ item.title }}</span>
      </div>
      <div v-if="item.description" class="text-sm mt-1 opacity-80">{{ item.description }}</div>
    </div>
  </div>
</template>
