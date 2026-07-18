<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: The Adani Empire — Series
description: Editorial longform on how the Adani empire was built — restrained, print-grade, built to be read.
---

# Design System: The Adani Empire — Series

## 1. Overview

**Creative North Star: "The Longform Dossier"**

This is a reading instrument, not a brand showcase. The system is built around a single idea: a serious, admiring account of an empire, set in type with the calm authority of a print business feature. The surface is quiet — a warm-neutral paper, near-black ink, generous margins — so that the writing, the figures, and the named assets carry the weight. Admiration is earned through clarity, not decoration: when the text says a port was secured or 1 lakh crore was generated from internal accruals, the layout makes that fact land, rather than dressing it up.

The palette is deliberately restrained. One warm accent appears rarely — a chapter marker, a pulled figure, a link — and its rarity is what gives it force. Depth comes from typography and spacing, not shadows or gradients. Motion is present but disciplined: smooth state changes and gentle reveals that reward scrolling through a long piece, never choreography for its own sake.

What this system explicitly rejects: the **corporate press-release** look (glossy stock imagery, empty superlatives, official-brand-site gloss); the **generic Medium blog** (a default centered column with an avatar and a clap button, indistinguishable from any other writer); **clickbait/tabloid** styling (sensational headlines, ad clutter, outrage); and **SaaS landing-page** energy (gradient heroes, feature-card grids, pricing-table rhythm). None of those belong here.

**Key Characteristics:**
- Print-grade editorial calm; the text is the interface.
- Restrained color: paper + ink + one warm accent used on ≤10% of any screen.
- Serif display authority over a clean, highly readable sans body.
- Structure that carries the reader from part to part — cohesion is the point.
- Depth through type and space, not shadow; motion that serves reading.

## 2. Colors

A warm-neutral paper surface under deep near-black ink, with a single warm accent reserved for emphasis. `[Exact token values to be resolved during implementation — direction below is normative.]`

### Primary
- **Deep Ink** (`[near-black to be resolved]` — target OKLCH L≈0.20, very low chroma, slight warm cast): The primary text and heading color. Near-black, never pure `#000`, so it reads as ink on paper rather than pixels on a screen. Carries all body copy and display headings.

### Secondary
- **Warm Accent** (`[to be resolved]` — one warm hue, e.g. an ember/amber or muted crimson in the OKLCH warm band): The single accent. Used sparingly for chapter/part markers, pulled figures, active links, and the primary "keep reading" affordance. Rarity is enforced (see the One Accent Rule).

### Neutral
- **Paper** (`[to be resolved]` — target OKLCH L≈0.96, chroma ≤0.01, warm-neutral): The body background. A true off-white with a faint warm cast — restrained, not a saturated cream/sand default.
- **Ledger Line** (`[to be resolved]` — a light warm gray): Hairline rules, dividers, and table lines. 1px, quiet, structural.
- **Muted Ink** (`[to be resolved]` — a mid gray meeting ≥4.5:1 on paper): Captions, metadata (dates, part numbers, reading time), and secondary text. Must still pass body contrast; no light-gray-for-elegance.

### Named Rules
**The One Accent Rule.** The warm accent appears on ≤10% of any given screen. It marks the reader's path — the next part, the key figure, the live link — and nothing else. Its scarcity is the entire reason it works.

**The Ink-on-Paper Rule.** Text is never pure black on pure white. Deep near-black ink on warm off-white paper. Pure `#000000` and pure `#ffffff` are forbidden on reading surfaces.

## 3. Typography

**Display Font:** `[serif to be chosen at implementation]` — an expressive editorial serif with real character in the headline sizes (candidates: a high-contrast Didone or a warm literary serif). With Georgia, serif fallback.
**Body Font:** `[sans to be chosen at implementation]` — a clean, highly readable humanist or neutral sans for long-form body. With system-ui, sans-serif fallback.
**Label/Meta Font:** the body sans at a smaller size and tighter tracking; no separate family unless a distinct need appears.

**Character:** A serif/sans pairing on a genuine contrast axis — expressive serif headlines carrying authority and voice, over a quiet, workhorse sans that stays comfortable across thousands of words. Never two similar sans-serifs.

### Hierarchy
- **Display** (`[weight tbd]`, clamp max ≤ 6rem, line-height ≈1.0, letter-spacing ≥ -0.04em): Part titles and the series hero. Balanced with `text-wrap: balance`.
- **Headline** (`[tbd]`, ~2rem): Section headings within an article (e.g. "The Incubator", "Financial Strategy & Leverage").
- **Title** (`[tbd]`, ~1.375rem): Sub-section and callout leads.
- **Body** (regular, ~1.125rem/1.75 line-height, measure capped at 65–75ch): The core reading experience. Comfortable, roomy, `text-wrap: pretty` to reduce orphans.
- **Label** (medium, ~0.8125rem): Part numbers, dates, reading time, breadcrumbs.

### Named Rules
**The 75ch Rule.** Body measure never exceeds 75ch. On wide screens the column holds; whitespace fills the margins. Readability outranks filling the viewport.

**The Contrast-Pair Rule.** Headlines and body sit on opposite sides of a contrast axis (serif vs. sans). Pairing two geometric or two humanist sans-serifs is forbidden.

## 4. Elevation

Flat by default. This is a paper system: depth is conveyed through typographic scale, generous spacing, and hairline rules (Ledger Line), not shadows. Surfaces do not float. Shadows, if they ever appear, are a response to state (a hover on an interactive card, a focus ring), never ambient decoration at rest. Glassmorphism and soft drop-shadow "cards" are prohibited.

### Named Rules
**The Flat-Paper Rule.** Surfaces are flat at rest. If a section looks like it's floating above the page, remove the shadow and let space and rules do the work.

## 5. Components

<!-- No components exist yet. Canonical primitives will be documented on the next scan-mode run, once the reading template and homepage are built. -->

Direction for when they're built:
- **Keep-Reading link/button**: the primary affordance — carries the warm accent; text-forward, not a filled SaaS button. Leads the reader to the next part.
- **Part marker / chapter index**: numbered where the order is real information (the four Parts are a genuine sequence), set in the accent + label type.
- **Pull figure / stat callout**: for the deconstructed numbers (debt-to-equity ratios, internal accruals) — typographic emphasis, not a hero-metric template with a gradient.
- **Article nav / progress**: quiet reading-progress and part-to-part navigation that reinforces series cohesion.

## 6. Do's and Don'ts

### Do:
- **Do** keep body measure at 65–75ch and body contrast ≥4.5:1 on paper — reading comfort is the product.
- **Do** reserve the warm accent for the reader's path (next part, key figures, live links) and keep it under ~10% of any screen.
- **Do** convey depth with type scale, spacing, and 1px rules — flat by default.
- **Do** use serif display against sans body on a real contrast axis.
- **Do** treat the four Parts as one connected arc — every article ends by pulling toward the next.
- **Do** honor `prefers-reduced-motion`: reveals degrade to instant/crossfade.

### Don't:
- **Don't** build the **corporate press-release** look — no glossy stock photography, official-brand gloss, or empty superlatives. Admiration is earned with specifics.
- **Don't** ship the **generic Medium blog** — no default centered column with an avatar and clap button that could belong to any writer.
- **Don't** drift into **clickbait/tabloid** — no sensational headlines, ad clutter, or outrage styling.
- **Don't** borrow **SaaS landing-page** patterns — no gradient hero, feature-card grids, or pricing-table rhythm.
- **Don't** use pure `#000` on pure `#fff`, gradient text (`background-clip: text`), side-stripe borders (>1px colored `border-left`), or the tiny uppercase tracked eyebrow above every section.
- **Don't** let the warm accent spread; the moment it's everywhere, it stops meaning "read this next."
