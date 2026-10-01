import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { NewsCard } from "@/components/site/Blocks";
import { formatDate, news } from "@/lib/content";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const item = news.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Aguaymanto Perú` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  component: Article,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-40 text-center">
      <h1 className="text-3xl text-forest">Noticia no encontrada</h1>
      <Link to="/noticias" className="btn btn-forest mt-6">Ver noticias</Link>
    </div>
  ),
});

function Article() {
  const n = Route.useLoaderData();
  const related = news.filter((x) => x.slug !== n.slug).slice(0, 2);
  return (
    <article className="pt-32">
      <div className="mx-auto max-w-3xl px-5">
        <Link to="/noticias" className="inline-flex items-center gap-2 text-sm font-bold text-leaf"><ArrowLeft className="h-4 w-4" /> Noticias</Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-wider text-leaf">{n.category} · <span className="text-muted-foreground">{formatDate(n.date)} · {n.author}</span></p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-forest md:text-5xl">{n.title}</h1>
      </div>
      <img src={n.image} alt={n.alt} className="mx-auto mt-10 aspect-[16/8] w-full max-w-5xl object-cover md:rounded-3xl" />
      <div className="mx-auto max-w-3xl space-y-5 px-5 py-12 text-lg leading-relaxed text-ink">
        {n.body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-3xl font-semibold text-forest">Noticias relacionadas</h2>
          <div className="mt-10 grid gap-7 md:grid-cols-2">{related.map((r, i) => <NewsCard key={r.slug} n={r} i={i} />)}</div>
        </div>
      </section>
    </article>
  );
}
