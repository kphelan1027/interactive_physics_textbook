---
track: llm
session: 15
title: "How OpenClaw Works"
date: 2026-03-28
tags: [openclaw, multi-agent, architecture, gateway, routing, skills, sessions]
visual: true
image_prompt: "Architecture diagram of a multi-agent system labelled 'OpenClaw'. A gateway/router at the top receives a user message and routes to one of several named agent boxes: 'Nova (tutor)', 'Gina (chief of staff)', 'Cipher (security)', 'General'. Each agent box has tool icons below it. Flat design, dark navy and gold, polished product style."
reuse: public
open_question_answered: false
---

# LLM — Session 15: How OpenClaw Works

> *You've been using a multi-agent system every day. Here's what's actually happening under the hood.*

---

## Where we left off

In Session 14, we covered multi-agent systems in the abstract: orchestrators, specialists, delegation, failure modes. Today we make it concrete. OpenClaw — the AI agent fleet you use daily — is a real multi-agent system. Understanding how it's built is the best way to consolidate everything we've covered in the last five sessions.

## The simplest true statement

OpenClaw is a routed multi-agent system: your messages pass through a gateway that decides which specialist agent handles them, each agent runs its own loop with its own tools and identity, and sessions preserve context across conversations.

---

## The Four Agents

OpenClaw currently runs four named agents. Each has a distinct identity, system prompt, tool set, and operating context.

**Nova** is your tutor. Her job is teaching — breaking down complex technical concepts, building mental models, layering sessions progressively. She has access to your curriculum notes, session history, and a voice that is patient, layered, and never condescending. You are in a Nova session right now.

**Gina** is your chief of staff. She handles briefings, scheduling support, research synthesis, and operational questions. Gina's system prompt is oriented around efficiency and executive context — she knows your priorities, your calendar patterns, and how to write at the level of detail you actually need.

**Cipher** handles security, ops, and technical investigations. When something goes wrong in a system, when you need a log analysed, when there's a question that requires careful technical scrutiny rather than speed, Cipher is the right agent. Her disposition is precise and cautious rather than fast and helpful.

**General** is the catch-all. When your message doesn't clearly belong to any specialist, the gateway routes it here. General has broad capabilities but no specialist identity.

---

## The Gateway: Routing Intelligence

Before any agent sees your message, it passes through the gateway. The gateway's job is classification: which agent is best placed to handle this?

The routing logic considers:

| Signal | Example |
|---|---|
| **Explicit invocation** | "Nova, explain…" or "@Gina can you…" |
| **Topic classification** | Learning/education → Nova, Security/ops → Cipher |
| **Session context** | You're already in an active Nova session |
| **Skill invocation** | `/plan-eng-review` → routes to the engineering context |

The gateway is itself a small LLM inference call — a fast, cheap classification model that reads your message and recent context to make a routing decision. It doesn't need to be large or expensive; it just needs to be reliable.

When the gateway is uncertain, it defaults to General rather than making a confident wrong choice. Graceful degradation over confident misclassification.

---

## Sessions: Context That Persists

A **session** in OpenClaw is a named conversation thread that preserves context across multiple interactions. Your Nova LLM sessions form a curriculum — each session file you've read and discussed is part of the accumulated context that Nova can reference.

Sessions solve a fundamental LLM problem: models have no persistent memory between API calls. Every call starts from scratch. Sessions work around this by:

1. Storing conversation history (summaries of past turns, not the full transcripts — too expensive)
2. Injecting relevant session context into each new prompt
3. Maintaining a session identity (this is a Nova/LLM session, currently on session 15)

This is RAG applied to conversation history. The memory layer doesn't shove everything into every prompt — it retrieves what's relevant to the current message and injects that selectively.

---

## Skills: Specialised Prompt Templates

A **skill** is a reusable, named prompt template that configures an agent for a specific type of task. When you invoke `/plan-eng-review` or `/review` or `/ship`, you're activating a skill.

Skills work by:
1. Injecting a structured system prompt overlay that changes how the agent behaves for this task
2. Potentially switching tool access (a `/ship` skill might activate deployment tools)
3. Setting expectations for output format (a review skill might always produce a structured checklist)

Think of skills as job descriptions, activated on demand. Gina with no skill active is a capable general chief of staff. Gina with `/plan-ceo-review` active is specifically primed to prepare a CEO-level strategic review, with the right framing, the right level of detail, and the right output structure.

---

## The Full Architecture

Putting it together:

```
Your message
     ↓
  Gateway (classify + route)
     ↓              ↓              ↓              ↓
  Nova           Gina          Cipher         General
  (tutor)    (chief of staff) (security)    (catch-all)
     ↓              ↓              ↓              ↓
 Skills layer — prompt overlays activated by /commands
     ↓              ↓              ↓              ↓
 Tools layer — web search, file read/write, API calls
     ↓              ↓              ↓              ↓
 Memory layer — sessions, context injection, RAG
     ↓
  Response → back to you
```

Every layer is an application of concepts you now understand: routing is multi-agent coordination, skills are structured prompt engineering, memory is RAG on conversation history, tools are function calling. The architecture is not magic — it's the deliberate composition of the building blocks we've been studying.

---

## Three concepts to remember

1. **The gateway is the orchestrator** — it makes the routing decision that determines which specialist handles each message, and the quality of that routing directly affects every interaction you have.
2. **Sessions are RAG on your own history** — context persists not by stuffing everything into every prompt, but by selectively retrieving and injecting what's relevant.
3. **Skills are prompt engineering made reusable** — `/plan-eng-review` is not a button that does something magic; it's a well-crafted prompt template that configures an agent's behaviour for a specific task.

---

## Visual Aid

![[../assets/2026-03-28-llm-session-15.png]]

---

## Open Question

> You interact with Nova, Gina, and Cipher regularly. Now that you understand the architecture — the gateway, the session layer, the skills system — does it change how you'd want to use or configure the fleet? Is there an agent you'd add, a skill you'd want built, or a routing rule you'd change?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- What running agents at scale actually costs — token economics, pricing models, and how to budget for AI
- The cost trade-offs between frontier models and cheaper alternatives in a fleet like OpenClaw
- How to think about AI spend as a product investment rather than an IT cost
