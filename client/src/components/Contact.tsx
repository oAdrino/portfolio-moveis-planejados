import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Contact Component
 * Design: Minimalist Modern - Two-column layout with form and info
 * Features: Contact form, social links, business information
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(48) 98465-0120',
      href: 'tel:+5548984650120',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'PriProjetista@gmail.com',
      href: 'mailto:priprojetista@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Balneário Piçarras, SC',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/pri_projetista/', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Entre em Contato
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos Conversar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tem um projeto em mente? Gostaria de saber mais sobre nossos serviços?
            Entre em contato conosco e vamos transformar sua visão em realidade.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
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
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
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
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="(11) 99999-9999"
                />
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
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
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
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                      {item.label}
                    </h4>
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
              <p className="text-muted-foreground text-sm mb-2">
                Segunda a Sexta: 09:00 - 18:00
              </p>
              <p className="text-muted-foreground text-sm">
                Sábado: 10:00 - 14:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
