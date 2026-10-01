import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp p-3.5 text-on-dark shadow-lift transition-transform hover:scale-105 md:pr-5">
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm font-bold md:inline">¿Necesitas información?</span>
    </a>
  );
}
