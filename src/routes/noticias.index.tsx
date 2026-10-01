import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Reveal";
import { NewsCard } from "@/components/site/Blocks";
import { images, news } from "@/lib/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/noticias/")({
  head: () => seo("Noticias y actualidad — Aguaymanto Perú", "Noticias de la empresa, agricultura, aguaymanto, mercado y producción."),
  component: NewsList,
});

function NewsList() {
  return (
    <>
      <PageHeader eyebrow="Noticias y actualidad" title="Novedades desde el campo peruano" image={images.field} />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 md:grid-cols-3">
          {news.map((n, i) => <NewsCard key={n.slug} n={n} i={i} />)}
        </div>
      </section>
    </>
  );
}
