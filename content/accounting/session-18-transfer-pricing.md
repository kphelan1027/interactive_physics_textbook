---
track: accounting
session: 18
title: "Transfer Pricing & Intercompany"
date: 2026-03-28
tags: [transfer-pricing, intercompany, tax, corporate-structure, memrise]
visual: true
image_prompt: "Diagram showing two legal entities: 'Memrise Ltd (UK)' and 'Memrise Inc (US)'. Arrow between them labelled 'Intercompany services / IP licence'. HMRC logo on left, IRS logo on right, both watching the transaction. Label: 'Must be arm's length'. Transfer pricing principle explained. Flat design, two-country structure, professional accounting style."
reuse: restricted
open_question_answered: false
---

# Accounting — Session 18: Transfer Pricing & Intercompany

> *When different parts of the same company buy and sell from each other, the price they charge is not just an accounting entry — it's a tax decision both governments are watching.*

---

## What You Already Know

In Session 17 you learned that tax touches Memrise in three ways: Corporation Tax on profits (currently zero, with losses carried forward), VAT on digital services (a compliance obligation), and R&D tax credits (a meaningful cash inflow). Now we go one layer deeper into the corporate structure. Most groups of companies — including Memrise — have multiple legal entities. The moment those entities transact with each other, transfer pricing rules apply.

## The simplest true statement

**Transfer pricing is the discipline of ensuring that when related companies charge each other for goods, services, or intellectual property, the price reflects what an independent third party would pay — because tax authorities assume self-dealing otherwise.**

---

## Why Multiple Entities Exist

Memrise Group almost certainly has more than one legal entity — a UK parent (Memrise Ltd) and potentially US, or other, subsidiaries. Multiple entities exist for legitimate reasons:

- **Regulatory requirements:** Operating in the US may require a US legal entity to contract with US enterprise customers, hold US bank accounts, or employ US staff
- **Employment:** Staff in different jurisdictions are employed by local entities for payroll tax and employment law purposes
- **Investment structure:** PE-backed companies often have holding company structures above the operating entity for reasons related to debt, ownership mechanics, or future exit structure

None of this is unusual or problematic. The complexity arises when these entities trade with each other.

---

## The Arm's Length Principle

The foundational rule of transfer pricing is the **arm's length principle**: transactions between related parties must be priced as if they were between independent parties in a competitive market.

HMRC (in the UK) and the IRS (in the US) are both alert to arrangements that shift profits from high-tax to low-tax jurisdictions. Classic patterns they look for:

- A subsidiary in a low-tax country holds the group's IP and charges a high royalty to the operating entities, stripping profits from the UK or US
- A service company provides "management services" to operating entities and charges fees that happen to wipe out taxable profit in the entity being charged
- Intercompany loans are made at non-market interest rates, shifting deductible interest expense to high-tax jurisdictions

For Memrise, the most relevant intercompany transactions are likely:

| Transaction type | Parties | Transfer pricing consideration |
|---|---|---|
| Shared technology/IP | UK parent → US sub (or vice versa) | What would a third party pay to license Memrise's platform? |
| Management services | UK parent → other entities | What market rate applies to finance, legal, HR provided centrally? |
| Employee secondment | Entity A → Entity B | Staff costs must be recharged at cost-plus |
| Intercompany loans | Parent → subsidiary | Interest rate must reflect market rates for similar credit risk |

---

## What "Arm's Length" Means in Practice

Imagine Memrise Ltd (UK) develops the core app and AI features. Memrise Inc (US) uses that technology to serve US customers. What should the US entity pay the UK entity for access to that IP?

A third-party software licence for a comparable product might cost 10–20% of the revenue it generates. If the US entity generates $1M of revenue, an arm's length royalty might be $100–200k per year, payable to the UK entity. The UK entity then pays UK CT on that royalty income; the US entity deducts the royalty from US taxable income.

HMRC and IRS both need to agree this is reasonable. If the rate is too high, the US entity is stripping profit from the US. If it's too low, the UK entity is leaving value on the table and potentially under-charging for IP developed with UK R&D credit support.

---

## Documentation: The Practical Requirement

For companies above certain thresholds, HMRC requires contemporaneous documentation supporting transfer pricing positions. For Memrise's scale — likely below the largest tier of multinationals — the requirement is lighter but not absent. A simple intercompany agreement, supported by a brief benchmarking note, is generally sufficient to demonstrate the arm's length principle has been considered.

The risk of getting it wrong is not just tax — it is also:
- **Penalties** for inadequate documentation if challenged
- **Double taxation** if both countries claim the same profit (a common consequence of disputes)
- **Audit risk** that consumes management time disproportionate to the amounts involved

At Memrise's current scale, the pragmatic approach is to:
1. Document all intercompany arrangements formally in written agreements
2. Apply consistent, defensible pricing (cost-plus for services is simple and usually acceptable)
3. Review annually as the business grows

---

## The Board's Role

As CEO, the transfer pricing question you should be asking is not "what rate should we charge?" — that's a question for the CFO and external advisers. The question is: **"Do we have formal intercompany agreements in place, and have they been reviewed since the last significant change in the business?"**

Unsigned or undocumented intercompany transactions — even if economically sensible — are a structural risk. If Memrise is acquired or refinanced, due diligence will surface poorly documented intercompany positions as a liability.

---

## Three Concepts to Remember

1. **The arm's length principle** — all intercompany transactions must be priced as if between independent parties, regardless of the tax outcome that creates.
2. **IP location determines where profit is taxed** — whichever entity legally owns Memrise's core IP bears the development cost but also captures the value; this is a strategic as well as tax decision.
3. **Documentation is the defence** — the price can be challenged, but the absence of documentation makes the challenge much easier for HMRC to win.

---

## Visual Aid

![[../assets/2026-03-28-accounting-session-18.png]]

---

## Open Question

> Memrise's AI and language-learning IP was developed primarily by UK engineers, funded partly by UK R&D tax credits. If a future acquirer wanted to move that IP to a different jurisdiction, what are the tax implications for Memrise — and at what point in the company's development does IP location become a genuinely significant strategic question?

**Kevin's answer:** _(not yet provided)_

---

## ⚠️ Reuse note

This session describes general transfer pricing principles using Memrise's approximate structure as context. The intercompany transaction examples are illustrative. Before sharing outside Memrise, remove references to Memrise's specific entity structure and replace with generic company names. Transfer pricing advice must always be tailored to specific circumstances by qualified advisers.

---

## Next session builds on

- **Board-level financial reporting** — all of the financial mechanics covered so far (P&L, cash, unit economics, tax) culminate in what the board actually sees every quarter
- **The CFO's narrative role** — numbers alone don't make a board pack; the analysis and context matter as much as the figures
- **Variance analysis** — how to explain the difference between budget and actuals in a way that drives decisions, not just understanding
