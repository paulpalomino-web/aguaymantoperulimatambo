import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { CtaBand, FAQ, FloatingVideoButton, Gallery, IconCard, NewsCard, ProductCard, WholesaleBanner, WhyUs } from "@/components/site/Blocks";
import { images, news, products, services } from "@/lib/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Aguaymanto Perú — Aguaymanto peruano de calidad", "Producimos y comercializamos aguaymanto peruano seleccionado. Venta al por mayor para restaurantes, tiendas y distribuidores."),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Reveal className="relative">
            <img src={images.harvest} alt="Productores cosechando aguaymanto en el campo peruano" loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift" />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gold px-7 py-5 shadow-lift md:block">
              <p className="font-display text-2xl font-semibold text-accent-foreground">100% origen peruano</p>
            </div>
          </Reveal>
          <div>
            <SectionTitle eyebrow="Sobre nosotros" title="Comprometidos con la calidad del aguaymanto peruano"
              text="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes." />
            <Reveal><Link to="/quienes-somos" className="btn btn-forest mt-8">Conoce quiénes somos</Link></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Nuestros productos" title="Aguaymanto seleccionado para cada necesidad" />
            <Link to="/productos" className="btn btn-outline">Ver productos</Link>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {products.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Nuestros servicios" title="Atención para particulares y negocios" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s, i) => <IconCard key={s.title} item={s} i={i} cta />)}
          </div>
          <Reveal className="mt-10"><Link to="/servicios" className="btn btn-forest">Conocer nuestros servicios</Link></Reveal>
        </div>
      </section>

      <WholesaleBanner />
      <WhyUs />
      <Gallery />

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Noticias" title="Novedades y actualidad" />
            <Link to="/noticias" className="btn btn-outline">Ver todas</Link>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {news.map((n, i) => <NewsCard key={n.slug} n={n} i={i} />)}
          </div>
        </div>
      </section>

      <FAQ />
      <CtaBand />
    </>
  );
}
