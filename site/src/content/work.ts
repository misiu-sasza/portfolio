export interface Project {
  slug: string;
  title: string;
  brand: string;
  category: "Social Media" | "Email Marketing" | "Content" | "Strategy";
  description: string;
  stats: { value: string; label: string }[];
  featured: boolean;
  coverColor?: string;
  challenge?: string;
  approach?: string;
  results?: string;
}

export const projects: Project[] = [
  {
    slug: "bikebac-email",
    title: "Email Marketing",
    brand: "Bikebac",
    category: "Email Marketing",
    description:
      "Rebuilt Bikebac's email program from the ground up; growing the list 82% and increasing attributed Klaviyo revenue 43% YoY through segmentation, automated flows, and conversion copy.",
    stats: [
      { value: "43%", label: "Revenue YoY" },
      { value: "82%", label: "List Growth" },
      { value: "12.7%", label: "Signup Rate" },
    ],
    featured: true,
    coverColor: "#1a1a2e",
    challenge:
      "Bikebac had a small, under-segmented email list and a leaky signup form converting at roughly 3% — leaving revenue and audience growth on the table.",
    approach:
      "Redesigned the signup form with copy testing and UX improvements to lift submit rate from ~3% to 12.7%. Built geographic and behavioral segments in Klaviyo to send more relevant campaigns and flows. Wrote conversion-focused copy across welcome sequences, product launches, and promotional sends.",
    results:
      "Grew the list 82% to 7,952 subscribers. Increased attributed Klaviyo revenue 43% YoY in 2025. Signup rate now sits at 12.7% — roughly 4x the baseline.",
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
    challenge:
      "Traeger had no TikTok presence and needed to reach a younger, content-hungry audience without losing the brand identity that resonated with its core grilling community.",
    approach:
      "Built the TikTok channel from scratch using a data-driven content distribution strategy — tracking format performance, leaning into trends that fit the brand, and iterating fast. Developed the Game Day campaign video strategy by mapping trending formats to Traeger's audience, and ran cross-channel campaigns in lockstep with internal creative and paid teams.",
    results:
      "Grew TikTok from zero to 210K followers in 24 months. The Game Day campaign lifted audience engagement 223%. Contributed to a 22% YoY engagement increase across all owned channels in 2023.",
  },
  {
    slug: "newschoolers-social",
    title: "Social Media & Content",
    brand: "Newschoolers",
    category: "Social Media",
    description:
      "Ran social media and on-site content for a 450K-strong action sports community over five years, growing the audience by 410K followers and reaching 1M+ unique monthly users through daily content.",
    stats: [
      { value: "410K", label: "Followers Gained" },
      { value: "110%", label: "Video View Rate ↑" },
      { value: "19%", label: "Engagement ↑" },
    ],
    featured: false,
    coverColor: "#0d1b2a",
    challenge:
      "Newschoolers had a loyal but niche ski community and needed to grow its audience and keep them engaged — without a paid budget and against larger action sports platforms competing for the same attention.",
    approach:
      "Produced 10+ posts per week across social channels and curated daily news content on-site to keep the community informed and coming back. Monitored platform trends and mapped them to what resonated with the Newschoolers audience. Built partnerships with other action sports media pages to accelerate reach — one partnership alone added 53K Instagram followers over four months. Used analytics to identify what content formats and topics drove the most engagement and doubled down on what worked.",
    results:
      "Grew the social following by over 410K. Daily news content drove 1M+ unique monthly users and a 19% increase in platform engagement. Video content on marketing campaigns saw a 110% lift in view rates. A single winter partnership push added 53K Instagram followers in four months.",
  },
];

export const featuredWork = projects.filter((p) => p.featured).slice(0, 3);
