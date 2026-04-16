---
title: "Power and Energy"
order: 4
chapter: electrical-foundations
track: electrical-engineering
date: 2026-04-15
concepts:
  - Power — the rate of energy conversion, P = IV (Watts)
  - P = I²R and P = V²/R — why current matters more than voltage for heat
  - Energy — joules and kilowatt-hours, what your electricity bill actually measures
  - Why cables get hot — and why overloading doubles heat, not current
prerequisite_sessions:
  - what-is-electricity
  - voltage-the-pressure-that-drives-current
  - resistance-and-ohms-law
---

# Session 4: Power and Energy

**Date:** 2026-04-15
**Track:** 8 — Electrical Engineering Foundations (Session 4)
**Concepts:** P = IV, P = I²R, watts, joules, kilowatt-hours, why cables get hot
**Prerequisites:** Sessions 1–3 (charge, current, voltage, Ohm's Law)

---

## The Hook: The Cable That Started a Fire

A standard 13A extension lead is rated to carry 13 Amps. You plug in a 3kW fan heater, a 2kW kettle, and a 2.4kW microwave. That's 7.4kW at 230V — about 32 Amps. The cable quietly overloads. The breaker doesn't trip immediately. The extension lead gets warm, then hot, then the insulation melts.

But here's the counterintuitive part: you've only pushed 2.5× more current through the cable than it was rated for. So why does the cable produce more than **six times** the heat?

The answer is in the relationship between current and power — and it has a square in it.

This is the session where V, I, and R from Sessions 1–3 stop being just quantities and start doing work.

---

## Concept 1: Power — The Rate of Energy Conversion

**Power** is the rate at which energy is transferred or converted. In electrical circuits, it's the rate at which electrical energy is converted into some other form — heat, light, motion, sound.

The fundamental definition:

$$P = \frac{W}{t}$$

Where W is work (energy, in Joules) and t is time (seconds). The unit of power is the **Watt (W)**, named after James Watt.

> **1 Watt = 1 Joule of energy converted per second.**

But in a circuit, we can express power directly in terms of voltage and current:

$$\boxed{P = I \times V}$$

Why? Because:
- Voltage (V) = energy per unit charge (Joules per Coulomb)
- Current (I) = charge per unit time (Coulombs per second)

Multiply them: Joules/Coulomb × Coulombs/second = **Joules/second = Watts**.

The algebra makes physical sense: more voltage means each Coulomb carries more energy; more current means more Coulombs arrive per second. Power = how much energy each carrier has × how many carriers arrive per second.

**Worked examples:**

*A 230V mains circuit has 5A flowing through a kettle element. What is the power?*

$$P = I \times V = 5 \times 230 = 1,150 \text{ W} = 1.15 \text{ kW}$$

*A 12V car headlamp draws 4A. What power does it consume?*

$$P = 4 \times 12 = 48 \text{ W}$$

*A LED bulb on a 5V USB circuit draws 0.04A (40mA). What power?*

$$P = 0.04 \times 5 = 0.2 \text{ W}$$

The range tells the story: from 0.2W for an LED to 3,000W for a kettle. Same circuit physics, very different scales.

---

## Concept 2: P = I²R — Why Current Is the Danger

Here's where Ohm's Law (V = IR) combines with P = IV to give us the most important formula for understanding electrical safety:

Starting with P = IV, substitute V = IR:

$$P = I \times (IR) = I^2 R$$

Or, substituting I = V/R into P = IV:

$$P = \frac{V}{R} \times V = \frac{V^2}{R}$$

Three equivalent forms:

$$P = IV \qquad P = I^2R \qquad P = \frac{V^2}{R}$$

Which form you use depends on what you know. But **P = I²R** is the one that explains almost every cable heat and fire scenario.

**The crucial insight:** Power scales with the *square* of current.

If you double the current through a conductor:
$$P = (2I)^2 R = 4I^2 R$$

**Four times the heat. Not twice.** The same resistance, but four times the power dissipated.

If you triple the current:
$$P = (3I)^2 R = 9I^2 R$$

**Nine times the heat.** Quadratic, not linear.

Now go back to the extension lead: you pushed 32A through a cable rated for 13A — that's 2.46× the rated current. Power dissipated in the cable:

$$\frac{32^2}{13^2} = \frac{1024}{169} \approx 6.1 \times \text{ rated heat}$$

Six times the rated heat generation, even though the current only went up 2.5×. The I² relationship is why cable ratings are not conservative suggestions — they're the point at which the insulation begins to degrade.

**Worked examples:**

*A 3Ω resistor carries 4A. What power is dissipated as heat?*

$$P = I^2 R = 16 \times 3 = 48 \text{ W}$$

*A cable has resistance 0.1Ω. At 10A, how much power does it waste?*

$$P = I^2 R = 100 \times 0.1 = 10 \text{ W}$$

*Double the current to 20A:*

$$P = 400 \times 0.1 = 40 \text{ W}$$

40W in a cable — that's not nothing. It's a 40W heater built into your wall. Which is why every circuit is rated for a maximum current, not a maximum power.

**Using P = V²/R:** this form is useful when you know voltage but not current.

*A 230V supply connects across a 1,000Ω resistor. What power?*

$$P = \frac{V^2}{R} = \frac{230^2}{1000} = \frac{52,900}{1000} = 52.9 \text{ W}$$

---

## Concept 3: Energy — Joules and Kilowatt-Hours

Power tells you how fast energy is being used. **Energy** is how much total energy is used over time:

$$W = P \times t$$

The SI unit of energy is the **Joule (J)**.

A 1W device running for 1 second uses 1 Joule. But in domestic electrical practice, Joules are impractically small. A kettle uses 360,000 Joules every three minutes. So electricity is billed in **kilowatt-hours (kWh)**:

$$1 \text{ kWh} = 1,000 \text{ W} \times 3,600 \text{ s} = 3,600,000 \text{ J} = 3.6 \text{ MJ}$$

A kilowatt-hour is the energy consumed by a 1kW device running for one hour.

**The relationship between P = IV and your electricity bill:**

| Appliance | Power | Time used/day | Daily energy |
|-----------|-------|---------------|--------------|
| Kettle (3kW) | 3,000 W | 10 min | 0.5 kWh |
| Washing machine (2.5kW) | 2,500 W | 1 hour | 2.5 kWh |
| LED bulb (10W) | 10 W | 8 hours | 0.08 kWh |
| Electric shower (10kW) | 10,000 W | 10 min | 1.67 kWh |

At ~28p/kWh (UK average 2025), a single 10-minute shower costs about 47p. Running 10 LED bulbs for a full day costs about 22p. The kettle is deceptively expensive — three minutes of 3kW, used five times a day, adds up fast.

**Worked example:**

*A 2kW storage heater runs for 7 hours on overnight economy tariff at 13p/kWh. What does it cost?*

$$\text{Energy} = P \times t = 2 \text{ kW} \times 7 \text{ h} = 14 \text{ kWh}$$
$$\text{Cost} = 14 \times 0.13 = £1.82$$

This is exactly the calculation an electrician needs when advising clients on running costs or sizing a solar/battery storage system.

---

## Bringing It All Together: The Power Triangle

The three expressions for power come from the same two parent equations — P = IV and V = IR. If you know any two of {V, I, R}, you can find P:

| Known | Formula to use |
|-------|----------------|
| V and I | P = IV |
| I and R | P = I²R |
| V and R | P = V²/R |

And the reverse — if you know P and one other quantity:

| Known | Find I | Find V | Find R |
|-------|--------|--------|--------|
| P and V | I = P/V | — | R = V²/P |
| P and I | — | V = P/I | R = P/I² |
| P and R | I = √(P/R) | V = √(PR) | — |

These are not twelve separate formulas. They are one idea — energy conversion rate — expressed six different ways using Ohm's Law as a bridge.

---

## Why This Matters to an Electrician

Every protection device — fuse, MCB, RCD — is ultimately protecting against the consequence of P = I²R. If too much current flows through a cable:

1. P = I²R says the cable heats quadratically, not linearly
2. When the cable's insulation temperature limit is exceeded, the insulation degrades or melts
3. Once the insulation fails, current takes unintended paths — to earth, to adjacent conductors, to combustible materials

The fuse or MCB doesn't protect the appliance. It protects the **cable** — specifically, it limits current to the level at which the cable's P = I²R heat generation stays below its thermal limit.

Cable current ratings (covered in Session 13) are not arbitrary. They're calculated from I²R heat generation vs the cable's thermal dissipation capacity. A 2.5mm² cable in free air can sustain 27A. The same cable clipped to a thermal insulation board might only safely carry 15A — because the heat can't escape.

---

## Visual

![[2026-04-15-elec-session-04-power-and-energy.jpg]]

*Three-panel diagram on dark navy background. Left: circuit showing P = IV, with current arrows and voltage labels in amber/gold. Centre: the I²R insight — cable cross-section showing ×2 current producing ×4 heat (amber heat waves), with the quadratic relationship highlighted. Right: energy vs power — joule as single conversion event, watt as sustained rate, kilowatt-hour as the billing unit. Clean technical style, all labels in white on navy.*

---

## Summary: Three Ideas

1. **Power = rate of energy conversion.** P = IV in Watts. More voltage and more current both increase power. A kettle at 230V, 13A dissipates 2,990W — nearly 3kW, all of it turned to heat.
2. **P = I²R — the squaring law.** Substitute Ohm's Law into P = IV and power scales with current *squared*. Double the current → four times the heat. This is the physics behind every cable rating and every fire caused by an overloaded extension lead.
3. **Energy = power × time.** Joules are the SI unit; kilowatt-hours are the practical billing unit. 1 kWh = 3.6 MJ = a 1kW device for one hour. Your electricity bill is entirely P × t, summed across every appliance in your home.

---

## Open Question: Bridge to Session 5

> You have a 9V battery, two identical 3Ω resistors, and a small bulb.
>
> **Option A:** Wire both resistors end-to-end in a single line — one path for current to follow.
> **Option B:** Wire both resistors side by side — two parallel paths.
>
> In which arrangement does each resistor carry more current? In which does the battery drain faster? And what is the equivalent single resistance the battery "sees" in each case?
>
> The answer unlocks every multi-component circuit you'll ever work with. That's Session 5: Series and Parallel Circuits.

---

*Session delivered by Nova, 2026-04-15*
*Next: Session 5 — Series and Parallel Circuits: current and voltage behaviour, equivalent resistance, real-world wiring*
