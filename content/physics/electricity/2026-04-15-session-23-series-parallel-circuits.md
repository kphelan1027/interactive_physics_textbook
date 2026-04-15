---
title: "Series & Parallel Circuits"
session_number: 23
unit: electricity
date: 2026-04-15
concepts:
  - Series circuits (single path, current constant, voltage divides, R_total = R₁ + R₂)
  - Parallel circuits (multiple paths, voltage constant, current divides, 1/R_total = 1/R₁ + 1/R₂)
  - Brightness, total current, and practical consequences of each arrangement
prerequisite_sessions:
  - 21 (Charge, Current & Voltage)
  - 22 (Ohm's Law & Resistance)
---

# Series & Parallel Circuits

## The Open Question From Last Session

9V battery, two identical bulbs (3Ω each). Wire them in a line (series) vs side by side (parallel). Which makes each bulb brighter? Which draws more total current?

You now have everything you need to answer it. Let's build the intuition first — then the maths will feel obvious.

---

## The Real-World Phenomenon

Think about two completely different experiences with bulbs:

**Experience 1:** Old-style Christmas tree lights. One bulb blows. They all go out. Every single one. The whole string dies because of one bad bulb.

**Experience 2:** The lights in your house. One ceiling bulb blows in the kitchen. Every other light in the house stays on without a flicker.

Same physics. Different wiring. That difference is series vs parallel — and understanding it explains everything from why your house is wired the way it is to why your USB hub works properly when you plug in a third device.

---

## Concept 1: Series Circuits — One Path, Shared Voltage

In a series circuit, every component sits in a single loop. The current has **only one path to travel**.

### The Three Rules

**Rule 1: Current is the same everywhere.**
The same charge that flows through bulb 1 flows through bulb 2. There's nowhere else for it to go.

> *I is the same at every point in a series circuit.*

**Rule 2: Voltage is shared out.**
The battery's total voltage gets divided across the components in proportion to their resistance.

> *V_total = V₁ + V₂ + V₃*

**Rule 3: Total resistance adds up.**
Each extra component is another obstacle.

> *R_total = R₁ + R₂ + R₃*

### Worked Example

9V battery, two bulbs in series (3Ω each):

```
R_total = 3 + 3 = 6Ω
I = V / R = 9 / 6 = 1.5 A  (flows through BOTH bulbs)
V across each bulb = I × R = 1.5 × 3 = 4.5 V
Check: 4.5 + 4.5 = 9V ✓
```

Each bulb runs at 4.5V — half the battery voltage. They're dim.

---

## Concept 2: Parallel Circuits — Multiple Paths, Full Voltage

In a parallel circuit, components sit on **separate branches**, each connected directly between the two battery terminals.

### The Three Rules

**Rule 1: Voltage is the same across every branch.**
Each branch connects directly between the positive and negative terminal. They all see the full battery voltage.

> *V is the same across every branch.*

**Rule 2: Current divides between branches.**
I_branch = V/R for each branch individually.

> *I_total = I₁ + I₂ + I₃*

**Rule 3: Total resistance is less than any individual branch.**

> *1/R_total = 1/R₁ + 1/R₂*

For two equal resistors R: R_total = R/2.

### Worked Example

9V battery, two bulbs in parallel (3Ω each):

```
1/R_total = 1/3 + 1/3 = 2/3 → R_total = 1.5Ω
I_total = 9 / 1.5 = 6A from battery
Each branch: I = 9 / 3 = 3A
Check: 3 + 3 = 6A ✓
```

Each bulb sees the full 9V (vs 4.5V in series). Power = V²/R = 81/3 = 27W per bulb vs 6.75W — they're **4× brighter**.

---

## Concept 3: The Two Big Intuitions

### Series — resistance adds, current shrinks
Every component you add increases total resistance, reducing overall current. One break kills the whole circuit (Christmas lights). Batteries in series give more voltage.

### Parallel — voltage held constant, current multiplies
Every branch gets full voltage. Adding branches reduces total resistance and increases total current from the source. One break only kills that branch (house wiring). The total current drawn from the source sums across all branches — this is why extension leads have total wattage limits.

---

## Side-by-Side Comparison

| Property | Series | Parallel |
|---|---|---|
| Current | Same everywhere | Divides between branches |
| Voltage | Divides between components | Same across every branch |
| Total resistance | R₁ + R₂ + ... (increases) | Less than smallest R (decreases) |
| One open break | Entire circuit off | Only that branch off |
| Batteries arranged this way | Higher voltage | Longer life (same voltage) |
| How homes are wired | No | Yes |

---

## Diagram

![[2026-04-15-series-parallel-circuits.jpg]]

*Left: series — 1.5A through both bulbs, 4.5V each (dim). Right: parallel — 3A per branch at full 9V (bright), 6A total.*

---

## Open Question — Previewing Session 24

In parallel (9V, two 3Ω bulbs): total power = V × I = 9 × 6 = **54W**.
In series: total power = 9 × 1.5 = **13.5W**.

The parallel circuit burns 4× more power from the same battery. Total resistance was cut by 4 (6Ω → 1.5Ω), and power went up by 4. There's a squared term hiding in there.

Why? And what does this mean for cables, fuses, and why a thin extension lead with too many appliances is genuinely dangerous?

**Session 24: Power & Energy in Circuits** — P = IV, P = I²R, and why current is the number that really matters for heat and safety.

---

*Session written by Nova · 2026-04-15*
