import { Country, Language, CountryData } from '../types/country';

export const LANGUAGES: Record<string, Language> = {
  'en': { code: 'en', name: 'English', nativeName: 'English', isRTL: false, tone: 'neutral' },
  'en-US': { code: 'en-US', name: 'English (US)', nativeName: 'English (US)', isRTL: false, tone: 'neutral' },
  'en-GB': { code: 'en-GB', name: 'English (UK)', nativeName: 'English (UK)', isRTL: false, tone: 'formal' },
  'de': { code: 'de', name: 'German', nativeName: 'Deutsch', isRTL: false, tone: 'formal' },
  'de-DE': { code: 'de-DE', name: 'German (Germany)', nativeName: 'Deutsch (Deutschland)', isRTL: false, tone: 'formal' },
  'fr': { code: 'fr', name: 'French', nativeName: 'Français', isRTL: false, tone: 'formal' },
  'fr-FR': { code: 'fr-FR', name: 'French (France)', nativeName: 'Français (France)', isRTL: false, tone: 'formal' },
  'es': { code: 'es', name: 'Spanish', nativeName: 'Español', isRTL: false, tone: 'neutral' },
  'es-ES': { code: 'es-ES', name: 'Spanish (Spain)', nativeName: 'Español (España)', isRTL: false, tone: 'formal' },
  'it': { code: 'it', name: 'Italian', nativeName: 'Italiano', isRTL: false, tone: 'neutral' },
  'pt': { code: 'pt', name: 'Portuguese', nativeName: 'Português', isRTL: false, tone: 'neutral' },
  'nl': { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', isRTL: false, tone: 'neutral' },
  'sv': { code: 'sv', name: 'Swedish', nativeName: 'Svenska', isRTL: false, tone: 'neutral' },
  'no': { code: 'no', name: 'Norwegian', nativeName: 'Norsk', isRTL: false, tone: 'neutral' },
  'da': { code: 'da', name: 'Danish', nativeName: 'Dansk', isRTL: false, tone: 'neutral' },
  'fi': { code: 'fi', name: 'Finnish', nativeName: 'Suomi', isRTL: false, tone: 'neutral' },
  'pl': { code: 'pl', name: 'Polish', nativeName: 'Polski', isRTL: false, tone: 'neutral' },
  'cs': { code: 'cs', name: 'Czech', nativeName: 'Čeština', isRTL: false, tone: 'formal' },
  'sk': { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina', isRTL: false, tone: 'formal' },
  'ro': { code: 'ro', name: 'Romanian', nativeName: 'Română', isRTL: false, tone: 'formal' },
  'hu': { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', isRTL: false, tone: 'formal' },
  'tr': { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', isRTL: false, tone: 'formal' },
  'ar-AE': { code: 'ar-AE', name: 'Arabic (UAE)', nativeName: 'العربية (الإمارات)', isRTL: true, tone: 'formal' },
  'ru': { code: 'ru', name: 'Russian', nativeName: 'Русский', isRTL: false, tone: 'formal' },
  'zh-CN': { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文', isRTL: false, tone: 'formal' },
};

export const COUNTRIES: Country[] = [
  // MENA Region
  {
    code: 'AE',
    name: 'United Arab Emirates',
    slug: 'uae',
    continent: 'Asia',
    region: 'MENA',
    languages: [LANGUAGES['en'], LANGUAGES['ar-AE']],
    defaultLanguage: 'en',
    currency: 'AED',
    timezone: 'Asia/Dubai',
    flag: '🇦🇪'
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    slug: 'saudi-arabia',
    continent: 'Asia',
    region: 'MENA',
    languages: [LANGUAGES['ar-AE'], LANGUAGES['en']],
    defaultLanguage: 'ar-AE',
    currency: 'SAR',
    timezone: 'Asia/Riyadh',
    flag: '🇸🇦'
  },
  {
    code: 'QA',
    name: 'Qatar',
    slug: 'qatar',
    continent: 'Asia',
    region: 'MENA',
    languages: [LANGUAGES['ar-AE'], LANGUAGES['en']],
    defaultLanguage: 'ar-AE',
    currency: 'QAR',
    timezone: 'Asia/Qatar',
    flag: '🇶🇦'
  },
  {
    code: 'KW',
    name: 'Kuwait',
    slug: 'kuwait',
    continent: 'Asia',
    region: 'MENA',
    languages: [LANGUAGES['ar-AE'], LANGUAGES['en']],
    defaultLanguage: 'ar-AE',
    currency: 'KWD',
    timezone: 'Asia/Kuwait',
    flag: '🇰🇼'
  },
  {
    code: 'BH',
    name: 'Bahrain',
    slug: 'bahrain',
    continent: 'Asia',
    region: 'MENA',
    languages: [LANGUAGES['ar-AE'], LANGUAGES['en']],
    defaultLanguage: 'ar-AE',
    currency: 'BHD',
    timezone: 'Asia/Bahrain',
    flag: '🇧🇭'
  },
  {
    code: 'OM',
    name: 'Oman',
    slug: 'oman',
    continent: 'Asia',
    region: 'MENA',
    languages: [LANGUAGES['ar-AE'], LANGUAGES['en']],
    defaultLanguage: 'ar-AE',
    currency: 'OMR',
    timezone: 'Asia/Muscat',
    flag: '🇴🇲'
  },
  {
    code: 'EG',
    name: 'Egypt',
    slug: 'egypt',
    continent: 'Africa',
    region: 'MENA',
    languages: [LANGUAGES['ar-AE'], LANGUAGES['en']],
    defaultLanguage: 'ar-AE',
    currency: 'EGP',
    timezone: 'Africa/Cairo',
    flag: '🇪🇬'
  },
  {
    code: 'MA',
    name: 'Morocco',
    slug: 'morocco',
    continent: 'Africa',
    region: 'MENA',
    languages: [LANGUAGES['ar-AE'], LANGUAGES['fr'], LANGUAGES['en']],
    defaultLanguage: 'ar-AE',
    currency: 'MAD',
    timezone: 'Africa/Casablanca',
    flag: '🇲🇦'
  },
  
  // Europe
  {
    code: 'DE',
    name: 'Germany',
    slug: 'germany',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['de-DE'], LANGUAGES['en']],
    defaultLanguage: 'de-DE',
    currency: 'EUR',
    timezone: 'Europe/Berlin',
    flag: '🇩🇪'
  },
  {
    code: 'FR',
    name: 'France',
    slug: 'france',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['fr-FR'], LANGUAGES['en']],
    defaultLanguage: 'fr-FR',
    currency: 'EUR',
    timezone: 'Europe/Paris',
    flag: '🇫🇷'
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    slug: 'uk',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['en-GB']],
    defaultLanguage: 'en-GB',
    currency: 'GBP',
    timezone: 'Europe/London',
    flag: '🇬🇧'
  },
  {
    code: 'IT',
    name: 'Italy',
    slug: 'italy',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['it'], LANGUAGES['en']],
    defaultLanguage: 'it',
    currency: 'EUR',
    timezone: 'Europe/Rome',
    flag: '🇮🇹'
  },
  {
    code: 'ES',
    name: 'Spain',
    slug: 'spain',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['es-ES'], LANGUAGES['en']],
    defaultLanguage: 'es-ES',
    currency: 'EUR',
    timezone: 'Europe/Madrid',
    flag: '🇪🇸'
  },
  {
    code: 'NL',
    name: 'Netherlands',
    slug: 'netherlands',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['nl'], LANGUAGES['en']],
    defaultLanguage: 'nl',
    currency: 'EUR',
    timezone: 'Europe/Amsterdam',
    flag: '🇳🇱'
  },
  {
    code: 'SE',
    name: 'Sweden',
    slug: 'sweden',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['sv'], LANGUAGES['en']],
    defaultLanguage: 'sv',
    currency: 'SEK',
    timezone: 'Europe/Stockholm',
    flag: '🇸🇪'
  },
  {
    code: 'NO',
    name: 'Norway',
    slug: 'norway',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['no'], LANGUAGES['en']],
    defaultLanguage: 'no',
    currency: 'NOK',
    timezone: 'Europe/Oslo',
    flag: '🇳🇴'
  },
  {
    code: 'DK',
    name: 'Denmark',
    slug: 'denmark',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['da'], LANGUAGES['en']],
    defaultLanguage: 'da',
    currency: 'DKK',
    timezone: 'Europe/Copenhagen',
    flag: '🇩🇰'
  },
  {
    code: 'FI',
    name: 'Finland',
    slug: 'finland',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['fi'], LANGUAGES['en']],
    defaultLanguage: 'fi',
    currency: 'EUR',
    timezone: 'Europe/Helsinki',
    flag: '🇫🇮'
  },
  {
    code: 'PL',
    name: 'Poland',
    slug: 'poland',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['pl'], LANGUAGES['en']],
    defaultLanguage: 'pl',
    currency: 'PLN',
    timezone: 'Europe/Warsaw',
    flag: '🇵🇱'
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    slug: 'czech-republic',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['cs'], LANGUAGES['en']],
    defaultLanguage: 'cs',
    currency: 'CZK',
    timezone: 'Europe/Prague',
    flag: '🇨🇿'
  },
  {
    code: 'SK',
    name: 'Slovakia',
    slug: 'slovakia',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['sk'], LANGUAGES['en']],
    defaultLanguage: 'sk',
    currency: 'EUR',
    timezone: 'Europe/Bratislava',
    flag: '🇸🇰'
  },
  {
    code: 'RO',
    name: 'Romania',
    slug: 'romania',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['ro'], LANGUAGES['en']],
    defaultLanguage: 'ro',
    currency: 'RON',
    timezone: 'Europe/Bucharest',
    flag: '🇷🇴'
  },
  {
    code: 'HU',
    name: 'Hungary',
    slug: 'hungary',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['hu'], LANGUAGES['en']],
    defaultLanguage: 'hu',
    currency: 'HUF',
    timezone: 'Europe/Budapest',
    flag: '🇭🇺'
  },
  {
    code: 'TR',
    name: 'Turkey',
    slug: 'turkey',
    continent: 'Asia',
    region: 'Europe',
    languages: [LANGUAGES['tr'], LANGUAGES['en']],
    defaultLanguage: 'tr',
    currency: 'TRY',
    timezone: 'Europe/Istanbul',
    flag: '🇹🇷'
  },
  
  // Americas
  {
    code: 'US',
    name: 'United States',
    slug: 'usa',
    continent: 'North America',
    region: 'Americas',
    languages: [LANGUAGES['en-US']],
    defaultLanguage: 'en-US',
    currency: 'USD',
    timezone: 'America/New_York',
    flag: '🇺🇸'
  },
  {
    code: 'CA',
    name: 'Canada',
    slug: 'canada',
    continent: 'North America',
    region: 'Americas',
    languages: [LANGUAGES['en'], LANGUAGES['fr']],
    defaultLanguage: 'en',
    currency: 'CAD',
    timezone: 'America/Toronto',
    flag: '🇨🇦'
  },
  {
    code: 'BR',
    name: 'Brazil',
    slug: 'brazil',
    continent: 'South America',
    region: 'Americas',
    languages: [LANGUAGES['pt'], LANGUAGES['en']],
    defaultLanguage: 'pt',
    currency: 'BRL',
    timezone: 'America/Sao_Paulo',
    flag: '🇧🇷'
  },
  {
    code: 'MX',
    name: 'Mexico',
    slug: 'mexico',
    continent: 'North America',
    region: 'Americas',
    languages: [LANGUAGES['es'], LANGUAGES['en']],
    defaultLanguage: 'es',
    currency: 'MXN',
    timezone: 'America/Mexico_City',
    flag: '🇲🇽'
  },
  
  // Asia
  {
    code: 'SG',
    name: 'Singapore',
    slug: 'singapore',
    continent: 'Asia',
    region: 'Asia',
    languages: [LANGUAGES['en'], LANGUAGES['zh-CN']],
    defaultLanguage: 'en',
    currency: 'SGD',
    timezone: 'Asia/Singapore',
    flag: '🇸🇬'
  },
  {
    code: 'JP',
    name: 'Japan',
    slug: 'japan',
    continent: 'Asia',
    region: 'Asia',
    languages: [LANGUAGES['en']],
    defaultLanguage: 'en',
    currency: 'JPY',
    timezone: 'Asia/Tokyo',
    flag: '🇯🇵'
  },
  {
    code: 'CN',
    name: 'China',
    slug: 'china',
    continent: 'Asia',
    region: 'Asia',
    languages: [LANGUAGES['zh-CN'], LANGUAGES['en']],
    defaultLanguage: 'zh-CN',
    currency: 'CNY',
    timezone: 'Asia/Shanghai',
    flag: '🇨🇳'
  },
  {
    code: 'IN',
    name: 'India',
    slug: 'india',
    continent: 'Asia',
    region: 'Asia',
    languages: [LANGUAGES['en']],
    defaultLanguage: 'en',
    currency: 'INR',
    timezone: 'Asia/Kolkata',
    flag: '🇮🇳'
  },
  {
    code: 'RU',
    name: 'Russia',
    slug: 'russia',
    continent: 'Europe',
    region: 'Europe',
    languages: [LANGUAGES['ru'], LANGUAGES['en']],
    defaultLanguage: 'ru',
    currency: 'RUB',
    timezone: 'Europe/Moscow',
    flag: '🇷🇺'
  },
];

// Helper functions
export function getCountryBySlug(slug: string): Country | undefined {
  return COUNTRIES.find(country => country.slug === slug);
}

export function getLanguageByCode(code: string): Language | undefined {
  return LANGUAGES[code];
}

export function getSupportedLocales(): string[] {
  const locales = new Set<string>();
  COUNTRIES.forEach(country => {
    country.languages.forEach(lang => {
      locales.add(lang.code);
    });
  });
  return Array.from(locales);
}

export function getCountriesForSitemap(): Array<{ country: string; locales: string[] }> {
  return COUNTRIES.map(country => ({
    country: country.slug,
    locales: country.languages.map(lang => lang.code)
  }));
}

export const countryData: CountryData = {
  countries: COUNTRIES,
  getCountryBySlug,
  getLanguageByCode,
  getSupportedLocales,
  getCountriesForSitemap,
};
