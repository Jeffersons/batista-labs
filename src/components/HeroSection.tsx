import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import jeffersonPhoto from "@/assets/jefferson-photo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { language } = useLanguage();
  const t = translations[language].hero;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background layers */}
      <div 
        className="absolute inset-0 bg-gradient-dark"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Floating grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: `linear-gradient(hsl(var(--tech-cyan) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--tech-cyan) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />

      {/* Glowing orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-cyan rounded-full blur-[120px] opacity-20 animate-float"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-purple rounded-full blur-[120px] opacity-20 animate-float"
        style={{ animationDelay: '1s', transform: `translateY(${scrollY * 0.15}px)` }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="animate-fade-in-up max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-8 md:gap-12 items-center">
            {/* Profile Photo */}
            <div className="relative group mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                <img 
                  src={jeffersonPhoto} 
                  alt="Jefferson Batista" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="inline-block mb-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20">
                <span className="text-sm font-mono text-primary">{t.role}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-tech-light via-tech-cyan to-tech-purple bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                Jefferson Batista
              </h1>
              
              <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {t.description}{" "}
                  <span className="text-primary font-semibold">{t.years}</span> {t.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {t.contactButton}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/50 hover:bg-primary/10"
                  onClick={() => window.open("https://github.com/Jeffersons", "_blank")}
                >
                  <Github className="mr-2 h-5 w-5" />
                  {t.projectsButton}
                </Button>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/Jeffersons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/jeffersons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:jeffsouzabatista@gmail.com"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
      >
        <span className="text-sm font-mono">{t.scrollDown}</span>
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};
