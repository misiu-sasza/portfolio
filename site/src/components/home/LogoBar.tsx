import { siteConfig } from "@/content/site";

export default function LogoBar() {
  const brands = siteConfig.brands;
  if (!brands.length) return null;

  const doubled = [...brands, ...brands];

  return (
    <section className="border-y border-border py-6 overflow-hidden">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {doubled.map((brand, i) => (
          <span
            key={i}
            className="text-muted text-xs uppercase tracking-[0.2em] font-medium shrink-0"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
