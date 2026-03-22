---
track: llm
session: 1
title: "What is a token?"
date: 2026-03-21
tags: [llm, tokens, context-window, tokenisation, ai-foundations]
visual: true
reuse: public
open_question_answered: false
---

# LLM — Session 1: What is a token?

> *The atom of everything a language model does.*

---

## The simplest true statement

A language model doesn't read words. It reads pieces of words.

Before an LLM can do anything, it converts text into numbers. The unit it uses is a *token*.

---

## What a token actually is

Take the word "unbelievable."

An LLM splits it into: `["un", "believ", "able"]` — three tokens.

- "Cat" = 1 token
- "Catastrophe" = 2–3 tokens
- Common short words = usually 1 token each
- Rare long words = broken into pieces

**Rule of thumb:** 1 token ≈ 4 characters ≈ ¾ of a word (in English)

So "100 tokens" ≈ 75 words ≈ one short paragraph.

---

## Why this matters

Everything about LLMs is defined in tokens:

| Concept | What it means |
|---------|--------------|
| **Context window** | How much the model can "see" at once. Claude = ~200k tokens. GPT-4 = ~128k. |
| **Cost** | You're charged per token in and out. Long queries cost more. |
| **Speed** | The model generates one token at a time. |
| **Limits** | If conversation exceeds the context window, older tokens fall out — permanently invisible. |

---

## The tokenisation step

"Hello, how are you?" → before anything else → converted to token IDs:

```
[9906, 11, 1268, 527, 499, 30]
```

The model never sees letters. It sees integers from a vocabulary of ~100,000 possible tokens. Everything it does is arithmetic on those numbers.

---

## The weird consequence

LLMs are surprisingly bad at:
- Counting characters in a word
- Checking if a word ends in a specific letter
- Spelling tasks

Not stupidity — tokenisation artefact. The model never saw individual letters during training. It saw chunks.

Example: "How many r's in strawberry?" — models historically miscounted. "strawberry" may be a single token; the r's were never individualised.

**Product implication:** Don't trust LLMs for character-level tasks. Trust them for meaning-level tasks.

---

## Three concepts to remember

1. Tokens are sub-word chunks — not characters, not words
2. Context window = the model's working memory, measured in tokens
3. The model operates entirely in token space — letters are invisible to it

---

## Visual Aid

![[../assets/2026-03-21-llm-tokens-session-1.png]]

---

## Open Question

> If you paste a 10,000-word document into Claude and ask a question about the first paragraph, does Claude "read" the whole document before answering — or does it process tokens in some other way?
> *(Hint: think about what "generates one token at a time" implies.)*

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- How the model actually generates the next token (probability distributions)
- What "training" means — and why it matters for what the model knows vs doesn't
- Temperature and why the same question gives different answers
