import { faqDataDe } from './de';
import { faqDataAr } from './ar';
import { faqDataFr } from './fr';
import { faqDataEn } from './en';
import { LanguageCode } from '../i18n-types';

export interface FAQQuestion {
  id: string;
  question: string;
  answer: string;
  relatedLinks: Array<{ text: string; url: string }>;
  tags: string[];
  lastUpdated: string;
  isNew: boolean;
  isUpdated: boolean;
}

export interface FAQData {
  categories: Record<string, string>;
  questions: Record<string, FAQQuestion[]>;
}

export const faqData: Record<LanguageCode, FAQData> = {
  de: faqDataDe,
  ar: faqDataAr,
  fr: faqDataFr,
  en: faqDataEn
};

export * from './de';
export * from './ar';
export * from './fr';
export * from './en';
