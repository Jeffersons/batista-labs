import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language].skills;

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

  const skillCategories = [
    {
      title: t.mobile,
      skills: [
        { name: "Swift & SwiftUI", level: 95 },
        { name: "UIKit", level: 95 },
        { name: "Kotlin Multiplatform", level: 85 },
        { name: "Compose Multiplatform", level: 85 },
      ],
    },
    {
      title: t.architecture,
      skills: [
        { name: "Clean Architecture", level: 95 },
        { name: "MVVM", level: 90 },
        { name: "VIPER", level: 90 },
        { name: "Dependency Injection", level: 90 },
      ],
    },
    {
      title: t.backend,
      skills: [
        { name: "Firebase", level: 90 },
        { name: "RESTful APIs", level: 85 },
        { name: "Cloud Functions", level: 80 },
        { name: "Firestore & Storage", level: 90 },
      ],
    },
    {
      title: t.devops,
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "CI/CD (Jenkins, GitLab)", level: 85 },
        { name: "Unit Testing (XCTest)", level: 90 },
        { name: "Analytics & Monitoring", level: 85 },
      ],
    },
  ];

  const achievements = [
    { icon: "🏆", title: t.achievement1Title, description: t.achievement1Desc },
    { icon: "📱", title: t.achievement2Title, description: t.achievement2Desc },
    { icon: "🎯", title: t.achievement3Title, description: t.achievement3Desc },
    { icon: "⚡", title: t.achievement4Title, description: t.achievement4Desc },
  ];

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--tech-cyan)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            {t.title} <span className="text-primary">{t.titleHighlight}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center group"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${0.4 + catIndex * 0.1}s`
                }}
              >
                <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${0.5 + catIndex * 0.1 + skillIndex * 0.05}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
