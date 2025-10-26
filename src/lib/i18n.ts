import { notFound } from 'next/navigation';
import { LocaleCode } from '../types/i18n';

export const locales: LocaleCode[] = [
  'en', 'de', 'fr', 'es', 'it', 'pt', 'nl', 'sv', 'no', 'da', 
  'fi', 'pl', 'cs', 'sk', 'ro', 'hu', 'tr', 'ar-AE', 'ru', 'zh-CN'
];

export const defaultLocale: LocaleCode = 'en';

export function getLocale(locale: string): LocaleCode {
  if (locales.includes(locale as LocaleCode)) {
    return locale as LocaleCode;
  }
  notFound();
}

export async function getMessages(locale: LocaleCode) {
  try {
    const messages = (await import(`../i18n/${locale}/common.json`)).default;
    return messages;
  } catch (error) {
    // Fallback to English if locale not found
    if (locale !== defaultLocale) {
      const fallbackMessages = (await import(`../i18n/${defaultLocale}/common.json`)).default;
      return fallbackMessages;
    }
    throw error;
  }
}

export function isValidLocale(locale: string): boolean {
  return locales.includes(locale as LocaleCode);
}
