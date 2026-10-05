import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Play, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, formatDate, gallery, type Item, type News, type Product, whyUs } from "@/lib/content";
import { Reveal, SectionTitle } from "./Reveal";

export function ProductCard({ p, i = 0 }: { p: Product; i?: number }) {
  return (
    <Reveal delay={i * 100} className="group overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow hover:shadow-lift">
      <article id={p.slug}>
        <div className="aspect-[4/3] overflow-hidden">
          <img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="p-7">
          <h3 className="text-2xl font-semibold text-forest">{p.title}</h3>
          <p className="mt-3 text-muted-foreground">{p.description}</p>
          <Link to="/contacto" search={{ producto: p.title }} className="mt-6 inline-flex items-center gap-2 font-bold text-leaf hover:text-forest">
            {p.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export function IconCard({ item, i = 0, cta = false }: { item: Item; i?: number; cta?: boolean }) {
  const Icon = item.icon;
  return (
    <Reveal delay={i * 80} className="rounded-2xl border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-gold"><Icon className="h-6 w-6" /></div>
      <h3 className="mt-5 text-xl font-semibold text-forest">{item.title}</h3>
      <p className="mt-2 text-muted-foreground">{item.text}</p>
      {cta && <Link to="/contacto" search={{ producto: item.title }} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-leaf hover:text-forest">Consultar <ArrowRight className="h-4 w-4" /></Link>}
    </Reveal>
  );
}

export function NewsCard({ n, i = 0 }: { n: News; i?: number }) {
  return (
    <Reveal delay={i * 100} className="group overflow-hidden rounded-2xl bg-card shadow-soft">
      <article>
        <div className="aspect-[16/10] overflow-hidden">
          <img src={n.image} alt={n.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
            <span className="text-leaf">{n.category}</span><span className="text-muted-foreground">{formatDate(n.date)}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold leading-snug text-forest">{n.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
          <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-leaf hover:text-forest">Leer más <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </article>
    </Reveal>
  );
}

export function WholesaleBanner() {
  const pts = ["Pedidos por volumen", "Atención personalizada", "Presentaciones comerciales", "Coordinación de entregas", "Cotizaciones"];
  return (
    <section className="bg-forest-gradient py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
        <SectionTitle light eyebrow="Clientes mayoristas" title="¿Buscas un proveedor de aguaymanto?" text="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto." />
        <Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {pts.map((p) => <li key={p} className="flex items-center gap-3 rounded-xl bg-on-dark/10 px-4 py-3 font-semibold text-on-dark"><Check className="h-5 w-5 text-gold" />{p}</li>)}
          </ul>
          <Link to="/contacto" className="btn btn-gold mt-8">Solicitar cotización</Link>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle center eyebrow="¿Por qué elegirnos?" title="Razones para confiar en nosotros" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 80} className="border-t-2 border-gold pt-5">
              <span className="font-display text-3xl text-gold">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-forest">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Galería" title="Del campo a tu mesa" />
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, i) => (
            <button key={i} onClick={() => setOpen(i)} aria-label={`Ampliar: ${g.alt}`}
              className={`group overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : ""} ${i === 3 ? "col-span-2" : ""}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </div>
      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Imagen ampliada" className="fixed inset-0 z-[60] flex items-center justify-center bg-overlay/90 p-5" onClick={() => setOpen(null)}>
          <button aria-label="Cerrar" className="absolute right-5 top-5 rounded-full bg-on-dark/15 p-2 text-on-dark" onClick={() => setOpen(null)}><X /></button>
          <img src={gallery[open]?.src} alt={gallery[open]?.alt} className="max-h-[85vh] max-w-full rounded-xl" />
        </div>
      )}
    </section>
  );
}

export function FAQ() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr]">
        <SectionTitle eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" text="Si no encuentras tu respuesta, escríbenos y te atenderemos personalmente." />
        <Reveal>
          <Accordion type="single" collapsible className="rounded-2xl bg-card px-6 shadow-soft">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`}>
                <AccordionTrigger className="py-5 text-base font-semibold text-forest hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

const youtubeVideoId = "KquI_AS5ChY";

function VideoModalDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="Video sobre el aguaymanto" className="fixed inset-0 z-[60] flex items-center justify-center bg-overlay/95 p-4 md:p-10" onClick={onClose}>
      <button aria-label="Cerrar video" className="absolute right-5 top-5 rounded-full bg-on-dark/15 p-2 text-on-dark transition-colors hover:bg-on-dark/25" onClick={onClose}><X /></button>
      <div className="aspect-video w-full max-w-5xl overflow-hidden rounded-2xl shadow-lift" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
          title="Video sobre el aguaymanto"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </div>
  );
}

export function VideoModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="btn btn-ghost-light inline-flex items-center gap-2">
        <Play className="h-4 w-4" /> Ver video
      </button>
      <VideoModalDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export function FloatingVideoButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Ver video sobre el aguaymanto"
        className="group fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-forest p-3.5 text-on-dark shadow-lift transition-transform hover:scale-105 md:pr-5"
      >
        <Play className="h-6 w-6 fill-current" />
        <span className="hidden text-sm font-bold md:inline">Ver video</span>
      </button>
      <VideoModalDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export function CtaBand() {
  return (
    <section className="py-20">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl bg-forest-gradient px-8 py-14 text-center">
        <h2 className="text-3xl font-semibold text-on-dark md:text-4xl">¿Listo para trabajar con nosotros?</h2>
        <p className="max-w-xl text-on-dark/80">Cuéntanos qué necesitas y te enviaremos una cotización.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/contacto" className="btn btn-gold">Solicitar cotización</Link>
          <Link to="/productos" className="btn btn-ghost-light">Consultar productos</Link>
        </div>
      </Reveal>
    </section>
  );
}
