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
            10 years in.
            <br />
            Still building.
          </h1>
          <p className="text-muted text-xl leading-relaxed">
            I&apos;m a social media and digital marketer with a decade of
            experience helping brands grow online — from content strategy to
            email flows to full channel management.
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
            {/* Replace the placeholder paragraphs below with your actual bio */}
            <p>
              [Write your personal story here — how you got into digital
              marketing, what draws you to this work, and what you&apos;ve built
              along the way.]
            </p>
            <p>
              Deep Klaviyo expertise. Fluent in how email and social work
              together to build brands that retain customers, not just acquire
              them.
            </p>
            <p>
              [Add specific achievements, brands you&apos;ve worked with, or a
              turning point in your career that shaped how you think about
              growth.]
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
