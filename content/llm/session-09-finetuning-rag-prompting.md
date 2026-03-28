---
track: llm
session: 9
title: "Fine-tuning vs Prompting vs RAG"
date: 2026-03-28
tags: [llm, fine-tuning, rag, prompting, retrieval, adaptation, ai-foundations]
visual: true
image_prompt: "Three-column comparison diagram. Column 1: 'Prompting' — a single prompt arrow going into a model box. Column 2: 'Fine-tuning' — training data arrows modifying the model weights. Column 3: 'RAG' — documents flowing into a search index, results injected into prompt context. Each column labelled with cost/complexity level. Flat design, three distinct pastel colours."
reuse: public
open_question_answered: false
---

# LLM — Session 9: Fine-tuning vs Prompting vs RAG

> *Three tools for making a model do what you need. They're not alternatives — they're a stack.*

---

## Where we left off

Session 8: inference is an autoregressive token-sampling loop. The model's weights are fixed; what varies is the context it receives. This leads directly to the practical question every AI product builder faces: how do I get the model to behave the way I need?

There are three primary approaches. Understanding when to use each is one of the most valuable things you can know as a CEO building AI products.

---

## The simplest true statement

Prompting shapes behaviour with words; RAG shapes it with retrieved facts; fine-tuning shapes it by modifying the weights themselves — and they solve different problems at different costs.

---

## Approach 1: Prompting

Prompting is the default — and it's more powerful than most people initially assume. A well-crafted system prompt can dramatically change a model's persona, output format, tone, reasoning style, and domain focus.

**What it changes:** The context the model sees. The weights remain unchanged.

**What it costs:** Engineering time. Iteration. The tokens themselves at inference time.

**What it does well:**
- Persona and tone adaptation ("You are Nova, a patient tutor...")
- Output format control ("Always respond in JSON with fields: x, y, z")
- Constraint setting ("Never discuss topics outside language learning")
- Few-shot examples ("Here are three examples of good responses...")

**What it struggles with:**
- Domain knowledge not in the training data
- Consistent style at scale without explicit examples
- Tasks requiring behaviour fundamentally different from base model defaults

```
Prompting is the right first move. Always exhaust prompting before
considering the other two approaches.
```

---

## Approach 2: RAG — Retrieval-Augmented Generation

RAG gives the model access to external knowledge at inference time without changing its weights. The process:

1. A user query arrives
2. The query is embedded (Session 6)
3. A vector database is searched for semantically similar documents
4. The top N retrieved documents are injected into the context
5. The model generates a response *informed by* the retrieved content

**What it changes:** The context the model sees. Still no weight changes.

**What it costs:** Infrastructure (vector database, embedding pipeline, chunking strategy), ongoing maintenance of the knowledge base, added latency per request.

**What it does well:**
- Grounding responses in up-to-date or proprietary knowledge
- Reducing hallucination on factual questions
- Answering questions about documents the model was never trained on
- Keeping knowledge current without retraining

**What it struggles with:**
- Reasoning that requires synthesising dozens of documents
- Tasks where retrieval quality is poor (garbage in, garbage out)
- Low-latency requirements — retrieval adds 50–200ms

| | Prompting | RAG |
|---|---|---|
| **Knowledge source** | Model's training data | External document store |
| **Freshness** | Fixed at training cutoff | Updated as docs update |
| **Setup cost** | Low | Medium |
| **Per-request cost** | Low | Medium (retrieval + injected tokens) |
| **Hallucination risk** | Higher | Lower (when retrieval works) |

---

## Approach 3: Fine-tuning

Fine-tuning continues training a model on your own dataset, updating the weights to change its behaviour. You start from a pre-trained or instruction-tuned model (not from scratch) and train for far fewer steps.

**What it changes:** The model's weights.

**What it costs:** Training compute (GPU-hours), labelled data, iteration cycles, and ongoing costs if you need to update as the model or requirements change.

**What it does well:**
- Baking in a consistent style or format so you don't need to instruct it every time
- Improving performance on a specific task where you have lots of labelled examples
- Teaching the model a domain-specific vocabulary or reasoning pattern
- Reducing inference cost — a fine-tuned small model can outperform a large prompted model on a specific task

**What it struggles with:**
- Injecting new factual knowledge reliably (use RAG for that)
- Generalising beyond the fine-tuning distribution
- Avoiding *catastrophic forgetting* — fine-tuning can degrade general capability
- Keeping up to date — you need to retrain when requirements change

---

## The decision framework

```
Start here: can you solve it with a prompt?
    │
    ├─ Yes → Ship it. Iterate on the prompt.
    │
    └─ No: why not?
          │
          ├─ Model doesn't have the facts → Add RAG
          │
          ├─ Model has the facts but behaves wrong → Fine-tune on examples
          │
          └─ Both → RAG + fine-tuned model (common in production)
```

In practice, most production AI products are layered:

| Layer | Technique |
|---|---|
| Base capability | Large pre-trained model |
| Behavioural alignment | RLHF / instruction tuning (done by provider) |
| Product-specific style | Fine-tuning or strong system prompt |
| Domain knowledge | RAG over product knowledge base |
| Per-request personalisation | Dynamic context injection in prompt |

---

## Common mistakes

**"We'll fine-tune to make it smarter."** Fine-tuning changes behaviour, not intelligence. You can't fine-tune a weak model into a strong one. If the base model lacks reasoning capability, fine-tuning on your data won't add it.

**"RAG will solve hallucination."** RAG reduces hallucination on facts present in retrieved documents. The model can still confabulate about facts not retrieved, or hallucinate about the documents themselves if context is long and attention is stretched.

**"We'll prompt our way to perfect reliability."** For high-stakes structured outputs (financial calculations, medical triage), reliability requires more than prompting. Structured output mode, constrained decoding, and verification loops are necessary.

---

## Three concepts to remember

1. Prompting costs the least and should always be tried first — it's more powerful than most builders initially believe
2. RAG is the right tool for grounding a model in proprietary or up-to-date knowledge without modifying the model
3. Fine-tuning changes the weights and is best for baking in consistent behaviour or style on a specific task — not for adding new factual knowledge

---

## Visual Aid

![[../assets/2026-03-28-llm-session-9.png]]

---

## Open Question

> You're building a Nova tutor feature for Memrise. Nova needs to: know Memrise's specific curriculum and content (not public), speak in a consistent, warm pedagogical voice, and give accurate answers about language learning science.
>
> Sketch out how you'd layer prompting, RAG, and fine-tuning. What does each layer handle? What would you build first, and what would you only add once you had evidence the simpler approach wasn't enough?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- RLHF: how models are trained to be helpful, not just accurate
- The reward model and why it's the hardest part of alignment
- What constitutional AI and RLAIF are and how they differ from classic RLHF
