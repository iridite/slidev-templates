<template>
  <div flex items-center justify-center gap-10>
    <div
      v-click
      class="flex items-center gap-3 text-4xl transition duration-500 ease-in-out"
      :class="$clicks < 1 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
      style="transition-delay: 40ms"
    >
      <slot name="left">
        <div i-carbon:presentation-file text-5xl text-blue-300 />
        <span font-semibold>Structure First</span>
      </slot>
    </div>

    <div
      v-after
      class="text-6xl transition duration-500 ease-in-out"
      :class="$clicks < 1 ? 'scale-80 opacity-60' : 'scale-100 opacity-100'"
      style="transition-delay: 95ms"
    >
      ×
    </div>

    <div
      v-after
      class="flex items-center gap-3 text-4xl transition duration-500 ease-in-out"
      :class="$clicks < 1 ? 'translate-x-20 opacity-0' : 'translate-x-0 opacity-100'"
      style="transition-delay: 150ms"
    >
      <slot name="right">
        <div i-carbon:color-palette text-5xl text-cyan-300 />
        <span font-semibold>Visual Identity</span>
      </slot>
    </div>
  </div>
</template>
