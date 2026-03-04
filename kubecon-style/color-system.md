# 配色系统说明

本模板使用语义化的配色系统，每种颜色都有特定的含义和使用场景。

## 核心配色

### 1. 红色系（Red）- 问题/警告

**用途**：展示问题、挑战、警告、传统方案的缺点

**颜色值**：
- Border: `border="2 solid red-800"`
- Background: `bg="red-800/20"`
- Header: `bg="red-800/40"`
- Icon: `text-red-300`
- Text: `text-red-400`
- Darker: `bg="red-900/30"`

**使用示例**：
```vue
<div border="2 solid red-800" bg="red-800/20" rounded-lg>
  <div bg="red-800/40" px-4 py-2>
    <div i-carbon:warning-alt text-red-300 />
    <span>问题</span>
  </div>
</div>
```

**适用场景**：
- 问题描述
- 错误信息
- 传统方案的缺点
- 需要改进的地方

---

### 2. 绿色系（Green）- 解决方案/成功

**用途**：展示解决方案、优势、成功、改进

**颜色值**：
- Border: `border="2 solid green-800"`
- Background: `bg="green-800/20"`
- Header: `bg="green-800/40"`
- Icon: `text-green-300`
- Text: `text-green-400`
- Darker: `bg="green-900/30"`

**使用示例**：
```vue
<div border="2 solid green-800" bg="green-800/20" rounded-lg>
  <div bg="green-800/40" px-4 py-2>
    <div i-carbon:checkmark text-green-300 />
    <span>解决方案</span>
  </div>
</div>
```

**适用场景**：
- 解决方案
- 成功案例
- 优势列表
- 改进效果

---

### 3. 蓝色系（Blue）- 中性信息

**用途**：展示一般信息、技术细节、中性内容

**颜色值**：
- Border: `border="2 solid blue-800"`
- Background: `bg="blue-800/20"`
- Header: `bg="blue-800/40"`
- Icon: `text-blue-300`
- Text: `text-blue-400`

**使用示例**：
```vue
<div border="2 solid blue-800" bg="blue-800/20" rounded-lg>
  <div bg="blue-800/40" px-4 py-2>
    <div i-carbon:information text-blue-300 />
    <span>信息</span>
  </div>
</div>
```

**适用场景**：
- 技术说明
- 功能介绍
- 一般信息
- 中性描述

---

### 4. 紫色系（Purple/Violet）- 高级功能

**用途**：展示高级功能、特殊特性、创新点

**颜色值**：
- Border: `border="2 solid purple-800"` 或 `border="2 solid violet-800"`
- Background: `bg="purple-800/20"` 或 `bg="violet-800/20"`
- Header: `bg="purple-800/40"`
- Icon: `text-purple-300` 或 `text-violet-300`
- Text: `text-purple-400`

**使用示例**：
```vue
<div border="2 solid purple-800" bg="purple-800/20" rounded-lg>
  <div bg="purple-800/40" px-4 py-2>
    <div i-carbon:star text-purple-300 />
    <span>高级功能</span>
  </div>
</div>
```

**适用场景**：
- 高级功能
- 创新特性
- 特殊能力
- 差异化优势

---

### 5. 黄色/橙色系（Yellow/Amber）- 性能/速度

**用途**：展示性能提升、速度优化、效率改进

**颜色值**：
- Border: `border="2 solid yellow-800"` 或 `border="2 solid amber-800"`
- Background: `bg="yellow-800/20"`
- Icon: `text-yellow-300` 或 `text-amber-300`
- Text: `text-yellow-400`

**使用示例**：
```vue
<div border="2 solid yellow-800" bg="yellow-800/20" rounded-lg>
  <div bg="yellow-800/40" px-4 py-2>
    <div i-carbon:lightning text-yellow-300 />
    <span>性能</span>
  </div>
</div>
```

**适用场景**：
- 性能指标
- 速度提升
- 效率改进
- 警告提示

---

### 6. 青色系（Cyan）- 容器/云

**用途**：展示容器、云服务、DevOps 相关

**颜色值**：
- Border: `border="2 solid cyan-800"`
- Background: `bg="cyan-800/20"`
- Header: `bg="cyan-800/40"`
- Icon: `text-cyan-300`
- Text: `text-cyan-400`

**使用示例**：
```vue
<div border="2 solid cyan-800" bg="cyan-800/20" rounded-lg>
  <div bg="cyan-800/40" px-4 py-2>
    <div i-devicon:docker text-cyan-300 />
    <span>容器</span>
  </div>
</div>
```

**适用场景**：
- Docker/容器
- 云服务
- DevOps 工具
- 基础设施

---

### 7. 青柠色系（Lime）- 增长/提升

**用途**：展示增长、提升、正向指标

**颜色值**：
- Border: `border="2 solid lime-800"`
- Background: `bg="lime-800/20"`
- Icon: `text-lime-300`
- Text: `text-lime-400`

**使用示例**：
```vue
<div border="2 solid lime-800" bg="lime-800/20" rounded-lg p-5>
  <div i-carbon:arrow-up text-lime-300 text-6xl />
  <div text-lime-300 text-2xl font-bold>10x</div>
</div>
```

**适用场景**：
- 性能提升指标
- 增长数据
- 正向改进
- 效率提升

---

### 8. 靛蓝色系（Indigo）- 数据/分析

**用途**：展示数据、分析、深度内容

**颜色值**：
- Border: `border="2 solid indigo-800"`
- Background: `bg="indigo-800/20"`
- Icon: `text-indigo-300`
- Text: `text-indigo-400`

**使用示例**：
```vue
<div border="2 solid indigo-800" bg="indigo-800/20" rounded-lg>
  <div bg="indigo-800/40" px-4 py-2>
    <div i-carbon:analytics text-indigo-300 />
    <span>数据分析</span>
  </div>
</div>
```

**适用场景**：
- 数据展示
- 分析结果
- 深度内容
- 技术细节

---

## 中性色

### 灰色/中性色（Neutral/Zinc）

**用途**：代码块、次要信息、背景

**颜色值**：
- Border: `border="2 solid neutral-700"` 或 `border="2 solid zinc-700"`
- Background: `bg="neutral-800/50"` 或 `bg="zinc-800/50"`
- Text: `text-neutral-400` 或 `text-zinc-400`

**使用示例**：
```vue
<div border="2 solid neutral-700" bg="neutral-800/50" rounded-lg>
  <div font-mono text-sm bg="black/30" p-3>
    代码内容
  </div>
</div>
```

**适用场景**：
- 代码块
- 次要信息
- 背景元素
- 分隔线

---

## 透明度系统

### 背景透明度

- `/5` - 5% 透明度（非常淡）
- `/10` - 10% 透明度
- `/20` - 20% 透明度（卡片背景）
- `/30` - 30% 透明度（内部区域）
- `/40` - 40% 透明度（标题栏）
- `/50` - 50% 透明度（强调区域）

### 使用建议

```vue
<!-- 卡片外层 -->
<div bg="blue-800/20">
  <!-- 标题栏 -->
  <div bg="blue-800/40">
    标题
  </div>
  <!-- 内部强调区域 -->
  <div bg="blue-900/30">
    内容
  </div>
</div>
```

---

## 配色组合建议

### 1. 问题 vs 解决方案

```vue
<div grid grid-cols-2 gap-6>
  <!-- 问题：红色 -->
  <div border="2 solid red-800" bg="red-800/20">
    问题
  </div>
  <!-- 解决方案：绿色 -->
  <div border="2 solid green-800" bg="green-800/20">
    解决方案
  </div>
</div>
```

### 2. 传统 vs 新方案

```vue
<div grid grid-cols-2 gap-6>
  <!-- 传统：黄色/警告 -->
  <div border="2 solid yellow-800" bg="yellow-800/20">
    传统方案
  </div>
  <!-- 新方案：绿色 -->
  <div border="2 solid green-800" bg="green-800/20">
    新方案
  </div>
</div>
```

### 3. 三列特性

```vue
<div grid grid-cols-3 gap-4>
  <!-- 速度：黄色 -->
  <div border="2 solid yellow-800" bg="yellow-800/20">
    快速
  </div>
  <!-- 安全：蓝色 -->
  <div border="2 solid blue-800" bg="blue-800/20">
    安全
  </div>
  <!-- 可扩展：紫色 -->
  <div border="2 solid purple-800" bg="purple-800/20">
    可扩展
  </div>
</div>
```

---

## 文字颜色

### 主要文字
- `text-white` - 主标题
- `text-zinc-100` - 正文
- `text-zinc-300` - 次要文字
- `text-zinc-400` - 辅助文字
- `text-zinc-500` - 禁用文字

### 强调文字
- `text-red-300` / `text-red-400` - 错误/问题
- `text-green-300` / `text-green-400` - 成功/解决方案
- `text-blue-300` / `text-blue-400` - 信息
- `text-yellow-300` / `text-yellow-400` - 警告/性能

---

## 边框颜色

### 实线边框
```vue
border="2 solid blue-800"
```

### 半透明边框
```vue
border="2 solid white/5"
border="2 solid white/10"
```

---

## 使用技巧

1. **保持一致性**：在同一个演示中，相同类型的内容使用相同的颜色
2. **对比度**：确保文字和背景有足够的对比度
3. **层次感**：使用不同的透明度创建层次
4. **语义化**：让颜色传达意义（红=问题，绿=解决方案）
5. **不要过度**：一页幻灯片不要使用超过 3-4 种主色

## 快速参考

| 颜色 | 用途 | Border | Background |
|------|------|--------|------------|
| Red | 问题/警告 | `red-800` | `red-800/20` |
| Green | 解决方案/成功 | `green-800` | `green-800/20` |
| Blue | 中性信息 | `blue-800` | `blue-800/20` |
| Purple | 高级功能 | `purple-800` | `purple-800/20` |
| Yellow | 性能/速度 | `yellow-800` | `yellow-800/20` |
| Cyan | 容器/云 | `cyan-800` | `cyan-800/20` |
| Lime | 增长/提升 | `lime-800` | `lime-800/20` |
| Indigo | 数据/分析 | `indigo-800` | `indigo-800/20` |
