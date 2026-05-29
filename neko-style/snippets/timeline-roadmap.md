---
glowSeed: {{seed}}
glow: center
clicks: {{step_count * 2 - 1}}
---

# {{title}}

<RouteProgressionLane :steps="[
  { icon: 'i-carbon:{{icon1}}', title: '{{step1}}', subtitle: '{{time1}}', tone: 'teal' },
  { icon: 'i-carbon:{{icon2}}', title: '{{step2}}', subtitle: '{{time2}}', tone: 'sky' },
  { icon: 'i-carbon:{{icon3}}', title: '{{step3}}', subtitle: '{{time3}}', tone: 'violet' },
  { icon: 'i-carbon:{{icon4}}', title: '{{step4}}', subtitle: '{{time4}}', tone: 'cyan' },
]" />
