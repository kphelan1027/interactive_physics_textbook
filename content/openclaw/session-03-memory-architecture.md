---
track: openclaw
session: 3
title: "Memory: how agents remember across sessions"
date: 2026-03-29
tags: [openclaw, memory, BrainOS, JSONL, memory_search, context]
visual: true
reuse: private
open_question_answered: false
---

# OpenClaw — Session 3: Memory: how agents remember across sessions

> *Agents don't have memory. Your workspace files are the memory. The distinction matters enormously.*

---

## The simplest true statement

Because agents are stateless (they start fresh every message), memory has to live somewhere external. In your setup, it lives in a structured set of files in `~/.openclaw/workspace/`. The agents read these files at the start of each session.

---

## The BrainOS: your memory architecture

Your memory system (called "BrainOS") uses three tiers. Each tier has a different purpose, format, and access pattern.

| Tier | Format | What lives here | How agents access it |
|------|--------|----------------|---------------------|
| **Tier 1** | In-context | System prompt, injected workspace files | Already loaded — no tool call needed |
| **Tier 2** | `.md` files | Narrative memory, contacts index, projects index, daily notes | `memory_search` (semantic search) |
| **Tier 3** | `.jsonl` / `.yaml` | Structured data: contacts, projects, metrics, decisions | `read` tool directly (not searchable) |

---

## Tier 1 — What agents always see

Every agent's system prompt includes:
- `AGENTS.md` — boot protocol and hard rules
- `SOUL.md` — shared ethos
- `TOOLS.md` — your personal tool notes (camera names, SSH aliases, etc.)
- `USER.md` — who Kevin is
- `MEMORY.md` — the memory *index* (not the memory itself)
- `HEARTBEAT.md` — scheduled task config
- `IDENTITY.md` — agent routing table

These are injected automatically by OpenClaw. The agent doesn't have to ask for them.

---

## Tier 2 — Searchable narrative memory

The key files under `memory/`:

| File | Contents |
|------|----------|
| `memory/contacts.md` | Searchable index of all contacts (auto-generated) |
| `memory/projects.md` | Searchable index of all projects (auto-generated) |
| `memory/career.md` | Kevin's role, Memrise context, career plan |
| `memory/rules.md` | Hard rules: Slack threading, WhatsApp lockdown, GitHub scope |
| `memory/tech.md` | Technical systems: BigQuery, Kanban, tool notes |
| `memory/lessons.md` | Lessons learned per agent |
| `memory/YYYY-MM-DD.md` | Daily episodic notes (raw log of what happened each day) |

When an agent calls `memory_search("Ben Whately CEO")`, it runs semantic search across all these `.md` files and returns the most relevant snippets.

---

## Tier 3 — Structured data (JSONL)

The `.jsonl` files use an append-only pattern:

```jsonl
{"_schema": "contact_v1", "id": "ct_001", "name": "Ben Whately", "role": "CEO", "company": "Memrise"}
{"_update": true, "id": "ct_001", "linkedin": "https://linkedin.com/in/benwhately"}
```

The second line is an update — it merges into the first. The Python sync script (`scripts/sync_memory_indexes.sh`) reads these, resolves updates, and regenerates the `.md` index mirrors.

**This is the BrainOS migration that Forge did on 26 March 2026.** Before that, all contact and project data was in `.md` files directly. The migration moved the *source of truth* to JSONL but kept `.md` mirrors so `memory_search` still works.

---

## The sync script — why it matters

Every time an agent appends to a `.jsonl` file, it must run:

```bash
bash scripts/sync-memory-indexes.sh
```

If it doesn't, the `.md` mirrors go stale. Agents searching for contact data would get the index header instead of real names. This is exactly the bug that existed before 26 March — and the lesson from it: **you can't migrate data architecture without migrating the access architecture.**

---

## Daily episodic notes

Every day there's a file like `memory/2026-03-29.md`. Agents write raw observations here during the day — decisions made, tasks completed, context that might matter later.

A nightly cron job (`scripts/memory-consolidate.sh`) reads recent daily notes, extracts significant events, and promotes them into the appropriate topic files (career.md, tech.md, etc.).

---

## Worked Example

Suppose you ask Gina: *"What's the status of the Pulse Trainer project?"*

1. Gina calls `memory_search("Pulse Trainer project status")`
2. The search hits `memory/projects.md` — finds the entry: "Pulse Trainer... React + Vite + TypeScript + Tailwind + Express + SQLite. V3: dynamic LLM-powered workout generation..."
3. It also hits recent daily notes with any updates
4. Gina reads those snippets and synthesises a coherent status answer

She did *not* read `memory/projects.jsonl` directly — she used the `.md` mirror. If the sync script hadn't been run, she'd have gotten the index header instead.

---

## Open Question

The sync script must be run after every JSONL append. But what happens if an agent appends to JSONL and then crashes before running the sync? How would you detect and recover from a stale index? What would a robust write protocol look like?

---
