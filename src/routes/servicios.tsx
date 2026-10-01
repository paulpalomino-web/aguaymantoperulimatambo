import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SectionTitle } from "@/components/site/Reveal";
import { CtaBand, IconCard, WholesaleBanner, WhyUs } from "@/components/site/Blocks";
import { images, services } from "@/lib/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/servicios")({
  head: () => seo("Servicios — Venta y venta mayorista de aguaymanto | Aguaymanto Perú", "Venta de aguaymanto, venta al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial."),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader eyebrow="Nuestros servicios" title="Soluciones comerciales alrededor del aguaymanto" image={images.harvest} />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Lo que ofrecemos" title="Atención para cada tipo de cliente" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => <IconCard key={s.title} item={s} i={i} cta />)}
          </div>
        </div>
      </section>
      <WholesaleBanner />
      <WhyUs />
      <CtaBand />
    </>
  );
}
