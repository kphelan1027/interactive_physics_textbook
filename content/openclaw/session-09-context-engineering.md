---
track: openclaw
session: 9
title: "Context engineering: what agents actually see"
date: 2026-03-29
tags: [openclaw, context, tokens, system-prompt, injection, memory]
visual: true
reuse: private
open_question_answered: false
---

# OpenClaw — Session 9: Context engineering: what agents actually see

> *Everything an agent knows, it knows because it's in the context window right now. Understanding context is understanding the real limits of your fleet.*

---

## The simplest true statement

An LLM can only "see" what's in its context window for a given turn. Your agents don't have background knowledge of your life. They have a carefully assembled text window. Context engineering is the art of making that window as useful as possible.

---

## What's in the context window

When you send a message to any agent, OpenClaw assembles a context window like this:

```
[System prompt]
  → SOUL.md (injected)
  → AGENTS.md (injected)
  → TOOLS.md (injected)
  → USER.md (injected)
  → MEMORY.md (injected)
  → HEARTBEAT.md (injected)
  → Identity file (identities/learner.md, etc.)
  → Available skills list
  → Tool definitions (JSON schema for each tool)

[Message history]
  → Previous messages in this session (if any)

[Your message]
```

Then, as the agent takes actions, tool results get added to the context too.

---

## The context window is finite

Claude Sonnet's context window is ~200,000 tokens. That sounds enormous — it's roughly 150,000 words, or a full novel. But it fills up:

| Content | Approximate tokens |
|---------|-------------------|
| System prompt + injected files | ~8,000–12,000 |
| A long Slack thread history | ~3,000–8,000 |
| Tool definitions | ~2,000 |
| One full `memory_search` result | ~500–2,000 |
| A read of `contacts.md` (22 contacts) | ~1,500 |
| One `exec` result (long output) | ~500–5,000 |
| A coding agent response (detailed) | ~2,000–10,000 |

A complex session with many tool calls can use 50,000+ tokens.

---

## Why context engineering matters

Two practical consequences:

**1. What gets cut.** If context overflows, old messages are dropped from the window. The agent starts forgetting earlier parts of the conversation. For a long, complex task, this means the agent might lose track of the original requirements.

**2. What it costs.** You're charged per token in and out. Injecting 10,000 tokens of files into every session that only needs 200 is expensive. This is why skills are loaded on-demand, not always. And why `memory_search` retrieves snippets (200–500 tokens) instead of loading the full memory file (5,000+ tokens).

---

## Bootstrap injection

Your workspace files are "bootstrap-injected" — always in context. This is a deliberate design choice: it means any agent can answer questions about your contacts, projects, rules, and identity without a tool call.

The trade-off: those files cost tokens on every single turn. This is why `MEMORY.md` is an *index* (small) rather than all the memories (large). The full details are in Tier 2/3 files, retrieved only when needed.

---

## The progressive disclosure pattern

Good context engineering follows this principle: **inject the minimum at boot, retrieve more only when needed.**

```
Boot: ~10,000 tokens (always injected)
  ↓
Question arrives
  ↓
If answer is in boot context → respond immediately
If not → call memory_search (add ~1,000 tokens)
If still not → read specific file (add ~2,000 tokens)
If data needed → read JSONL directly (add ~3,000 tokens)
```

Each step adds context only if necessary.

---

## Worked Example: the BrainOS migration problem

Before 26 March, `contacts.md` looked like:

```markdown
# contacts.md — searchable index
(will be auto-generated from contacts.jsonl)
Run: bash scripts/sync-memory-indexes.sh to regenerate.
```

When an agent called `memory_search("Ben Whately")`:
- The search found `contacts.md`
- Returned: "will be auto-generated from contacts.jsonl"
- Score: 0.2 (meaningless instruction text)

The data *existed* — in `contacts.jsonl`. But `memory_search` doesn't index `.jsonl` files. The agent would need a tool call to `read` the file directly — but without knowing the contact existed, it wouldn't know to look.

**The fix:** Generate a full prose `.md` mirror from the JSONL. Now `memory_search("Ben Whately")` returns his actual title, email, and context. Score: 0.754.

The lesson: if you change where data lives, you must change how it's accessed. The access architecture must match the storage architecture.

---

## Open Question

Your system prompt already uses ~10,000 tokens before you send a single word. Every session, those same files are injected fresh — even if nothing in them changed. What would a smarter bootstrap look like? Could you only inject the *diff* since last session, and what would that require?

---
