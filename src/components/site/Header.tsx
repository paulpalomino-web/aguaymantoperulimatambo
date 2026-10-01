import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", solid ? "bg-background/95 py-3 shadow-soft backdrop-blur" : "py-5")}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link to="/" aria-label="Ir al inicio"><Logo light={!solid} /></Link>
        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className={cn("text-sm font-semibold transition-colors", solid ? "text-ink hover:text-leaf" : "text-on-dark/90 hover:text-gold-soft")}
              activeProps={{ className: solid ? "!text-leaf" : "!text-gold-soft" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contacto" className="btn btn-gold hidden !px-5 !py-2.5 sm:inline-flex">Solicitar cotización</Link>
          <button onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}
            className={cn("rounded-md p-2 lg:hidden", solid ? "text-forest" : "text-on-dark")}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Móvil" className="mx-5 mt-3 flex flex-col gap-1 rounded-xl border bg-background p-4 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="rounded-md px-3 py-3 font-semibold text-ink hover:bg-muted" activeProps={{ className: "!text-leaf" }}>{n.label}</Link>
          ))}
          <Link to="/contacto" className="btn btn-gold mt-2">Solicitar cotización</Link>
        </nav>
      )}
    </header>
  );
}
