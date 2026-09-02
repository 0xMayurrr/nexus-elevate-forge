import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import { Reveal } from "@/components/site/Reveal";
import abstract1 from "@/assets/abstract-1.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Briefings | NexusMindTree" },
      { name: "description", content: "Practical briefings on managed IT, cloud architecture, and product engineering from the Nexus Mind Tree team." },
      { property: "og:title", content: "NexusMindTree Insights" },
      { property: "og:description", content: "Executive briefs and engineering notes on IT support, cloud, and digital products." },
    ],
  }),
  component: InsightsPage,
});

const CATEGORIES = ["All", "Managed IT", "Cloud", "Engineering", "Operations", "Cybersecurity", "Industry"];

const FEATURED = {
  tag: "Executive Brief · Managed IT",
  title: "Managed IT vs break/fix: what actually changes for your business",
  body: "How to compare scope, SLAs, security responsibilities, and co-managed models before you sign.",
  author: "Founding Team",
  date: "March 2026",
  read: "6 min read",
  img: abstract1,
};

const POSTS = [
  {
    tag: "Cloud",
    title: "Cloud cost control without killing momentum",
    body: "Practical guardrails for cloud spend that don't slow down engineering teams.",
    author: "Nexus Mind Tree",
    date: "March 2026",
    read: "6 min read",
    img: case1,
  },
  {
    tag: "Engineering",
    title: "When to build a custom product — and when to buy",
    body: "A framework for deciding whether software gives you an edge or just maintenance.",
    author: "Nexus Mind Tree",
    date: "February 2026",
    read: "8 min read",
    img: case2,
  },
  {
    tag: "Cybersecurity",
    title: "Microsoft 365 hardening: the first 10 steps",
    body: "High-impact security baselines every organisation should turn on this week.",
    author: "Nexus Mind Tree",
    date: "February 2026",
    read: "7 min read",
    img: case3,
  },
  {
    tag: "Managed IT",
    title: "Co-managed IT: making internal teams and partners work as one",
    body: "How to divide responsibilities between your in-house IT and an external provider.",
    author: "Nexus Mind Tree",
    date: "January 2026",
    read: "6 min read",
    img: abstract1,
  },
  {
    tag: "Cybersecurity",
    title: "Security that fits growing businesses (without enterprise bloat)",
    body: "Pragmatic threat models and controls that protect without paralyzing.",
    author: "Nexus Mind Tree",
    date: "January 2026",
    read: "9 min read",
    img: case1,
  },
  {
    tag: "Operations",
    title: "The quiet economics of a great service desk",
    body: "Why first-contact resolution and clear escalation save more than just tickets.",
    author: "Nexus Mind Tree",
    date: "January 2026",
    read: "5 min read",
    img: case2,
  },
];

function InsightsPage() {
  const [active, setActive] = useState("All");

  const filteredPosts = active === "All" ? POSTS : POSTS.filter((p) => p.tag === active);

  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <Header />
      <main>
        {/* BESPOKE INSIGHTS HERO: Editorial Layout */}
        <section className="surface-dark relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 border-b border-white/10">
          <div className="absolute top-0 right-0 h-[800px] w-1/2 bg-white/5 pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 h-[800px] w-[800px] rounded-full bg-[color:var(--navy-soft)]/20 blur-[150px] mix-blend-screen opacity-50 -translate-y-1/2 pointer-events-none" />

          <div className="container-wide relative z-10 grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div className="lg:pr-12 lg:border-r lg:border-white/10 h-full flex flex-col justify-center">
              <Reveal>
                <h1 className="font-display font-bold leading-none tracking-tight text-[color:var(--cream)] uppercase" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
                  Insights &<br />Briefings
                </h1>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-8 text-[color:var(--cream)]/60 text-lg uppercase tracking-widest font-semibold">
                  Vol. 2026
                </p>
              </Reveal>
            </div>

            <div className="lg:pl-8">
              <Reveal delay={120}>
                <p className="eyebrow-light eyebrow-dot text-[color:var(--gold)]">Latest Publication</p>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-6">
                  <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight text-[color:var(--cream)]">
                    Thinking out loud on support, systems, and software.
                  </h2>
                  <p className="mt-4 text-[color:var(--cream)]/70 text-base max-w-2xl leading-relaxed">
                    We write about what we learn in production — cloud trade-offs, managed IT reality, and how to build software that lasts.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[color:var(--gold)]">
                    <span className="font-semibold">Featured Brief</span>
                    <span>·</span>
                    <span>Managed IT · March 2026 · 6 min read</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[color:var(--cream)] mt-3">
                    Managed IT vs break/fix: what actually changes for your business.
                  </h3>
                  <p className="text-[color:var(--cream)]/70 mt-2 text-sm leading-relaxed">
                    Why proactive support, clear SLAs, and continuous improvement matter more than another ticket queue — and how to choose a partner when you're starting fresh.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Featured brief card */}
        <section className="section-pad">
          <div className="container-wide">
            <Reveal>
              <article className="card-elev overflow-hidden">
                <div className="grid lg:grid-cols-[1.1fr_1fr]">
                  <div className="relative min-h-[340px]">
                    <img
                      src={FEATURED.img}
                      alt=""
                      width={1400}
                      height={1000}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <p className="eyebrow eyebrow-dot">{FEATURED.tag}</p>
                    <h2 className="display-2 mt-4">{FEATURED.title}</h2>
                    <p className="lede mt-5">{FEATURED.body}</p>
                    <div className="mt-8 flex items-center justify-between border-t border-[color:var(--hairline)] pt-5 text-sm text-[color:var(--metal)]">
                      <span>{FEATURED.author} · {FEATURED.date}</span>
                      <span>{FEATURED.read}</span>
                    </div>
                    <Link to="/contact" className="arrow-link mt-8">Read the brief <ArrowRight className="size-4" /></Link>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* Category filter + grid */}
        <section className="surface-cream border-y border-[color:var(--hairline)] section-pad">
          <div className="container-wide">
            <Reveal>
              <div className="flex flex-wrap gap-2 border-b border-[color:var(--hairline)] pb-6">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={
                      active === c
                        ? "rounded-full bg-[color:var(--navy-deep)] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--cream)]"
                        : "rounded-full border border-[color:var(--hairline)] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--slate-ink)] transition-colors hover:border-[color:var(--navy-deep)] hover:text-[color:var(--navy-deep)]"
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((p, i) => (
                <Reveal key={p.title} delay={i * 50}>
                  <article className="card-elev card-elev-hover group flex h-full flex-col overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={p.img}
                        alt=""
                        width={1400}
                        height={1000}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <p className="eyebrow">{p.tag}</p>
                      <h3 className="mt-3 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-[color:var(--navy)]">
                        {p.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-[color:var(--muted-foreground)]">
                        {p.body}
                      </p>
                      <div className="mt-6 flex items-center justify-between border-t border-[color:var(--hairline)] pt-4 text-xs text-[color:var(--metal)]">
                        <span>{p.date}</span>
                        <span className="inline-flex items-center gap-1 font-medium text-[color:var(--navy-deep)]">
                          {p.read} <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="surface-dark section-pad">
          <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <p className="eyebrow-light eyebrow-dot">The Nexus Brief</p>
                <h2 className="display-2 mt-6 text-[color:var(--cream)]">One practical briefing in your inbox each month.</h2>
                <p className="lede mt-6 text-[color:var(--cream)]/75">
                  No fluff. Written for IT and business leaders. Unsubscribe in one click.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to The Nexus Brief.");
                }}
                className="rounded-xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur"
              >
                <label className="eyebrow-light" htmlFor="email">Work email</label>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="flex-1 rounded-full border border-white/20 bg-transparent px-5 py-3 text-[color:var(--cream)] placeholder:text-[color:var(--cream)]/50 focus:border-[color:var(--gold)] focus:outline-none"
                  />
                  <button type="submit" className="btn-solid-light justify-center">
                    Subscribe <ArrowRight className="size-4" />
                  </button>
                </div>
                <p className="mt-4 text-xs text-[color:var(--cream)]/55">
                  By subscribing you agree to receive occasional emails from Nexus Mind Tree. We never share your address.
                </p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
