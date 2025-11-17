import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top;
        setScrollY(scrollProgress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stories = [
    {
      emoji: "🎮",
      title: t.story1Title,
      content: (
        <>
          {t.story1} <span className="text-primary font-semibold">{t.story1Bold}</span>
          {t.story1Text} <span className="font-mono text-tech-cyan">Delphi 5</span> {t.story1End}
        </>
      ),
      color: "primary",
    },
    {
      emoji: "✨",
      title: t.story2Title,
      content: (
        <>
          {t.story2} <span className="font-mono text-tech-cyan">ActionScript</span> {t.story2Mid}
          <span className="font-semibold"> Macromedia Flash</span> {t.story2End}
        </>
      ),
      color: "accent",
    },
    {
      emoji: "💼",
      title: t.story3Title,
      content: (
        <>
          {t.story3} <span className="text-primary font-semibold">{t.story3Bold}</span>
          {t.story3Mid} <span className="font-mono text-tech-cyan">PHP e ASP.NET</span>{t.story3End}
        </>
      ),
      color: "primary",
    },
    {
      emoji: "📱",
      title: t.story4Title,
      content: (
        <>
          {t.story4} <span className="font-mono text-tech-cyan">PhoneGap, Ionic, Appcelerator Titanium</span>
          {t.story4Mid} <span className="text-primary font-semibold">{t.story4Bold}</span>{t.story4End}
        </>
      ),
      color: "accent",
    },
    {
      emoji: "❤️",
      title: t.story5Title,
      content: (
        <>
          <p className="mb-4">
            {t.story5} <span className="font-semibold">iPhone 3GS</span>{t.story5Mid}{" "}
            <span className="font-mono">Objective-C</span> {t.story5Text}{" "}
            <span className="font-bold">{t.story5Bold}</span>{t.story5End}
          </p>
          <p>
            {t.story5P2} <span className="font-mono font-bold">Swift 1</span> {t.story5P2Mid}{" "}
            <span className="font-mono font-bold">Swift 6</span>{t.story5P2End}
          </p>
        </>
      ),
      color: "gradient",
      gradient: true,
    },
    {
      emoji: "🔄",
      title: t.story6Title,
      content: (
        <>
          {t.story6} <span className="text-primary font-semibold">{t.story6Bold}</span>
          {t.story6Mid} <span className="font-mono text-tech-cyan">Flutter</span> e{" "}
          <span className="font-mono text-tech-cyan">Kotlin Multiplatform</span> {t.story6End}
        </>
      ),
      color: "primary",
    },
    {
      emoji: "🏆",
      title: t.story7Title,
      content: (
        <>
          {t.story7} <span className="text-primary font-semibold">{t.story7Bold}</span>
          {t.story7Mid} <span className="font-semibold">NindoConnect</span> {t.story7End}
        </>
      ),
      color: "accent",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background -z-10" />
      
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-tech-purple/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-tech-cyan/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 relative">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            {t.title} <span className="text-primary">{t.titleHighlight}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          {/* Timeline Stories with Parallax */}
          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            {stories.map((story, index) => {
              const parallaxOffset = scrollY * (0.05 + index * 0.02);
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    transform: `translateY(${parallaxOffset}px)`,
                    transition: 'transform 0.1s ease-out',
                  }}
                >
                  {/* Timeline connector */}
                  {index < stories.length - 1 && (
                    <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-primary to-transparent -translate-x-1/2 opacity-30" />
                  )}

                  <div
                    className={`flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : `translateX(${isLeft ? '-50px' : '50px'})`,
                      transition: `all 0.8s ease-out ${index * 0.15}s`,
                    }}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary items-center justify-center shadow-glow-cyan">
                      <span className="text-2xl">{story.emoji}</span>
                    </div>

                    {/* Story card */}
                    <div
                      className={`flex-1 p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 ${
                        story.gradient
                          ? 'bg-gradient-primary text-primary-foreground'
                          : 'bg-card'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-4 md:hidden">
                        <span className="text-3xl">{story.emoji}</span>
                        <h3 className={`text-2xl font-bold ${story.gradient ? '' : `text-${story.color}`}`}>
                          {story.title}
                        </h3>
                      </div>
                      <h3 className={`text-2xl font-bold mb-4 hidden md:block ${story.gradient ? '' : `text-${story.color}`}`}>
                        {story.title}
                      </h3>
                      <div className={`leading-relaxed ${story.gradient ? '' : 'text-muted-foreground'}`}>
                        {story.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
