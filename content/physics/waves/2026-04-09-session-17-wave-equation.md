---
title: "The Wave Equation — v = fλ"
session_number: 17
unit: waves
date: 2026-04-09
concepts:
  - "The wave equation: v = fλ"
  - "Causal direction — medium fixes speed, source fixes frequency, wavelength adjusts"
  - "Behaviour at a boundary — frequency preserved, wavelength changes (preview of refraction)"
prerequisite_sessions: [15, 16]
---

# Session 17: The Wave Equation — v = fλ

**Date:** 2026-04-09
**Session:** 17 of Track 4 (Physics Fundamentals)
**Unit:** Waves (Unit 2)
**Concepts:** The wave equation, causal direction (medium fixes speed, source fixes frequency, wavelength adjusts), crossing a boundary
**Prerequisite sessions:** 15 (What is a Wave), 16 (Wave Properties)

---

## The Setup — Last Session Left You Here

In Session 16 you met four numbers that describe any wave: **amplitude**, **frequency**, **period**, and **wavelength**. At the end I left you a question:

> Concert A is 440 Hz in air (where sound travels at 340 m/s). The same note enters water (where sound travels at 1,480 m/s). Does the wavelength get longer or shorter? And which property changes — the frequency, or the wavelength?

You now have all three pieces of the puzzle: **speed (v)**, **frequency (f)**, **wavelength (λ)**. Today they click together.

---

## Concept 1: The Wave Equation

Here's the real-world entry point. You're standing at a live gig. The bass guitar is playing a 110 Hz note. The flute is playing 880 Hz. Both sounds travel through the same air to reach your ear. Same medium — so same wave speed: 340 m/s.

But you can *feel* the bass in your chest and you have to actively listen for the flute. They clearly have different wavelengths. How different?

Let's think about it without the formula first. Imagine you're standing on the kerb watching London buses drive past. All buses travel at the same speed (let's say 30 km/h — fixed by the road, not the route number). A high-frequency route sends a bus every 2 minutes. A low-frequency route sends a bus every 10 minutes. At the same speed, the high-frequency buses are *closer together* on the road — shorter gap (shorter wavelength). The low-frequency buses are *further apart* — longer gap (longer wavelength).

Speed is fixed. Frequency is set by the timetable (the source). Gap between buses — that's the wavelength — is the result.

Now the formula:

$$\boxed{v = f \lambda}$$

Read it as: **wave speed = frequency × wavelength**

Or rearranged:

$$\lambda = \frac{v}{f}$$

For the bass guitar at 110 Hz in air:

$$\lambda = \frac{340}{110} \approx 3.1 \text{ m}$$

That's over three metres between peaks. No wonder you feel it in your chest — the pressure wave is larger than your entire body.

For the flute at 880 Hz:

$$\lambda = \frac{340}{880} \approx 0.39 \text{ m}$$

About 40 cm. A wavelength smaller than your shoulder width.

---

## Concept 2: Who Controls What — The Causal Direction

This is the most important thing to get right, and it's where the physics is counter-intuitive.

When a wave crosses from one medium to another — from air into water, from air into glass — three things *could* change: v, f, or λ. But only two of them actually change.

**The medium controls the speed.** Sound travels at 340 m/s in air because of how compressible air molecules are. It travels at 1,480 m/s in water because water molecules are much harder to compress and transmit the push faster.

**The source controls the frequency.** The tuning fork vibrating at 440 Hz stamps that frequency onto the wave. When the wave hits the air-water boundary, the pressure peaks arrive at 440 per second — and push into the water at 440 per second. The frequency is *handed across* unchanged.

**Wavelength is the dependent variable.** It adjusts to satisfy v = fλ given the new speed and the unchanged frequency.

### Answering Last Session's Question

Concert A: 440 Hz. Enters water.

$$\lambda_{\text{air}} = \frac{340}{440} = 0.77 \text{ m}$$

$$\lambda_{\text{water}} = \frac{1480}{440} = 3.36 \text{ m}$$

**Wavelength gets longer.** Water is faster, frequency is unchanged, so the crests are spaced further apart.

| | Air | Water |
|---|---|---|
| Speed (v) | 340 m/s | 1,480 m/s |
| Frequency (f) | 440 Hz | 440 Hz (unchanged) |
| Wavelength (λ) | 0.77 m | 3.36 m |

---

## Concept 3: What Happens at a Boundary

When a wave enters a new medium *at an angle*, different parts of the wavefront cross the boundary at different times. The part that crosses first immediately changes speed. The rest is still at the old speed. The wavefront *bends* — pivoting toward the slower-speed side. That bending is **refraction** (Session 20).

When light enters glass from air, it slows down. Frequency is preserved. Wavelength shortens. Different colours (different frequencies) slow down by different amounts — so they bend at different angles. That's why a glass prism separates white light into a rainbow.

---

## The Numbers Table

| Wave | Frequency | Medium | Speed | Wavelength |
|------|-----------|--------|-------|------------|
| Bass guitar (low E) | 41 Hz | Air | 340 m/s | **8.3 m** |
| Concert A | 440 Hz | Air | 340 m/s | **0.77 m** |
| Concert A | 440 Hz | Water | 1,480 m/s | **3.36 m** |
| Wi-Fi (2.4 GHz) | 2.4 × 10⁹ Hz | Air | 3×10⁸ m/s | **12.5 cm** |
| Green light | 5.5 × 10¹⁴ Hz | Vacuum | 3×10⁸ m/s | **550 nm** |

---

## Visual

![[2026-04-09-09-30-58-wave-equation.png]]

*Three-panel diagram: same 440 Hz wave in air (λ = 0.77 m) crossing into water (λ = 3.36 m), plus the v = fλ triangle — medium sets v, source sets f, λ is the result.*

---

## Three-Sentence Summary

1. **v = fλ** — a wave's speed is frequency times wavelength.
2. **Medium fixes speed, source fixes frequency, wavelength adjusts** — this causal order is the key.
3. **At a boundary, frequency is preserved, speed changes, wavelength adjusts** — and if the wave enters at an angle, it bends (refraction, Session 20).

---

## Open Question — Preview of Session 18

The wave equation says sound at 41 Hz and sound at 20,000 Hz both travel at **exactly 340 m/s** through air. A dog can hear 20,000 Hz. You can't. **Is the limit in the wave, or in the ear?**

→ Session 18: Sound Waves

---

*Nova — Track 4, Session 17 | 2026-04-09*
