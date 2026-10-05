import { useEffect, useState, type ReactNode } from "react";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

/** YouTube video sobre el aguaymanto (en español). */
const VIDEO_ID = "z0REqfpfhFI";

export function VideoButton({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn("inline-flex items-center gap-2", className)}
        aria-haspopup="dialog"
      >
        {children ?? (
          <>
            <Play className="h-4 w-4" /> Ver video
          </>
        )}
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video sobre el aguaymanto"
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-overlay/95 p-4 sm:p-8"
          onClick={() => setOpen(false)}
        >
          <button
            aria-label="Cerrar video"
            className="absolute right-5 top-5 rounded-full bg-on-dark/15 p-2.5 text-on-dark transition-colors hover:bg-on-dark/25"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Aguaymanto: la fruta dorada de los Andes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
          <p className="mt-4 max-w-5xl text-center text-sm text-on-dark/80">
            Video de YouTube: «Aguaymanto, un superalimento» — se reproduce directamente desde YouTube.
          </p>
        </div>
      )}
    </>
  );
}
