export function Topbar() {
  return (
    <div className="relative z-50 w-full bg-gradient-purple text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--brand-green)] animate-pulse-dot" />
        </span>
        <span className="opacity-95">Lançamento Exclusivo • Vagas Limitadas no Acesso Antecipado</span>
      </div>
    </div>
  );
}
