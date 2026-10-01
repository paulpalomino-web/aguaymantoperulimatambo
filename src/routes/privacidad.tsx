import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site-config";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacidad")({
  head: () => seo("Política de privacidad — Aguaymanto Perú", "Cómo tratamos los datos personales que nos compartes a través del sitio web."),
  component: () => (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-36">
      <h1 className="text-4xl font-semibold text-forest">Política de privacidad</h1>
      <p className="mt-6 text-muted-foreground">Texto provisional. {site.name} utiliza los datos enviados mediante el formulario de contacto únicamente para responder consultas y cotizaciones. Reemplaza este contenido con la política oficial de la empresa.</p>
    </div>
  ),
});
