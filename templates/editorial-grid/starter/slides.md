---
theme: default
title: Editorial Grid — Make the Decision Visible
info: |
  A bold editorial starter for product, strategy, and launch narratives.
class: editorial-deck
colorSchema: light
transition: fade
mdc: true
---

<div class="cover-grid">
  <div class="issue">ISSUE 01<br/>PRODUCT / STRATEGY</div>
  <div class="cover-title">Make the<br/><em>decision</em><br/>visible.</div>
  <div class="cover-copy">A reusable narrative system for turning context, evidence, and trade-offs into one unmistakable next move.</div>
  <div class="cover-number">01</div>
</div>

---
layout: default
---

<div class="page-head"><span>THE PREMISE</span><b>02</b></div>

<div class="manifesto">
  <div><span>01</span><h2>Start with tension.</h2><p>Name the mismatch between the world users have and the one they need.</p></div>
  <div><span>02</span><h2>Earn the claim.</h2><p>Show the smallest amount of evidence that makes the conclusion credible.</p></div>
  <div><span>03</span><h2>End with a choice.</h2><p>A presentation is useful when the audience knows what changes next.</p></div>
</div>

---
layout: default
---

<div class="page-head"><span>CONTEXT</span><b>03</b></div>

<div class="asym-grid">
  <div class="big-copy">People do not need <em>more</em> information.</div>
  <div class="side-copy">
    <div class="rule"></div>
    <p>They need a clearer relationship between the signal, the consequence, and the decision.</p>
    <small>Use this page to frame the cost of the current state.</small>
  </div>
  <div class="side-stat"><strong>63%</strong><span>of users abandon the flow before seeing the value.</span></div>
</div>

---
layout: default
---

<div class="page-head"><span>THE SHIFT</span><b>04</b></div>

<div class="before-after">
  <div class="before">
    <small>BEFORE</small>
    <h2>Features compete for attention.</h2>
    <p>Every element asks to be noticed, so nothing feels important.</p>
  </div>
  <div class="arrow">→</div>
  <div class="after">
    <small>AFTER</small>
    <h2>One path carries the story.</h2>
    <p>Context supports the decision instead of surrounding it.</p>
  </div>
</div>

---
layout: default
---

<div class="page-head"><span>EVIDENCE</span><b>05</b></div>

<div class="metric-spread">
  <div class="metric-hero"><span>Primary outcome</span><strong>2.4×</strong><p>faster time to first successful action</p></div>
  <div class="metric-stack">
    <div><strong>−31%</strong><span>support requests</span></div>
    <div><strong>+18 pt</strong><span>task confidence</span></div>
    <div><strong>0</strong><span>new mandatory steps</span></div>
  </div>
</div>

<div class="source-strip">SOURCE · Controlled usability test · n=48 · Replace with your real evidence and denominator</div>

---
layout: default
---

<div class="page-head"><span>VOICE</span><b>06</b></div>

<div class="quote-page">
  <div class="quote-mark">“</div>
  <blockquote>I finally understood what the product wanted me to do—and why it mattered.</blockquote>
  <div class="quote-source">Research participant 17<br/><span>Second evaluation round</span></div>
</div>

---
layout: default
---

<div class="page-head"><span>DECISION</span><b>07</b></div>

<div class="decision-grid">
  <div class="decision-title">Ship the focused path.</div>
  <div class="decision-list">
    <div><span>NOW</span><p>Replace the competing entry points with one guided first action.</p></div>
    <div><span>NEXT</span><p>Measure completion, confidence, and support demand for four weeks.</p></div>
    <div><span>NOT YET</span><p>Do not redesign the entire product before the core path proves itself.</p></div>
  </div>
</div>

---
layout: default
---

<div class="closing-grid">
  <div class="closing-label">THE END / THE START</div>
  <div class="closing-title">One story.<br/>One decision.<br/><em>One next move.</em></div>
  <div class="closing-foot">Replace this line with the owner, date, and commitment.</div>
  <div class="cover-number">08</div>
</div>

<style>
:root {
  --editorial-paper: #f2efe7;
  --editorial-ink: #111111;
  --editorial-red: #e7442e;
  --editorial-blue: #2d4dce;
  --editorial-gray: #9b978d;
  --editorial-rule: #c7c1b5;
}

.slidev-layout {
  background: var(--editorial-paper);
  color: var(--editorial-ink);
  padding: 2.8rem 3.5rem 2.7rem;
  font-family: Arial, Helvetica, ui-sans-serif, system-ui, sans-serif;
}

.slidev-layout h1,
.slidev-layout h2,
.slidev-layout p { color: inherit; }

.page-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: .65rem;
  border-bottom: 2px solid var(--editorial-ink);
  font-size: .68rem;
  font-weight: 800;
  letter-spacing: .16em;
}

.page-head b { font-size: .8rem; letter-spacing: 0; }

.cover-grid,
.closing-grid {
  position: relative;
  min-height: 470px;
  display: grid;
  grid-template-columns: 1fr 2.6fr 1.2fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  border-top: 8px solid var(--editorial-ink);
  border-bottom: 2px solid var(--editorial-ink);
  padding-top: .9rem;
}

.issue {
  grid-column: 1;
  font-size: .68rem;
  font-weight: 800;
  letter-spacing: .12em;
  line-height: 1.5;
}

.cover-title,
.closing-title {
  grid-column: 1 / 3;
  grid-row: 2;
  align-self: center;
  font-size: 4.75rem;
  font-weight: 900;
  line-height: .86;
  letter-spacing: -.075em;
  text-transform: uppercase;
}

.cover-title em,
.closing-title em { color: var(--editorial-red); font-style: normal; }
.cover-copy { grid-column: 3; grid-row: 2; align-self: end; padding-bottom: .55rem; font-size: .82rem; line-height: 1.45; }
.cover-number { position: absolute; right: 0; bottom: .55rem; font-size: .7rem; font-weight: 800; }

.manifesto { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2.2rem; }
.manifesto > div { min-height: 300px; display: flex; flex-direction: column; border-top: 8px solid var(--editorial-red); padding-top: .9rem; }
.manifesto > div:nth-child(2) { border-top-color: var(--editorial-blue); }
.manifesto > div:nth-child(3) { border-top-color: var(--editorial-ink); }
.manifesto span { font-size: .7rem; font-weight: 800; }
.manifesto h2 { margin: 3.6rem 0 1rem; font-size: 2rem; line-height: .95; letter-spacing: -.05em; }
.manifesto p { margin-top: auto; max-width: 230px; color: #4e4a42; font-size: .78rem; line-height: 1.5; }

.asym-grid { display: grid; grid-template-columns: 2.2fr 1fr; grid-template-rows: 1fr auto; gap: 1.4rem 2rem; margin-top: 2.2rem; }
.big-copy { grid-row: 1 / 3; max-width: 690px; font-size: 4.3rem; font-weight: 900; line-height: .92; letter-spacing: -.065em; text-transform: uppercase; }
.big-copy em { color: var(--editorial-red); font-style: normal; }
.side-copy { align-self: start; }
.side-copy .rule { width: 44px; height: 7px; background: var(--editorial-blue); margin-bottom: 1.2rem; }
.side-copy p { font-size: .9rem; line-height: 1.45; }
.side-copy small { display: block; margin-top: 1.1rem; color: #656158; line-height: 1.45; }
.side-stat { display: grid; grid-template-columns: auto 1fr; gap: .8rem; align-items: end; border-top: 1px solid var(--editorial-ink); padding-top: .7rem; }
.side-stat strong { font-size: 2.3rem; line-height: 1; }
.side-stat span { font-size: .68rem; line-height: 1.3; }

.before-after { display: grid; grid-template-columns: 1fr auto 1fr; gap: 1.1rem; align-items: stretch; margin-top: 2.2rem; }
.before,
.after { min-height: 330px; padding: 1.4rem; display: flex; flex-direction: column; border: 2px solid var(--editorial-ink); }
.before { background: #d8d3c8; }
.after { background: var(--editorial-red); color: #fff8ef; border-color: var(--editorial-red); }
.before small,
.after small { font-size: .65rem; font-weight: 900; letter-spacing: .14em; }
.before h2,
.after h2 { margin: 4.5rem 0 1rem; max-width: 350px; font-size: 2.4rem; line-height: .95; letter-spacing: -.055em; }
.before p,
.after p { margin-top: auto; max-width: 330px; font-size: .78rem; line-height: 1.5; }
.arrow { align-self: center; font-size: 2rem; font-weight: 900; }

.metric-spread { display: grid; grid-template-columns: 1.6fr 1fr; gap: 1rem; margin-top: 1.8rem; }
.metric-hero { min-height: 310px; padding: 1.2rem; background: var(--editorial-blue); color: #fff; display: flex; flex-direction: column; }
.metric-hero span { font-size: .68rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.metric-hero strong { margin-top: 2.3rem; font-size: 6.8rem; line-height: .85; letter-spacing: -.08em; }
.metric-hero p { margin-top: auto; max-width: 340px; font-size: .9rem; line-height: 1.35; }
.metric-stack { display: grid; grid-template-rows: repeat(3, 1fr); border-top: 2px solid var(--editorial-ink); }
.metric-stack > div { display: grid; grid-template-columns: 1fr 1fr; align-items: center; border-bottom: 1px solid var(--editorial-ink); }
.metric-stack strong { font-size: 1.9rem; letter-spacing: -.04em; }
.metric-stack span { font-size: .7rem; line-height: 1.3; }
.source-strip { margin-top: .8rem; font-size: .58rem; letter-spacing: .08em; color: #625e55; }

.quote-page { position: relative; min-height: 400px; display: grid; grid-template-columns: .65fr 3fr 1fr; align-items: center; }
.quote-mark { color: var(--editorial-red); font-family: Georgia, serif; font-size: 9rem; line-height: 1; align-self: start; margin-top: 2.5rem; }
.quote-page blockquote { margin: 0; border: 0; padding: 0; font-family: Georgia, "Times New Roman", serif; font-size: 2.7rem; font-weight: 500; line-height: 1.08; letter-spacing: -.04em; }
.quote-source { align-self: end; margin-bottom: 2.7rem; border-top: 1px solid var(--editorial-ink); padding-top: .65rem; font-size: .68rem; font-weight: 700; }
.quote-source span { color: #676259; font-weight: 400; }

.decision-grid { display: grid; grid-template-columns: 1.25fr 1fr; gap: 2.3rem; margin-top: 2.4rem; }
.decision-title { font-size: 4.5rem; font-weight: 900; line-height: .88; letter-spacing: -.065em; text-transform: uppercase; color: var(--editorial-red); }
.decision-list > div { display: grid; grid-template-columns: 72px 1fr; gap: .8rem; padding: .85rem 0; border-top: 1px solid var(--editorial-ink); }
.decision-list span { font-size: .62rem; font-weight: 900; letter-spacing: .1em; }
.decision-list p { margin: 0; font-size: .78rem; line-height: 1.45; }

.closing-grid { border-top-color: var(--editorial-red); }
.closing-label { grid-column: 1; font-size: .68rem; font-weight: 900; letter-spacing: .12em; }
.closing-title { grid-column: 1 / 4; font-size: 4.35rem; }
.closing-foot { grid-column: 1 / 3; grid-row: 3; padding-bottom: .55rem; font-size: .72rem; }
</style>
