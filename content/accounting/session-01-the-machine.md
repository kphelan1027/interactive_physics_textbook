---
track: accounting
session: 1
title: "The Machine"
date: 2026-03-21
tags: [accounting, revenue-recognition, deferred-revenue, accrual, memrise]
visual: true
reuse: restricted
open_question_answered: false
---

# Accounting — Session 1: The Machine

> *Why cash and revenue are on different clocks at Memrise.*

---

## The simplest true statement

When Memrise takes your money, it hasn't earned it yet.

This one sentence explains almost everything confusing about the P&L.

---

## The scenario

A user signs up for an annual Memrise subscription on 1 January 2026. They pay £89.99 upfront.

**Question:** how much revenue does Memrise recognise in January?

- Intuitive answer: £89.99
- Correct answer: **£7.50** (£89.99 ÷ 12 months)

---

## Why?

Memrise made a promise: "Give us £89.99 and we'll teach you a language for 12 months." The moment they take the money, they owe 12 months of service. They've earned January's share. The other 11 months are still owed.

This is **accrual accounting**. Revenue is only recognised when the service is *delivered*, not when the cash arrives. Required for all companies above a certain size.

---

## What actually happens in the books

When £89.99 lands in the bank:

```
DR  Bank account       £89.99    (cash goes up — real)
CR  Deferred Revenue   £89.99    (a liability goes up — you owe 12 months)
```

At the end of January:

```
DR  Deferred Revenue   £7.50     (liability goes down — 1 month delivered)
CR  Revenue            £7.50     (revenue goes up — earned it)
```

Repeats every month for 12 months until the liability is fully discharged.

---

## The Memrise numbers

Memrise's deferred revenue pool in January 2026: **£2.3 million**
January 2025: £3.5 million

The £1.2M decline tells a story about annual subscription sales health over the past year. (Explored in Session 2.)

---

## Why the P&L doesn't equal cash

The P&L shows *earned* revenue. The bank shows *collected* cash. For a subscription business, those numbers are almost never the same in any given month.

"Revenue was £X in January" = recognised revenue, after running the deferred pool through its monthly cycle. Not billings.

---

## Three concepts to remember

1. Cash and revenue move on different timelines in subscription businesses
2. Deferred revenue is a *liability* — money owed in future service
3. Revenue recognition = moving money from liability → revenue as service is delivered

---

## Visual Aid

![[../assets/2026-03-21-accounting-session-1.png]]

---

## Open Question

> Memrise's deferred revenue pool shrank by £1.2M over 12 months. What are two different things that could cause that?
> *(Hint: think about what makes the pool grow vs shrink.)*

**Kevin's answer:** _(not yet provided)_

---

## ⚠️ Reuse note

Contains Memrise-specific numbers (£2.3M deferred pool, £3.5M prior year). Replace with a generic company example (e.g. "a fictional SaaS company") before using to teach anyone outside Memrise.

---

## Next session builds on

- The four Memrise revenue recognition workflows (App Store, Google Play, web, B2B)
- The January 2026 P&L line by line
- The PayPal/Stripe recognition fix and what it changed
