# Design System

---

## Colors

| Token | Value | Usage |
|---|---|---|
| `background` | `#0a0a0a` | Page background (near-black) |
| `surface` | `#111111` | Cards, nav, raised elements |
| `border` | `#1e1e1e` | All dividers and borders |
| `foreground` | `#f0f0f0` | Primary text |
| `muted` | `#6b6b6b` | Secondary text, labels, placeholder copy |
| `accent` | `#d4a843` | Warm gold — CTA buttons, highlights, section labels |

To change any color: edit the `:root` block in `site/src/app/globals.css`.

---

## Typography

Font: **Geist Sans** (loaded via `next/font/google`)

- Headlines: `font-bold` + large `text-*` size + tight `leading-[0.92]`
- Body text: `text-muted` + `leading-relaxed` + `text-lg`
- Section labels: `text-xs uppercase tracking-[0.2em]` in `text-accent`
- Monospace (Brief frame fields): `font-mono`

---

## Spacing

| Token | Value | Purpose |
|---|---|---|
| Max page width | `max-w-6xl` (1152px) | Constrains content on wide screens |
| Side padding | `px-6` | Consistent horizontal padding |
| Section padding | `py-24` | Vertical breathing room between sections |
| Nav height | `h-16` (64px) | Fixed nav, so pages open at `pt-32` |

---

## Component Patterns

### Campaign Brief Frame (Hero)
The signature hero element — a bordered container styled as an internal campaign brief. Window chrome at the top (three dot circles). Monospace font for the `To / From / Re` fields, sans-serif for the body copy. The third dot is gold-tinted to hint at the accent color.

### Section Label
`<SectionLabel>` — small gold uppercase text above every section headline. Always leads a new section.

### Stat Callout
`<StatCallout value="10+" label="Years" />` — large bold number, small muted label. Use in stat bars and standalone proof sections.

### Project Card
Bordered card with: color cover block → 3 stat cells (with dividers) → info block (brand, title, description, "Read more →"). Hover turns border gold.

### Button
Two variants:
- `primary`: gold fill, dark text, opacity on hover
- `outline`: border + text, turns gold on hover

Three sizes: `sm`, `md` (default), `lg`.

---

## Layout Patterns

- **Single column** on mobile
- **2-column grid** on `md:` (768px+)
- **3-column grid** on `lg:` (1024px+)
- **Full-bleed sections**: use `bg-surface` for a slightly lifted background
- **Dividers between grid items**: `divide-x divide-border` on the parent

---

## Adding a New Section

1. Create `site/src/components/home/NewSection.tsx`
2. Import and add to `site/src/app/page.tsx` in the right order
3. Pattern: `SectionLabel` → `h2 heading` → content → optional CTA button
