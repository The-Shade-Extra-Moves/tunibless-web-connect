import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LanguageCode, TranslationKeys, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './i18n-types';
import { translations } from './translations';

interface I18nContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationKeys;
  isRTL: boolean;
  direction: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('tunibless-language');
    if (savedLanguage && SUPPORTED_LANGUAGES.find(l => l.code === savedLanguage)) {
      return savedLanguage as LanguageCode;
    }
    
    // Check browser language
    const browserLanguage = navigator.language.split('-')[0];
    if (SUPPORTED_LANGUAGES.find(l => l.code === browserLanguage)) {
      return browserLanguage as LanguageCode;
    }
    
    return DEFAULT_LANGUAGE;
  });

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('tunibless-language', lang);
    
    // Update document direction
    const langConfig = SUPPORTED_LANGUAGES.find(l => l.code === lang);
    if (langConfig) {
      document.documentElement.dir = langConfig.direction;
      document.documentElement.lang = lang;
    }
  };

  const currentLangConfig = SUPPORTED_LANGUAGES.find(l => l.code === language);
  const isRTL = currentLangConfig?.direction === 'rtl';
  const direction = currentLangConfig?.direction || 'ltr';

  // Get translations with fallback
  const t = translations[language] || translations[DEFAULT_LANGUAGE];

  // Update document direction on language change
  useEffect(() => {
    if (currentLangConfig) {
      document.documentElement.dir = currentLangConfig.direction;
      document.documentElement.lang = language;
    }
  }, [language, currentLangConfig]);

  const value: I18nContextType = {
    language,
    setLanguage,
    t,
    isRTL,
    direction,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

// Hook for getting specific translation path
export const useTranslation = () => {
  const { t, language, isRTL, direction, setLanguage } = useI18n();
  
  return {
    t,
    language,
    isRTL,
    direction,
    setLanguage,
    // Helper function to get nested translation
    getText: (path: string) => {
      const keys = path.split('.');
      let value: any = t;
      for (const key of keys) {
        value = value?.[key];
      }
      return value || path; // Return path if translation not found
    }
  };
};
