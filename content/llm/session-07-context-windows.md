---
track: llm
session: 7
title: "Context Windows: Working Memory"
date: 2026-03-28
tags: [llm, context-window, memory, tokens, system-prompt, ai-foundations]
visual: true
image_prompt: "Diagram of a context window as a physical scrolling window of fixed width. Text tokens visible inside the window, some falling off the left edge (forgotten). A counter showing '128k tokens'. Labels: 'System prompt', 'Conversation history', 'Current query'. Flat design, teal and white, clean educational style."
reuse: public
open_question_answered: false
---

# LLM — Session 7: Context Windows: Working Memory

> *The model has no memory. It has a window — and everything outside it does not exist.*

---

## Where we left off

Session 6: embeddings convert tokens into vectors in high-dimensional space, and contextual embeddings update token meaning based on surrounding context. The key word there is *surrounding* — and the question of how much surrounding context the model can see brings us to the context window.

---

## The simplest true statement

The context window is the complete set of tokens the model can see during a single forward pass — and nothing outside it influences the output in any way.

---

## What a context window contains

When you send a message to Claude or GPT-4, the model doesn't just see your message. It sees an assembled document that typically includes:

1. **System prompt** — instructions set by the developer ("You are a helpful tutor called Nova...")
2. **Conversation history** — every prior message in the session, both user and assistant turns
3. **Retrieved documents** — if using RAG, the relevant chunks injected by the retrieval step
4. **Current user message** — what you just typed
5. **Partially generated response** — as the model generates, its own output becomes part of the context for the next token

All of this is serialised into a single flat sequence of tokens and fed into the model at once. The model processes it all simultaneously via attention.

```
[System prompt: 342 tokens]
[Turn 1 user: 47 tokens]
[Turn 1 assistant: 203 tokens]
[Turn 2 user: 88 tokens]
[Turn 2 assistant: 412 tokens]
...
[Current query: 31 tokens]
───────────────────────────
Total: 1,123 tokens used of 128,000 available
```

---

## Context window sizes, then and now

| Model | Context window | Approximate equivalent |
|---|---|---|
| GPT-2 (2019) | 1,024 tokens | ~750 words |
| GPT-3 (2020) | 4,096 tokens | ~3,000 words |
| GPT-4 (2023) | 8k / 32k tokens | ~24,000 words |
| Claude 3 (2024) | 200,000 tokens | ~150,000 words |
| Gemini 1.5 Pro | 1,000,000 tokens | ~750,000 words |

The expansion from 1k to 1M tokens in six years is one of the most practically significant changes in LLM capability — it's what enables "entire codebase in context," "full book summarisation," and multi-turn conversations without managed state.

---

## What happens when you run out

When the context fills up, something has to give. The behaviour varies by implementation:

- **Truncation** — oldest messages are dropped. Common in naive chatbot implementations. The model has no memory of early conversation turns.
- **Summarisation** — a secondary model compresses older history into a summary, which takes fewer tokens. Better, but lossy.
- **Sliding window** — only the most recent N tokens are included, with a fixed system prompt.
- **Explicit memory systems** — important facts are extracted and stored externally, retrieved when relevant. More complex to build.

The naive assumption — "just make the context window bigger" — runs into two problems. First, cost: tokens in context are priced per token, and a 1M-token context is expensive. Second, quality: there is good evidence that model quality degrades on information buried in the middle of very long contexts (the "lost in the middle" phenomenon from Session 5). A 200k context doesn't mean every position is attended to equally.

---

## The anatomy of prompt real estate

Think of the context window as physical space. Every token costs something, and the most important information should be placed where attention is strongest.

| Zone | Attention strength | Best use |
|---|---|---|
| **Beginning** | High | System prompt, key instructions, persona |
| **Middle** | Weakest | Supporting documents, retrieved context |
| **End** | High | Current query, most recent instructions |

This is why prompt engineers often repeat critical instructions at both the beginning and end of long prompts. It's not redundancy for aesthetics — it exploits known attention patterns.

---

## The model has no memory between sessions

This is the architectural reality that trips up most product builders. Once a conversation ends, the context is gone. The model has no persistent memory. Tomorrow, it has no idea who Kevin is, what you discussed yesterday, or what your learning goals are.

Building conversational continuity requires external infrastructure: storing conversation history in a database, retrieving relevant past sessions, injecting them into the context. The model itself does not do this — it can't.

This is why "memory" features in products like ChatGPT are product engineering, not model capability. The model is stateless. The product adds state.

---

## Practical implications for Memrise

| Scenario | Context window consideration |
|---|---|
| Nova tutoring session | System prompt + session history + current exchange. Need to manage history length. |
| Personalised learning path | User's skill state lives in a database, not the model's memory |
| Curriculum retrieval | Retrieved lesson content competes for tokens with conversation |
| Multi-session continuity | Must explicitly inject prior session summaries |

---

## Three concepts to remember

1. The context window is the complete input to the model — a single flat token sequence containing everything: system prompt, history, retrieved docs, and current message
2. Models have no memory between sessions — continuity is a product engineering problem, not a model capability
3. Context placement matters — information at the beginning and end of long contexts receives stronger attention than information in the middle

---

## Visual Aid

![[../assets/2026-03-28-llm-session-7.png]]

---

## Open Question

> Imagine you're designing Nova's memory system for Memrise. A learner has had 50 sessions with Nova over 6 months. That history is far too long to fit in any context window.
>
> What information from those 50 sessions actually matters for session 51? What should be stored, what should be summarised, what should be discarded entirely? And who — or what — decides?
>
> This is both a technical question (what fits in context?) and a pedagogical one (what does a great tutor *remember* about a student?).

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- The full inference pipeline: from typed prompt to generated tokens, step by step
- Temperature and sampling strategies — why the same prompt gives different answers
- Latency, cost, and the practical tradeoffs of running LLMs in production
