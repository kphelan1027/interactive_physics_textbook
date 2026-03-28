---
track: accounting
session: 14
title: "SaaS Metrics"
date: 2026-03-28
tags: [saas-metrics, arr, mrr, churn, nrr, memrise]
visual: true
image_prompt: "SaaS metrics dashboard infographic. Boxes showing: MRR (£443k), ARR (£5.3M), Monthly Churn Rate (%), NRR (%). Below: a cohort waterfall chart showing a starting cohort of subscribers declining over 12 months. Formula for NRR shown: (Starting MRR + Expansion - Contraction - Churn) / Starting MRR. Flat design, dashboard style, teal and white."
reuse: restricted
open_question_answered: false
---

# Accounting — Session 14: SaaS Metrics

> *The language investors, boards, and operators use to read a subscription business — and what Memrise's numbers actually say.*

---

## What You Already Know

In Session 13 you mapped the working capital cycle — how cash flows in from subscribers (often before service is delivered) and out to suppliers. The B2C model sends cash upfront; the B2B model creates a receivables lag. Now we move up one layer: from accounting mechanics to the business metrics that subscription companies use to measure health. These sit above the P&L but drive everything below it.

## The simplest true statement

**Churn is the gravity that pulls every subscription business downward — the only way to grow is to overcome it consistently, every single month.**

---

## MRR and ARR: The Foundation

**Monthly Recurring Revenue (MRR)** is the normalised monthly revenue from all active subscriptions. It excludes one-off payments and smooths annual plans into monthly equivalents.

For Memrise, MRR is approximately **£443k**. This figure comes from dividing annual subscription revenue by 12 — a useful cross-check against the January P&L. It is not the same as cash received in a month (because of annual upfront billing), but it is the best representation of the business's monthly run rate.

**Annual Recurring Revenue (ARR)** is simply MRR × 12:

```
ARR = £443k × 12 ≈ £5.3M
```

ARR is the number most investors and boards use to size a SaaS business. It answers: "If nothing changes — no new customers, no churned customers — how much revenue would this company generate in a year?" It is a snapshot, not a forecast.

---

## Churn: The Metric That Determines Everything

Churn is the percentage of revenue (or subscribers) lost in a given period. There are two flavours:

**Logo churn** — the percentage of customers who cancel. If Memrise has 500,000 paying subscribers and 12,500 cancel in a month, logo churn is 2.5%.

**Revenue churn** — the percentage of MRR lost to cancellations and downgrades. This is more important, because not all customers are worth the same.

At an annual churn rate of 30%, the maths is sobering:

```
£5.3M ARR × 30% = £1.59M of ARR lost per year
```

That means Memrise must add ~£1.59M of new ARR every year just to stay flat. Growing by 20% means adding £1.59M + £1.06M = £2.65M in new ARR. The treadmill speeds up with every percentage point of churn.

Memrise's revenue has been declining at approximately **24% year-on-year**, which suggests either:
- Churn is outpacing new subscriber acquisition, or
- New subscriber cohorts are smaller than previous years (fewer people entering the funnel), or
- Both.

Understanding which driver dominates matters enormously — the fix for each is different.

---

## Net Revenue Retention: The Single Best Health Metric

**Net Revenue Retention (NRR)** measures what happens to revenue from an existing cohort of customers over time, including upgrades, downgrades, and cancellations — but excluding new customers entirely.

```
NRR = (Starting MRR + Expansion MRR − Contraction MRR − Churned MRR) ÷ Starting MRR
```

| NRR | Interpretation |
|---|---|
| >120% | Exceptional — existing customers alone drive growth |
| 100–120% | Strong — expansion offsets churn |
| 90–100% | Acceptable — some churn, little expansion |
| <90% | Concerning — customer base is shrinking in revenue terms |

For Memrise's B2C business, NRR is almost certainly below 100%. There is limited expansion revenue — consumers rarely upgrade mid-subscription — so NRR is driven almost entirely by cancellations. A B2C SaaS with 80–90% NRR is not unusual; it just means the business is heavily dependent on constant new acquisition to replace what's lost.

The B2B segment likely has higher NRR. Enterprise customers can add seats, renew at higher prices, or expand into different products. This is one reason why growing B2B meaningfully changes the financial profile of the business.

---

## Cohort Analysis: Seeing Churn in Slow Motion

A cohort is a group of subscribers who started in the same period. Tracking cohorts over time reveals whether churn is accelerating, stabilising, or improving.

Illustrative cohort table (monthly subscribers, indexed to 100 at start):

| Month | Cohort Jan | Cohort Feb | Cohort Mar |
|---|---|---|---|
| Month 0 | 100 | 100 | 100 |
| Month 1 | 85 | 87 | — |
| Month 3 | 72 | 74 | — |
| Month 6 | 63 | — | — |
| Month 12 | 55 | — | — |

If the Month 12 retention is 55%, annual churn is 45% — steep for a subscription product. If newer cohorts show better Month 1 retention, that signals product improvement. If they look worse, acquisition quality may be declining.

---

## Three Concepts to Remember

1. **ARR is a snapshot, not a forecast** — it tells you the run rate today, not where revenue is going. Churn and new bookings together determine the trajectory.
2. **NRR below 100% means the existing customer base is shrinking** — for Memrise's B2C segment, this is the current reality, making new acquisition the primary growth lever.
3. **Cohort analysis reveals what aggregate metrics hide** — overall MRR can look stable while individual cohorts are deteriorating if new cohorts keep refilling the bucket.

---

## Visual Aid

![[../assets/2026-03-28-accounting-session-14.png]]

---

## Open Question

> If Memrise's NRR is, say, 80% for B2C, how many new subscribers per month would be needed just to hold MRR flat — and what does that imply for your marketing and acquisition budget relative to current spending?

**Kevin's answer:** _(not yet provided)_

---

## ⚠️ Reuse note

This session uses approximate Memrise MRR, ARR, and YoY decline figures. Before sharing outside Memrise, replace with generic illustrative figures. The NRR and churn estimates are for teaching purposes and should not be treated as disclosed metrics.

---

## Next session builds on

- **Subscription revenue forecasting** — building a model that takes today's MRR, applies churn curves, and adds new subscriber cohorts
- **The deferred revenue pool as a forecasting input** — how the £2.3M balance drains and refills over time
- **Scenario planning** — what the revenue line looks like under optimistic, base, and pessimistic churn assumptions
