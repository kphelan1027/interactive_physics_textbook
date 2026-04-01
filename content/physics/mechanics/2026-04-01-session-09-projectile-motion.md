---
title: "Projectile Motion"
session_number: 9
unit: mechanics
date: 2026-04-01
concepts: [projectile-motion, independence-of-axes, horizontal-velocity, parabolic-trajectory, SUVAT-two-dimensions]
prerequisite_sessions: [7, 8]
---

# Session 09: Projectile Motion
**Track 4 — Physics Fundamentals**
**Date:** 1 April 2026
**Unit:** Mechanics
**Concepts:** Independence of horizontal and vertical motion, constant horizontal velocity, SUVAT on the vertical axis, parabolic trajectory
**Prerequisite sessions:** Session 7 (SUVAT), Session 8 (Graphs of Motion)

---

## The Real-World Hook

Picture this: Ellie is at the park and tosses a ball horizontally off the top of a slide. The ball leaves her hand moving perfectly sideways — not up, not down, just sideways. At exactly the same moment, Aurora drops a second ball straight down from the same height, from rest.

Which ball hits the ground first?

Almost everyone says the one that was dropped straight down. It "has less distance to travel horizontally." Or they say the thrown one hits first because "it has more speed."

**They land at exactly the same time.**

This result — confirmed by experiment, repeatable, counterintuitive — is the single most important idea in this session. And once you understand *why*, projectile motion clicks completely.

---

## Concept 1: Horizontal and Vertical Motion Are Independent

The reason both balls land together is this: **gravity doesn't care about horizontal motion.**

Gravity only acts downward. It pulls both balls toward the ground with the same force (g = 9.8 m/s²) regardless of whether they're also moving sideways. The horizontal throw doesn't fight gravity, delay gravity, or accelerate gravity. The two directions are completely isolated from each other.

Think of it like two completely separate bank accounts.

- The **vertical account** runs entirely on gravity. It starts at zero vertical velocity (for the horizontal throw), and gravity makes a deposit of 9.8 m/s of downward speed every second.
- The **horizontal account** starts with whatever speed the throw gave it. There's no horizontal force (ignoring air resistance), so no deposits and no withdrawals. The horizontal speed just stays constant.

Both accounts run simultaneously. Neither knows about the other. The object keeps moving sideways at steady speed while *also* falling downward with increasing speed — and the result is the curved path you see.

**That curve is a parabola.** It looks graceful and complex, but it's just two simple motions superimposed.

---

## Concept 2: Solving Projectile Problems — SUVAT Applied Twice

You already have everything you need. You've used SUVAT to solve problems in a single direction. Projectile motion is just SUVAT used twice simultaneously — once for each axis.

**The setup:** split every problem into two separate, parallel problems.

### Horizontal direction (x-axis)

| Variable | Value |
|----------|-------|
| Acceleration | **a = 0** (no horizontal force) |
| Velocity | **constant = u_x** (whatever was given) |
| Equation | **x = u_x × t** |

That's it. Horizontal is always the simple one. No forces, no change in speed, just distance = speed × time.

### Vertical direction (y-axis)

| Variable | Value |
|----------|-------|
| Acceleration | **a = −g = −9.8 m/s²** (downward, negative) |
| Initial vertical velocity | **u_y** (zero if thrown horizontally; nonzero if thrown at an angle) |
| Equations | Full SUVAT: v_y = u_y + at, y = u_y·t + ½at², etc. |

### The link between them

The *time* is the same in both equations. This is the bridge. You solve for time from one axis, then use it in the other. Usually:
1. Use the vertical equation to find t (how long it's in the air)
2. Plug t into the horizontal equation to find x (how far it travelled)

---

### Worked Example: Ball thrown horizontally off a cliff

Kevin is standing at the top of a 20 m cliff. He throws a ball horizontally at 10 m/s. Where does it land?

**Step 1: Vertical (find time of flight)**

The ball starts with no vertical velocity (it was thrown sideways). It falls 20 m under gravity.

Using: s = ut + ½at²

20 = 0 × t + ½ × 9.8 × t²

20 = 4.9t²

t² = 20 / 4.9 ≈ 4.08

**t ≈ 2.02 seconds**

**Step 2: Horizontal (find range)**

Using: x = u_x × t

x = 10 × 2.02 = **20.2 m from the base of the cliff**

That's the answer. The ball lands about 20 metres out from the cliff face. No complicated combined equation — just SUVAT twice.

---

## Concept 3: The V-T Graph Revisited (Answering Last Session's Question)

In Session 8, I left you with this: *What does the v-t graph look like for a ball thrown straight up?*

Here's the answer.

Say you throw a ball upward at +15 m/s. Gravity constantly decelerates it at −9.8 m/s². The velocity-time graph is:

- A **straight line with gradient −9.8** (gravity acting the whole time, regardless of direction of travel)
- Starting at **+15 m/s** (upward)
- Crossing **zero** at t = 15/9.8 ≈ 1.53 s (the top of the arc — momentarily stationary)
- Reaching **−15 m/s** when it returns to your hand (same speed, opposite direction)

The graph is one continuous straight line. It doesn't kink at the top. It doesn't reset. Gravity just keeps subtracting 9.8 m/s every second, right through the zero point.

**The area above the x-axis** = displacement going up (positive, upward)
**The area below the x-axis** = displacement coming down (negative, downward)

Both triangles are identical in size. Total displacement = zero — the ball returns to where it started. Total distance = twice the height. The graph makes this obvious in a way that the equation alone doesn't.

---

## The Analogy: Two Metrics Running Independently

In product work, you track metrics that look correlated but are actually independent. DAUs might be climbing because of a new feature, while session length is declining because of a UX change. They're both "user engagement" but they're responding to different inputs.

Projectile motion is the same. Horizontal velocity is responding to the initial throw. Vertical velocity is responding to gravity. They look like one smooth arc — but they're two independent systems running in parallel. Separate the axes, solve each with its own inputs, recombine via time. That's the technique.

---

## Connection to Previous Sessions

- **Session 7 (SUVAT):** You're using exactly the same four equations. Nothing new in the maths — just applying them to *each direction separately*.
- **Session 8 (Graphs of Motion):** The v-t graph for the vertical direction is the straight line with gradient −g you already know how to read. The area under the graph gives vertical displacement.
- **Sessions 1–4 (Newton's Laws):** The reason horizontal acceleration is zero is Newton's First Law — no horizontal force, no horizontal change in velocity. The reason vertical acceleration is exactly g is Newton's Second Law applied to the gravitational force (F = mg → a = g).

Everything built here connects back. You're not learning new physics — you're learning a new *configuration* of physics you already know.

---

## Key Equations Summary

| Direction | Key Equation | Notes |
|-----------|-------------|-------|
| Horizontal | x = u_x × t | No acceleration (a = 0) |
| Vertical | y = u_y·t + ½gt² | Full SUVAT, a = 9.8 m/s² downward |
| Vertical velocity | v_y = u_y + gt | g = 9.8 m/s², sign depends on convention |
| Time of flight (horizontal launch) | t = √(2h/g) | From y = ½gt² with u_y = 0 |

You don't need to memorise these as a list — you build them from first principles each time: identify the direction, identify the forces (or lack of them), choose the right SUVAT equation.

---

## The Open Question (previewing Session 10)

Here's something to sit with before next session.

A cricket bat hits a ball. The ball arrives at (say) 30 m/s, and leaves at 40 m/s in the opposite direction. That's an enormous change in velocity — it happened in maybe 0.001 seconds.

We know F = ma. But what does that look like when the force is huge and the time is tiny? Is there a better way to describe what the bat actually *transferred* to the ball?

There is. It's called **momentum** — and it turns out that the *total* momentum of two objects before a collision always equals the total momentum after. It's one of the most powerful conservation laws in physics, and it applies everywhere: airbags, rockets, pool tables, and what happens when Ellie tackles Aurora.

That's Session 10.

---

## Diagram

![[2026-04-01-09-30-54-projectile-motion.png]]

---

*Nova — Track 4 Physics, Session 9*
*Next: Session 10 — Momentum & Impulse*
