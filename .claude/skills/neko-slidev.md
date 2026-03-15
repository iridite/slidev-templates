---
description: 使用 neko-style 模板创建专业的 Slidev 演示文稿
runInPlanMode: false
---

你现在拥有使用 neko-style 模板创建专业 Slidev 演示文稿的能力。

## 模板核心能力

- **动态 Glow 背景** - 基于种子的稳定随机背景生成
- **3 种颜色预设** - blue(科技蓝)、rust(橙红)、cyan(青蓝)
- **语义化配色系统** - 红色(问题)、绿色(解决方案)、蓝色(信息)
- **丰富组件库** - 信息卡片、对比卡片、指标卡片
- **平滑动画** - 统一 500ms 过渡

## 工作流程

1. **读取模板文档** - 首先读取 `neko-style/FOR-AI-ASSISTANTS.md` 获取完整指南
2. **读取组件库** - 从 `neko-style/components-guide.md` 获取所有可用组件
3. **了解用户需求** - 询问演示主题、内容类型、目标受众
4. **选择合适组件** - 根据内容类型选择对应的组件和配色
5. **生成演示文稿** - 复制组件代码并修改内容

## 必读文档

在开始创建之前,你必须读取以下文档:

1. `neko-style/FOR-AI-ASSISTANTS.md` - AI 助手使用指南(最重要)
2. `neko-style/components-guide.md` - 组件代码示例
3. `neko-style/QUICK-START.md` - 快速入门
4. `neko-style/example/slides.md` - 完整示例

## 组件选择指南

| 内容类型 | 推荐组件 | 颜色 |
|---------|---------|------|
| 问题/挑战 | 问题卡片 | red-800 |
| 解决方案 | 解决方案卡片 | green-800 |
| 技术说明 | 信息卡片 | blue-800 |
| 性能指标 | 指标卡片 | lime-800 |
| 高级功能 | 信息卡片 | purple-800 |
| 对比展示 | 左右对比布局 | red-800 + green-800 |

## 颜色预设

在 slides.md frontmatter 中配置:

```yaml
---
glowSeed: 42          # 背景种子(每页不同)
glowPreset: blue      # blue | rust | cyan
theme: dark           # dark | light
glowOpacity: 0.4      # 0-1
---
```

## 重要原则

1. **直接复制代码** - 从 components-guide.md 复制完整代码块
2. **保持结构不变** - 不要修改卡片的基本 HTML 结构
3. **语义化配色** - 问题用红色,解决方案用绿色
4. **统一动画** - 所有动画使用 `transition duration-500 ease-in-out`
5. **每页不同种子** - 每页使用不同的 glowSeed 值

## 开始工作

现在请:
1. 读取 `neko-style/FOR-AI-ASSISTANTS.md` 获取完整指南
2. 读取 `neko-style/components-guide.md` 获取组件代码
3. 询问用户的演示需求
4. 开始创建演示文稿
