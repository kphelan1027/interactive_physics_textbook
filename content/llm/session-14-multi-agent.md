---
track: llm
session: 14
title: "Multi-Agent Systems"
date: 2026-03-28
tags: [multi-agent, orchestration, delegation, failure-modes, architecture]
visual: true
image_prompt: "Diagram showing orchestrator agent at top, with arrows delegating to three specialist sub-agents: 'Research Agent', 'Code Agent', 'Writing Agent'. Results flow back up. Labels show 'delegation' down and 'report' up. Like an org chart for AI. Flat design, purple and white, clean educational hierarchy."
reuse: public
open_question_answered: false
---

# LLM — Session 14: Multi-Agent Systems

> *One model is a brilliant individual contributor. A fleet of them is an organisation.*

---

## Where we left off

In Session 13, we went deep on RAG — how a specialised retrieval pipeline gives a model access to knowledge it was never trained on. That was one capability, one agent. Today we ask: what happens when you need multiple specialised capabilities working together? That's where multi-agent systems come in.

## The simplest true statement

A multi-agent system delegates tasks from an orchestrator to specialist agents, each optimised for a narrow job, and assembles their outputs into a coherent whole.

---

## Why One Agent Isn't Enough

A single agent can do many things. But "many things" is not the same as "all things, at once, reliably."

There are several reasons to split work across multiple agents:

**Context limits.** Every task a single agent handles competes for space in one context window. A complex research task, a coding task, and a writing task all running in the same context pollute each other and push out useful information.

**Specialisation.** An agent prompted and equipped specifically for code review will outperform a general-purpose agent asked to do code review. Domain-specific system prompts, tool sets, and even model choices (a small fast model for classification, a large capable model for synthesis) produce better results.

**Parallelism.** Some sub-tasks are independent. A single-threaded agent must do them sequentially. A multi-agent system can run them in parallel, collapsing hours of work into minutes.

**Auditability.** When something goes wrong in a multi-agent system, you can trace which agent produced the problematic output. In a monolithic single-agent system, everything is entangled.

---

## The Orchestrator Pattern

The most common multi-agent architecture has an orchestrator at the top and specialists below:

```
User Request
     ↓
Orchestrator Agent
     ↓          ↓          ↓
Research     Code       Writing
Agent        Agent      Agent
     ↓          ↓          ↓
     └──────────┴──────────┘
                ↓
         Final Output
```

The orchestrator's job is to:
1. Understand the full task
2. Break it into sub-tasks
3. Route each sub-task to the right specialist
4. Collect and integrate the results
5. Handle failures and retry logic

The specialists' jobs are narrow: receive a well-defined sub-task, execute it well, return a structured result.

This mirrors how high-performing human teams work. The project manager doesn't write all the code and all the copy and do all the research. They break the work down, assign it, and integrate what comes back. The quality of the orchestration determines the quality of the outcome — regardless of how capable the individual specialists are.

---

## Design Decisions That Matter

When building a multi-agent system, you make a series of choices that compound:

| Decision | Options | Trade-off |
|---|---|---|
| **Orchestration model** | Large capable model | Expensive but reliable coordination |
| **Specialist models** | Smaller faster models | Cheaper, lower latency |
| **Communication protocol** | Structured JSON vs free text | Reliability vs flexibility |
| **Failure handling** | Retry, skip, escalate, or halt | Speed vs correctness |
| **Human-in-the-loop** | None, checkpoint, approval | Autonomy vs oversight |

One common mistake: using the same large, expensive model for everything. The orchestrator benefits from a strong reasoning model (it's doing the hard coordination work), but many specialist tasks — summarising a document, classifying an intent, extracting structured data — can be done reliably with a smaller, cheaper model at a fraction of the cost.

---

## Failure Modes in Multi-Agent Systems

Multi-agent systems fail in ways single agents don't. Three failure modes to design around:

**Cascading errors.** If Agent A produces a bad output and Agent B uses it as input, Agent B's output will also be bad — often in ways that are harder to detect because they look internally consistent. Validate outputs at each handoff.

**Lost context.** As work passes between agents, nuance and constraints from the original request can get dropped. The orchestrator must carry forward the full intent, not just the immediate sub-task.

**Coordination overhead.** Every agent-to-agent communication is a latency cost and a potential failure point. Don't decompose tasks into agents unless the specialisation benefit outweighs the coordination cost. Not everything needs to be a multi-agent system.

The right question isn't "how many agents should I use?" It's "what is the minimum number of agents that lets each one do its job excellently?"

---

## Three concepts to remember

1. **Orchestrators coordinate; specialists execute** — the quality of the orchestration logic determines the quality of the whole system, even if every specialist is capable.
2. **Specialisation beats generalisation for narrow tasks** — a model with the right system prompt, tools, and context window will outperform a monolithic agent trying to do everything.
3. **Design for failure, not just success** — multi-agent systems introduce new failure modes (cascading errors, lost context) that require explicit handling at each handoff.

---

## Visual Aid

![[../assets/2026-03-28-llm-session-14.png]]

---

## Open Question

> Think about how Memrise as a company is organised — product, engineering, marketing, content, growth. If you were to map that structure onto an AI agent fleet, which function would you give the orchestrator role, and which would you build as specialists? What would the handoffs look like?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- How a real multi-agent system works in practice — Kevin's own OpenClaw fleet
- Sessions, skills, routing, and the gateway: the architecture behind the system you already use
- What Gina, Nova, Cipher, and the general agent each do, and how they're coordinated
