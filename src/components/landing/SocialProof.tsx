import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, start: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const dur = 1600;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return v;
}

const stats = [
  { v: 120000, suf: "+", l: "Garrafas vendidas" },
  { v: 4.9, suf: "/5", l: "Avaliação média", decimal: true },
  { v: 98, suf: "%", l: "Recomprariam" },
];

const testimonials = [
  {
    name: "Marina S.",
    role: "Nutricionista",
    quote: "Finalmente uma proteína que não pesa. Tomo gelada depois do treino e parece um suco mesmo.",
  },
  {
    name: "Camila R.",
    role: "Pilates instructor",
    quote: "Sem lactose, sem aquele gosto artificial. Virou meu lanche da tarde fixo.",
  },
  {
    name: "Bia M.",
    role: "Founder",
    quote: "A embalagem é linda, o sabor é viciante. Mal posso esperar pelo novo lançamento.",
  },
];

function Stat({ s, idx }: { s: typeof stats[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVis(true)),
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const val = useCountUp(s.decimal ? s.v * 10 : s.v, vis);
  const display = s.decimal ? (val / 10).toFixed(1) : val.toLocaleString("pt-BR");
  return (
    <div ref={ref} className="text-center" style={{ animationDelay: `${idx * 100}ms` }}>
      <div className="text-5xl font-black text-gradient-purple sm:text-6xl">
        {display}
        <span className="text-3xl">{s.suf}</span>
      </div>
      <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</p>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="reveal grid gap-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Stat key={s.l} s={s} idx={i} />
          ))}
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="reveal glass rounded-3xl p-7">
              <div className="flex gap-0.5 text-[var(--cta-yellow)]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-white/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-purple text-sm font-bold">
                  {t.name[0]}
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
