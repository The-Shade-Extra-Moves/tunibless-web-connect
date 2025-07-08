import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { SUPPORTED_LANGUAGES } from "@/lib/i18n-types";

const LanguageSwitcher = () => {
  const { language, setLanguage, t, isRTL } = useI18n();

  const currentLangConfig = SUPPORTED_LANGUAGES.find(l => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-2 px-2"
          aria-label={t.language.switchTo}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLangConfig?.flag}</span>
          <span className="hidden md:inline">{currentLangConfig?.nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align={isRTL ? "start" : "end"} 
        className="min-w-[160px]"
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-3 ${
              language === lang.code ? "bg-accent" : ""
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="flex-1">{lang.nativeName}</span>
            {language === lang.code && (
              <span className="text-xs text-muted-foreground">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
