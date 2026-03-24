<script setup lang="ts">
const props = withDefaults(defineProps<{
  problemTitle?: string
  solutionTitle?: string
}>(), {
  problemTitle: '传统方案的问题',
  solutionTitle: '改进方案',
})
</script>

<template>
  <div class="grid grid-cols-2 gap-6">
    <div border="2 solid red-800" bg="red-800/20" rounded-lg overflow-hidden>
      <div bg="red-800/40" px-4 py-2 flex items-center>
        <div i-carbon:warning-alt text-red-300 text-xl mr-2 />
        <span font-bold>{{ props.problemTitle }}</span>
      </div>
      <div px-4 py-3>
        <slot name="problem">
          <div flex items-center gap-2 mb-2>
            <div i-carbon:close text-red-400 />
            <span>依赖版本漂移</span>
          </div>
          <div flex items-center gap-2>
            <div i-carbon:close text-red-400 />
            <span>环境复现成本高</span>
          </div>
        </slot>
      </div>
    </div>

    <div border="2 solid green-800" bg="green-800/20" rounded-lg overflow-hidden>
      <div bg="green-800/40" px-4 py-2 flex items-center>
        <div i-carbon:checkmark text-green-300 text-xl mr-2 />
        <span font-bold>{{ props.solutionTitle }}</span>
      </div>
      <div px-4 py-3>
        <slot name="solution">
          <div flex items-center gap-2 mb-2>
            <div i-carbon:checkmark-outline text-green-400 />
            <span>统一环境定义</span>
          </div>
          <div flex items-center gap-2>
            <div i-carbon:checkmark-outline text-green-400 />
            <span>可追踪锁文件</span>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
