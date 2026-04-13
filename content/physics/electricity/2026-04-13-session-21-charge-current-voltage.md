---
title: "Charge, Current & Voltage"
session_number: 21
unit: "Electricity"
date: "2026-04-13"
concepts:
  - Electric charge and Coulomb's Law
  - Drift velocity vs electric field propagation speed
  - Voltage as electrical potential energy (EPE = QV)
prerequisite_sessions:
  - session-01-what-is-a-force
  - session-12-work-energy-power
  - session-13-conservation-of-energy
  - session-19-em-spectrum
  - ee-session-01-what-is-electricity
  - ee-session-02-voltage
---

# Session 21: Charge, Current & Voltage
*Track 4 — Physics Fundamentals | Unit 3: Electricity*
**Date:** 2026-04-13
**Session:** 21 of 39
**Unit:** Electricity (Sessions 21–27)

---

## Concepts Covered
1. Electric charge and Coulomb's Law (the force that governs all chemistry and electronics)
2. Current — drift velocity vs. field propagation speed (why the kettle heats instantly)
3. Voltage as electrical potential energy (the "height" charge falls through)

**Prerequisite sessions:** Sessions 1–3 (Newton's Laws / inverse-square forces), Session 12 (Work & Energy), Session 13 (Conservation of Energy), Session 19 (EM Spectrum), EE Sessions 1–2 (charge, current, voltage basics)

---

## The Hook

You flip a light switch. The kettle element is two metres away, connected by copper wire. Electrons in copper drift at about **0.1 mm/s** — roughly the speed of a very slow worm. At that rate, any given electron would take over 5 hours to travel from the socket to the element.

But the kettle starts heating in under a millisecond.

So: what actually travels down the wire?

(This was the open question left at the end of Session 20. Today you get the answer.)

---

![[2026-04-13-electric-charge-field.jpg]]

---

## What You Already Know (from EE Sessions 1–2)

- Atoms have protons (+), neutrons (neutral), electrons (−)
- Opposite charges attract, same charges repel
- **Current:** I = Q/t (charge flow per second, Amperes)
- **Voltage:** V = W/Q (energy per unit charge, Volts)
- A battery maintains a potential difference using chemistry

Today we go deeper: *why* do charges exert forces? *What* propagates at near-light-speed? *How* does voltage relate to energy storage?

---

## Concept 1: Electric Charge and Coulomb's Law

### The idea

The universe contains two types of charge — positive and negative — and one rule governs them completely:

- **Like charges repel.** Two protons push apart. Two electrons push apart.
- **Unlike charges attract.** Proton and electron pull together.

Gravity only ever attracts (there's only one type of mass). Electrostatics attracts *and* repels — which makes it vastly more versatile.

Now: a charged object doesn't need to touch another to exert force. Rub a balloon on your hair and hold it near small pieces of paper. They leap up. Nothing touched them. Something in the empty space around the balloon is doing the work.

That "something" is the **electric field** — an invisible influence a charged object creates in all the space around it. Any other charge placed in that field feels a force. The field is as real as the charge that created it.

### The maths: Coulomb's Law

$$F = k\frac{q_1 q_2}{r^2}$$

- F = force between the charges (Newtons)
- k = Coulomb's constant = 8.99 × 10⁹ N·m²/C²
- q₁, q₂ = the two charges (Coulombs)
- r = distance between them (metres)

**Spot the pattern.** This is structurally identical to Newton's gravitational law:

$$F_{grav} = G\frac{m_1 m_2}{r^2}$$

Same inverse-square relationship. The universe uses this shape twice. The key difference: gravity only attracts; Coulomb works in both directions.

The scale difference is staggering: the Coulomb force between a proton and electron is roughly **10³⁶ times stronger** than the gravitational force between them. Electricity is the dominant force in chemistry, biology, and all electronics. The reason gravity shapes our visible world is that matter is electrically *neutral* in bulk.

### The electric field

Define the electric field **E** as the force per unit charge:

$$E = \frac{F}{q} \quad \text{(units: N/C, equivalently V/m)}$$

Visualise as field lines — arrows showing the direction a positive test charge would be pushed:
- Field lines radiate **outward** from positive charges
- Field lines converge **inward** toward negative charges
- Where lines are dense, the field is strong

**Analogy:** Think of a company's strategy as an electric field. The CEO creates a *culture and direction* that permeates the organisation. Any new person placed in that environment feels a force (direction, priority) without direct contact. The field is real even when invisible.

---

## Concept 2: Current — Drift vs. Signal

### The idea

When you close a switch, an electric field propagates through the wire at close to the speed of light (~0.9c). That field reaches every centimetre of wire almost simultaneously and pushes *all* electrons at once.

**The marble-tube analogy:** Imagine a tube completely packed with marbles end to end. Push one marble in at the left. Instantly, a marble pops out at the right. The individual marbles barely moved — they each nudged their neighbour. But the signal propagated the full length immediately.

Electrons in copper are those marbles. The wire is already full (8.5 × 10²⁸ free electrons per cubic metre). When the field switches on, every electron nudges the next one. Energy flows at near-light speed — not because electrons travel that fast, but because the field propagates and the wire is pre-loaded.

**The crucial insight:** it is the **electric field** (an electromagnetic wave guided by the conductor) that delivers energy at near-light speed. The electrons themselves drift at 0.1 mm/s.

### The maths

$$I = \frac{Q}{t}$$

One Ampere = one Coulomb per second past any cross-section. At e = 1.6 × 10⁻¹⁹ C per electron, that's 6.24 × 10¹⁸ electrons per second.

Drift velocity:
$$v_d = \frac{I}{nAe}$$

- n = free electron density (≈ 8.5 × 10²⁸ m⁻³ for copper)
- A = wire cross-sectional area (m²)
- e = 1.6 × 10⁻¹⁹ C

For a 1 mm² wire carrying 1A: v_d ≈ **0.074 mm/s**. Confirmed — negligibly slow.

**Connection to Session 19 (EM Spectrum):** The signal propagating along the wire is literally an electromagnetic wave. Every time you flip a switch, you're launching an EM wave guided by a conductor.

---

## Concept 3: Voltage as Electrical Potential Energy

### The idea

From Sessions 12 and 13: GPE = mgh. Lift a ball to height h, store energy, release it to fall downhill.

Voltage is exactly this, applied to charge. **Voltage is the electrical height a charge sits at:**

$$V = \frac{W}{Q}$$

- V = voltage (Volts)
- W = work done (Joules)
- Q = charge moved (Coulombs)

**1 Volt = 1 Joule per Coulomb.**

A 9V battery does 9 Joules of work per Coulomb moved through the circuit. When that charge flows through the external load (kettle, bulb), those 9 J/C are released as heat and light. Charge flows from high to low voltage — exactly as water flows downhill.

### The complete gravitational analogy

| Gravitational | Electrical |
|--------------|------------|
| Mass m (kg) | Charge Q (Coulombs) |
| Height h (metres) | Voltage V (Volts) |
| GPE = mgh (Joules) | EPE = QV (Joules) |
| Gravitational field g (N/kg) | Electric field E (N/C = V/m) |
| Water flows downhill | Current flows from high V to low V |
| Pump lifts water back up | Battery restores charge separation |

**Analogy:** Voltage is like a salary differential. Charge responds to *differences* in voltage, not absolute levels. A £70k offer doesn't attract someone already on £70k — no potential difference, no current. A £20k differential drives the "current" of talent. EMF is like the recruiter maintaining the gap.

### Conventional current vs. electron flow

Benjamin Franklin defined current flowing from + to −. Electrons physically flow − to + (negatively charged). The convention stuck. "Conventional current" flows + to −; electrons flow the other way. The maths is consistent either way — circuits and formulae use conventional current by default.

---

## The Maths in One Table

| Concept | Formula | Units |
|---------|---------|-------|
| Coulomb's Law | F = kq₁q₂/r² | Newtons (N) |
| Electric field | E = F/q | N/C or V/m |
| Current | I = Q/t | Amperes (A) |
| Drift velocity | v_d = I/(nAe) | m/s |
| Voltage | V = W/Q | Volts (V) |
| Electrical PE | EPE = QV | Joules (J) |

---

## Connections to Previous Sessions

- **Sessions 1–3** (Newton's Laws): Coulomb's Law is another inverse-square force law — same mathematical family as gravity.
- **Session 12** (Work & Energy): V = W/Q is work per unit charge. The same W = Fd relationship, applied to charges in a field.
- **Session 13** (Conservation of Energy): EPE = QV is a potential energy store, exactly like GPE = mgh.
- **Session 19** (EM Spectrum): The field signal in a wire IS an electromagnetic wave guided by the conductor.
- **EE Sessions 1–2**: Definitions of charge, current, voltage already known. Today: the physics underneath — Coulomb's Law, field lines, why drift velocity doesn't matter to response time.

---

## Open Question (Preview of Session 22)

You connect a 9V battery to two identical wires in turn:
- Wire A is 10 cm long
- Wire B is 100 cm long (ten times as long)

Same voltage. Same wire material. Everything identical except length.

Does more current, less current, or the same current flow through Wire B compared to Wire A? And why?

*(Hint: the electrons in Wire B have to push through ten times as much copper. What property of the wire quantifies how much it opposes the flow of current?)*

→ Session 22: **Ohm's Law and Resistance** — why V = IR is one of the most useful equations in engineering, and why your phone charger gets warm.

---

*Nova | Track 4 Physics | Session 21 of 39*
