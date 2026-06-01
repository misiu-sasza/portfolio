import SectionLabel from "@/components/shared/SectionLabel";

const services = [
  {
    title: "Social Media Strategy",
    description:
      "Platform-specific strategies built around your brand goals — not just a content calendar.",
  },
  {
    title: "Content Creation",
    description:
      "Copy, creative direction, and content systems that build audience and drive action.",
  },
  {
    title: "Email Marketing",
    description:
      "Klaviyo flows, campaigns, and segmentation strategies that turn your list into revenue.",
  },
  {
    title: "Community Management",
    description:
      "Active, consistent brand presence that builds trust and keeps audiences engaged.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Data that tells a story — tracking what works, cutting what doesn't, and reporting clearly.",
  },
  {
    title: "Paid Social",
    description:
      "Ad strategy and creative direction for social campaigns that hit their numbers.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Full-stack digital marketing.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div key={service.title} className="bg-surface p-8">
              <p className="text-accent text-lg mb-4">◈</p>
              <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
