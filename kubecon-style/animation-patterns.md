# 动画模式指南

本指南展示所有可用的动画模式和使用方法。

## 基础动画类

所有动画都使用统一的过渡时长：`duration-500 ease-in-out`

## 1. 渐进式入场（Fade In）

### 从下方滑入

最常用的入场动画，适合大多数内容。

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
>
  内容从下方滑入
</div>
```

**使用场景**：卡片、段落、列表项

### 从上方滑入

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y--20' : 'opacity-100 translate-y-0'"
>
  内容从上方滑入
</div>
```

**使用场景**：标题、顶部元素

### 从左侧滑入

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-x--20' : 'opacity-100 translate-x-0'"
>
  内容从左侧滑入
</div>
```

**使用场景**：左侧内容、问题描述

### 从右侧滑入

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-x-20' : 'opacity-100 translate-x-0'"
>
  内容从右侧滑入
</div>
```

**使用场景**：右侧内容、解决方案

## 2. 缩放动画（Scale）

### 缩小入场

适合强调重要内容。

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'"
>
  内容缩放入场
</div>
```

**使用场景**：重要卡片、关键信息

### 放大入场

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 scale-110' : 'opacity-100 scale-100'"
>
  内容从大到小
</div>
```

**使用场景**：特别强调的元素

## 3. 组合动画

### 滑入 + 缩放

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20 scale-95' : 'opacity-100 translate-y-0 scale-100'"
>
  组合动画效果
</div>
```

**使用场景**：特殊强调的卡片

## 4. 序列动画

### 使用 v-click 编号

```vue
<div flex gap-4>
  <div
    v-click="1"
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
  >
    第一个元素
  </div>
  
  <div
    v-click="2"
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
  >
    第二个元素
  </div>
  
  <div
    v-click="3"
    transition duration-500 ease-in-out
    :class="$clicks < 3 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
  >
    第三个元素
  </div>
</div>
```

### 使用延迟（Staggered）

```vue
<div flex flex-col gap-2>
  <div
    v-for="(item, idx) in items"
    :key="idx"
    transition duration-500 ease-in-out
    :style="{ transitionDelay: `${idx * 100}ms` }"
    :class="$clicks < 1 ? 'opacity-0 translate-x--20' : 'opacity-100 translate-x-0'"
  >
    {{ item }}
  </div>
</div>
```

**使用场景**：列表项依次出现

## 5. 左右对比动画

### 同时从两侧滑入

```vue
<div flex gap-6>
  <!-- 左侧 -->
  <div
    v-click
    flex-1
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-x--20' : 'opacity-100 translate-x-0'"
  >
    左侧内容
  </div>
  
  <!-- 右侧 -->
  <div
    v-click
    flex-1
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-x-20' : 'opacity-100 translate-x-0'"
  >
    右侧内容
  </div>
</div>
```

### 先左后右

```vue
<div flex gap-6>
  <!-- 左侧先出现 -->
  <div
    v-click="1"
    flex-1
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-x--20' : 'opacity-100 translate-x-0'"
  >
    左侧内容
  </div>
  
  <!-- 右侧后出现 -->
  <div
    v-click="2"
    flex-1
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-x-20' : 'opacity-100 translate-x-0'"
  >
    右侧内容
  </div>
</div>
```

## 6. 特殊动画

### 脉冲动画

```vue
<div class="animate-pulse">
  持续脉冲的元素
</div>
```

**使用场景**：加载状态、强调元素

### 条件高亮

```vue
<div
  transition duration-500 ease-in-out
  :class="$clicks >= 3 ? 'scale-110 border-yellow-500' : ''"
>
  点击后高亮
</div>
```

## 7. 完整示例

### 三列卡片依次出现

```vue
<div grid grid-cols-3 gap-4>
  <div
    v-click="1"
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
  >
    <div border="2 solid blue-800" bg="blue-800/20" rounded-lg p-4>
      第一张卡片
    </div>
  </div>
  
  <div
    v-click="2"
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
  >
    <div border="2 solid green-800" bg="green-800/20" rounded-lg p-4>
      第二张卡片
    </div>
  </div>
  
  <div
    v-click="3"
    transition duration-500 ease-in-out
    :class="$clicks < 3 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
  >
    <div border="2 solid purple-800" bg="purple-800/20" rounded-lg p-4>
      第三张卡片
    </div>
  </div>
</div>
```

### 问题到解决方案的转换

```vue
<div flex items-center gap-4>
  <!-- 问题卡片 -->
  <div
    v-click="1"
    flex-1
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-x--20' : 'opacity-100 translate-x-0'"
  >
    <div border="2 solid red-800" bg="red-800/20" rounded-lg p-4>
      问题描述
    </div>
  </div>
  
  <!-- 箭头 -->
  <div
    v-click="2"
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 scale-0' : 'opacity-100 scale-100'"
  >
    <div i-carbon:arrow-right text-4xl text-green-400 />
  </div>
  
  <!-- 解决方案卡片 -->
  <div
    v-click="3"
    flex-1
    transition duration-500 ease-in-out
    :class="$clicks < 3 ? 'opacity-0 translate-x-20' : 'opacity-100 translate-x-0'"
  >
    <div border="2 solid green-800" bg="green-800/20" rounded-lg p-4>
      解决方案
    </div>
  </div>
</div>
```

## 8. 使用 v-after

简化连续动画的写法。

```vue
<div flex gap-4>
  <div v-click>第一个</div>
  <div v-after>第二个（自动在第一个之后）</div>
  <div v-after>第三个（自动在第二个之后）</div>
</div>
```

## 最佳实践

1. **保持一致**：在整个演示中使用相同的动画时长（500ms）
2. **不要过度**：不是所有内容都需要动画
3. **有意义的方向**：
   - 问题从左侧滑入
   - 解决方案从右侧滑入
   - 新内容从下方滑入
   - 标题从上方滑入
4. **序列控制**：使用 `v-click` 编号控制复杂的动画序列
5. **性能考虑**：避免同时动画太多元素

## 调试技巧

### 查看当前点击次数

```vue
<div>当前点击: {{ $clicks }}</div>
```

### 临时禁用动画

```vue
<!-- 注释掉 transition 和 :class -->
<div>
  内容直接显示
</div>
```

## 常见问题

### Q: 动画不流畅？
A: 确保使用了 `transition duration-500 ease-in-out`

### Q: 元素闪烁？
A: 检查 `$clicks` 的条件是否正确

### Q: 动画顺序错乱？
A: 使用明确的 `v-click="数字"` 而不是依赖自动编号

### Q: 如何让动画更快/更慢？
A: 修改 `duration-500` 为 `duration-300`（更快）或 `duration-700`（更慢）
