import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionTitle({ eyebrow, title, text, center = false, light = false }: { eyebrow?: string; title: string; text?: string; center?: boolean; light?: boolean }) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className={cn("eyebrow", light && "text-gold-soft")}>{eyebrow}</p>}
      <h2 className={cn("mt-3 text-3xl font-semibold leading-tight md:text-5xl", light ? "text-on-dark" : "text-forest")}>{title}</h2>
      {text && <p className={cn("mt-4 text-lg", light ? "text-on-dark/80" : "text-muted-foreground")}>{text}</p>}
    </Reveal>
  );
}

export function PageHeader({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image: string }) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-28">
      <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16">
        <p className="eyebrow text-gold-soft">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-on-dark md:text-6xl">{title}</h1>
        {text && <p className="mt-4 max-w-xl text-lg text-on-dark/85">{text}</p>}
      </div>
    </section>
  );
}
