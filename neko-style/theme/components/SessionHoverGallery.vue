<script setup lang="ts">
interface Item {
  image: string
  qr?: string
  alt?: string
}

const props = withDefaults(defineProps<{
  items: Item[]
  qrWidth?: string
}>(), {
  qrWidth: 'w-52',
})
</script>

<template>
  <div grid="~ cols-2" gap-4>
    <div
      v-for="(item, idx) in props.items"
      :key="idx"
      relative
      class="[&_.qr]:hover:opacity-100 [&_.img]:hover:opacity-35 hover:cursor-pointer hover:grayscale-100"
      rounded-lg overflow-hidden bg="black" h-fit transition="all duration-250 ease-in-out"
    >
      <img :src="item.image" :alt="item.alt || `session-${idx + 1}`" class="img" opacity-100 transition="all duration-250 ease-in-out">
      <img
        v-if="item.qr"
        :src="item.qr"
        class="qr"
        :class="props.qrWidth"
        absolute top-0 left-0 translate-x="[40%]" opacity-0 transition="all duration-250 ease-in-out"
      >
    </div>
  </div>
</template>
