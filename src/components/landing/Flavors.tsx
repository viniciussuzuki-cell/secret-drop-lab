const pills = ["20g proteína", "Sem leite", "Sem lactose", "Sem açúcar", "300ml", "Pronto pra beber"];

function FlavorBottle({ color, label }: { color: string; label: string }) {
  return (
    <svg viewBox="0 0 160 320" className="h-56 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
      <defs>
        <linearGradient id={`g-${label}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="58" y="6" width="44" height="28" rx="4" fill="#0A0612" />
      <path d="M64 34 L96 34 L94 60 L66 60 Z" fill="#150B26" />
      <path
        d="M36 70 Q36 62 50 62 L110 62 Q124 62 124 70 L124 290 Q124 308 106 308 L54 308 Q36 308 36 290 Z"
        fill={`url(#g-${label})`}
      />
      <rect x="46" y="130" width="68" height="120" rx="6" fill="#fafafa" opacity="0.95" />
      <text x="80" y="170" textAnchor="middle" fontFamily="Archivo Black" fontSize="9" fill="#0A0612" letterSpacing="1.5">
        NO.WAY
      </text>
      <text x="80" y="210" textAnchor="middle" fontFamily="Archivo Black" fontSize="11" fill={color}>
        {label}
      </text>
    </svg>
  );
}

import mysteryBottle from "@/assets/bottle-mystery.png";

function MysteryFlavorBottle() {
  return (
    <img
      src={mysteryBottle}
      alt="Novo sabor misterioso no.way Fresh+Protein"
      className="h-64 w-auto object-contain drop-shadow-[0_25px_45px_rgba(168,85,247,0.5)]"
    />
  );
}

export function Flavors() {
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black sm:text-6xl">
            Parece suco. <span className="text-gradient-brand">É proteína.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Uma nova categoria criada para quem quer proteína sem abrir mão da leveza de um suco gelado.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {pills.map((p) => (
              <span key={p} className="pill glass px-4 py-2 text-xs font-semibold text-white/90">
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="reveal glass flex flex-col items-center rounded-3xl p-8 text-center">
            <FlavorBottle color="#FF8A1F" label="LARANJA" />
            <h3 className="mt-6 text-xl font-bold text-white">Laranja</h3>
            <p className="mt-1 text-sm text-muted-foreground">Refrescante e cítrico</p>
          </div>

          <div
            className="reveal relative flex flex-col items-center rounded-3xl p-8 text-center md:scale-110"
            style={{
              background: "linear-gradient(160deg, rgba(124,58,237,0.18), rgba(168,85,247,0.08))",
              border: "1.5px solid rgba(168,85,247,0.5)",
              boxShadow: "var(--shadow-glow-purple)",
            }}
          >
            <span className="pill absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--cta-yellow)] px-4 py-1 text-[10px] font-black uppercase tracking-widest text-[#0A0612]">
              Em breve
            </span>
            <MysteryFlavorBottle />
            <h3 className="mt-4 text-2xl font-black text-white">Novo sabor</h3>
            <p className="mt-2 max-w-xs text-sm italic text-[var(--brand-purple-glow)]">
              "O próximo sabor é um clássico que todo brasileiro conhece."
            </p>
          </div>

          <div className="reveal glass flex flex-col items-center rounded-3xl p-8 text-center">
            <FlavorBottle color="#E91E63" label="PINK" />
            <h3 className="mt-6 text-xl font-bold text-white">Pink Lemonade</h3>
            <p className="mt-1 text-sm text-muted-foreground">Doce, ácido e vibrante</p>
          </div>
        </div>
      </div>
    </section>
  );
}
