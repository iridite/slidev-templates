# 快速入门

5 分钟快速上手 neko-style 模板。

## 🚀 使用方式

### 方式一：Monorepo 统一管理（推荐）

```bash
# 在仓库根目录
npm install
npm run dev:neko
```

### 方式二:复制到现有项目

```bash
# 复制必要文件
cp components/GlowBackground.vue your-project/global-bottom.vue
cp styles/base.css your-project/style.css
cp configs/uno.config.example.ts your-project/uno.config.ts

# 安装依赖
npm install seedrandom
npm install -D @iconify-json/carbon @iconify-json/logos
```

## 📚 核心概念

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
