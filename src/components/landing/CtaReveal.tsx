export function CtaReveal() {
  return (
    <section className="relative px-5 py-20">
      <div
        className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[32px] p-10 text-center sm:p-16"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,20,102,0.9), rgba(124,58,237,0.7), rgba(168,85,247,0.5))",
          boxShadow: "var(--shadow-glow-purple)",
        }}
      >
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,212,1,0.2), transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(31,181,124,0.2), transparent 70%)" }}
        />
        <div className="relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">
            O lançamento está chegando
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
            Seja um dos primeiros a provar o <span className="italic text-[var(--cta-yellow)]">novo sabor.</span>
          </h2>
          <a
            href="https://chat.whatsapp.com/ItDpqYhuNNS4VgxwHSa8LI?mode=gi_t" target="_blank" rel="noopener noreferrer"
            className="pill mt-8 inline-flex items-center gap-2 bg-[var(--cta-yellow)] px-8 py-4 text-base font-bold text-[#0A0612] transition-all hover:scale-[1.04] hover:shadow-[var(--shadow-glow-yellow)]"
          >
            Garantir minha vaga →
          </a>
        </div>
      </div>
    </section>
  );
}
