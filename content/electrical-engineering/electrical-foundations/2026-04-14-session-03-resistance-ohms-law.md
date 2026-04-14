---
title: "Resistance and Ohm's Law"
order: 3
chapter: electrical-foundations
track: electrical-engineering
date: 2026-04-14
concepts:
  - Resistance — what opposes current, measured in Ohms (Ω)
  - Ohm's Law — V = IR, the most important equation in circuit analysis
  - Conductors vs insulators vs semiconductors — why materials differ
  - Resistivity — the material property that determines resistance
prerequisite_sessions:
  - what-is-electricity
  - voltage-the-pressure-that-drives-current
---

# Session 3: Resistance and Ohm's Law

**Date:** 2026-04-14
**Track:** 8 — Electrical Engineering Foundations (Session 3)
**Concepts:** Resistance (Ω), Ohm's Law (V = IR), conductors vs insulators, resistivity
**Prerequisites:** Session 1 (charge, current), Session 2 (voltage, EMF)

---

## The Hook: Two Wires, Same Voltage, Very Different Results

Take two wires. Both are 1 metre long. Connect 12V across each.

- **Wire A:** thick copper. Current: ~2,400 Amps.
- **Wire B:** thin nichrome (the spiral in a toaster). Current: ~0.8 Amps.

Same voltage. Three-thousand-times less current.

Something about Wire B *opposes* the flow of electrons far more than Wire A does. That property is **resistance**. And the relationship between voltage, current, and resistance is one of the most important equations in all of engineering.

This is the session where the three fundamental quantities of electricity — voltage, current, and resistance — come together for the first time.

---

## Concept 1: Resistance — The Opposition to Current

**Resistance** is a measure of how much a material opposes the flow of electric current.

At a microscopic level: as electrons drift through a conductor, they collide with the metal's atoms. Each collision transfers energy (usually as heat) and slows the electron down. The more collisions per metre, the higher the resistance.

The unit of resistance is the **Ohm (Ω)**, named after Georg Simon Ohm.

> **1 Ohm means: 1 Volt of potential difference drives exactly 1 Ampere of current through that component.**

So Ohms are not an arbitrary unit — they're defined by the relationship between voltage and current. That relationship is next.

---

## Concept 2: Ohm's Law — V = IR

Ohm's Law is deceptively simple:

$$V = I \times R$$

Where:
- **V** = voltage across the component (Volts)
- **I** = current through the component (Amperes)
- **R** = resistance of the component (Ohms)

Rearranged three ways:

$$I = \frac{V}{R} \qquad R = \frac{V}{I} \qquad V = IR$$

This is not just a formula — it's a statement about how the universe behaves. For ohmic materials (those that obey Ohm's Law), the relationship between voltage and current is **linear**. Double the voltage, double the current. Halve the resistance, double the current. The graph of current vs voltage is a straight line through the origin, with gradient = 1/R.

**The three versions you'll use constantly:**

| Question | Formula |
|----------|---------|
| What current flows? | I = V/R |
| What voltage is dropped? | V = IR |
| What is the resistance? | R = V/I |

**Practical worked examples:**

*A 230V mains socket connects to a 46Ω kettle element. How much current flows?*

$$I = \frac{V}{R} = \frac{230}{46} = 5 \text{ A}$$

*A 12V car battery pushes 4A through a headlamp. What is the lamp's resistance?*

$$R = \frac{V}{I} = \frac{12}{4} = 3 \text{ Ω}$$

*A component with 10Ω has 2A flowing through it. What's the voltage across it?*

$$V = I \times R = 2 \times 10 = 20 \text{ V}$$

These three moves — finding V, I, or R when you know the other two — will come up in every circuit you ever analyse.

---

## Concept 3: Why Materials Differ — Conductors, Insulators, Semiconductors

Why does copper have low resistance and rubber have virtually infinite resistance?

The answer is in the atomic structure. Every material has a characteristic called **resistivity (ρ)** — measured in Ohm-metres (Ω·m) — which is an intrinsic property of the material, independent of its shape.

The resistance of a specific piece of conductor is:

$$R = \frac{\rho \times L}{A}$$

Where:
- **ρ** = resistivity of the material (Ω·m) — a material constant
- **L** = length of the conductor (m)
- **A** = cross-sectional area (m²)

This formula gives you two practical truths an electrician uses every day:

1. **Longer wire = more resistance.** Double the cable run, double the resistance.
2. **Thicker wire = less resistance.** Double the cross-sectional area, halve the resistance.

Both of these are why cable sizing matters (Session 13). But first, the material categories:

**Conductors** — very low resistivity (ρ ≈ 10⁻⁸ Ω·m)

These have many free electrons in their outer shells. Copper, aluminium, silver, and gold are all conductors. Copper (ρ = 1.7 × 10⁻⁸ Ω·m) is the dominant choice in wiring because it balances cost, conductivity, and mechanical properties.

**Insulators** — very high resistivity (ρ ≈ 10¹⁰–10¹⁶ Ω·m)

Electrons are tightly bound to their atoms and cannot move freely. Rubber, PVC, glass, ceramic. The PVC insulation around every cable in your house is an insulator — it confines the current to the copper inside.

**Semiconductors** — intermediate and tuneable resistivity (ρ ≈ 10⁻³–10⁴ Ω·m)

Silicon and germanium fall between conductors and insulators. Crucially, their resistivity can be modified by adding tiny amounts of impurities (doping) — which is the basis for transistors, diodes, and all of modern electronics. An EE topic for later sessions.

**Resistivity comparison table:**

| Material | Resistivity (Ω·m) | Type |
|----------|------------------|------|
| Silver | 1.6 × 10⁻⁸ | Conductor |
| Copper | 1.7 × 10⁻⁸ | Conductor |
| Aluminium | 2.8 × 10⁻⁸ | Conductor |
| Nichrome | 1.1 × 10⁻⁶ | Resistive conductor |
| Silicon | ~6.4 × 10² | Semiconductor |
| PVC | ~10¹³ | Insulator |
| Rubber | ~10¹³–10¹⁶ | Insulator |

Note that nichrome's resistivity is about 65× higher than copper's — which is precisely why it's used in heating elements. It has enough resistance to convert electrical energy to heat efficiently, without melting.

---

## The Temperature Caveat

Ohm's Law holds well for metals at constant temperature. But resistance is not perfectly constant:

- **For metals:** resistance *increases* with temperature. As a wire heats up, atoms vibrate more, causing more collisions, increasing resistance. A tungsten light bulb filament at operating temperature (~2,500°C) has 10× the resistance it has when cold.
- **For semiconductors:** resistance *decreases* with temperature — more electrons gain enough energy to become mobile. This is why some electronic components behave differently when hot.

For most practical wiring calculations, we treat resistance as constant. But understanding the temperature effect matters for fuse sizing, motor protection, and any heating application.

---

## Non-Ohmic Devices

Not all components obey Ohm's Law. A **diode**, for example, allows current to flow easily in one direction but blocks it in the other — the current-voltage relationship is exponential, not linear. An LED is similar. A filament bulb is approximately ohmic, but its resistance changes as it heats up.

When a device is "ohmic," the V-I graph is a straight line. When it isn't, the graph curves. Ohm's Law still defines resistance at any specific point (R = V/I), but the ratio changes with operating conditions.

For everything in domestic wiring — cables, resistors, heating elements — you can assume ohmic behaviour and apply V = IR directly.

---

## Worked Example: Full Circuit Calculation

You have a 9V battery connected to a 3Ω resistor.

**How much current flows?**

$$I = \frac{V}{R} = \frac{9}{3} = 3 \text{ A}$$

**If you replace the 3Ω resistor with a 9Ω resistor:**

$$I = \frac{9}{9} = 1 \text{ A}$$

Triple the resistance → one-third the current. Linear relationship confirmed.

**Now calculate the resistance of a 10m length of 2.5mm² copper cable** (the standard size for socket circuits in the UK):

Using ρ = 1.7 × 10⁻⁸ Ω·m, L = 10 m, A = 2.5 × 10⁻⁶ m²:

$$R = \frac{1.7 \times 10^{-8} \times 10}{2.5 \times 10^{-6}} = 0.068 \text{ Ω}$$

About 0.07 Ω for 10 metres — tiny but not zero. Multiply by the round trip (20m for live + neutral) and it becomes 0.14Ω. At 32A fault current, that's a 4.5V drop. Which is why cable length matters for ring main calculations and why long cable runs need uprating (Session 13).

---

## Visual

![[2026-04-14-elec-session-03-resistance-ohms-law.png]]

*Three-panel diagram on dark navy background. Left: two conductor cross-sections (thick copper vs thin nichrome) with electrons drifting — more collisions shown in the narrow conductor. Centre: circuit diagram with battery, resistor, and V=IR triangle label. Right: linear V-I graph (Ohmic) with gradient = 1/R labelled; resistivity comparison bar beneath.*

---

## Summary: Three Ideas

1. **Resistance (Ω) is opposition to current.** Caused by electron-atom collisions. Higher resistance → less current for the same voltage. The unit is the Ohm, defined via V = IR.
2. **Ohm's Law: V = IR** — the most-used equation in circuit analysis. Three forms: find current (I = V/R), find voltage (V = IR), find resistance (R = V/I). Applies to all ohmic components.
3. **Material choice determines resistance.** Resistivity (ρ) is the material constant; R = ρL/A means longer wire adds resistance, thicker wire reduces it. Copper conducts, PVC insulates, nichrome heats — by design, not accident.

---

## Open Question: Bridge to Session 4

> A 3Ω resistor has 3A flowing through it. You know the voltage (9V) and the current (3A). But what is the **power** — the rate at which electrical energy is being converted to heat?
>
> And why does doubling the current through a wire make it *four times* hotter — not twice? The answer involves squaring the current, and it's the reason cables have current ratings and why an overloaded wire starts a fire before it trips a breaker.
>
> That's Session 4: Power and Energy.

---

*Session delivered by Nova, 2026-04-14*
*Next: Session 4 — Power and Energy: P = IV, P = I²R, watts, joules, and why cables get hot*
