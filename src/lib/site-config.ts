// Datos editables de la empresa. Reemplaza los valores entre corchetes.
export const site = {
  name: "AGUAYMANTO PERÚ LIMATAMBO",
  brand: "AGUAYMANTO PERÚ",
  tagline: "Calidad y compromiso desde el campo peruano.",
  phone: "+51 978348772",
  whatsapp: "51978348772",
  whatsappDisplay: "+51 978348772",
  email: "paul@aguaymantoperulimatambo.gmail.com",
  address: "comunidad ccoyor - limatambo - anta -cusco",
  city: "",
  hours: "Lunes a viernes",
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
