import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles, Cloud, Cpu, ShieldCheck, LineChart, Layers } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { LogoStrip } from "@/components/site/LogoStrip";

import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — IT Support & Product Engineering | NexusMindTree" },
      { name: "description", content: "From managed operations to custom software, our practices share the same team discipline: clear scope, secure delivery, and continuous improvement." },
      { property: "og:title", content: "NexusMindTree Services" },
      { property: "og:description", content: "IT support and product engineering designed to work as one." },
    ],
  }),
  component: ServicesPage,
});

const CATS = [
  { 
    icon: Layers, 
    tag: "01", 
    title: "Managed IT Support", 
    body: "Proactive IT management spanning monitoring, maintenance, service desk, and continuous improvement.", 
    items: [
      "Service desk & end-user support", 
      "Monitoring, patching & backups oversight", 
      "Endpoint and identity management", 
      "Co-managed support with your internal team"
    ] 
  },
  { 
    icon: Cloud, 
    tag: "02", 
    title: "Cloud & Infrastructure", 
    body: "Design, migrate, and manage cloud and hybrid environments with performance, cost, and security in mind.", 
    items: [
      "Cloud strategy & landing zones", 
      "Migration & modernisation", 
      "Platform engineering basics", 
      "Cost optimisation & observability"
    ] 
  },
  { 
    icon: Cpu, 
    tag: "03", 
    title: "Product Engineering", 
    body: "Custom applications and digital products — from discovery to production and ongoing iteration.", 
    items: [
      "Web & cloud application development", 
      "API & system integration", 
      "Quality engineering & release automation", 
      "Product discovery & MVP delivery"
    ] 
  },
  { 
    icon: Sparkles, 
    tag: "04", 
    title: "Digital Operations", 
    body: "Managed services that free your team to focus on priorities while we run the day-to-day.", 
    items: [
      "Managed cloud operations", 
      "Application managed services", 
      "Automation & AIOps foundations", 
      "Continuous service improvement"
    ] 
  },
  { 
    icon: ShieldCheck, 
    tag: "05", 
    title: "Cybersecurity", 
    body: "Practical protection for modern workplaces and cloud environments.", 
    items: [
      "Identity & access hardening", 
      "Endpoint, email & network controls", 
      "Detection pathways & response readiness", 
      "Compliance-aligned controls"
    ] 
  },
  { 
    icon: LineChart, 
    tag: "06", 
    title: "Advisory", 
    body: "Right-fit guidance before big spend — roadmaps you can actually execute.", 
    items: [
      "Technology roadmap & prioritisation", 
      "Operating model design", 
      "Platform / vendor selection support", 
      "Value tracking after go-live"
    ] 
  },
];

const PROCESS = [
  { n: "01", t: "Diagnose", b: "We review your environment, risks, and goals — then return a clear point of view and recommended scope." },
  { n: "02", t: "Design", b: "We shape the target state, delivery plan, and success measures side-by-side with your team." },
  { n: "03", t: "Deliver", b: "Small teams ship in short cycles. Progress stays visible and easy to follow." },
  { n: "04", t: "Run", b: "We operate what we build, improve it continuously, or transition it cleanly." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <Header />
      <main>
        {/* BESPOKE SERVICES HERO: Sticky Layout */}
        <section className="surface-dark relative overflow-hidden pt-32 pb-24 md:pt-44 lg:pb-0 border-b border-white/10">
          <div className="absolute top-1/2 left-0 h-[1000px] w-[1000px] rounded-full bg-[color:var(--navy-soft)]/30 blur-[150px] mix-blend-screen opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="container-wide relative z-10 grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:min-h-[60vh]">
            <div className="lg:sticky lg:top-40 lg:pb-32">
              <Reveal>
                <p className="eyebrow-light eyebrow-dot">Services</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display font-bold leading-[1.05] tracking-tight text-[color:var(--cream)] mt-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                  IT support and product engineering designed to work as one.
                </h1>
              </Reveal>
            </div>

            <div className="lg:pt-4 lg:pb-32">
              <Reveal delay={120}>
                <p className="lede text-[color:var(--cream)]/80 text-xl md:text-2xl leading-relaxed">
                  From managed operations to custom software, our practices share the same team discipline: clear scope, secure delivery, and continuous improvement.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 text-[color:var(--cream)]/60 max-w-xl text-lg leading-relaxed">
                  We built our firm for growing organisations: the people who design the answer stay involved while it is delivered. No unnecessary handoffs.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-16 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-solid-light px-8 py-3 rounded-2xl font-bold">
                    Book a discovery call
                  </Link>
                  <a href="#practices" className="btn-ghost-dark px-8 py-3 rounded-2xl font-bold">
                    View practices
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <LogoStrip variant="light" />

        {/* Service categories */}
        <section id="practices" className="section-pad">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Reveal><p className="eyebrow eyebrow-dot">Full-stack services</p></Reveal>
                <Reveal delay={80}><h2 className="display-2 mt-5">Depth across support, cloud, security, and build.</h2></Reveal>
              </div>
              <Reveal delay={120}><p className="lede">Choose one practice — or engage them as a single team. We staff for the outcome, not the org chart.</p></Reveal>
            </div>

            <div className="mt-16 space-y-4">
              {CATS.map(({ icon: Icon, tag, title, body, items }, i) => (
                <Reveal key={title} delay={i * 40}>
                  <article className="card-elev card-elev-hover group grid gap-8 p-8 md:grid-cols-[80px_1fr_1fr_auto] md:items-start md:gap-10 md:p-10">
                    <p className="font-display text-3xl font-semibold text-[color:var(--gold)]">{tag}</p>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex size-10 items-center justify-center rounded-md border border-[color:var(--hairline)] bg-[color:var(--cream)]">
                          <Icon className="size-5 text-[color:var(--navy-deep)]" />
                        </span>
                        <h3 className="font-display text-2xl font-semibold">{title}</h3>
                      </div>
                      <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-[color:var(--muted-foreground)]">{body}</p>
                    </div>
                    <ul className="grid gap-2 text-[0.95rem] text-[color:var(--slate-ink)] sm:grid-cols-2 md:grid-cols-1">
                      {items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className="mt-2 inline-block size-1.5 rounded-full bg-[color:var(--gold)]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="arrow-link self-center md:self-start">
                      Talk to this practice <ArrowRight className="size-4" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery model */}
        <section className="surface-dark section-pad">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Reveal><p className="eyebrow-light eyebrow-dot">Delivery model</p></Reveal>
                <Reveal delay={80}><h2 className="display-2 mt-5 text-[color:var(--cream)]">One rhythm from diagnosis to run.</h2></Reveal>
              </div>
              <Reveal delay={120}><p className="lede text-[color:var(--cream)]/75">Four clear stages, sized to the ambition of the work. Visible from week one.</p></Reveal>
            </div>

            <ol className="mt-16 grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((p, i) => (
                <Reveal as="li" key={p.n} delay={i * 60}>
                  <div className="h-full bg-[color:var(--navy-deep)] p-8">
                    <p className="font-display text-5xl font-semibold text-[color:var(--gold)]">{p.n}</p>
                    <h3 className="mt-8 font-display text-xl font-semibold text-[color:var(--cream)]">{p.t}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--cream)]/70">{p.b}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Stats row (startup-honest) */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["6", "Core practices"],
                ["24/7", "Support options available"],
                ["1", "Accountable delivery team"],
                ["End-to-end", "Design → deploy → optimise"],
              ].map(([n, l], i) => (
                <Reveal key={l} delay={i * 60}>
                  <div className="border-t border-[color:var(--hairline)] pt-6">
                    <p className="font-display text-5xl font-semibold text-[color:var(--navy-deep)]">{n}</p>
                    <p className="mt-3 text-[0.8rem] uppercase tracking-[0.18em] text-[color:var(--metal)]">{l}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA
          eyebrow="Start a program"
          title="Tell us the outcome. We'll bring the plan."
          body="Short discovery. Clear proposal. Yours to keep whether we work together or not."
        />
      </main>
      <Footer />
    </div>
  );
}
