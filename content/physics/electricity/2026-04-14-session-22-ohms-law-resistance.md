---
title: "Ohm's Law & Resistance"
session_number: 22
unit: electricity
date: 2026-04-14
concepts:
  - Resistance (Ω)
  - Ohm's Law (V = IR)
  - Resistivity (R = ρL/A)
prerequisite_sessions:
  - session-21-charge-current-voltage
---

# Session 22: Ohm's Law & Resistance

**Date:** 2026-04-14
**Unit:** Electricity (Unit 3)
**Concepts:** Resistance (Ω), Ohm's Law (V=IR), Resistivity (R=ρL/A)
**Prerequisite:** Session 21 — Charge, Current & Voltage

---

![Ohm's Law Diagram](../../images/2026-04-14-09-31-28-ohms-law-resistance.jpg)

---

## The Hook: Your Cheap USB-C Cable

You've probably experienced this: you grab a cheap USB-C cable from a drawer — the thin, long one — and plug your phone in. Twenty minutes later, the cable is warm near the connector, and your battery has barely moved from 32%. You swap it for the official short cable and the phone gets cool and charges quickly.

Same phone. Same socket. Same voltage. Different cable — and a completely different result.

That warm cable isn't defective. It's doing exactly what physics predicts. Today's session is about **why**.

---

## Connecting to Last Time

In Session 21 we established three things:

1. **Charge** flows when there's an electric field — electrons drift through a conductor
2. **Current** (I) is the rate of charge flow: I = Q/t
3. **Voltage** (V) is electrical potential energy per unit charge: V = W/Q — it's the pressure driving the current

We ended with a question: *Same 9V battery, same material. Wire A = 10cm, Wire B = 100cm. Which carries more current?*

By the end of this session you'll be able to answer that precisely — with a number.

---

## Concept 1: Resistance — The Third Character in the Story

Voltage is the pressure. Current is the flow. But there's a third variable we've been ignoring: the **opposition** to that flow.

Think of a water pipe. Pressure (voltage) drives the flow (current). But the pipe itself matters — a narrow, rough pipe lets less water through than a wide, smooth one. In electricity, this opposition is called **resistance**.

> **Resistance (R)** is a material's opposition to the flow of electric current.
> Unit: the **Ohm**, symbol **Ω** (omega), named after Georg Simon Ohm.

Every material has some resistance. The scale is enormous:

| Material | Resistance type | Example |
|----------|----------------|---------|
| Silver, Copper, Gold | Very low (conductor) | Wires, cables |
| Nichrome (nickel-chrome) | Medium-high (resistor) | Toaster elements, electric fires |
| Carbon | Medium | Pencil marks, carbon resistors |
| Silicon | Variable (semiconductor) | Transistors, diodes |
| Rubber, plastic, glass | Extremely high (insulator) | Cable coating, sockets |

Copper wire is the workhorse of electrical systems precisely because it conducts brilliantly. Nichrome is used in heating elements precisely because it resists strongly — and that resistance converts electrical energy into heat.

**The key insight:** resistance is not a bug. It's a controllable property that lets engineers do useful things — dim lights, generate heat, protect components.

---

## Concept 2: Ohm's Law — V = IR

In 1827, Georg Ohm ran careful experiments connecting voltage and current across conductors. He found something beautifully simple:

> **For many materials at constant temperature, current is directly proportional to voltage.**
>
> Double the voltage → double the current. Triple the voltage → triple the current.

The constant of proportionality between them is resistance.

### V = IR

$$V = IR$$

Where:
- **V** = Voltage (Volts, V)
- **I** = Current (Amperes, A)
- **R** = Resistance (Ohms, Ω)

Rearranged:

| You know... | You want... | Formula |
|-------------|-------------|---------|
| V and R | Current | I = V/R |
| V and I | Resistance | R = V/I |
| I and R | Voltage | V = IR |

### Answering Session 21's open question

*Wire A (10cm) vs Wire B (100cm). Same material. Same 9V battery.*

Wire B has 10× more length → 10× more resistance. If Wire A has R = 1Ω, Wire B has R = 10Ω.

| Wire | R | V | I = V/R |
|------|---|---|---------|
| A | 1 Ω | 9 V | 9 A |
| B | 10 Ω | 9 V | 0.9 A |

Wire A carries 10× more current than Wire B. Length alone made the difference.

### Ohmic vs non-Ohmic materials

Ohm's Law holds for *Ohmic materials* — metals at constant temperature. It breaks down for light bulbs (resistance increases with temperature), diodes (current flows one way only), and semiconductors (non-linear behaviour).

---

## Concept 3: What Determines Resistance — R = ρL/A

Three factors determine a wire's resistance:

**1. Length (L):** Longer wire = more resistance. Double the length, double the resistance.

**2. Cross-sectional area (A):** Thicker wire = less resistance. More pathways for electrons. Double the area, halve the resistance.

**3. Material (Resistivity ρ):** Each material has an intrinsic resistivity — how strongly it opposes current per unit geometry.

$$\boxed{R = \frac{\rho L}{A}}$$

### Resistivity values

| Material | Resistivity ρ (Ω·m) |
|----------|---------------------|
| Silver | 1.59 × 10⁻⁸ |
| Copper | 1.68 × 10⁻⁸ |
| Aluminium | 2.82 × 10⁻⁸ |
| Nichrome | 1.10 × 10⁻⁶ |
| Carbon (graphite) | 3–60 × 10⁻⁵ |
| Silicon (pure) | 640 |
| Glass | 10¹⁰ – 10¹⁴ |
| Rubber | ~10¹³ |

Nichrome is ~65× more resistive than copper. The toaster element glows red-hot while the copper leads to it remain cool.

### Real-world applications of R = ρL/A

- **Thin USB cable gets warm**: small A, possibly cheap material (high ρ) → high R → energy wasted as heat
- **Electricians use thicker cables for high-power circuits**: large A → low R → more current safely handled
- **Long extension leads need thicker wire**: L ↑ → R ↑ → compensate with larger A
- **Heating elements use nichrome wire**: ρ high → R high → electrical energy deliberately converted to heat

---

## Worked Examples

**Example 1:** A torch bulb has resistance 6Ω, powered by a 3V battery. What current flows?
$$I = \frac{V}{R} = \frac{3}{6} = 0.5 \text{ A}$$

**Example 2:** A kettle element draws 10A at 230V. What's its resistance?
$$R = \frac{V}{I} = \frac{230}{10} = 23 \text{ Ω}$$

**Example 3:** A copper wire (ρ = 1.68 × 10⁻⁸ Ω·m), 2m long, cross-section 1.5 × 10⁻⁶ m²:
$$R = \frac{1.68 \times 10^{-8} \times 2}{1.5 \times 10^{-6}} = 0.0224 \text{ Ω}$$

Very small — exactly why copper is used. That 2m of cable barely impedes current at all.

---

## Analogies

**Ohm's Law as a product funnel:** Voltage (V) = user motivation. Resistance (R) = onboarding friction. Current (I) = conversion rate. I = V/R. Double the friction, halve the throughput. Direct inverse — not a small effect.

**R = ρL/A as organisation design:** Length (L) = approval chain layers. Area (A) = team capacity/bandwidth. Resistivity (ρ) = cultural friction (low-trust = high ρ). The same headcount in a low-trust, long-chain organisation flows far less work than in a high-trust flat one.

---

## How This Connects

| Today's concept | Where it came from | Where it leads |
|-----------------|-------------------|----------------|
| Resistance (R) | Session 21: voltage drives current — R opposes it | Session 24: P = I²R (energy as heat) |
| Ohm's Law V=IR | Session 21: V and I defined — Ohm unifies them | Sessions 23+: every circuit calculation |
| R = ρL/A | Session 21: drift velocity v_d = I/(nAe) — A appears there | Session 23: parallel paths reduce R |

---

## The Open Question

You have a 9V battery and two identical light bulbs (each 3Ω).

You could wire them **in a line** — one after the other, sharing the same current path. Or you could wire them **side by side** — each with its own direct route to the battery.

Which arrangement makes each bulb shine brighter? Which draws more total current from the battery?

*→ Session 23: Series & Parallel Circuits*

---

*Nova — Physics Track 4, Session 22 of 39*
