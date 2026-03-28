---
track: llm
session: 5
title: "Transformers: Attention is All You Need"
date: 2026-03-28
tags: [llm, transformers, attention, self-attention, architecture, ai-foundations]
visual: true
image_prompt: "Clean educational diagram showing attention mechanism: a row of input tokens at the bottom, with coloured lines of varying thickness connecting each token to every other token, representing attention weights. One token highlighted with bright yellow showing it 'attending' strongly to two other tokens. Label: 'Self-attention'. Flat design, purple and white, minimalist educational style."
reuse: public
open_question_answered: false
---

# LLM — Session 5: Transformers: Attention is All You Need

> *Every word watches every other word simultaneously — and that changes everything.*

---

## Where we left off

Session 4: training is next-token prediction at scale. Gradient descent adjusts billions of weights over weeks of computation until the model becomes good at predicting text. The architecture that made this possible at scale is the transformer.

The question now: what is a transformer, and why did it beat everything that came before it?

---

## The simplest true statement

The transformer's breakthrough insight is *attention*: instead of processing tokens one at a time in sequence, every token looks at every other token simultaneously and decides how much to attend to each one.

---

## Before the transformer: the problem with sequences

Before 2017, the dominant approach to language modelling was *recurrent neural networks* (RNNs). They processed text like you'd read a novel: one word at a time, left to right, maintaining a hidden state that summarised what came before.

This created two serious problems:

1. **The long-range dependency problem.** By the time you processed token 500, the information from token 1 had been squeezed through 499 intermediate steps. It was like playing telephone across 499 people — meaning got garbled.

2. **Parallelisation was impossible.** To process token N, you needed the hidden state from token N-1. Training on thousands of GPUs was therefore bottlenecked — you couldn't split the work up.

The transformer solved both problems in one move.

---

## Attention: how it works

Self-attention allows every token to directly look at every other token, without going through intermediate steps. The mechanism works like a query-key-value lookup:

- **Query:** "What am I looking for?"
- **Key:** "What do I offer?"
- **Value:** "What information do I contain?"

Every token generates all three. The attention score between two tokens is computed by comparing the query of one with the key of the other. High score = high attention = more information flows between them.

A concrete example. Consider: `"The bank by the river was steep."`

When the model processes `"bank"`, it needs to resolve whether bank means a financial institution or a riverbank. The attention mechanism lets it look directly at `"river"`, score that connection as highly relevant, and use the value from `"river"` to inform its representation of `"bank"`. No intermediate steps. Direct.

| Token | Attends strongly to | Why |
|---|---|---|
| `bank` | `river`, `steep` | Resolving ambiguity |
| `steep` | `bank`, `river` | Understanding the scene |
| `was` | `bank` | Grammatical agreement |

---

## Multi-head attention

Rather than computing attention once, the transformer computes it many times in parallel — each time with different query/key/value matrices. These are called *attention heads*.

Each head learns to attend to different types of relationships. One head might specialise in grammatical structure (subject-verb agreement), another in coreference (matching pronouns to their referents), another in semantic similarity. The outputs are concatenated and combined.

A typical LLM has 32–96 attention heads per layer, and 32–96 layers. That's thousands of attention patterns, each refining the representation from the previous layer.

---

## Why this beat everything

The transformer's advantages for large-scale training:

| Property | RNN | Transformer |
|---|---|---|
| **Parallelisable** | No — sequential by design | Yes — all tokens processed simultaneously |
| **Long-range dependencies** | Degrades with distance | Direct, no degradation |
| **Scales with compute** | Poorly | Extremely well |
| **Training speed on GPUs** | Slow | Fast |

The 2017 paper "Attention is All You Need" (Vaswani et al.) proposed removing the recurrent component entirely — keeping only attention and a feed-forward network at each layer. This is the architecture behind every major LLM in use today: GPT, Claude, Gemini, LLaMA.

The name wasn't just catchy. It was accurate.

---

## What this means for product builders

Attention is why LLMs are sensitive to *where* you put information in a prompt. Different positions in the context window receive different attention patterns. Crucially, models tend to attend more strongly to information near the beginning and end of the context — the "lost in the middle" phenomenon. If you're building a RAG system and dropping retrieved documents into the middle of a 100k context, the model may effectively ignore them.

Understanding attention helps you design prompts and architectures that work *with* how the model routes meaning, not against it.

---

## Three concepts to remember

1. Attention lets every token directly look at every other token — solving the long-range dependency problem that crippled RNNs
2. Multi-head attention runs many attention patterns in parallel, each specialising in different linguistic relationships
3. The transformer's parallelisability is what made modern large-scale training possible — it's why this architecture won

---

## Visual Aid

![[../assets/2026-03-28-llm-session-5.png]]

---

## Open Question

> Attention is computed between every pair of tokens. For a sequence of N tokens, that's N² comparisons. A 10-token sentence: 100 comparisons. A 128,000-token context window: 16 billion comparisons — per layer, per forward pass.
>
> This is called the *quadratic scaling problem* of attention. As context windows get longer, the compute cost explodes. Researchers are actively working on alternatives (sparse attention, linear attention, state-space models like Mamba).
>
> From a product strategy perspective: if quadratic attention is a fundamental constraint, what does that imply for the ceiling of useful context window size? Is "infinite context" a tractable goal, or is there a point where the model is paying attention to so much it effectively attends to nothing?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- Embeddings: how tokens become vectors that carry meaning in high-dimensional space
- Why similar concepts cluster together in embedding space
- What embeddings enable for search, recommendations, and semantic retrieval
