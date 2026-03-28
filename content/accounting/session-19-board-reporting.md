---
track: accounting
session: 19
title: "Board-Level Financial Reporting"
date: 2026-03-28
tags: [board-reporting, board-pack, kpis, variance-analysis, cfo, memrise]
visual: true
image_prompt: "Board pack page layout diagram. Shows a structured financial reporting template with sections: 'Summary (traffic light dashboard)', 'P&L: Actuals vs Budget', 'Cash & Runway', 'KPIs', 'Key Risks'. Each section shown as a labelled box in a presentation slide grid. Flat design, corporate board deck aesthetic, dark navy and white."
reuse: restricted
open_question_answered: false
---

# Accounting — Session 19: Board-Level Financial Reporting

> *The board pack is not a data dump — it is an argument, supported by evidence, about whether the plan is working.*

---

## What You Already Know

In Session 18 you worked through transfer pricing — the rules governing how Memrise's legal entities transact with each other, and why both HMRC and the IRS take a close interest in those arrangements. All of that — the P&L mechanics, cash flows, unit economics, SaaS metrics, tax, and corporate structure — is the raw material that your CFO synthesises into something the board can act on. This session is about that synthesis: what a board financial report should contain, why, and how to read it as both author and recipient.

## The simplest true statement

**A board financial report has one job: tell the board whether the company is on plan, how long it has to correct course if not, and what the key risks are to the answer changing.**

---

## What the Board Actually Wants to Know

Before designing the format, understand the questions. A Memrise board member sitting down with the financial pack is asking:

1. **Are we on plan?** Revenue, costs, and EBITDA versus budget — and if not, why not?
2. **How long is the runway?** Cash position and the number of months before a funding decision is required.
3. **What are the surprises?** Things that have changed since the last board meeting that require a decision or updated view.
4. **Is the business getting healthier or weaker?** KPIs trending in the right or wrong direction.
5. **What are the risks?** What could cause the plan to fail, and is it being managed?

Every section of the board pack should map to one of these questions. Sections that don't map to any of them are noise.

---

## Structure of a Memrise Board Financial Pack

**Section 1: Executive Summary (traffic light dashboard)**

One page. RAG status (Red/Amber/Green) on three to five key metrics. Gives board members who have not read the detail a 60-second picture before the meeting.

| Metric | This month | vs Budget | Status |
|---|---|---|---|
| Revenue (MRR) | £443k | −3% | Amber |
| Cash position | ~£5.5M | +£200k | Green |
| Runway | 14 months | − | Amber |
| New subscribers | ~14,000 | −8% | Amber |
| Churn rate | 2.8% | +0.3pp | Red |

The traffic light is opinionated. Green does not mean "fine" — it means "on plan." Red does not mean catastrophe — it means "requires board attention." The CEO and CFO must agree the RAG definitions in advance so the board can trust them.

**Section 2: P&L — Actuals vs Budget**

A full P&L comparing the current month to budget, year-to-date to budget, and (optionally) prior year.

```
                    This month    Budget    Variance    YTD     YTD Budget
Revenue               £443k       £458k     −£15k      £1.3M    £1.37M
COGS                  −£89k       −£92k     +£3k       −£265k   −£274k
Gross Profit          £354k       £366k     −£12k      £1.0M    £1.1M
  Gross margin %       80%         80%       flat       80%      80%

Operating costs
  Engineering         −£280k      −£275k    −£5k       −£835k   −£825k
  Sales & Marketing   −£120k      −£130k    +£10k      −£360k   −£390k
  G&A                 −£80k       −£78k     −£2k       −£240k   −£234k

EBITDA                −£126k      −£117k    −£9k       −£435k   −£349k
```

The narrative explains variances. "Revenue £15k below budget due to lower-than-expected annual plan renewals in the schools segment. Marketing underspend of £10k reflects delayed campaign launch, not structural saving." Without the narrative, the numbers are decoration.

**Section 3: Cash Position and Runway**

Cash is existential. This section never gets cut.

- Opening cash, inflows, outflows, closing cash
- Burn rate (average monthly net cash outflow)
- Runway in months at current burn
- Key assumptions (no new funding, no R&D credit receipt, no major contract wins)
- Trigger points: at what cash level does the board need to make a funding decision?

For Memrise with ~£5–7M cash and a monthly burn of ~£300–500k (illustrative), runway is approximately 10–18 months. The board needs to know this at every meeting, not just when it becomes urgent.

**Section 4: KPIs**

The operational metrics that lead the financial metrics. A trend chart, not just a point-in-time number.

| KPI | Trailing 3 months | Direction |
|---|---|---|
| MRR | £458k → £450k → £443k | Declining |
| Monthly new paid subscribers | 16k → 15k → 14k | Declining |
| Monthly churn rate | 2.5% → 2.6% → 2.8% | Worsening |
| B2B ARR | £420k → £435k → £448k | Growing |
| NPS (app) | 42 → 44 → 41 | Flat |

The KPI section surfaces trends before they hit the P&L. Churn worsening three months in a row is a signal that will become a revenue problem in month four or five. The board seeing this trend in the KPI section can ask questions while there's still time to act.

**Section 5: Key Risks**

A concise list of the three to five risks most likely to cause the plan to fail. For Memrise:

1. Subscriber churn accelerating beyond model assumptions (probability: medium, impact: high)
2. R&D tax credit timing — HMRC processing delays can shift a material cash inflow by a quarter
3. App Store policy changes affecting pricing or payment mechanics
4. Key engineering attrition in the AI team
5. FX exposure on US revenue against UK cost base

Each risk should have an owner, a mitigation, and a trigger for escalation.

---

## The CEO's Role in the Board Pack

The board pack is formally the CFO's document, but the narrative is jointly owned. As CEO, you should:

- Review the executive summary before it goes out — you own the RAG ratings
- Challenge any variance explanation that feels incomplete
- Ensure the risk section reflects your actual operational concerns, not just the CFO's list
- Use the board pack as a forcing function to align your own thinking about the business before the meeting

The worst board packs are assemblies of facts. The best board packs are arguments. They tell a story: "Here is where we said we'd be. Here is where we are. Here is why the gap exists. Here is what we're doing about it."

---

## Three Concepts to Remember

1. **The board pack answers five questions** — on plan? runway? surprises? trend direction? key risks? — every section maps to one of these.
2. **Variance analysis is narrative, not arithmetic** — the numbers show a gap; the narrative explains what caused it and whether it's structural or temporary.
3. **KPIs lead financials by 60–90 days** — churn worsening in October shows up in revenue in December; boards that only watch financials are always looking backward.

---

## Visual Aid

![[../assets/2026-03-28-accounting-session-19.png]]

---

## Open Question

> In your last board meeting, which section of the financial report generated the most discussion — and was that the section that deserved the most attention, or had the format inadvertently focused the board on the wrong thing?

**Kevin's answer:** _(not yet provided)_

---

## ⚠️ Reuse note

This session uses illustrative Memrise financial figures in the P&L and KPI tables. These are teaching constructs, not actual reported figures. Before sharing outside Memrise, replace all figures with clearly hypothetical placeholders and remove references to specific metrics, burn rates, and runway figures.

---

## Next session builds on

- **Reading an investor pack** — investors receive similar information to the board but read it through a completely different lens, focused on return on investment and exit trajectory
- **How PE investors think differently from VCs** — and how that changes what they prioritise in the financial narrative
- **Revenue quality and EBITDA trajectory** — the two metrics that most determine valuation in a PE context
