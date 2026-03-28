---
track: accounting
session: 16
title: "Unit Economics"
date: 2026-03-28
tags: [unit-economics, cac, ltv, contribution-margin, arpu, memrise]
visual: true
image_prompt: "Unit economics diagram showing a single customer 'unit'. Revenue from customer: ARPU (£X). Minus: COGS (App Store %). Minus: CAC/payback. Equals: Contribution margin. Timeline showing months to payback, then contribution margin flowing thereafter. Two side-by-side: B2C unit vs B2B unit comparison. Flat design, clean financial education."
reuse: restricted
open_question_answered: false
---

# Accounting — Session 16: Unit Economics

> *Strip away the aggregate numbers and ask the only question that matters: is a single customer worth having?*

---

## What You Already Know

In Session 15 you built a subscription revenue forecast — a model that sums cohorts of subscribers decaying through churn and arriving through acquisition. That model tells you what total MRR looks like over time. But it says nothing about whether it's worth building. Unit economics answers the foundational question: for every pound spent acquiring a customer, how many pounds come back — and when?

## The simplest true statement

**If your Customer Acquisition Cost exceeds the contribution margin you'll ever earn from a customer, you are not running a business — you are running an expensive loyalty programme.**

---

## ARPU: What a Single Subscriber Actually Pays

Memrise has approximately **500,000 paying subscribers** (a rough estimate). Blended against annual subscription revenue of ~£5.3M:

```
ARPU (annual) = £5.3M ÷ 500,000 ≈ £10.60/year
```

This is a blended figure across monthly and annual plan subscribers. Monthly subscribers pay more per month but churn faster; annual subscribers pay less per month but stay longer. The mix matters significantly for unit economics.

A rough breakdown by segment:

| Segment | ARPU (annual, approx.) | Typical churn |
|---|---|---|
| B2C monthly plan | ~£35–40/year | High (4–6%/month) |
| B2C annual plan | ~£50–60/year | Lower (1–2%/month) |
| B2B team plans | ~£80–150/user/year | Much lower |

B2B customers pay materially more per user and churn less. This is why the B2B segment punches above its weight in unit economics even if it's a smaller share of subscribers.

---

## Gross Margin: What You Keep Per Subscriber

Not all of ARPU flows to the business. The main deduction is cost of goods sold (COGS) — primarily app store fees and infrastructure costs.

**App store tax:** Apple App Store and Google Play charge 15–30% on in-app purchases. For a company with ~£5M revenue, a significant portion of which flows through app stores, this is a material deduction. Assume blended app store cost of ~15–20% of B2C revenue.

**Infrastructure (hosting, CDN, audio/video delivery):** Relatively low for a language app — perhaps 2–5% of revenue.

**Blended gross margin:** approximately **73–85%**, depending on the revenue mix and negotiated app store rates.

```
Gross profit per subscriber (annual plan, ~£55 ARPU) ≈ £55 × 80% ≈ £44
```

That £44 is the contribution to cover sales and marketing, engineering, G&A, and eventually profit. Whether that's enough depends entirely on what it cost to acquire that subscriber.

---

## CAC and Payback: The Critical Ratio

**Customer Acquisition Cost (CAC)** is the total sales and marketing spend divided by the number of new customers acquired in the same period.

Memrise's marketing spend is not public, but for illustrative purposes: if Memrise spends ~£150–200k/month on paid acquisition and acquires ~15,000–20,000 new paid subscribers per month, blended CAC might be in the range of:

```
CAC ≈ £175k ÷ 17,500 new subscribers ≈ £10 per subscriber
```

At £10 CAC and £44 annual gross profit, the payback is roughly:

```
Payback period = £10 ÷ (£44 ÷ 12) ≈ 2.7 months
```

That's an excellent payback period — if the figures are right. The question is whether the subscriber stays long enough to deliver the lifetime value.

**Lifetime Value (LTV):**

```
LTV = (ARPU × Gross Margin %) ÷ Monthly Churn Rate
    = (£55 × 80%) ÷ 2.5%
    = £44 ÷ 2.5%
    = £1,760
```

Wait — that's £1,760 LTV on a £10 CAC? The LTV:CAC ratio would be 176:1. Something is off. In reality, most subscribers acquired through paid channels churn much faster than the blended rate, and CAC estimates often undercount brand and organic costs. The model is a direction of travel, not a precise answer.

---

## B2B vs B2C: A Tale of Two Units

| Metric | B2C (annual plan) | B2B (team plan, per user) |
|---|---|---|
| ARPU (annual) | ~£55 | ~£100–150 |
| Gross margin | ~80% | ~85% |
| Monthly churn | ~1.5–2% | ~0.5–1% |
| CAC | ~£10–15 | ~£50–150 (sales cost) |
| LTV (estimated) | ~£1,500–2,500 | ~£8,000–25,000 |
| Payback period | 2–4 months | 6–18 months |

B2C wins on payback speed. B2B wins on lifetime value. A portfolio of both is more valuable than either alone — B2C provides cash flow efficiency, B2B provides durable high-value relationships.

---

## Three Concepts to Remember

1. **ARPU × Gross Margin is your contribution ceiling** — everything above that line (sales, marketing, G&A, R&D) must fit within it for the business to eventually be profitable.
2. **LTV:CAC should be at least 3:1 for a sustainable SaaS business** — below that, you're acquiring customers at a loss on a lifetime basis; above 5:1, you may be underinvesting in growth.
3. **B2B unit economics are structurally superior at scale** — lower churn, higher ARPU, and greater expansion potential make each B2B customer worth a multiple of a B2C customer despite the higher acquisition cost.

---

## Visual Aid

![[../assets/2026-03-28-accounting-session-16.png]]

---

## Open Question

> Memrise's B2C subscribers likely have a payback period of under 6 months but a relatively high churn rate. If you could only invest in one thing — reducing B2C churn by 20% or doubling B2B subscriber count — which has the larger impact on 3-year cumulative contribution margin, and how would you build the case for the board?

**Kevin's answer:** _(not yet provided)_

---

## ⚠️ Reuse note

All ARPU, CAC, LTV, and churn figures in this session are approximate estimates for teaching purposes. Actual Memrise figures are commercially sensitive. Before sharing outside Memrise, replace all numbers with clearly illustrative placeholders and note they are hypothetical.

---

## Next session builds on

- **Tax fundamentals** — once you know the unit economics and the aggregate profit picture, tax is the next layer that affects real cash
- **R&D tax credits** — a material cash inflow for a company like Memrise investing heavily in product development
- **How losses carry forward** — why being loss-making today affects tax when you eventually reach profitability
