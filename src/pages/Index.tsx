import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { StatsSection } from "@/components/StatsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <main className="min-h-screen bg-background text-foreground font-['Inter']">
      <LanguageSelector />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <StatsSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 Jefferson Batista. Desenvolvido com React, TypeScript e Tailwind CSS.
          </p>
          <p className="text-xs mt-2">
            Senior iOS Engineer • 13+ Anos de Experiência • Aberto para Oportunidades Remotas
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
