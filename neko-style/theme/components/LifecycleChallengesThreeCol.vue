<template>
  <div class="grid grid-cols-3 gap-3 h-74">
    <slot>
      <div border="2 solid white/5" rounded-lg overflow-hidden bg="white/5" backdrop-blur-sm>
        <div flex items-center bg="white/10" px-3 py-2>
          <div i-carbon:warning-alt text-amber-300 mr-2 />
          <div font-semibold>Dependency Hell</div>
        </div>
        <div px-4 py-3 text-sm opacity-80>
          CUDA 与依赖版本漂移导致环境不可复现。
        </div>
      </div>

      <div border="2 solid white/5" rounded-lg overflow-hidden bg="white/5" backdrop-blur-sm>
        <div flex items-center bg="white/10" px-3 py-2>
          <div i-carbon:download text-blue-300 mr-2 />
          <div font-semibold>Data Preparation</div>
        </div>
        <div px-4 py-3 text-sm opacity-80>
          数据来源分散，下载与预处理流程冗长。
        </div>
      </div>

      <div border="2 solid white/5" rounded-lg overflow-hidden bg="white/5" backdrop-blur-sm>
        <div flex items-center bg="white/10" px-3 py-2>
          <div i-carbon:data-check text-green-300 mr-2 />
          <div font-semibold>Governance</div>
        </div>
        <div px-4 py-3 text-sm opacity-80>
          跨团队共享、版本追踪、复现要求并存。
        </div>
      </div>
    </slot>
  </div>
</template>
