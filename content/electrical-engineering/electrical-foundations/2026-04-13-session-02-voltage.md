---
title: "Voltage — The Pressure That Drives Current"
order: 2
chapter: electrical-foundations
track: electrical-engineering
date: 2026-04-13
concepts:
  - Potential difference — electrical "height," measured in Volts
  - The Volt — energy per unit charge (V = W/Q)
  - EMF — what a battery actually does, and why it can't last forever
  - Why batteries have two terminals, and what "flat" really means
prerequisite_sessions:
  - what-is-electricity
---

# Session 2: Voltage — The Pressure That Drives Current

**Date:** 2026-04-13
**Track:** 8 — Electrical Engineering Foundations (Session 2)
**Concepts:** Potential difference, the Volt, EMF, battery terminals
**Prerequisites:** Session 1 — What Is Electricity? (charge, current, free electrons)

---

## The Hook: The Open Question from Session 1

Last session ended with this:

> A battery has two terminals. Electrons flow from one to the other through a wire. But what creates the charge imbalance in the first place — and why does the flow eventually stop when the battery goes flat?

You already know the *what*: electrons drift from negative to positive through the wire. The question is the *why*. What is the force that gets them moving? And how do we measure it?

The answer is **voltage**. It is the single most important quantity in electrical engineering — more fundamental than current, more useful than resistance. Everything an electrician does is ultimately about controlling voltage.

---

## Concept 1: Potential Difference — Electrical "Height"

Forget electrons for a moment. Think about water.

Water in a tank at the top of a hill has *gravitational potential energy* relative to the valley below. When you open a pipe, the water flows downhill. It flows because of the *height difference* — not because of any force pushing from behind.

Voltage works the same way, but for electric charge.

> **Potential difference (voltage) is the difference in electrical "height" between two points. Charge flows from high potential to low — just as water flows downhill.**

The formal definition:

> **Voltage (V) = Work done (W) per unit charge (Q)**

$$V = \frac{W}{Q}$$

The unit is the **Volt (V)**, named after Alessandro Volta.

**1 Volt means 1 Joule of energy is transferred per Coulomb of charge.**

So a 9V battery means: for every Coulomb of charge that passes through the circuit, 9 Joules of energy are transferred from the battery to the circuit.

**Practical reference table:**

| Source | Voltage |
|--------|---------|
| AA battery | 1.5 V |
| Car battery | 12 V |
| UK mains socket | 230 V |
| UK grid transmission | 400,000 V |
| Lightning bolt | ~300,000,000 V (briefly) |
| Static shock (dry day) | ~3,000 V (tiny current — harmless) |

The reason mains kills and static doesn't isn't voltage alone — it's current. But voltage is what drives the current. More on that in Session 3.

---

## Concept 2: EMF — What a Battery Actually Does

A battery doesn't *store* electrons. It stores **chemical energy** and uses it to separate charges.

Here's the mechanism:

Inside a battery, a chemical reaction forces electrons to accumulate at the **negative terminal** (creating a surplus of negative charge) and strips electrons from the **positive terminal** (creating a deficit — a surplus of positive charge). This separation of charge creates a potential difference between the two terminals. That potential difference is the **electromotive force** — or **EMF** (symbol: ε, pronounced "epsilon").

The name "electromotive force" is a historical accident — EMF is measured in Volts, not Newtons. It is not a force in the physics sense. It is an *energy source per unit charge*. Think of it as the battery's ability to do work on each Coulomb that passes through it.

> **EMF is the potential difference across the battery terminals when no current is flowing** — the open-circuit voltage.

When current flows, the battery's internal resistance (we'll come to resistance in Session 3) causes a small voltage drop inside the battery itself. So the *terminal voltage* (what you measure at the terminals under load) is slightly less than the EMF.

**The key point:** The battery maintains the potential difference. It's the chemical reaction that keeps pumping electrons to the negative terminal. As long as the reaction continues, the hill stays steep. When the chemical reactants run out — the hill flattens. Terminal voltage drops. Battery flat.

**The analogy:** A battery is a water pump at the bottom of a hill. It takes water from the low point (positive terminal, electron deficit), pushes it up to the high point (negative terminal, electron surplus), and the water then flows downhill through the circuit doing work as it goes. The pump doesn't move faster than gravity — it just maintains the height difference that makes gravity useful. When the fuel runs out, the pump stops, the levels equalise, and the flow stops.

---

## Concept 3: Two Terminals and the Death of a Battery

Why does a battery have exactly two terminals — not one, not three?

Because potential *difference* requires two reference points. A single point has no meaningful voltage — voltage is always a comparison. "This point is at 9V" means nothing unless you specify: 9V relative to *what*?

In circuit design, we define one reference point as **0V**, called **ground** or **earth**. Everything else is measured relative to that. The negative terminal of a battery is typically connected to ground.

So when we say "the positive terminal is at 12V," we mean: it is 12 Joules per Coulomb *higher* than the negative terminal, which is our 0V reference.

**What happens when a battery runs flat:**

The chemical reaction in a primary (non-rechargeable) battery is irreversible. As the reactants are consumed:
1. The ability to separate charges weakens
2. The potential difference between terminals shrinks
3. Current falls
4. At some point, the terminal voltage drops below the threshold the device needs
5. The device stops working — even though some charge may still remain

In a rechargeable battery (secondary cell), forcing current *backward* through the battery reverses the chemical reaction — restoring the charge separation. That's all "charging" is: using external electrical energy to re-establish the potential difference.

---

## The Picture so Far

```
                    Chemical energy
                         ↓
        [− terminal]     EMF     [+ terminal]
             |          (ε V)         |
        excess e⁻                 deficit e⁻
             |                        |
             +--------circuit---------+
                    ↑
         electrons drift this way (conventional
         current flows in opposite direction)

Voltage = the "height" difference driving this flow
```

Session 1 gave you the *what* (electrons drift). This session gives you the *why* (there's a potential difference). Session 3 gives you the *how much* (resistance determines how many electrons flow for a given voltage).

---

## Worked Example

**A 12V car battery delivers 5 Coulombs of charge to the starter motor. How much energy is transferred?**

Using W = Q × V:

$$W = 5 \text{ C} \times 12 \text{ V} = 60 \text{ J}$$

60 Joules of energy is transferred from the battery's chemical store to the starter motor.

Now apply this to a AA battery (1.5V) supplying a torch at 0.5A for one minute:

$$Q = I \times t = 0.5 \text{ A} \times 60 \text{ s} = 30 \text{ C}$$

$$W = Q \times V = 30 \text{ C} \times 1.5 \text{ V} = 45 \text{ J}$$

45 Joules delivered to the torch in 60 seconds. That's a power of 0.75W — which is exactly P = IV = 0.5A × 1.5V. (Power will be formally covered in Session 4, but the maths is already there.)

---

## Visual

![[2026-04-13-elec-session-02-voltage.png]]

*Diagram: Left side shows a battery with chemical reaction arrows forcing electrons (−) to accumulate at the negative terminal and creating a deficit at the positive terminal. Centre shows the EMF "height" as a vertical gradient from low (0V, negative terminal) to high (+12V, positive terminal) — styled like a water tank at elevation. Right side shows electrons flowing through an external circuit from − to +, with conventional current arrow pointing the opposite direction. Labels: EMF (ε), potential difference (V), Volts, Work = QV. Colour scheme: amber/gold gradients on dark navy background.*

---

## Summary: Three Ideas

1. **Voltage is electrical potential difference** — the "height" difference that drives charge to flow, just as gravity drives water downhill. Measured in Volts: 1V = 1 Joule per Coulomb. Voltage is always a comparison between two points.
2. **EMF is what a battery does** — chemical energy separates charges, creating and maintaining a potential difference at the terminals. EMF is not a force; it's energy per unit charge. When the chemistry runs out, the EMF falls to zero.
3. **Two terminals, not one** — because voltage is a difference. One terminal is the reference (0V, negative/ground); the other is higher by the battery's EMF. Charging a battery restores the chemical separation. Running it flat depletes it.

---

## Open Question: Bridge to Session 3

> You now have voltage: the pressure. You have current: the flow. But different materials let different amounts of current through for the same voltage. A thick copper wire and a thin nichrome wire look similar — but connect 12V across each and very different currents flow.
>
> What property of a conductor determines how much current a given voltage can push through it? And why do some materials resist the flow far more than others?
>
> That's **resistance** — and the relationship between voltage, current, and resistance is one of the most important equations in all of engineering.

---

*Session delivered by Nova, 2026-04-13*
*Next: Session 3 — Resistance and Ohm's Law*
