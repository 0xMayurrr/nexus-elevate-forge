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
import heroVideo from "@/assets/hero 2.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexusMindTree — Reliable IT Support & Products" },
      {
        name: "description",
        content:
          "An IT support and product engineering partner helping organisations run securely, modernise with confidence, and ship software that creates value.",
      },
      { property: "og:title", content: "NexusMindTree — Reliable IT Support & Products" },
      {
        property: "og:description",
        content:
          "We combine managed IT support with product engineering — so your systems stay reliable, secure, and ready to grow.",
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Layers, title: "Managed IT Support", body: "Proactive monitoring, service desk, and day-to-day IT operations that keep your people productive." },
  { icon: Cloud, title: "Cloud & Infrastructure", body: "Migration, platform setup, and ongoing management across AWS, Azure, and Google Cloud." },
  { icon: Cpu, title: "Product Engineering", body: "Custom applications and digital products — from prototype to production and iteration." },
  { icon: Sparkles, title: "Digital Operations", body: "Managed services, service desks, and continuous improvement across your technology stack." },
  { icon: ShieldCheck, title: "Cybersecurity", body: "Practical security controls, monitoring, and compliance support built into everyday delivery." },
  { icon: LineChart, title: "Advisory", body: "Clear roadmaps for modernisation, cloud adoption, and operating-model change." },
];

const USE_CASES = [
  { img: caseImg1, tag: "Managed IT", title: "Stabilise IT operations with proactive support and clear escalation paths", metric: "Faster resolution", metricLabel: "Goal" },
  { img: caseImg2, tag: "Product", title: "Launch a custom web product with integrations your teams can actually run", metric: "Ship faster", metricLabel: "Goal" },
  { img: caseImg3, tag: "Security", title: "Harden identity, endpoints, and cloud controls without slowing the business", metric: "Lower risk", metricLabel: "Goal" },
];

const INSIGHTS = [
  { tag: "Managed IT", date: "March 2026", title: "Managed IT vs break/fix: what actually changes", read: "6 min read" },
  { tag: "Cloud", date: "February 2026", title: "Cloud cost control without slowing delivery", read: "6 min read" },
  { tag: "Engineering", date: "January 2026", title: "When to build a custom product — and when not to", read: "8 min read" },
];

function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--navy-deep)]">
      <Header variant="dark" />
      <main>
        {/* HERO */}
        <section className="surface-dark relative overflow-hidden pt-24 pb-16 md:pt-40 md:pb-32">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-30"
              src={heroVideo}
            />
            {/* Dark overlay to ensure crisp text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--navy-deep)]/90 via-[color:var(--navy-deep)]/80 to-[color:var(--navy-deep)]/95 lg:bg-gradient-to-r lg:from-[color:var(--navy-deep)]/90 lg:via-[color:var(--navy-deep)]/70 lg:to-transparent pointer-events-none" />
            {/* Soft cyan glow overlay */}
            <div className="absolute -left-[10%] -top-[20%] h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[130px] pointer-events-none" />
          </div>
          <div className="container-wide relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              <Reveal delay={80}>
                <h1 className="font-display font-bold leading-[1.05] tracking-tight text-[color:var(--cream)]" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.25rem)' }}>
                  Reliable <br />
                  IT support <br />
                  <span>& products_</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-12 flex flex-wrap gap-4">
                  <Link to="/services" className="btn-solid-light px-8 py-3 rounded-2xl font-bold">
                    Learn more
                  </Link>
                  <Link to="/portfolio" className="btn-ghost-dark px-8 py-3 rounded-2xl font-bold">
                    See what we do
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="relative hidden lg:flex h-[600px] w-full items-center justify-center">
                {/* Clean structural whitespace and geometric simplicity */}
              </div>
            </Reveal>
          </div>
        </section>

        <LogoStrip variant="light" />

        {/* WHAT WE DO */}
        <section id="services" className="surface-dark section-pad">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Reveal><p className="eyebrow-light eyebrow-dot">What we do</p></Reveal>
                <Reveal delay={80}>
                  <h2 className="display-2 mt-5 text-[color:var(--cream)]">
                    Six practices. One accountable partner.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={120}>
                <p className="lede text-[color:var(--cream)]/80">
                  We combine managed IT support with product engineering — so your systems stay reliable, secure, and ready to grow.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 60}>
                  <article className="group h-full bg-[color:var(--navy-deep)] p-8 transition-colors hover:bg-white/5 lg:p-10">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex size-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[color:var(--cream)]">
                        <Icon className="size-5" />
                      </span>
                      <ArrowUpRight className="size-5 text-[color:var(--cream)]/50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <h3 className="mt-8 font-display text-xl font-semibold text-[color:var(--cream)]">{title}</h3>
                    <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-[color:var(--cream)]/70">
                      {body}
                    </p>
                    <Link to="/services" className="arrow-link-light mt-8">
                      Learn more <ArrowRight className="size-4" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PERFORMANCE SECTION */}
        <section className="surface-dark relative overflow-hidden pt-24 pb-32">
          <div className="container-wide grid gap-16 lg:grid-cols-[1.1fr_1.3fr] lg:items-center">
            <Reveal>
              <div className="max-w-xl pr-8">
                <h2 className="font-display font-bold leading-tight text-[color:var(--cream)]" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                  Bringing true performance to your technology mission
                </h2>
                <p className="mt-8 text-[0.95rem] leading-relaxed text-[color:var(--cream)]/70 max-w-[85%]">
                  No matter where you are in your technology journey, Nexus Mind Tree is ready to help. Whether you need a focused project or end-to-end system management, we bring the same customer-first perspective, clarity, and energy to your mission.
                </p>
              </div>
            </Reveal>
            <div className="flex flex-col">
              {[
                { title: "Digital Transformation", desc: "Realise the value of automation, cloud, data, and modern software with a partner who designs for outcomes.", icon: Cpu },
                { title: "Managed IT", desc: "Enjoy proactive support and system confidence — monitoring, maintenance, and continuous improvement under clear SLAs.", icon: Cloud },
                { title: "Secure by design", desc: "We build multi-layered security into everything we design, deploy, and operate.", icon: ShieldCheck },
              ].map((s, i) => (
                <Reveal key={s.title} delay={i * 60}>
                  <Link to="/services" className="group flex flex-col border-b border-[color:var(--hairline)] py-8 transition-colors hover:border-[color:var(--navy-soft)]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="flex size-[60px] items-center justify-center rounded-full bg-[color:var(--cream)]/10 text-[color:var(--cream)] shadow-lg transition-transform group-hover:scale-105">
                          <s.icon className="size-7" />
                        </div>
                        <span className="font-display text-2xl font-bold text-[color:var(--cream)]/80 transition-colors group-hover:text-[color:var(--cream)]">
                          {s.title}
                        </span>
                      </div>
                      <ArrowRight className="size-6 text-[color:var(--cream)]/50 transition-transform group-hover:translate-x-2 group-hover:text-[color:var(--cream)]" strokeWidth={1.5} />
                    </div>
                    <p className="mt-3 pl-[84px] text-[0.9rem] leading-relaxed text-[color:var(--cream)]/65">
                      {s.desc}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* END-TO-END TITLE */}
        <section className="bg-[color:var(--navy-soft)] py-20 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-[color:var(--cream)]">
              End-to-end expertise and experience
            </h2>
          </Reveal>
        </section>

        {/* WHY NEXUS MIND TREE */}
        <section className="surface-dark section-pad border-t border-white/10">
          <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <img
                src={abstract1}
                alt="Layered architectural abstraction"
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover mix-blend-luminosity opacity-80"
              />
            </Reveal>
            <div>
              <Reveal><p className="eyebrow-light eyebrow-dot">Why Nexus Mind Tree</p></Reveal>
              <Reveal delay={80}>
                <h2 className="display-2 mt-5 text-[color:var(--cream)]">
                  Support that protects. Engineering that ships.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede mt-6 text-[color:var(--cream)]/80">
                  We are the team growing businesses call when technology has to work in the real world — reliable day to day, and ready for what comes next.
                </p>
              </Reveal>
              <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
                {[
                  ["Full-spectrum capability", "IT support, cloud, security, and product development under one accountable team."],
                  ["Delivery in the open", "Clear scope, shared progress, and no black boxes."],
                  ["Secure by design", "Security and good operational practice inside every engagement."],
                  ["Built for partnership", "We start lean, stay close to your priorities, and grow with you."],
                ].map(([t, b], i) => (
                  <Reveal key={t} delay={i * 60}>
                    <div className="grid gap-2 py-6 md:grid-cols-[220px_1fr] md:gap-8">
                      <dt className="font-display text-[1.05rem] font-semibold text-[color:var(--cream)]">{t}</dt>
                      <dd className="text-[0.95rem] leading-relaxed text-[color:var(--cream)]/70">{b}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CLIENT OUTCOMES / HOW WE HELP */}
        <section className="surface-cream section-pad border-y border-[color:var(--hairline)]">
          <div className="container-wide">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Reveal><p className="eyebrow eyebrow-dot">How we help</p></Reveal>
                <Reveal delay={80}>
                  <h2 className="display-2 mt-5 max-w-2xl">
                    Outcomes we design for from day one.
                  </h2>
                </Reveal>
              </div>
              <Link to="/portfolio" className="arrow-link">
                View capabilities <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {USE_CASES.map((c, i) => (
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
                      <p className="font-display text-2xl font-semibold text-[color:var(--navy-deep)]">
                        {c.metric}
                        <span className="ml-2 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-[color:var(--metal)]">
                          {c.metricLabel}
                        </span>
                      </p>
                      <h3 className="mt-5 font-display text-lg leading-snug">{c.title}</h3>
                      <Link to="/portfolio" className="arrow-link mt-6">
                        Learn how <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INSIGHTS */}
        <section className="surface-dark section-pad border-t border-white/10">
          <div className="container-wide">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Reveal><p className="eyebrow-light eyebrow-dot">Insights</p></Reveal>
                <Reveal delay={80}>
                  <h2 className="display-2 mt-5 max-w-2xl text-[color:var(--cream)]">
                    Practical perspectives from the work we do.
                  </h2>
                </Reveal>
              </div>
              <Link to="/insights" className="arrow-link-light">
                All insights <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {INSIGHTS.map((post, i) => (
                <Reveal key={post.title} delay={i * 80}>
                  <Link to="/insights" className="card-elev card-elev-hover group block h-full p-8 !bg-white/5 !border-white/10 hover:!bg-white/10">
                    <div className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--cream)]/60">
                      <span className="font-semibold text-[color:var(--cream)]">{post.tag}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-[color:var(--cream)] transition-colors group-hover:text-white">
                      {post.title}
                    </h3>
                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                      <span className="text-[color:var(--cream)]/60">{post.read}</span>
                      <ArrowUpRight className="size-4 text-[color:var(--cream)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
