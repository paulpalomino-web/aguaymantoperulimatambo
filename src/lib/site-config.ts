// Datos editables de la empresa. Reemplaza los valores entre corchetes.
export const site = {
  name: "[NOMBRE DE LA EMPRESA]",
  brand: "AGUAYMANTO PERÚ",
  tagline: "Calidad y compromiso desde el campo peruano.",
  phone: "[TELÉFONO]",
  whatsapp: "51900000000", // [WHATSAPP] solo dígitos con código de país
  whatsappDisplay: "[WHATSAPP]",
  email: "[CORREO]",
  address: "[DIRECCIÓN]",
  city: "[CIUDAD]",
  hours: "[HORARIO]",
  whatsappMessage:
    "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
  social: {
    Facebook: "#",
    Instagram: "#",
    TikTok: "#",
    LinkedIn: "#",
  },
};

export const whatsappUrl = (msg = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const nav = [
  { to: "/", label: "Inicio" },
  { to: "/quienes-somos", label: "Quiénes Somos" },
  { to: "/productos", label: "Productos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/noticias", label: "Noticias" },
  { to: "/contacto", label: "Contacto" },
] as const;
