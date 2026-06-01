import Link from "next/link";
import { Project } from "@/content/work";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="border border-border bg-surface flex flex-col group hover:border-accent/50 transition-colors"
    >
      {/* Cover */}
      <div
        className="h-44 flex items-center justify-center border-b border-border"
        style={{ backgroundColor: project.coverColor ?? "#161616" }}
      >
        <span className="text-muted text-xs uppercase tracking-widest">
          {project.category}
        </span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
        {project.stats.slice(0, 3).map((stat) => (
          <div key={stat.label} className="p-4 text-center">
            <p className="text-xl font-bold text-foreground">{stat.value}</p>
            <p className="text-muted text-xs mt-0.5 leading-tight">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="p-6 flex-1 flex flex-col gap-2">
        <p className="text-xs text-muted uppercase tracking-widest">
          {project.brand}
        </p>
        <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{project.description}</p>
        <p className="text-accent text-xs mt-auto pt-4">Read more →</p>
      </div>
    </Link>
  );
}
