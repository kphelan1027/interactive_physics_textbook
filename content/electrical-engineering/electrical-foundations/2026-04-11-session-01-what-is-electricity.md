---
title: "What Is Electricity?"
order: 1
chapter: electrical-foundations
track: electrical-engineering
date: 2026-04-11
concepts:
  - The atom — protons, neutrons, electrons, and why electrons are the key player
  - Electric charge — what it is, why opposites attract, and the unit (Coulomb)
  - Electric current — charge in motion, measured in Amperes
prerequisite_sessions: []
---

# Session 1: What Is Electricity?

**Date:** 2026-04-11
**Track:** 8 — Electrical Engineering Foundations (Session 1)
**Concepts:** The atom and the electron, electric charge, electric current
**Prerequisites:** None — this is ground zero

---

## The Hook: The Light Switch

You press a switch. A lamp 10 metres of wire away lights up — almost instantaneously. Something travels from the switch to the bulb. But what? It can't be the wire itself. The wire doesn't move. Something *inside* the wire moves.

The answer is electrons. But to understand electrons, you need to understand the atom. And to understand why this matters to an electrician, you need to understand what *charge* actually is and why moving charge generates every electrical effect we've ever harnessed.

That's what this session is about. Not theory for the sake of theory. First principles — because every practical skill you'll learn as an electrician is downstream of these three ideas.

---

## Concept 1: The Atom — Why Electrons Are Special

Everything is made of atoms. An atom has three components:

- **Protons** — positively charged, sit in the nucleus
- **Neutrons** — no charge, also in the nucleus
- **Electrons** — negatively charged, orbit the nucleus in shells

The protons and neutrons are locked into the nucleus. They don't go anywhere. But the electrons — especially the ones in the outermost shell, called *valence electrons* — are loosely bound. In a metal like copper, these outermost electrons are so loosely held they drift freely between atoms. They don't belong to any single atom. They're a sea of mobile negative charge.

This is why copper conducts electricity and wood doesn't. In wood, the electrons are tightly bound to their atoms — they can't move freely. In copper, they already are moving, randomly, in all directions.

**The electrician's insight:** You're not creating electrons when you wire a circuit. You're organising the motion of electrons that are already there.

---

## Concept 2: Electric Charge — The Fundamental Property

Charge is a fundamental property of matter, like mass. We can't explain *why* some particles have it — we can only describe what it does.

Here's what charge does:

> **Like charges repel. Opposite charges attract.**

Protons (positive) repel each other. Electrons (negative) repel each other. A proton and an electron attract each other. This force is called the **electrostatic force** (or Coulomb force), and it's extraordinarily strong — far stronger than gravity at short distances.

The unit of charge is the **Coulomb (C)**.

One electron has a charge of approximately −1.6 × 10⁻¹⁹ Coulombs. That's a tiny number. To have one Coulomb of negative charge, you'd need roughly 6.24 × 10¹⁸ electrons — that's 6.24 quintillion electrons.

**What this means practically:** When an imbalance of charge builds up — more electrons somewhere than somewhere else — there's a force pushing those electrons toward the deficit. That force is *voltage* (which we'll cover in Session 2). When those electrons start moving to equalise the imbalance, that movement is *current* — which is what we cover next.

---

## Concept 3: Electric Current — Charge in Motion

**Current** is simply charge moving through a conductor. The formal definition:

> **Current (I) = Charge (Q) flowing past a point per unit time (t)**

$$I = \frac{Q}{t}$$

The unit of current is the **Ampere (A)**, named after André-Marie Ampère.

One Ampere means one Coulomb of charge is flowing past a fixed point every second. In electron terms: 6.24 × 10¹⁸ electrons per second streaming past that point.

A typical phone charger draws about 1–2A. A kettle draws about 13A. A large industrial motor might draw hundreds of Amps.

**One important subtlety:** Conventional current direction and electron flow direction are *opposite*.

When we say "current flows from positive to negative," we mean *conventional current* — a historical convention from before electrons were discovered (Benjamin Franklin's era). Electrons actually flow from negative to positive — from the region of excess electrons toward the deficit. Electricians mostly work with conventional current and don't worry about this distinction in practice. But it's worth knowing it exists.

---

## The Picture so Far

Atoms have electrons. Metals have free electrons — loosely held and mobile. When there's a charge imbalance (a voltage, which we'll get to), those electrons experience a force. They start drifting in an organised direction. That drift is current. The current is what does useful work — it's what heats your kettle element, spins your motor, and lights your bulb.

```
                   Voltage (Session 2)
                        ↓
[−ve terminal] → free electrons drift → [+ve terminal]
         ↑
    This is Current (Session 1 — here)
```

Everything in practical electrical engineering — from fuse ratings to cable sizing to understanding why a circuit trips — comes back to controlling and measuring this movement of charge.

---

## Worked Example

**A wire carries a current of 3A. How much charge passes a fixed point in 10 seconds?**

Using Q = I × t:

$$Q = 3 \text{ A} \times 10 \text{ s} = 30 \text{ C}$$

30 Coulombs of charge — or approximately 1.87 × 10²⁰ electrons — have passed that point.

Now ask: how many electrons is that per second? 3 Coulombs per second = 3 × 6.24 × 10¹⁸ ≈ **1.87 × 10¹⁹ electrons every second**. Through a wire no wider than a pencil. That's why even a small current, properly harnessed, can do extraordinary work.

---

## Visual

![[2026-04-11-elec-session-01-what-is-electricity.png]]

*The atom: nucleus (protons + neutrons) at centre, electron shells orbiting. Outer valence electrons shown breaking free in a metal lattice. Arrow showing electrons drifting left (conventional current flowing right). Labels: proton (+), electron (−), Coulombs, Amperes.*

---

## Summary: Three Ideas

1. **The atom is the starting point.** Protons and neutrons are locked in the nucleus. Electrons — especially valence electrons in metals — are mobile. Copper conducts because its electrons are already free.
2. **Charge is the property that creates electrical force.** Opposites attract, likes repel. One Coulomb ≈ 6.24 × 10¹⁸ electrons. Imbalances in charge create the pressure that drives current.
3. **Current is charge in motion.** I = Q/t, measured in Amperes. One Amp = one Coulomb per second. This moving charge is what does all electrical work.

---

## Open Question: Bridge to Session 2

> You now know electrons move when there's a charge imbalance. But what *creates* that imbalance in the first place? And how do we measure the "pressure" that pushes electrons along a wire?
>
> That's voltage — the next session's subject. Before then: if a battery has two terminals and electrons flow from one to the other through a wire, what happens at each terminal, and why does the flow eventually stop if nothing replenishes the charge difference?

---

*Session delivered by Nova, 2026-04-11*
*Next: Session 2 — Voltage: The Pressure That Drives Current*
