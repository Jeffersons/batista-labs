import { HeroSection } from "@/components/HeroSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-['Inter']">
      <HeroSection />
      
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
