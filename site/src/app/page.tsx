import Hero from "@/components/home/Hero";
import LogoBar from "@/components/home/LogoBar";
import WorkPreview from "@/components/home/WorkPreview";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import StatCallout from "@/components/shared/StatCallout";
import { siteConfig } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />

      {/* Stats bar */}
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-3 divide-x divide-border">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="px-8 first:pl-0 last:pr-0">
              <StatCallout value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </section>

      <WorkPreview />
      <Services />
      <Testimonials />
    </>
  );
}
