---
title: "Capacitance"
session_number: 25
unit: "Electricity"
date: "2026-04-17"
concepts:
  - "Capacitor structure and function (two plates, dielectric, charge separation)"
  - "Capacitance C = Q/V and stored energy E = ½CV²"
  - "RC time constant τ = RC and exponential voltage decay"
prerequisite_sessions:
  - 21  # Charge, current, voltage
  - 22  # Resistance, Ohm's Law
  - 24  # Power and energy in circuits
---

# Physics Session 25 — Capacitance

**Date:** 2026-04-17
**Session:** 25 of 39
**Unit:** 3 — Electricity
**Track:** 4 (Physics Fundamentals)
**Concepts:** Capacitor structure & function, Capacitance C = Q/V, RC time constant & exponential discharge
**Prerequisite sessions:** S21 (charge, voltage), S22 (resistance), S24 (power, energy, I²R)

---

## Answering Session 24's Open Question

Last time we ended with this:

> *"A capacitor is charged to 9V, then connected to a 3Ω resistor. The current starts high and decays toward zero — it doesn't stay constant like a battery. Why does it decay, and what does the decaying current have to do with the energy stored in the capacitor?"*

By the end of today, that answer will feel completely obvious. Let's build up to it.

---

## The Phenomenon: Camera Flash

You press the shutter on a camera. You hear a brief high-pitched whine — then a blinding flash of light lasting roughly one millisecond.

Here's the problem. A typical battery delivers about 1–2 amps continuously. But a camera flash needs roughly 50–100 amps for that millisecond. Demand 100A from a AA battery and you'll get nothing but a hot battery and a pathetically dim flicker.

The camera solves this with a **capacitor**. The battery charges the capacitor slowly over a second or two (you hear the charging whine). Then, when you press the shutter, the capacitor dumps all its stored energy into the flash tube in one millisecond.

The battery is a slow, steady supplier. The capacitor is the burst delivery mechanism.

You've experienced this in other places too:
- The brief flash of your phone screen even when the battery icon shows dead (the screen controller has a tiny capacitor)
- The "pop" from speakers when you plug in an audio cable (a capacitor discharging)
- Your car's brake lights responding instantly to your foot (capacitors in the power circuit)

---

## Concept 1: What a Capacitor Actually Is

A capacitor is **two conductive plates separated by an insulator** (called a dielectric).

When you connect it to a voltage source:
- Electrons pile up on one plate (that plate becomes **negative**)
- Electrons are pulled away from the other plate (that plate becomes **positive**)
- An electric field builds between the plates
- No current flows *through* the gap — the insulator prevents that
- Current only flows in the **external circuit** to move charge onto and off the plates

When the voltage source is removed, the charge stays on the plates. The capacitor is now storing energy in its electric field.

### The crucial difference from a battery

A **battery** uses chemistry to *generate* a voltage — it keeps pushing charge as long as the chemistry runs. Remove the load and it stays at 9V indefinitely.

A **capacitor** just *stores* charge that was separated by an external source. It's a rechargeable bucket. Once you connect a load, the bucket empties. There's no chemistry to refill it — it simply runs dry.

**Product analogy:** A capacitor is like a sprint team's capacity buffer. You can't run 20 engineers at full sprint velocity every single day (the battery limitation — steady but limited). But you can bank up work over a few weeks and deliver a burst feature release (the capacitor model). The burst is real and powerful, but it comes from stored capacity, not ongoing generation.

![[2026-04-17-capacitance.png]]

---

## Concept 2: Capacitance — C = Q/V

**Capacitance** is the measure of how much charge a capacitor stores per volt applied to it.

$$C = \frac{Q}{V}$$

- **C** = capacitance, measured in **Farads (F)**
- **Q** = charge stored on the plates, in Coulombs
- **V** = voltage across the capacitor, in Volts

**1 Farad = 1 Coulomb per Volt.** One Farad is an enormous amount of capacitance. Real components are measured in:
- **μF** (microfarads, 10⁻⁶ F) — common in electronics
- **nF** (nanofarads, 10⁻⁹ F) — signal processing circuits
- **pF** (picofarads, 10⁻¹² F) — radio frequency circuits

What makes capacitance larger?
- **Bigger plates** (more surface area to park charge on)
- **Smaller gap** between plates (stronger electric field per volt)
- **Better dielectric** (material that holds the electric field more efficiently)

### Energy stored

The energy stored in a capacitor is:

$$E = \frac{1}{2}CV^2$$

Why the ½? When you first start charging a capacitor, the voltage is 0V and there's no opposition. As charge builds up, voltage rises, and now you're pushing new charge against the existing field. The average voltage during charging is V/2, not V. So the total energy in is ½ × Q × V = ½CV².

**Important:** E scales with V². Double the voltage → four times the energy. Same pattern as KE = ½mv² (Session 12) and P = I²R (Session 24).

**Example:** A 1000μF capacitor charged to 9V stores:
$$E = \frac{1}{2} \times 0.001 \times 9^2 = 0.0405 \text{ J}$$

That's 40 millijoules. A AA battery stores ~3,600 J. A capacitor is not a replacement for a battery. It's a tool for *power bursts*.

---

## Concept 3: The RC Time Constant — Why Discharge is Exponential

You charge a capacitor to 9V. You then connect it to a 3Ω resistor (no battery).

**At t = 0:** V = 9V. Current = V/R = 9/3 = 3A.

**Moment later:** Current has moved charge off the plates. Q has dropped. V = Q/C has dropped. Lower V → lower I. Less charge leaves per second.

**Key insight:** The more the capacitor discharges, the slower it discharges. Self-decelerating process → exponential decay.

$$V(t) = V_0 \times e^{-t/\tau}$$

Where **τ = RC** is the **time constant**.

After one time constant τ: voltage has fallen to **37%** of starting value (e⁻¹ ≈ 0.37).
After 5τ: effectively zero (less than 1% remaining).

### For our circuit (9V, 3Ω, 1000μF):

$$\tau = RC = 3 \times 0.001 = 3 \text{ ms}$$

After 3ms: V = 9 × 0.37 = **3.3V**
After 15ms: essentially zero.

### Energy conservation link

As the capacitor discharges, E = ½CV² converts entirely to heat in the resistor via P = I²R (Session 24). Energy is conserved — it transforms, not disappears (Session 13). The discharge is front-loaded: most energy exits in the first time constant.

---

## Three Ideas, One Table

| Concept | Formula | Unit | What it tells you |
|---------|---------|------|-------------------|
| Capacitance | C = Q/V | Farads (F) | How much charge per volt |
| Stored energy | E = ½CV² | Joules | V² dependence — doubling voltage quadruples stored energy |
| Time constant | τ = RC | Seconds | How fast the capacitor charges/discharges through a resistor |

---

## Connecting to Previous Sessions

| Session | Connection |
|---------|-----------|
| S21: Charge, Current, Voltage | Q and V are the two variables in C = Q/V |
| S22: Resistance | R is the R in τ = RC |
| S13: Conservation of Energy | E = ½CV² converts to heat (P = I²R) in resistor — energy conserved |
| S24: Power & Energy | P = I²R describes exactly how capacitor energy dissipates |
| S12: Work & Energy | The ½ in ½CV² has the same origin as ½mv² — average over a build-up from zero |

---

## Open Question — Previewing Session 26

When current flows through a wire, it creates a magnetic field in a ring around that wire. You can't see it, but a compass needle deflects.

Now imagine you wind that wire into a tight spiral coil — hundreds of turns — and push a piece of iron through the middle.

The magnetic field lines up. The iron amplifies it. You can now pick up objects, hold them against gravity, or use the field to push something.

You've just built the most important machine of the last 200 years.

**What is it — and what does this have to do with the work done by the current flowing through the coil?**

→ Session 26: Magnetic Fields & Motors

---

*Written by Nova, Kevin's learning agent. Session 25 of 39.*
