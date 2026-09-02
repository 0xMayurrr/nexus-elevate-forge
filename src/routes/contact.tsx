import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NexusMindTree | Start a Project or IT Partnership" },
      { name: "description", content: "Let's talk about your IT environment — or your next product. We'll reply within one business day." },
      { property: "og:title", content: "Contact NexusMindTree" },
      { property: "og:description", content: "Let's talk about your IT environment — or your next product. We'll reply within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[color:var(--cream)]">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="surface-dark relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 border-b border-white/10">
          <div className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-[color:var(--navy-soft)]/40 blur-[120px] mix-blend-screen opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="container-wide relative z-10">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow-light eyebrow-dot">Contact Us</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display font-bold leading-[1.05] tracking-tight text-[color:var(--cream)] mt-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  Let's talk about your IT environment — or your next product.
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede mt-8 text-[color:var(--cream)]/80">
                  Share a little context and we'll reply within one business day with the right next step.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MAIN CONTACT SECTION */}
        <section className="section-pad">
          <div className="container-wide max-w-3xl mx-auto">
            
            {/* FORM SIDE */}
            <div>
              <Reveal>
                <div className="mb-10">
                  <h2 className="display-3 text-[color:var(--navy-deep)]">Get in Touch</h2>
                  <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed text-lg">
                    Fill out the form below and a member of our team will reach out to schedule an introductory call.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                {submitted ? (
                  <div className="rounded-2xl border border-[color:var(--hairline)] bg-white p-12 text-center shadow-sm">
                    <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-emerald-100/50 text-emerald-600 mb-6">
                      <CheckCircle2 className="size-10" />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-[color:var(--navy-deep)]">
                      Message Received
                    </h3>
                    <p className="mt-4 text-[color:var(--muted-foreground)] text-lg leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. Someone from our team will contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 btn-ghost-dark px-8 py-3 rounded-full font-bold text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-[color:var(--hairline)] bg-white p-8 md:p-10 shadow-sm">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2.5">
                        <label htmlFor="firstName" className="text-sm font-semibold text-[color:var(--slate-ink)]">First Name</label>
                        <input
                          id="firstName"
                          required
                          type="text"
                          className="w-full rounded-xl border border-[color:var(--hairline)] bg-[color:var(--cream)]/30 px-4 py-3.5 text-sm focus:border-[color:var(--navy-deep)] focus:outline-none focus:ring-1 focus:ring-[color:var(--navy-deep)] transition-colors"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <label htmlFor="lastName" className="text-sm font-semibold text-[color:var(--slate-ink)]">Last Name</label>
                        <input
                          id="lastName"
                          required
                          type="text"
                          className="w-full rounded-xl border border-[color:var(--hairline)] bg-[color:var(--cream)]/30 px-4 py-3.5 text-sm focus:border-[color:var(--navy-deep)] focus:outline-none focus:ring-1 focus:ring-[color:var(--navy-deep)] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="email" className="text-sm font-semibold text-[color:var(--slate-ink)]">Work Email</label>
                      <input
                        id="email"
                        required
                        type="email"
                        className="w-full rounded-xl border border-[color:var(--hairline)] bg-[color:var(--cream)]/30 px-4 py-3.5 text-sm focus:border-[color:var(--navy-deep)] focus:outline-none focus:ring-1 focus:ring-[color:var(--navy-deep)] transition-colors"
                      />
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="company" className="text-sm font-semibold text-[color:var(--slate-ink)]">Company Name</label>
                      <input
                        id="company"
                        required
                        type="text"
                        className="w-full rounded-xl border border-[color:var(--hairline)] bg-[color:var(--cream)]/30 px-4 py-3.5 text-sm focus:border-[color:var(--navy-deep)] focus:outline-none focus:ring-1 focus:ring-[color:var(--navy-deep)] transition-colors"
                      />
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="inquiry" className="text-sm font-semibold text-[color:var(--slate-ink)]">How can we help?</label>
                      <select 
                        id="inquiry" 
                        className="w-full rounded-xl border border-[color:var(--hairline)] bg-[color:var(--cream)]/30 px-4 py-3.5 text-sm focus:border-[color:var(--navy-deep)] focus:outline-none focus:ring-1 focus:ring-[color:var(--navy-deep)] transition-colors"
                      >
                        <option>Managed IT Support</option>
                        <option>Cloud & Infrastructure</option>
                        <option>Product Development</option>
                        <option>Cybersecurity</option>
                        <option>Data / Automation / AI</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="message" className="text-sm font-semibold text-[color:var(--slate-ink)]">Additional Details</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Tell us about your environment, goals, timeline, and any constraints..."
                        className="w-full resize-none rounded-xl border border-[color:var(--hairline)] bg-[color:var(--cream)]/30 px-4 py-3.5 text-sm focus:border-[color:var(--navy-deep)] focus:outline-none focus:ring-1 focus:ring-[color:var(--navy-deep)] transition-colors placeholder:text-slate-400"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-solid-dark w-full justify-center px-6 py-4 rounded-xl font-bold text-[0.95rem] disabled:opacity-70 flex items-center gap-2"
                      >
                        {submitting ? (
                          <span className="flex items-center gap-2">
                            <span className="size-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Sending Inquiry...
                          </span>
                        ) : (
                          <>
                            Submit Inquiry
                            <ArrowRight className="size-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </Reveal>
            </div>

          </div>
        </section>

        <CTA 
          eyebrow="Careers"
          title="Ready to help us build Nexus Mind Tree?"
          body="We're looking for strong engineers, support specialists, and delivery-minded people who care about craft and clients."
          primaryLabel="View open roles"
          primaryTo="/contact"
          secondaryLabel="Learn about our culture"
          secondaryTo="/about"
        />
      </main>
      <Footer />
    </div>
  );
}
