import SectionLabel from "@/components/shared/SectionLabel";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/content/work";

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4 leading-[0.92]">
            Selected Work
          </h1>
          <p className="text-muted text-lg max-w-lg">
            10 years of campaigns, social strategies, and email programs —
            here&apos;s a look at what&apos;s moved the needle.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="border border-border p-20 text-center">
            <p className="text-muted text-sm">
              Add your projects in{" "}
              <code className="text-accent">src/content/work.ts</code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
