---
track: accounting
session: 17
title: "Tax Fundamentals"
date: 2026-03-28
tags: [tax, corporation-tax, vat, rd-credits, uk-tax, memrise]
visual: true
image_prompt: "Tax layers diagram for a UK company. P&L showing: Profit Before Tax, then tax calculation: CT rate × PBT = CT charge (or zero if loss-making). R&D tax credit shown as a separate inflow arrow. VAT shown as a flow-through (collected from customers, paid to HMRC). Flat design, professional financial style, blue and grey."
reuse: restricted
open_question_answered: false
---

# Accounting — Session 17: Tax Fundamentals

> *Tax sits below EBITDA on the P&L but above zero in real cash — and for a loss-making tech company, it can still be a material inflow.*

---

## What You Already Know

In Session 16 you built out unit economics — the contribution margin per subscriber, the LTV:CAC ratio, and the structural difference between B2C and B2B customers. Unit economics tells you whether the business model works at the individual customer level. Now we add the layer that affects what the company actually keeps: tax. For most CEOs, tax feels like an accountant's problem. In reality, three tax mechanisms directly affect your strategic options — and one of them, R&D credits, puts real cash back in the bank.

## The simplest true statement

**A loss-making company can still have a tax liability — and can also receive a tax cash inflow — depending on which taxes apply and which reliefs it qualifies for.**

---

## Corporation Tax: The Basics

UK Corporation Tax (CT) is charged on taxable profits. The headline rate in 2026 is **25%** for companies with profits above £250k, with a small profits relief rate of 19% below £50k and marginal relief between.

For Memrise, this is currently academic in one sense: the company is loss-making, so there is no taxable profit and therefore no CT charge. But three things make CT relevant right now:

**1. Losses carry forward.** Every year Memrise makes a loss, that loss is preserved. When Memrise eventually becomes profitable, accumulated losses offset taxable profit — potentially deferring CT for years. A company that has accumulated £10M of losses would need to generate £10M of profit before paying a penny of CT. This is a genuine future asset.

**2. The tax computation ≠ the accounting P&L.** Depreciation in the accounts differs from capital allowances for tax. Capitalised development costs are amortised differently for tax purposes. The taxable profit can be higher or lower than accounting profit, and timing differences create deferred tax assets and liabilities on the balance sheet.

**3. Group tax relief.** If Memrise operates multiple entities, losses in one entity can potentially be surrendered to offset profits in another (within the same UK group). This is relevant if any entity is profitable.

---

## VAT: The Flow-Through Tax

VAT is not Memrise's cost — it is collected from customers and passed to HMRC. But the mechanics matter, particularly for a digital services company operating internationally.

**Domestic (UK) sales:** Memrise charges 20% VAT on B2C digital subscriptions to UK consumers. This is collected and paid quarterly to HMRC via VAT returns. It's a timing issue, not a cost — but it means Memrise is holding approximately one quarter's VAT at any time (a small float).

**EU digital services:** Since Brexit, UK companies selling digital services to EU consumers must register for VAT (or use the Non-Union OSS scheme) in relevant EU member states. This is administratively complex. The threshold for each country is low — if a French consumer buys a Memrise subscription, French VAT rules apply. The One Stop Shop (OSS) simplifies this but requires registration and quarterly returns.

**B2B EU sales:** Business-to-business sales across EU borders are generally zero-rated (the buyer accounts for VAT under reverse charge). So Memrise's B2B EU revenue creates no VAT obligation, but the paperwork must be correct.

VAT failures are an audit risk. HMRC takes a dim view of miscategorisation or missed registrations.

---

## R&D Tax Credits: The Material Cash Inflow

This is the tax mechanism that most directly affects Memrise's cash position right now. The UK government subsidises innovation through R&D tax relief. For loss-making companies of Memrise's scale, the relevant scheme (post-April 2024 reforms) is the **Enhanced R&D Intensive Support (ERIS)** scheme, available to R&D-intensive SMEs.

**How it works:**

1. Identify qualifying R&D expenditure — primarily staff costs (engineers, data scientists, product managers working on innovative features), software licences used in R&D, and some subcontractor costs.
2. Calculate the enhanced deduction or credit under the applicable scheme.
3. If the company is loss-making, it can surrender the credit for a **payable cash credit** from HMRC — money received even though no tax has been paid.

Under ERIS, the credit rate for qualifying loss-making R&D-intensive companies can be up to **27p in the pound** of qualifying R&D spend. If Memrise has, say, £3–4M of qualifying R&D expenditure annually (engineering staff costs on product innovation), the credit could be:

```
~£3.5M qualifying spend × 27% ≈ £945k cash credit per year
```

Even at a conservative qualifying spend estimate, R&D credits are likely a **six-figure cash inflow** for Memrise annually. This is not a tax reduction — it's a cash payment from HMRC. It appears as a credit in the P&L (reducing net loss) and as a cash inflow in the cash flow statement.

The main risk is HMRC challenge: the definition of "innovation" is specific, and claims must be robustly documented. Routine maintenance, bug fixes, and standard software development do not qualify — only work that advances scientific or technological knowledge.

---

## Three Concepts to Remember

1. **Accumulated tax losses are a future asset** — Memrise carries forward losses that will shelter future profits from CT, potentially for years after reaching profitability.
2. **VAT is a flow-through, but compliance is not optional** — EU digital services VAT is complex, and getting it wrong creates real liability and reputational risk with tax authorities.
3. **R&D tax credits are a genuine cash inflow for loss-making companies** — qualifying engineering spend can generate a payable credit worth potentially £500k–£1M per year, materially extending cash runway.

---

## Visual Aid

![[../assets/2026-03-28-accounting-session-17.png]]

---

## Open Question

> If Memrise's R&D tax credit claim is approximately £800k per year, that's equivalent to the revenue from roughly 15,000 additional annual subscribers. How should the board think about the effort and risk of maximising the R&D credit claim versus other cash generation activities — and who owns this in the organisation?

**Kevin's answer:** _(not yet provided)_

---

## ⚠️ Reuse note

This session references UK-specific tax rates and schemes (ERIS, OSS) current as of 2026. R&D credit estimates are illustrative — actual qualifying spend and applicable rates require professional tax advice. Before sharing outside Memrise, replace company-specific estimates and note that tax rules change frequently.

---

## Next session builds on

- **Transfer pricing and intercompany transactions** — when Memrise's legal entities trade with each other, the prices must be set correctly for both tax and regulatory reasons
- **The arm's length principle** — what HMRC requires when related parties transact
- **IP licensing between entities** — how the ownership of Memrise's IP affects which entity bears the tax cost of development and which captures the value
