# Pages / App Router

All pages use the Next.js App Router. The root `layout.tsx` wraps all pages with Nav + Footer.

## Page Map

| File | URL | Purpose |
|---|---|---|
| `page.tsx` | `/` | Home — Hero, LogoBar, Stats, Work preview, Services, Testimonials |
| `work/page.tsx` | `/work` | Portfolio grid (all projects) |
| `work/[slug]/page.tsx` | `/work/:slug` | Individual project case study |
| `about/page.tsx` | `/about` | Bio, values, career story |
| `contact/page.tsx` | `/contact` | Contact form + email |

## Adding a Page

1. Create `[page-name]/page.tsx`
2. Add a link in `components/nav/Nav.tsx` (desktop links array and mobile menu)
3. Add a link in `components/footer/Footer.tsx` (nav row)

## Static Export Note

This site uses `output: 'export'` in `next.config.ts` for GitHub Pages. This means:
- No server actions or API routes
- No runtime server-side rendering
- Dynamic routes need `generateStaticParams()` — see `work/[slug]/page.tsx` for the pattern
- The contact form needs an external service (Formspree) for email delivery
