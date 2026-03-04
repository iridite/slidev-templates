---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: KubeCon Style Template Demo
glowSeed: 229
---

# KubeCon Style Template

组件和设计语言演示

<div mt-8 text-xl opacity-70>
  一个专业的技术演示模板
</div>

---
layout: center
glowSeed: 100
---

# 核心特性

<div mt-8 grid grid-cols-3 gap-4>

<v-click>
<div border="2 solid white/5" rounded-lg bg="white/5" backdrop-blur-sm p-4>
  <div flex items-center mb-2>
    <div i-carbon:rocket text-blue-300 text-xl mr-2 />
    <div font-semibold>动态背景</div>
  </div>
  <div text-sm opacity-70>每页独特的 Glow 效果</div>
</div>
</v-click>

<v-click>
<div border="2 solid white/5" rounded-lg bg="white/5" backdrop-blur-sm p-4>
  <div flex items-center mb-2>
    <div i-carbon:color-palette text-green-300 text-xl mr-2 />
    <div font-semibold>语义化配色</div>
  </div>
  <div text-sm opacity-70>清晰的颜色含义</div>
</div>
</v-click>

<v-click>
<div border="2 solid white/5" rounded-lg bg="white/5" backdrop-blur-sm p-4>
  <div flex items-center mb-2>
    <div i-carbon:cube text-purple-300 text-xl mr-2 />
    <div font-semibold>丰富组件</div>
  </div>
  <div text-sm opacity-70>开箱即用的组件库</div>
</div>
</v-click>

</div>

---
glowSeed: 150
---

# 信息卡片示例

<div mt-6 grid grid-cols-2 gap-6>

<v-click>
<div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
  <div bg="blue-800/40" px-4 py-2 flex items-center>
    <div i-carbon:information text-blue-300 text-xl mr-2 />
    <span font-bold>基础信息卡片</span>
  </div>
  <div px-4 py-3>
    <p>这是一个蓝色的信息卡片，用于展示中性信息和技术细节。</p>
  </div>
</div>
</v-click>

<v-click>
<div border="2 solid purple-800" bg="purple-800/20" rounded-lg overflow-hidden>
  <div bg="purple-800/40" px-4 py-2 flex items-center>
    <div i-carbon:star text-purple-300 text-xl mr-2 />
    <span font-bold>高级功能</span>
  </div>
  <div px-4 py-3 flex flex-col gap-2>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-400 />
      <span>功能点 1</span>
    </div>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-400 />
      <span>功能点 2</span>
    </div>
  </div>
</div>
</v-click>

</div>

---
glowSeed: 200
---

# 对比卡片：问题 vs 解决方案

<div mt-6 grid grid-cols-2 gap-6>

<v-click>
<div border="2 solid red-800" bg="red-800/20" rounded-lg overflow-hidden>
  <div bg="red-800/40" px-4 py-2 flex items-center>
    <div i-carbon:warning-alt text-red-300 text-xl mr-2 />
    <span font-bold>传统方案的问题</span>
  </div>
  <div px-4 py-3 flex flex-col gap-2>
    <div flex items-center gap-2>
      <div i-carbon:close text-red-400 />
      <span>配置复杂</span>
    </div>
    <div flex items-center gap-2>
      <div i-carbon:close text-red-400 />
      <span>部署缓慢</span>
    </div>
    <div flex items-center gap-2>
      <div i-carbon:close text-red-400 />
      <span>维护困难</span>
    </div>
  </div>
</div>
</v-click>

<v-click>
<div border="2 solid green-800" bg="green-800/20" rounded-lg overflow-hidden>
  <div bg="green-800/40" px-4 py-2 flex items-center>
    <div i-carbon:checkmark text-green-300 text-xl mr-2 />
    <span font-bold>我们的解决方案</span>
  </div>
  <div px-4 py-3 flex flex-col gap-2>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-400 />
      <span>一键配置</span>
    </div>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-400 />
      <span>快速部署</span>
    </div>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-400 />
      <span>易于维护</span>
    </div>
  </div>
</div>
</v-click>

</div>

---
glowSeed: 250
---

# 指标展示

<div mt-6 grid grid-cols-3 gap-4>

<v-click>
<div border="2 solid lime-800" bg="lime-800/20" rounded-lg p-5 flex flex-col items-center>
  <div mb-4 flex items-center justify-center>
    <div i-carbon:lightning text-yellow-500 text="[80px]" />
  </div>
  <div font-bold text-xl>性能提升</div>
  <div text-lime-300 text-2xl font-bold mt-2 flex items-center gap-1>
    <span>10x</span>
    <div i-carbon:arrow-up text-green-400 />
  </div>
  <div text-sm opacity-70 mt-1>更快的响应速度</div>
</div>
</v-click>

<v-click>
<div border="2 solid cyan-800" bg="cyan-800/20" rounded-lg p-5 flex flex-col items-center>
  <div mb-4 flex items-center justify-center>
    <div i-carbon:save text-cyan-500 text="[80px]" />
  </div>
  <div font-bold text-xl>存储节省</div>
  <div text-cyan-300 text-2xl font-bold mt-2 flex items-center gap-1>
    <span>90%</span>
    <div i-carbon:arrow-down text-green-400 />
  </div>
  <div text-sm opacity-70 mt-1>大幅减少存储成本</div>
</div>
</v-click>

<v-click>
<div border="2 solid purple-800" bg="purple-800/20" rounded-lg p-5 flex flex-col items-center>
  <div mb-4 flex items-center justify-center>
    <div i-carbon:time text-purple-500 text="[80px]" />
  </div>
  <div font-bold text-xl>时间节省</div>
  <div text-purple-300 text-2xl font-bold mt-2 flex items-center gap-1>
    <span>75%</span>
    <div i-carbon:arrow-down text-green-400 />
  </div>
  <div text-sm opacity-70 mt-1>减少开发时间</div>
</div>
</v-click>

</div>

---
glowSeed: 300
---

# 动画效果演示

<div mt-8 flex flex-col gap-6>

<div
  v-click="1"
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
>
  <div border="2 solid blue-800" bg="blue-800/20" rounded-lg p-4>
    从下方滑入的卡片
  </div>
</div>

<div flex gap-6>
  <div
    v-click="2"
    flex-1
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-x--20' : 'opacity-100 translate-x-0'"
  >
    <div border="2 solid green-800" bg="green-800/20" rounded-lg p-4>
      从左侧滑入
    </div>
  </div>
  
  <div
    v-click="2"
    flex-1
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-x-20' : 'opacity-100 translate-x-0'"
  >
    <div border="2 solid purple-800" bg="purple-800/20" rounded-lg p-4>
      从右侧滑入
    </div>
  </div>
</div>

<div
  v-click="3"
  transition duration-500 ease-in-out
  :class="$clicks < 3 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'"
>
  <div border="2 solid yellow-800" bg="yellow-800/20" rounded-lg p-4>
    缩放入场的卡片
  </div>
</div>

</div>

---
glowSeed: 350
glow: right
---

# 技术栈展示

<div mt-8 flex flex-col gap-8>

<v-click>
<div flex items-center justify-center gap-8>
  <div flex items-center gap-3>
    <div i-logos:kubernetes text-6xl />
    <span text-4xl>Kubernetes</span>
  </div>
  <div text-4xl opacity-50>+</div>
  <div flex items-center gap-3>
    <div i-logos:docker-icon text-6xl />
    <span text-4xl>Docker</span>
  </div>
</div>
</v-click>

<v-click>
<div flex justify-center>
  <div bg="blue-900/30" border="2 solid blue-800" rounded-lg px-6 py-3 flex items-center gap-3>
    <div i-carbon:idea text-blue-300 text-2xl />
    <span text-lg>完美的容器编排组合</span>
  </div>
</div>
</v-click>

</div>

---
glowSeed: 400
glow: left
---

# 代码示例

<div mt-6>

<v-click>
<div border="2 solid neutral-700" bg="neutral-800/50" rounded-lg overflow-hidden>
  <div bg="neutral-700/50" px-4 py-2 flex items-center justify-between>
    <div flex items-center gap-2>
      <div i-carbon:code text-neutral-300 />
      <span font-bold text-sm>配置文件</span>
    </div>
    <span text-xs text-neutral-400>YAML</span>
  </div>
  <div px-4 py-3>
    <div font-mono text-sm bg="black/30" rounded-lg p-3>
      <div><span text-blue-300>apiVersion:</span> v1</div>
      <div><span text-blue-300>kind:</span> Pod</div>
      <div><span text-blue-300>metadata:</span></div>
      <div>  <span text-blue-300>name:</span> example-pod</div>
      <div><span text-blue-300>spec:</span></div>
      <div>  <span text-blue-300>containers:</span></div>
      <div>  - <span text-blue-300>name:</span> app</div>
      <div>    <span text-blue-300>image:</span> nginx:latest</div>
    </div>
  </div>
</div>
</v-click>

</div>

---
glowSeed: 450
glow: bottom
---

# 提示框样式

<div mt-6 flex flex-col gap-4>

<v-click>
<div bg="green-900/30" border="2 solid green-800" rounded-lg px-6 py-3 flex items-center gap-3>
  <div i-carbon:checkmark-filled text-green-300 text-2xl />
  <span>成功：操作已完成</span>
</div>
</v-click>

<v-click>
<div bg="blue-900/30" border="2 solid blue-800" rounded-lg px-6 py-3 flex items-center gap-3>
  <div i-carbon:information text-blue-300 text-2xl />
  <span>信息：这是一条提示信息</span>
</div>
</v-click>

<v-click>
<div bg="yellow-900/30" border="2 solid yellow-800" rounded-lg px-6 py-3 flex items-center gap-3>
  <div i-carbon:warning-alt text-yellow-300 text-2xl />
  <span>警告：请注意这个重要事项</span>
</div>
</v-click>

<v-click>
<div bg="red-900/30" border="2 solid red-800" rounded-lg px-6 py-3 flex items-center gap-3>
  <div i-carbon:error text-red-300 text-2xl />
  <span>错误：发生了一个错误</span>
</div>
</v-click>

</div>

---
layout: center
glowSeed: 500
---

# 开始使用

<div mt-8 flex flex-col items-center gap-6>

<v-click>
<div text-xl>
  查看文档了解更多组件和使用方法
</div>
</v-click>

<v-click>
<div flex gap-4>
  <div border="2 solid blue-800" bg="blue-800/20" rounded-lg px-6 py-3>
    components-guide.md
  </div>
  <div border="2 solid green-800" bg="green-800/20" rounded-lg px-6 py-3>
    color-system.md
  </div>
  <div border="2 solid purple-800" bg="purple-800/20" rounded-lg px-6 py-3>
    animation-patterns.md
  </div>
</div>
</v-click>

</div>

---
layout: end
glowSeed: 600
---

# Thank You!

<div mt-8 text-xl opacity-70>
  开始创建你的专业演示吧
</div>

---
glowSeed: 650
theme: light
---

# 浅色主题演示

<div mt-8 text-gray-700>
  这是一个浅色主题的示例页面
</div>

<div mt-6 grid grid-cols-2 gap-6>

<v-click>
<div border="2 solid blue-600" bg="blue-100" rounded-lg overflow-hidden>
  <div bg="blue-200" px-4 py-2 flex items-center>
    <div i-carbon:information text-blue-700 text-xl mr-2 />
    <span font-bold text-blue-900>浅色主题信息卡片</span>
  </div>
  <div px-4 py-3 text-gray-800>
    <p>浅色主题适合需要更高对比度的场景，或者打印输出。</p>
  </div>
</div>
</v-click>

<v-click>
<div border="2 solid green-600" bg="green-100" rounded-lg overflow-hidden>
  <div bg="green-200" px-4 py-2 flex items-center>
    <div i-carbon:checkmark text-green-700 text-xl mr-2 />
    <span font-bold text-green-900>主题特点</span>
  </div>
  <div px-4 py-3 flex flex-col gap-2 text-gray-800>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-600 />
      <span>更高的对比度</span>
    </div>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-600 />
      <span>适合打印</span>
    </div>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-600 />
      <span>白色背景友好</span>
    </div>
  </div>
</div>
</v-click>

</div>

---
glowSeed: 700
---

# 动画系统演示

<div mt-8 text-lg opacity-80 mb-6>
  所有动画使用统一的 500ms 过渡时长
</div>

<div flex flex-col gap-4>

<div
  v-click="1"
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
>
  <div border="2 solid blue-800" bg="blue-800/20" rounded-lg p-4>
    <div flex items-center gap-2>
      <div i-carbon:arrow-down text-blue-400 />
      <span>从下方滑入的动画</span>
    </div>
  </div>
</div>

<div flex gap-4>
  <div
    v-click="2"
    flex-1
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-x--20' : 'opacity-100 translate-x-0'"
  >
    <div border="2 solid green-800" bg="green-800/20" rounded-lg p-4>
      <div flex items-center gap-2>
        <div i-carbon:arrow-left text-green-400 />
        <span>从左侧滑入</span>
      </div>
    </div>
  </div>

  <div
    v-click="2"
    flex-1
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-x-20' : 'opacity-100 translate-x-0'"
  >
    <div border="2 solid purple-800" bg="purple-800/20" rounded-lg p-4>
      <div flex items-center gap-2>
        <div i-carbon:arrow-right text-purple-400 />
        <span>从右侧滑入</span>
      </div>
    </div>
  </div>
</div>

<div
  v-click="3"
  transition duration-500 ease-in-out
  :class="$clicks < 3 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'"
>
  <div border="2 solid yellow-800" bg="yellow-800/20" rounded-lg p-4>
    <div flex items-center gap-2>
      <div i-carbon:maximize text-yellow-400 />
      <span>缩放入场动画</span>
    </div>
  </div>
</div>

</div>
