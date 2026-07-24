import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import heroSolutions from "@/assets/hero-solutions.jpg";
import abstract1 from "@/assets/abstract-1.jpg";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Industry & Function | MindtreeNexus" },
      { name: "description", content: "Enterprise solutions across financial services, healthcare, retail, public sector and more — built for regulated scale." },
      { property: "og:title", content: "MindtreeNexus Solutions" },
      { property: "og:description", content: "Solutions organized by business problem, industry and function." },
    ],
  }),
  component: SolutionsPage,
});

const PROBLEMS = [
  { title: "Enterprise AI, out of pilot", body: "Move a portfolio of AI use cases from proof-of-concept to safe, measurable production." },
  { title: "Modernize the core", body: "Retire legacy platforms without stopping the business or the roadmap." },
  { title: "Own the customer moment", body: "Unify digital, service and operations around one customer graph." },
  { title: "Resilience & sovereignty", body: "Meet regulatory, sovereignty and continuity requirements without slowing delivery." },
  { title: "Do more with the team you have", body: "Automate what shouldn't need a human and free your best engineers for what should." },
  { title: "Build a platform, not projects", body: "Give product teams a paved road so shipping becomes the default, not the exception." },
];

const INDUSTRIES = [
  { name: "Financial Services", body: "Core modernization, AI-assisted underwriting, fraud, regtech." },
  { name: "Healthcare & Life Sciences", body: "Interoperability, ambient AI for clinicians, secure patient experience." },
  { name: "Retail & Consumer", body: "Unified commerce, responsible personalization, supply chain intelligence." },
  { name: "Public Sector", body: "Sovereign cloud, accessible digital services, mission platforms." },
  { name: "Manufacturing & Energy", body: "Industrial data platforms, predictive operations, sustainability reporting." },
  { name: "Media & Telco", body: "Content platforms, subscriber analytics, next-gen network operations." },
];

const PILLARS = [
  { t: "Architecture", b: "Reference architectures for cloud, data, AI and security — battle-tested across regulated industries." },
  { t: "Transformation", b: "Programs that connect strategy, delivery and run into a single accountable engagement." },
  { t: "AI enablement", b: "The operating model, guardrails and platforms that make responsible enterprise AI real." },
];

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <Header />
      <main>
        <PageHero
          eyebrow="Solutions"
          title={<>Solutions organized around the way you actually think about the business.</>}
          body="By problem. By industry. By function. Same senior team, same delivery discipline — shaped to the ambition and risk of your context."
          image={heroSolutions}
          imageAlt="Consultants reviewing system architecture at a whiteboard"
          actions={
            <>
              <Link to="/about" className="btn-solid-light">Talk to a solution lead <ArrowUpRight className="size-4" /></Link>
              <Link to="/services" className="btn-ghost-dark">Explore services</Link>
            </>
          }
        />

        {/* Solutions by problem */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Reveal><p className="eyebrow eyebrow-dot">By business problem</p></Reveal>
                <Reveal delay={80}><h2 className="display-2 mt-5">Six problems we're built to solve.</h2></Reveal>
              </div>
              <Reveal delay={120}><p className="lede">If you recognize your quarter in any of the six, we've done this before — in your industry.</p></Reveal>
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
                    <Link to="/about" className="arrow-link mt-8">Talk this through <ArrowRight className="size-4" /></Link>
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
                <Reveal delay={80}><h2 className="display-2 mt-5">Sector fluency that shows up on day one.</h2></Reveal>
              </div>
              <Reveal delay={120}><p className="lede">Our sector specialists have spent careers inside the industries they now serve.</p></Reveal>
            </div>

            <div className="mt-14 divide-y divide-[color:var(--hairline)] border-y border-[color:var(--hairline)]">
              {INDUSTRIES.map((ind, i) => (
                <Reveal key={ind.name} delay={i * 40}>
                  <Link to="/solutions" className="group grid gap-4 py-8 md:grid-cols-[1fr_1.4fr_auto] md:items-center md:gap-10">
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

        {/* Architecture / AI enablement */}
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
              <Reveal><p className="eyebrow eyebrow-dot">Architecture · Transformation · AI</p></Reveal>
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
          title="Bring us the industry problem you're closest to."
          body="We'll pull a solution lead with lived experience in your sector into a 30-minute working session."
        />
      </main>
      <Footer />
    </div>
  );
}
