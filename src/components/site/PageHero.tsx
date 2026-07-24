import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  image: string;
  imageAlt: string;
  actions?: ReactNode;
  align?: "left" | "center";
}

export function PageHero({ eyebrow, title, body, image, imageAlt, actions, align = "left" }: PageHeroProps) {
  return (
    <section className="surface-dark relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(70% 60% at 100% 0%, oklch(0.32 0.06 258 / 0.8), transparent 60%), radial-gradient(50% 60% at 0% 100%, oklch(0.28 0.05 258 / 0.6), transparent 60%)",
        }}
      />
      <div className={`container-wide relative grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center ${align === "center" ? "text-center" : ""}`}>
        <div>
          <Reveal>
            <p className="eyebrow-light eyebrow-dot">{eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-1 mt-6 text-[color:var(--cream)]">{title}</h1>
          </Reveal>
          {body && (
            <Reveal delay={140}>
              <p className="lede mt-7 text-[color:var(--cream)]/80">{body}</p>
            </Reveal>
          )}
          {actions && (
            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap items-center gap-4">{actions}</div>
            </Reveal>
          )}
        </div>
        <Reveal delay={160}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-white/5" aria-hidden />
            <img
              src={image}
              alt={imageAlt}
              className="relative aspect-[5/4] w-full rounded-xl object-cover shadow-2xl ring-1 ring-white/10"
              loading="eager"
            />
            <div
              aria-hidden
              className="absolute -bottom-6 -left-6 hidden h-24 w-40 rounded-lg border border-white/15 bg-[color:var(--navy-deep)]/80 backdrop-blur md:block"
            >
              <div className="flex h-full flex-col justify-center px-4">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[color:var(--cream)]/60">
                  Est. 2011
                </p>
                <p className="mt-1 font-display text-lg text-[color:var(--cream)]">
                  600+ engineers
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
