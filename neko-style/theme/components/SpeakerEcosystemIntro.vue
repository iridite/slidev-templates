<script setup lang="ts">
interface LinkItem {
  icon?: string
  label: string
}

const props = withDefaults(defineProps<{
  avatar: string
  name: string
  role?: string
  handle?: string
  community?: LinkItem[]
  otherProjects?: LinkItem[]
  qr?: string
}>(), {
  role: 'Full-stack Developer',
  handle: 'github/username',
  community: () => [],
  otherProjects: () => [],
})
</script>

<template>
  <div flex items-center gap-3>
    <div
      v-click="1"
      :class="$clicks < 1 ? 'translate-x--5 opacity-0' : 'translate-x-0 opacity-100'"
      flex flex-col items-start transition duration-500 ease-in-out min-w-60
    >
      <img :src="props.avatar" w-40 h-40 rounded-full object-cover mb-5>
      <span font-semibold text-3xl>{{ props.name }}</span>
      <div>
        <div><span class="opacity-70">{{ props.role }}</span></div>
        <div text-sm flex items-center gap-2 mt-4>
          <div i-ri:github-fill /><span underline decoration-dashed font-mono decoration-zinc-300>{{ props.handle }}</span>
        </div>
      </div>
    </div>

    <div flex-1 />

    <div flex flex-col gap-8>
      <div mb-4 v-click="2">
        <div mb-4 text-zinc-400><span>社区</span></div>
        <div
          flex flex-wrap items-start content-start gap-4 transition duration-500 ease-in-out
          :class="$clicks < 2 ? 'translate-y-5' : 'translate-y-0'"
        >
          <template v-for="(item, idx) in props.community" :key="`c-${idx}`">
            <div flex items-center gap-2 text-2xl w-fit h-fit>
              <div v-if="item.icon" :class="item.icon" inline-block />
              <div>{{ item.label }}</div>
            </div>
          </template>
        </div>
      </div>

      <div v-click="3">
        <div mb-4 text-zinc-400><span>其他项目 / 组织</span></div>
        <div
          flex flex-wrap items-start content-start gap-4 transition duration-500 ease-in-out
          :class="$clicks < 3 ? 'translate-y-5' : 'translate-y-0'"
        >
          <template v-for="(item, idx) in props.otherProjects" :key="`o-${idx}`">
            <div flex items-center gap-2 text-2xl w-fit h-fit>
              <div v-if="item.icon" :class="item.icon" inline-block />
              <div>{{ item.label }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>

  <div v-if="props.qr" v-click="3" w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
    <div w-full flex items-center justify-end gap-4>
      <img :src="props.qr" h-50>
    </div>
  </div>
</template>
