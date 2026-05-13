import laranjaBottle from "@/assets/bottle-laranja.png";
import pinkBottle from "@/assets/bottle-pink.jpg";
import mysteryBottle from "@/assets/bottle-mystery.png";

const pills = ["20g proteína", "Sem leite", "Sem lactose", "Sem açúcar", "300ml", "Pronto pra beber"];

function FlavorPhoto({ src, alt, glow }: { src: string; alt: string; glow: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-64 w-auto object-contain"
      style={{ filter: `drop-shadow(0 25px 45px ${glow})` }}
    />
  );
}

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
            <FlavorPhoto src={laranjaBottle} alt="no.way Fresh+Protein sabor Laranja" glow="rgba(255,138,31,0.45)" />
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
            <FlavorPhoto src={pinkBottle} alt="no.way Fresh+Protein sabor Pink Lemonade" glow="rgba(233,30,99,0.45)" />
            <h3 className="mt-6 text-xl font-bold text-white">Pink Lemonade</h3>
            <p className="mt-1 text-sm text-muted-foreground">Doce, ácido e vibrante</p>
          </div>
        </div>
      </div>
    </section>
  );
}
