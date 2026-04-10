---
title: "Sound Waves"
session_number: 18
unit: "waves"
date: "2026-04-10"
concepts:
  - Longitudinal pressure waves (compressions and rarefactions)
  - Human hearing range (20 Hz–20 kHz) and biological bandwidth limits
  - Speed of sound in different media (stiffness, density, temperature dependence)
prerequisite_sessions: [15, 16, 17]
---

# Session 18 — Sound Waves
**Date:** 2026-04-10
**Track:** Physics Fundamentals (Track 4)
**Unit:** Unit 2 — Waves
**Session:** 18 of 39
**Concepts:** Longitudinal pressure waves, human hearing range, speed of sound in media

---

## The Hook

You're standing at a live gig. The kick drum hits and you feel it in your sternum before your brain registers it as sound. The bass guitar sits somewhere between "heard" and "felt." The flute is thin and high and entirely in your ear.

Then someone points out: there's ultrasound in the room too. The PA system's crossover network generates frequencies above 20,000 Hz. A dog next to you hears them perfectly. You don't hear them at all — but they're hitting your eardrum at exactly the same 340 m/s as everything else.

The question from last session was: is the limit in the wave, or in the ear?

**The answer is the ear.** The wave is doing its job. Your ear stops listening.

---

## Connecting to What You Know

In Session 15, we established that sound is a **longitudinal wave** — the medium oscillates *parallel* to the direction of travel (compressions and rarefactions, not up-and-down). In Session 16, we gave that wave four properties: amplitude, frequency, period, wavelength. In Session 17, we unified them with v = fλ, and you calculated that Concert A (440 Hz) in air has a wavelength of 0.77 m.

Today we go deeper into sound specifically: what physically happens at your eardrum, why you can't hear a dog whistle, and why sound travels through steel 15 times faster than through air.

---

## Concept 1: Sound is Pressure — Your Ear is a Pressure Detector

When a speaker cone pushes forward, it compresses the air molecules immediately in front of it. Those molecules push their neighbours. Those molecules push theirs. A region of high pressure travels outward from the speaker.

Then the speaker cone pulls back. It creates a low-pressure region — a **rarefaction** — which travels out behind the compression.

What travels through the room is an alternating pattern of **compressions** (molecules pushed closer together, pressure above atmospheric) and **rarefactions** (molecules pulled further apart, pressure below atmospheric). This is the longitudinal wave you saw with a Slinky in Session 15.

Your eardrum is a thin membrane. When the high-pressure zone arrives, the eardrum flexes inward. When the low-pressure zone arrives, it flexes outward. It's vibrating at exactly the frequency of the source.

Three tiny bones — the ossicles — amplify that vibration and transmit it to the cochlea, a fluid-filled spiral. Inside the cochlea, tiny hair cells at different positions respond to different frequencies. When a hair cell vibrates, it fires a nerve signal to your brain. Your brain interprets the pattern of firing as sound.

That's hearing. It's entirely mechanical at the ear end — pressure in, nerve signal out.

**The maths link:**
- Frequency of the pressure wave = **pitch** (high f = high pitch)
- Amplitude of the pressure variation = **loudness** (bigger pressure swing = more energy = louder)
- Recall from Session 16: energy ∝ A² — doubling the amplitude doesn't double the loudness, it quadruples the energy

---

## Concept 2: The Human Hearing Range — The Ear Has a Bandwidth

Human ears respond to frequencies from roughly **20 Hz to 20,000 Hz (20 kHz)**. This is your "product spec" for hearing. Outside that range, the wave physically arrives at your eardrum and nothing happens — not because the wave failed, but because your ear's mechanical system can't resonate at those frequencies.

Think of a speaker: every speaker has a frequency response curve — the range it can reproduce faithfully. Your ear is a biological speaker in reverse. The cochlear hair cells have physical dimensions tuned to specific frequencies; the ones at the base of the cochlea respond to high frequencies, the ones at the apex to low frequencies. No hair cells for 25 kHz = no perception.

**Below 20 Hz: Infrasound**
- Earthquakes, volcanic activity, large machinery, elephant communication (they produce 14–35 Hz rumbles that travel kilometres through the ground)
- You don't hear it, but you may *feel* it — your body vibrates at these frequencies

**Above 20 kHz: Ultrasound**
- Bats: up to 100 kHz — echolocation
- Dogs: up to ~65 kHz — that's what a dog whistle uses (~23–54 kHz)
- Medical imaging: 1–20 MHz — wavelengths short enough to resolve millimetre-scale features inside the body

**What this means with v = fλ at 340 m/s:**

| Frequency | Wavelength | Context |
|-----------|-----------|---------|
| 20 Hz | **17 metres** | Wavelength longer than a double-decker bus |
| 440 Hz (Concert A) | 0.77 m | Session 17 result |
| 20,000 Hz | **17 mm** | Roughly the width of your thumbnail |
| 40,000 Hz (bat) | 8.5 mm | Fine enough to detect a moth |

The lower limit of human hearing has a wavelength longer than a bus. The upper limit has a wavelength smaller than a 20p coin. Both physically arrive at your ear. One you can't hear because the ear can't oscillate that slowly in a useful way; the other because the hair cells can't resonate that quickly.

---

## Concept 3: Speed of Sound Depends on the Medium

Medium fixes speed. Two properties determine how fast:

1. **Stiffness (elasticity)** — how forcefully the medium pushes back when compressed. Stiffer = faster.
2. **Density** — how much mass per unit volume. Denser = slower (more inertia to move).

**Speed in different media:**

| Medium | Speed of sound |
|--------|---------------|
| Rubber | ~60 m/s |
| Air (20°C) | 343 m/s |
| Water | ~1,480 m/s |
| Steel | ~5,100 m/s |

Steel is dense but extremely stiff — stiffness dominates. Rubber is dense but very compliant — elasticity loses.

**Temperature effect in air:**

v ≈ 331 + 0.6T m/s (T in Celsius)

At 20°C: v = 343 m/s. Warmer air = faster molecules = faster propagation.

At night, ground air cools while air above stays warm. Sound refracts downward toward the slower (cooler) medium — which is why you hear distant sounds more clearly on cold nights. The geometry of this bending is Snell's Law (Session 20).

**v = fλ applied to sound speed contrast (from Session 17):**
Concert A (440 Hz) in water (1,480 m/s) → λ = 3.36 m
Concert A (440 Hz) in steel (5,100 m/s) → λ = 11.6 m
Frequency is preserved at boundaries; wavelength stretches with speed.

**The decibel scale:**
Loudness is measured in decibels (dB) — logarithmic. Every 10 dB = 10× the power.

| Situation | dB |
|-----------|----|
| Whisper | 30 dB |
| Conversation | 60 dB |
| Busy street | 80 dB |
| Concert | 100–110 dB |
| Jet engine | 140 dB |

100 dB vs 60 dB = 10,000× more power. This is why concerts damage hearing, not because they're "a bit loud" but because they're orders-of-magnitude more energetic.

---

## The Diagram

![[2026-04-10-09-31-20-sound-waves.png]]

*Panel 1: Compressions and rarefactions from speaker to eardrum. Panel 2: Hearing spectrum with wavelengths. Panel 3: Speed of sound by medium.*

---

## Summary

1. **Sound = alternating pressure.** Compressions and rarefactions travel through a medium. Your eardrum is a pressure detector. Frequency → pitch. Amplitude → loudness.

2. **Human hearing: 20 Hz–20 kHz.** Wavelengths 17 m to 17 mm. The limit is the ear's mechanical bandwidth — the wave itself is indifferent to your biology.

3. **Speed of sound depends on stiffness and density.** Steel: 5,100 m/s. Water: 1,480 m/s. Air: 343 m/s. Temperature raises speed in air (~0.6 m/s per °C). Night-time refraction = sound bending toward colder, slower air.

---

## Open Question (Preview: Session 19)

Sound needs a medium. Light doesn't. Both are waves. But light spans from radio waves you can't feel, through microwaves that heat your food, to visible light you can see, to ultraviolet that tans you, to X-rays that see through you.

All of it is the same type of wave. What varies is frequency.

**Why does frequency alone determine whether electromagnetic radiation is harmless, useful, or dangerous — when sound frequency just changes pitch?**

Session 19: The Electromagnetic Spectrum.

---

*Session 18 of 39 | Track 4 Physics Fundamentals | Nova × Kevin*
