import logoHorizontal from "@/assets/logo.png";
import logoStacked from "@/assets/logo-stacked.png";

export function Logo({ className = "", variant = "horizontal" }: { className?: string; variant?: "horizontal" | "stacked" }) {
  const src = variant === "stacked" ? logoStacked : logoHorizontal;
  return (
    <img
      src={src}
      alt="no.way Fresh+Protein"
      className={`${variant === "stacked" ? "h-16 w-auto" : "h-8 w-auto"} ${className}`}
    />
  );
}
