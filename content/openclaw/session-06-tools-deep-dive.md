---
track: openclaw
session: 6
title: "The tool system: how agents act on the world"
date: 2026-03-29
tags: [openclaw, tools, exec, read, write, browser, approval, safety]
visual: true
reuse: private
open_question_answered: false
---

# OpenClaw — Session 6: The tool system: how agents act on the world

> *The model generates text. Tools are how that text becomes action. Understanding tools is understanding what your agents can actually do.*

---

## The simplest true statement

Every time an agent does something — reads a file, runs a command, searches the web, sends a Slack message — it's calling a tool. Tools are functions exposed to the model by OpenClaw. The model decides when to call them, with what arguments, and what to do with the result.

---

## The tool call cycle

```
You send a message
  → Model generates a response
  → If response includes a tool call: OpenClaw executes it
  → Result is fed back to the model
  → Model generates next response (which may include another tool call)
  → ... repeats until the model gives a final text response
  → That text is delivered to you
```

This cycle is invisible to you. You see only the final response. But a complex task might involve 10+ tool calls happening behind the scenes.

---

## Categories of tools

### Read tools (safe, no approval needed)
| Tool | What it does |
|------|-------------|
| `read` | Read file contents (text or images). Truncates at 2000 lines/50KB. |
| `exec` | Run shell commands. **Most powerful tool in the fleet.** |
| `web_search` | Gemini-powered Google search with citations |
| `web_fetch` | Fetch a URL and extract readable text |
| `memory_search` | Semantic search across all `.md` memory files |
| `memory_get` | Read specific lines from a memory file |
| `image` | Analyse an image with vision model |
| `pdf` | Analyse PDFs |

### Write tools (potentially destructive — take care)
| Tool | What it does |
|------|-------------|
| `write` | Create or overwrite a file (creates parent dirs) |
| `edit` | Make precise surgical edits — find/replace exact text |
| `message` | Send messages to channels (Slack, Signal, etc.) |
| `tts` | Convert text to speech |

### Session tools
| Tool | What it does |
|------|-------------|
| `sessions_spawn` | Spawn a sub-agent |
| `sessions_send` | Message another session |
| `sessions_list` | List active sessions |
| `sessions_history` | Fetch session history |
| `subagents` | List/steer/kill sub-agents |
| `session_status` | Show model/cost/usage for current session |

### Specialised tools
| Tool | What it does |
|------|-------------|
| `browser` | Full browser automation (click, type, screenshot, navigate) |
| `canvas` | Present/eval the OpenClaw canvas |

---

## `exec` — the most powerful tool

`exec` runs arbitrary shell commands. This means agents can:
- Install packages (`brew install`, `npm install`)
- Run scripts
- Query databases
- Call APIs via curl
- Start or stop services
- Do anything you can do in a terminal

This is extremely powerful and extremely dangerous. The safety layer comes from:
1. **Policy files** — OpenClaw has an `exec` policy that can restrict what's allowed
2. **Approval prompts** — for elevated or risky commands, OpenClaw asks you first
3. **The hard rules** in `AGENTS.md` — agents are instructed to `trash` not `rm`, to only act on permitted repos, etc.

When an `exec` call requires approval, OpenClaw returns a message with an `/approve` command. You must run that exact command. No agent can bypass this.

---

## Tool policies

OpenClaw has a policy layer that controls which tools are available to which agents. In your setup, all agents have access to the full tool set. The `capabilities` field in the runtime line can restrict this:

```
Runtime: ... | capabilities=none
```

`capabilities=none` means inline buttons aren't available on this channel (Slack in your case doesn't support them). This is a surface-level restriction, not a security restriction.

---

## The `trash` rule

`AGENTS.md` says: **use `trash` not `rm`**. This applies to all agents.

Why: `rm` is permanent and instant. `trash` moves to the macOS Trash, recoverable within 30 days. On a system where agents run shell commands autonomously, the difference between recoverable and permanent is significant. Forge is supposed to know this. If you ever see `rm -rf` in a command, that's a violation.

---

## Worked Example

You ask Cipher: *"How many active subscribers did we have last month?"*

Cipher's tool sequence:
1. `memory_search("analyst API endpoint")` → finds `ANALYST_AGENT_URL` in memory
2. `read("~/.openclaw/workspace/.env.cipher")` → gets the API key
3. `exec("curl -X POST $ANALYST_AGENT_URL/api/chat/agent -H 'X-API-Key: ...' -d '{\"message\": \"active subscribers last month\"}'")` 
4. Parses the JSON response (`.answer` field)
5. Returns the number to you

Every step is a tool call. The model orchestrates them — you see only the final answer.

---

## Open Question

`exec` can run any shell command. What's the actual safety guarantee? If an agent has `exec` access, what prevents it from, say, reading your passwords or making network requests to unknown URLs? Where does the trust boundary actually sit?

---
