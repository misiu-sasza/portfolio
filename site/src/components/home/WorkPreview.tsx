import Link from "next/link";
import SectionLabel from "@/components/shared/SectionLabel";
import ProjectCard from "@/components/work/ProjectCard";
import { featuredWork } from "@/content/work";

export default function WorkPreview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Results that speak for themselves.
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:block text-xs text-muted hover:text-accent transition-colors uppercase tracking-widest"
          >
            All Work →
          </Link>
        </div>

        {featuredWork.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWork.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="border border-border p-16 text-center">
            <p className="text-muted text-sm">
              Add your first project in{" "}
              <code className="text-accent">src/content/work.ts</code>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
