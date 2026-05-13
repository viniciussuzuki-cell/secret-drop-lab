import { MysteryBottle } from "./MysteryBottle";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-4 pb-24 sm:pt-8">
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
            Imagina tomar um suco e estar tomando{" "}
            <span className="text-gradient-brand">20g de proteína.</span>
          </h1>

          <p className="mt-4 text-2xl font-semibold text-white/90 sm:text-3xl">
            Esse suco existe — e tem um <span className="italic text-[var(--brand-purple-glow)]">novo sabor</span> chegando.
          </p>

          <p className="mt-3 max-w-lg text-base text-muted-foreground sm:text-lg">
            Faça parte disso entrando na nossa comunidade e tenha acesso antecipado e condições exclusivas!
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
            <a
              href="https://chat.whatsapp.com/ItDpqYhuNNS4VgxwHSa8LI?mode=gi_t" target="_blank" rel="noopener noreferrer"
              className="pill inline-flex items-center gap-2 bg-[var(--whatsapp)] px-7 py-4 text-base font-bold text-white transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-glow-green)]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Entrar pelo WhatsApp
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
