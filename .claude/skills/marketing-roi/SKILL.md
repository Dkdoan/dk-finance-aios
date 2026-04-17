---
name: marketing-roi
description: >
  Evaluate paid media performance and marketing efficiency. Use when input contains
  spend data, revenue attribution, ROAS figures, channel performance, media mix,
  or any marketing investment vs. return analysis. Apply incrementality discipline
  always — platform-reported attribution is never the primary ROI conclusion.
---

# Marketing ROI Skill

You are applying DK's marketing ROI framework. The goal is not to report what was
spent and what was returned — it is to determine whether the spending decisions were
right, which channels earned more investment, and what actions follow.

Marketing analysis without incrementality discipline is attribution flattery.
Every ROI conclusion must be grounded in what the spend actually caused.

---

## Step 0 — Map what measurement data is available

Before any analysis, identify which tier of data you have:

**Tier 1 — Incrementality (use for all ROI conclusions):**
Any holdout test, media mix model (MMM), or third-party incrementality tool.
Measures causal lift — what the spend actually drove, net of organic demand.

**Tier 2 — Platform attribution (use for trending and mix only):**
Google Ads ROAS, Meta ROAS, any platform-reported return. Uses last-click or
view-through attribution — systematically overclaims credit, especially for
brand search and retargeting. Never use as primary ROI conclusion.

**Tier 3 — Last-click web analytics (use for channel mix only):**
Any UTM-based attribution tool. Shows traffic source. Cannot measure
incrementality. Use for "where did sessions come from," not "what did spend cause."

**If only Tier 2 or Tier 3 available:**
Label every figure explicitly as "platform-reported (attribution basis)."
FLAG that incrementality data is unavailable.
Draw directional conclusions only — never recommend budget reallocation
based on attribution data alone.

---

## Step 1 — Calculate core efficiency metrics

```
iROAS = Incremental Revenue / Total Paid Spend      [use Tier 1 data]
iCPO  = Total Paid Spend / Incremental Orders       [use Tier 1 data]
pROAS = Platform-Attributed Revenue / Total Spend   [label separately, Tier 2]
```

**CRITICAL: iROAS and pROAS are never reported in the same sentence.**
They measure different things. Mixing them misleads the reader about
true marketing performance. Report in separate sections with clear labels.

**Efficiency + spend always reported together:**
```
Efficiency up + spend flat/down   → genuinely better allocation
Efficiency up + spend down 80%+   → possible small-base distortion — investigate
Efficiency down + spend up        → overspending into diminishing returns — flag
Efficiency up + spend up          → scaling productively — validate headroom
```

---

## Step 2 — Apply the four-signal framework per channel

For each paid channel or major tactic:

**Signal 1 — Efficiency direction:** iROAS vs. prior period or benchmark.

**Signal 2 — Spend direction:** Higher, lower, or flat vs. prior period.

**Signal 3 — Overclaim check (when both Tier 1 and Tier 2 available):**
```
Overclaim gap = pROAS − iROAS
```
Gap > 2x iROAS = platform claiming credit it did not earn.
Flag as "attribution inflation." These tactics are most at risk of
being over-invested based on false performance signals.

**Signal 4 — Scale verdict:**

| Verdict | Condition |
|---------|-----------|
| Scale ↑ | iROAS strong and improving, headroom exists |
| Hold → | iROAS stable, spend efficient, no clear upside |
| Investigate ↓ | iROAS declining, overclaim detected, or mixed signals |
| Exited ↓ | Channel discontinued or structurally changed |

---

## Step 3 — Check comparability before any YoY marketing comparison

- Did any channel launch or exit between periods?
- Did attribution methodology change?
- Did spend mix shift dramatically? (Large mix shift changes blended iROAS
  even if per-tactic efficiency was unchanged)
- Were there external factors (competitor entry, platform algorithm change)?

If structural change affected comparability: state it before the variance.
Never let a methodology change look like a performance change.

---

## Step 4 — Construct the marketing efficiency narrative

**Three-part structure:**
1. Overall blended efficiency vs. prior period (1 sentence, spend in context)
2. Channel driving the improvement or decline (named, $ magnitude)
3. Implication for next planning cycle (specific action)

**Template:**
```
[Brand] paid media [improved/declined] in [period] — iROAS [TY] vs. [LY]
([+/- Δ]) on [+/- X%] spend, generating [+/- $X] more incremental revenue.
[Channel] drove the [gain/loss][, while [channel] [offset/compounded] it].
→ [Specific: scale X budget, investigate Y, pause Z pending incrementality test]
```

---

## Step 5 — What to include vs. exclude

**Include:**
- Blended iROAS: TY vs. LY (or forecast), with spend context
- Top 2-3 channels by absolute $ impact (positive and negative)
- Overclaim flags where attribution overstates incrementality
- Scale/Hold/Investigate/Exited verdict per major tactic
- One specific action per key finding

**Exclude:**
- pROAS presented as equivalent to iROAS
- Channel rankings based on attribution presented as efficiency rankings
- Budget recommendations based solely on platform-reported figures
- More than 3-4 channel callouts in a standard brief

---

## Step 6 — Pass findings to synthesis skill

Marketing ROI is one lens. Pass forward:
1. Blended efficiency verdict (improved/declined/flat) with magnitude
2. Named channel signals with Scale/Investigate verdict
3. Any overclaim flags affecting data reliability
4. Whether marketing picture aligns or conflicts with the demand story

---

## Common errors to avoid

- iROAS and pROAS in the same sentence as if comparable
- "Efficient" label based on platform attribution without incrementality
- Sharp spend cut making iROAS look better — this is base effect, not efficiency
- First-period iROAS for a new channel treated as a reliable signal
- Budget reallocation recommendations from last-click data alone
- Ignoring the overclaim gap — it identifies where money is being wasted
