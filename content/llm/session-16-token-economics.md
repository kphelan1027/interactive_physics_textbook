---
track: llm
session: 16
title: "Token Economics"
date: 2026-03-28
tags: [tokens, cost, pricing, latency, budget, economics]
visual: true
image_prompt: "Cost comparison chart showing different LLM models on X axis, price per million tokens (input/output) on Y axis. Models grouped: frontier (Claude Opus, GPT-4o), mid (Claude Sonnet, GPT-4o-mini), fast/cheap (Haiku, GPT-3.5). Quality vs cost trade-off shown. Flat design, clean bar chart, blue and gold."
reuse: public
open_question_answered: false
---

# LLM — Session 16: Token Economics

> *Agents burn tokens. Understanding the economics is what separates a demo from a business.*

---

## Where we left off

In Session 15, we looked at how OpenClaw works — the gateway, the agents, the session layer, the skills. Every message you send, every skill you invoke, every agent loop that runs: all of it consumes tokens. Today we make that cost concrete. What does running a real agent fleet actually cost, and how do you reason about it?

## The simplest true statement

Every LLM interaction costs money proportional to the number of tokens consumed — and in an agent loop, token counts compound with every step, every tool result, and every injected context.

---

## What You're Actually Paying For

LLM providers charge per million tokens, split between input tokens (what you send) and output tokens (what the model generates). Output tokens are typically 3–5× more expensive than input tokens because generating text is computationally harder than reading it.

Approximate pricing as of early 2026 (indicative — check current provider pages for exact figures):

| Model | Input (per M tokens) | Output (per M tokens) | Best for |
|---|---|---|---|
| Claude Opus 4 | ~$15 | ~$75 | Complex reasoning, high-stakes tasks |
| GPT-4o | ~$5 | ~$15 | Balanced frontier performance |
| Claude Sonnet | ~$3 | ~$15 | Strong capability at mid cost |
| GPT-4o mini | ~$0.15 | ~$0.60 | Fast, cheap, surprisingly capable |
| Claude Haiku | ~$0.25 | ~$1.25 | Ultra-low latency, classification, routing |

These prices have been falling roughly 10× every 12–18 months as the industry scales. What costs £100 today to run at scale will cost £10 next year. But that doesn't mean you should ignore economics today — it means the right habit is *designing* for cost-efficiency, not just accepting whatever bill arrives.

---

## Where the Costs Accumulate

A single chat message costs almost nothing — a few pence at most. The cost problem emerges when you multiply:

**Agent loops.** Each step in an agent loop is a separate API call. A five-step loop costs five times the single-call price. A loop that goes wrong and retries costs more still.

**Context carry-forward.** Every step in an agent loop carries forward the full conversation history plus any tool results. By step five, you're paying to re-read everything from step one. Token counts grow super-linearly with loop depth.

**System prompts.** A 2,000-token system prompt is paid on every single API call. For a high-traffic application making 100,000 calls per day, that's 200 million input tokens per day just for the system prompt. Choose your words.

**RAG injection.** Retrieving and injecting five documents of 400 tokens each adds 2,000 tokens to every query. At scale, that's significant.

**Multi-agent overhead.** Every agent-to-agent communication in a fleet like OpenClaw is its own API call with its own context. The coordination cost of orchestration is real.

---

## The Cost-Quality-Latency Triangle

You cannot optimise all three simultaneously. Every system makes a trade-off:

```
            Quality
            (capability)
               ▲
              / \
             /   \
            /     \
           /       \
   Latency ◄───────► Cost
   (speed)          (price)
```

- **Frontier model, full context** → highest quality, highest cost, highest latency
- **Frontier model, compressed context** → good quality, moderate cost, moderate latency
- **Smaller model, full context** → moderate quality, low cost, low latency
- **Smaller model, compressed context** → lowest quality, lowest cost, lowest latency

The right answer depends on the task. A routing classification that takes 50ms and costs a fraction of a penny is fine on a smaller model. A complex strategic synthesis that a senior person will act on deserves a frontier model with full context.

**The professional mistake is using the same model for everything.** OpenClaw's gateway uses a small fast model for routing. The Nova tutor sessions use a capable reasoning model. Cipher uses a model optimised for precision. Different tools for different jobs.

---

## Budgeting for AI

Thinking about AI spend as an IT cost is the wrong frame. The right frame is: what is the value of the task being automated, and what percentage of that value does the API cost represent?

If Gina saves you 30 minutes of briefing preparation at a cost of £0.15 in tokens, the return is absurd. The economics only look bad when agents are used for low-value tasks, or when they're running inefficiently (unnecessarily large contexts, unnecessary steps, wrong model tier).

A practical budgeting approach:

1. **Classify tasks by tier** — high-stakes and complex (frontier model), routine and high-volume (mid model), classification and routing (small model)
2. **Measure token consumption per task type** — most providers give per-request breakdowns
3. **Set per-task budgets** — if a task costs more than £X in tokens, something has gone wrong with the design
4. **Monitor loops** — agents that run unexpectedly long loops are a sign of poor task specification or missing stopping conditions

---

## Three concepts to remember

1. **Costs compound in agent loops** — each step re-reads the full history; long loops with large contexts can cost 10–50× a single call.
2. **Match model tier to task value** — using a frontier model for a routing decision is wasteful; using a cheap model for a complex strategic task is a false economy.
3. **AI spend is an investment, not a utility bill** — the question is not "how much did we spend on tokens?" but "what value did those tokens produce?"

---

## Visual Aid

![[../assets/2026-03-28-llm-session-16.png]]

---

## Open Question

> Memrise will almost certainly embed AI into the learning experience at scale — potentially millions of interactions per day. At that volume, token economics become a product design constraint, not just an ops concern. How would you think about designing the product to be both high-quality and cost-efficient? Where would you spend the expensive tokens and where would you save?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- The landscape of model families — GPT, Claude, Gemini, open-source
- How to build a capability-versus-cost matrix and use it to make model selection decisions
- What "open source" actually means in the LLM context and when it makes sense to use it
