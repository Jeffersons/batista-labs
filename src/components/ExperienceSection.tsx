import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language].experience;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: t.nindo.title,
      role: t.nindo.role,
      period: t.nindo.period,
      location: t.nindo.location,
      highlights: t.nindo.highlights,
      color: "primary",
    },
    {
      title: t.symphony.title,
      role: t.symphony.role,
      period: t.symphony.period,
      location: t.symphony.location,
      highlights: t.symphony.highlights,
      color: "accent",
    },
    {
      title: t.santander.title,
      role: t.santander.role,
      period: t.santander.period,
      location: t.santander.location,
      highlights: t.santander.highlights,
      color: "primary",
    },
    {
      title: t.twisper.title,
      role: t.twisper.role,
      period: t.twisper.period,
      location: t.twisper.location,
      highlights: t.twisper.highlights,
      color: "accent",
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            {t.title} <span className="text-primary">{t.titleHighlight}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`group relative transition-all duration-500 delay-${index * 100}`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-transparent opacity-30" />
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${exp.color}/20 border-2 border-${exp.color} flex items-center justify-center relative z-10`}>
                    <Briefcase className={`w-6 h-6 text-${exp.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-glow-cyan">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className={`text-2xl font-bold text-${exp.color} mb-1`}>
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-foreground">
                            {exp.role}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-mono">{exp.period}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
