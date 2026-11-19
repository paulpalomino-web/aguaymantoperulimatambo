import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHeader, Reveal, SectionTitle } from "@/components/site/Reveal";
import { CtaBand, ProductCard, WholesaleBanner } from "@/components/site/Blocks";
import { images, products, quality } from "@/lib/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/productos")({
  head: () => seo("Productos — Aguaymanto fresco y presentaciones | Aguaymanto Perú", "Aguaymanto fresco, presentaciones para distribución y pedidos especiales. Consulta disponibilidad y precios al por mayor."),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHeader eyebrow="Nuestros productos" title="Aguaymanto peruano seleccionado" text="Presentaciones para consumo, negocios y distribución." image={images.packaged} />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Catálogo" title="Presentaciones" />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {products.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}
          </div>
        </div>
      </section>
      <section id="calidad" className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Reveal><img src={images.fruit} alt="Detalle de aguaymanto seleccionado" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" /></Reveal>
          <div>
            <SectionTitle eyebrow="Calidad que se nota" title="Cuidamos cada fruto para ofrecerte lo mejor de nuestra tierra" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {quality.map((q, i) => (
                <Reveal key={q} delay={i * 60}><li className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 font-semibold text-forest shadow-soft"><CheckCircle2 className="h-5 w-5 text-gold" />{q}</li></Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <WholesaleBanner />
      <CtaBand />
    </>
  );
}
