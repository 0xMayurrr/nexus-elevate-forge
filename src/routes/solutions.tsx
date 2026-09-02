import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";

import { Reveal } from "@/components/site/Reveal";
import abstract1 from "@/assets/abstract-1.jpg";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Industry & Function | NexusMindTree" },
      { name: "description", content: "Organised around the way you think about the business: by problem, by industry, and by function." },
      { property: "og:title", content: "NexusMindTree Solutions" },
      { property: "og:description", content: "Solutions organized by business problem, industry and function." },
    ],
  }),
  component: SolutionsPage,
});

const PROBLEMS = [
  { title: "Stabilise IT operations", body: "Replace reactive break/fix with proactive support, monitoring, and clear SLAs." },
  { title: "Modernise the core", body: "Migrate and rebuild systems without freezing the business or the roadmap." },
  { title: "Secure the estate", body: "Close gaps across identity, endpoints, email, and cloud — without theatre." },
  { title: "Launch a digital product", body: "Move from idea to production with a clear scope, stack, and handover." },
  { title: "Do more with the team you have", body: "Automate repetitive work and free specialists for higher-value problems." },
  { title: "Build a platform, not one-offs", body: "Create repeatable foundations so delivery gets faster with every release." },
];

const INDUSTRIES = [
  { name: "Financial Services", body: "Secure operations, process automation, and compliance-aware delivery." },
  { name: "Healthcare & Life Sciences", body: "Resilient IT, secure access, and systems that support care teams." },
  { name: "Retail & Consumer", body: "Always-on operations, integrations, and customer-facing platforms." },
  { name: "Public Sector", body: "Reliable digital services with strong security and accessibility expectations." },
  { name: "Manufacturing & Energy", body: "Connected operations, plant/office IT support, and operational applications." },
  { name: "Professional Services", body: "Modern workplace, secure collaboration, and client-facing portals." },
];

const PILLARS = [
  { t: "Architecture", b: "Practical patterns for cloud, security, data, and applications." },
  { t: "Transformation", b: "Programs that connect strategy, delivery, and run into one engagement." },
  { t: "Enablement", b: "Documentation, training, and co-managed models that stick after go-live." },
];

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <Header />
      <main>
        {/* BESPOKE SOLUTIONS HERO: Minimalist Glow Layout */}
        <section className="surface-dark relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-36 border-b border-white/10 flex flex-col items-center text-center">
          <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] rounded-full bg-[color:var(--navy-soft)]/50 blur-[150px] mix-blend-screen opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="container-wide relative z-10 max-w-5xl">
            <Reveal>
              <p className="eyebrow-light eyebrow-dot">Solutions</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display font-bold leading-[1.05] tracking-tight text-[color:var(--cream)] mt-6 mx-auto" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                Organised around the way you think about the business.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="lede mt-8 text-[color:var(--cream)]/80 mx-auto text-xl">
                By problem. By industry. By function. Same team, same delivery discipline — shaped to your risk, budget, and goals.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-solid-light px-8 py-3 rounded-2xl font-bold">
                  Talk to a solution lead
                </Link>
                <Link to="/services" className="btn-ghost-dark px-8 py-3 rounded-2xl font-bold">
                  Explore services
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Solutions by problem */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Reveal><p className="eyebrow eyebrow-dot">By business problem</p></Reveal>
                <Reveal delay={80}><h2 className="display-2 mt-5">Six problems we're built to solve.</h2></Reveal>
              </div>
              <Reveal delay={120}><p className="lede">If any of these sound like your next quarter, we can help you shape a practical plan.</p></Reveal>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-[color:var(--hairline)] bg-[color:var(--hairline)] md:grid-cols-2 lg:grid-cols-3">
              {PROBLEMS.map((p, i) => (
                <Reveal key={p.title} delay={i * 50}>
                  <article className="group h-full bg-[color:var(--card)] p-8 transition-colors hover:bg-white lg:p-10">
                    <p className="font-display text-2xl font-semibold text-[color:var(--gold)]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-8 font-display text-xl font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--muted-foreground)]">{p.body}</p>
                    <Link to="/contact" className="arrow-link mt-8">Talk this through <ArrowRight className="size-4" /></Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="surface-cream section-pad border-y border-[color:var(--hairline)]">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Reveal><p className="eyebrow eyebrow-dot">By industry</p></Reveal>
                <Reveal delay={80}><h2 className="display-2 mt-5">Sector fluency that shows up in how we scope the work.</h2></Reveal>
              </div>
              <Reveal delay={120}><p className="lede">Our sector specialists bring lived experience to designing solutions that fit.</p></Reveal>
            </div>

            <div className="mt-14 divide-y divide-[color:var(--hairline)] border-y border-[color:var(--hairline)]">
              {INDUSTRIES.map((ind, i) => (
                <Reveal key={ind.name} delay={i * 40}>
                  <Link to="/contact" className="group grid gap-4 py-8 md:grid-cols-[1fr_1.4fr_auto] md:items-center md:gap-10">
                    <h3 className="font-display text-2xl font-semibold transition-colors group-hover:text-[color:var(--navy)]">{ind.name}</h3>
                    <p className="text-[0.95rem] leading-relaxed text-[color:var(--muted-foreground)]">{ind.body}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--navy-deep)]">
                      Explore <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture / Transformation / Enablement */}
        <section className="section-pad">
          <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <img
                src={abstract1}
                alt="Layered enterprise architecture abstraction"
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </Reveal>
            <div>
              <Reveal><p className="eyebrow eyebrow-dot">Architecture · Transformation · Enablement</p></Reveal>
              <Reveal delay={80}><h2 className="display-2 mt-5">Three horizontal pillars that run through every engagement.</h2></Reveal>
              <div className="mt-10 space-y-8">
                {PILLARS.map((p, i) => (
                  <Reveal key={p.t} delay={i * 60}>
                    <div className="border-t border-[color:var(--hairline)] pt-6">
                      <h3 className="font-display text-xl font-semibold">{p.t}</h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-[color:var(--muted-foreground)]">{p.b}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA
          eyebrow="Solve it together"
          title="Bring us the problem you're closest to."
          body="We'll join a 30-minute working session and help you decide what to support, what to build, and what to defer."
        />
      </main>
      <Footer />
    </div>
  );
}
