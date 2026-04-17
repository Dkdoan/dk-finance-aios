# [Brand] Healthcare E-Commerce — Context File
*Example: Chewy Healthcare (HC). Rename and adapt for your own business.*
*Load this file at the start of every session for this brand.*

---

## Business type
Pure e-commerce — Chewy.com Healthcare vertical. Transaction-based model.
Revenue = Orders × Average Order Value (or Units × ASP at the category level).
Use Traffic × Conversion × ATV framework for order-level analysis.
Use Volume × Rate × Mix decomposition at the category and brand level.

This is NOT the same as CVC (brick-and-mortar clinics) or CWAV (telehealth).
This is the Chewy.com online product sales business across all healthcare categories.

---

## Category structure (5 categories, all roll up to Total HC)

| Category | Revenue mix | Unit mix | ASP range | Key brands |
|---|---|---|---|---|
| Prescription Food & Treats | ~44% | ~8% | $50–70 | Hill's, Royal Canin, Purina Pro Plan Vet, Blue Buffalo |
| Pharmacy | ~29% | ~82% | $3–4 | High-volume, low-ASP medications and treatments |
| Health & Wellness | ~17% | ~7% | $20–30 | Nutramax, Zesty Paws, Virbac, NaturVet, Feliway, PetHonesty |
| Flea & Tick | ~7% | ~2% | $35–65 | Bayer Seresto, Bayer Advantage II, Bayer K9, Merial Frontline/Gold |
| Over the Counter | ~2% | ~1% | $20–25 | Test Kits, Skin & Coat, Recovery Cones, Eye & Ear Care |

Pharmacy dominates unit volume (82% of total HC units) at very low ASP ($3–4/unit). This creates a mix structure where Pharmacy unit movements dominate unit-level metrics but Prescription F&T and Pharmacy jointly dominate revenue.

---

## Revenue model and P&L waterfall

**Revenue flow:**
Merch Sales → (Discounts, Refunds) → Net Sales → (Raw Product Cost, Vendor Rebates, Inventory Adjustments, Freight, Shipping Supplies) → Gross Margin

**Key margin concepts:**
- **Raw Merch Margin % (RM%)** = (Merch Sales − Raw Product Cost) / Merch Sales — pre-rebate, pre-freight metric. Used for brand-level mix analysis.
- **Gross Margin %** = Gross Margin / Net Sales — fully loaded after rebates and freight. This is the primary performance metric for executive reporting.
- **Vendor Rebates** are a significant component of gross margin, especially in Flea & Tick (24.6% of NS) and Health & Wellness (16.7% of NS). Always decompose rebates into Autoship Rebates and Vendor Rebates when reporting category performance.

**Discount categories:**
- New customer discounts
- Autoship discounts (structural — tied to subscription mechanic)
- Other discounts (promotional — most variable, highest variance vs. forecast)

---

## Decomposition framework

**Category-level variance (primary):**
Volume Effect → Rate Effect (ASP separately from CPU) → Mix Effect
Always apply in this order. ASP Rate and CPU Rate move independently.
CPU Rate can offset ASP Rate — do not net them before reporting.

**Order-level analysis (Pharmacy, available in customer behavior tab):**
Segment by: New Autoship / New Non-Autoship / Existing Autoship / Existing Non-Autoship
Existing Autoship is the highest-LTV segment — any frequency decline there is a leading indicator of LTV risk, not just a P10 revenue miss.

**Watch pattern — ASP and CPU moving together:**
If ASP and CPU move in the same direction by similar magnitudes, the driver is almost certainly SKU size mix shift (smaller packs = lower ASP and lower COGS proportionally), not a price change. A price promotion would lower ASP without lowering COGS proportionally.

---

## Report structure and format

**Standard report: Consolidated Mix Rate Report**
- Page 1: Total HC consolidated summary (5 categories × actuals vs. 9+3 Forecast)
- Pages 2–3: Prescription F&T brand-level detail (Hill's, Royal Canin, Purina, Blue Buffalo)
- Pages 4–5: Health & Wellness brand-level detail (Nutramax, Purina PP, Zesty Paws, Virbac, NaturVet, Feliway, PetHonesty, Private Label, All Other)
- Pages 6–7: Flea & Tick brand-level detail (Bayer K9, Advantage II, Seresto, Frontline, Onguard, Capstar, All Other)
- Pages 8–9: OTC sub-category detail (Skin & Coat, Medicated Shampoos, Recovery Cones, Test Kits, Eye & Ear Care, All Other)
- Pages 10–11: Pharmacy customer behavior and gross margin (with WoW data)

**Intraperiod run-rate note:** When data is labeled "intraperiod run-rate," figures are PTD actuals × (total period weeks / weeks completed). State this caveat at the top of every output. One incomplete week means the run-rate can shift materially if W4 has an unusual event.

---

## Output requirements for this business

**Always use these two comparison bases:**
1. vs. 9+3 Forecast (the primary comparison — this is what the team is managed against)
2. vs. Prior period (for sequential context — e.g., P9 vs. P10)
Do not default to YoY unless explicitly asked; the report uses 2019 as a long-run baseline, not 2020 (COVID year was excluded from plans).

**Meeting format (standard use case):**
This report is used in meetings between VP Finance / CFO (HC vertical) and all category managers. The output structure must always include:
1. **Executive Brief** — portfolio-level story for CFO/VP Finance to open the meeting (~200 words + scorecard table)
2. **Category Deep Dives** — one section per category, written for that category manager's operational context (~300–400 words per category with sub-brand table and actions)
3. **Cross-Category Priorities** — 3–5 portfolio-level actions for the group to take away

**Do not collapse category drill-downs into a summary paragraph.** Each category manager needs specific sub-brand call-outs, specific numbers, and specific actions. The CFO uses the executive brief; the category managers use their individual sections.

**Always include per-category:**
- Performance table: Units, Net Sales, Gross Margin, GM%, Net ASP vs. forecast
- Dominant driver identification (Volume, ASP Rate, Mix, Freight, or Discounts)
- Sub-brand/sub-category table with individual variances
- At least 1 specific → Action for the category manager

---

## Structural flags to always check

**Test Kits (OTC sub-category):**
CPU exceeds ASP — negative raw product margin. Category is profitable ONLY via vendor rebates. Any rebate renegotiation or contractual change immediately flips category margin negative. Always flag rebate dependency when reporting OTC.

**Pharmacy existing customer order frequency:**
The most important LTV signal in this report. Existing autoship customer count and existing autoship order rate must be separated. A customer count decline = attrition (serious). An order rate decline with stable customer count = frequency (watch item). These require different responses.

**Freight per order WoW in Pharmacy:**
Pharmacy freight per order is the swing factor for GM% delivery. The W1-W2-W3-W4 trend matters as much as the total. A single-week spike may be noise; two consecutive weeks of elevated freight requires operational investigation.

**Seresto ASP and CPU moving together:**
Parallel moves in ASP and CPU on Seresto signal SKU size mix shift, not pricing. If Seresto ASP is significantly below forecast, always check whether CPU moved in the same direction and magnitude before concluding it is a price issue.

---

## Key benchmarks
*Populate this section after your first session. Update each period.*

| Metric | Actuals | Forecast | Var |
|---|---|---|---|
| Net Sales | — | — | — |
| Gross Margin | — | — | — |
| GM% | — | — | — |
| Units | — | — | — |

**By category:**
| Category | Net Sales | GM% | Var vs. Fcst |
|---|---|---|---|
| [Category 1] | — | — | — |
| [Category 2] | — | — | — |

---

## Open investigation items
*Log live issues here. Clear when resolved.*

*(None — populate after first analysis session)*
