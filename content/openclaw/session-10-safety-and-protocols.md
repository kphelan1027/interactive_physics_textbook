---
track: openclaw
session: 10
title: "Safety, hard rules, and the protocols layer"
date: 2026-03-29
tags: [openclaw, safety, protocols, hard-rules, WhatsApp, GitHub, privacy]
visual: true
reuse: private
open_question_answered: false
---

# OpenClaw — Session 10: Safety, hard rules, and the protocols layer

> *Your agents have access to your life. The safety layer is what makes that access safe to grant.*

---

## The simplest true statement

Your OpenClaw fleet has enormous reach: your email, calendar, GitHub, financial accounts, personal messages, family communications. Hard rules and protocols exist because the cost of a mistake in some of these areas is not a minor inconvenience — it's reputational damage, financial loss, or a violation of someone's privacy.

---

## Three layers of safety

| Layer | What it is | Where it lives |
|-------|-----------|----------------|
| **Hard rules** | Non-negotiable constraints. Any violation is a "firing offence." | `AGENTS.md`, `memory/rules.md` |
| **Protocols** | Detailed operating procedures for sensitive areas | `protocols/` directory |
| **OpenClaw platform** | Approval prompts, exec policy, tool restrictions | Platform-level, not in your files |

---

## The hard rules (all agents, always)

### 1. Slack threading
Every report goes in a thread. Channel = title + 1 line. Full content in thread reply.
*Why:* Keeps channels usable. A wall of agent output in a channel is worse than nothing.

### 2. WhatsApp lockdown
NEVER send any WhatsApp message. Read access to "AI Prompts" chat only.
*Why:* Your personal WhatsApp includes your children's school groups, Bea, your parents, friends. There is no per-chat permissions model. One wrong send is catastrophic. This rule has zero exceptions.

### 3. GitHub scope
Automated/scheduled runs: `kphelan1027/*` repos only. `Memrise/*` is off limits.
If Kevin explicitly asks about a Memrise repo: PRs only. No direct commits, no pushes, no issues.
*Why:* Memrise is a company's production codebase. An automated commit from Kevin's home AI fleet to a production repo is a career-ending incident waiting to happen.

### 4. Verify before reporting
Never state system state without checking it yourself. "I believe X" and "I've verified X" are different sentences.
*Why:* You've been burned by stale references. If Forge says "the API is working," you expect that to be verified, not inferred. This is especially true for infrastructure state (ports open, processes running, tokens valid).

### 5. `trash` not `rm`
Recoverable beats gone forever.
*Why:* Agents run shell commands. Irreversible deletes from an autonomous process are a different risk class than deletes from a human who double-checked.

### 6. Private data stays private
Don't quote topic files in group chats or shared sessions.
*Why:* OpenClaw has access to some sensitive information (salaries, personal finances, private communications). That data should never appear in a Slack channel.

---

## The protocols directory

`protocols/` contains detailed rules loaded on demand:

| Protocol | Load when... |
|----------|-------------|
| `protocols/memory.md` | Reading or writing memory (contacts, projects, daily notes, JSONL) |
| `protocols/delivery.md` | Writing any agent output to Obsidian or delivering a deliverable |
| `protocols/comms.md` | Posting to Slack, inter-agent messaging, group chat behaviour |
| `protocols/safety.md` | WhatsApp, GitHub, external actions, data privacy |

Agents don't preload all protocols — they load the relevant one when the task requires it. This keeps boot context small.

---

## Why "firing offence" language?

The rules use strong language deliberately. OpenClaw agents are operating with real permissions. If an agent violates the WhatsApp rule, the harm is real: a message sent to the wrong person, in Kevin's name, from Kevin's phone number. The rules need to be treated with the same seriousness as if Kevin's most senior employee was doing the action.

The "firing offence" framing sets the stakes correctly. Not "this is suboptimal." This is "this causes real-world harm and must never happen."

---

## OpenClaw's platform-level safety

Beyond your rules, OpenClaw has built-in safety:

- **Approval prompts for elevated commands.** If `exec` is called with something potentially destructive, OpenClaw pauses and requires you to run `/approve allow-once <code>`. The agent cannot proceed without it.
- **Safety constitution.** Agents are instructed not to pursue self-preservation, resource acquisition, or replication. They must comply with stop/pause/audit requests and cannot bypass safeguards.
- **No model access to raw credentials.** Tool calls go through OpenClaw's routing layer — the model sees the result, not necessarily the underlying auth mechanism.

---

## Worked Example

Forge is building a feature for the Kanban app and needs to deploy to production. Here's how the safety layer activates:

1. Forge runs: `git push origin main` (this is a `kphelan1027/OpenClaw-Kanban` repo — permitted)
2. No approval needed — it's a permitted repo, single command

Now Forge mistakenly tries to run a script on a `Memrise/*` repo:
1. Forge calls `exec("gh pr create --repo Memrise/intranet ...")`
2. Hard rule check: `Memrise/*` = hands off for automated actions
3. Forge should self-abort and tell Kevin he needs to do this manually, or ask explicit permission first

The safety rules don't prevent Forge from *trying* — they're instructions, not code locks. The guarantee comes from the model following its instructions reliably. This is why `memory/rules.md` exists — it reinforces the rules in a format `memory_search` can surface when relevant.

---

## Open Question

Hard rules are instructions to the model, not code-level locks. The model could theoretically ignore them. What does this tell you about where the real safety guarantee lives in an agentic system? And if you wanted a *code-level* lock on, say, `Memrise/*` repos — what would that look like technically in OpenClaw?

---
