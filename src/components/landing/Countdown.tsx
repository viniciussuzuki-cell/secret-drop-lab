import { useEffect, useState } from "react";

function getTarget() {
  // 14 days from first mount, persisted in memory only
  const stored = typeof window !== "undefined" ? window.localStorage.getItem("noway_target") : null;
  if (stored) return parseInt(stored, 10);
  const t = Date.now() + 14 * 24 * 60 * 60 * 1000;
  if (typeof window !== "undefined") window.localStorage.setItem("noway_target", String(t));
  return t;
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
