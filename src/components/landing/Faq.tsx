import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "O que é a no.way?",
    a: "Uma nova categoria: proteína que parece suco. 20g de proteína de colágeno hidrolisado por garrafa, sem leite, sem lactose e sem açúcar adicionado. Leve, refrescante e pronta para beber.",
  },
  {
    q: "Qual é o novo sabor?",
    a: "Esse é o segredo do lançamento. Só quem entrar na lista VIP descobre antes — e prova primeiro. Dica: é um clássico que todo brasileiro conhece.",
  },
  {
    q: "Tem lactose ou leite?",
    a: "Não. A no.way usa proteína de colágeno hidrolisado, então é livre de lactose e livre de leite. Ideal para quem tem intolerância ou prefere evitar laticínios.",
  },
  {
    q: "Quanto vai custar?",
    a: "O preço de lançamento é exclusivo para a lista VIP. Quem entra agora garante a melhor condição e brindes surpresa para os primeiros 500 inscritos.",
  },
  {
    q: "Para onde vocês entregam?",
    a: "Para todo o Brasil. Quem está na lista VIP recebe acesso antecipado e prioridade no envio assim que o lançamento começar.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="reveal mb-12 text-center">
          <h2 className="text-4xl font-black sm:text-5xl">
            Perguntas <span className="text-gradient-purple">frequentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`reveal glass overflow-hidden rounded-2xl transition-all duration-300 ${
                  isOpen ? "border-[var(--brand-purple-glow)]/50 shadow-[var(--shadow-glow-purple)]" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-bold text-white sm:text-lg">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-[var(--brand-purple-glow)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
