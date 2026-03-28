---
track: accounting
session: 8
title: "R&D Accounting"
date: 2026-03-28
tags: [rd, capitalisation, amortisation, intangible-assets, rdec, memrise]
visual: true
image_prompt: "T-diagram or split diagram. Left: 'Capitalised development' — engineer building new feature → becomes an intangible asset on balance sheet → amortised over time. Right: 'Expensed R&D' — engineer fixing bugs, maintenance → hits P&L immediately as OpEx. Labels with examples at each path. Flat design, blue and orange, clean educational."
reuse: restricted
open_question_answered: false
---

# Accounting — Session 8: R&D Accounting

> *Same engineer, same desk — two completely different accounting treatments*

---

## What You Already Know

In Session 7, you learned that Sales & Marketing is an investment with a calculable return — CAC against LTV. R&D is the other major investment in Memrise's cost base, but accounting treats it differently. While S&M spend is always expensed immediately (it hits the P&L in the month it's incurred), R&D has a fork in the road: some of it is expensed, and some of it is capitalised onto the balance sheet. Today you'll understand why — and why it matters.

## The simplest true statement

When engineers build something genuinely new that will generate future value, accounting lets you spread that cost over time; when they're maintaining what already exists, the cost hits immediately.

---

## The Fork in the Road

Imagine two Memrise engineers sitting side by side on a Tuesday morning:

- **Engineer A** is fixing a bug in the app's push notification system — work that keeps the existing product functioning.
- **Engineer B** is building a new AI-powered grammar coach feature — work that creates a new capability that didn't exist before.

Both engineers cost roughly the same per hour. But accounting treats their work very differently.

**Engineer A's time → Expensed.** Maintenance, bug fixes, and keeping existing systems running are "period costs." They hit the P&L in the month the work happens. There's no future asset being created — just the ongoing cost of having a functioning product.

**Engineer B's time → Capitalised (potentially).** Building a new feature that will generate future revenue satisfies the criteria to be treated as an *intangible asset* on the balance sheet. Instead of expensing the full cost in month one, the cost is *capitalised* — it sits as an asset — and then *amortised* (gradually expensed) over the asset's useful life, typically 2-5 years for software.

---

## Memrise in Practice

Memrise has approximately 15-20 engineers. Their time splits across:

| Activity | Accounting Treatment | P&L Impact |
|---|---|---|
| Building new features (new product capabilities) | Capitalised → Balance sheet | Amortised over 2-3 years |
| Bug fixes and maintenance | Expensed | Hits P&L this month |
| Infrastructure improvements (existing systems) | Expensed | Hits P&L this month |
| Research / early-stage exploration | Expensed (research phase) | Hits P&L this month |
| Technical specification and design for new builds | Capitalised (development phase) | Amortised over 2-3 years |

In practice, most software companies capitalise a portion of engineer time — perhaps 30-50% for a product-focused team actively shipping new features. For Memrise, the R&D OpEx line (~£100-150k/month) represents the *expensed* portion of engineering, product, and design costs. Additional amounts may be being capitalised and will appear as amortisation charges later.

The ~£30k/month in amortisation you saw in Session 4 and 5 partly reflects the unwinding of previously capitalised development costs.

---

## Why It Matters: Three Consequences

**1. P&L timing.** Capitalisation defers the P&L impact of development spending. A company that capitalises aggressively looks more profitable in the short term (lower OpEx, higher EBITDA) but takes amortisation hits over future years. Neither is wrong — but the choice affects what the P&L tells you right now.

**2. Balance sheet assets.** Capitalised development costs sit as "intangible assets" on the balance sheet. If Memrise has built significant software over the years, there's a meaningful intangible asset line that represents that accumulated investment. This affects total asset value and, if the software becomes obsolete, can require an *impairment* write-down.

**3. Investor comparisons.** If two companies with identical engineering teams capitalise at different rates, their reported EBITDA will differ even though their cash spending is identical. This is one reason sophisticated investors look at cash flow alongside EBITDA — capitalisation can flatter the P&L without improving cash generation.

---

## The UK R&D Tax Credit (RDEC)

A significant and frequently underutilised benefit for UK tech companies: the Research and Development Expenditure Credit (RDEC). For profitable companies, RDEC provides a tax credit on qualifying R&D expenditure. For loss-making companies (which Memrise currently is), the regime changed in April 2023, but qualifying R&D spend can still generate cash tax credits.

The qualifying criteria focus on whether the work constitutes genuine technological advance — not just applying known techniques, but advancing the state of knowledge. For Memrise, AI-powered language learning features, novel adaptive learning algorithms, and proprietary NLP work would likely qualify. Routine maintenance does not.

At R&D spend of ~£100-150k/month, the annual qualifying spend could be £1-2M+. RDEC credits at current rates can represent a meaningful cash recovery — potentially £150-250k annually — which shows up as a tax credit in the P&L and a cash receipt. Worth ensuring the company is claiming this properly.

---

## The Practical Test

When an engineer's time is being allocated, the question to ask is:

> *Is this creating a new capability that didn't exist before, with identifiable future economic benefit?*

If yes → Capitalise (subject to accounting standards compliance, typically FRS 102 or IFRS for UK companies).
If no → Expense immediately.

Many early-stage companies expense everything — it's simpler, more conservative, and avoids the judgement calls. As Memrise scales, the amounts become material enough to warrant a proper capitalisation policy.

---

## Three Concepts to Remember

1. **The same engineer's time can be capitalised or expensed** — the test is whether they're building something new with future value, or maintaining what already exists.
2. **Capitalisation defers the P&L hit but creates future amortisation** — it doesn't make costs disappear, it spreads them. The cash goes out regardless.
3. **RDEC is real money** — UK R&D tax credits for qualifying tech development can return significant cash to loss-making companies. It's worth treating this as a financial priority, not an afterthought.

---

## Visual Aid

![[../assets/2026-03-28-accounting-session-8.png]]

---

## Open Question

> If Memrise chose to capitalise significantly more of its engineering time, EBITDA would improve and the balance sheet would grow — but cash flow wouldn't change. Would that make the business look more attractive to investors? And would it be the right thing to do?

**Kevin's answer:** _(not yet provided)_

---

## ⚠️ Reuse note

R&D capitalisation rates and RDEC figures are illustrative. Memrise's actual capitalisation policy, qualifying R&D amounts, and RDEC claims are specific to the company's accounting elections. Before sharing externally, replace with generic examples and note that RDEC rules changed in 2023 — verify current rates.

---

## Next session builds on

- Headcount as the single biggest cost driver in the P&L
- Fully-loaded cost per employee — why the salary figure understates the true cost
- How to read the people P&L and use it to make headcount decisions
