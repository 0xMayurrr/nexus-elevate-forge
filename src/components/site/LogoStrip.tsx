const LOGOS = [
  "NORTHBANK",
  "ATLAS HEALTH",
  "VELA RETAIL",
  "MERIDIAN ENERGY",
  "CIVIC BUREAU",
  "AXIOM LOGISTICS",
  "PRISMA MEDIA",
];

export function LogoStrip({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div
      className={
        isDark
          ? "border-y border-white/10 bg-[color:var(--navy-deep)] py-10"
          : "border-y border-[color:var(--hairline)] bg-[color:var(--cream)] py-10"
      }
    >
      <div className="container-wide">
        <p
          className={
            isDark
              ? "eyebrow-light text-center"
              : "eyebrow text-center"
          }
        >
          Trusted by ambitious enterprises worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {LOGOS.map((l) => (
            <div
              key={l}
              className={`text-center font-display text-sm font-semibold tracking-[0.18em] ${isDark ? "text-[color:var(--cream)]/60" : "text-[color:var(--slate-ink)]/55"}`}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
