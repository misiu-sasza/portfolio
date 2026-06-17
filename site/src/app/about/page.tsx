import SectionLabel from "@/components/shared/SectionLabel";
import StatCallout from "@/components/shared/StatCallout";
import Button from "@/components/shared/Button";
import { siteConfig } from "@/content/site";

const values = [
  {
    title: "Strategy First",
    body: "Every tactic starts with a clear goal. I build systems, not just posts.",
  },
  {
    title: "Data-Driven",
    body: "Gut instinct backed by numbers. I track what matters and cut what doesn't.",
  },
  {
    title: "Long-Game Thinking",
    body: "I care about retention, not just reach. Growth that compounds over time.",
  },
  {
    title: "Direct Communication",
    body: "Clear reporting, honest timelines, and no jargon.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <SectionLabel>About</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-[0.92]">
            12 years in.
            <br />
            Still building.
          </h1>
          <p className="text-muted text-xl leading-relaxed">
            Social media, email, and e-commerce marketing for brands that
            couldn&apos;t afford to get it wrong.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-border border-y border-border py-12 mb-20">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="px-8 first:pl-0 last:pr-0">
              <StatCallout value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>

        {/* Bio + Values */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Most of my career has been in lean setups — small teams, no agency
              safety net, and a mandate to figure it out. At Bikebac, a
              two-person bike security startup, I was the only marketer. I built
              their Klaviyo system from scratch, migrated them off Shopify to
              WooCommerce in 7 business days, and wrote every email, ad, and
              social post. Email signup rates went from ~3% to 10.96%. The
              welcome flow I rebuilt drove 213% more revenue year-over-year.
              With zero paid budget, I generated 2.65M organic views on Meta and
              turned that into $30K in direct sales.
            </p>
            <p>
              Before that, two and a half years at Traeger Pellet Grills. I
              launched their TikTok from scratch — zero to 210K followers in 24
              months. One campaign alone pulled a 223% engagement lift.
            </p>
            <p>
              Before Traeger, seven years at Newschoolers — an action sports
              media brand with a tight, loyal community. I started as Community
              Manager and left as Digital Marketing Specialist. During that time
              we grew the social audience by 410K, drove 16M new site visitors,
              and generated 36K app downloads. None of it paid.
            </p>
            <p>
              I work best when the job description doesn&apos;t quite cover what
              the job actually is.
            </p>
          </div>

          <div className="space-y-8">
            {values.map((value) => (
              <div key={value.title} className="border-l-2 border-accent pl-6">
                <h3 className="font-bold text-foreground mb-1">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-border pt-12 flex flex-wrap gap-4">
          <Button href="/work">See the Work</Button>
          <Button href="/contact" variant="outline">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </div>
  );
}
