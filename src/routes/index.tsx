import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Sparkles, Cloud, Cpu, ShieldCheck, LineChart, Layers } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { LogoStrip } from "@/components/site/LogoStrip";
import { Reveal } from "@/components/site/Reveal";
import heroHome from "@/assets/hero-home.jpg";
import caseImg1 from "@/assets/case-1.jpg";
import caseImg2 from "@/assets/case-2.jpg";
import caseImg3 from "@/assets/case-3.jpg";
import abstract1 from "@/assets/abstract-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MindtreeNexus — AI, Cloud & Engineering for the Ambitious Enterprise" },
      {
        name: "description",
        content:
          "MindtreeNexus is a global AI, cloud and engineering partner helping enterprises modernize operations, unlock intelligence and build resilient digital futures.",
      },
      { property: "og:title", content: "MindtreeNexus — AI, Cloud & Engineering" },
      {
        property: "og:description",
        content:
          "Trusted by enterprises worldwide for AI, cloud modernization, engineering excellence and digital operations.",
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Sparkles, title: "AI & Data", body: "Generative AI, applied ML and modern data platforms that turn signals into decisions." },
  { icon: Cloud, title: "Cloud Modernization", body: "Migration, platform engineering and FinOps across AWS, Azure and Google Cloud." },
  { icon: Cpu, title: "Engineering", body: "Product engineering, platform teams and SRE — from prototype to global scale." },
  { icon: Layers, title: "Digital Operations", body: "Managed services, service desks and 24/7 operations across every layer of the stack." },
  { icon: ShieldCheck, title: "Cybersecurity", body: "Zero-trust architecture, threat detection and compliance for regulated industries." },
  { icon: LineChart, title: "Advisory", body: "C-suite advisory on digital, AI and operating-model transformation." },
];

const SOLUTIONS = [
  { tag: "Financial Services", title: "Trusted intelligence for regulated growth", body: "AI-assisted underwriting, fraud detection and modern core platforms." },
  { tag: "Healthcare", title: "Care systems that scale with clinicians", body: "Data interoperability, AI-assisted triage and secure patient experience." },
  { tag: "Retail & Consumer", title: "Personalization that respects the customer", body: "Unified commerce, real-time inventory and responsible AI recommendations." },
  { tag: "Public Sector", title: "Modern services citizens can rely on", body: "Cloud sovereignty, accessible digital services and mission-critical operations." },
];

const CASES = [
  { img: caseImg1, tag: "Financial Services", title: "A national bank cut incident time by 62% with an AI-assisted operations platform", metric: "62%", metricLabel: "faster incident resolution" },
  { img: caseImg2, tag: "Retail", title: "A 1,400-store retailer unified commerce on a single cloud-native platform", metric: "$18M", metricLabel: "operating efficiency" },
  { img: caseImg3, tag: "Healthcare", title: "A regional health network gave clinicians 4 hours back per week with ambient AI", metric: "4 hrs", metricLabel: "returned to care" },
];

const INSIGHTS = [
  { tag: "AI Strategy", date: "March 2026", title: "The board-ready case for enterprise AI in the next 24 months", read: "8 min read" },
  { tag: "Cloud", date: "February 2026", title: "FinOps as a growth lever, not a cost-control exercise", read: "6 min read" },
  { tag: "Engineering", date: "January 2026", title: "Why platform engineering is the new operating system for the enterprise", read: "10 min read" },
];

function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <Header variant="dark" />
      <main>
        {/* HERO */}
        <section className="surface-dark relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 55% at 85% 10%, oklch(0.34 0.06 258 / 0.9), transparent 60%), radial-gradient(45% 60% at 0% 100%, oklch(0.3 0.05 258 / 0.7), transparent 60%)",
            }}
          />
          <div className="container-wide relative grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <p className="eyebrow-light eyebrow-dot">AI · Cloud · Engineering</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="display-1 mt-6 text-[color:var(--cream)]">
                  Intelligent enterprise, engineered with intent.
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede mt-7 text-[color:var(--cream)]/80">
                  MindtreeNexus partners with ambitious organizations to design, build and
                  run the intelligent operations that decide the next decade of competition.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link to="/services" className="btn-solid-light">
                    Explore what we do <ArrowUpRight className="size-4" />
                  </Link>
                  <Link to="/portfolio" className="btn-ghost-dark">
                    See client outcomes
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <dl className="mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-white/10 pt-8 text-[color:var(--cream)]">
                  {[
                    ["600+", "Engineers"],
                    ["18", "Countries"],
                    ["94%", "Client retention"],
                  ].map(([n, l]) => (
                    <div key={l}>
                      <dt className="font-display text-3xl font-semibold md:text-4xl">{n}</dt>
                      <dd className="mt-2 text-[0.8rem] uppercase tracking-[0.18em] text-[color:var(--cream)]/60">
                        {l}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="relative">
                <img
                  src={heroHome}
                  alt="MindtreeNexus consultants collaborating with enterprise leaders"
                  className="relative aspect-[5/4] w-full rounded-xl object-cover shadow-2xl ring-1 ring-white/10"
                  width={1600}
                  height={1100}
                />
                <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-lg border border-white/15 bg-[color:var(--navy-deep)]/85 p-5 backdrop-blur md:block">
                  <p className="eyebrow-light">Operating today</p>
                  <p className="mt-3 font-display text-lg leading-tight text-[color:var(--cream)]">
                    47 AI programs live across financial, health &amp; public sectors.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <LogoStrip variant="light" />

        {/* SERVICES */}
        <section id="services" className="section-pad">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Reveal><p className="eyebrow eyebrow-dot">What we do</p></Reveal>
                <Reveal delay={80}>
                  <h2 className="display-2 mt-5">
                    Six practices. One long-horizon partnership.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={120}>
                <p className="lede">
                  We combine advisory clarity with deep engineering craft — so strategy and
                  delivery live under one accountable team.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-[color:var(--hairline)] bg-[color:var(--hairline)] md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 60}>
                  <article className="group h-full bg-[color:var(--card)] p-8 transition-colors hover:bg-white lg:p-10">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex size-11 items-center justify-center rounded-md border border-[color:var(--hairline)] bg-[color:var(--cream)] text-[color:var(--navy-deep)]">
                        <Icon className="size-5" />
                      </span>
                      <ArrowUpRight className="size-5 text-[color:var(--metal)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <h3 className="mt-8 font-display text-xl font-semibold">{title}</h3>
                    <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-[color:var(--muted-foreground)]">
                      {body}
                    </p>
                    <Link to="/services" className="arrow-link mt-8">
                      Learn more <ArrowRight className="size-4" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS SPLIT */}
        <section className="surface-dark relative overflow-hidden">
          <div className="container-wide section-pad grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow-light eyebrow-dot">Industry solutions</p>
                <h2 className="display-2 mt-6 text-[color:var(--cream)]">
                  Built for the industries that keep the world running.
                </h2>
                <p className="lede mt-6 text-[color:var(--cream)]/75">
                  Every industry has its own physics. Our teams pair deep sector knowledge
                  with modern engineering to build solutions that hold up under regulation,
                  scale and scrutiny.
                </p>
                <Link to="/solutions" className="arrow-link-light mt-10">
                  Explore all solutions <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2">
              {SOLUTIONS.map((s, i) => (
                <Reveal key={s.tag} delay={i * 60}>
                  <article className="h-full bg-[color:var(--navy-deep)] p-8">
                    <p className="eyebrow-light">{s.tag}</p>
                    <h3 className="mt-6 font-display text-xl font-semibold text-[color:var(--cream)]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--cream)]/70">
                      {s.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section-pad">
          <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <img
                src={abstract1}
                alt="Layered architectural abstraction"
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </Reveal>
            <div>
              <Reveal><p className="eyebrow eyebrow-dot">Why MindtreeNexus</p></Reveal>
              <Reveal delay={80}>
                <h2 className="display-2 mt-5">
                  Executive-grade advisory. Engineering that ships.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede mt-6">
                  We are the team enterprises call when transformation has to be real —
                  measurable, auditable and durable long after the deck is closed.
                </p>
              </Reveal>
              <dl className="mt-10 divide-y divide-[color:var(--hairline)] border-y border-[color:var(--hairline)]">
                {[
                  ["Sector-specialist teams", "Bankers, clinicians and public-sector veterans embedded alongside engineers."],
                  ["Delivery in the open", "Weekly outcomes, shared boards and a single accountable partner."],
                  ["Responsible by design", "Security, sovereignty and responsible-AI review inside every engagement."],
                  ["Long-horizon partnership", "Average client relationship: nine years and counting."],
                ].map(([t, b], i) => (
                  <Reveal key={t} delay={i * 60}>
                    <div className="grid gap-2 py-6 md:grid-cols-[220px_1fr] md:gap-8">
                      <dt className="font-display text-[1.05rem] font-semibold">{t}</dt>
                      <dd className="text-[0.95rem] leading-relaxed text-[color:var(--muted-foreground)]">{b}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CASES */}
        <section className="surface-cream section-pad border-y border-[color:var(--hairline)]">
          <div className="container-wide">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Reveal><p className="eyebrow eyebrow-dot">Client outcomes</p></Reveal>
                <Reveal delay={80}>
                  <h2 className="display-2 mt-5 max-w-2xl">
                    Work that moves the numbers that matter.
                  </h2>
                </Reveal>
              </div>
              <Link to="/portfolio" className="arrow-link">
                View portfolio <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {CASES.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
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
                      <div className="absolute left-4 top-4 rounded-full bg-[color:var(--cream)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--navy-deep)]">
                        {c.tag}
                      </div>
                    </div>
                    <div className="p-7">
                      <p className="font-display text-3xl font-semibold text-[color:var(--navy-deep)]">
                        {c.metric}
                        <span className="ml-2 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-[color:var(--metal)]">
                          {c.metricLabel}
                        </span>
                      </p>
                      <h3 className="mt-5 font-display text-lg leading-snug">{c.title}</h3>
                      <Link to="/portfolio" className="arrow-link mt-6">
                        Read the case study <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INSIGHTS */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Reveal><p className="eyebrow eyebrow-dot">Insights</p></Reveal>
                <Reveal delay={80}>
                  <h2 className="display-2 mt-5 max-w-2xl">
                    Perspectives from the teams doing the work.
                  </h2>
                </Reveal>
              </div>
              <Link to="/insights" className="arrow-link">
                All insights <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {INSIGHTS.map((post, i) => (
                <Reveal key={post.title} delay={i * 80}>
                  <Link to="/insights" className="card-elev card-elev-hover group block h-full p-8">
                    <div className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--metal)]">
                      <span className="font-semibold text-[color:var(--navy-deep)]">{post.tag}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold leading-snug transition-colors group-hover:text-[color:var(--navy)]">
                      {post.title}
                    </h3>
                    <div className="mt-10 flex items-center justify-between border-t border-[color:var(--hairline)] pt-5 text-sm">
                      <span className="text-[color:var(--muted-foreground)]">{post.read}</span>
                      <ArrowUpRight className="size-4 text-[color:var(--navy-deep)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Let's build the intelligent enterprise you're planning next."
          body="Bring us a boardroom question or a delivery challenge. We'll respond within one business day with a senior partner and a working point of view."
        />
      </main>
      <Footer />
    </div>
  );
}
