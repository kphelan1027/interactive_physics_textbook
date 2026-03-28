---
track: llm
session: 8
title: "From Prompt to Token: The Inference Pipeline"
date: 2026-03-28
tags: [llm, inference, sampling, temperature, latency, tokenisation, ai-foundations]
visual: true
image_prompt: "Pipeline diagram showing: User types prompt → tokenisation → context window assembly → transformer forward pass → logit output → temperature scaling → sampling → detokenise → text output. Each step shown as a box with arrows. Colour-coded by stage. Flat design, green and white, horizontal flow."
reuse: public
open_question_answered: false
---

# LLM — Session 8: From Prompt to Token: The Inference Pipeline

> *Between your keystroke and the first word of the response, more computation happens than you'd expect.*

---

## Where we left off

Session 7: the context window is the complete input to the model — everything it can see, serialised into a flat sequence of tokens. Nothing outside that window exists.

Now we trace what happens from the moment you send a message to the moment the model starts responding — the full inference pipeline, end to end.

---

## The simplest true statement

Inference is the process of running a trained model to generate output — and it happens one token at a time, in a tight loop, until the model decides it's done.

---

## The pipeline, step by step

### Step 1: Tokenisation

Your message is converted from text to integers using the model's tokeniser (as covered in Session 1). This is deterministic and fast — usually microseconds.

### Step 2: Context window assembly

The API layer assembles the full context: system prompt + conversation history + any retrieved documents + your current message. This is where prompt engineering decisions manifest. The assembled context is a flat list of token IDs.

### Step 3: Prefill — processing the context

The full context is passed through the transformer in one forward pass. All tokens attend to all prior tokens simultaneously. This is computationally expensive for long contexts — cost scales roughly with the square of context length (the quadratic attention problem from Session 5).

The output of this pass is a *KV cache* — the key-value matrices computed for each token at each attention layer, stored so they don't need to be recomputed on subsequent steps.

### Step 4: Logit generation

The final transformer layer outputs one vector of logits — one score per token in the vocabulary (typically 100,000+ values). This represents the model's belief about what token should come next.

### Step 5: Temperature scaling and sampling

The logits are divided by the temperature value, then softmax is applied to produce probabilities. A sampling strategy then picks the next token:

| Strategy | What it does | When to use |
|---|---|---|
| **Greedy** (temp=0) | Always picks the highest-probability token | Deterministic tasks: code, maths |
| **Temperature sampling** | Samples from the probability distribution | Creative writing, conversation |
| **Top-K** | Samples only from the K most likely tokens | Reduces incoherent outputs |
| **Top-P (nucleus)** | Samples from tokens whose cumulative probability reaches P | Adaptive, widely used default |
| **Beam search** | Explores multiple candidate sequences | Translation, structured output |

In practice, most APIs use top-P sampling with temperature. Claude's defaults are tuned to balance coherence and naturalness without explicit user configuration.

### Step 6: Detokenisation

The selected token ID is converted back to text and streamed to the user. The token is then appended to the context (the KV cache is extended), and the process returns to Step 4 for the next token.

This is the *autoregressive loop*: each token becomes part of the context for the next.

---

## Why generation feels slow (and why it's getting faster)

The prefill step (processing your input) is fast — it's parallelised across GPUs. The decode step (generating tokens one at a time) is the bottleneck — it's inherently sequential.

A typical LLM generates 20–80 tokens per second on modern inference hardware. For a 500-word response, that's 670 tokens ÷ 50 tokens/second = ~13 seconds to full completion, though streaming makes this feel faster because you see words as they arrive.

Techniques to speed up inference:

| Technique | What it does |
|---|---|
| **KV caching** | Avoids recomputing attention for tokens already processed |
| **Speculative decoding** | A small fast model drafts several tokens; a large model verifies them in parallel |
| **Quantisation** | Reduces weight precision from float32 to int8, shrinking memory and speeding up matmuls |
| **Batching** | Processes multiple user requests simultaneously on the same GPU |

---

## What "streaming" actually means

When you see text appear word by word in the ChatGPT or Claude interface, the model isn't computing the full response and then displaying it — it's literally streaming each token as it's sampled. The model has no idea how long the response will be until it generates an end-of-sequence token.

This is why you sometimes see the model start a list, reach an unexpected turn, and abandon the structure mid-way. It committed to tokens before it knew where it was going. Generation is irrevocable — the model cannot backtrack.

---

## Latency, cost, and the engineering tradeoffs

| Factor | Effect on latency | Effect on cost |
|---|---|---|
| Longer context | Increases prefill time | Increases per-request cost |
| Larger model | Slower decode | Higher per-token cost |
| More output tokens | Proportionally slower | Proportionally more expensive |
| Streaming | No latency change — better UX | Same cost |
| Caching repeated prefixes | Faster for shared context | Reduced cost on cached tokens |

For a product builder: output tokens cost roughly 3-5x more than input tokens on most provider pricing. This matters for features like automated summarisation where you're generating a lot of output. Design prompts that get to the point — every token of preamble costs money and latency.

---

## Three concepts to remember

1. Inference is an autoregressive loop — one token is sampled at a time, appended to the context, and the process repeats until an end token is generated
2. The prefill step (processing input) is fast and parallelised; the decode step (generating output) is the sequential bottleneck
3. Sampling strategy — temperature, top-K, top-P — determines how the model selects from the probability distribution at each step; choosing the right strategy matters for task quality

---

## Visual Aid

![[../assets/2026-03-28-llm-session-8.png]]

---

## Open Question

> Streaming gives you tokens as they're generated, making the experience feel fast. But consider a feature like Nova giving a structured lesson — with a clear introduction, key concepts in order, and a summary at the end.
>
> The model doesn't know it's going to write a summary until it gets there. It can't look ahead. So it might front-load interesting content, then run out of steam, or structure things poorly.
>
> How would you design a product or prompt to get reliably structured output from a model that cannot plan ahead? What are the tradeoffs of each approach?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- Fine-tuning, prompting, and RAG — three different ways to adapt a model's behaviour
- What each approach costs in time, money, and complexity
- When to use which — and when to combine them
