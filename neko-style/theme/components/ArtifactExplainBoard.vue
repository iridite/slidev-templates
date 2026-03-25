<script setup lang="ts">
interface ArtifactExplainItem {
  title: string
  description?: string
  detail?: string
  icon?: string
  eyebrow?: string
  tone?: 'blue' | 'green' | 'purple' | 'amber' | 'red' | 'cyan'
  positionClass?: string
  widthClass?: string
  inactiveAfterStep?: number
}

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  items?: ArtifactExplainItem[]
  artifactClass?: string
  mode?: 'overlay' | 'sidebar'
  panelClass?: string
}>(), {
  title: '',
  subtitle: '',
  items: () => [],
  artifactClass: 'min-h-[26rem]',
  mode: 'overlay',
  panelClass: '',
})

const toneClassMap: Record<NonNullable<ArtifactExplainItem['tone']>, string> = {
  blue: 'text-blue-300',
  green: 'text-green-300',
  purple: 'text-purple-300',
  amber: 'text-amber-300',
  red: 'text-red-300',
  cyan: 'text-cyan-300',
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div v-if="props.title || props.subtitle">
      <div v-if="props.title" class="text-3xl font-semibold leading-tight">
        {{ props.title }}
      </div>
      <div v-if="props.subtitle" class="mt-2 text-sm leading-relaxed opacity-75">
        {{ props.subtitle }}
      </div>
    </div>

    <div
      v-if="props.mode === 'sidebar'"
      class="grid gap-6"
      :class="props.panelClass || 'grid-cols-1 xl:grid-cols-[minmax(0,1.3fr)_minmax(22rem,0.9fr)]'"
    >
      <div class="overflow-hidden rounded-2xl border border-white/10 bg-black/15 p-4 backdrop-blur-sm" :class="props.artifactClass">
        <slot />
      </div>

      <div class="flex flex-col gap-4">
        <div
          v-for="(item, idx) in props.items"
          :key="`${item.title}-${idx}`"
          v-click="idx + 1"
          class="transition duration-500 ease-in-out"
          :class="[
            $clicks < idx + 1 ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100',
            item.inactiveAfterStep && $clicks > item.inactiveAfterStep ? 'opacity-55 blur-sm' : '',
          ]"
        >
          <div class="neko-glass-card p-4 shadow-[0_18px_60px_rgba(0,0,0,0.2)]" :class="item.widthClass ?? 'w-full'">
            <div class="flex items-start gap-3">
              <div class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-sm font-semibold">
                <div v-if="item.icon" :class="[item.icon, toneClassMap[item.tone ?? 'blue']]" class="text-lg" />
                <span v-else>{{ String(idx + 1).padStart(2, '0') }}</span>
              </div>

              <div class="min-w-0 flex-1">
                <div v-if="item.eyebrow" class="mb-1 text-[0.68rem] uppercase tracking-[0.2em] opacity-55">
                  {{ item.eyebrow }}
                </div>
                <div class="text-sm font-semibold leading-snug" :class="toneClassMap[item.tone ?? 'blue']">
                  {{ item.title }}
                </div>
                <div v-if="item.description" class="mt-2 text-xs leading-relaxed opacity-80">
                  {{ item.description }}
                </div>
                <div v-if="item.detail" class="mt-3 border-t border-white/8 pt-3 text-[0.7rem] leading-relaxed opacity-65">
                  {{ item.detail }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="relative overflow-hidden rounded-2xl border border-white/10 bg-black/15 p-4 backdrop-blur-sm"
      :class="props.artifactClass"
    >
      <slot />

      <div
        v-for="(item, idx) in props.items"
        :key="`${item.title}-${idx}`"
        v-click="idx + 1"
        class="absolute transition duration-500 ease-in-out"
        :class="[
          item.positionClass ?? 'top-4 left-4',
          $clicks < idx + 1 ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100',
          item.inactiveAfterStep && $clicks > item.inactiveAfterStep ? 'opacity-55 blur-sm' : '',
        ]"
      >
        <div class="neko-glass-card p-4 shadow-[0_18px_60px_rgba(0,0,0,0.25)]" :class="item.widthClass ?? 'w-[20rem]'">
          <div class="flex items-start gap-3">
            <div class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-sm font-semibold">
              <div v-if="item.icon" :class="[item.icon, toneClassMap[item.tone ?? 'blue']]" class="text-lg" />
              <span v-else>{{ String(idx + 1).padStart(2, '0') }}</span>
            </div>

            <div class="min-w-0 flex-1">
              <div v-if="item.eyebrow" class="mb-1 text-[0.68rem] uppercase tracking-[0.2em] opacity-55">
                {{ item.eyebrow }}
              </div>
              <div class="text-sm font-semibold leading-snug" :class="toneClassMap[item.tone ?? 'blue']">
                {{ item.title }}
              </div>
              <div v-if="item.description" class="mt-2 text-xs leading-relaxed opacity-80">
                {{ item.description }}
              </div>
              <div v-if="item.detail" class="mt-3 border-t border-white/8 pt-3 text-[0.7rem] leading-relaxed opacity-65">
                {{ item.detail }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
