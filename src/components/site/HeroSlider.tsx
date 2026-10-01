import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/lib/content";
import { cn } from "@/lib/utils";

const slides = [
  { img: images.fruit, alt: "Aguaymanto fresco peruano con su cáliz", title: "Aguaymanto peruano, calidad que nace en nuestra tierra", text: "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.", ctas: [{ to: "/productos", label: "Conocer nuestros productos", gold: true }, { to: "/contacto", label: "Solicitar cotización" }] },
  { img: images.field, alt: "Plantación de aguaymanto en un valle andino al atardecer", title: "Del campo peruano a nuevos mercados", text: "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.", ctas: [{ to: "/quienes-somos", label: "Conoce nuestra empresa", gold: true }] },
  { img: images.harvest, alt: "Productores peruanos cosechando aguaymanto", title: "Natural, versátil y de excelente calidad", text: "Un fruto andino seleccionado para clientes particulares y negocios.", ctas: [{ to: "/productos", label: "Ver productos", gold: true }] },
] as const;

export function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), []);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(i + 1), 5000);
    return () => clearTimeout(t);
  }, [i, paused, go]);

  return (
    <section aria-roledescription="carrusel" aria-label="Presentación" className="relative h-[100svh] min-h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, k) => (
        <div key={k} aria-hidden={k !== i} className={cn("absolute inset-0 transition-opacity duration-1000", k === i ? "opacity-100" : "opacity-0")}>
          <img src={s.img} alt={s.alt} width={1920} height={1088} loading={k === 0 ? "eager" : "lazy"}
            className={cn("h-full w-full object-cover transition-transform duration-[6000ms]", k === i ? "scale-105" : "scale-100")} />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-5">
              <div className={cn("max-w-2xl transition-all duration-700", k === i ? "translate-y-0 opacity-100 delay-300" : "translate-y-6 opacity-0")}>
                <p className="eyebrow text-gold-soft">Aguaymanto · Perú</p>
                {k === 0 ? (
                  <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-on-dark md:text-7xl">{s.title}</h1>
                ) : (
                  <h2 className="mt-4 text-4xl font-semibold leading-[1.05] text-on-dark md:text-7xl">{s.title}</h2>
                )}
                <p className="mt-6 max-w-xl text-lg text-on-dark/85">{s.text}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {s.ctas.map((c) => (
                    <Link key={c.label} to={c.to} tabIndex={k === i ? 0 : -1} className={cn("btn", "gold" in c ? "btn-gold" : "btn-ghost-light")}>{c.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-24 mx-auto flex max-w-7xl items-center justify-between px-5">
        <div className="flex gap-2">
          {slides.map((_, k) => (
            <button key={k} onClick={() => go(k)} aria-label={`Ir a diapositiva ${k + 1}`} aria-current={k === i}
              className={cn("h-1.5 rounded-full transition-all", k === i ? "w-10 bg-gold" : "w-5 bg-on-dark/50 hover:bg-on-dark")} />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => go(i - 1)} aria-label="Anterior" className="rounded-full border border-on-dark/40 p-2.5 text-on-dark hover:bg-on-dark/15"><ChevronLeft className="h-5 w-5" /></button>
          <button onClick={() => go(i + 1)} aria-label="Siguiente" className="rounded-full border border-on-dark/40 p-2.5 text-on-dark hover:bg-on-dark/15"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
}
