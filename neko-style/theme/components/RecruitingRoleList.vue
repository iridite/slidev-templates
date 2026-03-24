<script setup lang="ts">
interface RoleItem {
  icon: string
  label: string
}

const props = defineProps<{
  title?: string
  subtitle?: string
  roles: RoleItem[]
  note?: string
}>()
</script>

<template>
  <div>
    <h1 v-if="props.title">{{ props.title }}</h1>
    <div v-if="props.subtitle" class="mt-2 opacity-80">{{ props.subtitle }}</div>

    <div flex jusity-center flex-wrap flex-col gap-4 max-h-90 mb-10 mt-10>
      <div v-for="(role, idx) in props.roles" :key="idx" flex items-center gap-3 w-fit>
        <div :class="role.icon" size-15 />
        <div>{{ role.label }}</div>
      </div>
    </div>

    <div v-if="props.note" class="text-sm opacity-80">{{ props.note }}</div>
  </div>
</template>
