# Neko Style - Slidev Theme

A modern, animated Slidev theme with glow effects and advanced components.

## Installation

> ⚠️ `slidev-theme-neko-style` 当前**未发布到 npm registry**，不能直接 `npm install slidev-theme-neko-style`。

推荐两种方式：

### A) 使用 starter（最推荐）

```bash
npx degit iridite/slidev-templates/neko-style/starter my-presentation
cd my-presentation
npm install
npm run dev
```

### B) 在已有项目通过本地路径安装 theme

先获取仓库（任意位置）：

```bash
git clone https://github.com/iridite/slidev-templates.git
```

然后在你的 Slidev 项目里安装本地 theme 包：

```bash
npm install /absolute/path/to/slidev-templates/neko-style/theme
```

安装后在 `slides.md` 使用：

```yaml
---
theme: neko-style
---
```

## Usage

Add the theme to your `slides.md` frontmatter:

```yaml
---
theme: neko-style
---
```

## Glow Background Notes

To avoid a full black background without glow effect:

- Do not force override `.slidev-layout` with a global black background in your project CSS.
- Keep `glow` enabled (default is enabled, only disabled when `glow: false`).
- If a slide defines `background`, that explicit background takes precedence over glow.

Recommended per-slide frontmatter:

```yaml
---
glowSeed: 42
glowPreset: blue   # blue | rust | cyan
glowOpacity: 0.4
glow: full
---
```

Quick check when glow is missing:

1. Confirm `theme: neko-style` is present.
2. Confirm no custom global CSS overrides `.slidev-layout` background.
3. Confirm the slide does not set `glow: false`.
4. Confirm frontmatter YAML is valid (correct `---` separators and indentation).

Migration smoke test (recommended before writing real content):

```yaml
---
theme: neko-style
glowSeed: 101
glowPreset: blue
glow: full
glowOpacity: 0.4
---

# Glow Smoke Test
```

Find potentially conflicting CSS quickly:

```bash
rg -n "\.slidev-layout|background:\s*black|background-color:\s*#000|background-color:\s*black" .
```

Important precedence:
- `background:` in slide frontmatter takes precedence over glow.
- `glow: false` explicitly disables glow.


## Available Layouts

- `cover` - Title slide with glow background
- `section` - Section divider with centered content
- `contents-toc` - Table of contents with automatic slide links
- `page` - Standard content page with built-in safe area padding
- `page-wide` - Full-bleed page (for videos/large diagrams)
- `end` - Closing slide

## Components

### Core Components

- `GlowBackground` - Animated particle background with glow effects
- `Background` - Simple background wrapper
- `ProblemSolutionSplit` - 红绿对比叙事卡（问题 vs 方案）
- `LifecycleChallengesThreeCol` - 三栏挑战卡（生命周期问题拆解）
- `CapabilityRevealRow` - 渐进式能力矩阵（`v-clicks` 逐列出现）
- `WorksOnMyMachineHero` - 经典“报错开场”页
- `InsightCalloutBar` - 底部总结条（关键结论）
- `SplitBrandIntro` - 左右分列入场开场组件
- `ProcessFlowGrid` - 协议流程 / 端到端步骤讲解网格
- `ArtifactExplainBoard` - 注释浮层讲解板（配置、架构、截图拆解）
- `SessionHoverGallery` - 截图 + 二维码悬停展示墙
- `SpeakerLineupIntro` - 多讲者 / 联合分享开场组件
- `SpotlightQuestion` - 大字问题聚焦页（缩放淡出）
- `FeatureOverlayVideo` - 视频叠层功能讲解页
- `ContactQrTriplet` - 三联二维码联系方式卡
- `SpeakerEcosystemIntro` - 讲者身份 + 社区生态页
- `FullBleedCharacterReveal` - 全屏角色揭示页
- `RecruitingRoleList` - 招募方向清单页
- `ThankYouSplitPanel` - 双栏感谢收尾页
- `PatternCardGrid` - 玻璃态模式总览网格
- `MotionPrinciplesGallery` - 动效防遮挡示例画廊
- `GlassChecklist` - 玻璃态检查清单

示例：

```vue
<ProblemSolutionSplit>
  <template #problem>
    <div flex items-center gap-2><div i-carbon:close text-red-400 />依赖版本漂移</div>
  </template>
  <template #solution>
    <div flex items-center gap-2><div i-carbon:checkmark-outline text-green-400 />统一环境定义</div>
  </template>
</ProblemSolutionSplit>
```

```vue
<LifecycleChallengesThreeCol />
```

```vue
<CapabilityRevealRow />
```

```vue
<SessionHoverGallery :items="[
  { image: '/session-1.png', qr: '/session-1-qr.png' },
  { image: '/session-2.png', qr: '/session-2-qr.png' },
  { image: '/session-3.png', qr: '/session-3-qr.png' },
  { image: '/session-4.png', qr: '/session-4-qr.png' },
]" />
```

```vue
<SpotlightQuestion question="AI 主播？">
  <v-clicks>
    <h1 mt-4 text="5xl!">就是带货那种数字人吗？</h1>
  </v-clicks>
</SpotlightQuestion>
```

```vue
<FeatureOverlayVideo src="/Neuro-minecraft.mp4" title="这段演示里有哪些能力？" />
```

```vue
<ContactQrTriplet :items="[
  { label: 'GitHub', src: '/github_qr.png' },
  { label: 'Discord', src: '/discord_qr.png' },
  { label: 'Telegram', src: '/telegram_qr.png' },
]" />
```

```vue
<PatternCardGrid :items="[
  { title: 'Question Spotlight', description: '用问题推进叙事。' },
  { title: 'Compare & Resolve', description: '把问题和方案并排展示。' },
]" />
```

```vue
<ProcessFlowGrid :columns="2" :items="[
  { icon: 'i-carbon:settings-adjust', title: '读取配置', description: '先加载本地配置。' },
  { icon: 'i-carbon:plug', title: '连接服务', description: '连接协议端点。' },
  { icon: 'i-carbon:tool-box', title: '拉取能力', description: '获取工具或能力描述。' },
  { icon: 'i-carbon:result', title: '返回结果', description: '执行后组织最终输出。' },
]" />
```

```vue
<ArtifactExplainBoard
  title="模型目录拆解"
  :items="[
    { icon: 'i-carbon:document-unknown', title: 'config.json', description: '模型架构配置', positionClass: 'top-4 left-28' },
    { icon: 'i-carbon:string-text', title: 'tokenizer_config.json', description: '分词器配置', positionClass: 'top-24 right-6' },
  ]"
>
  <div class="h-full rounded-xl border border-white/8 bg-neutral-900/70 p-6 font-mono text-sm">
    <div>models/</div>
    <div class="pl-6">gpt-oss/</div>
    <div class="pl-12">config.json</div>
    <div class="pl-12">tokenizer_config.json</div>
  </div>
</ArtifactExplainBoard>
```

```vue
<SpeakerLineupIntro
  title="联合分享"
  :speakers="[
    { name: 'Neko', role: 'AI Engineer', handle: 'nekomeowww', handleIcon: 'i-ri:github-fill' },
    { name: 'Makito', role: 'Platform Engineer', handle: 'sumimakito', handleIcon: 'i-ri:github-fill' },
  ]"
/>
```

```vue
<MotionPrinciplesGallery />
```

```vue
<GlassChecklist :items="[
  '先 smoke test：只放 <code>theme + glowSeed</code> 验证背景。',
  '若页面设置 <code>background:</code> 会覆盖 glow（预期）。',
]" />
```

### Advanced Components (Optional Dependencies)

- `AsciinemaPlayer` - Terminal recording playback wrapper (requires `@nolebase/ui-asciinema`, `asciinema-player`)
- `VMotionExample` - Declarative motion example (requires `@vueuse/motion`)
- TresJS / Three.js examples - 3D scene snippets (requires `@tresjs/core`, `@tresjs/cientos`, `three`)

## Configuration

The theme uses UnoCSS for styling. Add this to your `uno.config.ts`:

```ts
import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-main': 'bg-[#0a0a0a]',
  },
})
```

## Optional Dependencies

Install only what you need:

```bash
# For terminal recordings
npm install @nolebase/ui-asciinema asciinema-player

# For 3D scenes
npm install @tresjs/core @tresjs/cientos three

# For motion animations
npm install @vueuse/motion
```
