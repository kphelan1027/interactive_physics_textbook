---
title: "What is a context window?"
track: llm
chapter: foundations
order: 2
visual: /assets/2026-03-22-context-window.png
visual_caption: "The context window is the model's entire working memory — everything it can 'see' at once, measured in tokens."
---

In the last session you learned that language models process text as tokens — sub-word chunks, roughly 4 characters each. The context window is the limit on how many tokens the model can hold in its attention at one time.

Think of it as working memory. A human reading a long document can only actively hold so much in mind at once. A language model has an analogous constraint: it can only process a fixed number of tokens per request. Everything outside that window is invisible to it.

Claude's context window is 200,000 tokens — roughly 150,000 words, or a short novel. GPT-4o sits at around 128,000. Earlier models were 4,000 tokens, which is barely six pages of text.

## What's in the context window

Every token in a conversation occupies context space. That includes:

- The system prompt (the instructions you give the model about how to behave)
- The entire conversation history — every message, both yours and the model's responses
- Any documents or files you've pasted in
- The current message you're sending

When you're in a long conversation with Claude, the earlier messages are still in the context window — until the conversation gets long enough that they start to fall out.

## What happens when the window fills

This is where it gets important. When a conversation exceeds the context window, the model can no longer attend to the oldest tokens. They don't get "summarised" or "remembered" — they simply become invisible. The model responds as though they never existed.

This is not a forgetting mechanism. It's a hard architectural limit. The model has no long-term memory outside its context window unless you explicitly build one — by summarising conversations, maintaining a persistent notes file, or using a retrieval system to inject relevant past content into each new request.

OpenClaw (the system managing these conversations) handles this by maintaining a memory layer — the MEMORY.md files you've seen referenced — precisely because the model's context window doesn't persist across sessions.

## Context window ≠ conversation length

It's tempting to think of the context window as limiting how long a conversation can go. It does — but the more practical constraint is *how much content you can reason over in a single request*.

This matters for things like:
- Asking a model to summarise a long document (the whole document must fit in context)
- Code review (the model needs to see the whole codebase, or the relevant parts)
- Analysis of a transcript (the full transcript must be in context to reason about it)

If you ask Claude to analyse a 200-page legal document and the document is 180,000 tokens, it fits — just. Ask it to also hold a long conversation about it and you'll start losing the beginning of the document.

## The practical implication

When working with large documents or long conversations, think about what the model actually needs to see to answer your question well. Injecting a 50,000-token document when you only need one chapter wastes context space and increases cost. Good prompt design — being deliberate about what goes into context — is as important as the question you ask.

The model's performance degrades at the edges of the context window. Research suggests models attend more reliably to content at the beginning and end of the context — the middle of a very long context tends to get less weight. This is sometimes called the "lost in the middle" problem.

## Worked Example

**You paste a 10,000-word report into Claude and ask: "What did section 3 say about Q4 revenue?" At 750 words per page, 10,000 words ≈ 7,500 tokens. Claude's 200k context window can hold this easily. But if you then ask a follow-up that requires Claude to also hold 190,000 tokens of prior conversation, older parts of that conversation will fall out of the window before the document does.**

The model processes all tokens in the context window simultaneously — it doesn't read left to right like a human. The attention mechanism weighs every token against every other token. This is why it can answer questions about content anywhere in a long document without "reading" to find it.

## Open Question

If a model has no memory outside its context window, how does OpenClaw remember things you told it weeks ago? What would have to be true about how the conversation history is managed?
