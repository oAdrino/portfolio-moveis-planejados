import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { toast } from "sonner";

/**
 * Contact Component
 * - Validação por campo
 * - Envio Netlify Forms (email/notificação via Netlify)
 * - Abre WhatsApp com mensagem pronta
 */

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function encodeNetlifyForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = useMemo(
    () => [
      {
        icon: Phone,
        label: "Telefone",
        value: "(48) 98465-0120",
        href: "https://wa.me/5548984650120",
        external: true,
      },
      {
        icon: Mail,
        label: "Email",
        value: "priprojetista@gmail.com",
        href: "mailto:priprojetista@gmail.com",
        external: false, // mailto pode abrir app; target pode ser ignorado
      },
      {
        icon: MapPin,
        label: "Localização",
        value: "Balneário Piçarras, SC",
        href: "https://www.google.com/maps/search/?api=1&query=Balne%C3%A1rio%20Pi%C3%A7arras%2C%20SC",
        external: true,
      },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [{ icon: Instagram, href: "https://www.instagram.com/pri_projetista/", label: "Instagram" }],
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // limpa erro do campo enquanto digita
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[name as keyof FormData];
      return copy;
    });
  };

  const validate = (data: FormData): FormErrors => {
    const next: FormErrors = {};

    if (!data.name.trim()) next.name = "Informe seu nome.";
    if (!data.email.trim()) next.email = "Informe seu e-mail.";
    else if (!isValidEmail(data.email.trim())) next.email = "E-mail inválido.";

    // telefone não é obrigatório, mas se preencher, valida
    if (data.phone.trim() && onlyDigits(data.phone).length < 10) {
      next.phone = "Telefone/WhatsApp inválido (mín. 10 dígitos).";
    }

    if (!data.message.trim()) next.message = "Escreva sua mensagem.";
    else if (data.message.trim().length < 10) next.message = "Mensagem muito curta (mín. 10 caracteres).";

    return next;
  };

  const openWhatsApp = (data: FormData) => {
    const text =
      `Olá! Meu nome é ${data.name}.\n` +
      (data.phone ? `Telefone: ${data.phone}\n` : "") +
      `E-mail: ${data.email}\n\n` +
      `Mensagem:\n${data.message}`;

    const url = `https://wa.me/5548984650120?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const postToNetlify = async (data: FormData) => {
    // Netlify Forms captura isso no deploy
    const payload: Record<string, string> = {
      "form-name": "contato",
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeNetlifyForm(payload),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors = validate(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast.error("Corrija os campos destacados.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1) envia pro Netlify (você recebe no painel + pode ativar email)
      await postToNetlify(formData);

      // 2) abre WhatsApp com mensagem pronta
      openWhatsApp(formData);

      toast.success("Mensagem enviada! Vou abrir o WhatsApp para você finalizar o contato.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      toast.error("Não foi possível enviar agora. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
  const inputError = "border-red-500 focus:ring-red-500";

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">Entre em Contato</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Vamos Conversar</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tem um projeto em mente? Gostaria de saber mais sobre nossos serviços? Entre em contato e vamos transformar sua visão em realidade.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              // Netlify Forms
              name="contato"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              {/* Netlify hidden fields */}
              <input type="hidden" name="form-name" value="contato" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputBase} border-border ${errors.name ? inputError : ""}`}
                  placeholder="Seu nome"
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputBase} border-border ${errors.email ? inputError : ""}`}
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputBase} border-border ${errors.phone ? inputError : ""}`}
                  placeholder="(48) 99999-9999"
                />
                {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputBase} border-border resize-none ${errors.message ? inputError : ""}`}
                  placeholder="Conte-nos sobre seu projeto..."
                />
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>

              <p className="text-xs text-muted-foreground">
                Ao enviar, você será direcionado ao WhatsApp com sua mensagem pronta. Também registramos sua solicitação para retorno.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Items */}
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">{item.label}</h4>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Divider */}
            <div className="h-px bg-border"></div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-secondary/50 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-foreground mb-3">Horário de Atendimento</h4>
              <p className="text-muted-foreground text-sm mb-2">Segunda a Sexta: 09:00 - 18:00</p>
              <p className="text-muted-foreground text-sm">Sábado: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
