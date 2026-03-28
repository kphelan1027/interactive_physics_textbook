---
track: llm
session: 6
title: "Embeddings: Meaning as Maths"
date: 2026-03-28
tags: [llm, embeddings, vectors, semantic-search, similarity, ai-foundations]
visual: true
image_prompt: "3D vector space diagram showing word embeddings as dots in space. Clusters visible: 'king', 'queen', 'prince' near each other; 'Paris', 'London', 'Berlin' near each other. Arrows showing 'king - man + woman = queen'. Clean flat design educational illustration, blue-green colour scheme, axes labelled as semantic dimensions."
reuse: public
open_question_answered: false
---

# LLM — Session 6: Embeddings: Meaning as Maths

> *The model doesn't understand "Paris" and "London" are both cities. It just knows their vectors point in a similar direction.*

---

## Where we left off

Session 5: transformers process context through attention — every token looking at every other, routing meaning through learned relationships. But we skipped a prior question: when a token enters the transformer, what form does it actually take?

The answer is an embedding — and understanding embeddings opens up a whole category of AI product building beyond pure text generation.

---

## The simplest true statement

An embedding is a list of floating-point numbers that represents a token, a word, a sentence, or even an entire document in high-dimensional space — and similar meanings end up near each other.

---

## From integers to vectors

In Session 1, we established that tokenisation converts text to integers. `"Paris"` might become token `15339`. But the model can't do much with a bare integer — there's no relationship between `15339` and `3290` (London) that the model can exploit.

The embedding layer solves this. Every token ID maps to a vector — a list of numbers, typically 768 to 12,288 dimensions long. These vectors are *learned* during training.

```
"Paris"  → [0.21, -0.83, 0.47, 0.12, ..., 0.66]   # 768 numbers
"London" → [0.19, -0.81, 0.51, 0.09, ..., 0.71]   # 768 numbers
"pizza"  → [-0.54, 0.33, -0.21, 0.88, ..., -0.12]  # 768 numbers
```

Paris and London have similar vectors. Pizza does not. The model didn't learn this because someone told it — it emerged from next-token prediction. To predict text accurately, the model needed to develop internal representations that captured what tokens *mean*.

---

## The geometry of meaning

Vector spaces have geometry. You can compute:

- **Cosine similarity** — the angle between two vectors. Vectors pointing in the same direction = similar meaning. Used for semantic search.
- **Euclidean distance** — how far apart two points are. Closer = more similar.
- **Vector arithmetic** — the classic demonstration:

```
king − man + woman ≈ queen
Paris − France + Germany ≈ Berlin
```

This isn't magic. It's what you'd expect if the embedding space has learnable directions for concepts like *royalty*, *gender*, *capital city*, *country*. The model hasn't been told these categories exist — they emerge from the structure of language.

| Concept cluster | Words that live near each other |
|---|---|
| European capitals | Paris, London, Berlin, Madrid, Rome |
| Sentiment (positive) | excellent, wonderful, fantastic, superb |
| Technical roles | engineer, developer, programmer, coder |
| Time (recent past) | yesterday, recently, last week, earlier |

---

## Contextual vs static embeddings

Early embedding models (Word2Vec, GloVe, 2013–2014) assigned one fixed vector per word. "Bank" always had the same embedding, regardless of context.

Transformer-based embeddings are *contextual*. The embedding of "bank" changes depending on its surrounding tokens. After attention processes the sequence, "bank" in `"river bank"` has a different vector to "bank" in `"savings bank"`. The meaning has been updated by context.

This is a major reason transformers outperform older approaches: they don't just look up a static meaning, they *compute* a context-sensitive meaning.

---

## Why this matters for product building

Embeddings are not just an internal implementation detail. They're a product primitive.

**Semantic search:** Instead of keyword matching, embed a user's query and every document, then find documents whose vectors are closest to the query vector. "How do I cancel my subscription" matches "subscription cancellation" even if no words overlap.

**Recommendations:** Embed items (courses, products, articles). Users who liked item A get recommended items whose embeddings are near A's vector.

**Clustering:** Embed thousands of customer support tickets. Similar issues cluster together automatically — no labelling required.

**RAG (Retrieval-Augmented Generation):** Embed your knowledge base. At query time, retrieve the most semantically relevant chunks, inject them into the model's context. Session 9 covers this in depth.

| Use case | What you embed | What you compare |
|---|---|---|
| Semantic search | Documents + query | Query vector vs document vectors |
| Recommendations | Items + user history | Recent item vectors vs catalogue |
| Duplicate detection | Sentences | Pairs with cosine similarity > threshold |
| Classification | Text samples | Proximity to labelled class centroids |

---

## Embedding models vs LLMs

An important distinction: not all embedding models are LLMs. Models like OpenAI's `text-embedding-3-large`, Cohere's Embed, or the open-source `bge` and `e5` families are trained specifically to produce good embeddings — not to generate text. They're often much cheaper and faster than generation models, and should be your first tool when you need semantic retrieval rather than generation.

---

## Three concepts to remember

1. Embeddings convert tokens into high-dimensional vectors where similar meanings cluster together — this emerges from training, not hand-coding
2. Contextual embeddings (from transformers) update a word's vector based on surrounding context — "bank" means different things in different sentences
3. Embeddings are a product primitive: semantic search, recommendations, and RAG all rely on vector similarity in embedding space

---

## Visual Aid

![[../assets/2026-03-28-llm-session-6.png]]

---

## Open Question

> Embeddings capture semantic similarity — but similarity is not always what you want. Consider Memrise's use case: a user is learning Spanish. They've just learned "hablar" (to speak). You could embed every word in the curriculum and recommend the "most similar" next word to learn.
>
> But what does "similar" mean in a learning context? Semantically similar (other verbs)? Structurally similar (same conjugation pattern)? Or optimally *different* — the next thing that stretches them without overwhelming them?
>
> Embeddings give you a map of meaning-space. But navigation — knowing which direction to travel — requires something embeddings don't encode. What would you add?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- Context windows: the finite space the model uses for all its processing
- What happens when a context is too long — truncation, lost information, cost
- How system prompts, conversation history, and retrieved documents compete for space
