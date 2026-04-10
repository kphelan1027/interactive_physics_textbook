---
track: jtbd
session: 18
title: "Contrast and the Rule of Three"
date: 2026-04-10
tags: [jtbd, bobby-moesta, prototyping, contrast, rule-of-three, ab-testing, paired-comparisons, l4-array, cause-and-effect, zest-case-study, operating-window]
visual: /assets/2026-04-10-jtbd-session-18-contrast-rule-of-three.png
visual_caption: "Three prototype cards side by side, each clearly different from the others, with bidirectional arrows connecting each pair. Below: a 2×2 grid showing an L4 array with variables A, B, C mapped across four prototypes. A small annotation reads: '3 prototypes = map of the space. 2 prototypes = winner, no map.'"
reuse: public
open_question_answered: false
---

# JTBD — Session 18: Contrast and the Rule of Three

> *"At a minimum I always have three really different approaches. What I realize is that two approaches does not actually give me the contrast I need."*
> — Bobby Moesta, February 26 2026

> *"Contrast creates meaning."*
> — Bobby Moesta, same session

---

## The simplest true statement

Two prototypes give you a winner. Three prototypes give you a map.

That is the whole lesson. Everything else in this session — the Zest case study, the L4 array, the paired comparisons, the operating window — is an unpacking of why that statement is true, and what to do about it.

---

## Where we are

Session 17 introduced the four roles of prototypes and the two dimensions of type. This session goes one step further into the practical mechanics of running prototypes: how many do you need, how different should they be, and how do you compare them in a way that actually reveals cause and effect?

Bobby returned to this topic repeatedly across the February and March sessions. It is the thing he corrected most often when Memrise teams showed their work. The pattern was consistent: teams built two prototypes, compared them, declared a winner, and moved on. Bobby's diagnosis was always the same. Two isn't enough. You found which of two things is better — you did not find out *why*, and you have no idea whether there's a third thing that would be better than either of them.

---

## Why AB testing isn't enough

Bobby was direct about this in the February session:

> *"AB test is the most inefficient way in which to really test something from a knowledge perspective from actually answering unknowns. Because you can actually build two different prototypes, see the differences, but you don't know what caused the differences if you don't think about it in a different way."*

This is a pointed claim. AB tests are the default tool in most product teams. Bobby isn't saying don't use them. He's saying they're structurally incapable of answering the question that matters: not which option is better, but what *causes* one option to be better than another.

If you test version A against version B and A wins, you know A is better. But if A and B differ in three ways — headline, layout, and content type — you don't know which of the three differences drove the result. That means you can't scale the insight. You can't use it to make decisions about the next thing you build. You have a winner, not a mechanism.

What you need is cause-and-effect. And for that, you need contrast — specifically, you need contrast that is deliberate enough that you can isolate variables.

---

## Contrast creates meaning

Bobby's phrase is compact enough to hold the whole concept: *contrast creates meaning*.

If all your prototypes are variations on the same idea — same structure, slightly different wording — they're too similar to teach you anything. Users can't differentiate them meaningfully. You get noise, not signal.

> *"If we have two prototypes that are just almost identical and they can't tell the difference, we don't learn anything."*

The corollary: the more different the prototypes, the more you learn.

> *"The more different the prototypes, the better, the more we're going to learn."*

This is counterintuitive to most product teams, who tend to iterate conservatively — small changes, controlled comparisons. Bobby's argument is that conservative iteration is appropriate when you're refining something you already understand. When you're in discovery mode — which is where JTBD puts you by default — you need wide variation to find the shape of the problem. Start wide. Narrow later.

> *"I'd rather go as wide as possible to start and then basically do iterations of three to basically narrow it down."*

---

## The Rule of Three

Why three, specifically? Bobby's explanation from the February session:

> *"I always want three different prototypes in terms of basically helping me build that contrast so we can learn about what is important or what is different."*

With two prototypes, you get a binary comparison. One wins. One loses. But you have no reference point — no third position that helps you understand the *space* between them. Is the winner just slightly better? Dramatically better? Would a fourth option be better still?

Three prototypes give you a structure. You can compare 1 vs 2, 1 vs 3, and 2 vs 3. Each comparison teaches you something different. Together, they start to map the operating space — the region within which good solutions live, bounded by what's too much and too little.

Bobby drew this out explicitly in the March session when Sandra Zavala was working on the "fun and progress" job for language learners:

> *"There's fun. This is not fun because it's too easy. And this is not fun because it's too hard. There's progress. There's not enough progress, and there's too much progress. The goal is really to find these thresholds — because I don't think there's an optimum for everybody, but there's one where you can say: for some people this is not enough fun, and for other people that's too much fun."*

One prototype doesn't find a threshold. Two prototypes find one edge. Three prototypes find both edges and begin to define the window.

> *"Part of the prototypes are to figure out when is it not enough, when is it too much. And so instead of asking them outside their category, ask them inside the category."*

---

## The Zest case study

Bobby's cleanest example of the Rule of Three scaled up is the Zest case study from the February session. Zest is a cooking education company. They needed to understand what drove conversion in their marketing — specifically, what made people click on a video and sign up.

The team identified seven key factors they could change across two dimensions:

- **Four video hook variables** — whether each of four different hooks was on or off
- **Three topic variables** — corresponding to three main jobs: "I'm spending too much money," "I want to learn to cook for somebody else," "I want to be independent"

Seven factors at two levels is 128 possible combinations. The challenge is testing that space efficiently.

Bobby's approach: use a structured experiment design to get the most learning from the fewest tests. In this case, eight ads — eight combinations — gave them enough contrast to isolate the important variables.

> *"They basically built these eight different ads, eight different TikTok videos if you will, that would basically help understand what is different. And they would basically go and test each one of those eight."*

What they discovered:

> *"The most important step was to move away from a gamified framing. When they gamified-framed it, people were afraid of it and it actually had worse conversion for them. They actually needed to lean into practical learning and healthy living."*

And the output:

> *"They were able to change the way they actually recruited, which actually increased their conversion rate by almost 150%."*

That insight — gamified framing actively reduces conversion — would never have emerged from an AB test. It required enough contrast across enough variables to see that gamification was the *negative* driver, not just a neutral feature.

---

## The L4 array: doing more with less

Bobby introduced a specific framework for running multi-variable experiments efficiently: the L4 array (from Dr. Taguchi's designed experiments methodology).

The logic: if you have three variables at two levels each, the complete set of all combinations is 2³ = 8. Testing all eight is thorough but expensive. The L4 array lets you cover all three variables in just four prototypes — at 50% efficiency — by designing the combinations carefully so each variable appears equally across all four.

Bobby explained this in the March session when Sonia Souto was working on B2B construction-worker language learning:

> *"When you have two levels you can do four. When you go to three variables at three levels, you need nine experiments. My suggestion for you: take the first round and break it into two different levels for each one and replicate the L4."*

The L4 structure he sketched:

| Prototype | Variable A | Variable B | Variable C |
|-----------|------------|------------|------------|
| 1         | Level 1    | Level 1    | Level 1    |
| 2         | Level 1    | Level 2    | Level 2    |
| 3         | Level 2    | Level 1    | Level 2    |
| 4         | Level 2    | Level 2    | Level 1    |

Each variable appears twice at Level 1 and twice at Level 2 across the four prototypes. When you compare prototypes 1 and 2 (Variable A is constant, B and C change), you isolate the effect of B and C together. Compare 1 and 3 (B constant) and you isolate A and C. Compare 1 and 4 (C constant) and you isolate A and B.

> *"The L4 is the one: one-one, two-two, one-two, one-two, two-two-one — which is three variables. Two to the three which is eight, and we're doing it in four — so we actually have 50% efficiency on our prototyping. And ultimately, the fact is we're going to learn a lot more than just testing one variable at a time."*

This is the operating principle behind the Rule of Three extended: minimum prototypes, maximum contrast. Don't just pick three at random — design the three (or four) so that the differences between them are systematic and informative.

---

## Paired comparisons: the mechanism for learning

Once you have your three (or four) prototypes, the question is how to show them to users. Bobby gave Sandra detailed guidance on this in the March session.

The method: show users pairs. Give them two prototypes side by side. Ask them which they prefer and why. Then give the preferred prototype a point, the non-preferred one a negative point. Run this across all possible pairs.

For four prototypes (1, 2, 3, 4), the complete set of pairs is:
- 1 vs 2
- 1 vs 3
- 1 vs 4
- 2 vs 3
- 2 vs 4
- 3 vs 4

Six pairs total. That's six data points per user, each comparing two prototypes directly.

> *"I'm going to take Memrise away and give you four different concepts. Present them in pairs and say: here's concept one and here's concept two. Help me understand what are the advantages and disadvantages of each one — because they're going to start to articulate new language. 'Oh, this one doesn't have enough of that. That one doesn't have enough of this.'"*

The scoring creates a ranked outcome across all four prototypes. But — critically — it also generates qualitative language. Users articulate *why* they prefer one thing over another. That language is data. It reveals the variables that are actually driving their preference, which are often not the variables you hypothesized going in.

> *"They're going to start to articulate new language. And so part of it is to listen to those differences to then create some variables on the output of what they said."*

Bobby added a warning about accumulation bias: users can't evaluate each pair independently if they're remembering the previous pair.

> *"They have to be independent kind of evaluations just comparing the two together. This is AB testing on steroids. But ultimately, this is how we determine cause and effect."*

The fix: either run pairs in separate sessions with different users, or explicitly instruct users to reset after each pair. Bobby also noted that fatigue sets in around four prototypes — beyond that, users struggle to differentiate meaningfully.

---

## Randomise the sequence

When showing multiple prototypes in sequence, randomise the order across users.

> *"Most people don't know on the first thing you show them. It's the reference point for everything else. If they really don't like the first one, the next one's always going to be better. If they really like the first one, the rest of them will be worse. So you have to be careful about how you actually test."*

This is the same confound that made Sonia Souto's three-prototype sequence unreliable — users learned from the first exposure and couldn't evaluate subsequent prototypes independently. Randomisation distributes the first-impression bias across the whole sample rather than concentrating it in one prototype.

---

## Sample size: discovery first, proof second

A predictable question at this point is: how many users do you need?

Bobby's answer shifts the frame entirely:

> *"I think more about it as a math problem than a statistical problem. The first thing is: can I discover what's there? In engineering, we only get to make maybe 10 or 12 tests. But once we have it, we can actually go do a statistical hypothesis test of whether this really makes a difference."*

The distinction: discovery and proof are different activities with different sample size requirements.

- **Discovery** is about finding which variables matter. 10 users is enough. You're not trying to prove anything — you're trying to find the signal.
- **Proof** is about establishing statistical confidence in a combination. This requires a survey, larger samples, and proper hypothesis testing. It comes second.

Most teams do these in the wrong order. They run large samples to prove things before they've discovered the important variables. Bobby's approach is to keep prototyping cheap and fast in the discovery phase, then invest in proof once you know what to prove.

> *"Taguchi always used to say: this is not a statistics problem. This is an engineering problem of how do we engineer confidence. I need to discover how that happens, and then I can actually prove that it works in the second-round test."*

---

## The "fun" operating window: a live example from Memrise

Bobby used Sandra Zavala's "learning for fun" job to demonstrate how three prototypes map an operating window.

The problem Sandra had: users say they want fun, but the word is vague. She couldn't figure out what to prototype because she didn't know what "fun" meant precisely enough to design experiments around it.

Bobby's reframe: don't try to find what fun is. Find what it isn't. Build prototypes that explore the *boundaries* — too little fun, too much fun — and the window between them becomes visible.

> *"Build a set of prototypes to know where it's not fun anymore. Find the space by which we can say: fun resides between more than this, but less than that."*

He drew two axes: fun (too little ←→ too much) and progress (too little ←→ too much). The target isn't an optimum point — it's an operating window. The product needs to live somewhere in the middle of both dimensions.

> *"The goal is to find these thresholds because I don't think there's an optimum for everybody — but there's one where you can say: for some people this is not enough fun, and for other people that's too much fun. There's the other side: when there's too little or too much."*

This is the Rule of Three applied to the problem of pabulum words. You can't ask users what fun means — they'll give you a pabulum answer ("I don't know, it's just fun"). But you can build three prototypes that explore three different positions on the fun-progress axes, and users *can* tell you which one is not enough, which is too much, and which lands in the window.

The three prototypes aren't trying to win. They're trying to bound the space.

---

## Minimising negative preference vs. maximising positive preference

Bobby introduced a second framing for what to optimise that runs counter to most product instincts.

Most teams try to maximise preference — find what users love most and build that. Bobby's experience says this is often the wrong goal:

> *"The more I actually make people like it, the more I would actually make people hate it. So what I actually ended up doing is realizing: how do I just minimize the people who hate it?"*

His example was cinnamon gum at Wrigley:

> *"Cinnamon gum is the most popular of all gums because it's actually set at a point that nobody really loves it, but nobody really hates it."*

This applies directly to prototyping with three options. When you run paired comparisons, you're gathering two kinds of data simultaneously: what people prefer, and what people actively reject. Bobby's advice is to pay close attention to the minus scores — the prototypes that people consistently rank last.

A prototype with no strong lovers but no strong haters can outperform a prototype that half the market loves if the other half hates it. The Rule of Three surfaces this: with two prototypes, you find which is more loved. With three, you also start to see which is most hated, and whether the most-loved option is generating its own backlash.

> *"Sometimes it's actually not about making them all like it. It's just making sure they don't all hate it."*

---

## Memrise teams applying this in real time

### Harry and Kasia — connecting with others job

Harry's team had run four prototypes comparing app-generated vocab against AI-prompted vocab. Two users, each preferring a different prototype. Bobby's analysis:

> *"We're looking for the optimum, but ultimately we might actually find what we call sensory segments. You might actually end up having to have both features because some people want to generate it, some want you to generate it."*

The insight here — that two different prototypes can both be "correct" for different segments — would never have emerged from a binary AB test with a winner. It only became visible because the team had built enough contrast to see the split.

Bobby's next instruction: test with at least ten users, run paired comparisons, and stop trying to find a single winner. Look for patterns of preference and patterns of rejection.

### Sandra — fun and progress thresholds

Sandra had built three small conceptual prototypes testing variables: progress signal, content type, and pressure mechanic. Bobby walked her through how the combinations created dominant pairs — pairs where one variable's effect dominated the comparison:

> *"When I compare these two concepts, they have this dominant pair. These two concepts also have a dominant pair. So I can actually start to realize: does this have more an effect than any of the others?"*

The L4 structure meant that certain pairs held one variable constant while varying the others. That's how you isolate which variable drove the preference difference.

Bobby's specific guidance on running the comparisons: use AI on the transcripts to extract common language themes.

> *"Throw the recording of the transcript or cut the transcript for around the comparing those different concepts — so you can actually get more data out of this. AI will be able to pull out kind of common themes and words they use. What's similar between these two? What's different between these two and these other two? You can start to use AI to actually help you analyze that data."*

### Sonia — three variables at three levels (the L9 problem)

Sonia had designed prototypes across three variables with three levels each, without realising this required nine experiments (L9), not three, to learn the full space.

Bobby's intervention: reduce to two levels per variable, run the L4 first. This isn't a compromise — it's the right sequencing. Discover with the L4. If the L4 reveals that a specific variable matters a lot, expand it to three levels in the next round.

> *"For the first time I might reduce it to two and do an L4 so you can learn it. But eventually you'll get to what it calls an L9 or an L18. There's bigger numbers we can get to."*

The principle: the minimum viable experiment is always an L4. Start there.

---

## Visual Aid

![[../assets/2026-04-10-jtbd-session-18-contrast-rule-of-three.png]]

---

## Three things to hold onto

1. **Two prototypes give you a winner. Three give you a map.** An AB test tells you which option is better. It does not tell you why, and it cannot find the operating window. Three prototypes — designed to be as different as possible — give you a threshold on each side of the space and a sense of where good solutions live.

2. **Contrast creates meaning.** The more different the prototypes, the more you learn. Conservative variation produces noise. Wide variation — at least initially — produces signal. Go as wide as possible first. Iterate narrow later. This is the opposite of most product teams' instinct.

3. **Use paired comparisons to find both what people love and what they hate.** The minus scores are as important as the plus scores. Sometimes the goal isn't maximising preference — it's minimising rejection. Cinnamon gum isn't the most loved gum. It's the least hated gum. That's why it's the best-selling gum.

---

## Open Question

Bobby described the Zest case study and Sandra's fun-window work as two instances of the same underlying move: using contrast to reveal the *shape* of what you don't yet know.

Here's the question for you to sit with:

> **In Memrise's current prototyping work, are the three options being built as different as possible from each other — or are they variations on the same idea?**
>
> More specifically: if you look at the prototypes being tested by Sandra, Harry, and Sonia's teams, how would you characterise the distance between them? Is there enough contrast to learn something structural, or are they close enough together that any preference signal will be ambiguous?
>
> And one level deeper: when a prototype "wins" in a Memrise test, do you know *why* it won? Can you point to the specific variable that drove the difference? If not, the AB test gave you a winner but not a mechanism — and you're back at the start for the next decision.
>
> Bobby's test: *After running a comparison, can I explain what caused the difference?* If the answer is "not really" — more contrast was needed.

**Kevin's answer:** *(not yet provided)*

---

## Next session

**Session 19: Trade-offs — Choose What to Suck At** — Every prototype produces a map of preference and rejection. Once you have that map, you face the hardest decision in product development: you cannot satisfy everyone, and trying to do so produces cinnamon gum at best and nothing at worst. This session unpacks Bobby's framework for making deliberate trade-offs — what to optimise for, what to explicitly not optimise for, and why "choosing what to suck at" is the discipline that separates products people love from products that are inoffensive to everyone and beloved by no one. Built from the gum story, the sensory segments discussion, and Bobby's trade-offs framework from the February prototyping session.
