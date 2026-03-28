---
track: llm
session: 18
title: "Benchmarks and Capabilities"
date: 2026-03-28
tags: [benchmarks, evaluation, MMLU, HumanEval, capabilities, measurement]
visual: true
image_prompt: "Dashboard-style infographic showing different benchmark scores for 3 models. Rows: MMLU (knowledge), HumanEval (coding), MATH (reasoning), MT-Bench (instruction following). Each model shown with a coloured bar. A 'caution' icon labelled 'benchmark gaming'. Flat design, clean data visualisation style, blue and red."
reuse: public
open_question_answered: false
---

# LLM — Session 18: Benchmarks and Capabilities

> *The leaderboard tells you who won the exam. It doesn't tell you who's best at the job.*

---

## Where we left off

In Session 17, we mapped the model landscape — Claude, GPT, Gemini, open-source — and built a framework for choosing between them. The framework included a critical caveat: always test empirically rather than trusting benchmarks alone. Today we examine why. What do benchmarks actually measure, where do they mislead you, and how should you think about evaluating models for your specific use case?

## The simplest true statement

Benchmarks measure model performance on a fixed set of tasks — but models can overfit to those tasks, and the tasks may not reflect what you actually need.

---

## The Major Benchmarks

A handful of benchmarks have become the standard currency for comparing models. Here's what they actually test:

| Benchmark | What it measures | Format |
|---|---|---|
| **MMLU** | Breadth of knowledge across 57 academic subjects | Multiple choice |
| **HumanEval** | Ability to write correct Python functions | Code generation |
| **MATH** | Mathematical reasoning and problem solving | Step-by-step problems |
| **MT-Bench** | Quality of responses to conversational instructions | Human rating |
| **GPQA** | Graduate-level scientific reasoning | Multiple choice |
| **SWE-bench** | Real-world software engineering tasks | Code generation |
| **MMMU** | Multimodal understanding (text + images) | Multiple choice |

Each of these captures something real. A model that scores well on HumanEval is genuinely better at writing code than one that scores poorly. A model that scores well on MMLU has, in some meaningful sense, absorbed more of the world's academic knowledge.

But each benchmark is a simplified proxy for a complex capability. And simplified proxies can be gamed.

---

## Why Benchmarks Lie

**Benchmark contamination.** Model training sets are scraped from the internet. Benchmark questions are published on the internet. The model may have seen the questions — and their answers — during training. This inflates scores without reflecting genuine capability. Researchers try to create "held-out" evaluations the model has never seen, but it's an arms race.

**Overfitting to the leaderboard.** When a benchmark becomes important, labs optimise for it. Fine-tuning runs, hyperparameter choices, even data curation decisions get made with benchmark scores in mind. The model improves on the benchmark faster than it improves on the underlying capability. This is Goodhart's Law: when a measure becomes a target, it ceases to be a good measure.

**Task mismatch.** MMLU tests academic knowledge. Your application might need creative writing, nuanced instruction-following in a specific domain, or reliable JSON output. A model that ranks first on MMLU may rank third on your actual task. The benchmark that matters is the benchmark for your task.

**Format sensitivity.** Multiple-choice benchmarks can be gamed by knowing which letter appears most often in the answer key. Coding benchmarks that check only whether code runs (not whether it's correct, readable, or maintainable) reward hacky solutions. The metric shapes the behaviour.

---

## The Chatbot Arena Exception

One benchmark that is harder to game: **Chatbot Arena** (lmarena.ai). Rather than testing against a fixed set of questions, it shows real users two model responses side by side and asks them to pick the better one — with the model identities hidden. Thousands of real users, millions of comparisons, across open-ended tasks.

Because the questions come from real users and are judged blindly by real users, contamination and leaderboard gaming are much harder. The Elo scores from Chatbot Arena tend to be more predictive of real-world user preference than academic benchmarks.

It's still not a perfect measure — users have biases (preferring longer, more confident-sounding answers, for example) — but it's the closest thing to a ground-truth measure of "which model do humans actually prefer?"

---

## Running Your Own Evaluations

For anything you're building, publish benchmarks are the starting point, not the ending point. You need evaluations on your specific tasks with your specific users.

A minimal evaluation framework:

1. **Collect a golden dataset** — 50–200 representative inputs from your actual use case, with expected outputs or human-rated quality scores
2. **Run multiple models** — test two or three candidates against your golden dataset
3. **Score systematically** — use a rubric (not vibes): does the output answer the question? Is the format correct? Is the information accurate? Is the tone appropriate?
4. **Use an LLM as judge** — for tasks where human rating doesn't scale, you can use a capable model (e.g., Claude Opus) to score outputs from other models. This is imperfect but much faster than human evaluation.
5. **Track regression** — once you've deployed a model, any subsequent model swap should be evaluated against your baseline. Upgrades sometimes regress on edge cases.

For Memrise specifically, a useful evaluation set would include: vocabulary explanation quality, exercise generation accuracy, feedback tone, and error recovery when a learner gives a wrong answer. These are very different from what MMLU measures.

---

## Capability vs. Reliability

One dimension benchmarks often miss: **reliability**. A model might produce an excellent answer 80% of the time and a confidently wrong answer 20% of the time. Another model might produce a good-but-not-excellent answer 99% of the time.

For a tutor application, reliability may matter more than peak capability. A learner who occasionally gets a wrong explanation is worse off than a learner who always gets a slightly conservative explanation. This is a product decision that benchmarks cannot make for you — it requires knowing your user and your context.

---

## Three concepts to remember

1. **Benchmark contamination and Goodhart's Law** mean published scores should be taken as directional signals, not ground truth — especially for models where training data sourcing is opaque.
2. **Chatbot Arena is more trustworthy than academic benchmarks** for predicting real-world user preference, because it uses real users on real tasks with blind comparison.
3. **Your evaluation is the only one that matters** — build a golden dataset from your actual use case and test models against it. Published benchmarks are a shortlist filter, not a final decision.

---

## Visual Aid

![[../assets/2026-03-28-llm-session-18.png]]

---

## Open Question

> Imagine you're deciding whether to switch OpenClaw from Claude Sonnet to a competitor model that's just topped a public leaderboard. What evaluation process would give you genuine confidence in the decision? What would you need to see before making the change?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- Context engineering — how to get the best out of whatever model you're using
- Managing the context window: what to include, what to compress, what to discard
- Bootstrap injection, memory tiers, and the art of designing prompts that scale
