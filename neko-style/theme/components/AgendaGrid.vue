<script setup lang="ts">
interface AgendaSection {
  title: string
  icon?: string
  tone?: 'violet' | 'blue' | 'purple' | 'green' | 'cyan' | 'amber' | 'indigo' | 'rose'
  items: string[]
}

const props = withDefaults(defineProps<{
  sections?: AgendaSection[]
  columns?: 2 | 3 | 4
}>(), {
  sections: () => [],
  columns: 2,
})

const toneColors: Record<NonNullable<AgendaSection['tone']>, string> = {
  violet: 'text-violet-400',
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  green: 'text-green-400',
  cyan: 'text-cyan-400',
  amber: 'text-amber-400',
  indigo: 'text-indigo-400',
  rose: 'text-rose-400',
}
</script>

<template>
  <ClickStepRegister :count="props.sections.length" />
  <div
    grid
    :style="{ gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))` }"
    gap-4
  >
    <div
      v-for="(section, idx) in props.sections"
      :key="`${section.title}-${idx}`"
      class="p-4 rounded-lg backdrop-blur transition duration-500 ease-in-out"
      :class="$clicks < idx + 1 ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'"
    >
      <div class="font-bold text-lg mb-3">{{ section.title }}</div>
      <ul class="space-y-2 text-sm">
        <li
          v-for="(item, iIdx) in section.items"
          :key="`${item}-${iIdx}`"
          class="flex items-start gap-2"
        >
          <div
            :class="[section.icon ?? 'i-carbon:arrow-right', toneColors[section.tone ?? 'violet']]"
            class="mt-1 flex-shrink-0"
          />
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
