---
track: llm
session: 17
title: "Model Families"
date: 2026-03-28
tags: [models, GPT, Claude, Gemini, open-source, Llama, model-selection]
visual: true
image_prompt: "2x2 matrix diagram. X axis: Cost (low to high). Y axis: Capability (low to high). Quadrants labelled. Dots showing: GPT-4o (high-high), Claude Sonnet (mid-high), Gemini Flash (low-mid), Llama 70B (low-mid, open source), Claude Haiku (low-low). Clean flat design, teal and white, product decision tool aesthetic."
reuse: public
open_question_answered: false
---

# LLM — Session 17: Model Families

> *The market for intelligence is real. Here's how to shop it.*

---

## Where we left off

In Session 16, we worked through token economics — what running agents actually costs, how costs compound in loops, and how to match model tier to task value. Now you know how to price a model choice. Today we look at the choice itself: what are the main model families, what are their genuine differences, and how do you decide which one to use?

## The simplest true statement

Model families differ meaningfully in capability, cost, latency, and licence — and the right choice depends on your task, your volume, and whether you need to keep data on your own infrastructure.

---

## The Three Major Closed-Source Families

**Anthropic / Claude**

Claude is the model powering OpenClaw, including Nova. Anthropic's distinctive focus is on safety and reliability — Claude tends to be more cautious, more willing to say "I don't know," and more resistant to prompt injection and jailbreaking than its competitors. This makes it well-suited for agentic work where an overconfident model that proceeds on faulty assumptions is a significant risk.

The Claude family currently spans Haiku (fast, cheap), Sonnet (balanced), and Opus (most capable). Claude Sonnet is frequently the sweet spot: strong reasoning, good instruction-following, acceptable cost.

**OpenAI / GPT**

GPT-4o and its variants are the most widely deployed frontier models. The ecosystem around them is enormous — more third-party tooling, more community documentation, more integrations than anything else. GPT-4o mini is an exceptional mid-tier model: genuinely capable, very cheap, and fast. If you're building a product feature that will run at Memrise scale and needs high volume, GPT-4o mini is worth serious consideration.

OpenAI also has the o-series reasoning models (o3, o4) — we'll cover those in Session 20. These are purpose-built for complex multi-step reasoning and are a different category from the standard chat models.

**Google / Gemini**

Gemini's flagship is its multimodal capability — handling text, images, audio, and video natively rather than as bolt-ons. Gemini Flash is fast and cheap; Gemini Ultra is their frontier offering. Google's advantage is infrastructure: they can run inference at a scale nobody else can match, and Gemini is increasingly embedded in Google Workspace, which matters if your organisation lives in Google tools.

Gemini's context window (up to 1 million tokens for some variants) is the largest in the industry by a significant margin — useful for analysing very long documents or large codebases in one shot.

---

## Open-Source Models: When They Make Sense

"Open source" in LLM land means the weights are publicly available — you can download and run the model yourself, without calling any provider's API.

The main open-source families:

| Family | Organisation | Notable model | Strengths |
|---|---|---|---|
| **Llama** | Meta | Llama 3.3 70B | Strong general capability, widely supported |
| **Mistral** | Mistral AI | Mistral Large | Good European data handling, efficient |
| **Qwen** | Alibaba | Qwen 2.5 72B | Strong multilingual, good for Asian languages |
| **DeepSeek** | DeepSeek | DeepSeek V3 | Exceptional at reasoning and code |
| **Gemma** | Google | Gemma 3 | Small, efficient, embeddable |

Open-source makes sense when:

- **Data privacy requires it** — you cannot send user data to a third-party API. Memrise's learner data, for example, might have jurisdictional constraints that make on-premises deployment necessary.
- **Volume is high enough** — at sufficient scale, running your own inference is cheaper than paying per token. The break-even point depends on your infrastructure costs.
- **You need fine-tuned control** — you can fine-tune open-source models on your data in ways you cannot do with closed-source APIs.
- **Latency is critical** — running on-premises eliminates the network round-trip to a provider's API.

The cost of open-source is engineering complexity. You're now responsible for model hosting, scaling, updates, and security. That's a meaningful operational commitment.

---

## A Model Selection Framework

When choosing a model for a specific use case, work through these questions in order:

| Question | If yes → | If no → |
|---|---|---|
| Does data privacy require on-premises? | Open-source, self-hosted | Continue |
| Is this a reasoning-intensive task? | Frontier model or reasoning model | Continue |
| Is volume high enough to care about cost? | Mid-tier or open-source | Frontier is fine |
| Is latency critical (< 500ms)? | Small model or cached | Larger model acceptable |
| Do you need multimodal (vision/audio)? | Gemini, GPT-4o, or Claude 3 | Text-only fine |

For most tasks at most organisations today, a mid-tier model (Claude Sonnet, GPT-4o) is the right starting point. You can move up (more capability) or down (cheaper) from there based on empirical testing.

---

## The Meta-Lesson

The model landscape changes every few months. GPT-4 was state of the art in early 2023; by late 2024 it was mid-tier; by 2026 it's commoditised. Any specific recommendation will be out of date quickly.

What doesn't change is the framework: match model capability to task complexity, match model cost to task value, and always test empirically rather than trusting benchmarks alone. We'll look at why benchmarks are unreliable in the next session.

---

## Three concepts to remember

1. **Families have distinct personalities** — Claude is cautious and reliable, GPT has the largest ecosystem, Gemini has the largest context window and best multimodal. These are real differences, not just marketing.
2. **Open-source is a build-vs-buy decision** — cheaper at scale, required for data privacy, but comes with a real engineering and operational cost.
3. **The landscape changes faster than your intuitions** — build a framework for model selection, not a specific preference. The model you should use today is probably not the one you should use in 12 months.

---

## Visual Aid

![[../assets/2026-03-28-llm-session-17.png]]

---

## Open Question

> Memrise serves learners in many languages and many countries, with data that has privacy implications. That combination — multilingual, privacy-sensitive, potentially high-volume — creates a specific set of constraints on model selection. If you were making the call today, which model family would you bet on as the backbone of Memrise's AI infrastructure, and why?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- How model capability is actually measured — benchmarks, leaderboards, and why they're both useful and misleading
- The specific benchmarks you'll encounter (MMLU, HumanEval, MT-Bench) and what they actually test
- How to run your own evaluations rather than trusting published scores
