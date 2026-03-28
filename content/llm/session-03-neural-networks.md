---
track: llm
session: 3
title: "The Architecture: Neural Networks"
date: 2026-03-28
tags: [llm, neural-networks, weights, layers, forward-pass, ai-foundations]
visual: true
image_prompt: "Clean educational diagram showing a neural network with three visible layers (input, hidden, output). Neurons shown as circles connected by weighted arrows. Numbers flowing through the network. Labels: 'Input tokens', 'Hidden layers (weights)', 'Output logits'. Flat design, blue and white colour scheme, educational textbook style."
reuse: public
open_question_answered: false
---

# LLM — Session 3: The Architecture: Neural Networks

> *The model is not a database. It's a massive chain of multiplications — and somewhere in those numbers, meaning lives.*

---

## Where we left off

Session 2: the model is a probability machine that converts tokens into logits, applies softmax, and samples the next token. Temperature controls how adventurous the sampling is.

The question we parked: *what actually does the work between "tokens in" and "logits out"? What is the machine?*

---

## The simplest true statement

A neural network is a function that transforms numbers into other numbers by repeatedly multiplying them by *weights* — and the weights are what the model learned during training.

---

## Neurons, layers, and weights

Forget the biological metaphor. A neuron is just a number. A layer is just a list of numbers. A weight is just a multiplier.

Here's the simplest possible picture:

```
Input: [0.3, 0.7, 0.1]
         ↓ multiply by weights ↓
Hidden: [0.8, 0.2, 0.9, 0.4]
         ↓ multiply by weights ↓
Output: [2.1, -0.4, 5.8]   ← these are logits
```

Each number in one layer is connected to every number in the next. Each connection has a weight — a floating-point number like `0.847` or `-2.31`. The forward pass is just: multiply inputs by weights, add them up, apply an activation function, pass the results to the next layer, repeat.

A modern LLM has *billions* of weights. GPT-4 is estimated to have around 1.8 trillion parameters. Every one of those numbers was tuned during training to make the model better at predicting the next token.

---

## What weights actually store

This is the counterintuitive part: the weights don't store facts like a database. There's no row that says `capital_of_France = Paris`. Instead, knowledge is *distributed* across billions of weights — encoded in the relationship between numbers, not in any single location.

Think of it like a company's institutional knowledge. You can't point to one employee and say "that's where the knowledge lives." It's in the culture, the habits, the collective experience of thousands of decisions. If you delete one employee, you lose a little; if you delete half the company, things break badly.

| What it looks like | What it actually is |
|---|---|
| A fact database | A function approximator |
| Stored answers | Compressed statistical patterns |
| A lookup table | A chain of matrix multiplications |
| Retrieval | Computation |

This is why LLMs hallucinate. They're not retrieving facts — they're computing plausible continuations. Sometimes that computation arrives at something false with high confidence.

---

## The forward pass, step by step

When you send a prompt to an LLM, this is roughly what happens inside:

1. **Tokenise** — your text becomes a sequence of integers
2. **Embed** — each integer becomes a high-dimensional vector (more on this in Session 6)
3. **Layer 1** — those vectors are multiplied by the first set of weight matrices, producing new vectors
4. **Activation** — a non-linear function (like ReLU or GELU) is applied, allowing the network to learn complex patterns, not just linear ones
5. **Layers 2 through N** — same process, repeated. GPT-4 has 96 layers. Each layer refines the representation
6. **Final layer** — the output vectors are projected down to vocabulary size (100,000+ numbers)
7. **These are your logits** — the raw scores from Session 2

The whole thing — for a 1,000-token prompt — happens in a single forward pass. No memory of previous prompts (unless you've put them in context). No reasoning loop. Just one enormous matrix multiplication chain, start to finish, in roughly 200–500ms on modern hardware.

---

## Why depth matters

A shallow network (few layers) can only learn simple patterns. Depth is what allows the network to build *hierarchical* representations — early layers might learn syntax, middle layers grammar and facts, later layers abstract reasoning and style.

The analogy: a junior analyst can answer simple questions. A senior strategist who has processed thousands of decisions can handle nuance and contradiction. Depth in a neural network is what gives LLMs their ability to handle complex, multi-step reasoning — up to a point.

---

## Three concepts to remember

1. A neural network is a chain of matrix multiplications — weights are just floating-point numbers learned during training
2. Knowledge is distributed across billions of weights, not stored in any single location — which is why hallucination happens
3. The forward pass is one big computation, start to finish — the model isn't "looking things up," it's computing a result

---

## Visual Aid

![[../assets/2026-03-28-llm-session-3.png]]

---

## Open Question

> You now know that a model's weights are fixed after training — the forward pass is read-only. Nothing you say in a prompt *changes* the model. And yet, giving a model a worked example in your prompt ("few-shot prompting") can dramatically improve its output.
>
> If the weights don't change, why does showing the model an example in context make it smarter at the task? What do you think is happening?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- How those billions of weights got their values in the first place — the training loop
- What gradient descent is and why it's the engine of everything
- Why the size of the training dataset matters as much as the model architecture
