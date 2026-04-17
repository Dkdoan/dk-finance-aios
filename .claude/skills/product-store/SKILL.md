---
name: product-store
description: >
  Analyze product, category, SKU, and physical store or location performance.
  Use when input contains category mix data, brand performance, SKU-level results,
  store or location sales, district rollups, or any product/channel split analysis.
  Identifies share shifts, outliers, geographic patterns, and actionable flags.
---

# Product & Store Performance Skill

You are applying DK's product and store performance framework. The goal is to move
beyond "what sold" to "what changed, why it matters, and what to do about it."

Category and store analysis is where strategic signals live — a share shift today
predicts a top-line problem next quarter. The job is to find those signals early.

---

## Part A — Product & Category Analysis

### Step A1 — Map the category structure

Before analyzing, understand how the business organizes its product hierarchy:
- What are the top-level categories? (e.g., Cookware, Electrics, Apparel, Footwear)
- What is the sub-category or brand layer below?
- What is the SKU layer (individual products)?

Analysis flows top-down: categories → brands/subcategories → SKUs.
Never lead with SKU-level data before establishing the category story.

### Step A2 — Calculate category share shift

For each category:
```
Share TY = Category Revenue TY / Total Revenue TY
Share LY = Category Revenue LY / Total Revenue LY
Share Shift (pp) = Share TY − Share LY
```

**Classify each category:**
- Gaining share + growing revenue = structural winner → investigate what's working
- Losing share + declining revenue = structural problem → investigate root cause
- Gaining share + declining revenue = relative bright spot in a down market
- Losing share + growing revenue = underperforming relative to portfolio

**Lead with the largest absolute $ impact, not the largest % change.**
A category down 5% on $2M revenue (-$100K) matters more than one down 50%
on $50K revenue (-$25K).

### Step A3 — Identify the dominant category story

Apply the same dominant driver logic from demand decomposition:
Which category accounts for >50% of the total revenue variance?
That category leads the narrative. Others are supporting context.

If no single category exceeds 50%: identify the top 2-3 by absolute $ impact
and note that variance is distributed across the portfolio.

### Step A4 — Brand and SKU analysis (when data available)

Within the dominant category, drill to brand level:
- Which brand drove the category result?
- Is this a pricing issue (AUR/ASP change), volume issue, or mix issue?

At SKU level, identify:
- **Top revenue drivers:** highest $ SKUs regardless of YoY change
- **YoY winners:** biggest absolute $ gainers vs. prior period
- **YoY misses:** biggest absolute $ decliners vs. prior period
- **Drop-off alerts:** SKUs with prior year revenue but near-zero current revenue
  (these often signal a stocking or assortment decision that needs review)

### Step A5 — Channel split (eComm vs. physical, when both present)

For businesses with both digital and physical channels:
```
Channel shift = eComm share TY − eComm share LY
```

Flag when a category shows divergent performance by channel:
- eComm declining + stores growing = potential assortment or pricing issue online
- eComm growing + stores declining = possible digital-first shift in customer behavior
- Both declining = category-level problem, not a channel problem

Label these as "channel shift" explicitly — it changes the recommended action.

---

## Part B — Store & Location Performance

### Step B1 — Establish the comp store basis

Before any YoY store comparison, confirm:
- Which stores are "comp" (open >12 months with full comparable prior year)?
- Are there any structural changes that affect comparability?
  (channel exits, fulfillment model changes, OLG-type adjustments for any brand)
- What is excluded from the comp store set and why?

Always report comp store performance separately from total store performance.
Never blend comps with non-comps in a headline number.

### Step B2 — District/region rollup

For multi-location businesses, roll up to the regional or district level first:
- Which region is driving the total result?
- Is underperformance concentrated (1-2 districts) or widespread (all districts)?

**Concentrated underperformance** = likely a local factor (competitive, execution,
staffing) → investigate specific locations

**Widespread underperformance** = likely a macro factor (seasonality, category,
pricing) → investigate at category or brand level first

### Step B3 — Identify outliers

Top 5 and Bottom 5 performers are always named in any store analysis:
- Top performers: what's driving them? Is it replicable?
- Bottom performers: is there geographic concentration? Is there a pattern?

**Geographic concentration flag:**
If 3+ of the bottom 5 performers are in the same region → flag this explicitly.
It signals a regional issue (competitive pressure, demographic mismatch,
operational problem) that requires district-level investigation.

### Step B4 — Rank by the right metric

For store performance ranking, use % change vs. LY (not absolute $).
This normalizes for store size — a small store growing 40% outperforms
a large store growing 4%, and the ranking should reflect that.

For investment decisions (new stores, real estate), use absolute $ volume.

Always state which metric the ranking is based on.

---

## Step C — Produce the product/store output

**What to always include:**
- Dominant category: named, with $ impact and share shift in pp
- 1-2 category bright spots (growing share or reversing trend)
- 1-2 category watch items (losing share or accelerating decline)
- For store analysis: comp store performance (separate from total)
- Geographic concentration flag if present
- Top SKU winner and top SKU miss (named, with $ magnitude)

**What to exclude from standard brief:**
- Full category table (provide on request, not in the brief)
- Individual store rankings beyond Top 5/Bottom 5
- SKU-level detail below the top winner and top miss

**Action format per finding:**
```
[Category/Store] [performed direction] [magnitude] [vs. benchmark].
→ [Specific action: review assortment, dispatch manager, investigate pricing]
```

---

## Step D — Pass findings to synthesis skill

Product/store is one lens. Pass forward:
1. Dominant category finding with $ impact
2. Any channel shift signals (eComm vs. stores divergence)
3. Geographic concentration flag if present
4. Whether product/store picture confirms or contradicts the demand story

---

## Common errors to avoid

- Leading with SKU detail before establishing the category story
- Ranking categories by % change when absolute $ impact is what matters
- Blending comp and non-comp stores in a headline performance number
- Missing geographic concentration in bottom performers
- Treating a channel shift as a performance problem (it's a different issue)
- Reporting top SKU winners without the top SKU misses (both are required)
