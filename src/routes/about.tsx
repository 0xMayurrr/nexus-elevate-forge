import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
      { title: "About Us — Story, Team & Culture | NexusMindTree" },
      { name: "description", content: "A practical partner for IT support and product delivery. Explore our mission, values, and leadership." },
      { property: "og:title", content: "About NexusMindTree" },
      { property: "og:description", content: "A practical partner for IT support and product delivery." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { title: "Craft", body: "We write code, configure systems, and design processes we're proud to put our name on." },
  { title: "Candor", body: "We tell you what we see — including when the right answer is not to build or not to buy." },
  { title: "Curiosity", body: "We stay close to emerging tools and platforms without chasing fads at your expense." },
  { title: "Care", body: "We treat your users, data, and budget with the same seriousness we would our own." },
];

const LEADERS = [
  { img: l1, name: "Leadership Lead", role: "Founder & CEO", bio: "Leading strategy, delivery standards, and client partnerships." },
  { img: l2, name: "Engineering Lead", role: "Co-founder & Head of Engineering", bio: "Overseeing architecture, product delivery, and technical craft." },
  { img: l3, name: "Services Lead", role: "Head of Managed Services", bio: "Leading day-to-day IT support, service desk, and infrastructure operations." },
  { img: l4, name: "Security Lead", role: "Head of Security & Trust", bio: "Guiding security posture, compliance alignment, and risk practices." },
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
                <p className="eyebrow-light eyebrow-dot">About Nexus Mind Tree</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display font-bold leading-[1.05] tracking-tight text-[color:var(--cream)] mt-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  A practical partner for IT support and product delivery.
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede mt-8 text-[color:var(--cream)]/80">
                  We are engineers, support specialists, and advisors helping organisations run technology with confidence — and build the products that move them forward.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-12 flex flex-wrap gap-4">
                  <Link to="/portfolio" className="btn-solid-light px-8 py-3 rounded-2xl font-bold">
                    See what we do
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
                { label: "Founded", value: "2026" },
                { label: "Practices", value: "6" },
                { label: "Delivery model", value: "Remote-first" },
                { label: "End-to-end ownership", value: "1 team" },
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
                  Most organisations don't have separate technology realities for "keeping things running" and "building what's next." In practice, they are the same estate, the same team, and the same budget.
                </p>
                <p>
                  Nexus Mind Tree was built to bring those two halves together under one accountable roof — so you don't have to hire one vendor to patch your systems and another to build your products.
                </p>
                <p>
                  We work openly, ship in small increments, and measure success by the quiet reliability of your operations and the real-world performance of the software we build.
                </p>
                <blockquote className="mt-10 border-l-2 border-[color:var(--gold)] pl-6">
                  <p className="font-display text-2xl leading-snug text-[color:var(--navy-deep)]">
                    "Support without improvement is stagnation. Delivery without ownership is risk. Our clients hire us to hold both."
                  </p>
                  <footer className="mt-4 text-sm text-[color:var(--muted-foreground)]">
                    Founding team · Nexus Mind Tree
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Mission / Vision / Promise */}
        <section className="surface-cream section-pad border-y border-[color:var(--hairline)]">
          <div className="container-wide">
            <div className="grid gap-16 lg:grid-cols-3">
              {[
                { label: "Mission", title: "To make technology reliable, secure, and useful for every organisation we serve." },
                { label: "Vision", title: "A world where IT support and product delivery feel like one accountable partnership." },
                { label: "Promise", title: "Clear communication, practical engineering, and continuous improvement — for as long as the mission runs." },
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
                <h3 className="display-3 mt-5 max-w-2xl">Four words we hire and deliver by.</h3>
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
                <Reveal delay={80}><h2 className="display-2 mt-5 max-w-2xl">The team on the hook.</h2></Reveal>
              </div>
              <Reveal delay={140}>
                <p className="lede">The practitioners you meet during discovery are the ones who design and lead your work.</p>
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

        {/* Why clients will trust us */}
        <section className="surface-dark section-pad">
          <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div>
                <p className="eyebrow-light eyebrow-dot">Why clients will trust us</p>
                <h2 className="display-2 mt-6 text-[color:var(--cream)]">Trust is earned in delivery.</h2>
                <p className="lede mt-6 text-[color:var(--cream)]/70">
                  As a new company, we earn trust the same way every strong IT partner does — by being clear, present, and accountable.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {[
                ["Named ownership", "Every engagement has a clear owner responsible end-to-end."],
                ["Transparent scope", "Inclusions, exclusions, and success measures written before work starts."],
                ["Open delivery", "Shared updates, visible progress, no black boxes."],
                ["Secure by design", "Security and operational hygiene inside every engagement."],
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
          body="If you need dependable IT support, a product built properly, or both — we should talk."
          primaryLabel="Introduce yourself"
          primaryTo="/contact"
          secondaryLabel="Explore services"
          secondaryTo="/services"
        />
      </main>
      <Footer />
    </div>
  );
}
