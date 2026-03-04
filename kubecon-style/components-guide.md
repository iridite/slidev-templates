# 组件使用指南

本指南包含所有可复用的组件模式和使用示例。直接复制代码即可使用。

## 1. 信息卡片（Info Card）

### 基础信息卡片

用于展示一般信息，带图标标题栏。

```vue
<div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
  <div bg="blue-800/40" px-4 py-2 flex items-center>
    <div i-carbon:information text-blue-300 text-xl mr-2 />
    <span font-bold>标题</span>
  </div>
  <div px-4 py-3>
    <p>这里是内容区域</p>
  </div>
</div>
```

**效果**：蓝色边框的卡片，带有半透明背景和图标标题。

### 带列表的信息卡片

```vue
<div border="2 solid purple-800" bg="purple-800/20" rounded-lg overflow-hidden>
  <div bg="purple-800/40" px-4 py-2 flex items-center>
    <div i-carbon:list text-purple-300 text-xl mr-2 />
    <span font-bold>功能列表</span>
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
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-400 />
      <span>功能点 3</span>
    </div>
  </div>
</div>
```

## 2. 对比卡片（Comparison Cards）

### 问题卡片（红色）

用于展示问题、挑战或传统方案的缺点。

```vue
<div border="2 solid red-800" bg="red-800/20" rounded-lg overflow-hidden>
  <div bg="red-800/40" px-4 py-2 flex items-center>
    <div i-carbon:warning-alt text-red-300 text-xl mr-2 />
    <span font-bold>问题</span>
  </div>
  <div px-4 py-3 flex flex-col gap-2>
    <div flex items-center gap-2>
      <div i-carbon:close text-red-400 />
      <span>问题描述 1</span>
    </div>
    <div flex items-center gap-2>
      <div i-carbon:close text-red-400 />
      <span>问题描述 2</span>
    </div>
  </div>
</div>
```

### 解决方案卡片（绿色）

用于展示解决方案、优势或改进。

```vue
<div border="2 solid green-800" bg="green-800/20" rounded-lg overflow-hidden>
  <div bg="green-800/40" px-4 py-2 flex items-center>
    <div i-carbon:checkmark text-green-300 text-xl mr-2 />
    <span font-bold>解决方案</span>
  </div>
  <div px-4 py-3 flex flex-col gap-2>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-400 />
      <span>优势 1</span>
    </div>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-400 />
      <span>优势 2</span>
    </div>
  </div>
</div>
```

### 左右对比布局

```vue
<div grid grid-cols-2 gap-6>
  <!-- 左侧：问题 -->
  <div border="2 solid red-800" bg="red-800/20" rounded-lg overflow-hidden>
    <div bg="red-800/40" px-4 py-2 flex items-center>
      <div i-carbon:warning-alt text-red-300 text-xl mr-2 />
      <span font-bold>传统方案</span>
    </div>
    <div px-4 py-3>
      <p>传统方案的问题...</p>
    </div>
  </div>
  
  <!-- 右侧：解决方案 -->
  <div border="2 solid green-800" bg="green-800/20" rounded-lg overflow-hidden>
    <div bg="green-800/40" px-4 py-2 flex items-center>
      <div i-carbon:checkmark text-green-300 text-xl mr-2 />
      <span font-bold>新方案</span>
    </div>
    <div px-4 py-3>
      <p>新方案的优势...</p>
    </div>
  </div>
</div>
```

## 3. 指标展示卡片（Metrics Card）

用于展示关键数据和指标。

```vue
<div border="2 solid lime-800" bg="lime-800/20" rounded-lg p-5 flex flex-col items-center>
  <div mb-4 flex items-center justify-center>
    <div i-carbon:lightning text-yellow-500 text="[100px]" />
  </div>
  <div font-bold text-xl>性能提升</div>
  <div text-lime-300 text-2xl font-bold mt-2 flex items-center gap-1>
    <span>5-10x</span>
    <div i-carbon:arrow-up text-green-400 />
  </div>
  <div text-sm opacity-70 mt-1>相比传统方案</div>
  <div text-xs mt-3 bg="lime-900/30" rounded-lg px-3 py-1>
    从小时到分钟
  </div>
</div>
```

### 三列指标布局

```vue
<div grid grid-cols-3 gap-4>
  <div border="2 solid lime-800" bg="lime-800/20" rounded-lg p-5 flex flex-col items-center>
    <div i-carbon:lightning text-yellow-500 text="[80px]" mb-4 />
    <div font-bold text-xl>速度</div>
    <div text-lime-300 text-2xl font-bold mt-2>10x</div>
    <div text-sm opacity-70 mt-1>更快</div>
  </div>
  
  <div border="2 solid cyan-800" bg="cyan-800/20" rounded-lg p-5 flex flex-col items-center>
    <div i-carbon:save text-cyan-500 text="[80px]" mb-4 />
    <div font-bold text-xl>存储</div>
    <div text-cyan-300 text-2xl font-bold mt-2>90%</div>
    <div text-sm opacity-70 mt-1>节省</div>
  </div>
  
  <div border="2 solid purple-800" bg="purple-800/20" rounded-lg p-5 flex flex-col items-center>
    <div i-carbon:time text-purple-500 text="[80px]" mb-4 />
    <div font-bold text-xl>时间</div>
    <div text-purple-300 text-2xl font-bold mt-2>75%</div>
    <div text-sm opacity-70 mt-1>减少</div>
  </div>
</div>
```

## 4. 代码块卡片

带标题和说明的代码块。

```vue
<div border="2 solid neutral-700" bg="neutral-800/50" rounded-lg overflow-hidden>
  <div bg="neutral-700/50" px-4 py-2 flex items-center justify-between>
    <div flex items-center gap-2>
      <div i-carbon:code text-neutral-300 />
      <span font-bold text-sm>配置示例</span>
    </div>
    <span text-xs text-neutral-400>YAML</span>
  </div>
  <div px-4 py-3>
    <div font-mono text-sm bg="black/30" rounded-lg p-3>
      <div>apiVersion: v1</div>
      <div>kind: Pod</div>
      <div>metadata:</div>
      <div>  name: example</div>
    </div>
  </div>
</div>
```

## 5. 人物介绍卡片

用于团队介绍页面。

```vue
<div flex flex-col items-center>
  <img src="/avatar.jpg" w-50 h-50 rounded-full object-cover mb-5>
  <span font-semibold text-3xl>张三</span>
  <div items-center>
    <div>
      <span class="opacity-70">高级工程师</span>
    </div>
    <div text-sm flex items-center justify-center gap-2 mt-4>
      <div i-ri:github-fill />
      <span underline decoration-dashed font-mono decoration-zinc-300>username</span>
    </div>
  </div>
</div>
```

### 三人横向布局

```vue
<div flex gap-8>
  <div flex flex-col items-center>
    <img src="/person1.jpg" w-50 h-50 rounded-full object-cover mb-5>
    <span font-semibold text-3xl>张三</span>
    <div text-sm opacity-70>工程师</div>
    <div text-sm flex items-center gap-2 mt-2>
      <div i-ri:github-fill />
      <span font-mono>username1</span>
    </div>
  </div>
  
  <div flex flex-col items-center>
    <img src="/person2.jpg" w-50 h-50 rounded-full object-cover mb-5>
    <span font-semibold text-3xl>李四</span>
    <div text-sm opacity-70>工程师</div>
    <div text-sm flex items-center gap-2 mt-2>
      <div i-ri:github-fill />
      <span font-mono>username2</span>
    </div>
  </div>
  
  <div flex flex-col items-center>
    <img src="/person3.jpg" w-50 h-50 rounded-full object-cover mb-5>
    <span font-semibold text-3xl>王五</span>
    <div text-sm opacity-70>工程师</div>
    <div text-sm flex items-center gap-2 mt-2>
      <div i-ri:github-fill />
      <span font-mono>username3</span>
    </div>
  </div>
</div>
```

## 6. 时间线对比

展示效率提升的时间对比。

```vue
<div flex items-center justify-center>
  <div relative>
    <div border="2 solid green-800" bg="green-800/20" rounded-lg p-4 w-full>
      <div text-center font-bold text-xl mb-3>时间对比</div>
      <div flex justify-between items-center>
        <div w-24 text-xs pr-2 text-right text-red-400>传统方案</div>
        <div h-6 rounded bg="red-900/50" w-60 flex items-center justify-center text-xs>
          6小时
        </div>
      </div>
      <div flex justify-between items-center mt-2>
        <div w-24 text-xs pr-2 text-right text-green-400>新方案</div>
        <div h-6 rounded bg="green-900/50" w-10 flex items-center justify-center text-xs>
          30秒
        </div>
      </div>
      <div absolute right-8 top="1/2" transform translate-y="-1/2" flex flex-col items-center>
        <div text-green-400 text-3xl font-bold>95%</div>
        <div text-sm text-zinc-400>时间节省</div>
      </div>
    </div>
  </div>
</div>
```

## 7. 特性网格

展示多个特性或功能点。

```vue
<div grid grid-cols-3 gap-3>
  <div border="2 solid white/5" rounded-lg bg="white/5" backdrop-blur-sm p-4>
    <div flex items-center mb-2>
      <div i-carbon:rocket text-blue-300 text-xl mr-2 />
      <div font-semibold>快速</div>
    </div>
    <div text-sm opacity-70>秒级启动</div>
  </div>
  
  <div border="2 solid white/5" rounded-lg bg="white/5" backdrop-blur-sm p-4>
    <div flex items-center mb-2>
      <div i-carbon:security text-green-300 text-xl mr-2 />
      <div font-semibold>安全</div>
    </div>
    <div text-sm opacity-70>企业级安全</div>
  </div>
  
  <div border="2 solid white/5" rounded-lg bg="white/5" backdrop-blur-sm p-4>
    <div flex items-center mb-2>
      <div i-carbon:scale text-purple-300 text-xl mr-2 />
      <div font-semibold>可扩展</div>
    </div>
    <div text-sm opacity-70>弹性伸缩</div>
  </div>
</div>
```

## 8. 高亮提示框

用于强调重要信息。

```vue
<div flex justify-center>
  <div
    border="2 solid white/5" bg="white/5" backdrop-blur-sm
    rounded-lg px-6 py-3 flex items-center gap-3
  >
    <div i-carbon:idea text-yellow-300 text-2xl />
    <span text-lg>这是一个重要的提示信息</span>
  </div>
</div>
```

### 不同类型的提示框

```vue
<!-- 成功 -->
<div bg="green-900/30" border="2 solid green-800" rounded-lg px-6 py-3 flex items-center gap-3>
  <div i-carbon:checkmark-filled text-green-300 text-2xl />
  <span>操作成功</span>
</div>

<!-- 警告 -->
<div bg="yellow-900/30" border="2 solid yellow-800" rounded-lg px-6 py-3 flex items-center gap-3>
  <div i-carbon:warning-alt text-yellow-300 text-2xl />
  <span>注意事项</span>
</div>

<!-- 错误 -->
<div bg="red-900/30" border="2 solid red-800" rounded-lg px-6 py-3 flex items-center gap-3>
  <div i-carbon:error text-red-300 text-2xl />
  <span>错误信息</span>
</div>

<!-- 信息 -->
<div bg="blue-900/30" border="2 solid blue-800" rounded-lg px-6 py-3 flex items-center gap-3>
  <div i-carbon:information text-blue-300 text-2xl />
  <span>提示信息</span>
</div>
```

## 9. Logo 展示

展示技术栈或合作伙伴。

```vue
<div flex items-center justify-center gap-8>
  <div flex items-center gap-3>
    <div i-logos:kubernetes text-6xl />
    <span text-4xl>Kubernetes</span>
  </div>
  <div text-4xl opacity-50>×</div>
  <div flex items-center gap-3>
    <div i-logos:docker-icon text-6xl />
    <span text-4xl>Docker</span>
  </div>
</div>
```

## 10. 步骤流程

展示流程或步骤。

```vue
<div flex items-center justify-center gap-4>
  <div flex flex-col items-center>
    <div w-16 h-16 rounded-full bg="blue-800/40" border="2 solid blue-600" flex items-center justify-center>
      <span text-2xl font-bold>1</span>
    </div>
    <div mt-2 text-sm>第一步</div>
  </div>
  
  <div i-carbon:arrow-right text-2xl text-neutral-400 />
  
  <div flex flex-col items-center>
    <div w-16 h-16 rounded-full bg="blue-800/40" border="2 solid blue-600" flex items-center justify-center>
      <span text-2xl font-bold>2</span>
    </div>
    <div mt-2 text-sm>第二步</div>
  </div>
  
  <div i-carbon:arrow-right text-2xl text-neutral-400 />
  
  <div flex flex-col items-center>
    <div w-16 h-16 rounded-full bg="green-800/40" border="2 solid green-600" flex items-center justify-center>
      <div i-carbon:checkmark text-2xl />
    </div>
    <div mt-2 text-sm>完成</div>
  </div>
</div>
```

## 使用技巧

1. **保持一致性**：在同一个演示中使用相同的配色方案
2. **合理间距**：使用 `gap-2`, `gap-4`, `gap-6` 等保持统一间距
3. **图标选择**：从 Carbon 图标集中选择合适的图标
4. **响应式**：使用 `grid-cols-2` 或 `grid-cols-3` 创建响应式布局
5. **动画配合**：结合 `v-click` 实现渐进式展示

## 常用图标

- `i-carbon:warning-alt` - 警告
- `i-carbon:checkmark-outline` - 勾选
- `i-carbon:close` - 关闭/错误
- `i-carbon:information` - 信息
- `i-carbon:rocket` - 快速/启动
- `i-carbon:security` - 安全
- `i-carbon:time` - 时间
- `i-carbon:lightning` - 性能
- `i-carbon:code` - 代码
- `i-carbon:data-volume` - 存储

更多图标请访问：https://icon-sets.iconify.design/carbon/
