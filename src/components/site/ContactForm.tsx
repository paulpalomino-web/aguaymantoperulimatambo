import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { products } from "@/lib/content";

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre completo").max(100),
  empresa: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Correo no válido").max(255),
  telefono: z.string().trim().min(6, "Teléfono no válido").max(20).regex(/^[0-9+\s()-]+$/, "Teléfono no válido"),
  ciudad: z.string().trim().min(2, "Indica tu ciudad").max(80),
  tipo: z.string().min(1, "Selecciona un tipo de cliente"),
  producto: z.string().min(1, "Selecciona un producto"),
  cantidad: z.string().trim().max(60).optional(),
  asunto: z.string().trim().min(3, "Indica un asunto").max(120),
  mensaje: z.string().trim().min(10, "El mensaje es muy corto").max(1000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field = "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";
const label = "text-sm font-semibold text-forest";

export function ContactForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as keyof Errors] ??= i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    // TODO: conectar con servicio de email, CRM o backend.
    setSent(true);
  };

  if (sent) return (
    <div role="status" className="flex flex-col items-center rounded-2xl bg-cream p-10 text-center">
      <CheckCircle2 className="h-14 w-14 text-leaf" />
      <p className="mt-4 text-lg font-semibold text-forest">Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos contigo pronto.</p>
    </div>
  );

  const F = ({ name, text, type = "text", req = true }: { name: keyof Errors; text: string; type?: string; req?: boolean }) => (
    <div>
      <label htmlFor={name} className={label}>{text}{req && " *"}</label>
      <input id={name} name={name} type={type} className={field} aria-invalid={!!errors[name]} />
      {errors[name] && <p className="mt-1 text-sm text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 md:grid-cols-2">
      {F({ name: "nombre", text: "Nombre completo" })}
      {F({ name: "empresa", text: "Empresa", req: false })}
      {F({ name: "email", text: "Correo electrónico", type: "email" })}
      {F({ name: "telefono", text: "Teléfono", type: "tel" })}
      {F({ name: "ciudad", text: "Ciudad" })}
      <div>
        <label htmlFor="tipo" className={label}>Tipo de cliente *</label>
        <select id="tipo" name="tipo" defaultValue="" className={field}>
          <option value="" disabled>Selecciona</option>
          {["Particular", "Restaurante / Hotel", "Tienda", "Distribuidor", "Empresa", "Otro"].map((o) => <option key={o}>{o}</option>)}
        </select>
        {errors.tipo && <p className="mt-1 text-sm text-destructive">{errors.tipo}</p>}
      </div>
      <div>
        <label htmlFor="producto" className={label}>Producto de interés *</label>
        <select id="producto" name="producto" defaultValue={defaultProduct} className={field}>
          <option value="" disabled>Selecciona</option>
          {products.map((p) => <option key={p.slug}>{p.title}</option>)}
          {defaultProduct && !products.some((p) => p.title === defaultProduct) && <option>{defaultProduct}</option>}
          <option>Otro</option>
        </select>
        {errors.producto && <p className="mt-1 text-sm text-destructive">{errors.producto}</p>}
      </div>
      {F({ name: "cantidad", text: "Cantidad aproximada", req: false })}
      <div className="md:col-span-2">{F({ name: "asunto", text: "Asunto" })}</div>
      <div className="md:col-span-2">
        <label htmlFor="mensaje" className={label}>Mensaje *</label>
        <textarea id="mensaje" name="mensaje" rows={5} className={field} aria-invalid={!!errors.mensaje} />
        {errors.mensaje && <p className="mt-1 text-sm text-destructive">{errors.mensaje}</p>}
      </div>
      <div className="md:col-span-2"><button type="submit" className="btn btn-gold w-full sm:w-auto">Enviar consulta</button></div>
    </form>
  );
}
