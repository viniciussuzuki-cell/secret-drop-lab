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

      {/* bottle SVG */}
      <svg
        viewBox="0 0 220 460"
        className="relative z-10 h-[440px] animate-float-bottle drop-shadow-[0_30px_60px_rgba(124,58,237,0.4)]"
      >
        <defs>
          <linearGradient id="bottleBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1F0F38" />
            <stop offset="50%" stopColor="#0A0612" />
            <stop offset="100%" stopColor="#3B1466" />
          </linearGradient>
          <linearGradient id="bottleHighlight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(168,85,247,0.6)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#3B1466" />
          </linearGradient>
        </defs>
        {/* cap */}
        <rect x="78" y="10" width="64" height="40" rx="6" fill="url(#cap)" />
        {/* neck */}
        <path d="M88 50 L132 50 L130 90 L90 90 Z" fill="#150B26" />
        {/* body */}
        <path
          d="M50 100 Q50 90 70 90 L150 90 Q170 90 170 100 L170 420 Q170 445 145 445 L75 445 Q50 445 50 420 Z"
          fill="url(#bottleBody)"
          stroke="rgba(168,85,247,0.4)"
          strokeWidth="1.5"
        />
        {/* highlight */}
        <path
          d="M60 110 Q60 100 75 100 L85 100 L80 430 Q80 440 70 440 Q60 440 60 430 Z"
          fill="url(#bottleHighlight)"
          opacity="0.5"
        />
        {/* label */}
        <rect
          x="65"
          y="180"
          width="140"
          height="180"
          rx="8"
          fill="#fafafa"
          opacity="0.95"
        />
        <text
          x="135"
          y="240"
          textAnchor="middle"
          fontFamily="Archivo Black, sans-serif"
          fontSize="14"
          fill="#0A0612"
          letterSpacing="2"
        >
          NO.WAY
        </text>
        <text
          x="135"
          y="258"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontSize="7"
          fill="#7C3AED"
          letterSpacing="3"
          fontWeight="700"
        >
          FRESH + PROTEIN
        </text>
        <text
          x="135"
          y="320"
          textAnchor="middle"
          fontFamily="Archivo Black, sans-serif"
          fontSize="64"
          fill="#7C3AED"
        >
          ???
        </text>
        <text
          x="135"
          y="345"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontSize="8"
          fill="#0A0612"
          letterSpacing="2"
          fontWeight="600"
        >
          NOVO SABOR · 300ML
        </text>
      </svg>
    </div>
  );
}
