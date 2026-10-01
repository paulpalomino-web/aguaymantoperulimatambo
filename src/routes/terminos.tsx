import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site-config";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terminos")({
  head: () => seo("Términos y condiciones — Aguaymanto Perú", "Términos y condiciones de uso del sitio web."),
  component: () => (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-36">
      <h1 className="text-4xl font-semibold text-forest">Términos y condiciones</h1>
      <p className="mt-6 text-muted-foreground">Texto provisional. Reemplaza este contenido con los términos oficiales de {site.name}.</p>
    </div>
  ),
});
