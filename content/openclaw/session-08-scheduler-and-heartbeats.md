---
track: openclaw
session: 8
title: "Scheduled tasks, heartbeats, and the Kanban"
date: 2026-03-29
tags: [openclaw, kanban, scheduler, heartbeat, cron, automation]
visual: true
reuse: private
open_question_answered: false
---

# OpenClaw — Session 8: Scheduled tasks, heartbeats, and the Kanban

> *Most of the useful work your agents do, you didn't explicitly ask for. That's the Kanban doing its job.*

---

## The simplest true statement

Your agents run proactively — on a schedule — without you triggering them. The scheduling system is a Kanban app running on the Mac Mini at `localhost:3001`. It fires tasks to agents at configured times via the OpenClaw gateway.

---

## The two triggering mechanisms

### 1. Direct messaging (reactive)
You send a message → agent responds. This is what most people think AI assistants do exclusively.

### 2. Scheduled tasks (proactive)
The Kanban fires a task → agent runs → posts output to a channel → you see it in the morning.

The majority of your fleet's value comes from (2). The morning brief, the weekly digests, the Talon sentiment reports, the memory consolidation — all scheduled.

---

## The Kanban app

- **Repo:** `~/OpenClaw-Kanban/`
- **URL:** `http://localhost:3001`
- **What it does:** Runs a cron scheduler that POSTs tasks to the OpenClaw gateway at configured times

Each task has:
- A **trigger** (cron schedule, e.g. `0 7 * * 1-5` = 07:00 Mon-Fri)
- A **target agent** (e.g. `cos`, `learner`, `quant`)
- A **task prompt** (what to do)
- A **channel** to post results to

---

## Heartbeats

There's a simpler mechanism for quick health checks: `HEARTBEAT.md` in your workspace.

OpenClaw polls this file. If it's non-empty, the agent sends a heartbeat probe at intervals. The agent must respond with either:
- `HEARTBEAT_OK` — nothing to report, all good
- Any other text — there's something that needs attention

Your current heartbeat config:
```
Morning Brief (run once, ~08:00 GMT):
- Pull WHOOP day-brief
- Pull WHOOP health flags (7 days)
- Post combined brief to #agent-personal
```

The heartbeat is lighter than a Kanban task — it's for monitoring and quick checks. Kanban is for full scheduled workflows.

---

## Your current scheduled tasks

From the Kanban (as of March 2026):

| Schedule | Agent | Task |
|----------|-------|------|
| 07:45 GMT weekdays | `cos` | AI Digest — scans AI Prompts WhatsApp, news, surfaces top items |
| 08:00 GMT weekdays | `personal` | Morning WHOOP brief + calendar |
| 09:30 Mon | `learner` | Accounting & Finance teaching session |
| 09:30 Wed | `learner` | LLM & AI Foundations teaching session |
| 09:30 Fri | `learner` | Technical / Cipher Explainer session |
| 4-hourly | `quant` | Crypto sentiment analysis → `~/talon/data/sentiment/` |
| 08:00 GMT daily | `quant` | Macro regime assessment |
| Nightly | `cos` | Memory consolidation (`scripts/memory-consolidate.sh`) |

---

## Why proactive beats reactive

The value of a Chief of Staff isn't just answering your questions. It's knowing what you need before you ask. Scheduled tasks let agents:

- Surface information before it becomes urgent
- Build continuity across sessions (nightly consolidation writes what happened today so tomorrow's session has context)
- Run in the background so the morning brief is already waiting when you wake up

The risk: scheduled tasks can create noise. Each one should pass the filter: *would Kevin make a different decision if he knew this?* If the answer is no, the task shouldn't run.

---

## Worked Example

**07:45 GMT, Tuesday morning:**

1. Kanban fires: `"Run AI Digest — check AI Prompts WhatsApp for links and discussions from the last 24h"`
2. Gina wakes up (her session is created fresh)
3. She calls the Beeper MCP tool to read AI Prompts (the one permitted chat)
4. Finds 3 links, 2 discussions
5. Searches for context on each link via `web_search`
6. Writes a brief
7. Posts title to `#agent-cos` with one-line summary
8. Posts full brief in the thread
9. Session ends

**08:00 GMT, same Tuesday:**

1. Morning brief heartbeat fires
2. Pulse calls `whoop day-brief --json --pretty`
3. Gets recovery score: 68%, sleep: 7h 40m, HRV: 52ms
4. Checks your calendar via Google Calendar
5. Cross-references: high-cognitive meetings today vs moderate recovery score
6. Posts: "Recovery moderate — protect the 14:00 slot if you can, your focus window is morning"

You wake up and both are already in the right Slack channels.

---

## Open Question

The Kanban runs tasks whether or not you're awake, and whether or not the information it produces is still relevant when you read it. If an agent posts a time-sensitive alert at 03:00 GMT, it might be stale by 08:00. How should a scheduling system handle time-sensitivity? What would "expiry" look like for an agent-produced output?

---
