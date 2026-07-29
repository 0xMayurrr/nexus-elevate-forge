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
      { title: "Insights — Perspectives on AI, Cloud & the Enterprise | MindtreeNexus" },
      { name: "description", content: "Point-of-view articles, research and executive briefings from the practitioners at MindtreeNexus." },
      { property: "og:title", content: "MindtreeNexus Insights" },
      { property: "og:description", content: "Perspectives from the teams doing the work — AI, cloud, engineering and operating models." },
    ],
  }),
  component: InsightsPage,
});

const CATEGORIES = ["All", "AI Strategy", "Cloud", "Engineering", "Operations", "Cybersecurity", "Industry"];

const FEATURED = {
  tag: "Executive Brief · AI Strategy",
  date: "March 2026",
  read: "12 min read",
  title: "The board-ready case for enterprise AI in the next 24 months",
  body: "How to translate a portfolio of AI use cases into an investment thesis your board will fund — and your auditors will sign.",
  img: abstract1,
};

const POSTS = [
  { img: case1, tag: "Cloud", date: "Feb 2026", read: "6 min", title: "FinOps as a growth lever, not a cost-control exercise" },
  { img: case2, tag: "Engineering", date: "Feb 2026", read: "10 min", title: "Why platform engineering is the new operating system for the enterprise" },
  { img: case3, tag: "Industry", date: "Jan 2026", read: "8 min", title: "Ambient AI in healthcare: what actually works at ward scale" },
  { img: abstract1, tag: "AI Strategy", date: "Jan 2026", read: "7 min", title: "Responsible AI isn't a checklist — it's an operating model" },
  { img: case1, tag: "Cybersecurity", date: "Dec 2025", read: "9 min", title: "Zero-trust for regulated industries, without the theatre" },
  { img: case2, tag: "Operations", date: "Dec 2025", read: "5 min", title: "The quiet economics of a great service desk" },
];

function InsightsPage() {
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
                <Link to="/insights" className="group block mt-8">
                  <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-[color:var(--cream)] transition-colors group-hover:text-white">
                    The board-ready case for enterprise AI in the next 24 months.
                  </h2>
                  <p className="mt-6 text-[color:var(--cream)]/70 text-lg max-w-2xl leading-relaxed">
                    Why the transition from experimental GenAI to production-grade intelligence requires a fundamental rethinking of data architecture, compute spend, and executive accountability.
                  </p>
                  <div className="mt-8 flex items-center gap-4 text-sm font-semibold tracking-widest uppercase text-[color:var(--cream)]/50">
                    <span className="text-[color:var(--cream)]">AI Strategy</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>March 2026</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>8 min read</span>
                    <ArrowUpRight className="ml-auto size-5 text-[color:var(--gold)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section id="featured" className="section-pad">
          <div className="container-wide">
            <Reveal>
              <Link to="/insights" className="card-elev card-elev-hover group block overflow-hidden">
                <div className="grid lg:grid-cols-[1.1fr_1fr]">
                  <div className="relative min-h-[360px] overflow-hidden">
                    <img
                      src={FEATURED.img}
                      alt=""
                      width={1400}
                      height={1000}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-12 lg:p-14">
                    <div className="flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--metal)]">
                      <span className="font-semibold text-[color:var(--navy-deep)]">{FEATURED.tag}</span>
                      <span>·</span>
                      <span>{FEATURED.date}</span>
                      <span>·</span>
                      <span>{FEATURED.read}</span>
                    </div>
                    <h2 className="display-2 mt-6">{FEATURED.title}</h2>
                    <p className="lede mt-6">{FEATURED.body}</p>
                    <span className="arrow-link mt-10">
                      Read the brief <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="surface-cream border-y border-[color:var(--hairline)] section-pad">
          <div className="container-wide">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                {CATEGORIES.map((c, i) => (
                  <button
                    key={c}
                    className={
                      i === 0
                        ? "rounded-full bg-[color:var(--navy-deep)] px-4 py-2 text-[0.8rem] font-medium text-[color:var(--cream)]"
                        : "rounded-full border border-[color:var(--hairline)] bg-white px-4 py-2 text-[0.8rem] font-medium text-[color:var(--slate-ink)] transition-colors hover:border-[color:var(--navy-deep)] hover:text-[color:var(--navy-deep)]"
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {POSTS.map((p, i) => (
                <Reveal key={p.title + i} delay={i * 60}>
                  <Link to="/insights" className="card-elev card-elev-hover group flex h-full flex-col overflow-hidden">
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
                      <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.16em] text-[color:var(--metal)]">
                        <span className="font-semibold text-[color:var(--navy-deep)]">{p.tag}</span>
                        <span>·</span>
                        <span>{p.date}</span>
                      </div>
                      <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                      <div className="mt-auto flex items-center justify-between border-t border-[color:var(--hairline)] pt-5">
                        <span className="text-sm text-[color:var(--muted-foreground)]">{p.read}</span>
                        <ArrowUpRight className="size-4 text-[color:var(--navy-deep)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <button className="btn-ghost-light">Load more insights</button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="surface-dark section-pad">
          <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <p className="eyebrow-light eyebrow-dot">The Nexus Brief</p>
                <h2 className="display-2 mt-6 text-[color:var(--cream)]">One executive-grade essay in your inbox each month.</h2>
                <p className="lede mt-6 text-[color:var(--cream)]/75">
                  No newsletter fluff. Written by partners, read by boards. Unsubscribe in one click.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <form className="rounded-xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur">
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
                  By subscribing you agree to receive occasional emails from MindtreeNexus. We never share your address.
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
