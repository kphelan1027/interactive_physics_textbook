---
track: jtbd
session: 17
title: "The Four Roles of Prototypes"
date: 2026-04-29
tags: [jtbd, bobby-moesta, prototyping, four-roles, learning-prototype, communication-prototype, integration-prototype, milestone-prototype, two-dimensions, focused, comprehensive, physical, analytical]
visual: /assets/2026-04-29-jtbd-session-17-four-roles.png
visual_caption: "Four quadrants labeled Learning, Communication, Integration, and Milestone — each with a one-line purpose, a small illustrative icon, and a concrete example. Below the quadrants: a 2x2 matrix showing the two dimensions (Conceptual/Analytical vs Physical/Built × Focused vs Comprehensive) with cost arrows running from cheapest (conceptual-focused) to most expensive (physical-comprehensive)."
reuse: public
open_question_answered: false
---

# JTBD — Session 17: The Four Roles of Prototypes

> *"There's roles of prototypes — and what I mean by a role is that there's purpose behind why I use this prototype."*
> — Bobby Moesta, February 26 2026

> *"The most important thing for both engineering and development and design is: how do we generate technical information quickly, efficiently, and effectively."*
> — Bobby Moesta, quoting Dr. Taguchi, same session

---

## The simplest true statement

Not all prototypes are built for the same reason. Before you build anything, you need to know *why* you're building it. Bobby Moesta identified four distinct roles a prototype can play — and confusing them is one of the most common and expensive mistakes in product development.

---

## Where we are

Session 16 established the foundational distinction: prototyping to learn (you don't know the answer, you're discovering cause-and-effect) vs. prototyping to verify (you have a hypothesis and you're proving or disproving it). The Toyota vs. Ford story showed *when* to prototype — front-load the unknowns, minimise late rework.

This session goes one level deeper. Once you've accepted that you need to prototype more, and earlier — what kind of prototype do you actually need to build? Bobby's answer: it depends entirely on the role. There are four of them, and each calls for a completely different approach.

---

## The four roles

Bobby introduced these at the start of the February session, before the case studies or the Memrise team's specific work. They're the vocabulary for the whole discipline.

### Role 1: Learning

> *"There's a learning role to answer a critical development question. Part of this is to actually frame what we don't know, frame the unknown, and then build a set of prototypes to help me learn how to make that unknown known."*

This is the role most people think of last but should think of first. A learning prototype exists specifically to answer a question you cannot yet answer. The prototype is not evidence of progress. It is an instrument of discovery.

The process:
1. Name the unknown precisely. ("We don't know what sequence of onboarding questions actually produces a personalised plan users trust.")
2. Build a set of prototypes — at least three, deliberately different — designed to expose how the system behaves across that variable.
3. Run them separately. Compare the outputs. Learn what caused the differences.

The critical test for a learning prototype: if you already know the answer, you don't need it. A learning prototype is justified only by genuine uncertainty.

Bobby, on the mindset behind this:

> *"You're not here because you know the answers. You're here because you know how to figure out the answers."*

This is the prototype type that creates Toyota's development curve: dense experimentation early, near-zero rework late. Ford built physical comprehensive prototypes. Toyota built learning prototypes. The cost difference was an order of magnitude.

---

### Role 2: Communication

> *"Communication — you start to realize that at some point as I start to communicate to other departments, I might actually build a set of prototypes that is there to actually help us have a better conversation about what we're trying to do or what we don't know."*

A communication prototype is not built to answer a question. It is built to make a question legible to someone outside your team.

Bobby's example from the hard goods world:

> *"In the hard goods world, I need to talk to the supplier about it. So I build a set of prototypes to show the supplier what I'm really trying to do."*

In software, this is the prototype you build to show engineering what product is actually asking for — or to show design what engineering's constraints actually look like in practice. It is a bridge across the translation gap between functions.

The distinction matters because communication prototypes can look like learning prototypes from the outside, but they're doing something different. You already know (or think you know) what you want. The prototype exists so someone else can understand it. The test is different. The audience is different. The level of detail required is often different.

Getting this wrong is expensive in a specific way: teams build highly refined learning prototypes to show to management, or they build rough communication prototypes and ask engineers to spec against them. Both create frustration because the tool doesn't fit the job.

---

### Role 3: Integration

> *"There's a third role that prototypes play, which is integration — showing how two things come together. This is actually a really important one because a lot of times we can't work on the entire system at once. We work on two parts of the system separately, and ultimately we need a range of prototypes that show us how those two systems have to go together."*

Integration prototypes are the ones that prevent the most expensive category of rework: the moment two separately developed subsystems meet for the first time and don't fit together.

Bobby's automotive example: building the engine independent of the transmission. Before the integration prototype framework, Ford would build the engine, then build the transmission, and only discover incompatibilities when they tried to combine them — late in the process, at high cost. With integration prototypes, both subsystems were developed in parallel, and the boundary between them was the subject of its own prototyping cycle.

In software: this is the prototype that shows how the onboarding flow hands off to the learning experience. Or how the AI-generated vocabulary list integrates with the progress tracking system. Or how a new data layer connects with an existing API contract.

Integration prototypes don't need to be comprehensive on either side. They only need to be precise about the interface between the two systems. A focused integration prototype — cheap to build, fast to run — can prevent a catastrophically expensive architectural rework downstream.

---

### Role 4: Milestone

> *"The last one is a milestone prototype. A milestone prototype is about helping to understand the progress we've made. Usually used in management meetings or in customer meetings to show: this is where we started, this is where we ended up. But it's about building the contrast to communicate the progress we're trying to make."*

A milestone prototype is retrospective rather than prospective. It is not designed to answer a question or solve a problem. It is designed to show an audience — management, customers, stakeholders, the broader team — how far the product has come.

The word "prototype" might feel wrong here. But Bobby includes it deliberately. A milestone artefact is still an approximation of the product; it still reveals critical aspects of performance. What's different is the audience and the purpose. The question it answers is not "what should we build next?" but "how do we understand what we have already built?"

The contrast embedded in a good milestone presentation — here is where we started, here is where we are now — is a form of learning, even if retrospective. Teams that skip milestone prototypes often lose track of their own progress. The product improved, but no one can articulate how or why. That makes it harder to decide what to do next.

---

## The two dimensions of prototype types

Bobby separated the *role* of a prototype from its *type*. Role is about purpose. Type is about construction. And type varies across two dimensions.

### Dimension 1: Physical vs. Conceptual/Analytical

**Conceptual/analytical:** A sketch. A written description of an experience. A slide showing three different onboarding concepts. A conversation prompt. A wireframe. You're not building anything that runs — you're building a representation that communicates or tests an idea.

**Physical/built:** Working code. A clickable prototype in Figma or Replit. An actual session in the product. Something a user can meaningfully interact with.

### Dimension 2: Focused vs. Comprehensive

**Focused:** You've isolated one specific part of the system. You're not trying to test the whole experience — just this one variable: the onboarding question sequence, the progress signal, the content type.

**Comprehensive:** You're testing or showing the whole thing. The complete concept. The full journey from first touch to first success.

---

## The cost map

These two dimensions create a 2×2 matrix, and the cost implications are sharp:

| | Focused | Comprehensive |
|---|---|---|
| **Conceptual/Analytical** | 🟢 Cheapest. Fast. Low information. | 🟡 Cheap. Good for communicating big-picture concepts. |
| **Physical/Built** | 🟡 Higher cost. Good for specific variables once narrowed. | 🔴 Most expensive. Most time-consuming. Ford's default. |

Bobby's summary:

> *"The conceptual-analytical are the cheapest to do, but they don't give you enough information. And what we would do at Ford is we'd end up spending all this time building physical comprehensive prototypes, which would be like we just keep building cars. It was just really slow and very very hard."*

The fix wasn't to stop building physical prototypes. It was to build conceptual-focused and conceptual-comprehensive prototypes much earlier in the process, so that by the time you needed to go physical, you already knew which variables mattered and which you could simplify.

> *"One of the things we did to reduce cycle time was we were able to build the engine independent of the transmission. Before, we'd build the engine and then the transmission, and we were able to build them in separate ways by using conceptual prototypes and then moving to physical prototypes. When we put it together, it would work."*

---

## Pairing roles with types

Bobby didn't spell this out as a table, but the logic follows directly from the transcripts:

| Role | Most common type | Why |
|------|-----------------|-----|
| **Learning** | Conceptual-focused | Cheap enough to run many. Isolates the variable you're testing. |
| **Communication** | Conceptual-comprehensive | Needs to show the whole picture. Doesn't need to be built to work. |
| **Integration** | Physical-focused | Needs to test the actual interface between two real systems. |
| **Milestone** | Physical-comprehensive | Needs to show real progress. Management and customers need to see something that works. |

These are defaults, not rules. A learning prototype can be physical if the question requires real interaction data. A communication prototype can be a working demo if words aren't enough. But pairing role to type efficiently is how you avoid the Toyota/Ford cost gap.

---

## Where Memrise applied this in real time

The February and March sessions showed all four roles in action across the team.

**Sandra Zavala's "fun" work** was learning prototypes throughout. The question was: what are the variables that cause or destroy "fun" and "progress" for the learning-for-fun job? Bobby coached her to build small, focused, conceptual prototypes — enough contrast to find the operating window, not a comprehensive experience.

> *"Build a set of prototypes to know where it's not fun anymore. Find the space by which we can say fun resides between: more than this, but less than that."*

Five variables identified by Sandra: content type, capability framing, progress signal, content depth/ceiling, and re-engagement. Bobby's advice: start with the first L4 array before building comprehensive prototypes. That's conceptual-focused learning prototypes, run in pairs.

**Harry Snow and Kasia Bania's "connecting with others" work** hit the integration role when two users preferred different vocabulary features — one wanted app-generated vocab, the other wanted AI-prompted vocab. Bobby's read:

> *"We're looking for the optimum, but we might actually find what we call sensory segments. You might actually end up having to have both features because some people want to generate it, some want you to generate it."*

That's an integration problem. The two features (app-generated and AI-prompted) need to coexist in the same product. How do they fit together? That's a prototype you need to build before you commit to the architecture.

**Sonia Souto's B2B/construction job** raised a milestone problem implicitly. Bobby pointed out that testing three variables at three levels requires nine experiments (an L9 array), not just three, and that doing them in sequence on the same user contaminated the results because users learned from the first prototype and couldn't evaluate the second one fresh. The fix was to reduce to an L4 for the first round — back to focused learning prototypes — and only move to comprehensive once the important variables were known.

**Kevin's personalised onboarding tool** drew immediate enthusiasm from Bobby:

> *"You're headed down the right track. Make sure that the eight onboarding questions include a balance of context-based and outcome-based inquiries — because it's the combination of context and outcome that determines the amount of pressure, the amount of rigor, the amount of time the user is willing to commit."*

The tool itself was a learning prototype — built by Kevin to figure out his own pedagogy before building anything for users. Bobby endorsed this directly:

> *"You really become an expert in prototyping when you prototype for yourself personally."*

---

## The meta-point: naming the role before building

The reason Bobby introduced this vocabulary isn't academic. It's practical. Teams that don't distinguish roles build the wrong prototype for the job, then get confused when it doesn't give them useful output.

If you're trying to answer a question about user behaviour (learning role) but you build a polished deck to show management (milestone role), you've spent time and money on something that can't answer the question you actually have.

If you're trying to align engineering and design on an interface boundary (integration role) but you build a user-facing conceptual prototype instead, you've deferred the actual problem.

The first question before any prototype work: *What role does this prototype play?* Once you know the role, the type and the level of investment follow logically.

---

## Visual Aid

![[../assets/2026-04-29-jtbd-session-17-four-roles.png]]

---

## Three things to hold onto

1. **There are four distinct reasons to build a prototype.** Learning (answer a critical unknown), Communication (bridge a gap between functions), Integration (test how two systems fit together), and Milestone (show progress to a stakeholder audience). Each role calls for a different design, different audience, and different success criteria. Confusing them is expensive.

2. **Type follows role.** The two dimensions — physical vs. conceptual, focused vs. comprehensive — aren't arbitrary. The conceptual-focused quadrant is the cheapest and fastest; it's where Toyota did most of its early work. The physical-comprehensive quadrant is the most expensive; it's where Ford got stuck. Matching the right type to the right role is how you shift your development curve from Ford to Toyota.

3. **"What role is this prototype playing?" is the first question.** It comes before tool choice, fidelity level, or sample size. The role determines everything else. If you can't answer that question, you're not ready to build.

---

## Open Question

> Bobby made an offhand observation during Kevin's demo that carries a lot of weight if you sit with it:
>
> *"You really become an expert in prototyping when you prototype for yourself personally. When I have to buy a car, I prototype. When I have to decide what to cook for dinner tonight, I prototype. It makes your choice actually way more meaningful when you have the contrast of knowing what you didn't pick."*
>
> He was talking about Kevin's spoken onboarding tool — a tool Kevin built to figure out his own learning before building anything for others.
>
> Here's the question: **In your current work at Memrise, how many of the prototypes being built are genuinely Learning prototypes — started from a named unknown — vs. Communication or Milestone prototypes dressed up as learning ones?**
>
> Said differently: when a prototype gets presented, is the opening question "what did we discover?" or "how does this look?"
>
> If it's mostly the second, that's not a team problem. That's a role-labelling problem. Teams default to milestone and communication prototypes because those feel like progress. Learning prototypes require admitting you don't know — which Bobby says is the thing most teams are least comfortable doing, and the thing that matters most.

**Kevin's answer:** *(not yet provided)*

---

## Next session

**Session 18: Contrast and the Rule of Three** — Bobby's single most repeated practical rule: always build at least three different prototypes, not two. Two prototypes give you a winner. Three prototypes give you a map of the operating space. This session unpacks why the number three is the minimum for genuine learning, how to make the three as different as possible, and how paired comparisons generate cause-and-effect insight that A/B tests structurally cannot. Built from the Zest case study, Sandra's matrix work, and Bobby's L4 array framework.
