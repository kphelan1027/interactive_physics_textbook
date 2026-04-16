---
title: "Power & Energy in Circuits"
session_number: 24
unit: electricity
date: 2026-04-16
concepts:
  - "P = IV (electrical power as rate of energy delivery)"
  - "P = I²R (the squaring law — why cables get hot)"
  - "Energy = Pt, kilowatt-hours, electricity bills"
prerequisite_sessions: [21, 22, 23, 12]
---

# Session 24 — Power & Energy in Circuits
*Track 4 · Unit 3: Electricity · 2026-04-16*

---

## Opening: The Thin Extension Lead

You've been there. You plug a kettle and a laptop into one of those cheap white extension leads, run it for an hour, and when you go to unplug something the cable is noticeably warm — sometimes hot enough to make you pause.

Nothing's wrong with the voltage. It's the same 230V from the wall. The socket doesn't care. But something in that cable is generating heat. And if you overloaded it enough — running a kettle, a toaster, and a heater simultaneously — the heat would start a fire.

The voltage didn't change. The cable's resistance didn't change. So what changed? The **current**. And here's the part that matters: the heat in that cable doesn't scale *with* current. It scales with **current squared.**

Double the current → four times the heat. That's not linear. That's a squared relationship hiding in the physics of circuits — and it's the reason fuse boxes, cable ratings, and your extension lead's wattage sticker all exist.

---

## Answering Session 23's Open Question

Last session ended with this puzzle: *"In parallel, two 3Ω bulbs burn 54W total. In series, the same bulbs burn only 13.5W. Total resistance dropped by a factor of 4 (6Ω → 1.5Ω). Power went up by a factor of 4. There's a squared term hiding somewhere — what is it?"*

There are actually **three versions of the power formula**, all equivalent, all derived from P = IV and V = IR:

| Formula | Use when... |
|---------|-------------|
| **P = IV** | You know both current and voltage |
| **P = I²R** | Voltage isn't fixed — current is the variable |
| **P = V²/R** | Voltage is fixed — resistance is the variable |

In the series vs parallel comparison, the battery voltage (9V) was constant. So the correct formula is **P = V²/R**:

- Series: P = 9² ÷ 6 = **13.5W** ✓  
- Parallel: P = 9² ÷ 1.5 = **54W** ✓  

Cut R by 4 → power multiplies by 4. No squaring here — voltage is fixed, so the relationship is *inversely proportional to R*.

For **cable heating**, however, the relevant formula is **P = I²R** — because the cable's resistance is fixed, and what varies is the current passing through it. That's where the squaring lives.

---

## Concept 1: P = IV — Power as Rate of Energy Delivery

Remember Session 12 (mechanical power): **P = W/t** — power is how fast you do work, measured in watts (W).

Electrical power is identical in meaning:

> **Power (W) = Voltage (V) × Current (A)**  
> **P = IV**

Why does this formula make sense?

- Voltage = energy per unit charge: V = J/C (Session 21)
- Current = charge per second: I = C/s (Session 21)
- Multiply: (J/C) × (C/s) = J/s = **watts**

The charge cancels. What remains is energy per second — exactly what power means.

**Real examples:**

| Device | Voltage (V) | Current (A) | Power (W) |
|--------|-------------|-------------|-----------|
| LED bulb | 230 | 0.04 | ~9 |
| Laptop charger | 20 | 2.25 | 45 |
| Kettle | 230 | 12.2 | 2,800 |
| UK ring circuit (max) | 230 | 32 | 7,360 |

---

## Concept 2: P = I²R — The Squaring Law

Substitute V = IR (Ohm's Law) into P = IV:

> P = IV = I × (IR) = **I²R**

**The squaring effect:**

| Current through a 1Ω resistance | Heat generated |
|----------------------------------|----------------|
| 1A | 1W |
| 2A | 4W |
| 4A | 16W |
| 10A | 100W |
| 20A | 400W |

Double the current → four times the heat. The consequence is brutal at scale.

**This is why extension leads have wattage limits.** A cable drawing 25A (kettle + heater overload) generates I²R heat of roughly 62.5W in a small cable segment. Insulation melts. Fire starts.

**Why fuses are rated in amps, not watts:** The fuse protects the *cable*. It's the cable's I²R heating that matters. A 13A fuse blows when current exceeds 13A — regardless of device voltage or wattage — because that's the current threshold beyond which the cable's thermal limit is exceeded.

---

## Concept 3: Energy = Pt — Kilowatt-Hours

> **Energy (J) = Power (W) × Time (s)**  
> **E = Pt**

For practical purposes, joules are too small. Your energy supplier charges in **kilowatt-hours (kWh)**:

> 1 kWh = 1,000W running for 1 hour = 3,600,000 J

At ~28p/kWh in the UK:

| Device | Power | Daily use | Daily energy | Daily cost |
|--------|-------|-----------|--------------|------------|
| Kettle | 2.8kW | 5 min | 0.23 kWh | 6.4p |
| LED bulb | 9W | 8 hrs | 0.072 kWh | 0.2p |
| Electric heater | 2kW | 4 hrs | 8 kWh | 224p |
| Phone charger | 10W | 2 hrs | 0.02 kWh | 0.06p |

---

## The Three Formulas — When to Use Which

| You know | You want | Use |
|----------|----------|-----|
| I and V | P | **P = IV** |
| I and R | P | **P = I²R** |
| V and R | P | **P = V²/R** |

**Worked example — torch bulb:**
- 4.5V battery, 15Ω bulb
- I = 4.5/15 = 0.3A
- P = IV = 0.3 × 4.5 = **1.35W** ← confirmed by P = I²R = 0.09 × 15 = 1.35W ✓

**Worked example — cable heating:**
- Extension lead: R = 0.08Ω, current = 13A
- P_heat = I²R = 169 × 0.08 = **13.5W** in the cable — equivalent to a small light bulb's worth of heat in 3 metres of wire.

---

## Connections to Previous Sessions

- **Session 12:** P = W/t for mechanical power. Same concept, same units, different energy domain.
- **Session 13:** Energy conservation — all I²R heat in the cable came from the source.
- **Session 22:** P = I²R is Ohm's Law merged with P = IV.
- **Session 23:** Resolves the open question. P = V²/R for parallel circuits. P = I²R for cable heating.

---

## Open Question for Session 25

You've seen how resistors convert electrical energy to heat continuously as long as current flows. But what if you could *store* electrical energy — charge something up and release it later, all at once or slowly?

That's a capacitor. It stores charge on two conducting plates separated by an insulator.

*A capacitor is fully charged to 9V, then connected to a 3Ω resistor. The current doesn't stay constant — it starts high and decays toward zero. Why does it decay, and what does this have to do with the energy stored?*

→ **Session 25: Capacitance**

---

![[2026-04-16-power-energy-circuits.png]]

---

*Nova · Physics Track 4 · Session 24 of 39*
