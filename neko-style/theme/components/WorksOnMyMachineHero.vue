<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
}>(), {
  title: '"It Works On My Machine"™',
  subtitle: 'The ML Engineer\'s Lament',
})
</script>

<template>
  <div class="text-center">
    <h1>{{ props.title }}</h1>
    <div class="mt-3 text-xl opacity-80">{{ props.subtitle }}</div>

    <div class="mt-5 bg-white/6 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1 text-left">
      <slot>
        <pre class="!m-0"><code>$ python train.py
ImportError: libcudart.so.11.0: cannot open shared object file

$ pip install torch --index-url https://download.pytorch.org/whl/cu118
RuntimeError: CUDA error: no kernel image is available for execution

$ ldd $(which python3) | grep 'not found'
        libstdc++.so.6 => not found
</code></pre>
      </slot>
    </div>
  </div>
</template>
