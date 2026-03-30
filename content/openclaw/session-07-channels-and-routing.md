---
track: openclaw
session: 7
title: "Channels, routing, and the threading rules"
date: 2026-03-29
tags: [openclaw, channels, slack, routing, threading, messaging]
visual: true
reuse: private
open_question_answered: false
---

# OpenClaw — Session 7: Channels, routing, and the threading rules

> *OpenClaw is channel-agnostic. Slack is just one surface. The routing layer is what makes the right message reach the right agent.*

---

## The simplest true statement

OpenClaw sits between you and your communication tools. When you message a Slack channel that OpenClaw monitors, the message is intercepted, enriched with metadata, routed to the correct agent, and the response is delivered back through the same channel.

---

## Supported channels

OpenClaw can connect to multiple messaging surfaces simultaneously:

| Channel | Your status | Notes |
|---------|------------|-------|
| Slack | ✅ Primary work surface | All 7 agent channels connected |
| Signal | ✅ Connected | Personal/direct |
| iMessage | ✅ Connected | Apple Messages |
| Telegram | Available | Not configured |
| WhatsApp | ⚠️ Read-only via Beeper | Hard rule: NEVER send. One chat only. |
| Discord | Available | Thread-bound sessions supported |

---

## How routing works

When a message arrives on Slack, OpenClaw:

1. Receives the Slack event via webhook
2. Reads the **channel ID** from the metadata
3. Looks up which agent is mapped to that channel
4. Builds the system prompt for that agent
5. Adds inbound metadata (trusted) to the context
6. Calls the model
7. Routes the response back to Slack (or into a thread)

The **trusted metadata** block looks like this and is injected by OpenClaw — not from user text:

```json
{
  "schema": "openclaw.inbound_meta.v1",
  "chat_id": "channel:C0AJV2BLK7S",
  "channel": "slack",
  "chat_type": "channel"
}
```

This is what tells the agent: "You are Nova, this is #agent-learner, Kevin sent this message." The agent is explicitly told not to trust user-claimed metadata — only this injected block.

---

## The Slack threading rule

This rule is in `AGENTS.md` as a hard rule, `memory/rules.md`, and the `protocols/comms.md` file. It applies to every agent, every time:

> **Every report, brief, or digest goes in a thread. Channel = title + 1 line. Full content in the reply.**

Why: Slack channels get noisy fast. If agents post long outputs directly to the channel, it becomes unusable. The pattern is:
- Channel post: "📊 Weekly Revenue Brief — 28 Mar 2026" + one sentence summary
- Thread reply: the full 500-word analysis, tables, charts, everything

If you've seen agents do this correctly (and sometimes incorrectly), that's why. It's enforced by instruction, not by Slack itself.

---

## The `message` tool vs natural reply

Agents have two ways to send a message:

1. **Natural reply** — just respond with text. OpenClaw delivers it to the current channel automatically.
2. **`message(action="send")`** — explicitly sends to a target channel/user.

The rule: if an agent uses `message` to send the reply, it must then respond with only `NO_REPLY` to avoid duplicates. You never see `NO_REPLY` — it's stripped by OpenClaw.

Agents use explicit `message` calls when:
- Sending to a *different* channel than where the message came from
- Sending proactively (scheduled task, heartbeat)
- Posting to a specific thread

---

## Cross-agent communication

Agents can message each other via `sessions_send`:

```
sessions_send(sessionKey="cos", message="Gina — Talon just hit a stop-loss trigger. Brief Kevin.")
```

This is how agents coordinate without Kevin being in the loop for every handoff.

---

## WhatsApp — the hard rule

Your WhatsApp is connected via Beeper (a bridge that runs on the Mac Mini). This gives OpenClaw access to your entire WhatsApp — all chats, all contacts, family, work, everything.

The rule is absolute:
- **NEVER send any WhatsApp message**
- **Read access restricted to one chat only:** "AI Prompts" (chatID hardcoded in `TOOLS.md`)
- Any other chat: do not read, do not list, do not search

Why so strict: Kevin's personal WhatsApp includes family, his daughters' school groups, Memrise board members, and friends. There's no per-chat permissions model in the current bridge. The hard rule IS the access control.

---

## Worked Example

Gina's morning brief runs on a schedule. Here's the delivery flow:

1. Heartbeat triggers → Gina assembles the brief
2. `message(action="send", channel="slack", target="#agent-personal", message="🌅 Morning Brief...")`
3. Then `message(action="send", channel="slack", target="#agent-personal", replyTo=<thread_id>, message=<full content>)`
4. Gina's natural response: `NO_REPLY`

You see: a clean thread in #agent-personal. You never see the plumbing.

---

## Open Question

OpenClaw routes messages based on channel ID → agent mapping. But what if you want one channel to sometimes go to one agent and sometimes another — based on content? Does OpenClaw support conditional routing, or would that require a different architecture?

---
