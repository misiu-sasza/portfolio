# Components

## Folder Structure

| Folder | Contents |
|---|---|
| `nav/` | Fixed top navigation — client component (has mobile menu state) |
| `footer/` | Footer with CTA block — server component |
| `home/` | Sections only used on the home page |
| `work/` | `ProjectCard` — used on both `/work` and home's `WorkPreview` |
| `shared/` | Reusable primitives: `Button`, `SectionLabel`, `StatCallout` |

## Rules

- Default to server components. Add `"use client"` only when you need state, effects, or browser APIs.
- All copy and data comes from `src/content/` — never hardcode strings in components.
- Colors and spacing come from Tailwind utility classes mapped to design tokens in `globals.css`.
- Keep components focused: one section = one file.
