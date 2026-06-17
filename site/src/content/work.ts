export interface Project {
  slug: string;
  title: string;
  brand: string;
  category: "Social Media" | "Email Marketing" | "E-Commerce" | "Content" | "Strategy";
  description: string;
  stats: { value: string; label: string }[];
  featured: boolean;
  coverColor?: string;
  platforms?: string[];
  videos?: string[]; // filenames only — e.g. "traeger-gameday.mp4". Base URL is in siteConfig.mediaBaseUrl
  challenge?: string;
  approach?: string;
  results?: string;
}

export const projects: Project[] = [
  {
    slug: "bikebac-email",
    title: "Full-Stack DTC Marketing",
    brand: "Bikebac",
    category: "E-Commerce",
    description:
      "Solo marketing hire at a two-person DTC startup. Owned email strategy, Klaviyo flow architecture, a full Shopify-to-WooCommerce migration, organic social, paid Meta, and B2B outreach — with no handoffs.",
    stats: [
      { value: "4.25x", label: "Form Conversion" },
      { value: "+213%", label: "Welcome Flow Revenue" },
      { value: "7 days", label: "Shopify → WooCommerce" },
    ],
    featured: true,
    coverColor: "#1a1a2e",
    platforms: ["Shopify", "WooCommerce", "Klaviyo", "TripleWhale", "Meta Ads", "HubSpot"],
    challenge:
      "Small team, full ownership. As the sole marketing hire at a two-person DTC startup, there were no handoffs — email, platform, paid media, and ops all fell to me. The signup form was converting at roughly 3%, the email flows were underbuilt, and the business needed to migrate entirely off Shopify without losing revenue or customer data.",
    approach:
      "Redesigned the popup form with a rider-type segmentation mechanic — visitors chose their biker identity (Mountain Biker, Gravel Grinder, Road Cyclist, or I Do It All) before the email ask, paired with a mystery offer. Submit rate jumped from ~3% to 10.96%. Rebuilt the entire welcome flow from scratch — new design, new offers, A/B tested throughout. Built and maintained geographic and behavioral subscriber segments in Klaviyo across campaigns and automated flows. On the migration side, handled the full Shopify-to-WooCommerce transition: customer data export, blank WooCommerce install, and all four integrations (Klaviyo, TripleWhale, Meta Ads Manager, WiserReview) restored and processing real orders in 7 business days. Managed 7 SKUs across B2C and B2B listings synced to Meta, configured bundle and bulk discount tiers, and produced weekly and monthly performance reports tracking $3–4K in monthly ad spend. Identified a wholesale opportunity in the Netherlands cycling market through inbound requests and ran cold outbound campaigns via HubSpot to close $10K in B2B accounts after the Android tracker release. Generated organic reach on Meta through consistent content with no paid budget.",
    results:
      "Popup form: 10.96% submit rate vs ~3% prior — a 4.25x lift — growing the email list 66% (6,185 subscribers). Matched the old form's CA$16K revenue with 63% fewer views and 56% more subscribers. Welcome flow: CA$8,269 in Mar–May 2026 vs CA$2,638 in the same window the year prior — a 213% increase. All Klaviyo flows generated C$16,180 in Jun–Sep 2025, up 17.4% YoY. Total attributed Klaviyo revenue up 43% YoY in 2025. Generated 2.65M organic views on Meta in 9 months with no paid budget, converting that reach into $30K in direct sales. Closed $10K in B2B wholesale accounts via HubSpot outreach. Platform migration completed in 7 business days with all integrations live from day one.",
  },
  {
    slug: "traeger-social",
    title: "TikTok Launch & Social",
    brand: "Traeger Pellet Grills",
    category: "Social Media",
    description:
      "Launched and scaled Traeger's TikTok from zero to 210K followers in 24 months, while driving a 22% YoY engagement increase across owned channels.",
    stats: [
      { value: "210K", label: "TikTok Followers" },
      { value: "223%", label: "Campaign Engagement" },
      { value: "22%", label: "YoY Engagement ↑" },
    ],
    featured: true,
    coverColor: "#1a1209",
    platforms: ["TikTok", "YouTube", "Sprinklr", "Sprout Social", "GRIN"],
    challenge:
      "Traeger had no TikTok presence and needed to reach a younger, content-hungry audience without losing the brand identity that resonated with its core grilling community.",
    approach:
      "Built the TikTok channel from scratch using Sprinklr to research, plan, and distribute content — tracking format performance, leaning into trends that fit the brand, and iterating fast. Developed and executed the Game Day campaign video strategy by mapping trending formats to Traeger's audience. Managed a content calendar across owned and UGC posts using GRIN, Sprinklr, and Sprout to maintain consistent audience engagement. Ran cross-channel campaigns in lockstep with internal creative and paid teams. Built the data case for the Traeger Kitchen YouTube series, analyzing historic audience and video performance data to secure buy-in from leadership.",
    results:
      "Grew TikTok from zero to 210K followers in 24 months. The Game Day campaign lifted audience engagement 223%. Maintained 10% YoY engagement growth across the full content calendar. Contributed to a 22% YoY engagement increase across all owned channels in 2023.",
  },
  {
    slug: "newschoolers-social",
    title: "Social Media, Content & Community",
    brand: "Newschoolers",
    category: "Social Media",
    description:
      "Two roles over seven years at a 450K-strong action sports media brand — starting as Community Manager, then scaling as Digital Marketing Specialist. Grew the audience by 410K followers and 16M new site visitors with no paid budget.",
    stats: [
      { value: "410K", label: "Followers Gained" },
      { value: "16M", label: "New Site Visitors" },
      { value: "36K", label: "Organic App Downloads" },
    ],
    featured: false,
    coverColor: "#0d1b2a",
    challenge:
      "A niche ski and action sports community competing for attention on platforms that increasingly rewarded paid reach — with no paid budget. The job was to build community infrastructure from scratch, then figure out how to scale it.",
    approach:
      "As Community Manager (2014–2016): built engagement systems across forums and social, established influencer relationships, and created a direct feedback channel between the community and editorial staff that drove 20+ site and content improvements — including the revival of the Member of the Month prize pack. Engaged 200+ active community members daily, moderating discussions and surfacing standout content. Created the #nsfamous Instagram tag as a UGC submission system — it has since been used over 118K times. As Digital Marketing Specialist (2016–2021): planned and executed comprehensive digital marketing campaigns, used Google Analytics and keyword research to fine-tune audience segmentation, and built PowerBI dashboards to visualize campaign KPIs and identify under-performing assets. A/B tested headlines, copy, and targeting continuously to lift CTR and reduce wasted spend. Produced 10+ posts per week across social channels alongside daily news content on-site. Built cross-platform media partnerships to accelerate reach — one winter push alone added 53K Instagram followers in four months.",
    results:
      "Grew social following by 410K. Generated 16M new site visitors and 36,000 organic app downloads through social and email campaigns with no paid budget. Reached 1M+ unique monthly users through daily news content. Achieved a 19% increase in overall social media engagement, a 110% lift in video view rates on marketing campaigns, a 14% increase in user acquisition, and a 22% increase in user retention. Lifted CTR 15% through A/B testing and copy rewrites. Improved overall campaign efficiency 12% via PowerBI dashboard insights. The #nsfamous tag has been used 118K+ times since creation.",
  },
];

export const featuredWork = projects.filter((p) => p.featured).slice(0, 3);
