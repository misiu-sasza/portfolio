# Well Copy — Website Structure & Design Analysis

**Purpose of this document:** Reference for Claude Code before designing a new portfolio website. This breaks down how wellcopy.net is structured, what each page does, how sections are ordered, and what design patterns are used throughout. The goal is to adapt this structure into a personal marketing portfolio site.

---

## Site Overview

**URL:** https://www.wellcopy.net  
**Built on:** Webflow (confirmed by CDN URLs and page structure)  
**Type:** B2B service agency site — DTC ecommerce email/SMS agency  
**Primary CTA throughout:** "Book a Call" (links to a scheduling page)  
**Nav pages:** Home, Case Studies, Reviews (anchor on Home), Careers, About  
**Footer links also include:** Three course/resource pages (Welcome Flow Mastery, Email Flows Mastery, Email Abandonment Recovery Mastery)

---

## Navigation Structure

```
[Logo]   Home | Case Studies | Reviews | Careers | About   [Schedule / Book a Call CTA]
```

- Fixed top nav, minimal — logo left, links center, CTA button right
- "Reviews" is an anchor link (`/#reviews`) not a separate page
- CTA button is persistent across all pages

---

## Page-by-Page Breakdown

---

### 1. Home Page (`/`)

The home page is a long-form sales page. It flows top to bottom with clear section breaks. No sidebar, no grid layout — strictly vertical scroll.

**Section order:**

#### Hero Section
- Email-style UI frame (styled to look like a compose window)
- "Recipients: 7–10 Figure Ecommerce Brands"
- "Subject: Retention systems that fuel Profitable Ecommerce Growth"
- Body copy: Who they are, what they do, one-liner TLDR, P.S. with social proof stat ($200M, 200+ brands, 41% avg revenue)
- CTA: "Book a Call"
- Visual treatment: The hero is presented as if it's an email being composed — a clever brand-consistent device

#### Client Logo Bar
- Scrolling/marquee strip of client brand logos (12+ logos, two rows, auto-scrolling)

#### Email Creative Gallery (Scroll Strip)
- Horizontal scrolling strip of actual email design examples from client work
- Shows visual range and quality — acts as a mini portfolio within the page

#### Results / Stats Section
- Headline: "$200,000,000+ generated across 200+ brands"
- Sub-headline: "Our clients average 41% of their total store revenue from email & sms."
- Featured case study cards (4 shown on home, filtered list on Case Studies page)
- Each card includes: metric callouts (e.g., "2x Email Revenue in 60 days"), category tag, brand logo, short description, "Read full story" link

#### Retention / Why Email Section
- Email-compose UI frame again (second use of the device)
- Subject: "Turn Your Email List Into Your Most Profitable Sales Channel"
- Long-form copy explaining why most brands underutilize email and why the channel matters
- CTA: "Book a Call"

#### Services Section
- Headline: "Retention done right for ecommerce brands"
- Six service tiles, each with icon, title, and 2–3 sentence description:
  1. List Growth
  2. Campaign Management
  3. Automations & Flows
  4. A/B Testing & Optimization
  5. Segmentation & Deliverability
  6. End-to-End Strategy
- CTA: "Book a Call"

#### Differentiators Section ("Why Well Copy")
- Headline: "We're not another cookie-cutter email agency"
- Four differentiator blocks with icons:
  1. Results that matter
  2. Speed without sacrifice (Day 7 popup, Day 10 first email, 10–14 day full buildout)
  3. Transparent communication (daily Slack, weekly reports, weekly/monthly calls)
  4. Relentless optimization (2+ A/B tests per week minimum)
- Team photos interspersed

#### Testimonials Section (anchor: `#reviews`)
- Headline: "We've helped scale 200+ ecommerce brands"
- 10+ written testimonials, each with: quote, headshot/avatar, name, title, brand
- Tabbed navigation at top to filter by reviewer name
- Brands represented: Atelier Rebul, Proof Wallets, OVR Performance, Gains in Bulk, German Car Accessories, Healfast Products, Forest Ink, Men's Best Basics, LivFresh, Smokeshow Mixology, Palmetto & Pine Golf, Instead of Flowers

#### Email Creative Gallery (repeated)
- Second instance of the scrolling email design strip

#### FAQ Section
- 6 questions, accordion style:
  1. How is Well Copy different?
  2. What services do you offer?
  3. How often will you send campaigns?
  4. What are the costs? (min $5k/mo, month-to-month)
  5. How quickly will I see results? (30–60 days)
  6. Do I need to be on Klaviyo?

#### Footer CTA
- "Book a Call" block with email contact option (max@wellcopy.net)
- Instagram, YouTube, LinkedIn icons

#### Footer
- Logo, nav links, course links, social links, legal links
- Live revenue counter: "email revenue generated for clients by well copy — $205,015,790"
- Legal disclaimer

---

### 2. Case Studies Page (`/case-studies`)

**Purpose:** Social proof hub. Full list of client wins.

**Structure:**
- Page header: "$200,000,000+ generated across 200+ brands"
- Filter bar: category tags (Apparel, Sports, Accessories, Health, Automotive, Beverage, Supplement)
- Case study cards in a grid or stacked list (same card format as home page):
  - 3 stat callouts per card (e.g., "102% Increase in Email Revenue")
  - Category label
  - Brand logo
  - One-sentence case summary
  - "Read full story" CTA

**Case studies featured (11 total):**
1. Gains In Bulk (Supplement)
2. Drink Willie's (Beverage)
3. LivFresh (Health)
4. German Car Accessories (Automotive)
5. Proof Wallets (Accessories)
6. OVR Performance (Sports)
7. Lucky Fours (Accessories)
8. Ice Cartel (Accessories)
9. Instead of Flowers (Health)
10. Forest Ink (Apparel)

**Bottom:** Repeats the FAQ section and footer CTA (same as home)

---

### 3. Individual Case Study Pages (e.g., `/case-studies/gains`)

Not fetched in full, but linked from case study cards. Likely a long-form breakdown of each client engagement: the situation, what was done, and the results.

---

### 4. About Page (`/about`)

**Purpose:** Brand trust and founder story.

**Structure:**
- Hero: "Your premier ecommerce Email & SMS partners" — team of 70+ retention specialists
- Embedded video (Wistia)
- Scrolling team photo collage (14+ photos)
- Mission statement block: plain-language explanation of what they're building and how they differ from agencies that "treat email like a checkbox"
- Values section (4 values with icons/stickers):
  1. Be Premier
  2. Dawg Mentality
  3. Goodness
  4. Team > Self
- Founder bio — Max Sturtevant, written in first person, casual and detailed:
  - Started in college at University of San Diego (2021)
  - Came from a sports card ecommerce background
  - Transitioned into copywriting, then email specifically
  - Founded Well Copy in early 2023
  - 50+ people, 100+ brands by graduation (May 2025)
  - Now: 70+ team, 200+ brands, 95% quarterly client retention rate
- Dual CTA at the bottom: "Work with us" / "Join our team"

---

### 5. Careers Page (`/careers`)

**Purpose:** Hiring. Fully remote team.

**Structure:**
- Page header: "Careers at Well Copy"
- Tagline: "We're building a premier team focused on one thing..."
- Four open positions (cards with title, location, contract type, responsibilities list, and a "See job post" CTA linking to Typeform):
  1. Klaviyo Technical Specialist
  2. Email Copywriter
  3. Email Designer
  4. Email Strategist / Senior Email Strategist

---

## Design Language & Patterns

### Color / Visual Tone
- Dark background throughout (near-black)
- High contrast white body text
- Accent color: warm gold/yellow used sparingly for highlights and CTA buttons
- Very little use of color beyond that — restrained palette

### Typography
- Large, bold headline text (likely a sans-serif display font)
- Body text is clean and readable — generous line height
- Subheadings and labels are often small-caps or uppercase tracking

### Component Patterns
- **Email compose UI frame** — used twice on home page as a container for hero and secondary CTA copy. The "To:", "Subject:", body copy format is a recurring brand device
- **Stat callouts** — large bold numbers (e.g., "2x", "102%", "50%") stacked above a label, used inside case study cards and standalone proof sections
- **Marquee/scrolling strips** — used for both the logo bar and the email design gallery
- **Sticker-style illustrations** — emoji-adjacent illustrated icons used next to values, FAQs, and section labels. Adds personality without being unprofessional
- **"Tag" labels** — small pill/badge labels for categories (e.g., "Supplement", "Health", "Apparel")
- **Team photo collage** — masonry-style grid of candid team photos on About page
- **Testimonial carousel** — tab-navigated or scrollable, each card with quote + attribution
- **Service cards** — icon + title + 2–3 sentence description, arranged in a 2-column or 3-column grid

### CTA Strategy
- One primary CTA throughout: "Book a Call"
- Every major section ends with this CTA
- Secondary CTA on some pages: "See all case studies" or contact email
- The scheduling link redirects to a booking page (Calendly or similar)

### Content Hierarchy Pattern (repeated on home)
```
[Section label — small, uppercase]
[Section headline — large, bold]
[Supporting copy — 2–4 sentences]
[Cards or grid content]
[CTA button]
```

---

## Key Structural Notes for Portfolio Adaptation

1. **The email-compose hero frame** is a brand-specific device tied to their service. For a portfolio site, this UI-frame concept could be adapted — e.g., a "message" or "brief" frame to introduce the person.

2. **Stat callouts are the anchor of every section.** On a portfolio site, these would translate to career metrics, campaign results, or project outcomes — same visual treatment, different numbers.

3. **Case studies = portfolio pieces.** The card format (category, metrics, short description, CTA) maps cleanly to a work portfolio. Each card would link to a case study or project writeup.

4. **The testimonials section is a straight lift.** Recommendations from colleagues, managers, or clients work the same way structurally.

5. **The services section** would become a skills or expertise section on a portfolio — same card format, different content.

6. **The about/founder story** maps to a bio page. The first-person, direct, no-fluff tone is worth carrying over.

7. **The careers page** becomes a "hire me" or "open to work" page — same intent, same structure, different audience.

8. **The live revenue counter in the footer** is a strong conversion device. A portfolio equivalent could be something like a live or static "career stat" — total campaigns sent, revenue influenced, etc.

---

## Page/URL Map Summary

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Long-form sales/landing page |
| Case Studies | `/case-studies` | Full proof/results hub |
| Case Study (individual) | `/case-studies/[slug]` | Deep-dive per client |
| Reviews | `/#reviews` | Anchor on home page |
| About | `/about` | Brand story + founder bio |
| Careers | `/careers` | Hiring page |
| Book a Call | `/book-a-call` | Scheduling redirect |
| Courses (footer) | `/welcome-flow`, `/flows`, `/abandons` | Lead gen / education content |
| Legal | `/legal/privacy-policy`, `/legal/terms-conditions` | Standard |
