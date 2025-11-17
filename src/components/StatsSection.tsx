import { useEffect, useRef, useState } from "react";
import { Code2, Rocket, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language].about;

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

  const stats = [
    { icon: Code2, label: t.statsYears, value: "25+" },
    { icon: Rocket, label: t.statsApps, value: "2" },
    { icon: Users, label: t.statsUsers, value: language === "pt" ? "Milhões" : "Millions" },
    { icon: Award, label: t.statsLanguages, value: "15+" },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 -z-10" />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${index * 0.1}s`,
              }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
