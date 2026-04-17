# DK Finance AI — Commercial Performance Agent

An open-source Claude Code agent that encodes senior commercial finance judgment into a reusable analytical system. Drop in your data, get WBR-ready output — variance decomposed, story told, actions assigned.

Built by [Đoàn Duy Khánh](https://www.linkedin.com/in/duykhanhdoan/), VP Finance / Finance AI Transformation.

---

## What it does

- Decomposes any revenue or margin variance into its independent drivers (Volume → Rate → Mix)
- Produces structured WBR/period close narratives in a consistent executive voice
- Scales across business models: e-commerce, clinic networks, subscription, wholesale
- Routes outputs to email automatically via a post-write hook
- Self-escalates on anomalies using a built-in HITL triage system

---

## Architecture

```
DK_Finance_AIOS/
├── CLAUDE.md                  # Master identity + analytical frameworks (always loaded)
├── memory.md                  # Correction log — update when output is wrong
├── eval_log.md                # Evaluation tracking across runs
│
├── .claude/
│   ├── context/               # Brand-specific rules — one file per business
│   │   ├── _template.md       # Copy this to onboard a new brand
│   │   ├── chewy-hc.md        # Example: healthcare e-commerce vertical
│   │   └── cvc.md             # Example: veterinary clinic network
│   ├── agents/
│   │   └── judge.md           # Evaluation agent (scores outputs against rubric)
│   ├── skills/                # Analytical skill modules
│   │   ├── demand-decomposition/
│   │   ├── executive-communication/
│   │   ├── hitl-triage/
│   │   ├── marketing-roi/
│   │   ├── product-store/
│   │   └── synthesis/
│   ├── settings.json          # Hook configuration
│   └── settings.local.json    # Local overrides (gitignored)
│
├── scripts/
│   ├── hook-send-output.js    # Triggered after every Write — converts to .docx and emails
│   ├── convert-to-docx.js     # Markdown → .docx conversion
│   └── send-output.js         # Email delivery via Gmail
│
├── data/{brand}/              # Source data files — gitignored, never published
└── outputs/{brand}/           # Generated outputs — gitignored, never published
```

---

## How it works

### 1. CLAUDE.md — the always-on brain
Every session loads `CLAUDE.md` automatically. It contains:
- Analytical frameworks (decomposition order, metric hierarchy, comparison basis rules)
- Communication standards (voice, variance format, audience calibration)
- HITL escalation rules (when to SEND / FLAG / ESCALATE)
- Mandatory context file loading instruction

### 2. Context files — brand-specific rules
Each business gets a context file in `.claude/context/`. The context file contains:
- Business model and P&L structure
- Output format requirements (which sections, which tables, which drill-downs)
- Structural flags (known data quirks, recurring issues)
- Benchmarks (populated after first session, updated each period)

The agent is **required** to read the context file before any analysis. This is enforced in `CLAUDE.md`.

### 3. Skills — modular analytical modules
Skills are invoked as `/skill-name` in the conversation. Each skill is self-contained:
- `/demand-decomposition` — decomposes revenue variance into Traffic × CVR × ATV
- `/executive-communication` — transforms findings into CFO-ready narrative
- `/hitl-triage` — determines SEND / FLAG / ESCALATE verdict
- `/marketing-roi` — evaluates paid media efficiency and ROAS
- `/product-store` — analyzes category, SKU, and location performance
- `/synthesis` — connects findings from all lenses into one story

### 4. Output hook — automatic delivery
Every time the agent writes an output file, `hook-send-output.js` fires automatically:
1. Converts the `.md` output to `.docx`
2. Emails the `.docx` to a configured address

---

## Setup

### Prerequisites
- [Claude Code](https://claude.ai/code) installed
- Node.js 18+
- A Gmail account with an [App Password](https://myaccount.google.com/apppasswords) enabled

### Installation

```bash
git clone https://github.com/[your-username]/dk-finance-aios
cd dk-finance-aios
npm install
```

### Configure environment

```bash
cp .env.example .env
```

Edit `.env`:
```
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-app-password
GMAIL_TO=output-destination@gmail.com
```

### Configure your identity

Edit `CLAUDE.md` — replace the placeholder in the "Who you are" section with your name, role, and company.

### Onboard your first brand

```bash
cp .claude/context/_template.md .claude/context/your-brand.md
```

Edit `your-brand.md` — fill in your business model, category structure, output requirements, and structural flags. Add the brand to the lookup table in `CLAUDE.md`.

### Run

```bash
claude
```

Drop in a report and start asking questions. The agent will read the context file, decompose the variance, and produce a structured WBR narrative.

---

## Analytical frameworks

### Decomposition order — always this sequence
1. Volume / traffic effect
2. Rate / ASP effect
3. Mix effect
4. Below-the-line (discounts, freight, rebates)

Effects must sum to total variance. If they don't, there is a data error.

### HITL escalation thresholds
| Verdict | When |
|---|---|
| **ESCALATE** | >2σ from baseline, board-facing output, budget reallocation, greenfield P&L |
| **FLAG** | Data incomplete, comparison basis unclear, structural change not isolated, anomaly without driver |
| **SEND** | Routine variance, standard WBR, all integrity checks passing |

### Communication standard
- Insight in sentence one. Always.
- Variance format: (+/- $X, +/- X% vs. [benchmark]) — both absolute and percent, benchmark named
- Driver attribution: "primarily driven by [A], partially offset by [B]" — both directions in one sentence
- Every finding closes on net revenue or gross margin impact

---

## Example output structure (WBR)

```
Section I: Executive Briefing
  - Portfolio scorecard (units, net sales, gross profit, GM%)
  - GM bridge (driver table)
  - 2–3 watch items for next period
  - HITL verdict

Section II: Category Reviews (one per active category)
  - 1-sentence finding
  - Performance table vs. forecast
  - GP bridge
  - Sub-brand / sub-category table
  - → Specific action for that category manager

Section III: Cross-Category Priorities
  - 3–5 actions with owner and deadline
```

---

## Extending the agent

### Add a new brand
1. Copy `_template.md` → new context file
2. Add the brand to the lookup table in `CLAUDE.md`
3. Run a first session, then populate the benchmarks section

### Add a new skill
1. Create `.claude/skills/{skill-name}/SKILL.md`
2. Follow the existing skill file format
3. Register it in Claude Code settings if needed

### Modify escalation rules
Edit the `## HITL escalation rules` section in `CLAUDE.md`. The rules apply globally across all brands.

---

## License

MIT — use freely, attribution appreciated.

---

*Built with [Claude Code](https://claude.ai/code) by Đoàn Duy Khánh.*
