import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 pb-10 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Proteína que parece suco. Leve, refrescante e pronta para beber.
            </p>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[var(--brand-purple-glow)]">
              Em cada garrafa
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>20g de proteína</li>
              <li>0g de açúcar adicionado</li>
              <li>0g de lactose</li>
              <li>300ml — pronto para beber</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[var(--brand-purple-glow)]">
              Legal
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-white">Termos de uso</a></li>
              <li><a href="#" className="hover:text-white">Política de privacidade</a></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} no.way Fresh+Protein. Todos os direitos reservados.</p>
          <p>Feito com obsessão por leveza.</p>
        </div>
      </div>
    </footer>
  );
}
