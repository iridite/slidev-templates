<script setup lang="ts">
const props = withDefaults(defineProps<{
  clicks?: number
}>(), {
  clicks: 5,
})
</script>

<template>
  <div flex items-center gap-4>
    <v-clicks>
      <div
        :class="$clicks < 1 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
        rounded-lg border="2 solid pink-800" bg="pink-800/20"
        flex-1 h-full transition duration-500 ease-in-out
      >
        <div px-5 py-14 flex items-center justify-center><div i-solar:database-bold-duotone size-20 /></div>
        <div bg="pink-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>记忆层</div>
      </div>

      <div
        :class="$clicks < 2 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
        rounded-lg border="2 solid fuchsia-800" bg="fuchsia-800/20"
        flex-1 h-full transition duration-500 ease-in-out
      >
        <div px-5 py-14 flex items-center justify-center><div i-solar:microphone-3-bold-duotone size-20 /></div>
        <div bg="fuchsia-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>语音流水线</div>
      </div>

      <div
        :class="$clicks < 3 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
        rounded-lg border="2 solid purple-800" bg="purple-800/20"
        flex-1 h-full transition duration-500 ease-in-out
      >
        <div px-5 py-14 flex items-center justify-center><div i-solar:gamepad-minimalistic-bold-duotone size-20 /></div>
        <div bg="purple-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>交互场景</div>
      </div>

      <div
        :class="$clicks < 4 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
        rounded-lg border="2 solid violet-800" bg="violet-800/20"
        flex-1 h-full transition duration-500 ease-in-out
      >
        <div px-5 py-14 flex items-center justify-center><div i-solar:face-scan-square-bold-duotone size-20 /></div>
        <div bg="violet-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>动作与表情</div>
      </div>

      <div
        :class="$clicks < props.clicks ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
        rounded-lg border="2 solid indigo-800" bg="indigo-800/20"
        flex-1 h-full transition duration-500 ease-in-out
      >
        <div px-5 py-14 flex items-center justify-center><div i-solar:link-circle-line-duotone size-20 /></div>
        <div bg="indigo-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>MCP / A2A</div>
      </div>
    </v-clicks>
  </div>
</template>
