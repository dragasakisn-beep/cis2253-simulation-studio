# CIS2253 — Cyber Ethics Simulation Studio

Interactive four-week Cyber Ethics Decision Laboratory for Keiser University.

- Eight fictional ethical scenarios across four weeks.
- Intended 55-minute learning exercises, including evidence examination, branching professional decisions, ethical analysis and reflection.
- Readings align conceptually with Richard A. Spinello, *Cyberethics: Morality and Law in Cyberspace*, 8th ed. (2026), ISBN 9781284302523.
- Saved browser progress and student-generated participation reports; submitted through the institution's classroom platform.
- Lab release codes are classroom pacing controls, not secure server-side authorization.

## Design

The professional university visual theme is in `assets/cis2253-theme.css`. The approved original hero is `assets/photography/cis2253-ethics-hero.webp`. Scenario storyboard images remain embedded in `index.html`, as originally implemented.

## Development & quality

Use `AGENTS.md` as the default development contract. Run `node --test tests/quality.test.mjs`. GitHub Actions runs static checks and a Chromium browser smoke test against the site files after changes to `main`.

This is a browser-only classroom simulation, not a verified student identity system or centralized gradebook.
