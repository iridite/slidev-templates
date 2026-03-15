<script setup lang="ts">
import Background from '../components/Background.vue'

const props = defineProps<{
  background?: string
  sections?: string[]
  accentColor?: string
}>()

const accent = props.accentColor || '#60cd6a'
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout" relative h-full flex flex-row items-center text-white>
      <div
        transition="all ease-in-out" duration-1500
        :class="$slidev.nav.clicks > 0 ? 'opacity-0' : ''"
        class="ml-60 flex-1 text-left text-5xl font-semibold"
      >
        <h1 :style="{ color: accent }" class="mb-2!">
          Content
        </h1>
        <h1>
          目录
        </h1>
      </div>
      <div class="my-auto w-full flex-1">
        <div v-for="(section, index) in props.sections || []" :key="index" class="mt-4 flex items-end">
          <template v-if="index === 0">
            <span
              absolute
              text-4xl font-semibold
              transition="all ease-in-out" duration-1500
              :class="$slidev.nav.clicks > 0 ? 'translate-y-[74.5px] translate-x-[-113px]' : 'opacity-0'"
            >
              Part
            </span>
            <span
              transition="all ease-in-out" duration-1500
              :class="$slidev.nav.clicks > 0 ? 'translate-y-[76px] translate-x-[-30.5px]' : ''"
              :style="$slidev.nav.clicks > 0 ? { color: accent } : {}"
              class="pr-6 text-4xl font-semibold font-mono"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span
              transition="all ease-in-out" duration-1500
              :class="$slidev.nav.clicks > 0 ? 'translate-y-[126px] translate-x-[-180px] text-4xl!' : ''"
              class="mb-0.5 text-xl font-semibold"
            >
              {{ section }}
            </span>
          </template>
          <template v-else>
            <span
              transition="all ease-in-out" duration-1500
              :class="$slidev.nav.clicks > 0 ? 'opacity-0' : ''"
              class="pr-6 text-4xl font-semibold font-mono"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span
              transition="all ease-in-out" duration-1500
              :class="$slidev.nav.clicks > 0 ? 'opacity-0' : ''"
              class="mb-0.5 text-xl font-semibold"
            >
              {{ section }}
            </span>
          </template>
        </div>
      </div>
    </div>
  </Background>
</template>
