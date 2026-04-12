---
title: "Session 20 — Reflection, Refraction & Snell's Law"
session_number: 20
unit: waves
date: 2026-04-12
concepts:
  - Law of reflection (θ_i = θ_r)
  - Refractive index (n = c/v)
  - Snell's Law (n₁ sin θ₁ = n₂ sin θ₂)
  - Total internal reflection and the critical angle
prerequisite_sessions: [15, 16, 17, 19]
track: "Track 4 — Physics Fundamentals"
---

# Session 20 — Reflection, Refraction & Snell's Law

**Date:** 2026-04-12 | **Unit:** Waves | **Session:** 20 of 39

![[2026-04-12-09-32-40-snells-law.jpg]]

---

## Answering Last Session's Open Question First

Session 19 ended with two questions. When light enters glass and slows from c to ~0.67c:

**What happens to wavelength?**
From Session 17: v = fλ. At any boundary, frequency is fixed — the source stamps it in, and each arriving wavecrest forces exactly one new wavecrest on the other side. So if v drops, λ must drop proportionally.

Green light in air: λ = 550 nm, v = c = 3.00 × 10⁸ m/s.
Same green light in glass (n = 1.5, v = 0.67c = 2.00 × 10⁸ m/s):
λ = v/f = 550 × (2.00/3.00) ≈ **367 nm**.

The wavelength shortens inside the glass. Frequency — the thing your eye detects as colour — is unchanged. That's why glass doesn't change the colour of light, only its path.

**Why does direction change?**
That's refraction — and it's what this session is about.

---

## The Hook

A straw in a glass of water looks bent at the surface even though it's perfectly straight. A swimming pool looks shallower than it is. A diamond throws light back as a burst of coloured fire. These are all the same physics.

---

## Concept 1: Reflection

**The Law of Reflection:** The angle at which light arrives equals the angle at which it leaves. Both are measured from the **normal** — an imaginary line perpendicular to the surface.

> θ_incidence = θ_reflection

**Specular vs diffuse reflection.** A mirror is *specular* — smooth surface, parallel rays all reflect coherently, crisp image. A white wall is *diffuse* — microscopically rough, rays scatter in all directions, no image. Both surfaces obey the same law at each microscopic point.

**Analogy:** Specular reflection = a polished slide deck (tight, directed, legible). Diffuse reflection = the same ideas scrawled on a whiteboard (same information, scattered everywhere, no clean image).

---

## Concept 2: Refraction — Why Light Bends

**The physical picture.** When a wavefront hits a boundary at an angle, the side that arrives first slows down first. The rest is still moving at full speed. The wavefront pivots — the wave continues into the new medium, but now at a different angle.

**The soldiers analogy.** A line of soldiers marching in formation hits a muddy field at an angle. The left flank slows first in the mud; the right flank stays on firm ground. The whole line swings — direction of march changes — through pure speed differential, no force applied.

**The refractive index (n):**

$$n = \frac{c}{v}$$

| Material | n | Speed of light |
|---|---|---|
| Vacuum | 1.000 | 3.00 × 10⁸ m/s |
| Air | 1.0003 | ≈ c |
| Water | 1.33 | 2.26 × 10⁸ m/s |
| Glass (typical) | 1.50 | 2.00 × 10⁸ m/s |
| Diamond | 2.42 | 1.24 × 10⁸ m/s |

Higher n = slower light = more bending potential at a boundary.

**Why the straw looks bent:** Light from the submerged straw travels from water (n = 1.33) into air (n = 1.00) and bends away from the normal. Your brain extends the ray back in a straight line — which disagrees with where the straw physically is. Apparent displacement. Same effect makes pools look shallower than they are.

---

## Concept 3: Snell's Law and Total Internal Reflection

$$n_1 \sin \theta_1 = n_2 \sin \theta_2$$

- n₁, n₂ = refractive indices (material constants, fixed)
- θ₁ = angle of incidence (set by geometry)
- θ₂ = angle of refraction (predicted by Snell's Law)

**Key directions:**
- Fast → slow (n increases): θ₂ < θ₁ — bends *toward* normal
- Slow → fast (n decreases): θ₂ > θ₁ — bends *away* from normal

**Worked example:** Water (n = 1.33) → Glass (n = 1.50), θ₁ = 40°:

$$1.33 \times \sin 40° = 1.50 \times \sin \theta_2$$
$$\sin \theta_2 = \frac{1.33 \times 0.643}{1.50} = 0.569 \quad \Rightarrow \quad \theta_2 = 34.7°$$

Ray bends toward normal — as expected entering a slower medium.

---

### Total Internal Reflection (TIR)

Going from glass to air and increasing θ₁: at some point, θ₂ would need to be 90° (ray along the surface). Beyond that — **no refracted ray at all**. 100% of the light reflects back inside.

**Critical angle:**
$$\sin \theta_c = \frac{n_2}{n_1} \quad (n_1 > n_2)$$

Glass → air: sin θ_c = 1.0/1.5 = 0.667 → **θ_c ≈ 41.8°**

**Applications:**

1. **Optical fibres** — Glass core (n ≈ 1.50) surrounded by cladding (n ≈ 1.45). Light bounces along the fibre by TIR with ~0.2 dB/km loss. The internet runs on this.

2. **Diamond sparkle** — n = 2.42 → θ_c ≈ 24.4°. Well-cut diamonds trap almost all incoming light inside through TIR, releasing it in a concentrated burst through the top. Poorly cut diamonds let light leak out the bottom.

---

## Connecting to Previous Sessions

| Session | Connection |
|---|---|
| **Session 17 (v = fλ)** | Why λ shortens in glass: v drops, f preserved, λ = v/f must shrink |
| **Session 19 (EM Spectrum)** | n varies slightly with frequency: red slows less than violet in glass → prisms/rainbows (dispersion) |
| **Session 15 (Waves)** | Boundary behaviour is the complement of wave propagation in a medium |
| **Sessions 1–3 (Newton)** | No force bends the ray — refraction follows from geometry, not F = ma |

---

## Session Summary

| Concept | Core idea | Equation |
|---|---|---|
| Reflection | Angle in = angle out | θ_i = θ_r |
| Refractive index | How much a medium slows light | n = c/v |
| Snell's Law | Speed change bends the ray | n₁ sin θ₁ = n₂ sin θ₂ |
| Total internal reflection | Beyond critical angle: 100% bounce-back | sin θ_c = n₂/n₁ |

---

## Open Question → Session 21

Optical fibres carry data at ~2×10⁸ m/s through glass. Copper wires carry signals via electrons. But electrons in copper drift at about **0.1 mm per second**. A kettle 2 metres from the socket — at that drift speed, it would take electrons over 5 hours to reach the element. Yet the kettle starts heating almost instantly. How?

*Next session: Session 21 — Charge, Current & Voltage (Unit 3: Electricity opens)*
