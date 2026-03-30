---
track: openclaw
session: 5
title: "Sessions, sub-agents, and spawning"
date: 2026-03-29
tags: [openclaw, sessions, subagents, sessions_spawn, ACP, coding-agent]
visual: true
reuse: private
open_question_answered: false
---

# OpenClaw — Session 5: Sessions, sub-agents, and spawning

> *A session is one conversation thread. A sub-agent is a session you spawn programmatically — a worker that runs in the background and reports back.*

---

## The simplest true statement

Every message exchange happens inside a **session**. Sessions can be long-lived (a persistent thread you keep returning to) or one-shot (a task you fire and forget). Agents can spawn other sessions to delegate work — those are sub-agents.

---

## What a session is

A session is an isolated conversation context:
- Has a unique session key
- Has its own message history
- Has its own model assignment
- Can be on any channel (Slack, Signal, etc.) or internal

When you message #agent-learner in Slack, that's a session. Every thread within Slack is a separate session context. When you start a new thread, you start a new session.

---

## The sessions tools

Agents have four session-management tools:

| Tool | What it does |
|------|-------------|
| `sessions_spawn` | Creates a new sub-agent session and sends it a task |
| `sessions_send` | Sends a message to an existing session |
| `sessions_list` | Lists active/recent sessions with filters |
| `sessions_history` | Fetches the full message history for a session |

---

## Two runtimes for spawning

When Forge (or any agent) calls `sessions_spawn`, there are two very different runtimes:

### `runtime: "subagent"` — Internal OpenClaw agent
- Runs as another OpenClaw agent
- Same tools as parent
- Good for: parallel research, delegating structured tasks, cross-agent coordination
- The agent list comes from `agents_list` (not ACP)

### `runtime: "acp"` — External coding agent (Claude Code, Codex)
- Runs a full coding agent with filesystem access
- This is how Forge actually writes code
- Claude Code command: `claude --print --permission-mode bypassPermissions --model claude-sonnet-4-6`
- Codex needs `pty: true` (requires a terminal)
- The task goes in as a natural-language prompt; the agent edits files and returns

---

## The coding-agent flow in practice

When you ask Forge to build a feature:

```
You → #agent-engineer → Forge
Forge reads coding-agent/SKILL.md
Forge calls sessions_spawn(
  runtime: "acp",
  agentId: "claude-code",
  task: "Build X in repo ~/my-project. Here are the requirements: ...",
  mode: "run"
)
Claude Code runs → edits files → commits → reports back
Forge summarises the result to you
```

The key constraint: **never spawn coding agents into `~/.openclaw/workspace/`**. That's your memory and config directory. Code agents should only touch repos.

---

## Thread-bound sessions (Discord/ACP pattern)

On Discord (which you don't currently use for this), sessions can be thread-bound:

```
sessions_spawn(runtime: "acp", thread: true, mode: "session")
```

This creates a persistent back-and-forth thread where you can talk directly to Claude Code. Not used in your current Slack setup.

---

## Monitoring sub-agents

Two ways to track what's running:

```
subagents(action="list")          → what sub-agents are active right now
sessions_list(activeMinutes=30)   → sessions active in the last 30 mins
```

You can also steer or kill a sub-agent:
```
subagents(action="steer", target="<id>", message="Stop doing X and do Y instead")
subagents(action="kill", target="<id>")
```

---

## Worked Example

You ask Forge: *"Add OpenClaw track support to the physics textbook seeder."*

What actually happened (today, building this very notebook):
1. Forge assessed the task — file edits to `seeder.ts` + new content files
2. Task is small enough that Forge handles it directly (no sub-agent spawned)
3. For larger tasks (e.g. "build the full Pulse Trainer V3"), Forge would spawn Claude Code via `sessions_spawn`
4. Claude Code would run headlessly, read the repo, make changes, and complete

The threshold: if a task needs more than ~5 targeted file edits, or requires exploring a large codebase, Forge spawns a coding agent. Single-file surgical edits happen directly.

---

## Open Question

Sub-agents are isolated sessions. When a sub-agent finishes, it reports back — but the report is just text. If Claude Code makes 40 file changes across a large codebase, how does Forge actually know *what* changed? What's the right protocol for handover between a coding agent and the parent agent?

---
