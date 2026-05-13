import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Countdown } from "./Countdown";

type Tab = "whatsapp" | "email";

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function getUtm() {
  if (typeof window === "undefined") return {};
  const sp = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
    const v = sp.get(k);
    if (v) out[k] = v;
  });
  return out;
}

export function LeadForm() {
  const [tab, setTab] = useState<Tab>("whatsapp");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [spots, setSpots] = useState(347);

  const utm = useMemo(getUtm, []);

  useEffect(() => {
    const i = setInterval(() => {
      setSpots((s) => (s > 120 ? s - (Math.random() < 0.3 ? 1 : 0) : s));
    }, 8000);
    return () => clearInterval(i);
  }, []);

  function validate() {
    const e: Record<string, string> = {};
    if (name.trim().length < 2) e.name = "Digite seu nome completo";
    if (tab === "whatsapp") {
      if (phone.replace(/\D/g, "").length < 10) e.phone = "Telefone inválido";
    } else {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email inválido";
    }
    setErrs(e);
    return Object.keys(e).length === 0;
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const payload = {
      channel: tab,
      name: name.trim(),
      phone: phone.replace(/\D/g, ""),
      email: email.trim(),
      ...utm,
      ts: new Date().toISOString(),
    };
    try {
      // Webhook placeholder — replace WEBHOOK_URL via integration later
      const url = (typeof window !== "undefined" && (window as any).NOWAY_WEBHOOK) || "";
      if (url) {
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => null);
      }
      await new Promise((r) => setTimeout(r, 700));
      setDone(true);
      setSpots((s) => Math.max(100, s - 1));
      toast.success("Você está na lista VIP! 🎉", {
        description: "Em breve você receberá novidades em primeira mão.",
      });
    } catch {
      toast.error("Algo deu errado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="vip" className="relative px-5 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="reveal mb-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-purple-glow)]">
            Acesso antecipado
          </p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Garanta sua <span className="text-gradient-brand">vaga VIP</span>
          </h2>
        </div>

        {/* urgency bar */}
        <div className="reveal glass mb-6 flex items-center justify-between gap-4 rounded-2xl px-5 py-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-green)] animate-pulse-dot" />
            <span className="font-semibold text-white">{spots} vagas restantes</span>
            <span className="text-muted-foreground">de 500</span>
          </div>
          <Countdown compact />
        </div>

        <div className="reveal glass-strong relative overflow-hidden rounded-[28px] p-7 sm:p-9">
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)" }}
          />

          {done ? (
            <div className="relative py-10 text-center">
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-green)]/20 text-3xl">
                ✓
              </div>
              <h3 className="mt-4 text-2xl font-black text-white">Você está dentro!</h3>
              <p className="mt-2 text-muted-foreground">
                Bem-vindo(a) à lista VIP. Fique de olho no {tab === "whatsapp" ? "WhatsApp" : "email"}.
              </p>
            </div>
          ) : (
            <>
              <div className="relative mb-6 grid grid-cols-2 gap-1 rounded-full bg-black/30 p-1">
                {(["whatsapp", "email"] as Tab[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`pill px-4 py-2.5 text-sm font-semibold capitalize transition-all ${
                      tab === t
                        ? "bg-gradient-purple text-white shadow-[var(--shadow-glow-purple)]"
                        : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    {t === "whatsapp" ? "WhatsApp" : "Email"}
                  </button>
                ))}
              </div>

              <form onSubmit={submit} className="relative space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={80}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-muted-foreground focus:border-[var(--brand-purple-glow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple-glow)]/30"
                  />
                  {errs.name && <p className="mt-1.5 px-2 text-xs text-[var(--pink-lemon)]">{errs.name}</p>}
                </div>

                {tab === "whatsapp" ? (
                  <div>
                    <input
                      type="tel"
                      inputMode="tel"
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(maskPhone(e.target.value))}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-muted-foreground focus:border-[var(--brand-purple-glow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple-glow)]/30"
                    />
                    {errs.phone && <p className="mt-1.5 px-2 text-xs text-[var(--pink-lemon)]">{errs.phone}</p>}
                  </div>
                ) : (
                  <div>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={120}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-muted-foreground focus:border-[var(--brand-purple-glow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple-glow)]/30"
                    />
                    {errs.email && <p className="mt-1.5 px-2 text-xs text-[var(--pink-lemon)]">{errs.email}</p>}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="pill w-full bg-[var(--cta-yellow)] px-7 py-4 text-base font-black text-[#0A0612] transition-all hover:scale-[1.01] hover:shadow-[var(--shadow-glow-yellow)] disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Quero minha vaga VIP →"}
                </button>

                <p className="text-center text-[11px] text-muted-foreground">
                  Ao se inscrever você concorda em receber comunicações da no.way. Sem spam.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
