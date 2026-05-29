---
layout: page-wide
glowSeed: {{seed}}
clicks: {{node_count}}
---

# {{title}}

<FlowDiagram
  height="400px"
  :nodes="[
    { id: '{{id1}}', click: 1, x: 350, y: 160, width: 200, height: 90, title: '{{node1}}', subtitle: '{{desc1}}', icon: 'i-carbon:{{icon1}}', className: 'tone-sky' },
    { id: '{{id2}}', click: 2, x: 50, y: 60, width: 180, height: 70, title: '{{node2}}', subtitle: '{{desc2}}', icon: 'i-carbon:{{icon2}}', className: 'tone-violet' },
    { id: '{{id3}}', click: 3, x: 650, y: 160, width: 180, height: 70, title: '{{node3}}', subtitle: '{{desc3}}', icon: 'i-carbon:{{icon3}}', className: 'tone-teal' },
  ]"
  :edges="[
    { id: 'e1', from: '{{id2}}', to: '{{id1}}', click: 2, fromAnchor: { x: 1, y: 0.5 }, toAnchor: { x: 0, y: 0.3 } },
    { id: 'e2', from: '{{id1}}', to: '{{id3}}', click: 3, fromAnchor: { x: 1, y: 0.5 }, toAnchor: { x: 0, y: 0.5 } },
  ]"
/>
