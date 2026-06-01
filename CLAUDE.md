# Portfolio — Claude Routing Guide

Read this before making any changes. It maps where everything lives and why.

---

## Project Structure

```
Portfolio/
├── CLAUDE.md                  ← You are here (master routing guide)
├── wellcopy-site-analysis.md  ← Design reference (wellcopy.net breakdown)
├── docs/
│   ├── voice.md               ← Personal voice, tone, and copy guidelines
│   └── design.md              ← Design system: colors, fonts, spacing, components
├── .github/
│   └── workflows/
│       └── deploy.yml         ← GitHub Actions: auto-deploys to GitHub Pages on push to main
└── site/                      ← Next.js 15 app (TypeScript + Tailwind v4)
    └── src/
        ├── app/               ← Pages and routing (App Router)
        │   ├── _notes.md      ← Page-level notes and routing rules
        │   ├── layout.tsx     ← Root layout: Nav + Footer wrap all pages
        │   ├── globals.css    ← Design tokens (colors, animation) + Tailwind import
        │   ├── page.tsx       ← Home page: Hero → LogoBar → Stats → Work → Services → Testimonials
        │   ├── work/
        │   │   ├── page.tsx   ← Work index (all projects grid)
        │   │   └── [slug]/
        │   │       └── page.tsx ← Individual project case study
        │   ├── about/
        │   │   └── page.tsx   ← Bio page
        │   └── contact/
        │       └── page.tsx   ← Contact form + email
        ├── components/        ← Reusable UI components
        │   ├── _notes.md      ← Component organization rules
        │   ├── nav/Nav.tsx          ← Fixed top nav with mobile menu (client component)
        │   ├── footer/Footer.tsx    ← Footer with CTA block (server component)
        │   ├── home/                ← Sections only used on the home page
        │   │   ├── Hero.tsx         ← Campaign Brief frame + headline
        │   │   ├── LogoBar.tsx      ← Scrolling marquee of brand/client names
        │   │   ├── WorkPreview.tsx  ← Featured work cards (pulls from content/work.ts)
        │   │   ├── Services.tsx     ← Skills/services tile grid
        │   │   └── Testimonials.tsx ← Testimonial cards (pulls from content/testimonials.ts)
        │   ├── work/
        │   │   └── ProjectCard.tsx  ← Work card used on /work and the home WorkPreview
        │   └── shared/
        │       ├── Button.tsx       ← Primary CTA (primary/outline variants, sm/md/lg sizes)
        │       ├── SectionLabel.tsx ← Gold uppercase label above section headings
        │       └── StatCallout.tsx  ← Large stat number + label
        └── content/           ← All editable site content — start here for copy changes
            ├── _notes.md      ← Guide to adding projects and testimonials
            ├── site.ts        ← Name, bio, stats, email, social links, brand list
            ├── work.ts        ← Portfolio projects array
            └── testimonials.ts ← Testimonial quotes array
```

---

## Key Rules

1. **Content changes → `site/src/content/`** — name, bio, projects, testimonials all live here. No code knowledge needed.
2. **Style changes → Tailwind classes in components; color tokens in `site/src/app/globals.css`**
3. **Adding a new page → create `site/src/app/[page-name]/page.tsx`, link in `Nav.tsx` and `Footer.tsx`**
4. **Adding a project → add an object to the `projects` array in `content/work.ts`**
5. **The contact form → static export can't use server actions. Wire up Formspree (formspree.io) for real email delivery.**
6. **Never hardcode copy in components** — use `siteConfig` from `content/site.ts`

---

## Running Locally

```bash
cd site
npm run dev       # Dev server at http://localhost:3000
npm run build     # Static build (outputs to site/out/)
```

---

## Deploying

Push to `main` → GitHub Actions builds and deploys to GitHub Pages automatically.

If deploying to a project page (e.g., `username.github.io/repo-name`), uncomment and set `basePath` in `site/next.config.ts`.

---

## Design Reference

- `wellcopy-site-analysis.md` — the original site this is modeled after
- `docs/design.md` — colors, fonts, spacing, component patterns
- `docs/voice.md` — tone, copy guidelines, what to avoid
