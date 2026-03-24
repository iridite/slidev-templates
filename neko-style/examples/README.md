# Real Presentation Examples

This directory contains references to real presentations created with the neko-style template, extracted from production talks given at conferences and meetups.

## Featured Examples

### 1. KubeCon Hong Kong 2024 - Ollama Operator

**Source:** `2024-08-23-kubecon-hk`

**Highlights:**
- Professional conference presentation style
- Asciinema terminal recording integration
- Clean technical content layout
- Effective use of section layouts

**Key Features Demonstrated:**
- `<NuAsciinemaPlayer>` for live demo recordings
- Custom layouts (intro, section, end)
- Technical diagrams and code examples
- Conference branding integration

**Notable Slides:**
```markdown
---
layout: intro
class: px-24
glowSeed: 205
---

# Watch it in live

<NuAsciinemaPlayer
  src="/asciinema/demo.cast"
  :controls="'auto'"
  :rows="18"
  :speed="3"
  w-full
/>
```

### 2. Deep Dive LLM - Understanding Attention Heads

**Source:** `2024-04-18-deep-dive-llm-understand-attention-heads-share`

**Highlights:**
- Advanced v-motion animations for progressive disclosure
- Complex technical content presentation
- Multiple custom components per slide
- Effective use of visual hierarchy

**Key Features Demonstrated:**
- `v-motion` for animated transitions
- Custom content components with click-based reveals
- Technical deep-dive content structure
- Bilingual content (English/Chinese)

**Notable Component Pattern:**
```vue
<template>
  <div
    v-motion :initial="{
      opacity: 0,
    }" :enter="{
      opacity: 1,
      transition: {
        duration: 1000,
      },
    }" class="h-full w-full flex items-center justify-center"
  >
    <div
      transition="all ease-in-out" duration-1500
      :class="$slidev.nav.clicks > 0 ? 'text-left translate-x-[-307px]' : 'text-center'"
    >
      <span>Content with animated positioning</span>
    </div>
  </div>
</template>
```

### 3. What is MCP and How It Helps

**Source:** `2025-04-13-what-is-mcp-and-how-it-helps`

**Highlights:**
- Modern AI/ML topic presentation
- Clean, minimal design
- Effective use of color presets
- Strong visual storytelling

**Key Features Demonstrated:**
- Cyan color preset for AI topics
- Table of contents with animation
- Section dividers for clear structure
- Balanced text and visual content

### 4. KubeCon Hong Kong 2025

**Source:** `2025-06-11-kubecon-hk`

**Highlights:**
- Latest iteration of conference template
- Refined layout system
- Professional branding integration
- Production-ready quality

### 5. Deep Dive LLM - DeepSeek and How

**Source:** `2025-03-13-deep-dive-llm-deepseek-and-how`

**Highlights:**
- Recent LLM research presentation
- Technical depth with accessibility
- Effective use of examples and diagrams
- Clear narrative structure

## Common Patterns Across Examples

### Layout Usage

All presentations follow a consistent structure:

1. **Cover slide** - Title, author, event branding
2. **Intro slide** - Speaker introduction and context
3. **Table of contents** - Animated section overview
4. **Section dividers** - Clear topic transitions
5. **Content slides** - Main presentation content
6. **End slide** - Thank you and contact info

### Color Preset Selection

- **Blue preset** (default): Technical talks, product launches
- **Rust preset**: Rust-specific topics, innovation themes
- **Cyan preset**: AI/ML topics, academic presentations

### Animation Patterns

- Progressive disclosure with `v-click`
- Smooth transitions with `v-motion`
- Coordinated animations on table of contents
- Subtle hover effects on interactive elements

### Component Reuse

Common components across presentations:
- Card-based layouts for structured content
- Icon integration for visual interest
- Code blocks with syntax highlighting
- Diagram and image placement patterns

## Using These Examples

To adapt these patterns for your own presentations:

1. **Study the structure** - Note how content is organized across slides
2. **Copy component patterns** - Reuse the card and layout structures
3. **Adapt the styling** - Modify colors and spacing to match your brand
4. **Maintain consistency** - Follow the established animation and transition patterns

## Source Files

All source presentations are available in:
```
/raw-template/neko-style/neko-talks/packages/
```

Each package contains:
- `slides.md` - Complete presentation content
- `components/` - Custom components for that talk
- `public/` - Images, assets, and media files
- `package.json` - Dependencies and configuration

## Creating Your Own

Start with the starter in `neko-style/starter/` and incorporate patterns from these real presentations. The starter demonstrates all core features, while these production talks show how to combine them effectively.
