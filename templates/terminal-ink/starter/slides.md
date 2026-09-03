---
theme: default
title: Terminal Ink — Incident Review
info: |
  A terminal-first starter for systems, code, and operational narratives.
class: terminal-deck
colorSchema: dark
transition: slide-left
mdc: true
---

<div class="terminal-window hero-window">
  <div class="terminal-bar"><span></span><span></span><span></span><b>incident-review — zsh</b></div>
  <div class="terminal-body">
    <p><i>$</i> status --service gateway</p>
    <p class="ok">● recovered</p>
    <h1>What failed at 02:14?</h1>
    <p class="lead">A reusable incident narrative: state → evidence → mechanism → correction → prevention.</p>
    <div class="cursor-line"><i>$</i> <span class="cursor"></span></div>
  </div>
</div>

<div class="stamp">RUNBOOK / 01</div>

---
layout: default
---

<div class="prompt">$ timeline --from 02:10 --to 02:28</div>

# One fault, four observable transitions

<div class="timeline">
  <div><time>02:10</time><b>Traffic rises</b><span>Normal autoscaling signal</span></div>
  <div class="warn"><time>02:14</time><b>Queue saturates</b><span>Retries amplify load</span></div>
  <div class="bad"><time>02:17</time><b>Error budget burns</b><span>P95 exceeds 8 seconds</span></div>
  <div class="ok"><time>02:28</time><b>Backlog clears</b><span>Retry cap deployed</span></div>
</div>

<div class="statusline"><span>service=gateway</span><span>region=ap-east</span><span>severity=SEV-2</span></div>

---
layout: default
---

<div class="prompt">$ grep -n "retry" gateway.log | tail -4</div>

# The evidence was visible before the outage

<div class="log-panel">
<pre><span class="dim">02:13:57.103</span> INFO  queue_depth=184 retry_rate=1.2
<span class="dim">02:14:01.821</span> WARN  queue_depth=391 retry_rate=3.8
<span class="dim">02:14:03.044</span> <span class="red">ERROR</span> upstream_timeout request=8f19
<span class="dim">02:14:03.046</span> WARN  retry_scheduled attempt=6 delay_ms=20</pre>
</div>

<div class="split-note">
  <div><b>Observed</b><p>Retry rate and queue depth rise together.</p></div>
  <div><b>Not yet proven</b><p>Which dependency initiated the first timeout.</p></div>
</div>

---
layout: default
---

<div class="prompt">$ git diff -- retry-policy.yml</div>

# The smallest safe correction

<div class="diff-grid">
  <div class="diff old"><span>before</span><pre>max_attempts: 8
base_delay_ms: 20
jitter: false
queue_guard: disabled</pre></div>
  <div class="diff new"><span>after</span><pre>max_attempts: 3
base_delay_ms: 150
jitter: true
queue_guard: 70%</pre></div>
</div>

<p class="caption">Bound retries, increase spacing, and stop admitting retry work before the queue is already exhausted.</p>

---
layout: default
---

<div class="prompt">$ trace --path request</div>

# Failure mechanism

<div class="pipeline">
  <div><small>01</small><b>Client burst</b><span>expected</span></div>
  <i>→</i>
  <div><small>02</small><b>Slow upstream</b><span>trigger</span></div>
  <i>→</i>
  <div class="hot"><small>03</small><b>Aggressive retries</b><span>amplifier</span></div>
  <i>→</i>
  <div><small>04</small><b>Queue saturation</b><span>user impact</span></div>
</div>

<div class="mechanism"><b>Root cause statement</b><p>A transient upstream slowdown became a service outage because retry work had no admission guard and exceeded available queue capacity.</p></div>

---
layout: default
---

<div class="prompt">$ verify --change retry-guard</div>

# Evidence that the correction works

<div class="check-grid">
  <div><span class="ok-dot"></span><b>Load test</b><p>2.4× peak traffic without queue exhaustion</p></div>
  <div><span class="ok-dot"></span><b>Fault injection</b><p>30-second upstream delay remains contained</p></div>
  <div><span class="ok-dot"></span><b>Rollback</b><p>One-command configuration reversion</p></div>
  <div><span class="warn-dot"></span><b>Open risk</b><p>Cross-region retry policy still differs</p></div>
</div>

---
layout: default
---

<div class="terminal-window closing-window">
  <div class="terminal-bar"><span></span><span></span><span></span><b>decision — readonly</b></div>
  <div class="terminal-body">
    <p><i>$</i> next --owner platform</p>
    <h1>Ship the guard. Standardize the policy.</h1>
    <ul class="terminal-list">
      <li><em>[x]</em> deploy bounded retries</li>
      <li><em>[x]</em> alert on retry amplification</li>
      <li><em>[ ]</em> unify cross-region configuration</li>
    </ul>
  </div>
</div>

<div class="stamp">EXIT 0 / 07</div>

<style>
:root {
  --term-bg: #090c0b;
  --term-panel: #111714;
  --term-panel-2: #151d19;
  --term-line: #2a3831;
  --term-text: #d7e4dc;
  --term-muted: #718078;
  --term-green: #69f0ae;
  --term-amber: #ffca5c;
  --term-red: #ff6b6b;
}

.slidev-layout {
  background: var(--term-bg);
  color: var(--term-text);
  padding: 3.2rem 4rem 3rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
}

.slidev-layout h1 {
  max-width: 980px;
  margin: .55rem 0 1.8rem;
  color: #f4fff8;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 2.55rem;
  line-height: 1.08;
  letter-spacing: -.035em;
}

.prompt { color: var(--term-green); font-size: .8rem; }
.prompt::after { content: "_"; animation: blink 1s steps(1) infinite; }
.stamp { position: absolute; right: 2.4rem; bottom: 1.7rem; color: var(--term-muted); font-size: .65rem; letter-spacing: .13em; }

.terminal-window { border: 1px solid var(--term-line); border-radius: 12px; overflow: hidden; background: var(--term-panel); box-shadow: 0 24px 80px rgba(0,0,0,.38); }
.hero-window { margin-top: .65rem; }
.closing-window { margin-top: 1.2rem; }
.terminal-bar { display: flex; align-items: center; gap: .45rem; height: 34px; padding: 0 .9rem; background: #0d120f; border-bottom: 1px solid var(--term-line); }
.terminal-bar span { width: 8px; height: 8px; border-radius: 50%; background: #334039; }
.terminal-bar span:first-child { background: var(--term-red); }
.terminal-bar span:nth-child(2) { background: var(--term-amber); }
.terminal-bar span:nth-child(3) { background: var(--term-green); }
.terminal-bar b { margin-left: .4rem; color: var(--term-muted); font-size: .65rem; font-weight: 500; }
.terminal-body { min-height: 410px; padding: 2.3rem 2.7rem; }
.terminal-body > p { margin: .2rem 0; color: var(--term-muted); }
.terminal-body p i, .cursor-line i { color: var(--term-green); font-style: normal; }
.terminal-body p.ok { color: var(--term-green); }
.terminal-body h1 { margin: 3.1rem 0 1rem; font-size: 3.7rem; }
.lead { max-width: 760px; font-family: Inter, ui-sans-serif, system-ui, sans-serif; font-size: 1.05rem; line-height: 1.6; }
.cursor-line { margin-top: 2.7rem; color: var(--term-muted); }
.cursor { display: inline-block; width: 9px; height: 16px; vertical-align: -2px; background: var(--term-green); animation: blink 1s steps(1) infinite; }

.timeline { display: grid; grid-template-columns: repeat(4, 1fr); gap: .7rem; margin-top: 2.2rem; }
.timeline > div { min-height: 165px; padding: 1rem; border: 1px solid var(--term-line); background: var(--term-panel); }
.timeline time { color: var(--term-green); font-size: .72rem; }
.timeline b { display: block; margin: 2.1rem 0 .65rem; color: #f4fff8; font-family: Inter, system-ui, sans-serif; }
.timeline span { color: var(--term-muted); font-size: .72rem; line-height: 1.45; }
.timeline .warn { border-color: rgba(255,202,92,.55); }
.timeline .warn time { color: var(--term-amber); }
.timeline .bad { border-color: rgba(255,107,107,.6); }
.timeline .bad time { color: var(--term-red); }
.timeline .ok { border-color: rgba(105,240,174,.45); }
.statusline { display: flex; gap: 1.6rem; margin-top: 1.2rem; padding-top: .75rem; border-top: 1px solid var(--term-line); color: var(--term-muted); font-size: .66rem; }

.log-panel { margin-top: 1.5rem; padding: 1.2rem 1.4rem; border: 1px solid var(--term-line); background: #050706; }
.log-panel pre { margin: 0; color: var(--term-text); font-size: .82rem; line-height: 1.8; white-space: pre-wrap; }
.dim { color: var(--term-muted); }
.red { color: var(--term-red); }
.split-note { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.25rem; }
.split-note > div { padding: 1rem; background: var(--term-panel); border-left: 3px solid var(--term-green); }
.split-note > div:last-child { border-left-color: var(--term-amber); }
.split-note b { color: #f4fff8; font-family: Inter, system-ui, sans-serif; }
.split-note p { margin: .45rem 0 0; color: var(--term-muted); font-size: .74rem; }

.diff-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.7rem; }
.diff { border: 1px solid var(--term-line); background: var(--term-panel); }
.diff > span { display: block; padding: .55rem .8rem; border-bottom: 1px solid var(--term-line); color: var(--term-muted); font-size: .65rem; text-transform: uppercase; letter-spacing: .1em; }
.diff pre { margin: 0; padding: 1.2rem; font-size: .86rem; line-height: 1.8; }
.diff.old { border-left: 4px solid var(--term-red); }
.diff.new { border-left: 4px solid var(--term-green); }
.diff.old pre { color: #ffb4b4; }
.diff.new pre { color: #a7f7cf; }
.caption { color: var(--term-muted); font: .78rem/1.5 Inter, system-ui, sans-serif; }

.pipeline { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: .55rem; align-items: center; margin-top: 2.2rem; }
.pipeline > div { min-height: 145px; padding: 1rem; border: 1px solid var(--term-line); background: var(--term-panel); }
.pipeline > div.hot { border-color: var(--term-red); background: rgba(255,107,107,.07); }
.pipeline > i { color: var(--term-muted); font-style: normal; }
.pipeline small { color: var(--term-green); }
.pipeline b { display: block; margin: 1.8rem 0 .45rem; font-family: Inter, system-ui, sans-serif; }
.pipeline span { color: var(--term-muted); font-size: .7rem; }
.mechanism { margin-top: 1.15rem; padding: .9rem 1rem; border-left: 3px solid var(--term-amber); background: var(--term-panel); }
.mechanism b { color: var(--term-amber); }
.mechanism p { margin: .35rem 0 0; color: var(--term-muted); font: .75rem/1.5 Inter, system-ui, sans-serif; }

.check-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .9rem; margin-top: 2rem; }
.check-grid > div { position: relative; min-height: 120px; padding: 1rem 1rem 1rem 2.8rem; border: 1px solid var(--term-line); background: var(--term-panel); }
.ok-dot, .warn-dot { position: absolute; left: 1rem; top: 1.1rem; width: 10px; height: 10px; border-radius: 50%; background: var(--term-green); box-shadow: 0 0 18px rgba(105,240,174,.55); }
.warn-dot { background: var(--term-amber); box-shadow: 0 0 18px rgba(255,202,92,.5); }
.check-grid b { font-family: Inter, system-ui, sans-serif; }
.check-grid p { color: var(--term-muted); font-size: .74rem; line-height: 1.45; }
.terminal-list { list-style: none; margin: 2rem 0 0; padding: 0; color: var(--term-muted); }
.terminal-list li { margin: .75rem 0; }
.terminal-list em { color: var(--term-green); font-style: normal; }

@keyframes blink { 50% { opacity: 0; } }
</style>
