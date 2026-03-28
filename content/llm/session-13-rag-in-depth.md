---
track: llm
session: 13
title: "RAG in Depth"
date: 2026-03-28
tags: [RAG, retrieval, vector-search, embeddings, fine-tuning]
visual: true
image_prompt: "RAG architecture diagram: user query → embedding model → vector database search → top-K documents retrieved → injected into LLM context alongside query → LLM generates grounded answer. Clean horizontal flow with a vector database shown as a cylinder with dots. Flat design, blue and orange, educational."
reuse: public
open_question_answered: false
---

# LLM — Session 13: RAG in Depth

> *How to give a model knowledge it was never trained on — without retraining it.*

---

## Where we left off

In Session 12, we saw how agents use tools to act in the world — calling APIs, running code, retrieving data. One of the most important tool categories was information retrieval: reaching out to external knowledge sources. Today we go deep on the most common form of that retrieval: RAG, or Retrieval-Augmented Generation.

## The simplest true statement

RAG solves the knowledge-cutoff problem by fetching relevant documents at inference time and injecting them into the context window before asking the model to answer.

---

## Why RAG Exists

LLMs are trained on a snapshot of the world. Claude's knowledge cuts off at a certain date. GPT-4's knowledge cuts off at a certain date. After that point, the model knows nothing — about your product updates, your company's latest strategy, this week's App Store reviews, or anything else that has happened since training ended.

You have three options when your application needs current or private knowledge:

| Option | What it does | When to use |
|---|---|---|
| **Prompt injection** | Paste the information directly into the prompt | Works for small, known facts |
| **RAG** | Retrieve relevant documents dynamically at query time | Works for large knowledge bases |
| **Fine-tuning** | Bake knowledge into model weights via training | Works for style/behaviour, not facts |

RAG is usually the right answer for facts. Fine-tuning is often misapplied here — it's expensive, requires ongoing maintenance as your data changes, and it turns out models are poor at reliably surfacing fine-tuned facts versus facts learned during pretraining.

---

## The RAG Pipeline

A RAG system has two phases: **indexing** (done once, updated periodically) and **retrieval** (done at query time).

**Indexing phase:**

```
Documents → Chunking → Embedding model → Vector database
```

1. Take your documents (PDFs, wikis, support transcripts, lesson notes — anything)
2. Split them into chunks of roughly 200–500 tokens each
3. Run each chunk through an embedding model, producing a vector (a list of ~1,500 numbers representing the chunk's meaning)
4. Store those vectors in a vector database alongside the original text

**Retrieval phase:**

```
Query → Embedding → Vector search → Top-K chunks → Inject into prompt → LLM answers
```

1. When a user asks a question, embed their query using the same embedding model
2. Search the vector database for the chunks whose vectors are most similar to the query vector
3. Return the top-K most relevant chunks (typically 3–10)
4. Inject those chunks into the LLM prompt as context
5. The LLM generates an answer grounded in the retrieved material

The magic is that "similar vectors" corresponds to "similar meaning" — so searching by vector finds semantically relevant passages, not just keyword matches.

---

## Vector Similarity: The Intuition

Imagine every piece of text mapped to a point in a 1,500-dimensional space, where meaning determines proximity. "App Store rating" and "user reviews" land near each other. "Monthly revenue" and "ARR" land near each other. "Training data cutoff" and "knowledge cutoff" land near each other.

When you embed a query, you're finding your position in that same space and asking: which of my stored documents are nearest to me?

This is fundamentally different from keyword search. Keyword search finds documents that contain the same words. Vector search finds documents that convey the same meaning — even if they use completely different vocabulary.

For Memrise, this means a knowledge base of lesson content, support tickets, and product documentation can be searched meaningfully even when users phrase their questions in unexpected ways.

---

## RAG vs Fine-Tuning: The Decision Framework

This comes up constantly, so here's the clearest way to think about it:

| Dimension | RAG | Fine-tuning |
|---|---|---|
| **Best for** | Current facts, private data, large corpora | Style, tone, format, domain vocabulary |
| **Update cadence** | Real-time or near-real-time | Requires a new training run |
| **Cost** | Moderate ongoing (inference + retrieval) | High upfront (training) |
| **Reliability for facts** | High (grounded in retrieved text) | Moderate (facts can be "forgotten") |
| **Transparency** | You can see what was retrieved | Opaque — in the weights |

The common mistake is using fine-tuning to try to teach a model facts ("our product is called X and it does Y"). Use RAG for that. Use fine-tuning to teach a model to behave differently — to write in your brand voice, to follow a specific output format, to use domain terminology naturally.

---

## Three concepts to remember

1. **RAG separates knowledge from weights** — you update a vector database, not a model, which makes keeping knowledge current practical and cheap.
2. **Embeddings turn meaning into geometry** — similar meaning lands near each other in vector space, enabling semantic search that beats keyword matching.
3. **RAG is for facts; fine-tuning is for behaviour** — applying each to the wrong problem is one of the most common and costly mistakes in production AI.

---

## Visual Aid

![[../assets/2026-03-28-llm-session-13.png]]

---

## Open Question

> Memrise has years of learning content, user interaction data, and pedagogical expertise locked up in various places. If you were going to build a RAG system on top of that knowledge base, what would be the single hardest thing to get right — the chunking strategy, the retrieval quality, the prompt design, or something else entirely?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- What happens when you have multiple specialised agents, each with their own tools and RAG pipelines
- How orchestration works — who decides which agent handles what
- Failure modes in multi-agent systems and how to design around them
