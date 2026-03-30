---
track: openclaw
session: 1
title: "What is OpenClaw?"
date: 2026-03-29
tags: [openclaw, architecture, gateway, agents, sessions]
visual: true
reuse: private
open_question_answered: false
---

# OpenClaw — Session 1: What is OpenClaw?

> *It's not a chatbot. It's a runtime that connects AI agents to your actual life.*

---

## The simplest true statement

OpenClaw is software that runs on your Mac Mini 24/7, connects your AI agents to your real tools (Slack, calendar, email, GitHub, etc.), and routes messages between them and you.

Think of it as the operating system for your personal AI fleet.

---

## The three-layer model

OpenClaw has three distinct layers. Confusing them is the root cause of most misunderstandings.

| Layer | What it is | Examples in your setup |
|-------|-----------|------------------------|
| **Gateway** | The always-on daemon. Receives messages, routes to agents, manages sessions. | `openclaw gateway start` — runs on the Mac Mini |
| **Agents** | AI model instances with an identity, memory, and a set of tools. | Gina (cos), Nova (learner), Forge (engineer), Talon (quant), etc. |
| **Channels** | The surfaces agents communicate through. | Slack, Signal, Telegram, WhatsApp (read-only), iMessage |

The gateway is the spine. It listens for inbound messages from channels, wakes the appropriate agent, hands it the message + context, waits for a response, and delivers it back.

---

## What "always on" actually means

Your Mac Mini at home is running OpenClaw right now. It has been since setup. When you send a message in #agent-learner in Slack:

1. Slack sends an event to OpenClaw's webhook
2. The gateway looks up which agent handles `#agent-learner` → it's `learner` (Nova)
3. It assembles the system prompt for Nova (identity, memory, workspace context)
4. It calls the Anthropic API with Nova's model (currently `claude-sonnet-4-6`)
5. Nova's response comes back, gets delivered to Slack in the correct thread
6. The full exchange is logged

You never managed any of this. The gateway handled it.

---

## How your fleet maps to channels

Each Slack channel is wired to one agent. This is configured in OpenClaw's channel settings.

| Slack channel | Agent ID | Name |
|--------------|----------|------|
| #agent-cos | `cos` | Gina |
| #agent-engineer | `engineer` | Forge |
| #agent-learner | `learner` | Nova |
| #agent-data | `data` | Cipher |
| #agent-personal | `personal` | Pulse |
| #agent-talon | `quant` | Talon |
| #agent-product | `product` | Mika |

---

## What an agent actually is

An agent is not a permanently running process. It's a *stateless function* that gets invoked per message. Every time you send a message, the agent:

1. Gets assembled fresh from its system prompt
2. Has memory injected (from your workspace files)
3. Processes your message with its available tools
4. Responds
5. Sleeps

The "personality" and "memory" you experience are not stored in the agent itself. They come from the workspace files your agents read on each invocation. This is the key architectural insight — and why the memory system matters so much.

---

## Worked Example

You send: *"Nova, what did we decide about the BrainOS migration?"*

What happens:
- Gateway routes to Nova (learner agent)
- Nova's system prompt includes your `MEMORY.md`, `SOUL.md`, `AGENTS.md`
- Nova calls `memory_search("BrainOS migration")` — finds the relevant daily notes
- Nova reads the snippets and answers
- You get a coherent reply that references real history

None of that history was "in" Nova. It was in your files. Nova retrieved it.

---

## Open Question

If agents are stateless and assembled fresh each time, what stops two agents from having conflicting views of the same fact — and how does the workspace file system solve that problem?

---
