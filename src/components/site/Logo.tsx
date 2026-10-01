import { cn } from "@/lib/utils";
import { site } from "@/lib/site-config";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
        <path d="M20 4c-4 6-12 9-12 19a12 12 0 0 0 24 0C32 13 24 10 20 4Z" className="fill-gold-soft/40 stroke-gold" strokeWidth="1.5" />
        <circle cx="20" cy="24" r="7.5" className="fill-gold" />
        <path d="M20 4c-2 4-1 8 0 12M20 4c3 3 4 7 3 11" className="stroke-leaf" strokeWidth="1.5" fill="none" />
      </svg>
      <span className={cn("font-display text-lg font-bold leading-none tracking-wide", light ? "text-on-dark" : "text-forest")}>
        {site.brand}
      </span>
    </span>
  );
}
