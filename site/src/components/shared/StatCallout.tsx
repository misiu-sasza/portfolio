export default function StatCallout({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-4xl md:text-5xl font-bold text-foreground">{value}</p>
      <p className="text-muted text-xs uppercase tracking-widest mt-2">{label}</p>
    </div>
  );
}
