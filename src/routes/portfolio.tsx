import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import heroPortfolio from "@/assets/hero-portfolio.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import abstract1 from "@/assets/abstract-1.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies | MindtreeNexus" },
      { name: "description", content: "Selected client work across financial services, healthcare, retail and the public sector — with the outcomes our clients agreed to publish." },
      { property: "og:title", content: "MindtreeNexus Portfolio" },
      { property: "og:description", content: "Client outcomes across AI, cloud and engineering programs." },
    ],
  }),
  component: PortfolioPage,
});

const FEATURED = {
  tag: "Featured · Financial Services",
  title: "A top-10 North American bank rebuilt operations around an AI-assisted service platform.",
  body: "Over 14 months, MindtreeNexus partnered with the bank's CIO and COO to consolidate 9 legacy operational tools, embed generative-AI copilots into the frontline, and re-platform incident management on a modern cloud spine — cutting mean incident time by 62% while raising customer NPS six points.",
  metrics: [["62%", "Faster incidents"], ["9→1", "Tools consolidated"], ["+6 pts", "Customer NPS"]],
  img: case1,
};

const CASES = [
  { img: case2, tag: "Retail & Consumer", title: "1,400 stores, one commerce platform", body: "Unified digital, in-store and supply-chain systems on a single cloud-native spine.", metric: "$18M efficiency" },
  { img: case3, tag: "Healthcare", title: "Ambient AI for a regional health network", body: "Gave clinicians four hours back per week through ambient documentation and AI triage.", metric: "4 hrs / clinician / wk" },
  { img: abstract1, tag: "Manufacturing", title: "A global industrial firm built a real-time operations twin", body: "Streaming data platform underpinning predictive maintenance across 60 plants.", metric: "23% downtime cut" },
  { img: case1, tag: "Public Sector", title: "A national tax agency delivered a modern citizen portal", body: "Accessible, sovereign, and load-tested for a country-scale filing peak.", metric: "9M citizens served" },
  { img: case2, tag: "Insurance", title: "AI-assisted underwriting at a specialty insurer", body: "Cut quote time from 5 days to under 4 hours across three product lines.", metric: "30x faster quotes" },
  { img: case3, tag: "Media", title: "Subscriber intelligence for a global publisher", body: "Rebuilt the audience data platform and reduced churn on the paid tier.", metric: "-14% churn" },
];

const INDUSTRIES = ["Financial Services", "Healthcare", "Retail", "Public Sector", "Manufacturing", "Insurance", "Media", "Energy"];
const TECH = ["AWS", "Azure", "Google Cloud", "Databricks", "Snowflake", "OpenAI", "ServiceNow", "Kubernetes"];

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <Header />
      <main>
        <PageHero
          eyebrow="Portfolio"
          title={<>The work our clients agreed to talk about.</>}
          body="Selected programs across financial services, healthcare, retail and the public sector — each with the outcomes we and our clients agreed to publish."
          image={heroPortfolio}
          imageAlt="Modern corporate skyscraper at dusk"
          actions={
            <>
              <Link to="/about" className="btn-solid-light">Discuss a program <ArrowUpRight className="size-4" /></Link>
              <Link to="/insights" className="btn-ghost-dark">Read our insights</Link>
            </>
          }
        />

        {/* Featured case */}
        <section className="section-pad">
          <div className="container-wide">
            <Reveal>
              <article className="card-elev overflow-hidden">
                <div className="grid lg:grid-cols-[1.1fr_1fr]">
                  <div className="relative min-h-[380px]">
                    <img
                      src={FEATURED.img}
                      alt=""
                      width={1400}
                      height={1000}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 lg:p-14">
                    <p className="eyebrow eyebrow-dot">{FEATURED.tag}</p>
                    <h2 className="display-2 mt-5">{FEATURED.title}</h2>
                    <p className="lede mt-6">{FEATURED.body}</p>
                    <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[color:var(--hairline)] pt-6">
                      {FEATURED.metrics.map(([n, l]) => (
                        <div key={l}>
                          <dt className="font-display text-3xl font-semibold text-[color:var(--navy-deep)]">{n}</dt>
                          <dd className="mt-2 text-[0.72rem] uppercase tracking-[0.16em] text-[color:var(--metal)]">{l}</dd>
                        </div>
                      ))}
                    </dl>
                    <Link to="/portfolio" className="arrow-link mt-10">Read the full case study <ArrowRight className="size-4" /></Link>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* Case grid */}
        <section className="surface-cream border-y border-[color:var(--hairline)] section-pad">
          <div className="container-wide">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Reveal><p className="eyebrow eyebrow-dot">Selected work</p></Reveal>
                <Reveal delay={80}><h2 className="display-2 mt-5 max-w-2xl">Results, sector by sector.</h2></Reveal>
              </div>
              <Reveal delay={120}>
                <div className="flex flex-wrap gap-2">
                  {["All", "Financial", "Health", "Retail", "Public"].map((f, i) => (
                    <button
                      key={f}
                      className={
                        i === 0
                          ? "rounded-full bg-[color:var(--navy-deep)] px-4 py-2 text-[0.8rem] font-medium text-[color:var(--cream)]"
                          : "rounded-full border border-[color:var(--hairline)] bg-white px-4 py-2 text-[0.8rem] font-medium text-[color:var(--slate-ink)] transition-colors hover:border-[color:var(--navy-deep)] hover:text-[color:var(--navy-deep)]"
                      }
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {CASES.map((c, i) => (
                <Reveal key={c.title + i} delay={i * 60}>
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
                    </div>
                    <div className="p-7">
                      <p className="eyebrow">{c.tag}</p>
                      <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{c.title}</h3>
                      <p className="mt-3 text-[0.9rem] leading-relaxed text-[color:var(--muted-foreground)]">{c.body}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-[color:var(--hairline)] pt-4">
                        <span className="font-display text-lg font-semibold text-[color:var(--navy-deep)]">{c.metric}</span>
                        <ArrowUpRight className="size-4 text-[color:var(--navy-deep)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Industries & Tech */}
        <section className="section-pad">
          <div className="container-wide grid gap-16 md:grid-cols-2">
            <Reveal>
              <div>
                <p className="eyebrow eyebrow-dot">Industries served</p>
                <h3 className="display-3 mt-5">Where our people have spent their careers.</h3>
                <ul className="mt-10 flex flex-wrap gap-2">
                  {INDUSTRIES.map((i) => (
                    <li key={i} className="rounded-full border border-[color:var(--hairline)] bg-white px-4 py-2 text-sm text-[color:var(--slate-ink)]">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <p className="eyebrow eyebrow-dot">Technologies</p>
                <h3 className="display-3 mt-5">The stack our engineers ship every week.</h3>
                <ul className="mt-10 flex flex-wrap gap-2">
                  {TECH.map((t) => (
                    <li key={t} className="rounded-full border border-[color:var(--hairline)] bg-white px-4 py-2 text-sm text-[color:var(--slate-ink)]">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Client outcomes quote */}
        <section className="surface-dark section-pad">
          <div className="container-wide max-w-4xl">
            <Reveal><p className="eyebrow-light eyebrow-dot">Client voice</p></Reveal>
            <Reveal delay={80}>
              <blockquote className="mt-8">
                <p className="font-display text-3xl leading-snug text-[color:var(--cream)] md:text-4xl">
                  "MindtreeNexus is the rare partner that makes the boardroom slide and the production code look like the same commitment. They stay on the floor with us."
                </p>
                <footer className="mt-8 text-sm uppercase tracking-[0.18em] text-[color:var(--cream)]/60">
                  Chief Operating Officer · Global Financial Services
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        <CTA
          eyebrow="Start a program"
          title="Your next case study starts with a conversation."
          body="Tell us the outcome you're trying to earn. We'll bring the sector-specialist team to shape the program with you."
        />
      </main>
      <Footer />
    </div>
  );
}
