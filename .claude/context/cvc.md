# [Brand] Veterinary Clinic Network — Context File
*Example: Chewy Vet Care (CVC). Rename and adapt for your own clinic network.*
*Load this file at the start of every session for this brand.*

---

## Business type
Brick-and-mortar veterinary clinic network. Services business — not e-commerce.
Revenue = Appointments × Revenue per Appointment.
Use Volume × Rate decomposition framework (not Traffic × CVR × ATV).

---

## Active sites
*List your clinic locations here. Update as new sites open.*

- **[Site A] — [City, State]** — established site; describe role in network (e.g., highest volume)
- **[Site B] — [City, State]** — established site; describe role in network (e.g., highest rev/visit)
- **[Site C] — [City, State]** — new opening [Period]; partial-period comp only; track discount normalization as primary ramp health signal

> **New site ramp pattern to watch:** Discount rate typically spikes in opening week (50–70%+) and should normalize to <5% within 2–3 weeks. Flag if still above 15% after W3; escalate if above 30% after W4.

---

## Revenue model
- **Visit types:** Wellness, Sick/Urgent, Surgery/Other
- **Revenue categories:** Service, Labs, Product (in-clinic + sent home), Membership Purchase
- **Discount types:** Membership discounts (structural, tied to membership program) and Non-membership discounts (promotional/other)
- **Membership program** drives recurring revenue but also generates significant discounts — always decompose discounts into membership vs. non-membership

---

## Forecast model known issues
*Document recurring methodology gaps here as you discover them. Common patterns in clinic networks:*

- **Membership discounts often not modeled** — Forecast may assume $0 membership discounts. If your membership program generates structural discounts, this creates a guaranteed net revenue overstatement every period. Log actual membership discount rate observed and flag until corrected in the model.
- **Discount rate assumption** — Early-stage clinic networks frequently underestimate discount rates. Track forecast vs. actual discount rate each period; if the gap is consistent, the model assumption needs rebuilding.
- **Appointment volume in ramp periods** — New site appointment ramp velocity is hard to forecast. If actuals are consistently beating plan by >30%, the forecast baseline needs to be reset using observed weekly run rates, not the original opening assumptions.
- **Action template**: Rebuild forecast using (a) observed weekly run rate as appointment baseline, (b) actual membership + non-membership discount rates by site, (c) visit type mix from recent actuals. Do not submit updated forecast using unvalidated opening assumptions.

---

## Output requirements
- **Always include site-level drill-down** — Plantation and Highlands Ranch must be covered individually in every WBR or period update. This is a standing requirement per DK.
- **Always include WoW weekly progression** — The P&L model surfaces Week 1–4 data within each period. Report appointments, net revenue, and revenue/visit by week at both consolidated and site level. Call out strongest week, any WoW dips, and the cause. Do not collapse weekly data into period averages only.
- **Standard structure:** Section I: YTD | Section II: Current Period + WoW Progression | Section III: Site-Level Detail (each site with its own WoW)
- **New-site WoW table format differs from established-site tables**: For sites in their opening period (first 4–6 weeks), replace the WoW revenue progression column with a Non-Membership Discount Rate column. Opening-period discount normalization is the primary ramp health signal — not WoW revenue growth, which is structurally inflated by zero-base week. Always include one explanatory line in the output noting this column substitution so readers understand the structural difference between new-site and established-site tables.
- **Opening-period discount normalization benchmark**: Coral Springs normalized from 71.8% (opening week) to ~3% by W2. Any new site above 15% non-membership discount rate after W3 should be flagged; above 30% after W4 should be escalated.
- **YTD context is important** given early ramp stage — site tenure varies from 2+ years (Plantation) to single weeks (9+CO in P05)

---

## Key benchmarks
*Populate this section after your first session. Update each period.*

### [Most recent established period] — [N]-site baseline
- Total appointments: — | Weekly avg: —
- Revenue per appointment: —
- Gross revenue: — | Net revenue: —
- Discount rate: —% of gross (membership —% + non-membership —%)

### By site
| Site | Net Revenue | Rev/Appt | Discount Rate | vs. Forecast |
|---|---|---|---|---|
| [Site A] | — | — | — | — |
| [Site B] | — | — | — | — |

### Open investigation items
*Log live issues here. Clear when resolved.*

*(None — populate after first analysis session)*
