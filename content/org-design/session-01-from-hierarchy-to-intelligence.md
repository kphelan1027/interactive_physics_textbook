---
track: org-design
session: 1
title: "From Hierarchy to Intelligence"
date: 2026-04-05
source: "https://block.xyz/inside/from-hierarchy-to-intelligence"
tags: [org-design, hierarchy, ai, block, world-model, intelligence-layer, strategy]
visual: true
reuse: public
open_question_answered: false
---

# Org Design — Session 1: From Hierarchy to Intelligence

> *"Companies move fast or slow based on information flow. Hierarchy and middle management impede information flow. For two thousand years, we have had no real alternative. We do now."*
> — Block (2026)

---

## The simplest true statement

Hierarchy was never about power. It was about routing information in a world where humans were the only available routers.

That constraint just ended.

---

## Why hierarchy exists at all

Start with the Roman Army. Eight soldiers share a tent. They need one person to co-ordinate them — the *decanus*. Ten of those units need a *centurion*. Six centuries need a cohort commander. Ten cohorts need a legate for the full legion of ~5,000.

The structure looks like this:

```
8 soldiers → decanus
80 soldiers → centurion
480 soldiers → cohort commander
5,000 soldiers → legate
```

This wasn't a power grab. It was a solution to a constraint: **one human can effectively manage 3–8 other humans**. Go wider than that and coordination collapses. Every layer in the pyramid exists because humans can't hold more than a handful of relationships with full fidelity.

We call this *span of control*. The Romans discovered it through centuries of warfare. The US Army still uses it. So does every company on earth.

![](/assets/2026-04-05-org-design-session-01-span-of-control.png)

---

## What the hierarchy actually does

This is the insight most org design discussions miss: hierarchy is an **information routing protocol**.

Each layer does three things:
1. **Aggregates** information from below ("what's happening in my teams?")
2. **Filters** it before passing up ("what does leadership need to know?")
3. **Relays** decisions back down ("here's what we're doing")

Middle management — that maligned class of people in perpetual status meetings — exists entirely to do this routing work. They didn't invent themselves. The system needed them.

The Prussians formalised this in 1806 after Napoleon destroyed their army at Jena. They created the *General Staff* — a dedicated class of officers whose job was not to fight but to plan, process information, and maintain alignment. Scharnhorst intended them to "support incompetent Generals, providing the talents that might otherwise be wanting among leaders." That's middle management. Pre-industrial, military-grade middle management.

The railroads imported it in the 1840s, when Daniel McCallum of the New York and Erie Railroad drew the **world's first corporate org chart** to stop trains colliding. The modern corporation was born.

Frederick Taylor then optimised what happened *within* the hierarchy (Scientific Management, specialised tasks, measurement). McKinsey globalised it (matrix structures). And then Spotify, Zappos, and Valve tried to kill it — and failed. They all reverted. Because the underlying constraint hadn't changed.

**Two thousand years. One constraint.**

![](/assets/2026-04-05-org-design-session-01-two-thousand-years.png)

---

## What's actually different now

Most companies using AI are giving everyone a copilot. That makes the existing structure work slightly better. It doesn't change the structure.

Block is asking a different question: **what if we replaced what the hierarchy does?**

Not augmented. Replaced.

For the first time, a system can maintain a continuously updated model of an entire business and use it to coordinate work in ways that previously required humans relaying information through layers of management.

The information routing problem that spawned every org chart since McCallum's 1855 railroad diagram — AI can now do that job. The constraint that created hierarchy no longer requires humans.

---

## Block's four-part architecture

Block is building towards a *company organised as an intelligence* rather than a hierarchy. Here's what that actually means in practice:

### 1. Capabilities

The atomic building blocks: payments, lending, card issuance, banking, buy-now-pay-later, payroll. These are **not products**. They have no UIs. They are hard-won primitives — some have network effects, some require regulatory permission — that can be assembled into solutions.

Think of them as Lego bricks that took years to manufacture.

### 2. The World Model

Two sides:

**Company world model:** A continuously updated picture of what's being built, what's blocked, where resources are, what's working. This is the information that used to travel up and down management chains. In a remote-first company (like Block), everything creates machine-readable artifacts — code commits, design files, decisions, discussions. AI can build and maintain the picture continuously. What managers spent their days synthesising, the model holds.

**Customer world model:** Block sees both sides of millions of transactions every day — the buyer (Cash App) and the seller (Square). Every transaction is a fact about someone's financial life. People lie on surveys. They ignore ads. But when they spend, save, or repay, that's the truth. The richer the signal, the better the model. The better the model, the more transactions. The more transactions, the richer the signal. It compounds.

### 3. The Intelligence Layer

This is what composes capabilities into solutions for specific customers at specific moments — proactively.

A restaurant's cash flow is tightening ahead of a seasonal dip the model has seen before. The intelligence layer composes a short-term loan from the lending capability, adjusts the repayment schedule using the payments capability, and surfaces it to the merchant **before they even think to look for financing**.

No product manager decided to build that solution. The capabilities existed. The intelligence layer recognised the moment and composed them.

When the intelligence layer tries to compose a solution and can't — because the capability doesn't exist — that failure signal becomes the roadmap. The traditional roadmap, where product managers hypothesise about what to build, is replaced by customer reality generating the backlog directly.

### 4. Interfaces

Square, Cash App, Afterpay, TIDAL, bitkey, proto. These are delivery surfaces. Important, but not where the value is created. The value is in the model and the intelligence.

![](/assets/2026-04-05-org-design-session-01-block-architecture.png)

---

## The inversion

In a conventional company:
> Intelligence is spread throughout the people. The hierarchy routes it.

In Block's model:
> Intelligence lives in the system. The people are on the edge.

The edge is where the intelligence makes contact with reality. Edge people reach into places the model can't go yet. They sense things the model can't perceive: intuition, opinionated direction, cultural context, trust dynamics, the feeling in a room. They make the calls the model shouldn't make — ethical decisions, novel situations, high-stakes moments.

But the edge doesn't need layers of management to coordinate it. The world model gives every person at the edge the context they need to act without waiting for information to travel up and down a chain of command.

![](/assets/2026-04-05-org-design-session-01-inversion.png)

---

## The three roles

Block normalises down to three roles — no permanent middle management layer:

| Role | What they do | What they replace |
|------|-------------|-------------------|
| **Individual Contributors (ICs)** | Build and operate capabilities, the model, the intelligence layer, and interfaces. Deep specialists. The world model provides the context a manager used to provide — ICs can make decisions without waiting to be told. | Junior + mid-level specialist employees |
| **Directly Responsible Individuals (DRIs)** | Own specific cross-cutting problems or customer outcomes for defined periods (e.g., merchant churn in a segment, 90 days). Full authority to pull resources across teams. May persist on a problem or move to the next one. | Project managers, programme managers, heads-of |
| **Player-coaches** | Combine building (writing code, designing, modelling) with developing the people around them. They don't spend their days in status meetings — the world model handles alignment, the DRI structure handles strategy. They handle craft and people. | Middle management |

What disappears: the layer of managers whose primary job was routing information. The system does that now.

![](/assets/2026-04-05-org-design-session-01-three-roles.png)

---

## The compounding moat

The deepest idea in the article isn't the architecture. It's the question Block asks near the end:

> *"What does your company understand that is genuinely hard to understand — and is that understanding getting deeper every day?"*

For Block: the economic graph. Both sides of millions of transactions, in real time, compounding. That understanding gets richer every second the system operates. The more it operates, the better it gets. The better it gets, the more value it delivers. The more value it delivers, the more it operates.

This is **not** an AI productivity story. Productivity stories look like: "we cut costs and improved margins for a few quarters." This is a compounding moat story: the model becomes harder to replicate the longer it runs.

If the answer to Block's question is "nothing" — you don't have a proprietary understanding that compounds — then AI is just a cost line. You cut headcount, someone smarter absorbs you.

![](/assets/2026-04-05-org-design-session-01-compounding-moat.png)

---

## Five things to hold onto

1. **Hierarchy = information routing protocol.** It was never about power or bureaucracy. It was the only available technology for co-ordinating large groups. That's why it's 2,000 years old and hasn't been replaced — until now.

2. **Middle management exists because of span of control.** The constraint is human attention bandwidth. AI has a different span of control: effectively unlimited. That's what changes the game.

3. **The intelligence layer composes, it doesn't predict.** Block isn't building a recommender system. It's building something that recognises a customer's moment and assembles a solution from existing capabilities — proactively, without a product manager deciding to build it.

4. **The edge is where humans add value.** Intuition, ethics, novelty, trust, cultural read. These are the things the model can't do. The rest — alignment, context, priority routing — the world model does.

5. **The compounding question is the real test.** For any company considering this: what proprietary understanding do you have that gets richer every day? If the answer is weak, AI is a cost play. If it's strong, it's a moat.

---

## Open Question

> Block's model requires that "everything you do creates artifacts" — decisions, discussions, code, designs, and plans that are machine-readable and can feed the world model. Block is remote-first, so this is baked in.
>
> **At Memrise, how machine-readable is the actual work right now?** Think about: where decisions are made (Slack threads, meetings, Notion, heads), how much of the real reasoning is captured versus just the outcome, and whether you could reconstruct *why* a product decision was made six months later.
>
> *(This matters because the quality of any "company world model" at Memrise would be limited by what's actually legible to a machine. What would need to change?)*

**Kevin's answer:** _(not yet provided)_

---

## Why this is worth your time

You're building toward being an AI-native CPO. This article is a first-principles argument for what that actually means at the company level — not just AI tools in your workflow, but AI as the coordination mechanism that replaces the org chart itself.

Block is ~8,000 people. They're not a startup thought experiment. The pattern they're describing — company as intelligence, edge as human value-add — is the model Kevin Phelan will be expected to have an opinion on in every CPO conversation for the next decade.

---

## Source

Block Engineering Blog, 2026: [From Hierarchy to Intelligence](https://block.xyz/inside/from-hierarchy-to-intelligence)
