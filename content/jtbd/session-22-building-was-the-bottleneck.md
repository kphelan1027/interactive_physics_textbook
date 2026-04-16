---
track: jtbd
session: 22
title: "Building Was the Bottleneck. Now Testing Is."
date: 2026-04-14
tags: [jtbd, bobby-moesta, prototyping, testing-capability, competitive-strategy, pedagogy, learning-how-you-learn, kevin-tool, krashen, closest-to-the-customer, testing-panel, discovery, iterate-fastest]
visual: /assets/2026-04-14-jtbd-session-22-building-was-the-bottleneck.png
visual_caption: "Two-panel diagram. Left panel labelled '2010–2020: Building was the bottleneck.' Shows a funnel where ideas flow slowly through a thick 'Build' stage — a heavy cog — with a thin, fast 'Test' arrow at the end. Most time and cost consumed in the build phase. Right panel labelled '2024+: Testing is the bottleneck.' Shows the same funnel flipped — a thin, fast 'Build' arrow (AI-assisted, lightning bolt) feeds into a thick 'Test' stage — multiple diverging arrows — representing paired comparisons, panels, analysis. A dotted arc bridges both panels with the caption: 'Those who are closest to the customer and can iterate fastest will always win.' — Bobby Moesta."
reuse: public
open_question_answered: false
---

# JTBD — Session 22: Building Was the Bottleneck. Now Testing Is.

> *"Building used to be the limiting factor. Now it's testing. And so for us to think about how to build our testing capability and be able to iterate faster — the people who are closest to the customer and can iterate fastest will always win."*
> — Bobby Moesta, March 5 2026, Prototyping Workshop, Memrise

> *"Those who can prototype the fastest will always win."*
> — Bobby Moesta, February 26 2026

---

## The simplest true statement

For most of the history of software, the company that could build fastest won. That constraint has collapsed. The new constraint is testing. The company that learns fastest — closest to the customer, fastest feedback loop — is now the company that wins.

That is the whole session. But let's sit with it, because the implications are more radical than they first appear.

---

## Where this came from

This is Bobby Moesta's closing statement from the March 5 2026 workshop at Memrise. The team had spent three sessions across eight weeks learning how to think in Jobs, variables, prototypes, paired comparisons, and trade-offs. Bobby wrapped up the final session with this:

> *"I feel like I've unlocked a padlock that allows you to now think in multivariables and also systems — in a way to realise that there are subsystems and super systems and we need to know how to navigate between the two of them. So, all right — any open questions? We've got about 15 minutes. Otherwise, I'm going to ask you: what did you learn in this call? Because the way we solidify things is to make people articulate what they've learned."*

And then, before closing:

> *"Building used to be the limiting factor. Now it's testing. And so for us to think about how to build our testing capability and be able to iterate faster — the people who are closest to the customer and can iterate fastest will always win."*

He had said a version of this in the February session too:

> *"The phrase I always say is: those who can prototype the fastest will always win. Through my years of building products, I always focus on trying to say: what's the smallest fastest cycle I can do to get the most learning as fast as possible?"*

Two sessions, same statement. That repetition is deliberate. Bobby is not offering a productivity tip. He is describing a structural shift in where competitive advantage lives.

---

## The Ford–Toyota lesson, restated

Bobby opened the February session with the Ford versus Toyota story. Ford took 72 months to develop a car. Toyota took 36. For every car Ford shipped, Toyota shipped two.

The reason was not that Toyota had better engineers. It was that Toyota ran more experiments earlier. They did three times as many diverse concept approaches in the concept design phase. They did ten times more experiments during system development. They spent resources learning up front — at cheap, conceptual, analytical prototype cost — so they had almost no rework at launch.

Ford did the opposite: minimal prototyping early, maximum rework late. The cost of a change at launch is 100 times the cost of the same change at concept. The cost of a post-launch recall is 1,000 times.

> *"70% of lifecycle costs were set in the concept phase — where we did the least amount of prototyping. And 70% of development resources were always applied to the end of the process."*

This is the fundamental misallocation. Teams spend money on the expensive, late, locked-in part of the cycle — and underinvest in the early, cheap, still-flexible part. Toyota reversed it. The learning curve became cheap. The launch became certain.

Bobby's direct translation for software teams:

> *"We want to be able to prototype up here — in the early phase — and understand what we don't know before we build it."*

---

## The constraint has shifted

Here is why this matters now more than it ever has.

In 2015, the binding constraint in software was building. Writing code was slow. Shipping features took months. A small team could have a great idea and a deep understanding of user needs — but if they could not build it, the insight was worthless. Build speed was the bottleneck.

That constraint is dissolving. AI has made building faster by an order of magnitude. A solo developer with Claude Code or Cursor can produce in days what previously took a team of five a sprint. Scaffolding, boilerplate, database schemas, API integrations — increasingly these things are generated in minutes. A prototype that once took two weeks to build can now be hacked together in a morning.

If building is no longer the bottleneck, what is?

Understanding. Discovery. Knowing which thing to build before you build it.

> *"Now it's testing."*

The competitive advantage is no longer held by the team that can write code fastest. It is held by the team that can:
1. Get closest to the customer — interview more people, understand the Job more deeply
2. Iterate fastest on insight — run paired comparisons, design L4 experiments, analyse transcripts with AI
3. Predict before they build — because they have been in the customer's context long enough to know what will resonate

This is the shift Bobby is naming. Software teams optimised for the previous constraint. The constraint changed. Most teams have not noticed.

---

## What "closest to the customer" actually means

Bobby used this phrase — "closest to the customer" — carefully. It is not a general claim about empathy or listening. In JTBD terms, being closest to the customer means very specific things:

**1. You know the struggling moment.** Not the feature request. Not the satisfaction score. The specific moment in someone's life where something is not working and they cannot make progress. That moment — the seed of all innovation — requires being close enough to see it as lived experience, not as abstracted data.

**2. You can predict what they will say before the test runs.** Bobby's test for whether you have done enough prototyping: can you describe a new concept and accurately predict whether users will prefer it or reject it? If you can, you have built up enough context to stop testing and start deciding. If you cannot, you have more unpacking to do.

> *"You stop prototyping when you can predict what people will say."*

**3. You understand the language inside the words.** "Fun." "Easy." "Better." "Practical." None of these are answers. They are all packages — containers full of specific emotions, contexts, and actions that vary by user. Being closest to the customer means you have done enough interviews to know what is inside those packages for your specific user, in their specific job. Not in general. For them, right now.

**4. You have a panel.** Bobby was direct about this in the February session. The practical infrastructure for being closest to the customer is not just doing interviews when you have a big decision. It is building a standing panel — a set of users who are in the jobs you are studying and who are willing to give you feedback as you design things.

> *"You might actually build a panel of a hundred people who are willing to give you feedback as you design things. And ultimately, you can give them two, three, or four options — more than four is very hard for people to differentiate."*

A panel is not a user research database. It is a living cohort of people in the specific jobs you serve, on call for paired comparisons. That is the infrastructure of "closest to the customer."

---

## Kevin's tool: a preview of the right direction

The session produced one of the most memorable exchanges of all three Bobby Moesta workshops. Kevin shared a personal language learning tool he had built — a spoken-interface onboarding system that asks eight questions, builds a personalised learning plan, and then teaches entirely through comprehensible input at one level above the user's current proficiency.

The theory underneath it is Stephen Krashen's i+1 hypothesis: learners acquire language most efficiently when exposed to input that is slightly above their current level — just comprehensible enough, just challenging enough. Kevin's tool implemented this through AI: you speak to it in English or in the native language, it figures out where you are, and it speaks back to you at the level just above.

Bobby's response:

> *"You're headed down the right track. I think this is where all of education needs to go — because at some point we've got to meet them where they're at. The eight questions — what we want to do is make sure at least four of them are based in context and four are based on outcomes. Because it's the combination of context and outcome that will determine the amount of pressure, the amount of rigor you're willing to go to, the amount of time you're willing to spend."*

He then immediately connected it to the strategic point:

> *"This is a preview of where we need to go. I'm not saying we have to go there right away — but to realise that if we can help people learn how they learn, that's how we're going to actually help them get to where they want to go."*

Bobby was not just praising the feature. He was identifying the Job underneath the feature: help me learn the way I learn. Not the way the curriculum assumes I learn. Not the way the average user learns. The way this specific person, in this specific context, with this specific goal, actually acquires things.

This is the supply-side/demand-side gap from Session 8 applied to pedagogy. Most education products are designed around how educators think learning works — supply side. Kevin's tool starts with how this person actually learns — demand side. That difference, Bobby said, is the direction all of education needs to go.

---

## Bobby's own pedagogy: prototyping for yourself

The workshop exchange that followed was unexpected and vivid. Bobby told the group how he had built his own learning infrastructure — because he is dyslexic, and conventional learning environments consistently failed him.

He described asking Claude to interview him. Not to teach him something. To understand how he learns:

> *"I asked Claude to say: I want you to ask me 20 questions around different topics about how I learn things. And it asked me to find three things that I've learned in the past where I would say I was a novice and got to an expert level. And then it basically walked me through and said: what are the things you did? Did you do this? Did you do that? But ultimately it built a pedagogy — here's how I learn."*

He then turned that output into a personal prompt:

> *"I turn that report of how I learn into a prompt. So when I want to learn something, I literally say: tell me about this — but use it and teach it to me this way."*

The result:

> *"It has been like nuclear — I can learn something at such a speed. It's almost to the point of: if you've seen The Matrix where they download the helicopter-flying — it's kind of like that. I can learn so much about something so fast now because I have a very specific system."*

He gave an example. He took a painting he loves and said: teach me about this painting using my learning style. The AI gave him the artist as a system. The painting process as a system. The symbolism as a system. He learned the emotional, social, and functional dimensions of the painting in 30 minutes — and he said he cannot forget it.

Bobby's conclusion, directed explicitly at the Memrise product team:

> *"You really become an expert in prototyping when you prototype for yourself personally. This is one of those things where — when I have to buy a car, you've got to prototype. When you have to do anything, you have to prototype. And so to realise that prototyping is about: I don't know the best way, and I need a way in which to learn it."*

This is the recursive version of the whole series. The people who will be best at JTBD and prototyping are the people who apply it to their own lives — who run paired comparisons on their own decision-making, who build operating windows for their own habits, who elicit from themselves what kind of fun they mean. Prototyping is not a work skill that you keep at work. It becomes a lens.

Bobby warned the group that this has a cost:

> *"I will warn you — I will break you. You will not be able to see the world the same way. You'll be able to break down every day into these things — which in some cases might make it more complicated. But you have to realise there are times you have to shut it off."*

---

## What "building a testing capability" actually requires

The practical implication of the shift Bobby is describing is not just a mindset change. It is an operational one. If testing is now the bottleneck, then the question is: what does a company need to invest in to make testing fast?

Bobby's three concrete answers, assembled from across all three sessions:

**1. A standing panel.** Users who are in your jobs, available for regular feedback. Not one-off recruiting. A cohort. The bigger the panel and the more clearly segmented by job, the faster you can run paired comparisons. Bobby suggested 100 people. The panel is the infrastructure of the learning cycle.

**2. AI-assisted analysis.** Bobby suggested using AI to analyse transcripts from paired-comparison sessions — extracting common language, identifying themes, surfacing what users called different between options. This turns a 45-minute interview into structured data in minutes. The analysis that used to be the slow part of research becomes almost instant.

> *"Throw the recording of the transcript — or cut the transcript — for around the comparing of different concepts, so you can actually get more data out of this. Because I think AI will be able to pull out kind of common themes and words. What's similar between these two and what's different between these two and these other two."*

**3. The L4 array as default experimental design.** Four prototypes, six paired comparisons, ten to twelve people per comparison. This is the minimum useful experiment. It is not statistically definitive — Bobby is clear that statistical proof requires a survey. But it is sufficient for discovery: which variables matter, which have no effect, where the splits are, what language users reach for when they try to articulate the difference.

The goal of running the L4 is to get to the prediction threshold — to know the variables well enough that the next experiment can be designed with confidence. Once you can predict, you build. Not before.

---

## The competitive strategy underneath all of this

Here is the summary statement that pulls all twenty-two sessions together.

Every session in this series has been about one thing: getting to the real demand. The struggling moment, not the feature request. The Job, not the persona. The progress the user is trying to make, not the product you feel proud of.

The reason companies fail to do this is not that they do not care. It is structural. Supply-side companies — which is most companies — have built their operations around what they can produce. Their roadmaps come from engineering capacity, not from struggling moments. Their metrics measure what the product does, not what the user is trying to become. Their prototypes are used to verify hypotheses, not to discover unknowns.

Bobby's framework is not a research methodology. It is a structural reorientation. It says: start demand-side. Find the struggling moment first. Build the Job statement before the feature list. Test variables before you build the system. Run paired comparisons before you invest in the full experience.

And now, with AI compressing the cost of building, the company that does this — that invests the time freed up by fast building into faster, smarter testing — will compound. Every iteration teaches something. Every paired comparison refines the variable map. Every interview gets you closer to predicting what the next user will say before you've spoken to them.

> *"The people who are closest to the customer and can iterate fastest will always win."*

This is not a motivational statement. It is a description of a compounding loop. Closeness to the customer → better variable map → better prototypes → faster prediction → faster build → more time to test → more closeness to the customer.

The company that enters that loop earliest, and runs it most consistently, wins. Not because of the quality of any single product decision. Because the mechanism itself is self-reinforcing.

---

## Visual Aid

![[../assets/2026-04-14-jtbd-session-22-building-was-the-bottleneck.png]]

---

## Three things to hold

1. **Building is no longer the bottleneck. Testing is.** AI has made building fast. The teams that will compound from here are the ones that invest the freed-up capacity into faster, deeper customer learning — panels, paired comparisons, L4 experiments, AI transcript analysis. This is not a temporary advantage. It is a structural shift in where competitive leverage lives.

2. **Prototyping for yourself is how you become expert.** Bobby is dyslexic and built his own pedagogy. Kevin built his own language tool. The product people who apply JTBD thinking to their own decisions — who ask "what kind of fun?" about their own routines, who run paired comparisons on their own trade-offs — develop an instinct that people who only do it at work never acquire. The method becomes embodied. That embodiment is the real expertise.

3. **The loop is the strategy.** Close to the customer → better variables → better prototypes → faster prediction → fast build → back to customer. This loop is the advantage. Start it. Run it. Protect it from the supply-side instincts that will try to short-circuit it — the roadmap pressure, the "we already know what users want," the temptation to build the whole system before you've tested the first variable.

---

## Open Question

Bobby said — in both the February and March sessions — that those who prototype fastest will always win. He was talking about product teams. But Kevin, you are also a product leader building your own tools, your own learning systems, and your own understanding of a domain you care about.

> **What is the thing you are least certain about right now — in Memrise's roadmap, or in your own thinking about what the product should be — and what is the smallest, fastest prototype you could run to reduce that uncertainty?**
>
> Not a full feature. Not a research project. A paired comparison. Two concepts. Six users from a panel. A transcript analysed by AI. A variable resolved.
>
> Bobby's test: *Can you identify the unknown? Can you design the experiment? Can you recruit the three people and run it this week?*
>
> If yes: run it. The loop starts with a single iteration.
>
> If not: the work is not in building. It is in getting clear enough on what you do not know to be able to design the test.

**Kevin's answer:** *(not yet provided)*

---

*JTBD Teaching Series — Extended Sessions*
*Source: Bobby Moesta, Prototyping Workshop at Memrise (March 5 2026) + Prototyping to Learn Session (February 26 2026)*
