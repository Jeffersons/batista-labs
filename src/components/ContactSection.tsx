import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const ContactSection = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `${language === "pt" ? "Contato de" : language === "en" ? "Contact from" : "Contacto de"} ${formData.name}`;
    const body = `${language === "pt" ? "Nome" : language === "en" ? "Name" : "Nombre"}: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${language === "pt" ? "Mensagem" : language === "en" ? "Message" : "Mensaje"}:%0D%0A${formData.message}`;
    window.location.href = `mailto:jeffsouzabatista@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: t.toastTitle,
      description: t.toastDescription,
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-tech-purple/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tech-cyan/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            {t.title} <span className="text-primary">{t.titleHighlight}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6">{t.infoTitle}</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:jeffsouzabatista@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t.emailLabel}</p>
                      <p className="font-medium">jeffsouzabatista@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="p-3 rounded-full bg-primary/20">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t.locationLabel}</p>
                      <p className="font-medium">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">{t.socialTitle}</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Jeffersons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-xl bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/jeffersons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-xl bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">{t.formTitle}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {t.sendButton}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
