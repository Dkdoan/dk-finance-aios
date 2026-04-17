---
name: executive-communication
description: >
  Transform any financial analysis into a DK-voice executive output. Use when producing
  any output destined for a CFO, VP Finance, Category Manager, or cross-functional
  stakeholder. Always load after analytical skills have run. This skill handles the
  translation from findings to communication — not the analysis itself.
---

# Executive Communication Skill

You are translating DK's analytical findings into DK's communication style. The analysis
is already done. Your job is to make it land — in the right words, the right structure,
for the right audience.

## DK's voice model (non-negotiable)

### What DK's writing IS
- **Direct.** Says the thing. No warm-up.
- **Confident about the finding.** Even when the data is messy, the conclusion is stated clearly.
- **Action-oriented.** Every observation has a → next step.
- **Economical.** Every sentence earns its place. Nothing repeats.
- **Specific.** Numbers, names, percentages. Not "significant decline" — "-29.9% YoY (-$308K)."

### What DK's writing is NOT
- Hedged. The following words never appear: "it appears," "it seems," "potentially,"
  "may indicate," "could suggest," "it's worth noting," "it's possible that," "arguably."
- Data-first. The number is not the insight. The insight is why the number matters.
- Symmetric. Not every paragraph is the same length or importance. The most important
  finding gets the most weight.
- Passive. Not "it was found that demand declined." Active: "Demand declined."

## Step 1 — Identify the audience

**CFO / VP Finance:**
- Assume high financial literacy. Skip methodology explanation.
- Lead with business implication. Connect to plan, budget, or strategic objective.
- Expected action: decision (approve, investigate, redirect spend).

**Category Manager:**
- Connect to their operational levers (assortment, pricing, promo depth, inventory).
- Translate financial signal to functional language.
- Expected action: something they can do within their domain.

**Cross-functional (Marketing, Supply Chain, Store Ops):**
- Translate metric to their language.
- iROAS → "your paid media generated $8 for every $1 spent, up from $7 last year."
- Inventory signal → "at current sell-through velocity, you have 18 days of coverage."

## Step 2 — Write the opening sentence

The opening sentence is the entire output in one sentence. It states:
1. What happened (the result)
2. Why (the dominant driver or cause)
3. What it means (implication or direction)

**Structure:**
```
[Period] [metric] [beat/missed] [benchmark] by [amount] — [dominant driver/cause], 
[implication or what this means going forward].
```

**Gold standard example (from BF 2025 exec summary):**
```
Black Friday 2025 delivered $3.93M in HG demand, missing forecast by $175K (-4.3%) 
and declining 5.2% vs LY — a $217K shortfall year-over-year driven by conversion 
collapse, not traffic.
```

Note: "driven by conversion collapse, not traffic" — this reframes the whole story.
Traffic was up. The headline miss was about conversion. DK always states the
counterintuitive finding explicitly.

## Step 3 — Structure the body

**Brief format (CFO standup / weekly pulse):**
```
[Opening sentence]

[2-3 supporting findings — most important first. Each = one sentence.]

[Risk or watch item — one sentence.]

→ [One specific recommended action]

[TRIAGE VERDICT]
```

**Memo format (variance deep-dive / post-event):**
```
[Opening paragraph — 2-3 sentences. Demand bridge included here.]

[Section: What drove the result — 3-5 findings in priority order]
Each finding: [Bold label] [Data point with comparison] → [Specific action]

[Section: What held / bright spots — 1-2 findings]

[Section: Watch items / risks — 1-2 items]

[TRIAGE VERDICT with reasoning]
```

**10-takeaway format (WBR / MBR):**
```
1  [Bold label — the finding in 4-8 words]
   [Supporting data — specific, with comparison] → [Action — specific, not vague]

2  [Next finding in priority order]
   [...]
```

## Step 4 — Apply the action format

Every finding must connect to a specific action. Format:
```
→ [Verb] [specific object] [context if needed]
```

**Weak (never use):**
```
→ Further investigate the conversion decline.
→ Review the marketing strategy.
→ Monitor store performance.
```

**Strong (use this):**
```
→ Conduct post-mortem on BF site experience: analyze session-level CVR by device 
  type and marketing channel to identify where shoppers dropped off.
→ Pull iROAS by tactic for Performance Max separately — $8 spend with 80x iROAS 
  suggests significant budget headroom.
→ Dispatch district managers to Texas stores 14, 51, 144: diagnose whether 
  underperformance is staffing, local competition, or promo execution.
```

## Step 5 — Length discipline

| Format | Word count | Sections |
|--------|-----------|----------|
| Brief | 150–200 words | Opening + 3 findings + risk + action + verdict |
| Memo | 350–400 words | Opening para + findings + bright spots + watch items + verdict |
| 10-takeaway | ~30 words per takeaway | Numbered, bold label + data + action |

If the draft exceeds these limits: cut. Do not ask whether to cut. Cut.
Priority order for cuts: (1) repeated information, (2) methodology explanation,
(3) findings below the top 5 in importance.

## Step 6 — Final check before output

Read the draft and verify:
- [ ] First sentence states the finding AND the cause — not just the number
- [ ] No hedging language anywhere in the document
- [ ] Every finding has a → action that is specific
- [ ] The most important finding is first
- [ ] Length is within limits for the format
- [ ] Audience register is calibrated (CFO vs Category Manager vs cross-functional)
- [ ] Triage verdict is present at the end

---

## Reference: BF 2025 10-takeaway format (gold standard)

```
1  BF demand of $3.93M missed forecast by 4.3% (-$175K) and declined 5.2% vs LY — 
   driven by conversion collapse, not traffic. 
   → Conduct post-mortem on site experience, promo mechanics, and checkout funnel 
   to identify conversion blockers.

2  Traffic rose 3.8% YoY to 335,401 sessions, but conversion fell 60 bps — the 
   traffic was there, shoppers didn't buy. 
   → Analyze session-level data: are new visitors converting at lower rates? Did 
   promo visibility or pricing fail to compete?

3  Knives fell 29.9% YoY (-$308K), the steepest % decline of any category. 
   → Review BF assortment and pricing strategy for Knives; assess whether 
   promotional depth was sufficient vs competition.

4  Epicurean Cutting Boards S/3 generated $72K (+$71K YoY), the #1 dollar gainer 
   — a breakout BF performer. 
   → Secure deeper inventory position and feature placement for this SKU in 
   BFCM 2026 planning.

5  Paid iROAS improved from 7.0x to 8.1x (+15%) while spend fell 5.7% — smarter 
   allocation, not just less spending. 
   → Protect the efficiency gains but test incremental spend in top-performing 
   tactics (Perf Max, Paid Search).
```

This is the benchmark. Every output from this skill should be measurably close to this
level of specificity, directness, and action orientation.
