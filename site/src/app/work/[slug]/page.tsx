import { projects } from "@/content/work";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/shared/SectionLabel";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <Link
          href="/work"
          className="text-xs text-muted hover:text-accent transition-colors uppercase tracking-widest mb-8 block"
        >
          ← All Work
        </Link>

        <div className="mb-10">
          <SectionLabel>{project.category}</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2 leading-[0.92]">
            {project.title}
          </h1>
          <p className="text-muted">{project.brand}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-border border-y border-border py-8 mb-12">
          {project.stats.map((stat) => (
            <div key={stat.label} className="px-8 first:pl-0 last:pr-0">
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-muted text-lg leading-relaxed mb-10">
          {project.description}
        </p>

        {project.challenge && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">The Challenge</h2>
            <p className="text-muted leading-relaxed">{project.challenge}</p>
          </div>
        )}

        {project.approach && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">The Approach</h2>
            <p className="text-muted leading-relaxed">{project.approach}</p>
          </div>
        )}

        {project.results && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">The Results</h2>
            <p className="text-muted leading-relaxed">{project.results}</p>
          </div>
        )}
      </div>
    </div>
  );
}
