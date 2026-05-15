import { MysteryBottle } from "./MysteryBottle";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-4 pb-8 sm:pt-8 sm:pb-12">
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.35), transparent 60%)" }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <span className="pill inline-flex items-center gap-2 border border-[var(--brand-purple-glow)]/40 bg-[var(--brand-purple-deep)]/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-purple-glow)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-purple-glow)] animate-pulse-dot" />
            Vagas Limitadas
          </span>

          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Novo sabor do suco proteico da{" "}
            <span className="text-gradient-brand">Noway chegando.</span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-white/90 sm:text-2xl">
            Entre no grupo de lançamento e tenha <span className="italic text-[var(--brand-purple-glow)]">desconto exclusivo</span> e acesso antecipado.
          </p>

          <div className="mt-5">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              O lançamento começa em
            </p>
            <Countdown />
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://chat.whatsapp.com/ItDpqYhuNNS4VgxwHSa8LI?mode=gi_t" target="_blank" rel="noopener noreferrer"
              className="pill inline-flex items-center gap-2 bg-[var(--cta-yellow)] px-7 py-4 text-base font-bold text-[#0A0612] transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-glow-yellow)]"
            >
              Entrar no grupo →
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {[
              { l: "Acesso antecipado", c: "var(--brand-green)" },
              { l: "Desconto exclusivo", c: "var(--cta-yellow)" },
            ].map((t) => (
              <span key={t.l} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: t.c }} />
                {t.l}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal">
          <MysteryBottle />
        </div>
      </div>
    </section>
  );
}
