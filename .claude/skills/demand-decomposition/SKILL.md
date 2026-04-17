---
name: demand-decomposition
description: >
  Decompose any commercial demand or revenue variance into its three drivers: traffic,
  conversion, and ATV. Use when input contains demand data, revenue actuals, traffic
  figures, CVR, ATV, orders, or any top-line performance versus plan or prior year.
  Apply this skill before any narrative is written. Diagnosis before communication.
---

# Demand Decomposition Skill

You are applying DK's demand decomposition framework. This is a DuPont-style waterfall
that isolates the three independent drivers of any demand variance. The goal is to
identify the dominant driver and lead every subsequent narrative with it.

## Step 1 — Confirm you have the required inputs

Before decomposing, verify you have:
- [ ] TY demand (or orders × ATV) and LY demand
- [ ] TY traffic and LY traffic (sessions, visits, or UVs — consistent basis)
- [ ] TY conversion rate and LY conversion rate
- [ ] TY ATV and LY ATV

If any input is missing: FLAG the gap before proceeding. Do not estimate or interpolate.

## Step 2 — Calculate the three effects

Apply in this exact sequence. Never reorder.

```
Traffic Effect = (TY Traffic − LY Traffic) × LY CVR × LY ATV
Conversion Effect = TY Traffic × (TY CVR − LY CVR) × LY ATV
ATV Effect = Total YoY Variance − Traffic Effect − Conversion Effect
```

Note: ATV Effect is always the residual — calculated last to ensure reconciliation.

## Step 3 — Reconciliation check (mandatory)

```
Sum = Traffic Effect + Conversion Effect + ATV Effect
Check: Sum must equal (TY Demand − LY Demand)
Tolerance: $0 (exact reconciliation required)
```

If the reconciliation check fails:
- Do NOT proceed to narrative
- FLAG: "Reconciliation failed — [Sum] vs [Actual Variance]. Data integrity issue."
- Identify which input figure is likely incorrect (rounding, source mismatch, OLG inclusion)

## Step 4 — Identify the dominant driver

```
Dominant driver = driver whose |$ Impact| / |Total Variance| > 50%
```

Mark the dominant driver explicitly. Use a clear signal: ⭐ DOMINANT or [DOMINANT].

If no single driver exceeds 50%: note that variance is distributed. Rank by absolute $ impact
and lead narrative with the largest, but do not use the DOMINANT label.

## Step 5 — Produce the demand bridge (single line format)

Format exactly as:
```
[LY Period]: $[X.XXM] → Traffic: [+/-$XXXK] → Conversion: [+/-$XXXK] → ATV: [+/-$XXXK] → [TY Period]: $[X.XXM]
```

Example from BF 2025:
```
BF 2024: $4.15M → Traffic: +$158K → Conversion: -$334K → ATV: -$41K → BF 2025: $3.93M
```

## Step 6 — Write the diagnostic sentence (feeds into narrative)

One sentence. Lead with the dominant driver. State direction and magnitude. State the
counterintuitive relationship if one exists (e.g., traffic up but demand down).

Format:
```
[Metric context] [TY period] [missed/beat] [benchmark] by [amount], driven by [dominant driver] 
([direction] [magnitude]), [offsetting/compounded by] [secondary driver].
```

Example from BF 2025:
```
BF 2025 HG demand missed forecast by 4.3% (-$175K) and declined 5.2% vs LY, driven by 
conversion collapse (-60 bps, -$334K impact) — the dominant driver — which overwhelmed 
a favorable traffic gain (+3.8%, +$158K).
```

## Step 7 — Flag for context (check all that apply)

- [ ] **Promo baseline distortion?** If a major event (BF, CM, Blue Box) is in scope, note
  that YoY comparisons may be distorted by promo depth or timing differences. Call this
  out before the finding, not after.
- [ ] **OLG adjustment required?** If store data is included and Amazon Today existed in
  the prior year period, confirm w/o OLG basis is being used. If unclear, FLAG.
- [ ] **Channel mix shift?** If one fulfillment channel dramatically changed (e.g., SDD
  structural decline), note that headline CVR may be distorted by the mix change.

## Step 8 — Pass output to synthesis skill

The demand decomposition output is one lens. Do not write the final brief yet.
Output from this skill feeds into the synthesis skill, which connects all lenses.

Pass forward:
1. The demand bridge (single line)
2. The dominant driver identification with $ magnitude
3. Any flags raised in Step 7
4. The diagnostic sentence

---

## Reference: BF 2025 worked example (ground truth)

| Driver | $ Impact | % of Variance | Direction |
|--------|----------|---------------|-----------|
| Traffic Effect | +$158,208 | -72.9% | ▲ Favorable |
| Conversion Effect | **-$334,351** | **154.0%** | ▼ **DOMINANT** |
| ATV Effect | -$40,921 | 18.9% | ▼ Unfavorable |
| **Total** | **-$217,064** | **100%** | |

Reconciliation: ✓ $0.00 vs DDR_HG

Key insight from this example: Traffic was UP. Demand was DOWN. Without decomposition,
the only visible signal is the -5.2% demand decline. The decomposition shows the real story:
conversion was the culprit, overwhelming a genuine traffic win. This changes the diagnostic
and the action entirely.

---

## Common errors to avoid

- **Never** skip the reconciliation check and proceed to narrative
- **Never** report Traffic Effect, Conversion Effect, and ATV Effect as equally weighted
- **Never** use estimated or interpolated inputs without flagging
- **Never** write narrative before identifying the dominant driver
- **Never** omit the demand bridge — it is always included in any output using this skill
