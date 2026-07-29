import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";

import { Reveal } from "@/components/site/Reveal";
import l1 from "@/assets/leader-1.jpg";
import l2 from "@/assets/leader-2.jpg";
import l3 from "@/assets/leader-3.jpg";
import l4 from "@/assets/leader-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MindtreeNexus — A Long-Horizon Technology Partner" },
      { name: "description", content: "Meet the leaders, values and operating principles behind MindtreeNexus — a global AI, cloud and engineering partner." },
      { property: "og:title", content: "About MindtreeNexus" },
      { property: "og:description", content: "A long-horizon technology partner to the world's most ambitious enterprises." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { title: "Craft", body: "We ship software and strategy of a caliber our clients would sign their name to." },
  { title: "Candor", body: "We say the hard thing early. Executives don't hire us for comfortable answers." },
  { title: "Curiosity", body: "We stay students of the industries we serve. Every engagement teaches us something." },
  { title: "Care", body: "We measure success by client outcomes, not billable hours." },
];

const LEADERS = [
  { img: l1, name: "Priya Ramaswamy", role: "Chief Executive Officer", bio: "Former partner, Global Consulting; 22 years scaling enterprise technology." },
  { img: l2, name: "Aditya Menon", role: "President, AI & Data", bio: "Built the AI practice from three engineers to over one hundred and eighty." },
  { img: l3, name: "Amara Okonkwo", role: "Chief Client Officer", bio: "Twenty years partnering with regulated-industry executive teams." },
  { img: l4, name: "Kenji Sato", role: "Chief Technology Officer", bio: "Longtime platform engineer; sits on two responsible-AI standards boards." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <Header />
      <main>
        {/* BESPOKE ABOUT HERO: Split-Stat Layout */}
        <section className="surface-dark relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 border-b border-white/10">
          <div className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-[color:var(--navy-soft)]/40 blur-[120px] mix-blend-screen opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="container-wide relative z-10 grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <p className="eyebrow-light eyebrow-dot">About MindtreeNexus</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display font-bold leading-[1.05] tracking-tight text-[color:var(--cream)] mt-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  A long-horizon partner for the enterprise moment ahead.
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede mt-8 text-[color:var(--cream)]/80">
                  We are engineers, strategists and industry specialists working alongside the leaders of financial services, healthcare, retail and the public sector — building the intelligent operating systems of the modern enterprise.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-12 flex flex-wrap gap-4">
                  <Link to="/portfolio" className="btn-solid-light px-8 py-3 rounded-2xl font-bold">
                    See our work
                  </Link>
                  <Link to="/services" className="btn-ghost-dark px-8 py-3 rounded-2xl font-bold">
                    What we do
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Integrated Stats Grid */}
            <div className="grid grid-cols-2 gap-8 lg:pl-12 lg:border-l lg:border-white/10">
              {[
                { label: "Founded", value: "2011" },
                { label: "Engineers", value: "600+" },
                { label: "Global Offices", value: "18" },
                { label: "Client Retention", value: "94%" },
              ].map((stat, i) => (
                <Reveal key={stat.label} delay={160 + i * 40}>
                  <div>
                    <p className="font-display text-4xl font-bold text-[color:var(--cream)]">{stat.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[color:var(--cream)]/60 font-semibold">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-pad">
          <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow eyebrow-dot">Our story</p>
                <h2 className="display-2 mt-5">Founded on a simple conviction.</h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-6 text-[1.05rem] leading-relaxed text-[color:var(--slate-ink)]">
                <p>
                  MindtreeNexus was founded in 2011 on the belief that the divide between
                  strategy consultants and engineering vendors was hurting our clients.
                  Boards were paying twice — once for the plan, once for the build — and
                  getting neither the outcomes nor the accountability they expected.
                </p>
                <p>
                  We built a different kind of firm: one where partners architect the
                  answer and stay on the floor while it's engineered. Fifteen years later,
                  that model has become the way we serve some of the most demanding
                  enterprises in the world.
                </p>
                <p>
                  Today we operate across eighteen countries with dedicated practices in
                  AI, cloud, engineering, digital operations and cybersecurity — and one
                  operating principle that hasn't changed since day one.
                </p>
                <blockquote className="mt-10 border-l-2 border-[color:var(--gold)] pl-6">
                  <p className="font-display text-2xl leading-snug text-[color:var(--navy-deep)]">
                    "Strategy without delivery is a report. Delivery without strategy is a
                    risk. Our clients hire us to hold both."
                  </p>
                  <footer className="mt-4 text-sm text-[color:var(--muted-foreground)]">
                    Priya Ramaswamy, Chief Executive Officer
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="surface-cream section-pad border-y border-[color:var(--hairline)]">
          <div className="container-wide">
            <div className="grid gap-16 lg:grid-cols-3">
              {[
                { label: "Mission", title: "To make ambitious enterprises measurably more intelligent, every quarter." },
                { label: "Vision", title: "A world where every organization treats software and AI as core craft, not vendor category." },
                { label: "Promise", title: "Senior people, in the room, doing the work — for as long as the mission runs." },
              ].map((b, i) => (
                <Reveal key={b.label} delay={i * 80}>
                  <div>
                    <p className="eyebrow eyebrow-dot">{b.label}</p>
                    <h3 className="mt-6 font-display text-2xl font-semibold leading-snug">{b.title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-20">
              <Reveal><p className="eyebrow eyebrow-dot">Our values</p></Reveal>
              <Reveal delay={80}>
                <h3 className="display-3 mt-5 max-w-2xl">Four words we hire, promote and part ways over.</h3>
              </Reveal>
              <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[color:var(--hairline)] bg-[color:var(--hairline)] md:grid-cols-2 lg:grid-cols-4">
                {VALUES.map((v, i) => (
                  <Reveal key={v.title} delay={i * 60}>
                    <div className="h-full bg-[color:var(--card)] p-8">
                      <p className="font-display text-4xl font-semibold text-[color:var(--gold)]">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h4 className="mt-6 font-display text-xl font-semibold">{v.title}</h4>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--muted-foreground)]">{v.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Reveal><p className="eyebrow eyebrow-dot">Leadership</p></Reveal>
                <Reveal delay={80}><h2 className="display-2 mt-5 max-w-2xl">The senior people on your account.</h2></Reveal>
              </div>
              <Reveal delay={140}>
                <p className="lede">Not a rotating team of juniors — the partners you meet on day one lead the work through delivery.</p>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {LEADERS.map((l, i) => (
                <Reveal key={l.name} delay={i * 80}>
                  <article className="group">
                    <div className="overflow-hidden rounded-xl bg-[color:var(--muted)]">
                      <img
                        src={l.img}
                        alt={l.name}
                        width={900}
                        height={1100}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold">{l.name}</h3>
                    <p className="text-sm text-[color:var(--metal)]">{l.role}</p>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-[color:var(--muted-foreground)]">{l.bio}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="surface-dark section-pad">
          <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div>
                <p className="eyebrow-light eyebrow-dot">Why clients trust us</p>
                <h2 className="display-2 mt-6 text-[color:var(--cream)]">Nine-year average partnership.</h2>
                <p className="lede mt-6 text-[color:var(--cream)]/70">
                  Trust is a lagging indicator. Below is what we do — quarter after quarter — to earn it.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {[
                ["Senior partner accountability", "Every account has a named partner responsible end-to-end."],
                ["Outcome-linked commercials", "We tie a portion of fees to the outcomes we and you agree on."],
                ["Open delivery", "Shared boards, weekly demos, no black boxes."],
                ["Responsible AI review", "Independent internal review on every model that touches customers."],
              ].map(([t, b], i) => (
                <Reveal key={t} delay={i * 60}>
                  <div className="h-full bg-[color:var(--navy-deep)] p-8">
                    <h3 className="font-display text-lg font-semibold text-[color:var(--cream)]">{t}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--cream)]/70">{b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA
          eyebrow="Work with us"
          title="Bring us the problem you've been putting off."
          body="If you're leading a transformation and want senior operators alongside you, we should talk."
          primaryLabel="Introduce yourself"
          primaryTo="/about"
          secondaryLabel="Read what we've shipped"
          secondaryTo="/portfolio"
        />
      </main>
      <Footer />
    </div>
  );
}
