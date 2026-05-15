import { useEffect, useState } from "react";

// Lançamento: 20 de maio de 2026, 09:00 (horário de Brasília, UTC-3)
const TARGET = new Date("2026-05-20T09:00:00-03:00").getTime();
function getTarget() {
  return TARGET;
}

export function Countdown({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState(Date.now());
  const [target, setTarget] = useState<number | null>(null);

  useEffect(() => {
    setTarget(getTarget());
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);

  const diff = Math.max(0, (target ?? Date.now()) - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const items = [
    { v: d, l: "dias" },
    { v: h, l: "horas" },
    { v: m, l: "min" },
    { v: s, l: "seg" },
  ];

  return (
    <div className={`flex gap-2 ${compact ? "" : "sm:gap-3"}`}>
      {items.map((it) => (
        <div
          key={it.l}
          className="glass flex min-w-[64px] flex-col items-center rounded-2xl px-3 py-2.5"
        >
          <span
            className="text-xl font-black text-white tabular-nums sm:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {String(it.v).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {it.l}
          </span>
        </div>
      ))}
    </div>
  );
}
