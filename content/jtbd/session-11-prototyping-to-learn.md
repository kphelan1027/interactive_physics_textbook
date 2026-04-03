---
track: jtbd
session: 11
title: "Prototyping to Learn — Why Testing Fast Is the Whole Game"
date: 2026-04-03
tags: [jtbd, bobby-moesta, prototyping, prototyping-to-learn, prototyping-to-verify, concept-phase, toyota-vs-ford, pd-bell, l4-array, l9-array, paired-comparisons, taguchi, deming, cost-of-change, three-prototypes, contrast, discovery]
visual: /assets/2026-04-03-jtbd-session-11-prototyping-to-learn.png
visual_caption: "The Cost Curve: a steep exponential line from left to right, with four markers: Concept (1×), Development (10×), Market Introduction (100×), Post-Launch Recall (1,000×). A second overlay shows the typical distribution of prototyping effort — almost all of it in the development and market introduction stages. A shaded zone labelled '70% of lifecycle costs set here' covers only the Concept phase. The gap between where costs are set and where testing actually happens is the central argument of the session."
reuse: public
open_question_answered: false
---

# JTBD — Session 11: Prototyping to Learn — Why Testing Fast Is the Whole Game

> *"The interview can only help you frame the problem. Prototyping is where you frame the solution."*
> — Bobby Moesta (1 April 2026, Memrise Interview Training session)

> *"I was never smart enough to form a hypothesis. All I know is I could change things and see what happened."*
> — Bobby Moesta

---

## The simplest true statement

There are two ways to prototype. One tests whether you're right. The other tests whether you understand the problem. They look similar from the outside. They produce completely different results.

Prototyping to verify: you already have a hypothesis. You build something to prove it. You run an A/B test. You measure conversion lift. You confirm what you suspected.

Prototyping to learn: you don't know the answer. You build something to find out how the system behaves. You specifically design situations where you could be wrong. You are not looking for confirmation — you're looking for thresholds, trade-offs, and cause-and-effect relationships that you cannot deduce from a desk.

Bobby's entire prototyping methodology is built on the second approach. And the reason is practical, not philosophical: prototyping to verify is expensive, because you're spending it to confirm a belief you probably got from your own head. Prototyping to learn is efficient, because you're spending it to get information you couldn't have had any other way.

---

## Where we are

Session 10 gave you the interview — the tool for understanding the demand side. You now know the struggling moment, the context, the desired outcome, the language the user uses to describe their life. You know what job you're trying to solve.

Now you need to figure out the solution. And the problem with "figuring out the solution" is that solutions are causal systems. They either cause the user to make progress or they don't. And causation is not something you can reason your way to — you have to test it.

This is where prototyping lives. It's the bridge between demand-side insight and supply-side execution. You understand the job. You don't yet understand how to solve it.

---

## The cost argument: 70% at concept, almost no prototyping

Bobby's opening data point for any prototyping discussion:

| Stage | Cost Multiplier |
|-------|----------------|
| Concept | 1× |
| Development | 10× |
| Market introduction | 100× |
| Post-launch recall / rework | ~1,000× |

A decision made in the concept phase that turns out to be wrong costs 1× to fix. The same decision, if not caught until development, costs 10× to fix. If it reaches customers, 100×. If it requires a recall or major product rework after launch, approximately 1,000×.

This is not an argument against shipping. It's an argument for doing the most intensive learning *before* the costs lock in.

Bobby's observation: **70% of lifecycle costs are set during the concept phase** — where the least prototyping occurs. Most teams do the most prototyping in development and testing, when they're confirming things that were decided long before. The highest-leverage learning is happening in the lowest-investment stage.

Toyota vs. Ford is the empirical proof:

- Ford: 72 months to develop a car
- Toyota: 36 months (two models for every one Ford)
- Toyota's concept phase: 2–3× more diverse approaches evaluated
- Toyota's system development: 10× more experiments run to find thresholds
- Result: **10× less rework after launch, development costs approximately one-tenth of Ford's**

Toyota didn't go faster by moving faster. They went faster by learning faster at the beginning, which meant they had far fewer surprises to deal with later. By the time they were building, they knew the shape of the problem. Ford was discovering the shape of the problem while building.

Bobby's synthesis: *"Those who prototype fastest always win."*

But the key word is *prototype* — structured, varied, learning-oriented testing. Not building and shipping fast. Building to learn fast, before building to ship.

---

## The fundamental difference: verifying vs. learning

This distinction is worth sitting with, because it changes everything about how you approach a prototype.

| Dimension | Prototyping to verify | Prototyping to learn |
|-----------|----------------------|---------------------|
| Starting point | A hypothesis | A question |
| Approach | 1–2 options | Many dimensions |
| Goal | Confirm or refute | Expose how the system behaves |
| Acceptable outcome | "We were right" | "We found the threshold" |
| Expected failures | None (failure = problem) | Some (failure = data) |
| Result | Confirmation | Discovery |

The mental shift: when you're prototyping to learn, a prototype that doesn't work is not a failure. It's information. You found a threshold — the place where the solution stops working. Knowing where the solution stops working is enormously valuable. It tells you what's actually causing the effect, not just that an effect exists.

Bobby: *"Two good [prototypes] and one bad — because you need to know what bad is. If you don't know what bad is, you don't actually know what you're talking about yet."*

A team with two prototypes that both work has learned one thing: both options are above some threshold. A team with two good prototypes and one bad one has learned something about where the threshold actually is. The bad prototype is the most informative of the three.

This is counterintuitive. Teams want all their prototypes to be good. They're proud of their work. They've invested in it. Presenting a deliberately bad option feels wasteful, or self-defeating. It's actually essential. Without it, you don't have contrast. And contrast is where meaning lives.

*"Context creates value. Contrast creates meaning."*

---

## Why you need at least three prototypes

Two is not enough. Bobby is specific about this.

With two prototypes, you can get a preference. "More people preferred A to B." What you can't get is triangulation — any understanding of the shape of the decision space.

With three, you can begin to see geometry. If A beats B, B beats C, and A beats C — you have a ordering and you can start to understand what's driving it. If A beats B and B beats C, but C beats A on some dimensions — you've found real complexity and you've found the trade-offs that actually matter.

Two prototypes polarise. Three prototypes create a space.

Bobby's instruction: *"Start as wide as possible with 3 very different prototypes."* Not three variations on the same idea. Three genuinely different approaches to the same job. The goal is to spread out as far as possible in the solution space so that you can learn where the edges are.

*"The minimum requirement for contrast is 3. Not 2."*

From the Memrise prototyping session — four concepts require six comparison pairs. Even with just four options, the comparison structure becomes rich enough to surface real patterns. Two options give you one data point. Four options give you six.

---

## The four roles of a prototype

Bobby describes four distinct reasons to build something:

1. **Learning** — answer a specific question about cause and effect. What must be true for this to work? Does removing this feature change the outcome?

2. **Communication** — make an idea tangible so that different people in the organisation can react to the same thing. You cannot align on something abstract. A prototype makes the abstract concrete.

3. **Integration** — show how two different systems (or two different teams' work) come together. The interface between systems is where surprises happen. Build early to find them.

4. **Milestone** — show progress. Sometimes a prototype exists to give management or customers something to react to, not because you have a specific question. That's legitimate — but it's a different purpose, and you should know which one you're serving.

The mistake most teams make: treating every prototype as if it serves all four roles, and therefore designing it to be comprehensive rather than focused. A prototype designed for learning needs to isolate variables. A prototype designed for communication needs to look real. A prototype designed for integration needs to test the seam. Trying to serve all four simultaneously produces an object that does none of them well.

---

## Two dimensions: conceptual vs. physical, focused vs. comprehensive

Bobby maps prototypes on two axes:

|  | **Focused** | **Comprehensive** |
|--|-------------|-------------------|
| **Conceptual / Analytical** | Cheapest | Moderate |
| **Physically Built** | Moderate | Most expensive |

The principle: start at the cheapest option. Move toward more expensive only when you've exhausted the learning available at the cheaper level.

Concept-phase prototypes should almost always be conceptual and focused. You're not building. You're sketching, describing, using language and images and rough mockups. You're running tests on paper and in conversation. You're using an L4 or L9 array to find which variables matter before investing in physical build.

The Zest case study: 8 ad concepts based on 7 key factors. Conceptual and structured. 150% increase in conversion rates. Nothing was built until the concept-phase learning was done.

The mistake is jumping to physical + comprehensive before the conceptual work has produced its answers. Building a polished prototype too early locks in decisions that should still be open.

---

## The PD Bell Process

Bobby's operational framework:

**Plan → Design → Build → Evaluate → Learn**

- **Plan:** Identify the specific question to answer. What don't you know that you need to know?
- **Design:** Figure out the minimum set of prototypes required to answer that question. What variables matter? How many levels? How many combinations?
- **Build:** Create only what's necessary to test what you've designed. Not more.
- **Evaluate:** Measure response. Recruit people in the specific job. Run comparisons.
- **Learn:** Extract the actual cause-and-effect relationships. Don't just report preference — report *why*.

The most common failure mode: skipping straight to Build without doing Plan and Design. You end up with one prototype that tests nothing, because there's nothing to compare it to.

---

## Testing methods

### Paired concept comparisons

Show each respondent two or more options. Ask for advantages and disadvantages of each. Award +1 to the preferred option, −1 to the non-preferred.

Listen specifically for **new language** — words and phrases the respondents use that you hadn't thought of. This is some of the most valuable data in the entire exercise. The language a user reaches for when comparing two things tells you more about how they're thinking about the job than any explicit answer.

Use AI to analyse transcript recordings. Pull out common themes and repeated words automatically. The patterns in the language are the signal.

### The "How disappointed would you be?" question

Better than asking users how much they like something. Stated negatively — prompts users to consider the consequence of removal rather than declaring approval.

*"How disappointed would you be if this feature was removed?"*

The three-point scale: "Not at all disappointed" / "Somewhat disappointed" / "Very disappointed." When a large proportion of users say "very disappointed," you've found something load-bearing. When they say "not at all," you've found something decorative.

The phrasing matters. "How disappointed would you be?" activates loss aversion in a way that "how much do you like this?" doesn't. People's relationship with loss is more reliable than their relationship with preference.

### Sample sizes and statistical interpretation

Bobby is precise about what small samples can and cannot tell you:

- **Discovery phase:** 10–12 tests is sufficient to identify which variables matter. You're not doing statistics. You're doing exploration. Patterns in 10 interviews are real — not as proof, but as hypotheses worth testing further.
- **Proof phase:** A second round, with more participants, to find the best combination of the variables you've identified.
- **Statistical proof:** Requires a survey at scale. The initial samples are for discovery, not publication.

*"This is more of a math exercise than a statistics exercise."*

### Taguchi arrays for structured experimentation

When testing multiple variables at multiple levels, Bobby uses Taguchi arrays — a methodology from Dr. Genichi Taguchi (one of his four mentors) for designing experiments efficiently.

The principle: you don't need to test every combination of every variable (which grows exponentially). You can learn almost as much from a structured subset.

- **L4 array:** 4 experiments covering 3 variables at 2 levels each. Used when starting with a first round of discovery — reduce variables to two levels for simplicity.
- **L9 array:** 9 experiments covering 4 variables at 3 levels each. Used in a more structured second round.

The Zest case study used 8 ad concepts testing 7 factors. Structured. Efficient. The result — 150% conversion increase — came not from shipping the best ad immediately but from understanding which factors were actually driving preference.

---

## The Memrise application: "fun" as a variable

The prototyping workshop session walked through a live example using Memrise's JTBD #1: "Help me improve myself through learning a language for fun."

Bobby's opening observation: **"fun" is an effect, not a cause.** You cannot prototype "fun." You have to prototype the specific things that cause users to report feeling fun. Fun is the output. What are the inputs?

Same applies to trust. You cannot design for trust directly. You have to design the specific actions that cause trust to emerge.

The team identified five variables for the "improve myself for fun" job:

| Variable | Option A | Option B |
|----------|----------|----------|
| Content Type | App-created native speaker content | Country-produced content (songs, stories, etc.) |
| Capability Framing | Session-by-session comprehension | Cumulative milestone capability ("you can now converse about X") |
| Progress Signal | Comprehension-based | Capability-based |
| Content Depth | Structured advanced path | User-generated via AI tools |
| Re-engagement | Available when ready | Intrinsic motivation-relevant nudges |

None of these variables are answerable from a desk. You might have a strong intuition that capability-based progress signals are better than comprehension-based ones. But you don't know. And the person who says "I learn for fun" might have radically different preferences from the person who says "I learn for work." The only way to find out is to test.

Bobby's guidance from the session: sometimes the goal is to ensure people **don't hate** the option rather than maximising preference. The cinnamon gum insight — widely popular because nobody loves it intensely and nobody hates it strongly. Sometimes the right position is "least objectionable" rather than "most preferred." Prototyping should test for this too.

---

## The gas gauge arrow

Bobby's proudest innovation is not the mattress company or the SNHU transformation. It's the arrow on the gas gauge.

He was driving Dr. Deming to the airport in 1987. Different rental car. Panic: which side is the filler cap on? He had to circle the car, wasting time, risking being late.

He spent five years getting that arrow onto every car. 1985 to 1990. He made no money from it. It is now on virtually every car manufactured.

*"What would be on St. Peter's list to get you into heaven?"*

Bobby's point: the best innovations often come from the smallest, most universal struggling moments. Not grand technological features. Not competitive differentiation. A small thing that makes a real difference, for everyone who's ever rented a car.

The gas gauge arrow is a monument to prototyping to learn. Nobody tested it. Nobody ran an A/B experiment. Bobby saw the struggling moment, designed the solution, and spent five years navigating the supply-side machinery to get it into production. The concept phase was essentially free. The implementation cost everything.

The implication for product: look for the gas gauge arrows in your own product. The small things that cause small struggles — invisible, universal, never on anyone's roadmap — are often the highest-ROI investments in the building.

---

## Visual Aid

![[../assets/2026-04-03-jtbd-session-11-prototyping-to-learn.png]]

---

## Three things to hold onto

1. **70% of lifecycle costs are set in the concept phase — where almost no prototyping happens.** The expensive mistakes are made when you're barely thinking yet. The solution is to front-load structured learning through prototypes before the decisions lock in. Toyota vs. Ford is the proof: 2–3× more experimentation in concept phase → 10× less rework after launch.

2. **You need at least three prototypes — and one of them should be bad.** Two prototypes give you a preference. Three give you triangulation. The deliberately bad option is the most informative: it tells you where the threshold actually is. Without knowing what bad is, you don't know what you're optimising for.

3. **Prototyping to learn is not A/B testing.** A/B tests confirm what you suspect. Prototyping to learn discovers what you don't know. The test is not designed to verify a hypothesis — it's designed to expose the system's behaviour at the edges, find the cause-and-effect relationships, and give you language from the user that you didn't have before. Start conceptual and focused. Go comprehensive and physical only after you've exhausted the cheaper learning.

---

## Open Question

> Bobby's claim: 70% of lifecycle costs are set in the concept phase, where almost no prototyping happens. Most teams prototype in development and testing — when the decisions are already made.
>
> Think about the last product decision you were involved in at Memrise. It doesn't have to be big — a feature, a flow change, a copy decision, anything.
>
> **Where in the PD Bell Process did you actually start?** Did anyone run concept-phase prototypes? Was there a moment when three different approaches were compared — including a deliberately bad one?
>
> If not: what would a concept-phase prototype have looked like for that decision? What was the specific question it would have needed to answer? And what would "the bad option" have been?
>
> Bonus: Bobby says those who prototype fastest always win. What's the single biggest thing slowing down prototyping speed at Memrise right now?

**Kevin's answer:** _(not yet provided)_

---

## Next session

**Session 12: The JTBD System — From Struggling Moment to Product Architecture** — We've now covered the full toolkit: struggling moments, the four forces, the six phases, the six systems, non-consumption, the interview, and the prototype. This final session assembles the full picture: how a company structures itself around jobs (the Intercom model), how struggling moments feed a roadmap (the iPhone example), and how to use everything we've learned to evaluate Memrise's current product against the jobs it's actually hired to do.
