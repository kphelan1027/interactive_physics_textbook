---
track: llm
session: 2
title: "How does a model predict the next word?"
date: 2026-03-23
tags: [llm, probability, temperature, sampling, softmax, ai-foundations]
visual: /assets/2026-03-23-llm-prediction-session-2.png
visual_caption: "At every step, the model scores all 100,000+ tokens and samples from the resulting probability distribution."
reuse: public
open_question_answered: false
---

# LLM — Session 2: How does a model predict the next word?

> *It's not writing. It's choosing — from 100,000 possible next tokens, every single step.*

---

## Where we left off

Session 1: text gets converted into tokens (chunks → integers). The model never sees letters — only numbers.

Now the question is: given a sequence of tokens, how does the model decide what comes next?

---

## The simplest true statement

A language model is a *probability machine*. At every step, it assigns a probability to every single token in its vocabulary — all 100,000 of them — and picks one.

---

## What actually happens (step by step)

You type: `"The capital of France is"`

**Step 1 — Tokenise**
`["The", " capital", " of", " France", " is"]` → `[464, 3361, 286, 4881, 318]`

**Step 2 — Pass through the transformer**
The model processes all those tokens simultaneously — it's reading the whole context at once, not word by word.

**Step 3 — Output logits**
For every token in its vocabulary, the model outputs a *logit* — a raw score. Higher score = model thinks this token is more likely next.

`"Paris"` → logit: 8.4  
`"London"` → logit: 3.1  
`"pizza"` → logit: -2.1  

**Step 4 — Softmax converts logits to probabilities**
Softmax squashes all logits into a proper probability distribution that sums to 1.

`"Paris"` → 91.3%  
`"Lyon"` → 4.2%  
`"London"` → 1.8%  
...and so on for every token

**Step 5 — Sample**
The model picks a token. Usually, but not always, the highest-probability one.

---

## Temperature — the "creativity" dial

Temperature controls how peaked or flat that probability distribution is.

| Temperature | Effect | Use case |
|-------------|--------|----------|
| **0.0** | Always picks the top token. Fully deterministic. | Code generation, maths |
| **0.7** | Mild variation. Mostly sensible, slight creativity. | Most tasks |
| **1.0** | Default. Raw model probabilities, no adjustment. | Balanced |
| **1.5+** | Distribution flattens. Unlikely tokens get more chances. | Creative writing, brainstorming |
| **2.0** | Chaotic. Technically correct grammar, often nonsense. | Rarely useful |

**The key insight:** Temperature doesn't change what the model *knows*. It changes how *adventurous* the sampling is. A temperature of 0 on a bad model still gives bad output — just the same bad output every time.

---

## Why the same prompt gives different answers

Not a bug. The model is sampling from a probability distribution. Unless temperature = 0, there's always randomness in which token gets picked. Run it twice, get slightly different text.

This is also why setting `temperature: 0` in an API call is useful when you want reproducible outputs (code, structured data, yes/no answers).

---

## Three concepts to remember

1. At every step, the model scores all 100,000+ tokens — then picks one
2. Softmax converts raw scores into probabilities that sum to 1
3. Temperature controls how flat or peaked the distribution is — it's the creativity dial

---

## Open Question

> When temperature is 0, the model always picks the highest-probability token. So if you ask it "What is 2+2?", it will always say 4. Good.
>
> But here's a subtler question: if you ask "Write me a poem about the sea", with temperature 0 — what do you predict happens if you run it 10 times? Does the poem change at all, or is it *exactly* identical every time? And does that feel like a problem?
>
> *(Think about what "exactly the same output" implies for creative work.)*

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- How the transformer *reads* context — the attention mechanism
- Why models have a maximum context length (and what happens when you exceed it)
- What fine-tuning actually does vs base training
