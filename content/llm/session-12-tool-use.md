---
track: llm
session: 12
title: "Tool Use and Function Calling"
date: 2026-03-28
tags: [tools, function-calling, structured-output, API, agents]
visual: true
image_prompt: "Diagram showing function calling: LLM outputs a structured JSON object 'call: search_web(query: climate news)', an arrow to a web search box returning results, results flowing back into LLM context. Multiple tool boxes shown: search, calculator, code runner, API call. Flat design, green and white, clean technical style."
reuse: public
open_question_answered: false
---

# LLM — Session 12: Tool Use and Function Calling

> *How an LLM reaches out and touches the world — and why structure is everything.*

---

## Where we left off

In Session 11, we established what makes an LLM an agent: the loop of Plan, Act, Observe, Decide. Tools are what agents use to act — but we didn't yet look at the mechanics. Today we go one level deeper: how does a tool call actually happen, what does the LLM produce, and how does the system know what to do with it?

## The simplest true statement

A tool call is nothing more than the LLM outputting a structured piece of text that says "run this function with these arguments" — the actual execution happens entirely outside the model.

---

## How Function Calling Works

This is one of those areas where the reality is simpler than the magic makes it seem. Here's what actually happens:

1. You tell the LLM about available tools — their names, what they do, and what arguments they accept — usually in the system prompt or a dedicated tools schema
2. The LLM, when it decides to use a tool, outputs a structured response (typically JSON) that specifies the tool name and arguments
3. Your code intercepts that response, validates it, and executes the actual function
4. The result is injected back into the conversation as a new message
5. The LLM reads the result and continues

The LLM never directly calls an API or runs code. It only ever *requests* that something be called, by producing the right structured output. All real execution power lives in the surrounding application.

```json
// What the LLM outputs when it wants to search:
{
  "tool": "search_web",
  "arguments": {
    "query": "Memrise App Store rating March 2026",
    "max_results": 5
  }
}

// What gets injected back as a tool result:
{
  "role": "tool",
  "content": "Current rating: 4.7 stars (128,000 reviews). Recent reviews highlight..."
}
```

---

## Defining Tools Well

The quality of your tool definitions is the quality of your agent. A vague tool description produces vague usage. A precise one produces reliable, predictable behaviour.

A good tool definition answers four questions:

| Question | Example |
|---|---|
| What does this tool do? | "Searches the web and returns the top N results with titles and snippets" |
| When should it be used? | "Use when you need current information not in your training data" |
| What are the arguments? | `query: string`, `max_results: integer (1-10)` |
| What does it return? | "Array of objects with `title`, `url`, `snippet` fields" |

The LLM uses this description to decide both *whether* to use a tool and *how* to call it. Poorly named arguments, ambiguous descriptions, or missing return-type documentation all reduce reliability.

Think of it like writing an API specification for a new engineer joining Memrise. The more precise and complete it is, the fewer mistakes they'll make.

---

## The Tool Landscape

Different categories of tools serve different purposes:

| Category | Examples | What it unlocks |
|---|---|---|
| **Information retrieval** | Web search, database query, document lookup | Current knowledge, private data |
| **Computation** | Calculator, code runner, data analysis | Precise arithmetic, transformations |
| **External APIs** | Salesforce, Slack, GitHub, email | Action in existing systems |
| **Memory / storage** | Read/write files, vector DB, key-value store | Persistence across sessions |
| **Perception** | Image analysis, PDF reading, audio transcription | Multi-modal understanding |

OpenClaw uses tools from nearly every category. When Gina pulls a briefing together, she may retrieve documents, query a database, and write a summary file — three different tool categories in one task.

---

## Structured Outputs and Reliability

Function calling is a specific instance of a broader capability: **structured output**. Instead of free-form prose, you ask the LLM to produce output that conforms to a schema.

This matters enormously for production systems. Free text is for humans to read; structured output is for code to process.

The reliability hierarchy looks like this:

```
Free prose          → hardest for code to parse, most expressive for humans
JSON with schema    → reliable for simple structures, well-supported
Strict schema mode  → guaranteed valid structure, some capability cost
```

Most modern model APIs (including Claude's and OpenAI's) support strict schema enforcement — the model is constrained to produce valid output matching your schema. Use this whenever your tools need to parse the response programmatically.

One practical warning: even with schema enforcement, the *contents* of fields can still be wrong. The model might put a sensible-looking but incorrect value in a required field. Structure ensures shape; it does not ensure truth.

---

## Three concepts to remember

1. **The LLM only produces text** — tool execution always happens outside the model, in your application code. The model requests; your code acts.
2. **Tool definitions are a form of programming** — write them with the same care as an API specification. Vague definitions produce unreliable agents.
3. **Structured output is the bridge** between LLM and software — use schema enforcement for production reliability, but remember that structure guarantees form, not correctness.

---

## Visual Aid

![[../assets/2026-03-28-llm-session-12.png]]

---

## Open Question

> OpenClaw's agents use tools to act on your behalf — searching, writing, calling APIs. As the person whose systems they're operating in, where do you draw the line on what a tool should be allowed to do? Is there a class of action you'd never want an agent to take autonomously?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- How agents pull in external knowledge using retrieval-augmented generation (RAG)
- Vector databases and why they're the memory layer behind most production agents
- When to use RAG versus fine-tuning, and how to decide
