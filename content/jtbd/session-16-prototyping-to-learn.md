---
track: jtbd
session: 16
title: "Prototyping to Learn — Discovery vs. Verification"
date: 2026-04-08
tags: [jtbd, bobby-moesta, prototyping, toyota, ford, discovery, verification, unknowns, pd-bell, causal-structures]
visual: /assets/2026-04-08-jtbd-session-16-prototyping-to-learn.png
visual_caption: "Two development curves: Ford (red) with sparse early prototypes and a massive rework spike post-launch vs. Toyota (green) with dense front-loaded experiments tapering to near-zero rework. Labels: 70% of lifecycle costs set at concept phase. Cost multipliers: 1x concept, 10x development, 100x market introduction, 1000x post-launch recall."
reuse: public
open_question_answered: false
---

# JTBD — Session 16: Prototyping to Learn — Discovery vs. Verification

> *"The reason why I'm able to prototype to learn is because I don't know the right answer. And we have to be able to admit that we don't know."*
> — Bobby Moesta, February 26 2026

> *"You're not here because you know the answers. You're here because you know how to figure out the answers."*
> — Bobby Moesta, same session

---

## The simplest true statement

Most teams prototype to prove something they already believe. Bobby Moesta's approach is the opposite: you prototype because you genuinely don't know, and you're designing experiments to find out. The distinction sounds subtle. In practice, it changes everything about how you build.

---

## Where we are

Sessions 1 through 15 built the complete demand-side toolkit: struggling moments, the four forces, the six phases, supply vs demand, non-consumption, the JTBD interview, four case studies, and an application to Memrise. All of that was about understanding what people are trying to do and why.

Now we shift to the build side. How do you design a product once you know the job? Bobby's answer: you don't design it, you discover it. And you discover it through prototyping — but a specific kind of prototyping that most teams never learn.

This session covers the foundational distinction that underpins everything else in Bobby's prototyping framework. The rest follows from here.

---

## The problem with how most teams build

Bobby frames this with a story he lived through at Ford Motor Company in the late 1980s.

Ford was taking 72 months to develop a new car. Toyota was taking 36 months. For every one car Ford released, Toyota released two. The gap wasn't engineering talent. It wasn't resources. It was *when* and *how* they ran experiments.

At Ford, the development pattern looked like this. Almost no prototypes or experiments in the concept phase. A gradual ramp through system design. Then, as the car got closer to launch, problems would surface that hadn't been anticipated, and the team would scramble to fix them. The closer to launch, the bigger the fire. And then, after launch: a massive spike of rework, bug fixes, and sometimes recalls.

Bobby called this "the red line" — the late explosion of changes that signalled a fundamental failure to find problems early.

At Toyota, the pattern was reversed. Two to three times more diverse approaches in the concept phase than Ford. Ten times more experiments during system development. An almost flat rework curve after launch.

> *"They were doing almost 10 times more experiments than we were. And so they were learning and pushing it to where they knew where it didn't work, as opposed to where it would work. And ultimately we wouldn't have this huge spike at the end."*

The result: Toyota developed cars at roughly one-tenth the cost of Ford, and in half the time. Not because they were smarter. Because they experimented in the right place.

---

## The cost multiplier that explains everything

Bobby's mentor Dr. Taguchi taught him a rule that explains why the Ford pattern is so catastrophically expensive:

**The cost to make a change multiplies by 10x at each stage of development.**

| Stage | Relative cost of change |
|-------|------------------------|
| Concept (early unknowns) | 1x |
| Development | 10x |
| Market introduction | 100x |
| Post-launch (recall) | 1,000x |

Ford set 70% of its lifecycle costs in the concept phase — the phase where it ran the fewest prototypes.

> *"Anything we do after launch is rework of not doing it right the first time."*
> — Bobby, quoting Taguchi

This isn't a manufacturing insight that stops applying when you build software. The principle is identical. The cost of changing a product architecture after users have built habits around it, after marketing has made promises, after competitors have seen your bets — that's not 1x. It's orders of magnitude more expensive than figuring it out during the design phase, before you've committed to anything.

---

## The new definition of a prototype

The definition Bobby was taught early in his career, and which most teams still implicitly use:

> *A prototype is a technical tool — something we build. It's the result of problem solving.*

Bobby replaced this with a definition he received from Dr. Taguchi:

> *A prototype is a range of approximations of the product, whose goal is to reveal critical aspects of performance and usefulness to the development team.*

The shift is profound. Under the old definition, a prototype is an output — evidence that you've done something. Under the new definition, a prototype is an input — a device for learning things you don't yet know.

Under the old definition, you build one prototype and show it to people. Under the new definition, you build a *range* of approximations, deliberately different from each other, to expose the system's behaviour. You build them to find out where things fail.

> *"I can use prototypes in many different aspects of the development process. It's not just a set of code. It could be a concept of how we're going to onboard them. It could be a concept of how we're marketing to them."*

A prototype, in Bobby's world, can be a sketch. A landing page. A set of three different messaging concepts. A simulation of a conversation. A structured interview where you inject different language and watch how people respond. The form is secondary. What matters is the question it's designed to answer.

---

## Prototyping to verify vs. prototyping to learn

This is the core distinction of the session, and the thing Bobby most wanted the Memrise team to internalise.

**Prototyping to verify** is what most teams do. You form a hypothesis. You build a prototype — or two. You test it. You try to prove (or disprove) the hypothesis. The classic form is an A/B test: two variants, one winner.

Bobby's view:

> *"An A/B test is the most inefficient way in which to really test something from a knowledge perspective — from actually answering unknowns — because you can actually build two different prototypes, see the differences, but you don't know what caused the differences."*

When you run an A/B test, you learn *that* one version performed better. You don't learn *why*. You don't learn which variables drove the difference, which you could isolate and amplify, which were irrelevant. You've proven something, but you haven't discovered anything.

**Prototyping to learn** starts from a different premise. You don't know the right answer. You haven't formed a hypothesis. What you have is a set of unknowns — variables you think might matter — and you're designing experiments to expose how the system actually behaves with customers, which causal relationships are real, and where things break.

The two modes side by side:

| | Prototyping to verify | Prototyping to learn |
|---|---|---|
| Starting assumption | You have a hypothesis | You admit you don't know |
| Goal | Prove or disprove | Discover cause-and-effect |
| Number of variants | 1 or 2 | 3+ (rule of minimum contrast) |
| Expectation of failure | Failure = bad | Failure = what you're looking for |
| Output | A winner | A map of the operating space |
| What you learn | Which variant won | Which variables matter and why |

The mode that sounds safer — verify — is actually the more dangerous one. It gives you confidence in answers before you know whether you're asking the right questions.

---

## "I was never smart enough to form a hypothesis"

Bobby said this with characteristic self-deprecation, but the meaning is serious:

> *"The reason why I'm able to prototype to learn is because I don't know the right answer. And the fact is, I was never smart enough to actually form a hypothesis. All I know is I could change these things and I wanted to see what was happening."*

This matters because the scientific method — hypothesis, test, confirm/reject — is taught as the gold standard for inquiry. Bobby isn't rejecting it. He's pointing out that it belongs late in the process, not early. You need discovery first. Hypothesis testing is for verification, after you've used prototyping to learn which variables actually matter.

> *"What I was taught in school was hypothesis testing and what I call the scientific method. But I need that at the end to verify. I don't need it to help me discover. It's actually very hindering when I do it from a discovery perspective."*

The mindset shift: you're not here to prove what you think you know. You're here to find out what you don't know. Every time you discover something you didn't know, that's not a failure. That's the job.

---

## The PD Bell process

Bobby's prototyping framework follows five stages, which he calls **PD Bell**:

1. **Plan** — What is the question we're trying to answer? What don't we know?
2. **Design** — What set of prototypes do we need to answer that question?
3. **Build** — Build the three (or more) different prototypes.
4. **Evaluate** — Run them with users or customers, separately.
5. **Learn** — What did we discover? Can we move forward, or do we need another cycle?

The most important stage is the first: naming the unknown. Bobby on this:

> *"Identifying what you don't know is actually part of your job and you should be able to say 'I don't know this' — which sounds strange because most people feel they're hired because they should know. But the more we can be explicit about what we don't know, the more it actually helps us prototype even faster."*

Most product teams skip Plan. They jump to Build because building feels like progress. The result is Toyota becoming Ford: building physical comprehensive prototypes of cars, over and over, when what they needed was ten times more conceptual experiments at the front of the process.

> *"Those who can prototype the fastest will always win. And so part of this was we realised that every time we would build a set of prototypes, it would take us almost 10 times longer than what Toyota would do."*

---

## What this means at Memrise

Sandra Zavala surfaced the most practically useful demonstration of this principle in the February session. She was building prototypes for the "learning for fun" job, and she was stuck.

Her problem: "fun" means different things to different people. She couldn't figure out how to prototype something that elastic.

Bobby's response:

> *"I don't think they can tell you what fun is. So part of this is to build a set of prototypes to know where it's not fun anymore. You find the space by which we can say fun resides between: more than this, but less than that."*

This is prototyping to learn in its purest form. Sandra hadn't framed a hypothesis about what fun looks like. Bobby wasn't asking her to. He was asking her to find the *boundaries* of the operating window — where fun starts breaking down, in either direction.

The output of that prototyping isn't "we know what fun is." It's "we now know the window within which fun lives for this user, and the variables that push them out of it."

Sandra's insight, which she arrived at independently in the March session:

> *"Fun is not a variable. It's a constraint. It's an effect. All of the variables should cause it."*

Bobby endorsed this immediately. This is a core principle of prototyping to learn: words that feel like variables (fun, trust, confidence, progress) are often effects that the system produces. Your job is to find the *causes*. And you find causes by building experiments that expose what creates and destroys those effects.

---

## The hill chart connection

Bobby referenced the hill chart — a concept Kevin will recognise from software development. The first half of the hill is "figuring it out." The second half is "making it happen."

Prototyping to learn lives entirely on the first half. You're in the fog of unknowns. Your job is to map the terrain before you commit to a path down the hill.

The error Bobby sees most often: teams think they know enough to skip to the second half. They start executing before they've discovered the shape of the problem. Then, when something breaks mid-execution, they discover they're still on the first half. The rework cost — in time, in code already written, in habits the team has already formed — is enormous.

At Ford, that was the spike. In software, it's the "we need to rearchitect" conversation, six months into a build, when the first real users arrive and the product doesn't fit their actual job.

---

## Visual Aid

![[../assets/2026-04-08-jtbd-session-16-prototyping-to-learn.png]]

---

## Three things to hold onto

1. **Prototyping to learn is not hypothesis testing.** It's an admission that you don't know. You're building experiments to discover which variables matter and where the system breaks, before you've committed to a direction. Hypothesis testing comes after — in the verification phase — once you've found the variables worth verifying.

2. **The cost multiplier is the strategic argument for front-loading.** Every change that happens post-launch costs 1,000 times what it would have cost to resolve in the concept phase. The Toyota pattern — dense experimentation early, near-zero rework late — isn't just faster. It's cheaper by an order of magnitude. This applies to language learning apps as directly as it applied to car manufacturing.

3. **"Fun," "confidence," and "progress" are effects, not variables.** The practical lesson from Sandra's prototyping work. You cannot prototype for fun. You can prototype for the things that cause fun to appear and disappear. Find the variables that drive the effect, find the operating window, then build within it.

---

## Open Question

> Bobby's central claim is that most teams don't know what they don't know — and they build prototypes that confirm their hypotheses rather than exposing their unknowns. The Toyota insight is that this is the single biggest driver of wasted development cost.
>
> Kevin, you built a personalised spoken onboarding tool for language learning — eight questions, Krashen-based, producing a personalised plan. Bobby's response was immediate and positive: *"You're on the right track."* But then he added something specific about balance between context-based and outcome-based questions.
>
> Think about that tool as a prototype. In Bobby's framework:
>
> 1. **What question was it designed to answer?** (What was the unknown it was trying to reveal?)
>
> 2. **Was it prototyping to verify or prototyping to learn?** Did you have a hypothesis going in — or were you genuinely discovering something?
>
> 3. **Where are the variables you haven't tested yet?** If you built two or three radically different versions of that onboarding flow — different question sequences, different framings, different balances of context vs. outcome — what would you most want to learn from the comparison?
>
> The answer will tell you where you are on Bobby's hill chart.

**Kevin's answer:** *(not yet provided)*

---

## Next session

**Session 17: The Four Roles of Prototypes** — Bobby identified four distinct purposes a prototype can serve: learning (answering a critical unknown), communication (bridging different teams or functions), integration (showing how two systems come together), and milestone (demonstrating progress). Each role demands a different kind of prototype — and confusing them is one of the most common mistakes teams make. Built entirely from the February session with supporting examples from the Ford/Toyota case.
