<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  art?: string
  qr?: string
}>(), {
  title: '谢谢',
  subtitle: 'Thank you',
})
</script>

<template>
  <div flex>
    <div flex-1>
      <div mt-50 />
      <div flex flex-col gap-4 translate="y--52" h-full>
        <div flex flex-col translate="y-4" flex-1>
          <div text="[48px]">{{ props.title }}</div>
          <div text="white/50">{{ props.subtitle }}</div>
        </div>
        <img v-if="props.art" :src="props.art" size-50 rounded-2xl overflow-hidden translate-y--20>
      </div>
    </div>

    <div text-lg text="zinc-300" text-right flex flex-col gap-3 mt-3>
      <slot>
        <div>
          演示文稿开源在
          <a href="https://github.com/nekomeowww/talks">
            <div inline-block mr-1 translate-y-0.8 i-ri:github-fill />github.com/nekomeowww/talks
          </a>
        </div>
        <div>
          演示文稿使用
          <a href="https://sli.dev">
            <div inline-block mr-1 translate-y-0.8 i-logos:slidev />sli.dev
          </a>
          构建
        </div>
      </slot>
      <div v-if="props.qr" self-end mt-16 translate-x-14 translate-y--9>
        <img :src="props.qr" w-100>
      </div>
    </div>
  </div>
</template>
