# 文件清单

本文档列出模板包中的所有文件及其用途。

## 📁 目录结构

```
kubecon-style/
├── README.md                    # 主文档，项目概述
├── QUICK-START.md              # 5分钟快速入门指南
├── AI-GUIDE.md                 # 给 AI 助手的使用说明
├── FILE-INDEX.md               # 本文件，文件清单
├── components-guide.md          # 组件使用指南（最重要）
├── animation-patterns.md        # 动画模式指南
├── color-system.md             # 配色系统说明
├── components/
│   └── GlowBackground.vue      # Glow 背景组件
├── styles/
│   └── base.css                # 基础样式文件
├── configs/
│   └── uno.config.example.ts   # UnoCSS 配置示例
└── example/                    # 完整可运行的示例项目
    ├── package.json            # 依赖配置
    ├── slides.md               # 示例幻灯片
    ├── uno.config.ts           # UnoCSS 配置
    ├── style.css               # 样式文件
    └── global-bottom.vue       # Glow 背景组件
```

## 📄 文档文件

### README.md
**用途**：项目主文档，包含概述、快速开始、核心特性
**适合**：第一次接触模板的用户
**阅读时间**：3 分钟

**包含内容**：
- 项目简介
- 5 分钟快速开始
- 核心组件预览
- 配色系统概览
- 常见问题

### QUICK-START.md ⭐
**用途**：详细的快速入门指南
**适合**：想要立即开始使用的用户
**阅读时间**：5 分钟

**包含内容**：
- 两种使用方式（示例项目 / 现有项目）
- 学习路径
- 第一个幻灯片示例
- 常用代码片段
- 常见问题解答

### components-guide.md ⭐⭐⭐
**用途**：所有可用组件的完整代码示例
**适合**：正在创建幻灯片的用户
**阅读时间**：10-15 分钟

**包含内容**：
- 10+ 种组件的完整代码
- 每个组件的使用场景
- 可直接复制粘贴的代码
- 布局技巧
- 常用图标列表

**重要性**：⭐⭐⭐ 最重要的文档，创建幻灯片时必看

### color-system.md
**用途**：详细的配色系统说明
**适合**：需要自定义颜色的用户
**阅读时间**：10 分钟

**包含内容**：
- 8 种核心配色及用途
- 每种颜色的完整色值
- 透明度系统
- 配色组合建议
- 快速参考表

### animation-patterns.md
**用途**：动画效果的使用指南
**适合**：想要添加动画��用户
**阅读时间**：10 分钟

**包含内容**：
- 6 种基础动画模式
- 序列动画
- 组合动画
- 完整示例
- 最佳实践
- 调试技巧

### AI-GUIDE.md
**用途**：专门为 AI 助手编写的使用说明
**适合**：AI 助手
**阅读时间**：5 分钟

**包含内容**：
- 核心设计原则
- 使用步骤
- 常见场景的代码模板
- 图标选择指南
- 调试清单
- 快速响应模板

### FILE-INDEX.md
**用途**：本文件，文件清单和导航
**适合**：想要了解整体结构的用户
**阅读时间**：3 分钟

## 🔧 组件文件

### components/GlowBackground.vue
**用途**：动态 Glow 背景效果组件
**使用方式**：复制到项目根目录并重命名为 `global-bottom.vue`

**功能**：
- 基于多边形的模糊渐变效果
- 每页切换时平滑过渡
- 通过 frontmatter 控制（glowSeed, glow, glowOpacity, glowHue）

**依赖**：
- `seedrandom` - 随机数生成

## 🎨 样式文件

### styles/base.css
**用途**：基础样式定义
**使用方式**：复制内容到项目的 `style.css`

**包含内容**：
- 代码块样式
- 过渡动画定义
- v-click 动画
- Magic Links 样式
- 脚注样式

## ⚙️ 配置文件

### configs/uno.config.example.ts
**用途**：UnoCSS 配置示例
**使用方式**：复制到项目并重命名为 `uno.config.ts`

**包含内容**：
- 图标预设配置
- 字体配置
- 自定义规则
- Safelist 配置

## 📦 示例项目

### example/
**用途**：完整的可运行示例项目
**使用方式**：
```bash
cd example
npm install
npm run dev
```

**包含文件**：
- `package.json` - 依赖配置
- `slides.md` - 示例幻灯片（10+ 页）
- `uno.config.ts` - UnoCSS 配置
- `style.css` - 样式文件
- `global-bottom.vue` - Glow 背景组件

**示例内容**：
1. 封面页
2. 核心特性展示
3. 信息卡片示例
4. 对比卡片示例
5. 指标展示
6. 动画效果演示
7. 技术栈展示
8. 代码示例
9. 提示框样式
10. 结束页

## 📚 推荐阅读顺序

### 对于新用户

1. **README.md** (3 分钟) - 了解项目概况
2. **运行 example 项目** (5 分钟) - 看看实际效果
3. **QUICK-START.md** (5 分钟) - 学习如何开始
4. **components-guide.md** (10 分钟) - 学习所有组件
5. 开始创建自己的演示

### 对于有经验的用户

1. **运行 example 项目** (2 分钟)
2. **components-guide.md** (5 分钟) - 快速浏览
3. 直接开始创建

### 对于 AI 助手

1. **AI-GUIDE.md** (5 分钟) - 核心使用说明
2. **components-guide.md** (参考) - 组件代码库
3. **example/slides.md** (参考) - 完整示例

## 🎯 快速查找

### 我想...

| 需求 | 查看文件 |
|------|---------|
| 快速开始 | QUICK-START.md |
| 复制组件代码 | components-guide.md ⭐ |
| 了解配色 | color-system.md |
| 添加动画 | animation-patterns.md |
| 看完整示例 | example/slides.md |
| 解决问题 | README.md (FAQ 部分) |
| 自定义背景 | components/GlowBackground.vue |

### 我遇到了...

| 问题 | 解决方案 |
|------|---------|
| 背景不显示 | 检查 global-bottom.vue 是否在根目录 |
| 图标不显示 | 安装 @iconify-json/carbon |
| 不知道用什么颜色 | 查看 color-system.md |
| 不知道怎么做动画 | 查看 animation-patterns.md |
| 想看完整例子 | 运行 example 项目 |

## 📊 文件重要性评级

| 文件 | 重要性 | 用途 |
|------|--------|------|
| components-guide.md | ⭐⭐⭐ | 最重要，包含所有组件代码 |
| QUICK-START.md | ⭐⭐⭐ | 快速入门必读 |
| example/ | ⭐⭐⭐ | 完整示例，必须运行 |
| README.md | ⭐⭐ | 项目概述 |
| color-system.md | ⭐⭐ | 配色参考 |
| animation-patterns.md | ⭐⭐ | 动画参考 |
| AI-GUIDE.md | ⭐ | AI 专用 |
| components/GlowBackground.vue | ⭐⭐⭐ | 必需组件 |
| styles/base.css | ⭐⭐⭐ | 必需样式 |
| configs/uno.config.example.ts | ⭐⭐ | 必需配置 |

## 🔄 更新日志

### v1.0.0 (当前版本)
- ✅ 完整的组件库
- ✅ 详细的文档
- ✅ 可运行的示例项目
- ✅ AI 使用指南

## 📝 贡献指南

如果你想添加新组件或改进文档：

1. 在 `components-guide.md` 中添加组件代码
2. 在 `example/slides.md` 中添加示例页面
3. 更新 `README.md` 中的特性列表
4. 更新本文件（FILE-INDEX.md）

## 💡 使用技巧

1. **书签这些文件**：
   - components-guide.md（最常用）
   - color-system.md（配色参考）
   - animation-patterns.md（动画参考）

2. **保持 example 项目运行**：
   在一个终端窗口中运行 `npm run dev`，随时查看效果

3. **使用搜索**：
   在 components-guide.md 中搜索关键词（如"卡片"、"指标"、"对比"）

4. **复制粘贴优先**：
   不要从零开始写，从 components-guide.md 复制代码

## 🎓 学习路径

### 初学者（30 分钟）
1. 阅读 README.md (3 分钟)
2. 运行 example 项目 (5 分钟)
3. 阅读 QUICK-START.md (5 分钟)
4. 浏览 components-guide.md (10 分钟)
5. 创建第一个幻灯片 (7 分钟)

### 进阶用户（15 分钟）
1. 运行 example 项目 (2 分钟)
2. 快速浏览 components-guide.md (5 分钟)
3. 阅读 color-system.md (3 分钟)
4. 阅读 animation-patterns.md (5 分钟)

### 专家用户（5 分钟）
1. 浏览 components-guide.md (3 分钟)
2. 查看 example/slides.md 源码 (2 分钟)
3. 开始创建

---

**需要帮助？** 从 README.md 开始，或直接查看 components-guide.md 复制代码！
