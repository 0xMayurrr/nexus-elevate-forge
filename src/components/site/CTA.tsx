import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface CTAProps {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export function CTA({
  eyebrow = "Partner with us",
  title,
  body,
  primaryLabel = "Book a strategy session",
  primaryTo = "/about",
  secondaryLabel = "Explore services",
  secondaryTo = "/services",
}: CTAProps) {
  return (
    <section className="surface-dark relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 0%, oklch(0.35 0.06 258 / 0.7), transparent 60%), radial-gradient(50% 50% at 0% 100%, oklch(0.3 0.05 258 / 0.6), transparent 60%)",
        }}
      />
      <div className="container-wide section-pad relative">
        <Reveal>
          <p className="eyebrow-light eyebrow-dot">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display-2 mt-6 max-w-4xl text-[color:var(--cream)]">{title}</h2>
        </Reveal>
        {body && (
          <Reveal delay={140}>
            <p className="lede mt-6 text-[color:var(--cream)]/75">{body}</p>
          </Reveal>
        )}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to={primaryTo} className="btn-solid-light">
              {primaryLabel} <ArrowUpRight className="size-4" />
            </Link>
            <Link to={secondaryTo} className="btn-ghost-dark">
              {secondaryLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
