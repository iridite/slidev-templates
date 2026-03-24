# Layouts Guide

The neko-style template includes a comprehensive layout system for creating professional presentations with consistent structure and branding.

## Available Layouts

### 1. cover.vue - Cover/Title Slide

The opening slide of your presentation with optional logo and branding.

**Usage:**
```markdown
---
layout: cover
background: /images/background.jpg
logoSrc: /logo.png
poweredBySrc: /powered-by.png
---

# Presentation Title

Subtitle or tagline

Author Name
```

**Props:**
- `background` (optional): Background image or color
- `logoSrc` (optional): Path to logo image (displayed top-left)
- `poweredBySrc` (optional): Path to "powered by" image (displayed bottom-right)

### 2. section.vue - Section Divider

Marks the beginning of a new section in your presentation.

**Usage:**
```markdown
---
layout: section
background: /images/section-bg.jpg
sectionNumber: 1
sectionTitle: Introduction
sectionSubtitle: Getting started with the basics
accentColor: '#60cd6a'
---
```

**Props:**
- `background` (optional): Background image or color
- `sectionNumber` (required): Section number (e.g., 1, 2, 3)
- `sectionTitle` (required): Section title
- `sectionSubtitle` (optional): Additional context
- `accentColor` (optional): Accent color for the section number (default: #60cd6a)

### 3. contents-toc.vue - Table of Contents

Animated table of contents with progressive disclosure.

**Usage:**
```markdown
---
layout: contents-toc
background: /images/toc-bg.jpg
sections:
  - Introduction
  - Core Concepts
  - Advanced Features
  - Conclusion
accentColor: '#60cd6a'
clicks: 1
---
```

**Props:**
- `background` (optional): Background image or color
- `sections` (required): Array of section titles
- `accentColor` (optional): Accent color (default: #60cd6a)

**Animation:**
- Click once to animate the first section into focus
- The animation uses smooth transitions with `duration-1500`

### 4. page.vue - Standard Content Page

Raw-template 中最常见的内容页形态，内置安全边距（`.neko-safe-area`）。

**Usage:**
```markdown
---
layout: page
glowSeed: 120
---

# Your Content
```

### 5. page-wide.vue - Full-Bleed Page

用于视频、全宽图表、截图等内容。

**Usage:**
```markdown
---
layout: page-wide
---

<video autoplay muted>
  <source src="/demo.mp4" />
</video>
```

### 6. end.vue - Closing Slide

The final slide of your presentation.

**Usage:**
```markdown
---
layout: end
background: /images/end-bg.jpg
---
```

**Props:**
- `background` (optional): Background image or color

**Default Content:**
Displays "Thanks" in large text. You can customize by adding content in the slide body.

## Background Component

All layouts use the `Background.vue` component which provides:

- Background image or color support
- Optional logo placement (top-left)
- Optional "powered by" branding (bottom-right)
- Automatic URL resolution for assets

## Customization

### Changing Accent Colors

The default accent color is `#60cd6a` (green). You can customize it per slide:

```markdown
---
layout: section
accentColor: '#3b82f6'  # Blue
---
```

### Adding Custom Logos

1. Place your logo in the `public/` directory
2. Reference it in the layout:

```markdown
---
layout: cover
logoSrc: /my-logo.png
---
```

### Background Options

Backgrounds can be:
- **Images**: `/images/background.jpg`
- **Colors**: `#1a1a1a` or `rgb(26, 26, 26)`
- **Gradients**: Use CSS gradient syntax

## Layout Workflow

A typical presentation structure:

```markdown
---
layout: cover
---
# Title

---
layout: contents-toc
sections: [...]
---

---
layout: section
sectionNumber: 1
sectionTitle: First Section
---

---
# Regular content slide
---

---
layout: section
sectionNumber: 2
sectionTitle: Second Section
---

---
# More content
---

---
layout: end
---
```

## Integration with GlowBackground

Layouts work seamlessly with the `GlowBackground.vue` component. Use `glowSeed` and other glow properties in your frontmatter:

```markdown
---
layout: section
glowSeed: 150
glowPreset: blue
sectionNumber: 1
sectionTitle: Introduction
---
```

## Tips

1. **Consistent branding**: Set `logoSrc` and `poweredBySrc` once in your cover slide
2. **Section numbering**: Keep section numbers sequential for clarity
3. **Background variety**: Use different `glowSeed` values for visual variety
4. **Accent colors**: Match accent colors to your brand or presentation theme
5. **Animation timing**: The TOC animation is triggered by clicks, plan your presentation flow accordingly
