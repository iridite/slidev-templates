# 快速入门

5 分钟快速上手 neko-style 模板。

## 🚀 使用方式

### 方式一：Starter Template（推荐新手）

```bash
npx degit user/repo/neko-style/starter my-presentation
cd my-presentation
npm install
npm run dev
```

### 方式二：Theme Package（推荐进阶用户）

```bash
# 在现有 Slidev 项目中
npm install slidev-theme-neko-style
```

在 slides.md 中引用：

```yaml
---
theme: neko-style
---
```

### 方式三：Monorepo 开发

```bash
# 在仓库根目录
npm install
npm run dev:neko
```

## 📚 核心概念

### ⚠️ 黑底无 Glow 的常见原因

如果你看到纯黑背景但没有 `glowSeed` 特效，通常是以下原因：

- 没有在文档顶层 frontmatter 设置 `theme: neko-style`
- 某处全局 CSS 强制覆盖了 `.slidev-layout` 背景（例如 `background: black`）
- 当前页显式设置了 `glow: false`
- frontmatter 格式错误导致配置未生效

建议先用下面最小配置验证：

```yaml
---
theme: neko-style
glowSeed: 100
glowPreset: blue
glowOpacity: 0.4
glow: full
---
```

### 1. Glow 背景配置

每页使用不同的 `glowSeed` 值:

```yaml
---
glowSeed: 100        # 每页不同
glowPreset: blue     # blue | rust | cyan
theme: dark          # dark | light
glowOpacity: 0.4     # 0-1
---
```

### 2. 语义化配色

- **红色** (`red-800`) - 问题、警告
- **绿色** (`green-800`) - 解决方案、成功
- **蓝色** (`blue-800`) - 中性信息
- **紫色** (`purple-800`) - 高级功能
- **黄色** (`yellow-800`) - 性能、速度

### 3. 卡片结构

```vue
<div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
  <div bg="blue-800/40" px-4 py-2>标题</div>
  <div px-4 py-3>内容</div>
</div>
```

### 4. 动画系统

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
>
  内容
</div>
```

## 📖 下一步

1. 查看 [components-guide.md](./components-guide.md) - 所有组件代码
2. 查看 [color-system.md](./color-system.md) - 配色方案
3. 查看 [animation-patterns.md](./animation-patterns.md) - 动画效果
4. 查看 [example/slides.md](../example/slides.md) - 完整示例
