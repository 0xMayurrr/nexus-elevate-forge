import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "li";
  className?: string;
}

export function Reveal({ children, delay = 0, as = "div", className = "" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const Tag = as as any;
  return (
    <Tag ref={ref as any} className={`reveal ${visible ? "reveal-in" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
