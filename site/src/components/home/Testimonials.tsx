import SectionLabel from "@/components/shared/SectionLabel";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="py-24 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What people say.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-border bg-surface p-6 flex flex-col gap-4"
            >
              <p className="text-foreground leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-border">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.title}, {t.brand}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
