import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "glass-strong shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Logo />
        <a
          href="https://chat.whatsapp.com/ItDpqYhuNNS4VgxwHSa8LI?mode=gi_t" target="_blank" rel="noopener noreferrer"
          className="pill bg-[var(--cta-yellow)] px-5 py-2.5 text-sm font-bold text-[#0A0612] transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-glow-yellow)]"
        >
          Entrar no grupo
        </a>
      </div>
    </header>
  );
}
