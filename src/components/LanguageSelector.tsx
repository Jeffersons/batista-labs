import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "pt", label: "PT", flag: "🇧🇷" },
    { code: "en", label: "EN", flag: "🇺🇸" },
    { code: "es", label: "ES", flag: "🇪🇸" },
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-glow-cyan">
      <Globe className="w-4 h-4 text-primary" />
      <div className="flex gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              language === lang.code
                ? "bg-primary text-primary-foreground shadow-glow-cyan"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <span className="mr-1">{lang.flag}</span>
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};
