import { translations, Translation } from '../data/translations';

export function getTranslation(locale: string): Translation {
  // Fallback to English if the locale is not found
  return translations[locale] || translations['en'];
}

export function interpolate(text: string, variables: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    return variables[key] || match;
  });
}
