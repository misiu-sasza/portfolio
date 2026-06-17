import Button from "@/components/shared/Button";
import { siteConfig } from "@/content/site";

export default function Hero() {
  return (
    <section
      className="pt-32 pb-24 px-6 relative overflow-hidden"
      style={{
        backgroundImage: [
          "radial-gradient(ellipse 65% 90% at 85% 50%, rgba(255,153,0,0.08) 0%, transparent 70%)",
          "linear-gradient(rgba(255,153,0,0.025) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(255,153,0,0.025) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "auto, 72px 72px, 72px 72px",
      }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: headline block */}
        <div>
          <p className="text-accent text-xs uppercase tracking-[0.2em] mb-5">
            {siteConfig.title}
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-[0.92] mb-6">
            {siteConfig.tagline}
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
            {siteConfig.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/work">See the Work</Button>
            <Button href="/contact" variant="outline">
              Let&apos;s Talk
            </Button>
          </div>
        </div>

        {/* Right: Campaign Brief frame */}
        <div className="border border-border bg-surface rounded-sm font-mono text-sm">
          {/* Window chrome */}
          <div className="border-b border-border px-4 py-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-border" />
              <span className="w-3 h-3 rounded-full bg-border" />
              <span className="w-3 h-3 rounded-full bg-accent/40" />
            </div>
            <span className="text-muted text-xs uppercase tracking-[0.15em]">
              Campaign Brief
            </span>
            <span className="w-12" />
          </div>

          {/* Brief fields */}
          <div className="px-6 py-5 border-b border-border">
            <div className="grid grid-cols-[52px_1fr] gap-x-4 gap-y-2.5 text-sm">
              <span className="text-muted">To:</span>
              <span className="text-foreground">Brands ready to grow</span>
              <span className="text-muted">From:</span>
              <span className="text-foreground">{siteConfig.name}</span>
              <span className="text-muted">Re:</span>
              <span className="text-foreground">
                Social media &amp; email strategy that actually converts
              </span>
            </div>
          </div>

          {/* Brief body */}
          <div className="px-6 py-5 space-y-4 text-muted leading-relaxed font-sans text-sm">
            <p>
              I build social media systems and email engines for brands that
              want real growth — not just engagement metrics.
            </p>
            <p>
              12 years. Deep Klaviyo expertise. Social, email, and e-commerce
              across every major platform.
            </p>
            <p className="text-foreground/40 italic text-xs">
              P.S. — I don&apos;t just manage accounts. I build the strategy
              behind them.
            </p>
            <div className="pt-2">
              <Button href="/contact" size="sm">
                Start a conversation →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
