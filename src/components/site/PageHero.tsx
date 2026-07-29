import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  actions?: ReactNode;
  align?: "left" | "center";
}

export function PageHero({ eyebrow, title, body, actions, align = "left" }: PageHeroProps) {
  return (
    <section className="surface-dark relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className={`absolute ${align === "center" ? "left-1/2 -top-[20%] -translate-x-1/2" : "-right-[10%] -top-[20%]"} h-[800px] w-[800px] rounded-full bg-[color:var(--navy-soft)] blur-[120px] mix-blend-screen opacity-30`} />
      </div>
      <div className={`container-wide relative ${align === "center" ? "text-center flex flex-col items-center" : "max-w-4xl"}`}>
        <Reveal>
          <p className="eyebrow-light eyebrow-dot">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display font-bold leading-[1.05] tracking-tight text-[color:var(--cream)] mt-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{title}</h1>
        </Reveal>
        {body && (
          <Reveal delay={140}>
            <p className="lede mt-7 text-[color:var(--cream)]/80 max-w-2xl">{body}</p>
          </Reveal>
        )}
        {actions && (
          <Reveal delay={200}>
            <div className={`mt-10 flex flex-wrap items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>{actions}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
