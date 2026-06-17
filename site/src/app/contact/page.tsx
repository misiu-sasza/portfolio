import SectionLabel from "@/components/shared/SectionLabel";
import { siteConfig } from "@/content/site";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-[0.92]">
            Let&apos;s build
            <br />
            something.
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-10">
            Available for consulting, freelance projects, and full-time
            opportunities. If you&apos;re working on something interesting,
            I want to hear about it.
          </p>
          {siteConfig.social.linkedin && (
            <div>
              <p className="text-xs text-muted uppercase tracking-widest mb-1">
                LinkedIn
              </p>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80 transition-opacity"
              >
                View Profile →
              </a>
            </div>
          )}
        </div>

        {/* Right: Contact form */}
        {/* Note: connect to Formspree (formspree.io) for real email delivery.
            Replace action="" below with your Formspree endpoint. */}
        <div className="border border-border bg-surface p-8">
          <form action="" method="POST" className="space-y-6">
            <div>
              <label className="block text-xs text-muted uppercase tracking-widest mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs text-muted uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs text-muted uppercase tracking-widest mb-2">
                What are you working on?
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell me about your project or goal..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-background py-4 font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
