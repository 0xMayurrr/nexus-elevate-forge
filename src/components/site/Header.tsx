import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/partners", label: "Partners" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
] as const;

export function Header({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || variant === "light" || open;
  const textCls = solid ? "text-[color:var(--navy-deep)]" : "text-[color:var(--cream)]";
  const borderCls = solid ? "border-b border-[color:var(--hairline)]" : "border-b border-transparent";
  const bgCls = solid ? "bg-[color:var(--cream)]/95 backdrop-blur-md" : "bg-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${bgCls} ${borderCls}`}
    >
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link to="/" className={`flex items-center gap-2.5 ${textCls}`}>
          <LogoMark solid={solid} />
          <span className="font-display text-[1.05rem] font-semibold tracking-tight">
            MindtreeNexus
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[0.9rem] font-medium tracking-tight transition-colors ${textCls} hover:opacity-70 ${active ? "opacity-100" : "opacity-85"}`}
              >
                <span className="relative">
                  {item.label}
                  {active && (
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] w-full ${solid ? "bg-[color:var(--navy-deep)]" : "bg-[color:var(--gold)]"}`}
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/about"
            className={`text-[0.9rem] font-medium ${textCls} opacity-85 hover:opacity-100`}
          >
            Contact
          </Link>
          <Link
            to="/services"
            className={
              solid
                ? "inline-flex items-center gap-2 rounded-full bg-[color:var(--navy-deep)] px-4 py-2.5 text-[0.85rem] font-medium text-[color:var(--cream)] transition-transform hover:-translate-y-0.5"
                : "inline-flex items-center gap-2 rounded-full bg-[color:var(--cream)] px-4 py-2.5 text-[0.85rem] font-medium text-[color:var(--navy-deep)] transition-transform hover:-translate-y-0.5"
            }
          >
            Talk to us <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden ${textCls}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="container-wide pb-6 pt-2">
            <div className="flex flex-col gap-1 border-t border-[color:var(--hairline)] pt-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="py-3 text-lg font-medium text-[color:var(--navy-deep)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/services"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy-deep)] px-5 py-3 text-sm font-medium text-[color:var(--cream)]"
              >
                Talk to us <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LogoMark({ solid }: { solid: boolean }) {
  const stroke = solid ? "var(--navy-deep)" : "var(--cream)";
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="14" stroke={stroke} strokeWidth="1.4" opacity="0.35" />
      <path d="M6 22 L14 10 L18 18 L26 8" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="26" cy="8" r="2" fill="var(--gold)" />
    </svg>
  );
}
