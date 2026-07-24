import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Award, Handshake } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import heroPartners from "@/assets/hero-partners.jpg";

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
        <PageHero
          eyebrow="Partners & Alliances"
          title={<>An ecosystem built for enterprise-grade delivery.</>}
          body="We work with the platforms our clients bet their businesses on — and we hold ourselves to the certification bars, joint governance and executive access those bets deserve."
          image={heroPartners}
          imageAlt="Executive handshake across a modern boardroom table"
          actions={
            <>
              <Link to="/about" className="btn-solid-light">Partner with us <ArrowUpRight className="size-4" /></Link>
              <Link to="/services" className="btn-ghost-dark">See our services</Link>
            </>
          }
        />

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
                    <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                      {t.partners.map((p) => (
                        <li
                          key={p}
                          className="card-elev flex h-24 items-center justify-center px-4 text-center font-display text-sm font-semibold tracking-tight text-[color:var(--navy-deep)]"
                        >
                          {p}
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
