import { createFileRoute } from "@tanstack/react-router";
import { Compass, Target } from "lucide-react";
import { PageHeader, Reveal, SectionTitle } from "@/components/site/Reveal";
import { CtaBand, Gallery, IconCard } from "@/components/site/Blocks";
import { images, institutional, values } from "@/lib/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/quienes-somos")({
  head: () => seo("Quiénes Somos — Aguaymanto Perú", "Conoce nuestra empresa, historia, misión, visión y valores. Una empresa con raíces en el campo peruano."),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="Quiénes somos" title="Una empresa con raíces en el campo peruano" image={images.field} />

      <section id="empresa" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Nuestra empresa exitosa" title="Producimos y comercializamos aguaymanto de limatambo" />
            <Reveal className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>Somos una empresa peruana dedicada a la producción, comercialización y venta de aguaymanto.</p>
              <p>Atendemos a clientes particulares, restaurantes, tiendas, distribuidores y compradores mayoristas, con un compromiso firme con la calidad del producto y la atención personalizada.</p>
            </Reveal>
          </div>
          <Reveal><img src={images.fruit} alt="Aguaymanto fresco con su cáliz" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" /></Reveal>
        </div>
      </section>

      <section id="historia" className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Nuestra historia" title="Un camino que construimos con pasión y visión de futuro." />
          <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
            <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gold/50 md:block" />
            {institutional.history.map((h, i) => (
              <Reveal key={h.n} delay={i * 100}>
                <li className="relative list-none">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-forest font-display text-lg text-gold-soft">{h.n}</span>
                  <h3 className="mt-5 text-xl font-semibold text-forest">{h.title}</h3>
                  <p className="mt-2 text-muted-foreground">{h.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="mision" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 md:grid-cols-2">
          <Reveal className="rounded-3xl bg-forest-gradient p-10">
            <Target className="h-10 w-10 text-gold" />
            <h2 className="mt-5 text-3xl font-semibold text-on-dark">Nuestra Misión</h2>
            <p className="mt-4 text-lg text-on-dark/85">{institutional.mission}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl border-2 border-gold bg-cream p-10" >
            <div id="vision" />
            <Compass className="h-10 w-10 text-leaf" />
            <h2 className="mt-5 text-3xl font-semibold text-forest">Nuestra Visión</h2>
            <p className="mt-4 text-lg text-muted-foreground">{institutional.vision}</p>
          </Reveal>
        </div>
      </section>

      <section id="valores" className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle center eyebrow="Nuestros valores" title="Lo que nos guía cada día" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => <IconCard key={v.title} item={v} i={i} />)}
          </div>
        </div>
      </section>

      <section id="compromiso" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Nuestro compromiso" title="Tres pilares que sostienen nuestro trabajo" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {institutional.commitment.map((c, i) => (
              <Reveal key={c.title} delay={i * 100} className="border-l-4 border-gold pl-6">
                <h3 className="text-2xl font-semibold text-forest">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <CtaBand />
    </>
  );
}
