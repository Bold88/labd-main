import { COUNTRIES } from './lib/countries';

// Simple navigation utilities without next-intl
export const locales = ['en', 'de', 'fr', 'es', 'it', 'ar'];

export function getCountryLocales(countrySlug: string) {
  const country = COUNTRIES.find(c => c.slug === countrySlug);
  return country ? country.languages.map(lang => lang.code) : locales;
}

export function createPathname(path: string, locale: string, countrySlug: string) {
  const country = COUNTRIES.find(c => c.slug === countrySlug);
  if (!country) return path;
  
  const isDefaultLocale = locale === country.defaultLanguage;
  
  if (isDefaultLocale) {
    return `/${countrySlug}${path}`;
  } else {
    return `/${countrySlug}/${locale}${path}`;
  }
}

export function parsePathname(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length === 0) return null;
  
  const countrySlug = segments[0];
  const country = COUNTRIES.find(c => c.slug === countrySlug);
  
  if (!country) return null;
  
  if (segments.length === 1) {
    return {
      countrySlug,
      locale: country.defaultLanguage,
      path: '/'
    };
  }
  
  const possibleLocale = segments[1];
  const language = country.languages.find(lang => lang.code === possibleLocale);
  
  if (language) {
    const path = '/' + segments.slice(2).join('/');
    return {
      countrySlug,
      locale: possibleLocale,
      path: path === '/' ? '/' : path
    };
  } else {
    const path = '/' + segments.slice(1).join('/');
    return {
      countrySlug,
      locale: country.defaultLanguage,
      path
    };
  }
}
