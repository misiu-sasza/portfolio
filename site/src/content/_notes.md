# Content Files

This is the only folder you need to touch for content changes — no code knowledge required.

## Files

| File | What to edit |
|---|---|
| `site.ts` | Your name, tagline, bio, career stats, email, social links, brand/client list for the marquee |
| `work.ts` | Portfolio projects — add each project as an object in the `projects` array |
| `testimonials.ts` | Client or colleague testimonial quotes |

---

## Adding a Project (`work.ts`)

Add an object to the `projects` array:

```typescript
{
  slug: "unique-url-slug",       // becomes /work/unique-url-slug — lowercase, hyphens only
  title: "Project Title",
  brand: "Brand Name",
  category: "Social Media",      // Social Media | Email | Content | Strategy
  description: "One or two sentences summarizing what you did.",
  stats: [
    { value: "3x", label: "Follower Growth" },
    { value: "85%", label: "Engagement Increase" },
    { value: "6mo", label: "Timeline" },
  ],
  featured: true,                // true = shows on home page (max 3 shown)
  coverColor: "#1a1a2e",         // optional card background color
  // Optional — for a full case study page:
  challenge: "What the brand was struggling with...",
  approach: "What you did and why...",
  results: "The outcome in plain language...",
}
```

---

## Adding a Testimonial (`testimonials.ts`)

```typescript
{
  id: "unique-id",               // any unique string
  quote: "The testimonial text without quotes — they're added automatically.",
  name: "First Last",
  title: "CMO",
  brand: "Brand Name",
  avatar: "/images/avatars/name.jpg",  // optional — put image in public/images/avatars/
}
```

---

## Brand Marquee (`site.ts`)

Add client/brand names to the `brands` array to show the scrolling marquee strip on the home page:

```typescript
brands: ["Brand One", "Brand Two", "Brand Three"],
```

Leave empty (`[]`) to hide the marquee.
