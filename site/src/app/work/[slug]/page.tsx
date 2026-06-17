import { projects } from "@/content/work";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/shared/SectionLabel";
import VideoGallery from "@/components/work/VideoGallery";
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
      <div className="max-w-5xl mx-auto">

        {/* Breadcrumb */}
        <Link
          href="/work"
          className="text-xs text-muted hover:text-accent transition-colors uppercase tracking-widest mb-8 block"
        >
          ← All Work
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <SectionLabel>{project.category}</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2 leading-[0.92]">
            {project.title}
          </h1>
          <p className="text-muted mb-4">{project.brand}</p>
          {project.platforms && project.platforms.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.platforms.map((p) => (
                <span
                  key={p}
                  className="text-xs text-muted border border-border px-3 py-1 uppercase tracking-widest"
                >
                  {p}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="max-w-3xl grid grid-cols-3 divide-x divide-border border-y border-border py-8 mb-10">
          {project.stats.map((stat) => (
            <div key={stat.label} className="px-8 first:pl-0 last:pr-0">
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="max-w-3xl text-muted text-lg leading-relaxed mb-10">
          {project.description}
        </p>

        {/* Video gallery — full width of the 5xl container */}
        {project.videos && project.videos.length > 0 && (
          <VideoGallery videos={project.videos} />
        )}

        {/* Case study body */}
        <div className="max-w-3xl mt-10 space-y-8">
          {project.challenge && (
            <div>
              <h2 className="text-xl font-bold mb-3">The Challenge</h2>
              <p className="text-muted leading-relaxed">{project.challenge}</p>
            </div>
          )}

          {project.approach && (
            <div>
              <h2 className="text-xl font-bold mb-3">The Approach</h2>
              <p className="text-muted leading-relaxed">{project.approach}</p>
            </div>
          )}

          {project.results && (
            <div>
              <h2 className="text-xl font-bold mb-3">The Results</h2>
              <p className="text-muted leading-relaxed">{project.results}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
