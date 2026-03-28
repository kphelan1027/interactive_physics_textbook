---
track: accounting
session: 6
title: "Cost of Revenue vs OpEx"
date: 2026-03-28
tags: [cogs, opex, cost-of-revenue, infrastructure, payroll, memrise]
visual: true
image_prompt: "Two-column diagram. Left column: 'Cost of Revenue (COGS)' — items listed: App Store fees, payment processing, direct delivery costs. Right column: 'Operating Expenses (OpEx)' — items: Payroll, Infrastructure/hosting, Marketing, R&D, G&A. A line labelled 'Gross Profit' divides them. Flat design, two distinct blue shades, clean labels."
reuse: restricted
open_question_answered: false
---

# Accounting — Session 6: Cost of Revenue vs OpEx

> *Same pound, different line — the categorisation that shapes every margin conversation*

---

## What You Already Know

In Session 5, you learned what EBITDA is, what it adds back, and crucially what it hides. You now understand that the P&L has two distinct regions: above gross profit (revenue and COGS), and below gross profit (operating expenses leading to EBITDA). Today you'll go inside that structure and understand why the same type of cost — say, cloud infrastructure — can legitimately land in either place, and why it matters enormously which one it lands in.

## The simplest true statement

Cost of Revenue contains only the costs that would disappear if you stopped delivering your product; everything else is an Operating Expense.

---

## The Dividing Line

The distinction between Cost of Revenue (COGS) and Operating Expenses (OpEx) is one of the most consequential categorisation decisions in a P&L, because it directly determines your gross margin — the metric investors use most to assess the inherent quality of your business model.

**Cost of Revenue** includes costs that are *directly and variably tied to delivering the product or service*. If Memrise had zero subscribers this month, these costs would be zero (or very close to it). They scale with revenue.

**Operating Expenses** are the costs of running the business — they exist whether or not you're serving a single customer. They don't vary directly with revenue in the short term.

---

## Memrise: What Goes Where

| Cost | Classification | Reason |
|---|---|---|
| App Store fees (Apple/Google) | **COGS** | Direct % of each subscription transaction |
| Stripe/payment processing fees | **COGS** | Charged per transaction |
| AWS hosting (servers, compute) | **OpEx** (Running Costs) | Fixed/semi-fixed regardless of user count |
| Cloudflare CDN | **OpEx** (Running Costs) | Infrastructure, not per-user delivery |
| Third-party APIs (e.g. translation, speech) | **OpEx** (Running Costs) | Platform-level tools, not per-transaction |
| Payroll (all staff) | **OpEx** (Payroll) | Exists regardless of revenue |
| Paid acquisition / ads | **OpEx** (S&M) | Demand generation, not delivery |
| Engineering work (maintenance) | **OpEx** (R&D) | Keeping the product running |

For Memrise in January 2026, COGS is approximately £117k — almost entirely App Store fees. Running costs (~£76k, infrastructure and tooling) sit in OpEx. This is a deliberate and defensible choice, because Memrise's AWS bill doesn't scale meaningfully with individual user activity at the current usage levels — it's closer to a fixed platform cost.

---

## Why This Categorisation Is Not Arbitrary

You might ask: couldn't you argue that AWS hosting is a delivery cost, and therefore COGS? In some cases, yes — a video streaming company that pays per gigabyte served would reasonably classify bandwidth costs as COGS, because they scale directly with content delivery. Context matters.

For Memrise, the infrastructure costs are largely fixed or step-fixed (they jump at capacity thresholds, not per-user). Classifying them as COGS would suppress gross margin and misrepresent the unit economics of the subscription model. The accounting principle to apply: *is this cost incurred to deliver value to a specific customer, or to maintain the platform that serves all customers?*

This distinction has real consequences:

- **Gross margin** changes based on what you include in COGS. Moving £76k from OpEx to COGS would reduce Memrise's gross margin from ~73.5% to roughly ~56% — a dramatic difference that would concern investors looking at SaaS benchmarks.
- **Investor comparisons** use gross margin as a quality signal. Software businesses typically benchmark at 70-80%+ gross margins. If you misclassify OpEx as COGS, you look worse than you are; the reverse flatters you.
- **Pricing decisions** are anchored on gross margin. If you think your margin is 73% and it's actually 56%, you'll underprice.

---

## The Payroll Question

Payroll (~£550k/month) is unambiguously OpEx for Memrise. But there's a nuance worth flagging: in principle, if Memrise employed people whose sole job was per-customer onboarding or support, that portion of payroll could be classified as COGS. Most early-stage software companies don't split payroll this finely — it's operationally complex and the amounts often don't justify the precision.

As Memrise grows and hires dedicated customer success or implementation roles (particularly for B2B), this will become a more meaningful conversation. A company with £10M ARR and a £500k customer success team should probably be allocating that to COGS, because it directly affects the reported gross margin and therefore the unit economics story.

---

## A Quick Sense-Check

When you're categorising a cost, ask:
1. Would this cost go to zero if we had no customers? → **COGS**
2. Does it scale directly with each transaction or delivery? → **COGS**
3. Does it exist regardless of customer activity? → **OpEx**
4. Is it a platform cost or a per-unit cost? → Platform = **OpEx**

---

## Three Concepts to Remember

1. **COGS scales with revenue; OpEx broadly doesn't** — this is the functional test for classification, not the account name.
2. **Memrise's infrastructure sits in OpEx, not COGS** — because AWS and Cloudflare costs are platform-level, not per-user delivery costs at current scale.
3. **Gross margin is determined by what you put in COGS** — misclassification here distorts every downstream conversation about unit economics, pricing, and investor benchmarking.

---

## Visual Aid

![[../assets/2026-03-28-accounting-session-6.png]]

---

## Open Question

> Memrise is growing its B2B business, which requires customer success managers and onboarding support. As that team grows, should their cost be classified as COGS or OpEx? What would reclassifying them to COGS do to Memrise's gross margin — and would that be more or less honest?

**Kevin's answer:** _(not yet provided)_

---

## ⚠️ Reuse note

Cost classifications used here reflect Memrise's current operational model and accounting approach. Before sharing externally, note that reasonable people can disagree on infrastructure classification; replace specific figures with generic SaaS examples and remove proprietary cost line detail.

---

## Next session builds on

- Sales & Marketing as the second-biggest OpEx lever after payroll
- CAC, LTV, and the payback period — the unit economics of customer acquisition
- Why B2C and B2B acquisition have fundamentally different economics at Memrise
