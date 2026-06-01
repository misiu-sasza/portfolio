import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      {/* CTA block */}
      <div className="bg-surface py-20 px-6 text-center">
        <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
          Ready to grow?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let&apos;s build something together.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-medium text-lg hover:opacity-90 transition-opacity"
        >
          Let&apos;s Talk →
        </Link>
      </div>

      {/* Nav row */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="font-bold text-foreground">
          {siteConfig.name}
        </Link>
        <div className="flex gap-8">
          {[
            { label: "Work", href: "/work" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground transition-colors text-xs uppercase tracking-widest"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-muted text-xs">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
