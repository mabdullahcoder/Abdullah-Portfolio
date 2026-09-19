export function LogoMark({ className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f87171" />
          <stop offset="1" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      {/* Left leg, upper (white) and lower facet (grey) */}
      <polygon points="16,2 16,15 12.4,22.2 6.1,22.2" fill="#ffffff" />
      <polygon points="5.2,24 11.5,24 8.8,30 2,30" fill="#a1a1aa" />
      {/* Right leg, upper (white) */}
      <polygon points="16,2 26.1,22.2 19.2,22.2 16,15" fill="#ffffff" />
      {/* Right leg, lower stripe (accent red) */}
      <polygon
        points="27,24 30,30 23.2,30 20.1,24"
        fill="url(#logo-red)"
        className="origin-top-right transition-transform duration-300 [transform-box:fill-box] group-hover/logo:scale-[1.18]"
      />
    </svg>
  );
}

export default function Logo({ className = "", tagline = false }) {
  return (
    <span className={`group/logo inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover/logo:-translate-y-0.5" />

      <span className="flex flex-col leading-none">
        <span className="font-heading text-[20px] font-extrabold uppercase tracking-[0.14em] text-white">
          Abdullah
        </span>
        {tagline && (
          <span className="mt-1.5 text-[8.5px] font-medium uppercase tracking-[0.32em] text-zinc-500 transition-colors duration-300 group-hover/logo:text-zinc-300">
            Software Engineer
          </span>
        )}
      </span>
    </span>
  );
}
