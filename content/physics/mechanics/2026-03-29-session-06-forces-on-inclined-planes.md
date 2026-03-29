---
title: "Forces on Inclined Planes"
session_number: 6
unit: "mechanics"
date: "2026-03-29"
concepts:
  - Component decomposition
  - Normal Force on a slope (N = mg cosθ)
  - Gravity parallel to slope (mg sinθ)
  - Friction on a slope (f = μmg cosθ)
  - Condition for sliding (tanθ > μ)
prerequisite_sessions: [4, 5]
---

# Session 6: Forces on Inclined Planes

**Date:** 2026-03-29
**Track:** Physics — Unit 2: Forces & Newton's Laws
**Session:** 06
**Concepts:** Component decomposition, Normal Force on a slope (N = mg cosθ), gravity along the slope (mg sinθ), friction on a slope

**Prerequisite sessions:** 4 (Weight & Gravity), 5 (Friction & Normal Force)

---

## The Real-World Hook

You've parked on a steep hill and forgotten to put the handbrake on. The car rolls back. You've also parked on a gentle slope and the car just sat there, held by friction alone. Same car, same tyres, different slope — different outcome.

Here's the question: the car weighs the same on both hills. Gravity is still pulling straight down at exactly 9.8 m/s². So why is a steep hill harder to hold than a shallow one? What's actually changing?

That's what this session is about.

---

## Concept 1: Gravity doesn't care about your surface — but you have to

In Session 4 we established that gravity pulls everything straight down with force W = mg. In Session 5 we established that when you're on a flat surface, the Normal Force pushes back perpendicular to the surface — and on flat ground, perpendicular *is* straight up, so N = mg and everything balances.

Now tilt the surface.

Gravity still pulls straight down. It doesn't know about your slope. But the slope is no longer pointing up — it's pointing at an angle. The Normal Force is now perpendicular to the slope, which means it points *diagonally* away from the surface, not straight up.

This creates a mismatch. Gravity is pulling one way; the surface is resisting in a different direction. And when two forces point in different directions, you can't just add them. You have to **decompose** them — split them into components that line up with each other.

Think about it this way: imagine you're building a product and a piece of user feedback could mean two things — "the feature is confusing" or "the onboarding is confusing." You can't act on "confusing" until you've decomposed it into its two components. Same principle. You have to break the force down before you can work with it.

---

## Concept 2: The Normal Force gets smaller on a slope — N = mg cosθ

Here's the decomposition. On a slope at angle θ (theta) from the horizontal, gravity (mg, straight down) splits into two components:

- **Perpendicular to the slope:** mg cosθ — this is the part pressing into the surface
- **Parallel to the slope (down the slope):** mg sinθ — this is the part trying to slide you down

The Normal Force only has to balance the perpendicular component. So:

> **N = mg cosθ**

On flat ground, θ = 0°. cos(0°) = 1. So N = mg. Correct — matches what we had in Session 5.

On a slope of 30°: cos(30°) ≈ 0.87. So N = 0.87 × mg. The Normal Force is *less* than your weight. The slope is only partially supporting you.

On a vertical wall (θ = 90°): cos(90°) = 0. N = 0. The wall pushes back with zero force perpendicular to itself. You'd just fall straight down. That checks out.

The analogy here is like splitting your investment return into risk-free rate and alpha. The total return is mg. The risk-free part (N = what the surface gives back) is mg cosθ. The residual (mg sinθ) is the alpha — the bit that's unaccounted for, the bit that makes things interesting.

---

## Concept 3: The slope-parallel component tries to slide you — friction fights back

The second component, mg sinθ, points *down the slope*. This is the force that makes your car roll back, makes a ball roll downhill, makes a skier accelerate on steeper gradients. It's not a new force — it's just gravity, decomposed into the direction that the slope can't resist.

And friction is what fights it.

From Session 5, friction force = μN. On a slope, N = mg cosθ, so:

> **f = μ × mg cosθ**

For the object to stay still, friction must be able to match or exceed the slope-parallel gravity component:

> mg sinθ ≤ μ × mg cosθ

Notice that mg cancels — mass doesn't matter. What matters is the ratio:

> tanθ ≤ μ

This is the condition for staying still. If the slope angle is steep enough that tan(θ) exceeds μ, the object slides. This is why wet slopes are dangerous — water reduces μ, so the critical angle drops. Same slope that was fine in the dry now exceeds the threshold.

And this answers the handbrake question from the opening. On a steeper slope, mg sinθ (the sliding force) is larger AND mg cosθ (and therefore friction) is smaller — it's a double whammy. Steeper angle hits you from both sides.

---

## The Maths Summary

| Quantity | Flat ground | On a slope (angle θ) |
|----------|-------------|----------------------|
| Normal Force | N = mg | N = mg cosθ |
| Friction force | f = μmg | f = μmg cosθ |
| Gravity along surface | 0 | mg sinθ (down the slope) |
| Condition for staying still | N balances mg | tanθ ≤ μ |

---

## Diagram

![[2026-03-29-09-31-05-inclined-plane.png]]

*Force decomposition on an inclined plane: gravity (mg) splits into a component perpendicular to the slope (mg cosθ, balanced by Normal Force N) and a component parallel to the slope (mg sinθ), opposed by friction f = μN.*

---

## Connection to Previous Sessions

- **Session 2 (F = ma):** The net force along the slope = mg sinθ − f. If that's non-zero, the object accelerates down the slope at a = g sinθ − μg cosθ. Newton's Second Law doing its thing.
- **Session 4 (Weight & Gravity):** Weight (mg) is always vertical. The slope forces us to decompose it — but the force itself is unchanged.
- **Session 5 (Friction & Normal Force):** Normal Force is no longer equal to weight. This is the key shift from Session 5. Everything else follows from that.

---

## Open Question for Next Session

You've now got all the pieces: gravity, Newton's laws, friction, Normal Force. But we've only ever thought about forces at a single instant.

Here's what we haven't asked: what happens *over time*? If a net force acts on an object, it accelerates — but how far does it travel? How fast is it going after 3 seconds? If you roll something off a cliff, how long until it hits the ground?

That's kinematics: the mathematics of motion over time. Next session we'll pick up where Newton left off and build the tools to answer those questions.

---

*Nova — Physics Track 4, Session 6*
