import fruit from "@/assets/hero-fruit.jpg";
import field from "@/assets/hero-field.jpg";
import harvest from "@/assets/hero-harvest.jpg";
import packaged from "@/assets/packaged.jpg";
import {
  Award, HeartHandshake, ShieldCheck, Scale, Lightbulb, Sprout,
  ShoppingBasket, Truck, UtensilsCrossed, Store, PackageOpen, MessagesSquare,
  type LucideIcon,
} from "lucide-react";

export const images = { fruit, field, harvest, packaged };

export type Product = {
  slug: string; title: string; description: string; cta: string; image: string; alt: string;
  presentation?: string; weight?: string; availability?: string; price?: string; features?: string[];
};

export const products: Product[] = [
  { slug: "aguaymanto-fresco", title: "Aguaymanto fresco", description: "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.", cta: "Solicitar información", image: fruit, alt: "Aguaymanto fresco con su cáliz sobre madera" },
  { slug: "distribucion", title: "Aguaymanto para distribución", description: "Presentaciones orientadas a clientes comerciales y distribuidores.", cta: "Consultar", image: packaged, alt: "Aguaymanto empacado en envases y cajas para distribución" },
  { slug: "presentaciones-especiales", title: "Presentaciones especiales", description: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.", cta: "Consultar presentación", image: harvest, alt: "Cestas con aguaymanto recién cosechado" },
];

export type Item = { icon: LucideIcon; title: string; text: string };

export const services: Item[] = [
  { icon: ShoppingBasket, title: "Venta de aguaymanto", text: "Venta de producto para clientes particulares y comerciales." },
  { icon: Truck, title: "Venta al por mayor", text: "Atención de pedidos de mayor volumen." },
  { icon: UtensilsCrossed, title: "Atención a restaurantes", text: "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos." },
  { icon: Store, title: "Tiendas y distribuidores", text: "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta." },
  { icon: PackageOpen, title: "Pedidos personalizados", text: "Evaluación de requerimientos específicos según producto, volumen y disponibilidad." },
  { icon: MessagesSquare, title: "Asesoría comercial", text: "Atención personalizada para ayudar al cliente a elegir la presentación adecuada." },
];

export const values: Item[] = [
  { icon: Award, title: "Calidad", text: "Trabajamos para ofrecer productos que cumplan altos estándares." },
  { icon: HeartHandshake, title: "Compromiso", text: "Cumplimos nuestros compromisos con clientes y colaboradores." },
  { icon: ShieldCheck, title: "Responsabilidad", text: "Actuamos responsablemente en nuestras operaciones." },
  { icon: Scale, title: "Integridad", text: "Construimos relaciones basadas en confianza y transparencia." },
  { icon: Lightbulb, title: "Innovación", text: "Buscamos mejorar continuamente nuestros procesos." },
  { icon: Sprout, title: "Sostenibilidad", text: "Promovemos prácticas responsables con nuestro entorno." },
];

export const institutional = {
  mission: "Producir y comercializar aguaymanto de calidad, trabajando con responsabilidad, eficiencia y compromiso para satisfacer las necesidades de nuestros clientes y generar valor de manera sostenible.",
  vision: "Ser una empresa reconocida por la calidad de nuestros productos, la confiabilidad de nuestro servicio y nuestra capacidad para generar oportunidades en nuevos mercados.",
  history: [
    { n: "01", title: "Nuestros inicios", text: "Inicio de las actividades de la empresa." },
    { n: "02", title: "Crecimiento", text: "Desarrollo de nuestras operaciones y ampliación de clientes." },
    { n: "03", title: "Consolidación", text: "Fortalecimiento de nuestros procesos y productos." },
    { n: "04", title: "Proyección", text: "Expansión hacia nuevos mercados y oportunidades comerciales." },
  ],
  commitment: [
    { title: "Calidad", text: "Cuidamos cada etapa, desde el campo hasta la entrega, para ofrecer un producto consistente." },
    { title: "Personas", text: "Valoramos a nuestros colaboradores, productores y clientes como base de nuestro crecimiento." },
    { title: "Medio ambiente", text: "Buscamos prácticas responsables que respeten la tierra que nos da el fruto." },
  ],
};

export const quality = ["Selección cuidadosa", "Frescura", "Presentación", "Control de calidad", "Empaque adecuado", "Atención al cliente"];

export const whyUs = [
  { title: "Producto seleccionado", text: "Trabajamos para ofrecer una presentación adecuada y consistente." },
  { title: "Calidad", text: "Priorizamos la calidad en cada etapa." },
  { title: "Atención personalizada", text: "Escuchamos las necesidades de cada cliente." },
  { title: "Compromiso", text: "Buscamos relaciones comerciales duraderas." },
  { title: "Origen peruano", text: "Nuestro producto tiene origen en el campo peruano." },
];

export type News = {
  slug: string; title: string; category: string; date: string; author: string; image: string; alt: string; excerpt: string; body: string[];
};

// Contenido de ejemplo: editar o eliminar libremente.
export const news: News[] = [
  { slug: "aguaymanto-peruano-nuevos-mercados", title: "El aguaymanto peruano y su presencia en nuevos mercados", category: "Mercado", date: "2026-09-15", author: "Equipo editorial", image: field, alt: "Plantación de aguaymanto en un valle andino", excerpt: "Un fruto andino que gana espacio en la mesa de nuevos consumidores.", body: ["Contenido de ejemplo. Aquí se publicará el artículo completo sobre la presencia del aguaymanto peruano en nuevos mercados.", "Este texto puede reemplazarse por la noticia real de la empresa."] },
  { slug: "cultivo-del-aguaymanto", title: "Conoce más sobre el cultivo del aguaymanto", category: "Agricultura", date: "2026-08-28", author: "Equipo editorial", image: harvest, alt: "Productores cosechando aguaymanto a mano", excerpt: "Del campo a la cosecha: un recorrido por el cultivo de este fruto.", body: ["Contenido de ejemplo sobre el cultivo del aguaymanto.", "Reemplaza este texto con información verificada por la empresa."] },
  { slug: "calidad-produccion-responsable", title: "Nuestra apuesta por la calidad y la producción responsable", category: "Noticias de la empresa", date: "2026-08-10", author: "Equipo editorial", image: packaged, alt: "Aguaymanto seleccionado y empacado", excerpt: "Cómo entendemos la calidad en cada etapa de nuestro trabajo.", body: ["Contenido de ejemplo sobre el compromiso de la empresa con la calidad.", "Este artículo puede editarse o eliminarse."] },
];

export const gallery = [
  { src: field, alt: "Campos de cultivo de aguaymanto en los Andes" },
  { src: fruit, alt: "Aguaymanto fresco con cáliz" },
  { src: harvest, alt: "Cosecha de aguaymanto por productores" },
  { src: packaged, alt: "Empaque de aguaymanto para comercialización" },
];

export const faqs = [
  { q: "¿Qué productos ofrecen?", a: "Ofrecemos aguaymanto fresco, presentaciones para distribución y presentaciones especiales según disponibilidad." },
  { q: "¿Realizan ventas al por mayor?", a: "Sí, atendemos pedidos por volumen para negocios y distribuidores. Solicita una cotización." },
  { q: "¿Atienden restaurantes y empresas?", a: "Sí, trabajamos con restaurantes, hoteles, cafeterías, tiendas y empresas." },
  { q: "¿Qué presentaciones tienen disponibles?", a: "Las presentaciones varían según temporada y disponibilidad. Contáctanos para conocer las opciones actuales." },
  { q: "¿Realizan entregas?", a: "Coordinamos entregas según volumen y ubicación. Consúltanos por los detalles." },
  { q: "¿Cómo puedo solicitar una cotización?", a: "Completa el formulario de contacto o escríbenos por WhatsApp indicando producto y cantidad aproximada." },
  { q: "¿Cómo puedo comunicarme con ustedes?", a: "Por WhatsApp, teléfono, correo electrónico o el formulario de contacto." },
];

export const formatDate = (d: string) =>
  new Date(d + "T12:00:00").toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" });
