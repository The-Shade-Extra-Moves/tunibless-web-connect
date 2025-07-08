import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useI18n } from "@/lib/i18n-context";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const { t } = useI18n();

  const handleThemeChange = () => {
    // Add transition class to body for smooth theme change
    document.body.classList.add('theme-transitioning');
    
    setTheme(theme === "light" ? "dark" : "light");
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 300);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleThemeChange}
      className="gap-2 relative"
      aria-label={t.theme.toggleTheme}
      title={theme === "light" ? t.theme.dark : t.theme.light}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">{t.theme.toggleTheme}</span>
    </Button>
  );
};

export default ThemeSwitcher;
