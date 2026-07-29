import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Award, Handshake } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";

import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Alliances | MindtreeNexus" },
      { name: "description", content: "Our ecosystem of hyperscaler, platform and specialist partners — the alliances that make ambitious programs possible." },
      { property: "og:title", content: "MindtreeNexus Partners" },
      { property: "og:description", content: "Strategic partnerships across cloud, data, AI and security ecosystems." },
    ],
  }),
  component: PartnersPage,
});

const BrandLogos: Record<string, React.ReactNode> = {
  "Amazon Web Services": (
    <svg viewBox="0 0 100 100" className="h-10 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#232F3E" d="M60.7 72.8c-7.9 3.1-17.1 4.7-26.6 4.7-18.7 0-35.1-7.2-46.7-18.9 11.2 12.3 27.6 20.2 45.7 20.2 9.5 0 18.7-1.7 27.1-4.9-1.9-2.3-4.1-4.7-6.5-6.8-2 1.4-4.2 2.7-6.5 3.9-6.3 3.3-13.4 5.1-20.9 5.1-12.8 0-24.8-4.9-33.8-13.4 11 11.7 26.6 19.3 43.8 19.3 7 0 13.8-1.2 20.1-3.3-1.8-2.2-3.8-4.5-5.9-6.8-3.1 1.6-6.4 2.8-9.8 3.6z" />
      <path fill="#FF9900" d="M69.8 61c4.4 3 10.3 5.4 16.5 6.7-5.8 4.7-12.8 8.1-20.3 9.9 2-2.3 3.9-4.8 5.7-7.4-4-1.2-7.8-2.9-11.4-5 3.3-1.6 6.5-3.6 9.5-6.2z" />
      <path fill="#232F3E" d="M21.1 27.2l8.8 26.2h7.6l8-21.7 7.7 21.7h7.7L69 27.2h-7.3l-5.6 19.4-7.5-19.4h-7.6l-7.7 19.4L28.1 27.2h-7zM79.2 41c0-4.9-2.3-7.5-6.7-7.5-3 0-5.7 1.4-7.2 3.9v3.2c1.7-2.3 4-3.5 6.6-3.5 1.8 0 2.8.9 2.8 2.6v1.1c-1.3-.3-2.9-.5-4.5-.5-5.3 0-8.6 2.4-8.6 6.6 0 3.7 2.6 6 6.4 6 3 0 5.4-1.4 6.7-3.6v3.2h6.7V41zm-6.6 5c0 2.2-1.4 3.7-3.7 3.7-1.8 0-2.8-1-2.8-2.5 0-1.8 1.4-2.7 4.1-2.7.9 0 1.8.1 2.4.2v1.3z" />
    </svg>
  ),
  "Microsoft Azure": (
    <svg viewBox="0 0 100 100" className="h-8 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#F25022" d="M46.5 46.5H12V12h34.5v34.5z" />
      <path fill="#7FBA00" d="M88 46.5H53.5V12H88v34.5z" />
      <path fill="#00A4EF" d="M46.5 88H12V53.5h34.5V88z" />
      <path fill="#FFB900" d="M88 88H53.5V53.5H88V88z" />
    </svg>
  ),
  "Google Cloud": (
    <svg viewBox="0 0 100 100" className="h-8 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#4285F4" d="M68 62H26a20 20 0 01-4-39.6A28 28 0 0174 34a20 20 0 01-6 28z" />
      <path fill="#34A853" d="M46 22a28 28 0 0128 12 20 20 0 01-6 28H46V22z" />
      <path fill="#FBBC04" d="M26 62a20 20 0 01-4-39.6A28 28 0 0146 22v40H26z" />
      <path fill="#EA4335" d="M68 62A20 20 0 0148 42h26a20 20 0 01-6 20z" />
    </svg>
  ),
  "Snowflake": (
    <svg viewBox="0 0 100 100" className="h-10 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#29B5E8" d="M50 2L30 13.5v23L50 48l20-11.5v-23L50 2zm0 9l12 6.9v13.8L50 38.6 38 31.7V17.9L50 11zm-24 28L6 50.5 26 62v23l20-11.5V50.5l-20-11.5zm6 17v-13.8L20 35.3 8 42.2l12 6.9v13.8l12-6.9zm42-17l-20 11.5v23L74 85V62l20-11.5L74 39zm-6 17l12-6.9-12-6.9L56 35.3v13.8l12 6.9v-13.8zM50 63L30 74.5v23L50 109l20-11.5v-23L50 63zm0 9l12 6.9v13.8L50 99.6 38 92.7V78.9L50 72z" />
    </svg>
  ),
  "Databricks": (
    <svg viewBox="0 0 100 100" className="h-10 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#FF3621" d="M12 21.7L50 0l38 21.7v56.6L50 100 12 78.3V21.7zm10.7 7.4v41.8L50 86.5l27.3-15.6V29.1L50 13.5 22.7 29.1zm22.2 12.8L58.5 49l-13.6 7.1-13.6-7.1 13.6-7.1z" />
    </svg>
  ),
  "OpenAI": (
    <svg viewBox="0 0 100 100" className="h-9 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#10A37F" d="M50 10a40 40 0 100 80 40 40 0 000-80zm0 15a25 25 0 110 50 25 25 0 010-50z" />
      <circle cx="50" cy="50" r="10" fill="#10A37F" />
    </svg>
  ),
  "Anthropic": (
    <svg viewBox="0 0 100 100" className="h-8 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#CC785C" d="M25 80L50 20l25 60H62L50 50l-12 30H25zm25-18l6-16 6 16H50z" />
    </svg>
  ),
  "NVIDIA": (
    <svg viewBox="0 0 100 100" className="h-8 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#76B900" d="M15 50c0-19.3 15.7-35 35-35s35 15.7 35 35c0 14-8.2 26-20 31.4V68c6.6-4.2 11-11.6 11-20 0-13.2-10.8-24-24-24S28 34.8 28 48c0 8.4 4.4 15.8 11 20V81.4C23.2 76 15 64 15 50z" />
      <circle cx="50" cy="48" r="8" fill="#76B900" />
    </svg>
  ),
  "Salesforce": (
    <svg viewBox="0 0 100 100" className="h-9 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#00A1E0" d="M42 22a22 22 0 0120 13 18 18 0 0119 18 19 19 0 01-19 19H34A19 19 0 0115 53a19 19 0 0113-18 22 22 0 0114-13z" />
    </svg>
  ),
  "ServiceNow": (
    <svg viewBox="0 0 100 100" className="h-8 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#81B5A1" d="M50 20a30 30 0 100 60 30 30 0 000-60zm0 15a15 15 0 110 30 15 15 0 010-30z" />
      <circle cx="50" cy="50" r="7" fill="#293E40" />
    </svg>
  ),
  "SAP": (
    <svg viewBox="0 0 100 100" className="h-8 w-auto" preserveAspectRatio="xMidYMid meet">
      <rect width="90" height="50" x="5" y="25" fill="#008FD3" rx="4" />
      <text x="50" y="58" fill="#FFFFFF" fontSize="28" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">SAP</text>
    </svg>
  ),
  "Workday": (
    <svg viewBox="0 0 100 100" className="h-8 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#005CB9" d="M10 35l15 40 15-30 10 20 15-30 15 40H70L60 55l-10 20-15-30-10 20L15 35H10z" />
      <circle cx="50" cy="22" r="7" fill="#E28C00" />
    </svg>
  ),
  "CrowdStrike": (
    <svg viewBox="0 0 100 100" className="h-8 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#FC0000" d="M20 70L50 20l30 50-20-10-10 20-10-20L20 70z" />
    </svg>
  ),
  "Palo Alto Networks": (
    <svg viewBox="0 0 100 100" className="h-8 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#FA5821" d="M50 15L20 30v25c0 20 30 35 30 35s30-15 30-35V30L50 15z" />
    </svg>
  ),
  "Okta": (
    <svg viewBox="0 0 100 100" className="h-8 w-auto" preserveAspectRatio="xMidYMid meet">
      <circle cx="50" cy="50" r="32" fill="#007DC1" />
      <circle cx="50" cy="50" r="16" fill="#FFFFFF" />
    </svg>
  ),
  "Wiz": (
    <svg viewBox="0 0 100 100" className="h-8 w-auto" preserveAspectRatio="xMidYMid meet">
      <path fill="#1A56DB" d="M50 15L15 40v30l35 20 35-20V40L50 15zm0 18l20 12-20 12-20-12 20-12z" />
    </svg>
  )
};

const TIERS = [
  { tier: "Strategic Cloud", partners: ["Amazon Web Services", "Microsoft Azure", "Google Cloud"] },
  { tier: "Data & AI", partners: ["Databricks", "Snowflake", "OpenAI", "Anthropic", "NVIDIA"] },
  { tier: "Platforms", partners: ["Salesforce", "ServiceNow", "SAP", "Workday"] },
  { tier: "Security", partners: ["CrowdStrike", "Palo Alto Networks", "Okta", "Wiz"] },
];

const BENEFITS = [
  { icon: Handshake, t: "Preferred access", b: "Early access to roadmaps, betas and executive escalation across our partner ecosystem." },
  { icon: ShieldCheck, t: "Certified engineering", b: "Deep-bench certified engineers across every tier-one platform we recommend." },
  { icon: Award, t: "Joint investment", b: "Co-invested delivery centers, industry pods and shared responsible-AI programs." },
];

function PartnersPage() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <Header />
      <main>
        {/* BESPOKE PARTNERS HERO: Marquee Layout */}
        <section className="surface-dark relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-36 border-b border-white/10">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--navy-soft) 0%, transparent 50%)' }} />

          <div className="relative z-10">
            <Reveal>
              <div className="container-wide mb-8">
                <p className="eyebrow-light eyebrow-dot">Partners & Ecosystem</p>
              </div>
            </Reveal>

            {/* Massive scrolling text effect */}
            <div className="relative overflow-hidden whitespace-nowrap opacity-90 py-4">
              <div className="animate-marquee inline-flex items-center gap-24 pr-24 font-display font-bold text-[color:var(--cream)]/10" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1 }}>
                {Array(6).fill(null).map((_, i) => (
                  <React.Fragment key={i}>
                    <span className="flex items-center gap-6">{BrandLogos["Amazon Web Services"]} AWS</span>
                    <span>·</span>
                    <span className="flex items-center gap-6">{BrandLogos["Microsoft Azure"]} AZURE</span>
                    <span>·</span>
                    <span className="flex items-center gap-6">{BrandLogos["Google Cloud"]} GOOGLE CLOUD</span>
                    <span>·</span>
                    <span className="flex items-center gap-6">{BrandLogos["Snowflake"]} SNOWFLAKE</span>
                    <span>·</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="container-wide mt-12">
              <Reveal delay={80}>
                <h1 className="font-display font-bold leading-[1.05] tracking-tight text-[color:var(--cream)] max-w-4xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  Certified depth across the modern technology stack.
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede mt-8 text-[color:var(--cream)]/80">
                  We don't do vendor-neutral. We believe in taking a strong, opinionated stance on the best platforms, and building the deepest engineering talent pool in the market for them.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-12">
                  <Link to="/about" className="btn-solid-light px-8 py-3 rounded-2xl font-bold">
                    Talk to our engineering leads
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="section-pad">
          <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow eyebrow-dot">Ecosystem</p>
                <h2 className="display-2 mt-5">Chosen for depth, not badges.</h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="lede">
                Every partner in our ecosystem earns its place through client outcomes — measured on delivered programs, not marketing tiers. We are intentionally selective so our teams can go deep on the platforms we recommend, and stay accountable for how they perform in your environment.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Partner grid */}
        <section className="surface-cream border-y border-[color:var(--hairline)] section-pad">
          <div className="container-wide">
            <Reveal><p className="eyebrow eyebrow-dot">Our partners</p></Reveal>
            <Reveal delay={80}><h2 className="display-2 mt-5 max-w-3xl">The platforms behind our programs.</h2></Reveal>

            <div className="mt-14 space-y-14">
              {TIERS.map((t) => (
                <Reveal key={t.tier}>
                  <div>
                    <div className="flex items-baseline justify-between border-b border-[color:var(--hairline)] pb-4">
                      <h3 className="font-display text-xl font-semibold">{t.tier}</h3>
                      <span className="text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--metal)]">{t.partners.length} partners</span>
                    </div>
                    <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                      {t.partners.map((p) => (
                        <li
                          key={p}
                          className="card-elev flex h-32 flex-col items-center justify-center gap-3 p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                          {BrandLogos[p] ? (
                            <div className="flex h-10 items-center justify-center">
                              {BrandLogos[p]}
                            </div>
                          ) : null}
                          <span className="font-display text-xs font-semibold tracking-tight text-[color:var(--slate-ink)]">
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-pad">
          <div className="container-wide">
            <Reveal><p className="eyebrow eyebrow-dot">Benefits of the ecosystem</p></Reveal>
            <Reveal delay={80}><h2 className="display-2 mt-5 max-w-3xl">What our clients get from our alliances.</h2></Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {BENEFITS.map(({ icon: Icon, t, b }, i) => (
                <Reveal key={t} delay={i * 80}>
                  <article className="card-elev card-elev-hover h-full p-8">
                    <span className="inline-flex size-11 items-center justify-center rounded-md border border-[color:var(--hairline)] bg-[color:var(--cream)]">
                      <Icon className="size-5 text-[color:var(--navy-deep)]" />
                    </span>
                    <h3 className="mt-8 font-display text-xl font-semibold">{t}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--muted-foreground)]">{b}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="surface-dark section-pad">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Reveal><p className="eyebrow-light eyebrow-dot">Certifications & compliance</p></Reveal>
                <Reveal delay={80}><h2 className="display-2 mt-5 text-[color:var(--cream)]">The bars we hold ourselves to.</h2></Reveal>
              </div>
              <Reveal delay={120}><p className="lede text-[color:var(--cream)]/75">Independently audited. Continuously renewed. Available on request for procurement and risk teams.</p></Reveal>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["ISO 27001", "SOC 2 Type II", "HIPAA Aligned", "PCI DSS", "GDPR", "Cyber Essentials Plus", "FedRAMP In-Process", "Responsible AI Charter"].map((c) => (
                <div
                  key={c}
                  className="flex h-20 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-4 text-center text-sm font-medium text-[color:var(--cream)]"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA
          eyebrow="Become a partner"
          title="Building something we should be part of?"
          body="We work with platform, industry and boutique specialist partners where the fit is genuine and the outcome is shared."
          primaryLabel="Introduce your team"
          primaryTo="/about"
        />
      </main>
      <Footer />
    </div>
  );
}
