---
track: openclaw
session: 4
title: "Skills: how agents extend their capabilities"
date: 2026-03-29
tags: [openclaw, skills, SKILL.md, clawhub, capabilities]
visual: true
reuse: private
open_question_answered: false
---

# OpenClaw — Session 4: Skills: how agents extend their capabilities

> *A skill is a SKILL.md file that tells an agent how to use a specific external tool or follow a specific protocol. That's it.*

---

## The simplest true statement

Without skills, agents know their tools (read, write, exec, web_search, etc.) but don't know *how to use them well* for specific purposes. Skills fill that gap. A skill file contains instructions, examples, and conventions for a particular domain.

---

## What a skill actually is

A skill is a directory containing:

```
skills/github/
├── SKILL.md          ← the instructions the agent reads
└── references/       ← optional: templates, example outputs, API docs
```

`SKILL.md` is written in plain English (and Markdown). It tells the agent:
- What this skill does
- When to use it
- Step-by-step instructions
- Conventions (e.g. "always create a branch before committing")
- Gotchas (e.g. "never push to Memrise/* repos")

---

## How skill selection works

Every agent has a `<available_skills>` block in its system prompt listing all installed skills with their descriptions. When you make a request:

1. The agent scans the skill descriptions
2. If exactly one skill clearly applies, it reads that `SKILL.md`
3. If multiple could apply, it picks the most specific one
4. If none apply, it doesn't read any skill file

The agent reads at most **one** skill per turn. This keeps context usage controlled.

---

## Your installed skills

Skills live in two places:

| Location | What's there |
|----------|-------------|
| `/opt/homebrew/lib/node_modules/openclaw/skills/` | Core skills bundled with OpenClaw |
| `~/.openclaw/workspace/skills/` | Custom skills you've added |

Key skills you use constantly:

| Skill | What it does |
|-------|-------------|
| `coding-agent` | Delegates to Codex/Claude Code for substantial coding work |
| `github` | Uses `gh` CLI for issues, PRs, CI runs |
| `gog` | Google Workspace: Gmail, Calendar, Drive, Contacts |
| `apple-reminders` | `remindctl` CLI for Apple Reminders |
| `apple-notes` | `memo` CLI for Apple Notes |
| `notion` | Notion API for pages, databases, blocks |
| `obsidian` | Obsidian vault (Markdown notes) at `~/Kevin/` |
| `fireflies` | Fireflies.ai meeting transcripts via GraphQL |
| `weather` | wttr.in or Open-Meteo for forecasts |
| `summarize` | Transcripts + summaries from URLs, podcasts, local files |
| `context-engineering` | Principles for managing agent context windows |
| `clawhub` | Install, update, publish skills from clawhub.com |

---

## The coding-agent skill in detail

This one is worth understanding deeply because it changes the architecture significantly.

When Forge gets a complex coding task, he doesn't write the code directly. He spawns a sub-agent (Claude Code or Codex) that runs in the background:

```
Forge → reads coding-agent/SKILL.md
      → calls sessions_spawn(runtime="acp", task="...", agentId="claude-code")
      → sub-agent runs, edits files, commits
      → Forge reports back to Kevin
```

The sub-agent has full filesystem access to the repo. It's essentially a headless Claude with tool permissions. The instruction `--permission-mode bypassPermissions` means it doesn't ask for confirmation on every file edit.

---

## How to add a new skill

Three ways:

1. **ClawHub** — `clawhub install <skill-name>` pulls from the community registry
2. **Manual** — create `~/.openclaw/workspace/skills/<name>/SKILL.md` yourself
3. **skill-creator skill** — ask any agent to "create a skill for X" and it will scaffold a new one using the `skill-creator` skill

---

## Worked Example

You ask Nova: *"Summarise this podcast for me: [URL]"*

Nova's selection logic:
- Scans available skills
- `summarize` matches: "Summarise or extract text/transcripts from URLs, podcasts, and local files"
- Reads `skills/summarize/SKILL.md`
- Follows its instructions (which tool to call, what format to use, how to handle audio vs text)
- Returns a structured summary

If the `summarize` skill didn't exist, Nova would still try — but she'd improvise rather than following a tested protocol, and the result would be less reliable.

---

## Open Question

Skills are instructions written in prose. The agent reads them and tries to follow them. But there's no enforcement — an agent could technically ignore a skill, or follow it poorly. What does this tell you about where the real reliability guarantee comes from in this system?

---
