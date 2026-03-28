---
track: llm
session: 11
title: "Agents: What Makes an LLM an Agent?"
date: 2026-03-28
tags: [agents, tools, autonomy, loops, planning]
visual: true
image_prompt: "Diagram showing the agent loop: LLM receives task, decides to use a tool, tool executes and returns result, LLM observes result, decides next action, eventually produces final answer. Circular loop with arrows. Labels: 'Plan', 'Act', 'Observe', 'Decide'. Flat design, dark blue and green, educational style."
reuse: public
open_question_answered: false
---

# LLM — Session 11: Agents: What Makes an LLM an Agent?

> *The shift from answering questions to taking actions — and why that changes everything.*

---

## Where we left off

In Session 10, we explored RLHF — how models are trained with human feedback to be genuinely helpful rather than merely plausible. That process shapes a model's *disposition*: it learns to be cautious, thorough, and aligned with what humans actually want. Today we ask: what happens when you give that well-aligned model the ability to act in the world?

## The simplest true statement

An agent is an LLM that can take actions, observe the results, and decide what to do next — looping until the task is complete.

---

## From Q&A to Actor

Most of your interactions with an LLM look like this: you ask, it answers. One turn, one response. The model is stateless between calls. It has no memory of what happened before (unless you inject it) and no way to affect anything outside the conversation.

An agent changes both of those constraints. Give an LLM tools — a way to search the web, run code, call an API, read a file — and suddenly it can *do* things, not just say things.

The technical term for this is the **agent loop**:

1. **Receive** a task or instruction
2. **Plan** what action to take first
3. **Act** by calling a tool
4. **Observe** the result of that tool call
5. **Decide** what to do next — take another action, or produce a final answer
6. Repeat from step 3 until done

This loop is deceptively simple. It is also the foundation of every serious AI system being built right now — including OpenClaw.

---

## What Makes It "Agentic"?

Not every LLM interaction is agentic. The distinguishing features are:

| Feature | Chat / Q&A | Agent |
|---|---|---|
| Number of steps | One | Many |
| Uses tools | No | Yes |
| Observes results | No | Yes |
| Can fail mid-task | No | Yes |
| Requires error handling | No | Yes |
| Human in the loop | Usually | Optional |

The word *autonomy* is key here. An agent operates across multiple steps without a human approving each one. That autonomy is what makes agents powerful — and what makes them require careful design.

Think of the difference between hiring a consultant who delivers one report versus hiring a project manager who runs a six-week initiative, makes dozens of decisions along the way, and reports back when it's done. Same person; very different operating model.

---

## The Loop in Practice

Here is a minimal agent loop in pseudocode — stripped to its essence:

```
task = "Find the latest Memrise App Store rating and summarise the reviews"

while not done:
    action = llm.think(task, history)

    if action.type == "tool_call":
        result = execute_tool(action.tool, action.args)
        history.append(result)

    elif action.type == "final_answer":
        return action.content
        done = True
```

The LLM does not know in advance how many steps it will take. It figures that out as it goes — which is what makes it feel intelligent, and what makes it potentially unpredictable.

Two failure modes to watch for:

- **Infinite loops** — the model keeps trying variations of a failing action without recognising it is stuck
- **Confident wrong turns** — the model proceeds down an incorrect path without flagging uncertainty

Both are active areas of research. For now, well-designed agents include a maximum step count and checkpoints where a human can intervene.

---

## Why This Matters for Memrise

When you use OpenClaw — whether you're asking Gina to prepare a briefing or Nova to explain a concept — you're interacting with agents running this loop. Each agent has a set of tools it can call, a context it maintains across steps, and a goal it is working towards.

The shift from "asking an LLM" to "deploying an agent" is similar to the shift from asking a colleague a question versus delegating a project. The quality of your delegation — how clearly you specify the task, what authority you give, what checks you put in place — determines the quality of the outcome.

This is why prompt engineering for agents is different from prompt engineering for chat. You're not crafting a good question; you're writing a job description.

---

## Three concepts to remember

1. **The agent loop** — Plan, Act, Observe, Decide — is the fundamental pattern. Every AI agent, however complex, is running some version of this loop.
2. **Tools are the hands** — an LLM without tools can only talk; tools give it the ability to act in the world.
3. **Autonomy requires design** — the more steps an agent takes unsupervised, the more important it is to define failure modes, limits, and checkpoints.

---

## Visual Aid

![[../assets/2026-03-28-llm-session-11.png]]

---

## Open Question

> You delegate tasks to people all the time as CEO. When you delegate to a person, you have intuitions about when to check in, when to trust, when to intervene. How would you build those same intuitions for an AI agent? What signals would tell you it's going off the rails?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- How tools are defined and called — the mechanics of function calling
- Structured outputs and why they matter for reliable tool use
- How the LLM decides which tool to use, and what happens when it chooses wrong
