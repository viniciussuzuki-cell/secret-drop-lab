import { Clock, Tag, Users, Gift } from "lucide-react";

const items = [
  { icon: Clock, title: "Acesso antecipado", desc: "Receba o novo sabor antes de qualquer pessoa, com envio prioritário." },
  { icon: Tag, title: "Preço exclusivo", desc: "Condição especial de lançamento, válida apenas para a lista VIP." },
  { icon: Users, title: "Grupo VIP", desc: "Comunidade fechada com novidades, sorteios e bastidores da marca." },
  { icon: Gift, title: "Brindes surpresa", desc: "Kits limitados e itens colecionáveis para os primeiros 500 inscritos." },
];

export function Benefits() {
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-purple-glow)]">
            Lista VIP
          </p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Benefícios <span className="text-gradient-purple">exclusivos</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Quem entra agora recebe muito mais do que o sabor. Recebe a experiência completa de lançamento.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--brand-purple-glow)]/40"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)" }}
              />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-purple-deep)]/60 ring-1 ring-[var(--brand-purple-glow)]/30">
                  <it.icon className="h-5 w-5 text-[var(--brand-purple-glow)]" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
