---
track: llm
session: 19
title: "Context Engineering"
date: 2026-03-28
tags: [context, context-window, prompt-engineering, compression, memory, RAG]
visual: true
image_prompt: "Diagram of a context window divided into labelled zones: 'System prompt / identity' (top, fixed), 'Retrieved memories' (injected), 'Tool results' (recent), 'Conversation history' (compressed), 'Current user message' (bottom). Each zone a different shade of blue. Flat design, clean labels, educational."
reuse: public
open_question_answered: false
---

# LLM — Session 19: Context Engineering

> *The model is only as good as what you put in front of it. That's the whole game.*

---

## Where we left off

In Session 18, we examined how to evaluate models — benchmarks, their limitations, and why your own golden dataset is the evaluation that matters. Now we turn to a different question: once you've chosen your model, how do you get the best out of it? The answer is context engineering — the deliberate design of everything that goes into the context window before the model generates a response.

## The simplest true statement

Context engineering is the practice of deciding — precisely and intentionally — what information the model sees, in what order, and at what level of compression.

---

## The Context Window: A Constrained Resource

Every model has a context window — the maximum number of tokens it can process in a single call. Modern frontier models have windows ranging from 128,000 tokens (Claude, GPT-4o) to 1 million tokens (some Gemini variants). This sounds enormous. In practice, it fills up faster than you expect.

A rough sense of scale:

| Content | Approximate token count |
|---|---|
| This session's text | ~1,200 tokens |
| One full Nova session file | ~1,000–1,500 tokens |
| A typical company wiki page | ~500–1,000 tokens |
| A 10-page PDF | ~3,000–5,000 tokens |
| A 1-hour meeting transcript | ~8,000–12,000 tokens |
| A medium codebase file | ~2,000–5,000 tokens |

More importantly: every token in the context window costs money and adds latency. A 100,000-token context on Claude Sonnet costs roughly £0.30 per call in input tokens alone. For a high-traffic application, context bloat is a direct business cost.

The constraint forces discipline. Context engineering is the discipline.

---

## The Zones of a Context Window

A well-designed context window has distinct zones, each serving a specific purpose:

**1. System prompt / identity (fixed)**
This is the agent's constitution — who it is, how it behaves, what it must never do, what format it should use. It should be concise, precise, and stable. Every unnecessary word here costs money on every single call. For Nova, this zone establishes her identity as tutor, her voice, her curriculum scope, and her relationship to you.

**2. Bootstrap injection (semi-fixed)**
Contextual facts that the model needs to know about the current session but that don't change mid-conversation. For OpenClaw agents, this might include your name and role, today's date, the current session number, and any standing preferences you've set. Injected once per session, not repeated per turn.

**3. Retrieved memories (dynamic)**
Facts, past conversations, and relevant documents retrieved from the memory layer for this specific message. This is RAG in action — not a dump of everything, but a selective injection of what's relevant to the current query. Well-implemented retrieval here is the difference between an agent that seems to know you and one that starts from scratch every time.

**4. Tool results (recent)**
The outputs of tool calls made during the current agent loop. These are typically injected verbatim and then pruned from the context as soon as they're no longer needed. Retaining large tool results across many steps is a common source of context bloat.

**5. Conversation history (compressed)**
Previous turns in the current conversation. Full verbatim history is the most expensive context zone to maintain. At scale, you compress it: summarise older turns, retain only the most recent N turns verbatim, and use the memory layer for anything older that might be needed.

**6. Current user message (present)**
What you just said. Always at the bottom. The model pays special attention to what's most recent.

---

## Compression Strategies

When the context fills up, you have four options:

| Strategy | What it does | When to use |
|---|---|---|
| **Summarisation** | Replace old turns with a compact summary | Long-running conversations |
| **Selective retention** | Keep only the most recent N turns verbatim | Most conversations |
| **Tiered memory** | Archive old context, retrieve on demand | Very long sessions |
| **Topic reset** | Start a fresh context, inject a bootstrap | Task boundaries |

The goal is always the same: keep what's relevant, compress or discard what isn't. The model doesn't know what you've thrown away — it only sees what you've given it. This means the quality of your compression directly determines the quality of the model's continuity.

Nova uses this strategy across your sessions. The full text of each session is not re-injected every time you interact. Instead, a summary of completed sessions plus the current session file is injected. That's why Nova can reference earlier sessions without you having to remind her — but also why very specific phrasing from Session 3, say, might not be available verbatim.

---

## The Primacy and Recency Effect

Models pay different levels of attention to different parts of the context — a phenomenon called the "lost in the middle" problem. Information at the very beginning of the context (the system prompt) and at the very end (the most recent message) tends to be processed most reliably. Information buried in the middle of a long context is more likely to be missed or underweighted.

Practical implications:

- Put your most important instructions at the beginning (system prompt) and repeat key constraints near the end if they're critical
- Don't bury essential retrieved documents in the middle of a long context
- For very long contexts, explicit pointers help: "The most important document for this task is the one labelled [X]"

This is an empirical phenomenon, not a design choice — it emerges from how attention works in transformers. It will improve as models get better, but it hasn't gone away yet.

---

## Three concepts to remember

1. **The context window has zones** — each zone has a different purpose, cost, and freshness requirement. Design them deliberately rather than letting them accumulate organically.
2. **Compression is not optional at scale** — verbatim conversation history grows without bound; summarisation and selective retention are production requirements, not optimisations.
3. **Primacy and recency dominate** — put the most important information at the top (system prompt) and the most recent context at the bottom; information in the middle is most at risk of being underweighted.

---

## Visual Aid

![[../assets/2026-03-28-llm-session-19.png]]

---

## Open Question

> Nova's sessions with you are a form of context engineering — the curriculum, the session files, the running summary of what you've covered. If you were designing the ideal memory system for your own AI tutor, what would you want it to remember perfectly, what would you want it to remember approximately, and what would you want it to forget entirely?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- Reasoning models — what changes when a model thinks before it answers (o3, Claude 3.7 Sonnet)
- Multimodal capabilities — vision, audio, video, computer use
- The state of the frontier in 2026 and what's credibly coming next
