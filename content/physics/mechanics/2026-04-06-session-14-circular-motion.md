---
title: "Circular Motion"
session_number: 14
unit: mechanics
date: 2026-04-06
concepts:
  - Velocity as a vector — changing direction is acceleration
  - Centripetal acceleration (a = v²/r) and centripetal force (F = mv²/r)
  - The centrifugal force myth — inertia vs. real force
prerequisite_sessions:
  - session-01-what-is-a-force
  - lesson-02-newtons-second-law
  - 2026-03-26-session-03-newtons-third-law
  - 2026-03-30-session-07-kinematics-I-suvat
  - 2026-04-01-session-09-projectile-motion
  - 2026-04-05-session-13-conservation-of-energy
---

# Session 14: Circular Motion

**Date:** 2026-04-06
**Track:** 4 — Physics Fundamentals (Mechanics Unit, Session 14 of 14)
**Concepts:** Velocity as vector, centripetal acceleration (a = v²/r), centripetal force (F = mv²/r), the centrifugal myth
**Prerequisites:** Sessions 1–13 (Newton's Laws, kinematics, momentum, energy)

---

## The Hook: A Roundabout at Speed

Picture this. You're driving through a Swiss town, heading toward Crans-Montana, and you hit a roundabout at a bit too much speed. You feel yourself pressed hard into the car door — pushed *outward*, it seems. Your instinct says: something is pushing me sideways, away from the centre.

Physics says your instinct is wrong. And understanding *why* it's wrong is the entire point of this session.

---

## Concept 1: Changing Direction IS Acceleration

Cast your mind back to Session 7 (SUVAT) and Session 9 (projectile motion). We established that **velocity is not just speed — it's speed plus direction**. A car travelling north at 60 km/h and a car travelling east at 60 km/h have the same speed but different velocities.

This distinction matters now more than ever.

When you drive around a roundabout at constant speed, your speed doesn't change — but your direction *constantly* changes. Every moment, your velocity vector is rotating.

**And here is the key insight:**

> If velocity is changing — even just in direction, not magnitude — then by definition, there is an acceleration.

Newton's Second Law (Session 2): *F = ma*. Acceleration requires a net force. So: **an object moving in a circle at constant speed is still accelerating**, and there must be a force causing it.

Where does this acceleration point? Think about it geometrically. The velocity vector is always tangent to the circle. For the velocity direction to keep rotating, the acceleration must point *perpendicular to the velocity* — which means it points toward the **centre of the circle**.

This is called **centripetal acceleration** (from Latin: *centrum* = centre, *petere* = to seek).

```
         v →
    ↙ a (toward centre)
```

The object is always "falling" toward the centre — but because it's also moving sideways, it never gets there. It just keeps going around.

---

## Concept 2: Centripetal Force — Not a New Force, Just a Redirected One

If there's a centripetal acceleration, there must be a centripetal force. Here's the equation:

**Centripetal acceleration:**
$$a_c = \frac{v^2}{r}$$

**Centripetal force:**
$$F_c = \frac{mv^2}{r}$$

Where:
- *m* = mass of the object
- *v* = speed
- *r* = radius of the circle

**What this tells you intuitively:**
- Faster speed → much larger force needed (v² — double the speed, quadruple the force)
- Tighter radius → larger force needed (same speed, half the radius, double the force)

This is why cars skid on sharp bends but not gentle curves. And why you slow down before a tight corner.

### But what *is* the centripetal force?

**Centripetal force is not a new, separate force.** It's whatever real force is pointing inward in any given situation:

| Situation | What provides the centripetal force |
|-----------|-------------------------------------|
| Car on a roundabout | Friction between tyres and road |
| Satellite orbiting Earth | Gravity |
| Ball on a string (swinging) | Tension in the string |
| Roller coaster loop (at top) | Normal force from the track |
| Moon orbiting Earth | Gravity |
| Electron orbiting nucleus | Electrostatic attraction |

The Moon is in free-fall toward Earth — but it's also moving sideways so fast that by the time it falls a metre, Earth has curved away by a metre. It perpetually falls and perpetually misses. That is an orbit.

---

## Concept 3: The "Centrifugal Force" Myth — Newton's First Law Strikes Back

You feel pressed outward into the car door on a roundabout. This feeling is so universal it has a name: **centrifugal force**. But it's not real.

**Newton's First Law** (Session 1): An object in motion stays in motion in a *straight line* unless a force acts on it. Your body wants to travel in a straight line — the tangent to the roundabout. The car door pushes your body *inward* (centripetal force). Your body's inertia resists this — it wants to go straight. **What you feel as "outward pushing" is your own inertia resisting the change of direction.**

If the car door disappeared, you wouldn't fly outward — you'd fly *tangentially* (straight).

```
Without centripetal force:  → → → (straight line, tangent to circle)
With centripetal force:     ↺ ↺ ↺ (curved path, circle)
```

---

## Key Connection: Centripetal Force Does No Work

From Session 12: work = force × displacement (in the direction of force). Centripetal force is always **perpendicular to velocity** — so it has zero component in the direction of motion. It does **no work**. Speed doesn't change. This is why satellites don't need fuel to maintain orbit — gravity redirects for free, doing no work on the satellite's speed.

---

## The Maths in Practice

**Example 1:** A car of mass 1,200 kg travels around a roundabout of radius 30 m at 10 m/s. What centripetal force is needed?

$$F_c = \frac{mv^2}{r} = \frac{1200 \times 100}{30} = 4{,}000 \text{ N}$$

Provided by friction. Icy road → reduced friction → car cannot maintain circular path → skids tangentially.

**Example 2:** Moon orbiting Earth. Gravity provides exactly the centripetal force needed for circular orbit at 1,022 m/s and r = 3.84 × 10⁸ m. This is how Newton originally derived the gravitational constant — by checking whether the Moon's orbit matched F = mv²/r.

---

## Visual

![[2026-04-06-09-30-54-circular-motion.png]]

*Circular motion: velocity always tangent, centripetal force always inward. Three real-world examples: satellite (gravity), ball on string (tension), car on curve (friction).*

---

## Summary: Three Ideas

1. **Constant speed ≠ no acceleration.** Direction change = velocity change = acceleration. Centripetal acceleration points toward the centre.
2. **Centripetal force = mv²/r.** Not a new force — whichever real force points inward plays the centripetal role. Faster or tighter = more force.
3. **Centrifugal force is a myth.** Inertia wants straight lines. The "outward feeling" is resistance to direction change. Remove the inward force and you fly off tangentially.

---

## Open Question: Bridge to Unit 2 (Waves)

> A guitar string is plucked. It oscillates back and forth many times per second. That vibration creates a sound that travels across the room to your ear — without any matter physically moving from guitar to ear. **What is actually travelling? How does a disturbance move through space without the medium moving with it?**

That's a wave. Session 15 begins Unit 2.

---

*Session delivered by Nova, 2026-04-06*
*Next: Session 15 — What is a Wave? (Unit 2: Waves)*
