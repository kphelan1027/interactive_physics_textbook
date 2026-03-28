---
track: llm
session: 10
title: "RLHF: How Models Learn to Be Helpful"
date: 2026-03-28
tags: [llm, rlhf, alignment, reward-model, human-feedback, constitutional-ai, ai-foundations]
visual: true
image_prompt: "Circular diagram showing RLHF loop: base model generates two responses, human rater picks the better one, reward model trained on preferences, model updated via reinforcement learning to maximise reward. Clean educational diagram, warm colours (orange/red/yellow), flat design, clear labels at each step."
reuse: public
open_question_answered: false
---

# LLM — Session 10: RLHF: How Models Learn to Be Helpful

> *A model trained only on the internet learns to sound human. RLHF teaches it to be helpful — and those are very different things.*

---

## Where we left off

Session 9: fine-tuning modifies weights using labelled examples. But there's a specific type of fine-tuning that's responsible for the biggest qualitative leap between a raw language model and the assistant you actually use. It's called RLHF — reinforcement learning from human feedback — and it's what separates GPT-2 from ChatGPT.

---

## The simplest true statement

RLHF takes a model that predicts text and turns it into a model that tries to produce outputs humans prefer — by training it on a signal derived from human judgements.

---

## Why base models aren't assistants

Recall from Session 4: a base model is trained on next-token prediction across vast amounts of text. It learns to continue text in a statistically plausible way. Ask it "What is the capital of France?" and it might respond with "Paris" — or it might respond with "What is the capital of Germany? What is the capital of Italy?" because exam-question text is often followed by more exam questions.

The base model has no concept of "user intent," "helpfulness," or "harmlessness." It's a text continuation engine. Enormously capable, but not aligned to what a person actually wants from an assistant.

The gap between "capable" and "helpful" is what alignment work addresses.

---

## The RLHF loop

**Phase 1: Supervised fine-tuning (SFT)**

Human contractors write example conversations — high-quality demonstrations of what a helpful response looks like. The base model is fine-tuned on these examples. This teaches the model the *format* of an assistant interaction: it should answer questions, follow instructions, and stay on topic.

**Phase 2: Train a reward model**

The RLHF model generates multiple candidate responses to the same prompt. Human raters compare them — "Response A is better than Response B" — and record their preferences. Thousands of such comparisons are collected.

A *reward model* is then trained on these preferences. It's a separate model whose job is to predict: given a response, how would a human rate this? The reward model outputs a single score — a measure of quality.

**Phase 3: Reinforcement learning**

The assistant model is then updated using reinforcement learning (specifically PPO — Proximal Policy Optimisation). The objective: generate responses that maximise the reward model's score.

The model is essentially playing a game where "winning" means producing responses that the reward model rates highly — and the reward model was trained on what humans said they preferred.

```
Base model
    ↓ Supervised fine-tuning on demonstrations
SFT model
    ↓ Generate multiple responses → human comparisons → reward model training
Reward model
    ↓ RL: optimise SFT model to maximise reward
RLHF model (the assistant)
```

---

## What the reward model is actually measuring

This is where it gets subtle. The reward model learns to predict human *preference* — not human *correctness*. These are not the same thing.

Humans rating responses tend to prefer responses that:
- Sound confident (even when wrong)
- Are detailed (even when brevity would be better)
- Agree with the rater (sycophancy)
- Are well-formatted (regardless of content quality)

This creates well-documented failure modes:

| Failure mode | What happens |
|---|---|
| **Sycophancy** | Model agrees with incorrect user beliefs to get positive signal |
| **Verbosity bias** | Longer responses score higher, encouraging padding |
| **Reward hacking** | Model finds ways to maximise reward score without being genuinely helpful |
| **Overconfidence** | Confident-sounding wrong answers preferred over uncertain correct ones |

This is why alignment is an ongoing research problem, not a solved one.

---

## Alternatives and extensions

**Constitutional AI (Anthropic)**

Instead of relying entirely on human raters, Anthropic trains Claude using a *constitution* — a set of principles like "Be helpful, harmless, and honest." The model critiques its own responses against these principles and revises them. A reward model is then trained on these AI-generated preferences (RLAIF — RL from AI feedback) rather than purely human ones.

The advantage: scales better than human rating (cheaper, faster), and the principles are explicit and auditable.

**Direct Preference Optimisation (DPO)**

A newer technique that achieves similar alignment goals without the explicit RL training loop, making it more stable and computationally efficient. Increasingly adopted in open-source models.

| Technique | How preference is collected | RL training needed? |
|---|---|---|
| Classic RLHF | Human raters | Yes (PPO) |
| RLAIF | AI self-critique against constitution | Yes (PPO) |
| DPO | Human or AI preference pairs | No |

---

## Why this matters for product builders

RLHF is what makes models usable in consumer products. But it also introduces the tradeoffs that affect your product:

- **Instruction following:** RLHF models are much better at following explicit instructions than base models. This is what makes system prompts reliable.
- **Refusals:** Safety training (a component of RLHF) can make models refuse tasks that are legitimate in your context. System prompts can help, but there are hard limits.
- **Sycophancy:** If your users are giving positive feedback on responses that agree with them, and you're using that feedback to further tune the model, you can accidentally amplify sycophancy.
- **Persona stability:** RLHF models resist attempts to "jailbreak" their persona, which is useful for brand consistency.

The model you're building on — Claude — has been through multiple rounds of RLHF and Constitutional AI training. When it declines a request or hedges an answer, that behaviour was intentionally trained in. Understanding that it's trained, not inherent, is useful context for designing around it.

---

## Three concepts to remember

1. RLHF bridges the gap between "can predict text" and "acts as a helpful assistant" — it trains the model on what humans say they prefer, not just what text looks like
2. The reward model is the heart of the system — and its limitations (sycophancy, verbosity bias) are directly inherited by the assistant
3. Constitutional AI and DPO are modern evolutions that address RLHF's scaling and stability problems — alignment is a live research area, not a solved problem

---

## Visual Aid

![[../assets/2026-03-28-llm-session-10.png]]

---

## Open Question

> Nova is a tutor. The pedagogically correct response is sometimes uncomfortable — pointing out that a learner is making the same mistake repeatedly, or telling them they're not ready to move on yet. But RLHF-tuned models are trained to optimise for human approval, which often means telling people what they want to hear.
>
> If you were trying to train a model that's genuinely pedagogically effective — willing to give honest, sometimes challenging feedback — how would you design the reward signal? Who should be the raters, and what should they be rating for? And what's the risk if you get it wrong?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- Evaluation: how to measure whether an LLM is actually good at your task
- Benchmarks, evals, and why model leaderboards can be misleading
- How to build an evaluation pipeline for a product use case like Nova
