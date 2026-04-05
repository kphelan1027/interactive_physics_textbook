---
title: "Conservation of Energy"
session_number: 13
unit: mechanics
date: 2026-04-05
concepts:
  - Gravitational Potential Energy (GPE = mgh)
  - Conservation of Mechanical Energy (KE + GPE = constant)
  - Energy Transformation Chains
prerequisite_sessions:
  - 7  # SUVAT kinematics
  - 10 # Momentum & Impulse
  - 12 # Work, Energy & Power
---

# Session 13: Conservation of Energy

**Date:** 2026-04-05
**Session:** 13 of Track 4 — Physics Fundamentals
**Unit:** Mechanics
**Prerequisites:** Sessions 7 (SUVAT), 10 (Momentum & Impulse), 12 (Work, Energy & Power)
**Concepts:** Gravitational Potential Energy (GPE), Conservation of Mechanical Energy, Energy Transformation Chains

---

## The Hook: Coasting Downhill

You're driving through the Swiss Alps — heading to Crans-Montana — and you come over the crest of a mountain pass. You take your foot completely off the accelerator. The road drops steeply ahead of you. You don't touch the throttle. You don't push. And yet: the car speeds up.

Where is the energy coming from?

You didn't burn more fuel. No external force is doing work. But kinetic energy is clearly increasing — the speedometer is climbing.

The answer: you were storing energy the entire drive up. Every metre of altitude you gained, you were depositing energy into a kind of invisible account. Coming down, that account is being cashed out — converted directly into motion.

That invisible account is called **gravitational potential energy**. And today's session is about what happens when energy changes form — and why the total never disappears.

---

## Concept 1: Gravitational Potential Energy (GPE)

### The idea first

Think of gravitational potential energy like a savings account for height.

Every time you lift something against gravity — carrying a bag upstairs, driving uphill, a footballer kicking a ball into the air — you're depositing energy into this account. The money isn't gone. It's just stored, waiting to be spent.

The moment the object is free to fall or roll down, that stored energy converts back into motion.

This is why:
- A roller coaster doesn't need an engine once it's crested the first hill (the rest of the ride is just energy converting)
- A hydroelectric dam works — water stored at height, released to spin turbines
- A cricket ball thrown upward slows as it rises, then accelerates as it falls — the same total energy, just switching form

### Now the maths

The amount of gravitational potential energy an object has depends on three things:
- Its **mass** (more mass → more energy to lift)
- The **gravitational field strength** (g = 9.8 m/s² on Earth)
- Its **height above a reference point** (higher → more stored)

$$\boxed{GPE = mgh}$$

Where:
- **m** = mass in kg
- **g** = 9.8 m/s²
- **h** = height above your chosen reference in metres

> Note: "reference point" is your choice — usually the floor, or the lowest point of the motion. What matters is the *change* in height, not the absolute value.

**Example:** You carry your 15 kg daughter Aurora up a 3-metre staircase.

$$GPE = 15 \times 9.8 \times 3 = 441 \text{ J}$$

That's 441 joules of energy stored in her position above the ground floor. The moment she slides down the banister, that energy converts to kinetic energy.

---

## Concept 2: Conservation of Mechanical Energy

### The big idea

**Energy cannot be created or destroyed. It can only change form.**

In a mechanical system with no friction — a pendulum swinging in a vacuum, a ball falling through air we ignore — the total energy stays perfectly constant. It just converts back and forth between kinetic and potential.

$$\boxed{KE + GPE = \text{constant}}$$

Or equivalently:

$$\frac{1}{2}mv^2 + mgh = \text{constant}$$

At the top of a hill: lots of GPE, little KE (moving slowly or not at all).
At the bottom of a hill: lots of KE, GPE is gone (all cashed in).

**The trade is always: height ↔ speed.**

### The product analogy

Think of your engineering team's capacity as a fixed quantity. When they're deep in a sprint — heads down, shipping — they're burning velocity (KE is high). But they're not building strategic capability (GPE is low). When they step back to do architecture, onboarding, documentation — GPE is building back up, but the sprint velocity drops. The total capacity is roughly constant; you're just deciding how it's distributed across forms.

### The financial planning version

Your £5M number works exactly this way. Today, your salary is KE — it's flowing, active, doing work. When you invest it (pension, ISA, Talon trades), it converts to potential: stored, not immediately usable, but waiting. When you retire and draw it down, it converts back. The total wealth is conserved — what changes is the ratio of active to stored.

---

## Concept 3: Energy Transformation Chains

### It's never just two states

In the real world, energy passes through multiple forms, not just KE ↔ GPE. Every time you push a button, eat lunch, or charge your phone, there's a chain of transformations. The total never changes — only the form.

Some common forms:
- **Chemical energy** (food, fuel, batteries)
- **Gravitational potential energy** (height)
- **Kinetic energy** (motion)
- **Thermal energy** (heat — usually the final destination of "lost" energy)
- **Sound energy** (waves in air — why impacts are audible)
- **Electrical energy** (electrons moving through circuits)
- **Light energy** (photons)

### The roller coaster chain

```
Chemical (fuel) 
    → lifted chain raises car 
    → GPE at the top
    → KE speeding downhill
    → GPE again at the next crest (smaller — some lost to friction as heat/sound)
    → KE again (a bit less than before)
    → ... repeating, shrinking, until brakes convert the last KE to heat at the station
```

Each conversion is slightly lossy — real systems always bleed a little energy to heat and sound. That's why the second hill is always shorter than the first. But the **total** — KE + GPE + heat + sound — is always identical to what you started with.

### Where energy "disappears" to

In Session 11: KE was "lost" in inelastic collisions. Where did it go?

- Sound (the bang you hear)
- Heat (the metal deforming, friction)
- Deforming the material (permanently changing the shape)

Nothing disappeared. It just became forms we can't easily use again.

Crumple zones *work* precisely this way — converting KE into structural deformation energy over a longer time, rather than transferring it to the occupants.

---

## The Maths in Action

### Example 1: The downhill run

A cyclist (total mass 80 kg — bike + rider) crests a hill 20 m above the road below. Momentarily stationary at the top.

**How fast at the bottom?** (ignoring friction)

$$GPE_{top} = mgh = 80 \times 9.8 \times 20 = 15{,}680 \text{ J}$$

$$KE_{bottom} = \frac{1}{2}mv^2 = 15{,}680 \text{ J}$$

$$v = \sqrt{\frac{2 \times 15{,}680}{80}} = \sqrt{392} \approx 19.8 \text{ m/s} \approx 71 \text{ km/h}$$

No pedalling. Just height converting to speed.

### Example 2: Throwing a ball upward

A 0.5 kg ball thrown upward at 10 m/s. How high?

$$KE = \frac{1}{2} \times 0.5 \times 10^2 = 25 \text{ J}$$

At max height (v = 0), all KE → GPE:

$$25 = 0.5 \times 9.8 \times h \implies h \approx 5.1 \text{ m}$$

Consistent with SUVAT: v² = u² − 2gh → h = u²/2g = 100/19.6 ≈ 5.1 m. Same physics, two views.

---

## Connecting to What You Already Know

- **Session 12** (Work & KE): Work done by gravity equals the loss in GPE. W_net = ΔKE and energy conservation are the same principle.
- **Session 7** (SUVAT): v² = u² + 2as is conservation of energy in disguise for constant gravitational acceleration.
- **Session 10** (Momentum): Momentum conserved in all collisions; KE only in elastic. Today explains where the KE goes in inelastic collisions.

---

## The Three Big Ideas (summary)

| Concept | Formula | One-line |
|---------|---------|----------|
| Gravitational PE | GPE = mgh | Height stores energy |
| Conservation of energy | KE + GPE = constant | Total energy never changes, only form |
| Transformation chains | Energy → energy → energy (→ heat) | Real systems bleed to heat; nothing disappears |

---

## Open Question (previewing Session 14)

When objects move in *circles* — a car on a roundabout, the Moon orbiting Earth, a ball on a string — the speed can stay constant but the direction keeps changing. A change in direction is still acceleration (velocity is a vector). So something must be providing a force.

What is that force, where does it point, and what happens if it disappears?

*That's circular motion — Session 14.*

---

## Image

![[2026-04-05-conservation-of-energy.png]]

---

*Nova · Physics Track 4 · Session 13 · 2026-04-05*
