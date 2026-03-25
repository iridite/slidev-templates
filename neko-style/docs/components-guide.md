# 组件使用指南

本指南包含所有可复用的组件模式和使用示例。直接复制代码即可使用。

## 动画系统

所有组件都支持统一的动画系统，使用 `transition duration-500 ease-in-out` 保持一致性。

### 基础动画类

```vue
<!-- 从下方滑入 -->
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
>
  内容
</div>

<!-- 从左侧滑入 -->
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-x--20' : 'opacity-100 translate-x-0'"
>
  内容
</div>

<!-- 缩放入场 -->
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'"
>
  内容
</div>
```

详细动画模式请参考 `animation-patterns.md`。

---

## Raw-template 提炼组件（推荐）

这些组件已内置在 `theme/components/`，可直接在 slides.md 使用。

### ProblemSolutionSplit（问题 vs 方案）

```vue
<ProblemSolutionSplit>
  <template #problem>
    <div flex items-center gap-2><div i-carbon:close text-red-400 />依赖版本漂移</div>
    <div flex items-center gap-2><div i-carbon:close text-red-400 />环境难复现</div>
  </template>
  <template #solution>
    <div flex items-center gap-2><div i-carbon:checkmark-outline text-green-400 />统一环境定义</div>
    <div flex items-center gap-2><div i-carbon:checkmark-outline text-green-400 />锁文件可追踪</div>
  </template>
</ProblemSolutionSplit>
```

### LifecycleChallengesThreeCol（三栏挑战）

```vue
<LifecycleChallengesThreeCol />
```

### CapabilityRevealRow（渐进能力矩阵）

```vue
<CapabilityRevealRow />
```

### SplitBrandIntro（左右分列开场）

```vue
<SplitBrandIntro>
  <template #left>
    <div i-carbon:presentation-file text-5xl text-blue-300 />
    <span font-semibold>Structure First</span>
  </template>
  <template #right>
    <div i-carbon:color-palette text-5xl text-cyan-300 />
    <span font-semibold>Visual Identity</span>
  </template>
</SplitBrandIntro>
```

### ProcessFlowGrid（流程步骤网格）

```vue
<ProcessFlowGrid :columns="2" :items="[
  { icon: 'i-carbon:settings-adjust', title: '读取配置', description: '客户端启动后先读取本地配置。' },
  { icon: 'i-carbon:plug', title: '连接服务', description: '与外部系统或协议端点建立连接。' },
  { icon: 'i-carbon:tool-box', title: '获取能力', description: '拉取工具 / 接口 / 能力描述。' },
  { icon: 'i-carbon:result', title: '返回结果', description: '执行完成后组织输出返回给用户。' },
]" />
```

### SpeakerLineupIntro（多讲者开场）

```vue
<SpeakerLineupIntro
  title="联合分享"
  subtitle="适合 Panel、Roundtable、双讲者 / 多讲者开场"
  :speakers="[
    { name: 'Neko', role: 'Software Engineer', handle: 'nekomeowww', handleIcon: 'i-ri:github-fill' },
    { name: 'Makito', role: 'Platform Engineer', affiliation: 'Kong', affiliationIcon: 'i-simple-icons:kong', handle: 'sumimakito', handleIcon: 'i-ri:github-fill' },
    { name: 'Liet', role: 'Robotics Builder', handle: 'lietblue', handleIcon: 'i-ri:github-fill' },
  ]"
/>
```

### ArtifactExplainBoard（注释浮层讲解板）

默认是 overlay 模式，适合把注释卡直接浮在主体对象上；也支持 `mode="sidebar"`，把说明卡排到右侧做更稳的讲解板。

```vue
<ArtifactExplainBoard
  title="模型目录拆解"
  subtitle="适合讲代码结构、配置文件、架构图、产品截图"
  :items="[
    {
      icon: 'i-carbon:document-unknown',
      tone: 'blue',
      title: 'config.json - 模型架构配置',
      description: '先说明这个对象的骨架和关键字段。',
      positionClass: 'top-4 left-28',
      widthClass: 'w-[18rem]',
      inactiveAfterStep: 3,
    },
    {
      icon: 'i-carbon:string-text',
      tone: 'green',
      title: 'tokenizer_config.json - 分词器配置',
      description: '第二层再讲输入输出约束和 tokenizer 细节。',
      positionClass: 'top-20 left-[24rem]',
      widthClass: 'w-[19rem]',
      inactiveAfterStep: 3,
    },
  ]"
>
  <div class="h-full rounded-xl border border-white/8 bg-neutral-900/70 p-6 font-mono text-sm leading-7 text-zinc-200">
    <div>models/</div>
    <div class="pl-6">gpt-oss/</div>
    <div class="pl-12">config.json</div>
    <div class="pl-12">tokenizer_config.json</div>
    <div class="pl-12">generation_config.json</div>
    <div class="pl-12">model.safetensors</div>
  </div>
</ArtifactExplainBoard>
```

```vue
<ArtifactExplainBoard
  mode="sidebar"
  title="架构图侧边讲解"
  :items="[
    { icon: 'i-carbon:user-avatar', tone: 'cyan', title: '入口层', description: '用户请求进入后先做身份和上下文整理。' },
    { icon: 'i-carbon:tool-box', tone: 'green', title: '工具层', description: '把模型能力和外部系统能力解耦。' },
    { icon: 'i-carbon:result', tone: 'purple', title: '输出层', description: '最后汇总工具结果并产出答案。' },
  ]"
>
  <img src="/architecture-diagram.png" class="h-full w-full rounded-xl object-cover" />
</ArtifactExplainBoard>
```

### WorksOnMyMachineHero（报错开场）

```vue
<WorksOnMyMachineHero />
```

### InsightCalloutBar（结论条）

```vue
<InsightCalloutBar tone="yellow">
  先把问题切成结构化模块，再做技术选型。
</InsightCalloutBar>
```

### SessionHoverGallery（截图 + 二维码悬停）

```vue
<SessionHoverGallery :items="[
  { image: '/session-1.png', qr: '/session-1-qr.png' },
  { image: '/session-2.png', qr: '/session-2-qr.png' },
  { image: '/session-3.png', qr: '/session-3-qr.png' },
  { image: '/session-4.png', qr: '/session-4-qr.png' },
]" />
```

### SpotlightQuestion（问题聚焦页）

```vue
<SpotlightQuestion question="Neuro-sama 又是什么？" />
```

### FeatureOverlayVideo（视频叠层功能点）

```vue
<FeatureOverlayVideo src="/Neuro-minecraft.mp4" title="这段演示里有哪些能力？" />
```

### ContactQrTriplet（三联联系方式）

```vue
<ContactQrTriplet :items="[
  { label: 'GitHub', src: '/github_qr.png' },
  { label: 'Discord', src: '/discord_qr.png' },
  { label: 'Telegram', src: '/telegram_qr.png' },
]" />
```

### SpeakerEcosystemIntro（讲者+社区）

```vue
<SpeakerEcosystemIntro
  avatar="/person/neko.jpeg"
  name="Neko"
  role="Literally Full-stack Developer"
  handle="nekomeowww"
  :community="[
    { icon: 'i-logos:hugging-face-icon', label: 'Hugging Face' },
    { icon: 'i-logos:vue', label: 'Vue' },
    { icon: 'i-simple-icons:ollama', label: 'Ollama' },
  ]"
  :other-projects="[
    { icon: 'i-ri:github-fill', label: 'Moeru AI' },
  ]"
  qr="/nekomeoww-qr.png"
/>
```

### FullBleedCharacterReveal（全屏角色揭示）

```vue
<FullBleedCharacterReveal
  image="/Neuro-sama_v2_character_sheet.webp"
  title="Neurosama"
  :stats="[
    { icon: 'i-logos:youtube-icon', text: '63.6 万订阅' },
    { icon: 'i-logos:twitch', text: '78.9 万订阅' },
  ]"
/>
```

### RecruitingRoleList（招募清单）

```vue
<RecruitingRoleList
  title="我们在找什么角色"
  subtitle="欢迎一起构建复杂 AI 系统"
  :roles="[
    { icon: 'i-solar:hand-stars-bold-duotone', label: '产品经理' },
    { icon: 'i-solar:pen-new-square-bold-duotone', label: '设计师' },
    { icon: 'i-solar:eye-bold-duotone', label: '机器视觉（CV）' },
  ]"
/>
```

### ThankYouSplitPanel（双栏结束页）

```vue
<ThankYouSplitPanel art="/relu-art-6.gif" qr="/slide_qr.png" />
```

### PatternCardGrid（模式总览网格）

```vue
<PatternCardGrid :items="[
  { title: '01 Question Spotlight', description: '用问题驱动叙事，而不是堆事实。' },
  { title: '02 Compare & Resolve', description: '问题/方案并排，观众最容易理解。' },
  { title: '03 Progressive Reveal', description: '`v-clicks` 逐步展开复杂系统。' },
  { title: '04 Closure & CTA', description: '结尾给下一步动作，不只说 Thanks。' },
]" />
```

### MotionPrinciplesGallery（动效规范画廊）

```vue
<MotionPrinciplesGallery :items="[
  { icon: '🎯', title: 'balance-shake', caption: '强调关键点', animationClass: 'animate-balance-shake' },
  { icon: '⬆️', title: 'balance-move-left', caption: '动效区和文案区隔离', animationClass: 'animate-balance-move-left' },
  { icon: '⬇️', title: 'balance-move-right', caption: '避免图标遮挡说明文字', animationClass: 'animate-balance-move-right' },
]" />
```

### GlassChecklist（玻璃态检查清单）

```vue
<GlassChecklist :items="[
  '先 smoke test：只放 <code>theme + glowSeed</code> 验证背景。',
  '检查全局 CSS 是否覆盖 <code>.slidev-layout</code>。',
  '若页面设置 <code>background:</code> 会覆盖 glow（预期）。',
  '主题未发布 npm registry，已有项目请用本地路径安装。',
]" />
```

### 动画防遮挡容器（样式类）

```vue
<div class="neko-motion-stage">
  <div class="text-6xl animate-balance-move-left">⬆️</div>
</div>
<div class="neko-motion-caption">图标运动区和文案区分离，避免遮挡</div>
```

---

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

1. **保持一致性**：在同一个演示中使用相同的配色方案和动画时长（500ms）
2. **合理间距**：使用 `gap-2`, `gap-4`, `gap-6` 等保持统一间距
3. **图标选择**：从 Carbon 图标集中选择合适的图标
4. **响应式**：使用 `grid-cols-2` 或 `grid-cols-3` 创建响应式布局
5. **动画配合**：结合 `v-click` 实现渐进式展示
6. **主题切换**：使用 `theme: light` 切换到浅色主题

## Frontmatter 配置选项

每页幻灯片支持以下配置：

```yaml
---
layout: center           # 布局类型
glowSeed: 100           # 背景图案种子（必需）
glow: full              # 背景分布: full/top/bottom/left/right/center
glowOpacity: 0.4        # 背景透明度 (0-1)
glowHue: 0              # 色相偏移 (0-360)
theme: dark             # 主题: dark/light
transition: fade-out    # 页面过渡效果
---
```

### 主题配置

**深色主题（默认）**：
```yaml
---
theme: dark
glowSeed: 100
glowOpacity: 0.4
---
```

**浅色主题**：
```yaml
---
theme: light
glowSeed: 100
glowOpacity: 0.6        # 浅色主题建议更高透明度
---
```

### 动画配置

所有动画使用统一配置：
- 过渡时长：`duration-500`
- 缓动函数：`ease-in-out`
- 透明度：`opacity-0` → `opacity-100`
- 位移距离：`20` 单位（translate-y-20, translate-x-20）
- 缩放比例：`scale-90` → `scale-100`

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
