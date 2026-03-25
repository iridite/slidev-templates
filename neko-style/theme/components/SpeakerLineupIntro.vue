<script setup lang="ts">
interface SpeakerLineupItem {
  name: string
  role?: string
  avatar?: string
  affiliation?: string
  affiliationIcon?: string
  handle?: string
  handleIcon?: string
  note?: string
}

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  speakers?: SpeakerLineupItem[]
}>(), {
  title: 'Speakers',
  subtitle: '',
  speakers: () => [],
})

const fallbackBadgeClasses = [
  'from-cyan-500/40 to-blue-500/15',
  'from-violet-500/40 to-fuchsia-500/15',
  'from-emerald-500/35 to-lime-500/12',
  'from-amber-500/35 to-orange-500/12',
]

function getInitials(name: string) {
  const parts = name
    .split(/\s+/)
    .map(part => part.trim())
    .filter(Boolean)

  if (!parts.length)
    return 'NA'

  return parts
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('')
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <div v-if="props.title || props.subtitle" class="text-center">
      <div v-if="props.title" class="text-4xl font-semibold leading-tight">
        {{ props.title }}
      </div>
      <div v-if="props.subtitle" class="mx-auto mt-3 max-w-3xl text-sm leading-relaxed opacity-75">
        {{ props.subtitle }}
      </div>
    </div>

    <div
      class="grid gap-6"
      :class="props.speakers.length >= 3 ? 'grid-cols-1 md:grid-cols-3' : props.speakers.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'"
    >
      <div
        v-for="(speaker, idx) in props.speakers"
        :key="`${speaker.name}-${idx}`"
        v-click="idx + 1"
        class="neko-glass-card flex h-full flex-col items-center p-6 text-center transition duration-500 ease-in-out"
        :class="$clicks < idx + 1 ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'"
      >
        <img
          v-if="speaker.avatar"
          :src="speaker.avatar"
          class="mb-5 h-28 w-28 rounded-full object-cover"
        >
        <div
          v-else
          class="mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br text-3xl font-semibold"
          :class="fallbackBadgeClasses[idx % fallbackBadgeClasses.length]"
        >
          {{ getInitials(speaker.name) }}
        </div>

        <div class="text-2xl font-semibold">
          {{ speaker.name }}
        </div>
        <div v-if="speaker.role" class="mt-2 text-sm opacity-80">
          {{ speaker.role }}
        </div>

        <div v-if="speaker.affiliation" class="mt-4 flex items-center gap-2 text-xs opacity-70">
          <div v-if="speaker.affiliationIcon" :class="speaker.affiliationIcon" />
          <span>{{ speaker.affiliation }}</span>
        </div>

        <div v-if="speaker.handle" class="mt-3 flex items-center gap-2 text-sm opacity-85">
          <div v-if="speaker.handleIcon" :class="speaker.handleIcon" />
          <span class="font-mono underline decoration-dashed decoration-zinc-300">{{ speaker.handle }}</span>
        </div>

        <div v-if="speaker.note" class="mt-4 text-xs leading-relaxed opacity-65">
          {{ speaker.note }}
        </div>
      </div>
    </div>
  </div>
</template>
