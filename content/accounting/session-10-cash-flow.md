---
track: accounting
session: 10
title: "The Cash Flow Statement"
date: 2026-03-28
tags: [cash-flow, operating-activities, investing-activities, financing-activities, burn-rate, memrise]
visual: true
image_prompt: "Three-box diagram showing the Cash Flow Statement sections: 'Operating Activities' (cash from running the business), 'Investing Activities' (capital expenditure, acquisitions), 'Financing Activities' (fundraising, debt repayments). Arrows showing cash in (green) and cash out (red) for each section. Net change at bottom. Flat design, clean educational."
reuse: restricted
open_question_answered: false
---

# Accounting — Session 10: The Cash Flow Statement

> *Profit is an opinion; cash is a fact*

---

## What You Already Know

In Session 9, you learned that headcount is Memrise's biggest cost — a ~£550k/month obligation that exceeds the company's revenue. You've now walked through every major line of the P&L. But the P&L doesn't tell you whether Memrise will be able to pay its staff next month. For that, you need the Cash Flow Statement — the financial statement that most people ignore and that matters most when a business is under pressure.

## The simplest true statement

A company that shows a profit can still go bankrupt; a company that shows a loss can still be perfectly fine — the P&L tells you about accounting, but cash flow tells you about survival.

---

## Why Profit and Cash Are Different

This is the central insight of this session: **net income ≠ cash generated.**

They differ for several reasons:

1. **Non-cash charges.** Depreciation and amortisation reduce net income but involve no cash payment this month. The cash went out when the asset was purchased. Adding back D&A is one of the first adjustments in the cash flow statement.

2. **Timing differences.** If Memrise invoices a B2B client £50k in January but collects it in March, the revenue hits the January P&L but the cash arrives in March. The gap between recognising revenue and receiving cash is "accounts receivable" — an asset, not cash.

3. **Prepayments and accruals.** Memrise might pay 12 months of AWS hosting upfront in January (a cash outflow) but recognise the cost monthly over the year (an accounting expense). The cash flow and P&L diverge.

4. **Capital expenditure.** Buying a server costs cash immediately. But accounting spreads the cost (depreciation) over 3 years. The P&L shows a small monthly charge; the cash flow shows the full hit in month one.

---

## The Three Sections

The Cash Flow Statement is divided into three sections, each telling a different story:

### Section 1: Operating Activities

This is cash generated (or consumed) by running the core business. It starts with net income and adjusts for non-cash items and working capital movements:

| Item | Memrise Approximate | Direction |
|---|---|---|
| Net loss | ~-£620k/month | Outflow |
| + Depreciation & amortisation | ~+£30k | Add-back (non-cash) |
| ± Working capital changes | ±variable | Depends on timing |
| **Operating Cash Flow** | **~-£575k to -£590k** | Net outflow |

For Memrise, operating cash flow is close to EBITDA (as noted in Session 5), because the business has limited working capital complexity — most revenue is subscription, collected monthly.

### Section 2: Investing Activities

This covers cash spent on assets and investments — capital expenditure (capex), acquisitions, and disposals. For a software company like Memrise, capex is low:

- Laptops and equipment: modest purchases, perhaps £5-10k/month on average
- Capitalised software development: the cash equivalent of engineering time capitalised (already reflected in payroll, but shifted from OpEx to investing)

Investing activities for Memrise are likely a modest net outflow — perhaps £20-40k/month — reflecting ongoing equipment purchases and any capitalised development activity.

### Section 3: Financing Activities

This is cash from external sources — fundraising and debt — minus any repayments. When Memrise raises a venture round, the cash receipt appears here. If there's a credit facility with repayments, those outflows appear here too.

In months with no fundraising activity, financing cash flow is typically small or zero. In a fundraising month, this section shows a large positive figure — but crucially, that's not business performance, it's external capital injected.

---

## Memrise's Cash Position and Runway

Based on approximate context, Memrise holds roughly £5-7M in cash. With monthly burn (operating cash outflow) of approximately £500-600k, this implies:

```
Runway = Cash ÷ Monthly Burn
Runway = £6M ÷ £550k ≈ 11 months
```

Runway is the single most important number for a cash-burning business to track. It determines urgency: at 11 months, you have time to make considered decisions. At 4 months, you're in crisis management.

The practical implication: Memrise needs either to reach cash flow breakeven or to raise additional funding before the runway expires. Both paths are available, but each requires different decisions — and different timelines.

---

## The Statement Nobody Reads

Finance directors often observe that the income statement gets read every board meeting, the balance sheet occasionally, and the cash flow statement almost never — until there's a cash crisis. This is backwards.

For an investor, the cash flow statement is the most honest document because it's hardest to manipulate. Revenue can be recognised early; expenses can be accrued or deferred; non-cash gains can inflate profit. Cash is binary: it's either in the account or it isn't.

The questions to ask from the cash flow statement every month:

1. **Is operating cash flow improving?** Even if still negative, a narrowing loss is progress.
2. **What's the investing cash flow?** High capex might signal growth investment — or waste.
3. **Are we relying on financing to offset operating losses?** If yes, the clock is ticking.
4. **What's the net cash movement this month?** This reconciles to the bank balance change.

---

## Three Concepts to Remember

1. **Profit and cash are not the same** — timing differences, non-cash charges, and working capital movements mean the P&L and cash flow diverge constantly. You need both to understand the business.
2. **The three sections have different meanings** — operating shows business performance; investing shows asset decisions; financing shows external capital. A business that funds operating losses with financing activities indefinitely needs a plan.
3. **Runway is calculated from cash and burn, not from the P&L** — at ~£5-7M cash and ~£550k/month burn, Memrise has approximately 10-13 months. That's the most important number in the building.

---

## Visual Aid

![[../assets/2026-03-28-accounting-session-10.png]]

---

## Open Question

> Memrise's subscription model means most customers pay upfront (monthly or annually). An annual subscriber paying in January generates 12 months of cash immediately but 12 months of recognised revenue gradually. How does this affect the cash flow statement, and what does it mean for runway calculations?

**Kevin's answer:** _(not yet provided)_

---

## ⚠️ Reuse note

Cash position and runway figures are approximate and based on general Memrise context — not audited or disclosed figures. Before sharing externally, replace with generic SaaS examples. Runway calculations should be treated as illustrative; actual runway depends on burn rate variability and cash management.

---

## Next session builds on

- Free Cash Flow — the metric sophisticated investors actually watch
- How FCF differs from operating cash flow, and why capex matters
- What FCF breakeven means for Memrise's path to self-sustainability
