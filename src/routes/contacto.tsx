import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader, Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQ } from "@/components/site/Blocks";
import { images } from "@/lib/content";
import { site, whatsappUrl } from "@/lib/site-config";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  validateSearch: z.object({ producto: z.string().optional() }),
  head: () => seo("Contacto y cotizaciones — Aguaymanto Perú", "Solicita una cotización de aguaymanto peruano. Contáctanos por WhatsApp, teléfono, correo o formulario."),
  component: Contact,
});

function Contact() {
  const { producto } = Route.useSearch();
  const info = [
    { icon: MessageCircle, label: "WhatsApp", value: site.whatsappDisplay, href: whatsappUrl() },
    { icon: Phone, label: "Teléfono", value: site.phone },
    { icon: Mail, label: "Correo electrónico", value: site.email },
    { icon: MapPin, label: "Dirección", value: `${site.address}, ${site.city}` },
    { icon: Clock, label: "Horario de atención", value: site.hours },
  ];
  return (
    <>
      <PageHeader eyebrow="Contacto" title="Estamos aquí para atenderte" text="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos." image={images.fruit} />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <h2 className="text-2xl font-semibold text-forest">Datos de contacto</h2>
            <ul className="mt-6 space-y-5">
              {info.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream text-gold"><Icon className="h-5 w-5" /></span>
                  <div>
                    <p className="text-sm font-bold text-forest">{label}</p>
                    {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-leaf">{value}</a> : <p className="text-muted-foreground">{value}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-forest mt-8">Consultar por WhatsApp</a>
          </Reveal>
          <Reveal className="rounded-3xl bg-card p-6 shadow-lift md:p-10">
            <h2 className="mb-6 text-2xl font-semibold text-forest">Solicitar cotización</h2>
            <ContactForm defaultProduct={producto ?? ""} />
          </Reveal>
        </div>
      </section>
      <FAQ />
    </>
  );
}
