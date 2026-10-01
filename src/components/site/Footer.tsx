import { Link } from "@tanstack/react-router";
import { nav, site, whatsappUrl } from "@/lib/site-config";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-forest text-on-dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm text-on-dark/75">{site.name}</p>
          <p className="mt-1 text-sm text-on-dark/75">{site.tagline}</p>
        </div>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-gold-soft">Enlaces</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="text-on-dark/80 hover:text-gold-soft">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-gold-soft">Información</h3>
          <ul className="mt-4 space-y-2 text-sm text-on-dark/80">
            <li><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">WhatsApp: {site.whatsappDisplay}</a></li>
            <li>Teléfono: {site.phone}</li>
            <li>Correo: {site.email}</li>
            <li>Dirección: {site.address}</li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-gold-soft">Redes sociales</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {Object.entries(site.social).map(([k, v]) => <li key={k}><a href={v} className="text-on-dark/80 hover:text-gold-soft">{k}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-on-dark/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-on-dark/65 md:flex-row">
          <p>© 2026 {site.name}. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link to="/privacidad" className="hover:text-gold-soft">Política de privacidad</Link>
            <Link to="/terminos" className="hover:text-gold-soft">Términos y condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
