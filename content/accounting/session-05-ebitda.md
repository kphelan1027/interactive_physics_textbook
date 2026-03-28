---
track: accounting
session: 5
title: "EBITDA: What It Is and What It Hides"
date: 2026-03-28
tags: [ebitda, depreciation, amortisation, net-income, investor-metrics, memrise]
visual: true
image_prompt: "Diagram showing how EBITDA is calculated: Net Income box, then arrows adding back Interest (I), Tax (T), Depreciation (D), Amortisation (A), arriving at EBITDA. Each add-back labelled with what it represents and why it's excluded. Clean educational flat design, grey boxes with coloured arrows, accounting textbook style."
reuse: restricted
open_question_answered: false
---

# Accounting — Session 5: EBITDA: What It Is and What It Hides

> *The metric every investor mentions — and not everyone fully understands*

---

## What You Already Know

In Session 4, you walked the full P&L from top to bottom: Revenue, Gross Profit, EBITDA, and Net Loss. You saw that Memrise's January 2026 EBITDA was approximately -£575k, while the net loss was approximately -£620k — a gap of around £45k. Today you'll learn exactly what creates that gap, why EBITDA became the dominant metric in growth-stage finance, and what it conveniently obscures.

## The simplest true statement

EBITDA measures how much cash a business's operations generate before anyone takes their slice for financing, tax, and the accountant's allocation of past spending.

---

## Building EBITDA from the Bottom Up

Most people see EBITDA presented as a subtraction from gross profit. But it's easier to understand if you build it from net income upward — adding back the items that were subtracted on the way down.

| Starting point | ~Amount |
|---|---|
| Net Loss (Memrise, Jan 2026) | ~-£620k |
| + Interest expense | ~+£10k |
| + Tax charge | ~+£5k |
| + Depreciation | ~+£15k |
| + Amortisation | ~+£15k |
| **= EBITDA** | **~-£575k** |

Each "add-back" reverses something that was included in net loss. The question is: *why* would you want to reverse it?

---

## What Each Letter Actually Means

**E — Earnings.** Just net income, renamed. Nothing unusual here.

**I — Interest.** If Memrise has a credit facility or venture debt, there's an interest charge on the P&L. Adding it back strips out the cost of *how the business is financed*. Two identical businesses — one funded by equity, one by debt — would have different net incomes but the same EBITDA. That's the point: EBITDA lets you compare operational performance independently of capital structure.

**T — Tax.** Tax varies by jurisdiction, by whether you have prior losses to offset, and by timing differences. Adding it back makes comparisons across geographies cleaner.

**D — Depreciation.** When Memrise buys a laptop or server, it doesn't expense the full cost immediately. Instead, the cost is spread across the asset's useful life — say, three years. Depreciation is the annual slice of that cost hitting the P&L. It's a real cost, but it's a *non-cash* cost this month — the cash went out when the asset was purchased.

**A — Amortisation.** The same logic as depreciation, but applied to intangible assets. When engineers build a new feature that gets capitalised onto the balance sheet (more on this in Session 8), that asset is amortised over time. Amortisation is the monthly accounting charge for that past investment.

---

## Why Investors Love It — and Warren Buffett Doesn't

EBITDA became ubiquitous in the 1980s leveraged buyout era, when private equity firms needed a quick proxy for "how much cash does this business throw off to service debt?" It strips out financing noise and non-cash charges, leaving something closer to operating cash flow.

For growth-stage software companies like Memrise, investors use EBITDA because:

- It removes D&A, which can vary significantly based on capitalisation policy choices (accounting discretion, not business performance)
- It's the denominator in EV/EBITDA — the most common valuation multiple for software businesses
- It's easier to compare across companies at different stages of asset investment

**What it hides**, however, is significant:

1. **Depreciation is a real cost.** Equipment wears out and must be replaced. A company with high capital expenditure looks artificially healthy on EBITDA.
2. **Amortisation reflects real past investment.** Adding it back flatters businesses that spent heavily on R&D in prior periods.
3. **Working capital changes are invisible.** EBITDA tells you nothing about whether you're collecting from customers faster than you're paying suppliers.
4. **"Adjusted EBITDA" is a minefield.** Many companies add back stock-based compensation, restructuring costs, or "one-off" items on top of standard EBITDA. At some point, you're measuring a business that doesn't exist.

For Memrise, the D&A add-back is modest (~£30k/month) because the company's asset base is light — primarily software and some equipment. The EBITDA and net loss figures are therefore fairly close, which is typical for a software business with limited physical capital.

---

## The Number Investors Actually Watch

When a growth-stage investor looks at Memrise's -£575k EBITDA, they're asking: *is the operational engine improving?* Month-on-month EBITDA improvement (the loss narrowing) is often more important than the absolute number. A company moving from -£700k to -£575k EBITDA is demonstrating operational leverage — revenue growing, or costs controlled.

A useful frame: EBITDA tells you about the *business*. Net loss tells you about the *entity* (including its history of financing decisions and asset investments). You need both.

---

## Three Concepts to Remember

1. **EBITDA adds back four items from net income** — interest (financing), tax (jurisdiction/timing), depreciation, and amortisation (both non-cash charges from past investments).
2. **It exists to enable comparison** — across companies with different capital structures, tax positions, and asset investment histories.
3. **It flatters by design** — depreciation and amortisation are real costs. A business that claims EBITDA profitability whilst burning cash on capex is telling you an incomplete story.

---

## Visual Aid

![[../assets/2026-03-28-accounting-session-5.png]]

---

## Open Question

> Memrise's "Adjusted EBITDA" could theoretically add back stock-based compensation on top of standard EBITDA, making the loss look smaller still. When is adjusting EBITDA legitimate, and when does it cross a line? Where would you draw that line for Memrise's internal reporting?

**Kevin's answer:** _(not yet provided)_

---

## ⚠️ Reuse note

These figures are approximate and based on Memrise's internal January 2026 context. The D&A and interest figures are illustrative teaching numbers. Before sharing externally, substitute with generic SaaS examples and remove Memrise-specific references.

---

## Next session builds on

- The difference between Cost of Revenue and Operating Expenses — and why the same cost can land in either place
- Why Memrise's infrastructure costs sit in OpEx, not COGS
- How to read the "below the gross profit line" section of the P&L with confidence
