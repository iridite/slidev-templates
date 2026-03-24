# AIRI 2025-10 设计语言提炼（可复用）

来源：`raw-template/neko-style/neko-talks/packages/2025-10-24-fudan-university-airi-dev-talk/slides.md`

## 1) 表达方式（Story Grammar）

这套稿子的独特点不在“炫技”，而在叙事节奏：

1. **Question Spotlight 连击**
   - 连续用大字问题页推进认知（如“AI 主播？”→“Neuro-sama 是什么？”）
   - 视觉做法：大字居中 + click 后缩小上移淡出

2. **Reality Proof 插入**
   - 在抽象概念后立刻给截图/数据/视频证据
   - 避免“概念悬空”

3. **Capability Reveal Row**
   - 五列能力卡片逐列出现
   - 每列结构一致（大图标 + 底部标签条）

4. **Overlay Video + Feature List**
   - 视频作为背景，半透明面板列功能点
   - 用 click 逐条解释“看到的能力”

5. **Community / Hiring / Contact Closure**
   - 从产品讲到生态，再到协作入口（二维码/社区）

## 2) 页面布局模式

### A. 问题聚焦页
- 模式：`SpotlightQuestion`
- 适用：章节转场、概念提问、误解纠偏

### B. 全屏角色揭示页
- 模式：`FullBleedCharacterReveal`
- 适用：角色介绍、IP 亮相、品牌记忆点

### C. 截图+二维码悬停墙
- 模式：`SessionHoverGallery`
- 适用：往期内容导流、活动合集、案例展示

### D. 视频叠层讲解页
- 模式：`FeatureOverlayVideo`
- 适用：Demo 分解讲解

### E. 讲者+社区身份页
- 模式：`SpeakerEcosystemIntro`
- 适用：演讲开场、身份背书、组织关系图

### F. 招募技能清单页
- 模式：`RecruitingRoleList`
- 适用：招募、协作需求、团队建设

### G. 双栏感谢收尾页
- 模式：`ThankYouSplitPanel`
- 适用：结束页、链接和二维码导流

## 3) 视觉与动效约束

- 大字问题页：`text-6xl` + `translate-y--18 scale-40`
- 渐进显隐：统一 `transition duration-500 ease-in-out`
- 卡片统一：`rounded-lg + border + bg + backdrop-blur`
- 视频页遮罩：`bg="black/70"` + `backdrop-blur-sm`
- 安全区：建议 `layout: page`（`neko-safe-area`）

## 4) 推荐使用顺序（拿来即用）

1. `SplitBrandIntro` / `SpeakerEcosystemIntro` 开场
2. `SpotlightQuestion` 做问题推进
3. `WorksOnMyMachineHero` / 证据页建立痛点
4. `ProblemSolutionSplit` / `LifecycleChallengesThreeCol` 拆解问题
5. `CapabilityRevealRow` + `FeatureOverlayVideo` 展示能力
6. `RecruitingRoleList` + `ContactQrTriplet` 导向协作
7. `ThankYouSplitPanel` 收尾
