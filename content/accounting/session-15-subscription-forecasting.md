---
track: accounting
session: 15
title: "Subscription Revenue Forecasting"
date: 2026-03-28
tags: [forecasting, cohorts, churn, mrr, revenue-model, memrise]
visual: true
image_prompt: "Revenue forecasting model diagram. Top section: 'Existing subscribers' waterfall showing MRR declining each month due to churn. Bottom section: 'New subscriber cohorts' each starting fresh and also declining. Combined line at bottom labelled 'Total MRR forecast' showing net result. Flat design, green and orange cohort lines, educational financial model style."
reuse: restricted
open_question_answered: false
---

# Accounting — Session 15: Subscription Revenue Forecasting

> *Knowing where revenue is going is more valuable than knowing where it's been — here's how to build the model.*

---

## What You Already Know

In Session 14 you learned the language of SaaS metrics: MRR (~£443k), ARR (~£5.3M), and the mechanics of churn and NRR. You saw that churn is a constant gravitational pull — at 30% annual churn, Memrise loses ~£1.6M of ARR every year before acquiring a single new customer. The question for this session is: how do you turn those metrics into a forward-looking revenue model that's actually useful for decisions?

## The simplest true statement

**A subscription revenue forecast is just the sum of all active cohorts — existing subscribers decaying through churn, plus new subscribers arriving and beginning their own decay curves.**

---

## The Two Components of Any Subscription Forecast

Every month's MRR is made up of two populations:

1. **Survivors from prior cohorts** — subscribers who started in a previous month and haven't churned yet
2. **New cohorts** — subscribers who signed up this month, who will also begin churning

This sounds obvious, but building the model explicitly changes how you think about the levers. A forecast built this way answers questions that a simple "apply growth rate" model cannot:

- What happens to total MRR if acquisition drops 50% for three months?
- What does MRR look like in month 18 if we improve Month 1 retention by 10 percentage points?
- What's the carry-over contribution from this year's subscribers into next year?

---

## Building the Memrise Forecast Model

**Step 1: Start with the existing subscriber base**

Memrise's deferred revenue pool of ~£2.3M represents obligations owed to current subscribers. The MRR from existing subscribers is approximately £443k, but that pool decays each month as subscribers churn. A simplified monthly churn assumption of ~2.5% means:

```
Existing MRR in month N = £443k × (1 − 2.5%)^N
```

| Month | Surviving MRR from existing base |
|---|---|
| Month 0 | £443,000 |
| Month 3 | £410,000 |
| Month 6 | £379,000 |
| Month 12 | £323,000 |

By month 12, existing subscribers alone generate ~£323k MRR — a loss of ~£120k per month in run rate, or ~£1.44M annualised, just from churn on the current base. This is the cost of doing nothing.

**Step 2: Add new subscriber cohorts**

Each month, new subscribers arrive. Let's assume Memrise acquires a new cohort worth £30k MRR per month (a rough estimate based on current acquisition activity). Each cohort then churns at the same 2.5% monthly rate.

```
Contribution of month-1 cohort in month N = £30k × (1 − 2.5%)^(N−1)
```

The total MRR in any given month is the sum of the surviving existing base plus all cohort contributions up to that point. In spreadsheet terms, this is a triangle of cohort contributions, summed column by column.

**Step 3: Combine to get total MRR forecast**

| Month | Existing base | New cohorts (cumulative) | Total MRR |
|---|---|---|---|
| Month 0 | £443k | £30k | £473k |
| Month 3 | £410k | £87k | £497k |
| Month 6 | £379k | £163k | £542k |
| Month 12 | £323k | £306k | £629k |

Under this illustrative scenario — steady £30k/month new cohorts with 2.5% monthly churn — Memrise's MRR gradually recovers and grows. The key insight: the new cohorts are not yet big enough to overcome the legacy churn drag in the early months, but they compound over time.

---

## Why the Current Decline Matters

Memrise's revenue is currently declining ~24% year-on-year. That means the model above is not matching reality. Either:

- New cohorts are smaller than assumed (acquisition is weaker than the base case), or
- Churn is higher than 2.5%/month (implying the existing base is decaying faster), or
- There was a one-time reduction — a price change, a platform shift, an algorithm change — that removed a large chunk of subscribers at once

The diagnostic approach is to run the model backwards: given the observed MRR decline, what churn rate or acquisition rate is implied? This reverse-engineering often surfaces uncomfortable truths that the aggregate trend obscures.

---

## Scenario Planning: The Most Useful Part

The forecast model becomes genuinely decision-useful when you run scenarios:

| Scenario | Monthly new MRR | Monthly churn | 12-month MRR |
|---|---|---|---|
| Bear (churn worsens) | £20k | 3.5% | ~£480k |
| Base (current trend) | £30k | 2.5% | ~£629k |
| Bull (acquisition improves) | £50k | 2.0% | ~£810k |

The gap between bear and bull at 12 months is roughly £330k/month — or nearly £4M annualised. That's the range of strategic outcomes depending on execution. It also frames the investment decision: how much is it worth spending on acquisition and retention improvement to shift from bear to bull?

---

## Three Concepts to Remember

1. **Every subscription forecast is a cohort triangle** — existing subscribers decaying, new cohorts arriving and also decaying, summed together each month.
2. **The deferred revenue balance is a lagging indicator of subscriber health** — as churn accelerates, the pool drains faster and the balance falls before the P&L fully reflects it.
3. **Scenario planning is not guessing — it is quantifying the range of plausible outcomes** — showing bear, base, and bull tells the board the stakes of each operational decision.

---

## Visual Aid

![[../assets/2026-03-28-accounting-session-15.png]]

---

## Open Question

> If you could improve either acquisition (adding £10k more new MRR per month) or retention (reducing monthly churn by 0.5 percentage points), which lever has a bigger impact on 12-month MRR — and why does the answer change depending on the time horizon?

**Kevin's answer:** _(not yet provided)_

---

## ⚠️ Reuse note

This session uses approximate Memrise MRR, churn, and cohort figures for illustrative purposes. The scenario table is a teaching construct, not a forecast. Before sharing outside Memrise, replace all figures with generic placeholders and remove references to Memrise's specific revenue decline trend.

---

## Next session builds on

- **Unit economics** — now that you can forecast total revenue, the next question is whether each subscriber is worth acquiring at the current cost
- **CAC and payback period** — how long before a new subscriber's contribution margin repays the cost of acquiring them
- **B2C vs B2B unit economics** — the same cohort model applied at the per-customer level
