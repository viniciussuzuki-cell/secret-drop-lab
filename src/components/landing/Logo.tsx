export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-2xl tracking-tight ${className}`} style={{ fontFamily: "var(--font-display)" }}>
      <span style={{ color: "var(--brand-green)" }}>no</span>
      <span className="text-foreground">.way</span>
    </span>
  );
}
