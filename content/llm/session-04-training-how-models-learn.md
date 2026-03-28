---
track: llm
session: 4
title: "Training: How Models Learn"
date: 2026-03-28
tags: [llm, training, gradient-descent, loss-function, scale, ai-foundations]
visual: true
image_prompt: "Educational diagram showing the training loop: a dataset feeds into a neural network, which produces a prediction, compared to actual answer producing 'loss'. An arrow labelled 'gradient descent' flows back through the network updating weights. Clean flat design, orange and white, circular loop structure."
reuse: public
open_question_answered: false
---

# LLM — Session 4: Training: How Models Learn

> *The model didn't read the internet. It was wrong about the internet, billions of times, until it wasn't.*

---

## Where we left off

Session 3: a neural network is a chain of matrix multiplications. The weights — billions of floating-point numbers — are what the model learned. The forward pass takes tokens in and logits out.

The question left open: where did those weight values come from? How does a model go from random numbers to something that can write coherent prose?

---

## The simplest true statement

Training is a loop: make a prediction, measure how wrong it was, adjust the weights slightly in the direction that reduces the error — then repeat, billions of times.

---

## What training data actually is

Every LLM is trained on text. Not annotated text, not text with "correct answers" attached — just raw text, at enormous scale.

The training objective is brutally simple: given the first N tokens of any piece of text, predict the (N+1)th token. That's it. The model sees `"The quick brown fox jumps over the lazy"` and must predict `"dog"`. Then it sees `"The quick brown fox jumps over the lazy dog"` and must predict `"."`.

This is called *next-token prediction*, and it's done across hundreds of billions — sometimes trillions — of tokens drawn from books, Wikipedia, code repositories, scientific papers, forums, and most of the crawlable web.

The astonishing thing is that predicting the next word turns out to be a sufficient objective to learn grammar, facts, reasoning, coding, poetry, and persuasion — because to predict well, you have to compress all of human written knowledge into your weights.

---

## The training loop

```
1. Take a batch of text from the training data
2. Tokenise it
3. Forward pass: model predicts the next token at each position
4. Calculate loss: how wrong were the predictions?
5. Backpropagation: calculate how much each weight contributed to the error
6. Gradient descent: nudge each weight slightly in the direction that reduces loss
7. Repeat for the next batch
```

A modern training run repeats this loop for weeks or months across thousands of GPUs, processing the equivalent of millions of books.

---

## Loss functions and why they matter

The *loss* is a single number that measures how wrong the model is. For language models, the standard loss is *cross-entropy loss* — roughly, how much probability mass did the model assign to the correct token?

| Loss value | What it means |
|---|---|
| **High** | Model was confident and wrong, or uncertain across the board |
| **Low** | Model assigned high probability to the correct token |
| **Zero** | Model predicted every token perfectly (impossible in practice) |

The goal of training is to minimise this number — averaged across every token in the training set. The model never sees a "score" or "grade." It only sees: "here's how wrong you were on this token, now adjust."

---

## Gradient descent: the engine of learning

Imagine you're blindfolded on a hilly landscape, trying to find the lowest point. You can't see the terrain — you can only feel the slope beneath your feet. Your strategy: take a small step in whichever direction feels downhill, then reassess.

That's gradient descent. The "landscape" is the loss surface — a function defined over all billions of weight values. The slope is the *gradient* — a vector that points in the direction of steepest increase. The model moves in the *opposite* direction.

*Backpropagation* is the algorithm that efficiently computes which direction is "downhill" for each weight, using the chain rule from calculus. You don't need to understand the maths — just understand that it tells the model: "this weight should be slightly bigger," "this weight should be slightly smaller," with a precise amount for each.

---

## Why scale matters

The three levers of LLM capability are:

| Lever | What it means | Why it matters |
|---|---|---|
| **Model size** | Number of weights (parameters) | More capacity to store patterns |
| **Training data** | Tokens seen during training | More examples to learn from |
| **Compute** | GPU-hours spent training | Enables more steps of gradient descent |

The *scaling laws* (Kaplan et al., 2020) showed that these three factors interact predictably — doubling compute while holding the others constant produces a log-linear improvement in loss. This is what gave the field confidence that bigger models trained on more data would keep getting better, and triggered the race to scale.

The practical implication for a product builder: a model trained on 10x more data isn't 10x better — it's incrementally better in ways that compound surprisingly. The jump from GPT-3 to GPT-4 wasn't a breakthrough in architecture. It was largely scale plus better data curation plus RLHF (which we'll cover in Session 10).

---

## Three concepts to remember

1. Training is next-token prediction repeated across hundreds of billions of examples — the objective is simple; the emergent capabilities are not
2. Gradient descent nudges weights toward lower loss — backpropagation tells it which direction, for each of billions of weights, efficiently
3. Scale (model size, data, compute) predicts capability in a log-linear relationship — bigger is reliably better, with diminishing returns

---

## Visual Aid

![[../assets/2026-03-28-llm-session-4.png]]

---

## Open Question

> A model trained purely on next-token prediction has no concept of "helpful" or "harmful." It just predicts what text looks like. This means a base model, asked "how do I pick a lock?", would happily continue that sentence — because the training data contains lockpicking tutorials.
>
> Training on human text creates a model that mirrors human writing — including its biases, errors, and dark corners. At this point in your understanding, how would you start to make a model that's not just accurate, but *good*? What would you change?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- The transformer architecture — why attention was a breakthrough over previous approaches
- How the model reads context: self-attention and why it matters for long documents
- Why transformers parallelise well and what made them dominate the field
