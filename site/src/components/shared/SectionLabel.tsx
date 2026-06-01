export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-accent text-xs uppercase tracking-[0.2em] font-medium block">
      {children}
    </span>
  );
}
