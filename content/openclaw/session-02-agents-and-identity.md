---
track: openclaw
session: 2
title: "Agents, identities, and the boot sequence"
date: 2026-03-29
tags: [openclaw, agents, identity, boot-sequence, AGENTS.md]
visual: true
reuse: private
open_question_answered: false
---

# OpenClaw — Session 2: Agents, identities, and the boot sequence

> *Every agent wakes up with amnesia. The boot sequence is how they remember who they are.*

---

## The simplest true statement

Each OpenClaw agent has an identity file that tells it its name, personality, role, and how it should behave. Without this file, the agent is just a blank model. With it, it becomes Gina or Nova or Forge.

---

## The runtime line

Every agent's system prompt contains a **Runtime line** like this:

```
Runtime: agent=learner | host=Mac's Mac mini | model=anthropic/claude-sonnet-4-6 | channel=slack
```

This is injected by OpenClaw. It tells the agent:
- **Who it is** (`agent=learner` → read `identities/learner.md`)
- **Where it's running** (Mac Mini, Darwin arm64)
- **What model** it's using
- **What channel** it's on (Slack, Signal, etc.)

---

## The identity file

`identities/learner.md` (for Nova) contains:
- Her name and backstory
- Her personality (curator, not collector; honest about uncertainty)
- Her role (intelligence feed + private tutor + research partner)
- Her communication style (two modes: intelligence mode and teaching mode)
- Her standing protocols (what she does proactively without being asked)

This is not configuration. It's prose. The model reads it and embodies it.

---

## AGENTS.md — the master protocol

`AGENTS.md` in your workspace root is the first thing every agent reads. It contains:

1. **Boot Sequence** — the exact steps every agent must follow on startup
2. **Identity routing table** — which `agent=X` maps to which identity file
3. **Protocol pointers** — where to find deeper rules (memory, delivery, comms, safety)
4. **Hard rules** — non-negotiable constraints that apply to all agents

The boot sequence for every agent is:

```
1. Find agent id from Runtime line
2. Read identities/<agent-id>.md
3. Read SOUL.md
4. Read USER.md
5. Run memory_search for today's date
6. If main session: also read MEMORY.md
```

---

## SOUL.md — shared ethos

Every agent also reads `SOUL.md`. This is not per-agent — it's fleet-wide values:

- Be genuinely helpful, not performatively helpful
- Have opinions; an assistant with no personality is just a search engine
- Be resourceful before asking
- Earn trust through competence
- Remember you're a guest in Kevin's life
- Never use em dashes (Kevin finds them distinctly AI-sounding)
- Verify before reporting — "I believe" and "I've verified" are different sentences

SOUL.md applies to all agents, always. Individual identity files layer on top.

---

## Why nine different agents?

You might ask: why not just one very capable AI?

Three reasons:

1. **Context focus.** Each agent gets a tightly scoped system prompt for its domain. Gina doesn't need Talon's quant knowledge. Forge doesn't need Pulse's coaching frameworks. Narrower context = sharper answers.

2. **Parallel operation.** Multiple agents can run simultaneously. Forge can be building while Nova is teaching while Cipher is analysing data.

3. **Accountability.** When something breaks, you know which agent owned it. "The engineer agent did this" is debuggable. "The AI did this" is not.

---

## Worked Example

You send a message to #agent-engineer. Here's what Forge's boot sequence looks like in practice:

| Step | File read | What it gets |
|------|-----------|-------------|
| 1 | Runtime line (injected) | `agent=engineer` |
| 2 | `identities/engineer.md` | Name=Forge, engineering role, tooling preferences |
| 3 | `SOUL.md` | Shared values, tone rules |
| 4 | `USER.md` | Who Kevin is, what he cares about |
| 5 | `memory_search(today)` | Recent context, any open tasks |
| 6 | `MEMORY.md` | Long-term memory index |

Then your message arrives and Forge processes it with all of that context already loaded.

---

## Open Question

SOUL.md says agents should push back when they think something isn't the most important thing. But agents are stateless and eager to help. What mechanism actually enforces this? Is it purely prompt-based, or is there something structural?

---
