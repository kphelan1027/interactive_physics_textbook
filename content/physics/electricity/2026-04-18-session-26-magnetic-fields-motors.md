---
title: "Magnetic Fields & Motors"
session_number: 26
unit: "Electricity"
date: "2026-04-18"
concepts:
  - Magnetic fields from current
  - Right-hand rule for field direction
  - Solenoids and electromagnets
  - Motor effect (F = BIL)
  - Fleming's Left-Hand Rule
  - DC motor anatomy and commutator
prerequisite_sessions: [21, 22, 24, 25]
---

# Physics Session 26 — Magnetic Fields & Motors

**Date:** 2026-04-18
**Session:** 26 of 39
**Unit:** 3 — Electricity
**Track:** 4 (Physics Fundamentals)
**Concepts:** Magnetic fields from current, the Motor Effect (F = BIL), Fleming's Left-Hand Rule, how a DC motor works
**Prerequisite sessions:** S21 (charge, current), S22 (resistance, V=IR), S24 (P=IV), S25 (capacitance)

---

## Answering Session 25's Open Question

> *"When current flows through a wire, it creates a magnetic field in a ring around that wire. You wind it into a tight spiral coil. You push iron through the middle. You've just built the most important machine of the last 200 years. What is it?"*

An **electromagnet** — and when you add a second magnet and let them push against each other, you get a **motor**. But let's build the understanding from scratch.

---

## The Phenomenon: Your Phone Vibrates

Right now, somewhere in your pocket, there's a small cylinder containing a tiny piece of wire wrapped around a metal core, sitting between two permanent magnets.

When your phone decides to vibrate, it sends a current through that wire. The wire, now inside a magnetic field, experiences a force. The cylinder shifts. Spring tension pulls it back. The current reverses. It shifts again. Fifty times a second, your phone is converting electricity directly into mechanical motion — no combustion, no pistons, no moving parts except the tiny coil itself.

That's the motor effect. And it's the same principle — scaled up — behind every electric vehicle, every washing machine drum, every wind turbine generator, every hard drive head, every drone propeller on Earth.

---

## Concept 1: Magnetic Fields from Current

In 1820, Hans Christian Ørsted was demonstrating electricity to students when he noticed that a compass needle deflected every time current flowed through a nearby wire.

**The discovery:** Current creates a magnetic field.

The field doesn't radiate outward in straight lines the way an electric field does. It wraps around the wire in **concentric circles**, like rings around a long straight stick.

### The Right-Hand Rule

To find which way the field circles:
- Point your right thumb in the direction of current flow
- Your fingers curl in the direction the magnetic field circles

If current flows away from you (into the page), the field circles **clockwise** around the wire. If current comes toward you (out of the page), the field circles **anticlockwise**.

### Solenoids: Amplifying the Field

Wind that wire into a tight coil (a **solenoid**) — hundreds of turns — and something powerful happens. Each loop's field lines reinforce all the others. Inside the coil, all the field lines run in the same direction. You've created a uniform, strong magnetic field from a thin wire and a battery.

Push an iron core inside: the iron's atoms align with the field and amplify it further — sometimes hundreds of times. This is an **electromagnet**.

The field only exists while current flows. Remove the current: field gone. Reverse the current: field reverses. This controllability is what makes electromagnets so useful — and it's what makes motors possible.

**Product analogy:** Think of the solenoid as a team working on a sprint. One engineer making progress is like one loop of wire — weak individual field. Fifty engineers all pushing the same direction — aligned sprint — the combined effect is non-linear. The "field" (output, momentum, feature velocity) is not 50× stronger — it's potentially hundreds of times stronger if alignment is right, because each contribution reinforces the others.

---

## Concept 2: The Motor Effect — F = BIL

Here's where things get useful.

A current-carrying wire creates a magnetic field. But what happens when you put a current-carrying wire *inside* an existing magnetic field — say, between the poles of a permanent magnet?

The two magnetic fields interact. The result: **a force on the wire**.

The wire isn't touching the magnet. There's no friction, no contact. A force appears from nothing but fields interacting.

### The Formula

$$F = BIL$$

- **F** = force on the wire (Newtons)
- **B** = magnetic field strength of the external field (Teslas, T)
- **I** = current through the wire (Amperes)
- **L** = length of wire inside the field (metres)

**Double the current → double the force.** Same relationship as impulse (J = FΔt from Session 10): force scales linearly with the cause.

### Fleming's Left-Hand Rule

The force direction follows **Fleming's Left-Hand Rule**. Hold your left hand with:
- **thuMb** pointing in the direction of **Motion** (force on wire)
- **First finger** pointing in the direction of the **Field** (N to S)
- **seCond finger** pointing in the direction of **Current** (conventional, + to −)

Point any two fingers, and the third tells you the third direction automatically. It's a 3D right-angle guarantee.

**Example:** Field pointing left-to-right (first finger right). Current flowing away from you (second finger away). Your thumb: pointing **upward** — that's the force direction.

Reverse the current (second finger toward you): force now points **downward**.

This force-reversal is the key to making something rotate.

---

## Concept 3: How a DC Motor Works

Take everything above and build the following:

1. A rectangular coil of wire, free to rotate on an axle
2. Two permanent magnets, one either side, creating a horizontal field across the coil
3. A battery connected to the coil via two curved contacts — **brushes** — that rub against rotating **commutator** rings

**What happens when current flows:**

- The top conductor of the coil has current flowing one direction → field pushes it **upward**
- The bottom conductor has current flowing the other direction (return path) → field pushes it **downward**

Top pushed up, bottom pushed down. The coil **rotates**.

**The commutator problem — and solution:**

If nothing changed, the coil would rotate 90° and then stop — the forces would now be pulling inward (trying to squash the coil), not rotating it.

The commutator is a split ring that reverses the current direction through the coil every half-turn. The result: the upward force always acts on whichever conductor is on the top, and the downward force always acts on the bottom.

The coil keeps rotating. That's a DC motor.

**Important:** More current = stronger force = more torque = harder acceleration. This is why an electric car delivers full torque instantly from 0 rpm — F = BIL is current-driven, not speed-driven. A petrol engine's torque is RPM-dependent. An electric motor's torque is current-dependent. That's the feel of instant acceleration in a Tesla.

### Power in a Motor

The power going into the motor:
$$P_{in} = IV$$

...from Session 24. The power coming *out* as mechanical work:
$$P_{out} = Fv$$

...from Session 12 (P = Fv). In an ideal motor, P_in = P_out. In a real motor, some of that IV goes to I²R heating in the coil windings (from Session 24). The ratio is efficiency: η = P_out / P_in.

A good electric motor is 90–95% efficient — meaning 90–95% of the electrical energy actually moves the shaft. A petrol engine typically manages 25–35%. This is why electric vehicles are so much cheaper to run per kilometre.

**Financial analogy:** Efficiency is your GM% for the energy budget. A petrol engine has ~28% GM% on its fuel — 72p of every pound of petrol goes to heat. An electric motor has ~92% GM% — only 8p wasted. Over 150,000 km of driving, the compounding difference in "energy gross margin" is worth thousands of pounds.

![[2026-04-18-magnetic-fields-motors.png]]

---

## Three Ideas, One Table

| Concept | Formula / Rule | What it tells you |
|---------|---------------|-------------------|
| Field from current | Right-hand rule: thumb = current, fingers = B circles | Current always creates a surrounding magnetic field |
| Motor effect | F = BIL | Force on a wire in a field scales with current and field strength |
| DC motor | Commutator reverses current every half-turn | Keeps force direction consistent → continuous rotation |

---

## Connecting to Previous Sessions

- **Session 21 (Charge & Current):** I in F = BIL is the same current from I = Q/t. The motor responds to how many charges pass per second.
- **Session 22 (Ohm's Law):** Coil windings have resistance — some voltage drops as I²R heating (efficiency loss).
- **Session 24 (Power):** P_in = IV; motor efficiency = P_mechanical / P_electrical; the difference is I²R in the windings.
- **Session 10 (Impulse):** F = BIL creates the force; how long you apply it (time × F) determines the angular impulse — the motor equivalent of FΔt from the collisions unit.
- **Session 19 (EM Spectrum):** We noted that electricity and magnetism are related — today that's explicit. A current creates a magnetic field. Tomorrow's session reveals the reverse.

---

## Open Question — Previewing Session 27

Today: electricity creates magnetism. Current in a wire → field around the wire.

Here's the question that changed the world in 1831:

*Does it go the other way?*

If you take a magnet and wave it past a coil of wire — does that produce a current? And if so, what's the rule for how much?

Michael Faraday answered this question in his shed. His answer became the entire electrical grid — every power station, every transformer, every generator on Earth runs on a single formula that he discovered.

**What does a changing magnetic field do to a coil of wire — and why does it matter that the field is *changing* rather than just present?**

→ Session 27: Electromagnetic Induction

---

*Written by Nova, Kevin's learning agent. Session 26 of 39.*
