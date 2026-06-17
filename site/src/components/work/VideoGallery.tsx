import { siteConfig } from "@/content/site";

export default function VideoGallery({ videos }: { videos: string[] }) {
  return (
    <div className="py-10 border-y border-border">
      <p className="text-xs text-muted uppercase tracking-[0.2em] mb-6">
        The Work
      </p>
      <div className="flex flex-wrap gap-4">
        {videos.map((filename, i) => (
          <div
            key={i}
            className="w-[220px] flex-shrink-0 bg-surface overflow-hidden border border-border"
            style={{ aspectRatio: "9/16" }}
          >
            <video
              src={`${siteConfig.mediaBaseUrl}/${filename}`}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
