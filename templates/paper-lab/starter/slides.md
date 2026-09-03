---
theme: default
title: Paper Lab — Evidence Before Ornament
info: |
  A publication-inspired starter for research and evidence-heavy presentations.
class: paper-deck
colorSchema: light
transition: fade-out
mdc: true
---

<div class="paper-cover">
  <div class="eyebrow">RESEARCH NOTE · 2026</div>
  <h1>Evidence before ornament</h1>
  <p class="dek">A reusable structure for explaining a question, a method, a result, and the uncertainty that still matters.</p>
  <div class="authors">Your Name · Laboratory / Team</div>
</div>

<div class="folio">01</div>

---
layout: default
---

<div class="kicker">Research question</div>

# Can the intervention improve the outcome without increasing operational cost?

<div class="question-grid">
  <div class="question-card">
    <span>Primary hypothesis</span>
    <strong>Outcome quality improves by at least 8%.</strong>
  </div>
  <div class="question-card muted">
    <span>Boundary condition</span>
    <strong>No material increase in latency or staffing.</strong>
  </div>
</div>

<p class="source-note">Pre-register the claim that would change the decision. Avoid replacing the research question with a feature list.</p>

<div class="folio">02</div>

---
layout: default
---

<div class="kicker">Method</div>

# A transparent path from sample to conclusion

<div class="method-flow">
  <div><b>01</b><span>Define cohort</span><small>Inclusion, exclusion, missingness</small></div>
  <div><b>02</b><span>Measure baseline</span><small>Comparable pre-period</small></div>
  <div><b>03</b><span>Run intervention</span><small>Fixed protocol and audit trail</small></div>
  <div><b>04</b><span>Estimate effect</span><small>Uncertainty and sensitivity</small></div>
</div>

<div class="method-note">
  <strong>Design choice</strong>
  <p>Report the smallest set of assumptions on which the conclusion depends.</p>
</div>

<div class="folio">03</div>

---
layout: default
---

<div class="kicker">Results</div>

# The effect is directionally strong, but not uniform

<div class="metric-row">
  <div class="metric primary"><span>Primary outcome</span><strong>+11.8%</strong><small>95% CI +7.1 to +16.2</small></div>
  <div class="metric"><span>Median latency</span><strong>−4.3%</strong><small>No degradation observed</small></div>
  <div class="metric"><span>Adverse events</span><strong>1.02×</strong><small>Compatible with no change</small></div>
</div>

<div class="result-line">
  <span style="width:74%"></span>
</div>
<p class="source-note">Replace decorative charts with the statistic, interval, denominator, and decision relevance.</p>

<div class="folio">04</div>

---
layout: default
---

<div class="kicker">Evidence table</div>

# What supports the conclusion—and what does not

| Evidence | Estimate | Confidence | Decision relevance |
| --- | ---: | --- | --- |
| Primary endpoint | +11.8% | High | Clears the pre-registered threshold |
| Operational latency | −4.3% | Medium | No cost trade-off detected |
| Small subgroup | +2.1% | Low | Underpowered; do not generalize |
| Six-month durability | Pending | Unknown | Required before broad rollout |

<div class="callout"><b>Reading rule:</b> confidence and decision relevance are separate. A precise estimate can still answer the wrong question.</div>

<div class="folio">05</div>

---
layout: default
---

<div class="kicker">Limitations</div>

# The conclusion should travel only as far as the evidence

<div class="limits">
  <div><span>01</span><p><b>Single operating context.</b><br/>External validity remains untested.</p></div>
  <div><span>02</span><p><b>Short follow-up.</b><br/>Durability beyond six months is unknown.</p></div>
  <div><span>03</span><p><b>One subgroup is underpowered.</b><br/>Treat the apparent difference as exploratory.</p></div>
</div>

<div class="folio">06</div>

---
layout: default
---

<div class="paper-cover closing">
  <div class="eyebrow">DECISION</div>
  <h1>Proceed with a bounded rollout.</h1>
  <p class="dek">The evidence supports expansion, conditional on durability monitoring and a pre-specified subgroup review.</p>
  <div class="authors">Repository template · replace with your next action</div>
</div>

<div class="folio">07</div>

<style>
:root {
  --paper: #f5f1e8;
  --paper-2: #ebe5d8;
  --ink: #181815;
  --muted: #6c695f;
  --rule: #bcb4a5;
  --accent: #9e3f2f;
}

.slidev-layout {
  background: var(--paper);
  color: var(--ink);
  padding: 3.4rem 4.3rem 3rem;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.slidev-layout h1 {
  max-width: 940px;
  margin: .35rem 0 2rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.6rem;
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -.035em;
  color: var(--ink);
}

.paper-cover {
  min-height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}

.paper-cover h1 { max-width: 820px; font-size: 4.3rem; margin: 1.1rem 0 1.4rem; }
.paper-cover.closing h1 { font-size: 3.7rem; }
.eyebrow, .kicker { color: var(--accent); font-size: .72rem; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; }
.dek { max-width: 760px; font-family: Georgia, "Times New Roman", serif; font-size: 1.35rem; line-height: 1.45; color: #464239; }
.authors { margin-top: 2.2rem; font-size: .83rem; color: var(--muted); }
.folio { position: absolute; right: 3rem; bottom: 1.7rem; font: 600 .7rem/1 ui-monospace, SFMono-Regular, Menlo, monospace; color: var(--muted); }

.question-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-top: 2.4rem; }
.question-card { border-top: 3px solid var(--accent); background: #fffdf8; padding: 1.35rem; min-height: 145px; }
.question-card.muted { border-top-color: var(--ink); }
.question-card span, .metric span { display: block; color: var(--muted); font-size: .72rem; text-transform: uppercase; letter-spacing: .1em; }
.question-card strong { display: block; margin-top: 1.1rem; font-family: Georgia, serif; font-size: 1.28rem; line-height: 1.35; }
.source-note { margin-top: 1.4rem; color: var(--muted); font-size: .76rem; line-height: 1.5; }

.method-flow { display: grid; grid-template-columns: repeat(4, 1fr); gap: .75rem; margin-top: 2rem; }
.method-flow > div { position: relative; min-height: 170px; padding: 1.1rem; border: 1px solid var(--rule); background: rgba(255,255,255,.45); }
.method-flow b { display: block; color: var(--accent); font: 700 .75rem/1 ui-monospace, monospace; }
.method-flow span { display: block; margin: 2rem 0 .55rem; font-weight: 700; }
.method-flow small { color: var(--muted); line-height: 1.4; }
.method-note { display: flex; gap: 1.8rem; align-items: baseline; margin-top: 1.2rem; padding-top: .9rem; border-top: 1px solid var(--rule); }
.method-note p { margin: 0; color: var(--muted); }

.metric-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem; }
.metric { padding: 1.2rem; border-left: 1px solid var(--rule); }
.metric.primary { border-left: 4px solid var(--accent); background: #fffdf8; }
.metric strong { display: block; margin: .55rem 0; font-family: Georgia, serif; font-size: 2.55rem; font-weight: 500; }
.metric small { color: var(--muted); }
.result-line { height: 8px; margin-top: 2.5rem; background: var(--paper-2); }
.result-line span { display: block; height: 100%; background: var(--accent); }

.slidev-layout table { width: 100%; margin-top: 1.3rem; border-collapse: collapse; font-size: .78rem; }
.slidev-layout th { padding: .7rem .65rem; border-bottom: 2px solid var(--ink); text-align: left; color: var(--muted); text-transform: uppercase; letter-spacing: .07em; }
.slidev-layout td { padding: .82rem .65rem; border-bottom: 1px solid var(--rule); }
.callout { margin-top: 1.25rem; padding: .9rem 1rem; border-left: 3px solid var(--accent); background: #fffdf8; font-size: .78rem; }

.limits { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; margin-top: 2.2rem; }
.limits > div { border-top: 1px solid var(--ink); padding-top: 1rem; }
.limits span { color: var(--accent); font: 700 .72rem/1 ui-monospace, monospace; }
.limits p { margin-top: 1.4rem; color: var(--muted); line-height: 1.55; }
.limits b { color: var(--ink); }
</style>
