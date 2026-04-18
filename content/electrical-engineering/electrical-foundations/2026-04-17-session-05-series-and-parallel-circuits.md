---
title: "Series and Parallel Circuits"
order: 5
chapter: electrical-foundations
track: electrical-engineering
date: 2026-04-17
concepts:
  - Series circuits — current constant, voltages divide, resistances add
  - Parallel circuits — voltage constant, currents divide, equivalent resistance always less than any branch
  - Solving mixed circuits — breaking a real circuit into series and parallel sections
prerequisite_sessions:
  - session-01-what-is-electricity
  - session-02-voltage
  - session-03-resistance-ohms-law
  - session-04-power-and-energy
---

# Session 5: Series and Parallel Circuits

**Date:** 2026-04-17
**Track:** 8 — Electrical Engineering Foundations (Session 5)
**Concepts:** Series circuits, parallel circuits, solving mixed circuits
**Prerequisites:** Sessions 1–4 (charge/current, voltage, Ohm's Law, power)

---

## The Hook: Will the MCB Trip?

You're planning the kitchen circuit. There's a socket already running a fridge (1.5A) and a microwave (5A). Someone wants to add a kettle to the same circuit (10A). The MCB is rated at 16A.

Will it trip?

The answer depends entirely on whether those loads are in **series** or **parallel** — and in a house ring main, they're parallel. That means you add the currents. 1.5 + 5 + 10 = 16.5A. Yes, it trips.

You could derive the same answer from first principles in under 30 seconds once the circuit topology clicks. That's what this session builds.

---

## Concept 1: Series Circuits — Current Is the Thread

In a series circuit, all components are connected **end to end** in a single path. There is only one route for current to take.

The fundamental rule:

> **In a series circuit, the same current flows through every component.**

Think about why: electrons have no choice of path. Every electron that leaves the battery's negative terminal must pass through R₁, then R₂, then R₃, before returning to the positive terminal. If 3 Coulombs per second enter R₁, then 3 Coulombs per second must exit R₃. No charge is created or destroyed.

From this single rule, everything else follows:

**Voltage divides in proportion to resistance:**

Each resistor takes a share of the total voltage proportional to its resistance. Using Ohm's Law (V = IR) with the same I flowing through each:

$$V_1 = IR_1, \quad V_2 = IR_2, \quad V_3 = IR_3$$

$$V_{total} = V_1 + V_2 + V_3 = I(R_1 + R_2 + R_3)$$

**Total resistance adds:**

$$R_{total} = R_1 + R_2 + R_3 + \ldots$$

Adding resistors in series always increases the total resistance. Each one is another obstacle the current must fight through.

**Practical consequence: one break kills everything.** Old Christmas tree lights were wired in series. One blown bulb opened the single path. No current. All lights died. This is also why a fuse in series with a circuit protects everything downstream — when it blows, it breaks the one path current can take.

---

### Worked Example — Series Circuit

**12V battery, three resistors in series: R₁ = 6Ω, R₂ = 4Ω, R₃ = 2Ω.**

*Step 1: Total resistance*

$$R_{total} = 6 + 4 + 2 = 12 \, \Omega$$

*Step 2: Current (same everywhere)*

$$I = \frac{V}{R_{total}} = \frac{12}{12} = 1 \, \text{A}$$

*Step 3: Voltage across each resistor*

$$V_1 = 1 \times 6 = 6 \, \text{V}$$
$$V_2 = 1 \times 4 = 4 \, \text{V}$$
$$V_3 = 1 \times 2 = 2 \, \text{V}$$

*Check:* 6 + 4 + 2 = 12V ✓ — all the battery's voltage is "used up" across the resistors.

---

## Concept 2: Parallel Circuits — Voltage Is the Thread

In a parallel circuit, all components are connected **between the same two nodes** — they each have their own direct connection to both battery terminals.

The fundamental rule:

> **In a parallel circuit, the same voltage appears across every branch.**

Think about why: each component is directly wired from the positive terminal to the negative terminal. The voltage between those two terminals is the same no matter which branch you're measuring. You can't have different voltages across components sharing the same two end-points.

From this, everything else follows:

**Current divides according to resistance:**

Each branch draws current independently according to Ohm's Law:

$$I_1 = \frac{V}{R_1}, \quad I_2 = \frac{V}{R_2}, \quad I_3 = \frac{V}{R_3}$$

The total current drawn from the battery is the sum of all branch currents:

$$I_{total} = I_1 + I_2 + I_3$$

**Equivalent resistance decreases when you add branches:**

Since each new branch provides another path for current, the total resistance must fall:

$$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$$

*R_eq is always less than the smallest individual branch resistance.* Adding more appliances to a parallel circuit always reduces the equivalent resistance — and therefore increases the total current drawn from the source. This is why more parallel loads can trip a breaker.

**Practical consequence: independent operation.** Every socket in your house is wired in parallel with every other socket. Each appliance sees the full 230V regardless of what else is plugged in. Unplug one appliance — the others keep running. This is the only sensible way to wire a building.

---

### Worked Example — Parallel Circuit

**12V battery, three resistors in parallel: R₁ = 6Ω, R₂ = 4Ω, R₃ = 2Ω.**

*Step 1: Voltage across each branch*

$$V_1 = V_2 = V_3 = 12 \, \text{V}$$

*Step 2: Current through each branch*

$$I_1 = \frac{12}{6} = 2 \, \text{A}$$
$$I_2 = \frac{12}{4} = 3 \, \text{A}$$
$$I_3 = \frac{12}{2} = 6 \, \text{A}$$

*Step 3: Total current*

$$I_{total} = 2 + 3 + 6 = 11 \, \text{A}$$

*Step 4: Equivalent resistance check*

$$\frac{1}{R_{eq}} = \frac{1}{6} + \frac{1}{4} + \frac{1}{2} = \frac{2}{12} + \frac{3}{12} + \frac{6}{12} = \frac{11}{12}$$

$$R_{eq} = \frac{12}{11} \approx 1.09 \, \Omega$$

*Verify:* $I = V/R_{eq} = 12 / 1.09 = 11 \, \text{A}$ ✓

Note: the equivalent resistance (1.09Ω) is lower than the smallest branch (R₃ = 2Ω). It always is.

---

## Concept 3: Mixed Circuits — How Real Circuits Work

Real circuits are rarely purely series or purely parallel. They combine both. The method is always the same:

> **Identify series and parallel sections. Simplify one section at a time. Reduce to a single equivalent resistance. Then work backwards.**

Consider this arrangement: R₂ and R₃ in parallel, with that combination in series with R₁.

**Setup:** 12V battery, R₁ = 3Ω in series with a parallel combination of R₂ = 6Ω and R₃ = 6Ω.

*Step 1: Simplify the parallel section first.*

$$\frac{1}{R_{23}} = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} \quad \Rightarrow \quad R_{23} = 3 \, \Omega$$

*Step 2: Now the circuit is just two series resistors.*

$$R_{total} = R_1 + R_{23} = 3 + 3 = 6 \, \Omega$$

*Step 3: Find total current.*

$$I_{total} = \frac{12}{6} = 2 \, \text{A}$$

*Step 4: Voltage across each section.*

$$V_{R1} = I_{total} \times R_1 = 2 \times 3 = 6 \, \text{V}$$

$$V_{R23} = I_{total} \times R_{23} = 2 \times 3 = 6 \, \text{V} \quad \text{(also = 12 − 6)}$$

*Step 5: Current through each parallel branch.*

$$I_{R2} = \frac{V_{R23}}{R_2} = \frac{6}{6} = 1 \, \text{A}$$
$$I_{R3} = \frac{V_{R23}}{R_3} = \frac{6}{6} = 1 \, \text{A}$$

*Check:* 1 + 1 = 2A total ✓. 6V + 6V = 12V ✓.

**The method:** always reduce the most deeply nested section first. Replace it with its equivalent resistance. Repeat until you have a simple series or parallel circuit. Then expand back out.

---

## Back to the Hook: The Kitchen Circuit

Fridge (1.5A), microwave (5A), and kettle (10A) — all wired in parallel across the 230V ring main.

Each appliance has its own branch. Each branch current is determined by that appliance's internal resistance. The total current is:

$$I_{total} = 1.5 + 5 + 10 = 16.5 \, \text{A}$$

The 16A MCB sees 16.5A. It trips. That's not a malfunction — it's protection working exactly as designed. The MCB is in series with the entire circuit. When it opens, it breaks the single series path feeding all the parallel branches.

**The 20A circuit answer:** switch to a 20A MCB with 2.5mm² cable rated for 20A. Now the same parallel loads sit safely under the limit.

---

## Visual

![[2026-04-17-elec-session-05-series-parallel-circuits.png]]

*Two circuit diagrams side by side. LEFT: Series — R₁, R₂, R₃ in a single loop with 12V battery; current arrows showing same 1A everywhere; voltage drops 6V, 4V, 2V labelled. RIGHT: Parallel — three branches each connected directly across 12V; branch currents 2A, 3A, 6A shown; total 11A from battery. Summary table: "Series: I same, V divides" / "Parallel: V same, I divides". Amber/gold wiring, dark navy background.*

---

## Summary: Three Ideas

1. **Series circuits: current is the thread.** One path — same current everywhere. Voltages add (and divide proportionally). Resistances add. One break kills the circuit. Fuses exploit this.
2. **Parallel circuits: voltage is the thread.** Multiple paths — same voltage across every branch. Currents divide and add. Equivalent resistance falls with every new branch. House wiring is parallel so each appliance sees full voltage and operates independently.
3. **Mixed circuits: reduce and expand.** Identify the nested structure. Simplify the innermost parallel section to its equivalent resistance. Work outward. Then reverse the process to find individual voltages and currents. This is the universal method.

---

## Open Question: Bridge to Session 6

> You've solved circuits by simplifying parallel sections first, then working outward. But what if a circuit has loops that aren't neatly nested — where current from one branch feeds back into another, or where two batteries are in the same circuit pushing in different directions?
>
> You can't simplify your way out of those. You need a different tool — a set of rules that apply to *any* circuit, however complex. Those rules are Kirchhoff's Laws. Before we get there: if you have two nodes connected by three different paths, what must be true about the currents flowing into any one of those nodes?

---

*Session delivered by Nova, 2026-04-17*
*Next: Session 6 — Kirchhoff's Laws: KCL, KVL, and solving circuits that can't be simplified*
