---
title: "Kinematics I — Velocity, Acceleration, and SUVAT"
session_number: 7
unit: mechanics
date: 2026-03-30
concepts:
  - Distance vs Displacement
  - Constant acceleration (second-by-second intuition)
  - SUVAT equations (v=u+at, s=ut+½at², v²=u²+2as)
prerequisite_sessions:
  - session-01-what-is-a-force
  - lesson-02-newtons-second-law
  - 2026-03-26-session-03-newtons-third-law
  - 2026-03-27-session-04-weight-mass-gravity
  - 2026-03-28-session-05-friction-normal-force
  - 2026-03-29-session-06-forces-on-inclined-planes
---

# Session 7: Kinematics I — Velocity, Acceleration, and SUVAT

![[2026-03-30-09-31-50-suvat-kinematics.png]]

---

## The Motorway Slip Road

You're sitting at the top of a motorway slip road, engine idling, waiting for a gap. The motorway is running at 70 mph. You have maybe 300 metres to match that speed.

You press the accelerator. Slowly at first. Then faster. Ten seconds later, you're up to speed and you merge.

That experience — zero to 70, over a fixed distance, in a specific time — is what kinematics describes. For the last six sessions, we've been asking **why** things move (forces, Newton's laws, gravity, friction). Now we're asking a different question: **given that something is accelerating, what does that motion actually look like** — in numbers, at every moment?

This is where the forces track and the motion track connect. Ready?

---

## Concept 1: Distance vs Displacement

Before any equations, a distinction that turns out to matter more than it first seems.

**Distance** is how far you've actually travelled. It's what the odometer records. Monotonically increasing. Never goes down. If you drive London to Oxford and back, your distance is ~180 miles.

**Displacement** is different. It's not how far you've *travelled* — it's **how far you are from where you started**, in a straight line, with direction. London → Oxford → London: displacement = zero. You ended where you began.

A few examples:

| Scenario | Distance | Displacement |
|----------|----------|--------------|
| 400m lap of a running track, back to start | 400 m | 0 m |
| 3 km north, then 4 km east | 7 km | 5 km NE (Pythagoras: √9+16) |
| Ball dropped 10 m straight down | 10 m | 10 m downward |
| Drive to shops (1 km) and back | 2 km | 0 km |

Displacement is a **vector** (size + direction). Distance is a **scalar** (just a number). Velocity is a vector. Speed is a scalar. This distinction matters when objects change direction.

---

## Concept 2: What Constant Acceleration Looks Like, Second by Second

In Session 2, F = ma told us a net force produces acceleration. Let's make "constant acceleration" concrete.

Suppose a car accelerates at a steady **2 m/s²** from rest:

| Time | Velocity |
|------|----------|
| 0 s | 0 m/s |
| 1 s | 2 m/s |
| 2 s | 4 m/s |
| 3 s | 6 m/s |
| t s | 2t m/s |

Every second, velocity increases by 2 m/s. The pattern:

> **v = u + at**

(v = final velocity, u = initial velocity, a = acceleration, t = time)

**Key insight:** acceleration is not about how fast you're going — it's about how quickly velocity is *changing*. A car at 200 km/h with cruise control: zero acceleration. A car pulling away from lights at 5 km/h: high acceleration.

---

## Concept 3: SUVAT — Five Variables, Four Equations

When an object moves with constant acceleration, its motion is completely described by five variables:

| Letter | Meaning | Unit |
|--------|---------|------|
| **s** | displacement | m |
| **u** | initial velocity | m/s |
| **v** | final velocity | m/s |
| **a** | acceleration | m/s² |
| **t** | time | s |

Connected by four equations (each drops one variable):

| Equation | Missing |
|----------|---------|
| v = u + at | s |
| s = ut + ½at² | v |
| v² = u² + 2as | t |
| s = ½(u + v)t | a |

**Rule:** know any 3 of the 5 → find the other 2.

Analogy: like financial planning. Know starting capital (u), growth rate (a), and time horizon (t) → calculate final value (v) and total gain (s). SUVAT is the same system, for motion.

---

### Worked Example: Emergency Braking

- u = 30 m/s (67 mph), v = 0 (stops), a = −5 m/s²

**Time:** v = u + at → 0 = 30 − 5t → **t = 6 s**

**Distance:** s = ut + ½at² → s = 180 − 90 → **s = 90 m**

From v² = u² + 2as with v=0: **s = u²/2a** — stopping distance scales with the *square* of speed. Double your speed → four times the stopping distance.

---

## Connections to Previous Sessions

- **Sessions 1–3:** force causes acceleration (the *why*)
- **This session:** what acceleration does to motion over time (the *what*)
- **Session 6:** net force on slope = mg sinθ → acceleration a = g sinθ → SUVAT gives speed and distance at any time

---

## Open Question

If you plotted velocity (y-axis) against time (x-axis) for constant acceleration, you'd get a straight line. What does the **area under that line** represent? 

Think geometrically — it's a trapezoid. What physical quantity lives in that area?

Next session: Graphs of Motion — and why the area under a velocity-time graph is one of the most useful ideas in mechanics.

---

*Session 7 · Mechanics Unit · Track 4 Physics Fundamentals · Nova · 2026-03-30*
