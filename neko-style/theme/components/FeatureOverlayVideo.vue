<script setup lang="ts">
const props = defineProps<{
  src: string
  title?: string
}>()
</script>

<template>
  <div>
    <div
      absolute z-100 w-full h-full px-20 flex items-center
      :class="[$clicks < 1 ? 'opacity-0' : 'opacity-100']"
      transition duration-500 ease-in-out
    >
      <div flex flex-col justify-center h-fit w-fit bg="neutral-200/35" backdrop-blur-sm px-6 py-4 rounded-2xl>
        <div v-if="props.title" class="text-white/90 text-2xl mb-3 font-semibold">{{ props.title }}</div>
        <slot>
          <v-clicks>
            <div flex items-center text-6xl gap-5>
              <div text="white/80" i-solar:chat-round-like-bold-duotone /> <div text-4xl text="white/80">角色扮演</div>
            </div>
            <div flex items-center text-6xl gap-5>
              <div text="white/80" i-solar:incoming-call-rounded-bold-duotone /> <div text-4xl text="white/80">实时语音</div>
            </div>
            <div flex items-center text-6xl gap-5>
              <div text="white/80" i-solar:eye-closed-bold-duotone /> <div text-4xl text="white/80">视觉理解</div>
            </div>
          </v-clicks>
        </slot>
      </div>
    </div>

    <div relative>
      <div
        w-full h-full bg="black/70" absolute
        :class="[$clicks < 1 ? 'opacity-0' : 'opacity-100']"
        transition duration-500 ease-in-out
      />
      <video autoplay muted>
        <source :src="props.src" />
      </video>
    </div>
  </div>
</template>
