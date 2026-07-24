import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const COLS = [
  {
    title: "Services",
    links: [
      ["AI & Data", "/services"],
      ["Cloud Modernization", "/services"],
      ["Engineering", "/services"],
      ["Digital Operations", "/services"],
      ["Cybersecurity", "/services"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Financial Services", "/solutions"],
      ["Healthcare", "/solutions"],
      ["Retail & Consumer", "/solutions"],
      ["Public Sector", "/solutions"],
      ["Manufacturing", "/solutions"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Partners", "/partners"],
      ["Portfolio", "/portfolio"],
      ["Insights", "/insights"],
      ["Careers", "/about"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="surface-dark relative overflow-hidden">
      <div className="container-wide section-pad-sm">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5 text-[color:var(--cream)]">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="var(--cream)" strokeWidth="1.4" opacity="0.35" />
                <path d="M6 22 L14 10 L18 18 L26 8" stroke="var(--cream)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="26" cy="8" r="2" fill="var(--gold)" />
              </svg>
              <span className="font-display text-lg font-semibold">MindtreeNexus</span>
            </Link>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-[color:var(--cream)]/70">
              An AI, cloud and engineering partner to enterprises building
              intelligent, resilient operations for the next decade.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[color:var(--cream)]/70">
              <a href="mailto:hello@mindtreenexus.com" className="hover:text-[color:var(--cream)]">
                hello@mindtreenexus.com
              </a>
              <span className="opacity-30">/</span>
              <a href="tel:+18885551200" className="hover:text-[color:var(--cream)]">
                +1 888 555 1200
              </a>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow-light">{col.title}</p>
              <ul className="mt-6 space-y-3.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-[0.95rem] text-[color:var(--cream)]/85 transition-colors hover:text-[color:var(--cream)]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow-light">Global Offices</p>
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-[color:var(--cream)]/75">
              New York · London · Singapore · Sydney · Bengaluru · Toronto
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--cream)] px-5 py-3 text-sm font-medium text-[color:var(--navy-deep)] transition-transform hover:-translate-y-0.5"
          >
            Start a conversation <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-[color:var(--cream)]/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MindtreeNexus. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-[color:var(--cream)]">Privacy</a>
            <a href="#" className="hover:text-[color:var(--cream)]">Terms</a>
            <a href="#" className="hover:text-[color:var(--cream)]">Modern Slavery</a>
            <a href="#" className="hover:text-[color:var(--cream)]">Responsible AI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
