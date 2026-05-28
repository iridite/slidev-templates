<script setup lang="ts">
interface FactItem {
  icon: string
  text: string
}

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  mediaSide?: 'left' | 'right'
  facts?: FactItem[]
}>(), {
  title: '',
  subtitle: '',
  mediaSide: 'right',
  facts: () => [],
})

const totalClicks = props.facts.length + 1
</script>

<template>
  <ClickStepRegister :count="totalClicks" />
  <div class="neko-banner-split" :style="{ direction: props.mediaSide === 'left' ? 'rtl' : 'ltr' }">
    <!-- Content side -->
    <div style="direction: ltr">
      <div
        v-if="props.title"
        class="transition duration-500 ease-out"
        :class="$clicks < 1 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'"
      >
        <h2 class="text-3xl font-bold">{{ props.title }}</h2>
        <p v-if="props.subtitle" class="mt-2 text-sm opacity-60">{{ props.subtitle }}</p>
      </div>

      <div v-if="props.facts.length" class="neko-small-facts mt-6">
        <div
          v-for="(fact, idx) in props.facts"
          :key="`fact-${idx}`"
          class="transition duration-450 ease-out"
          :class="$clicks < idx + 2 ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'"
          :style="{ transitionDelay: `${idx * 60}ms` }"
        >
          <div :class="fact.icon" />
          <span>{{ fact.text }}</span>
        </div>
      </div>

      <slot name="content" />
    </div>

    <!-- Media side -->
    <div style="direction: ltr">
      <slot name="media" />
    </div>
  </div>
</template>
