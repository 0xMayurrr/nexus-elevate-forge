import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";

import { Reveal } from "@/components/site/Reveal";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import abstract1 from "@/assets/abstract-1.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Capabilities | NexusMindTree" },
      { name: "description", content: "The work we are built to deliver: managed IT, secure cloud, and products that ship." },
      { property: "og:title", content: "NexusMindTree Capabilities" },
      { property: "og:description", content: "Managed IT, secure cloud, and products that ship." },
    ],
  }),
  component: PortfolioPage,
});

const FEATURED = {
  tag: "Featured · Engagement model",
  title: "Managed IT + product delivery under one accountable team.",
  body: "As a new firm, we publish the engagement patterns we use — not invented case metrics. Typical programs combine proactive support, secure foundations, and a scoped build so operations and innovation move together.",
  metrics: [["Support", "Proactive"], ["Delivery", "Scoped sprints"], ["Security", "By design"]],
  img: case1,
};

const CASES = [
  { img: case2, tag: "Managed IT", title: "Stabilise day-to-day operations", body: "Monitoring, service desk, patching, and clear escalation for growing teams.", metric: "Fewer surprises" },
  { img: case3, tag: "Cloud", title: "Migrate with a secure landing zone", body: "Move workloads to Azure/AWS/GCP with identity, logging, and cost controls.", metric: "Cleaner baseline" },
  { img: abstract1, tag: "Product", title: "Launch a customer or internal portal", body: "Discovery, build, integrate, and hand over with documentation your team can run.", metric: "Ship with clarity" },
  { img: case1, tag: "Security", title: "Harden the modern workplace", body: "Identity, endpoint, email, and cloud controls aligned to your risk profile.", metric: "Stronger posture" },
  { img: case2, tag: "Automation", title: "Reduce manual operations work", body: "Workflow and integration automation for repeatable processes.", metric: "Hours back" },
  { img: case3, tag: "Advisory", title: "Build a 90-day modernisation plan", body: "Prioritised roadmap with cost, risk, and sequencing made explicit.", metric: "Clear next steps" },
];

const INDUSTRIES = ["Financial Services", "Healthcare", "Retail", "Public Sector", "Manufacturing", "Professional Services", "Education", "Logistics"];
const TECH = ["AWS", "Azure", "Google Cloud", "Microsoft 365", "Databricks", "Snowflake", "OpenAI", "Kubernetes"];

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <Header />
      <main>
        {/* BESPOKE PORTFOLIO HERO: Index Layout */}
        <section className="surface-dark relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 border-b border-white/10">
          <div className="absolute top-0 right-[20%] h-[1000px] w-[1000px] rounded-full bg-[color:var(--navy-soft)]/20 blur-[150px] mix-blend-screen pointer-events-none" />

          <div className="container-wide relative z-10">
            <Reveal>
              <div className="flex items-center gap-4 text-[color:var(--cream)]/60 text-sm font-semibold tracking-widest uppercase">
                <span>Index</span>
                <span className="w-12 h-px bg-white/20"></span>
                <span>Capabilities</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display font-bold leading-tight tracking-tight text-[color:var(--cream)] mt-12 max-w-5xl" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                The work we are built to deliver: managed IT, secure cloud, and products that ship.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-16 flex flex-wrap gap-4 items-center border-t border-white/10 pt-8">
                <Link to="/contact" className="btn-solid-light px-8 py-3 rounded-2xl font-bold">
                  Start a project
                </Link>
                <Link to="/services" className="btn-ghost-dark px-8 py-3 rounded-2xl font-bold">
                  Explore services
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured case */}
        <section className="section-pad">
          <div className="container-wide">
            <Reveal>
              <article className="card-elev overflow-hidden">
                <div className="grid lg:grid-cols-[1.1fr_1fr]">
                  <div className="relative min-h-[380px]">
                    <img
                      src={FEATURED.img}
                      alt=""
                      width={1400}
                      height={1000}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 lg:p-14">
                    <p className="eyebrow eyebrow-dot">{FEATURED.tag}</p>
                    <h2 className="display-2 mt-5">{FEATURED.title}</h2>
                    <p className="lede mt-6">{FEATURED.body}</p>
                    <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[color:var(--hairline)] pt-6">
                      {FEATURED.metrics.map(([n, l]) => (
                        <div key={l}>
                          <dt className="font-display text-2xl font-semibold text-[color:var(--navy-deep)]">{n}</dt>
                          <dd className="mt-2 text-[0.72rem] uppercase tracking-[0.16em] text-[color:var(--metal)]">{l}</dd>
                        </div>
                      ))}
                    </dl>
                    <Link to="/contact" className="arrow-link mt-10">Talk through a fit <ArrowRight className="size-4" /></Link>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* Case grid */}
        <section className="surface-cream border-y border-[color:var(--hairline)] section-pad">
          <div className="container-wide">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Reveal><p className="eyebrow eyebrow-dot">Selected work</p></Reveal>
                <Reveal delay={80}><h2 className="display-2 mt-5 max-w-2xl">Example engagements we design for.</h2></Reveal>
              </div>
              <Reveal delay={120}>
                <div className="flex flex-wrap gap-2">
                  {["All", "Support", "Cloud", "Product", "Security"].map((f, i) => (
                    <button
                      key={f}
                      className={
                        i === 0
                          ? "rounded-full bg-[color:var(--navy-deep)] px-4 py-2 text-[0.8rem] font-medium text-[color:var(--cream)]"
                          : "rounded-full border border-[color:var(--hairline)] bg-white px-4 py-2 text-[0.8rem] font-medium text-[color:var(--slate-ink)] transition-colors hover:border-[color:var(--navy-deep)] hover:text-[color:var(--navy-deep)]"
                      }
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {CASES.map((c, i) => (
                <Reveal key={c.title + i} delay={i * 60}>
                  <article className="card-elev card-elev-hover group h-full overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={c.img}
                        alt=""
                        width={1400}
                        height={1000}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-7">
                      <p className="eyebrow">{c.tag}</p>
                      <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{c.title}</h3>
                      <p className="mt-3 text-[0.9rem] leading-relaxed text-[color:var(--muted-foreground)]">{c.body}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-[color:var(--hairline)] pt-4">
                        <span className="font-display text-base font-semibold text-[color:var(--navy-deep)]">{c.metric}</span>
                        <ArrowUpRight className="size-4 text-[color:var(--navy-deep)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Industries & Tech */}
        <section className="section-pad">
          <div className="container-wide grid gap-16 md:grid-cols-2">
            <Reveal>
              <div>
                <p className="eyebrow eyebrow-dot">Where we focus</p>
                <h3 className="display-3 mt-5">Sectors we are ready to support from day one.</h3>
                <ul className="mt-10 flex flex-wrap gap-2">
                  {INDUSTRIES.map((i) => (
                    <li key={i} className="rounded-full border border-[color:var(--hairline)] bg-white px-4 py-2 text-sm text-[color:var(--slate-ink)]">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <p className="eyebrow eyebrow-dot">Technologies</p>
                <h3 className="display-3 mt-5">The stack we support and build with every week.</h3>
                <ul className="mt-10 flex flex-wrap gap-2">
                  {TECH.map((t) => (
                    <li key={t} className="rounded-full border border-[color:var(--hairline)] bg-white px-4 py-2 text-sm text-[color:var(--slate-ink)]">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Client voice / founder note */}
        <section className="surface-dark section-pad">
          <div className="container-wide max-w-4xl">
            <Reveal><p className="eyebrow-light eyebrow-dot">Our commitment</p></Reveal>
            <Reveal delay={80}>
              <blockquote className="mt-8">
                <p className="font-display text-3xl leading-snug text-[color:var(--cream)] md:text-4xl">
                  "We won't invent logos or case studies. We'll earn trust the only way that lasts — by delivering clear scope, secure operations, and software that works."
                </p>
                <footer className="mt-8 text-sm uppercase tracking-[0.18em] text-[color:var(--cream)]/60">
                  Founding team · Nexus Mind Tree
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        <CTA
          eyebrow="Start a program"
          title="Your first case study starts with a conversation."
          body="Tell us what you run today — and what you want to build next. We'll help you shape a practical first engagement."
        />
      </main>
      <Footer />
    </div>
  );
}
