---
title: "Session 08: Graphs of Motion"
session_number: 8
unit: mechanics
date: 2026-03-31
concepts:
  - velocity-time graphs
  - gradient equals acceleration
  - area equals displacement
  - distance-time graphs
  - SUVAT geometric derivation
prerequisite_sessions:
  - session-07-kinematics-I-suvat
  - session-02-newtons-second-law
  - session-06-forces-on-inclined-planes
---

# Session 08: Graphs of Motion

**Track 4 — Physics Fundamentals**
**Date:** 31 March 2026
**Unit:** Mechanics

---

## The Real-World Hook

Think about your last drive on the motorway. You pulled away from a junction, built up speed to 70 mph over maybe 20 seconds, cruised for 15 minutes, saw brake lights ahead and slowed down hard over 5 seconds.

If someone handed you a graph of your **speedometer reading over time** — speed on the vertical axis, time on the horizontal — you could read the entire story of that journey. The slow climb. The flat plateau. The sharp drop at the end.

That graph isn't just a picture. It's a physics instrument. And in this session you're going to learn how to read it properly — including a trick that lets you extract something you wouldn't expect a graph of *speed* to tell you: **how far you actually travelled.**

---

## Concept 1: Velocity-Time Graphs — Reading the Shape

A **velocity-time (v-t) graph** plots velocity on the vertical axis and time on the horizontal axis.

The shape tells you everything about how motion is changing:

| What the graph looks like | What's physically happening |
|---|---|
| Flat horizontal line | Constant velocity — no acceleration |
| Straight line sloping upward | Constant positive acceleration (speeding up) |
| Straight line sloping downward | Constant negative acceleration (slowing down / braking) |
| Curved line (concave up) | Acceleration increasing — you're pressing harder |
| Curved line (concave down) | Acceleration decreasing — lifting your foot |
| Flat line at zero | Stationary — not moving |

The **steeper the slope, the greater the acceleration**.

### The gradient IS the acceleration

> **Gradient of a v-t graph = acceleration**

$$a = \frac{\Delta v}{\Delta t} = \frac{v - u}{t}$$

That's exactly the same as rearranging v = u + at from last session. The equation isn't some separate thing — it's just describing the slope of the line.

**Analogy:** Think about a product's daily active user graph. A steep upward slope = fast user growth. A flat line = plateau. A downward slope = churn. The *gradient* tells you the *rate of change*. Acceleration is just the rate of change of velocity.

---

## Concept 2: Area Under a v-t Graph = Displacement

If the gradient tells you acceleration, what does the **area** beneath the line (down to the time axis) tell you?

**It tells you displacement — how far you've travelled.**

### Case 1: Constant velocity (flat line)

Driving at a steady 20 m/s for 10 seconds. The v-t graph is a flat horizontal line at height 20, from t=0 to t=10.

$$\text{Area} = \text{base} \times \text{height} = 10 \text{ s} \times 20 \text{ m/s} = 200 \text{ m}$$

And: distance = speed × time = 200 m. The area *is* the distance.

### Case 2: Constant acceleration from rest (straight line from origin)

Start from rest (u = 0), accelerate uniformly. The area under the line is a **triangle**:

$$\text{Area} = \frac{1}{2} \times t \times at = \frac{1}{2}at^2$$

That's the SUVAT equation **s = ½at²** — derived from graph geometry, no memorisation needed.

### Case 3: Starting at velocity u, accelerating to v

The area underneath is a **rectangle + triangle**:
- Rectangle: area = ut
- Triangle: area = ½at²

Total: **s = ut + ½at²** — the full SUVAT equation, derived from a diagram.

**All four SUVAT equations describe the same geometry on a v-t graph.** They're not arbitrary formulas — they're different ways of reading the same picture.

---

## Concept 3: Distance-Time Graphs

A **distance-time (s-t) graph** plots how far you've travelled on the vertical axis and time on the horizontal.

| What the s-t graph looks like | What's physically happening |
|---|---|
| Flat horizontal line | Stationary |
| Straight line sloping upward | Constant speed |
| Curve getting steeper | Accelerating |
| Curve getting shallower | Decelerating |

### The gradient IS the velocity

$$v = \frac{\Delta s}{\Delta t}$$

- **v-t graph:** gradient = a, area = s
- **s-t graph:** gradient = v

They tell the same story from different perspectives.

---

## Putting It Together: The Motorway Drive

Accelerate from 0 to 30 m/s in 20 seconds. Cruise at 30 m/s for 600 seconds. Brake from 30 m/s to 0 in 6 seconds.

**Accelerations (from gradients):**
- Segment 1: 30/20 = **1.5 m/s²**
- Segment 2: **0 m/s²**
- Segment 3: −30/6 = **−5 m/s²**

**Distances (from areas):**
- Segment 1: ½ × 20 × 30 = **300 m**
- Segment 2: 600 × 30 = **18,000 m**
- Segment 3: ½ × 6 × 30 = **90 m**

**Total: ~18.4 km** — read entirely from a speed graph.

---

## Connection to Previous Sessions

- **Session 7 (SUVAT):** The equations are now graphical identities. The v-t graph *is* SUVAT visualised.
- **Session 2 (F = ma):** Steeper gradient on v-t = larger net force.
- **Session 6 (inclined planes):** An object accelerating at g sinθ down a slope — now draw it on a v-t graph and read off the displacement as a triangle area.

---

## Key Relationships

| Relationship | Equation |
|---|---|
| Gradient of v-t graph | a = Δv / Δt |
| Area under v-t graph | s = area (geometry) |
| Gradient of s-t graph | v = Δs / Δt |

---

## Diagram

![Graphs of Motion](../../images/2026-03-31-09-31-41-graphs-of-motion.png)

---

## The Open Question (previewing Session 9)

You now know how to describe motion completely in one direction.

When you throw a ball straight up, gravity pulls it down at 9.8 m/s² the entire time — including at the very top where its velocity is zero for an instant. What does the v-t graph of that ball look like? What does area above and below the axis mean? And what happens when you throw something *sideways* while it falls?

That's **projectile motion** — motion in two directions at once. Everything you know about SUVAT and graphs applies. You just apply it to each direction separately.

---

*Nova — Track 4 Physics, Session 8 | Next: Session 9 — Projectile Motion*
