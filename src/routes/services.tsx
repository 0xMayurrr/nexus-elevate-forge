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
      { title: "Services — AI, Cloud, Engineering & Operations | MindtreeNexus" },
      { name: "description", content: "Full-stack services across AI & data, cloud modernization, engineering, digital operations, cybersecurity and advisory." },
      { property: "og:title", content: "MindtreeNexus Services" },
      { property: "og:description", content: "Advisory clarity paired with engineering craft — across AI, cloud, engineering and operations." },
    ],
  }),
  component: ServicesPage,
});

const CATS = [
  { icon: Sparkles, tag: "01", title: "AI & Data", body: "Generative AI, applied ML, modern data platforms and responsible AI operating models.", items: ["Generative AI product engineering", "Enterprise data platforms", "MLOps & model governance", "Applied research"] },
  { icon: Cloud, tag: "02", title: "Cloud Modernization", body: "Migration, platform engineering and FinOps across the three hyperscalers.", items: ["Cloud strategy & landing zones", "Application modernization", "Platform engineering", "FinOps & sustainability"] },
  { icon: Cpu, tag: "03", title: "Engineering", body: "Product engineering, embedded platform teams and site reliability at global scale.", items: ["Product & platform engineering", "SRE and observability", "Mobile & web experiences", "API & integration"] },
  { icon: Layers, tag: "04", title: "Digital Operations", body: "24/7 managed services, service desks and run-the-bank operations that free your team.", items: ["Managed cloud operations", "Service desk & end-user", "Application managed services", "Automation & AIOps"] },
  { icon: ShieldCheck, tag: "05", title: "Cybersecurity", body: "Zero-trust architecture, threat detection and compliance for regulated industries.", items: ["Zero-trust architecture", "Detection & response", "Identity & access", "Regulatory compliance"] },
  { icon: LineChart, tag: "06", title: "Advisory", body: "C-suite advisory on digital, AI and operating-model transformation.", items: ["Digital & AI strategy", "Operating model design", "Portfolio prioritization", "Value assurance"] },
];

const PROCESS = [
  { n: "01", t: "Diagnose", b: "Two weeks with your leadership. We come back with a written point of view and a shaped program — not a slideware." },
  { n: "02", t: "Design", b: "Cross-functional pods design the target state, tech spine and change plan side-by-side with your people." },
  { n: "03", t: "Deliver", b: "Small teams ship in short cycles. Progress is visible on a shared board from week one." },
  { n: "04", t: "Run", b: "We operate what we build, or transition it cleanly — always with a written exit path." },
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
                  Six practices designed to work as one.
                </h1>
              </Reveal>
            </div>

            <div className="lg:pt-4 lg:pb-32">
              <Reveal delay={120}>
                <p className="lede text-[color:var(--cream)]/80 text-xl md:text-2xl leading-relaxed">
                  We combine deep industry knowledge with modern engineering to solve the problems that actually matter to your business. From boardroom strategy to 24/7 operations, our practices share teams, tooling and accountability.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 text-[color:var(--cream)]/60 max-w-xl text-lg leading-relaxed">
                  We built our firm differently: partners architect the answer and stay on the floor while it's engineered. No handoffs. No excuses.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-16 flex flex-wrap gap-4">
                  <Link to="/about" className="btn-solid-light px-8 py-3 rounded-2xl font-bold">
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
                <Reveal delay={80}><h2 className="display-2 mt-5">Depth in every layer of the modern enterprise stack.</h2></Reveal>
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
                    <Link to="/about" className="arrow-link self-center md:self-start">
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
              <Reveal delay={120}><p className="lede text-[color:var(--cream)]/75">Four repeatable stages, sized to the ambition of the program. Executive-visible from week one.</p></Reveal>
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

        {/* Metrics */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["94%", "Client retention (5-yr)"],
                ["1,200+", "Programs delivered"],
                ["38%", "Avg. cloud cost reduction"],
                ["4.9/5", "Client NPS across FY25"],
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
          title="Tell us the outcome. We'll bring the team."
          body="Two-week diagnostic. Fixed price. Written point of view at the end — yours to keep whether we work together or not."
        />
      </main>
      <Footer />
    </div>
  );
}
