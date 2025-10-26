export interface Country {
  code: string; // ISO 3166-1 alpha-2
  name: string;
  slug: string; // URL-friendly slug
  continent: string;
  languages: Language[];
  defaultLanguage: string;
  currency: string;
  timezone: string;
  flag: string;
  region: string; // MENA, Europe, Asia, Americas
}

export interface Language {
  code: string; // BCP 47 language tag
  name: string;
  nativeName: string;
  isRTL: boolean;
  tone: 'formal' | 'neutral' | 'informal';
}

export interface CountryData {
  countries: Country[];
  getCountryBySlug: (slug: string) => Country | undefined;
  getLanguageByCode: (code: string) => Language | undefined;
  getSupportedLocales: () => string[];
  getCountriesForSitemap: () => Array<{ country: string; locales: string[] }>;
}
