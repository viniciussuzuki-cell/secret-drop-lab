import bottleImg from "@/assets/bottle-silhouette.png";

export function MysteryBottle() {
  return (
    <div className="relative mx-auto flex h-[520px] w-full max-w-[420px] items-center justify-center">
      {/* glow ring */}
      <div
        className="absolute h-[440px] w-[440px] rounded-full opacity-70 animate-glow-rotate"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(168,85,247,0.5), transparent 60%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute h-[300px] w-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)",
        }}
      />

      {/* floating question marks */}
      <span
        className="absolute left-6 top-12 text-5xl font-black text-[var(--brand-purple-glow)] opacity-70 animate-float-q"
        style={{ animationDelay: "0s" }}
      >
        ?
      </span>
      <span
        className="absolute right-8 top-32 text-3xl font-black text-white/60 animate-float-q"
        style={{ animationDelay: "1s" }}
      >
        ?
      </span>
      <span
        className="absolute bottom-16 left-10 text-4xl font-black text-[var(--brand-purple-glow)] opacity-60 animate-float-q"
        style={{ animationDelay: "2s" }}
      >
        ?
      </span>
      <span
        className="absolute bottom-32 right-4 text-2xl font-black text-white/50 animate-float-q"
        style={{ animationDelay: "1.5s" }}
      >
        ?
      </span>

      {/* bottle silhouette */}
      <img
        src={bottleImg}
        alt="Garrafa misteriosa no.way"
        className="relative z-10 h-[460px] w-auto animate-float-bottle drop-shadow-[0_30px_60px_rgba(124,58,237,0.55)]"
      />
    </div>
  );
}
