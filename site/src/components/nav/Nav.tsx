"use client";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/content/site";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight text-foreground hover:text-accent transition-colors"
        >
          {siteConfig.name}
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground transition-colors text-xs uppercase tracking-widest"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium bg-accent text-background hover:opacity-90 transition-opacity"
        >
          Let&apos;s Talk
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-foreground transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-foreground transition-all duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-foreground transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground text-xs uppercase tracking-widest"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 inline-flex w-fit px-5 py-2.5 text-sm font-medium bg-accent text-background"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
