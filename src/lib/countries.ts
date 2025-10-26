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
}

export interface Language {
  code: string; // BCP 47 language tag
  name: string;
  nativeName: string;
  isRTL: boolean;
  tone: 'formal' | 'neutral' | 'informal';
}

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
  'pl': { code: 'pl', name: 'Polish', nativeName: 'Polski', isRTL: false, tone: 'formal' },
  'cs': { code: 'cs', name: 'Czech', nativeName: 'Čeština', isRTL: false, tone: 'formal' },
  'sk': { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina', isRTL: false, tone: 'formal' },
  'ro': { code: 'ro', name: 'Romanian', nativeName: 'Română', isRTL: false, tone: 'formal' },
  'hu': { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', isRTL: false, tone: 'formal' },
  'tr': { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', isRTL: false, tone: 'formal' },
  'ar': { code: 'ar', name: 'Arabic', nativeName: 'العربية', isRTL: true, tone: 'formal' },
  'ar-AE': { code: 'ar-AE', name: 'Arabic (UAE)', nativeName: 'العربية (الإمارات)', isRTL: true, tone: 'formal' },
  'ar-SA': { code: 'ar-SA', name: 'Arabic (Saudi Arabia)', nativeName: 'العربية (السعودية)', isRTL: true, tone: 'formal' },
  'ru': { code: 'ru', name: 'Russian', nativeName: 'Русский', isRTL: false, tone: 'formal' },
  'zh-CN': { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文', isRTL: false, tone: 'formal' },
  'ja': { code: 'ja', name: 'Japanese', nativeName: '日本語', isRTL: false, tone: 'formal' },
  'ko': { code: 'ko', name: 'Korean', nativeName: '한국어', isRTL: false, tone: 'formal' },
  'hi': { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', isRTL: false, tone: 'formal' },
};

export const COUNTRIES: Country[] = [
  // MENA Region (Primary focus)
  {
    code: 'AE',
    name: 'United Arab Emirates',
    slug: 'uae',
    continent: 'Asia',
    languages: [LANGUAGES['ar-AE'], LANGUAGES['en']],
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
    languages: [LANGUAGES['ar-SA'], LANGUAGES['en']],
    defaultLanguage: 'ar-SA',
    currency: 'SAR',
    timezone: 'Asia/Riyadh',
    flag: '🇸🇦'
  },
  {
    code: 'QA',
    name: 'Qatar',
    slug: 'qatar',
    continent: 'Asia',
    languages: [LANGUAGES['ar'], LANGUAGES['en']],
    defaultLanguage: 'ar',
    currency: 'QAR',
    timezone: 'Asia/Qatar',
    flag: '🇶🇦'
  },
  {
    code: 'KW',
    name: 'Kuwait',
    slug: 'kuwait',
    continent: 'Asia',
    languages: [LANGUAGES['ar'], LANGUAGES['en']],
    defaultLanguage: 'ar',
    currency: 'KWD',
    timezone: 'Asia/Kuwait',
    flag: '🇰🇼'
  },
  {
    code: 'BH',
    name: 'Bahrain',
    slug: 'bahrain',
    continent: 'Asia',
    languages: [LANGUAGES['ar'], LANGUAGES['en']],
    defaultLanguage: 'ar',
    currency: 'BHD',
    timezone: 'Asia/Bahrain',
    flag: '🇧🇭'
  },
  {
    code: 'OM',
    name: 'Oman',
    slug: 'oman',
    continent: 'Asia',
    languages: [LANGUAGES['ar'], LANGUAGES['en']],
    defaultLanguage: 'ar',
    currency: 'OMR',
    timezone: 'Asia/Muscat',
    flag: '🇴🇲'
  },
  {
    code: 'JO',
    name: 'Jordan',
    slug: 'jordan',
    continent: 'Asia',
    languages: [LANGUAGES['ar'], LANGUAGES['en']],
    defaultLanguage: 'ar',
    currency: 'JOD',
    timezone: 'Asia/Amman',
    flag: '🇯🇴'
  },
  {
    code: 'LB',
    name: 'Lebanon',
    slug: 'lebanon',
    continent: 'Asia',
    languages: [LANGUAGES['ar'], LANGUAGES['fr'], LANGUAGES['en']],
    defaultLanguage: 'ar',
    currency: 'LBP',
    timezone: 'Asia/Beirut',
    flag: '🇱🇧'
  },
  {
    code: 'EG',
    name: 'Egypt',
    slug: 'egypt',
    continent: 'Africa',
    languages: [LANGUAGES['ar'], LANGUAGES['en']],
    defaultLanguage: 'ar',
    currency: 'EGP',
    timezone: 'Africa/Cairo',
    flag: '🇪🇬'
  },
  {
    code: 'MA',
    name: 'Morocco',
    slug: 'morocco',
    continent: 'Africa',
    languages: [LANGUAGES['ar'], LANGUAGES['fr'], LANGUAGES['en']],
    defaultLanguage: 'ar',
    currency: 'MAD',
    timezone: 'Africa/Casablanca',
    flag: '🇲🇦'
  },

  // Europe (Secondary focus)
  {
    code: 'DE',
    name: 'Germany',
    slug: 'germany',
    continent: 'Europe',
    languages: [LANGUAGES['de-DE'], LANGUAGES['en']],
    defaultLanguage: 'de-DE',
    currency: 'EUR',
    timezone: 'Europe/Berlin',
    flag: '🇩🇪'
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    slug: 'united-kingdom',
    continent: 'Europe',
    languages: [LANGUAGES['en-GB']],
    defaultLanguage: 'en-GB',
    currency: 'GBP',
    timezone: 'Europe/London',
    flag: '🇬🇧'
  },
  {
    code: 'FR',
    name: 'France',
    slug: 'france',
    continent: 'Europe',
    languages: [LANGUAGES['fr-FR'], LANGUAGES['en']],
    defaultLanguage: 'fr-FR',
    currency: 'EUR',
    timezone: 'Europe/Paris',
    flag: '🇫🇷'
  },
  {
    code: 'ES',
    name: 'Spain',
    slug: 'spain',
    continent: 'Europe',
    languages: [LANGUAGES['es-ES'], LANGUAGES['en']],
    defaultLanguage: 'es-ES',
    currency: 'EUR',
    timezone: 'Europe/Madrid',
    flag: '🇪🇸'
  },
  {
    code: 'IT',
    name: 'Italy',
    slug: 'italy',
    continent: 'Europe',
    languages: [LANGUAGES['it'], LANGUAGES['en']],
    defaultLanguage: 'it',
    currency: 'EUR',
    timezone: 'Europe/Rome',
    flag: '🇮🇹'
  },
  {
    code: 'NL',
    name: 'Netherlands',
    slug: 'netherlands',
    continent: 'Europe',
    languages: [LANGUAGES['nl'], LANGUAGES['en']],
    defaultLanguage: 'nl',
    currency: 'EUR',
    timezone: 'Europe/Amsterdam',
    flag: '🇳🇱'
  },
  {
    code: 'CH',
    name: 'Switzerland',
    slug: 'switzerland',
    continent: 'Europe',
    languages: [LANGUAGES['de'], LANGUAGES['fr'], LANGUAGES['it'], LANGUAGES['en']],
    defaultLanguage: 'de',
    currency: 'CHF',
    timezone: 'Europe/Zurich',
    flag: '🇨🇭'
  },
  {
    code: 'AT',
    name: 'Austria',
    slug: 'austria',
    continent: 'Europe',
    languages: [LANGUAGES['de'], LANGUAGES['en']],
    defaultLanguage: 'de',
    currency: 'EUR',
    timezone: 'Europe/Vienna',
    flag: '🇦🇹'
  },
  {
    code: 'SE',
    name: 'Sweden',
    slug: 'sweden',
    continent: 'Europe',
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
    languages: [LANGUAGES['pl'], LANGUAGES['en']],
    defaultLanguage: 'pl',
    currency: 'PLN',
    timezone: 'Europe/Warsaw',
    flag: '🇵🇱'
  },

  // North America
  {
    code: 'US',
    name: 'United States',
    slug: 'united-states',
    continent: 'North America',
    languages: [LANGUAGES['en-US'], LANGUAGES['es']],
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
    languages: [LANGUAGES['en'], LANGUAGES['fr']],
    defaultLanguage: 'en',
    currency: 'CAD',
    timezone: 'America/Toronto',
    flag: '🇨🇦'
  },

  // Asia
  {
    code: 'SG',
    name: 'Singapore',
    slug: 'singapore',
    continent: 'Asia',
    languages: [LANGUAGES['en'], LANGUAGES['zh-CN']],
    defaultLanguage: 'en',
    currency: 'SGD',
    timezone: 'Asia/Singapore',
    flag: '🇸🇬'
  },
  {
    code: 'HK',
    name: 'Hong Kong',
    slug: 'hong-kong',
    continent: 'Asia',
    languages: [LANGUAGES['zh-CN'], LANGUAGES['en']],
    defaultLanguage: 'zh-CN',
    currency: 'HKD',
    timezone: 'Asia/Hong_Kong',
    flag: '🇭🇰'
  },
  {
    code: 'JP',
    name: 'Japan',
    slug: 'japan',
    continent: 'Asia',
    languages: [LANGUAGES['ja'], LANGUAGES['en']],
    defaultLanguage: 'ja',
    currency: 'JPY',
    timezone: 'Asia/Tokyo',
    flag: '🇯🇵'
  },
  {
    code: 'KR',
    name: 'South Korea',
    slug: 'south-korea',
    continent: 'Asia',
    languages: [LANGUAGES['ko'], LANGUAGES['en']],
    defaultLanguage: 'ko',
    currency: 'KRW',
    timezone: 'Asia/Seoul',
    flag: '🇰🇷'
  },
  {
    code: 'IN',
    name: 'India',
    slug: 'india',
    continent: 'Asia',
    languages: [LANGUAGES['hi'], LANGUAGES['en']],
    defaultLanguage: 'en',
    currency: 'INR',
    timezone: 'Asia/Kolkata',
    flag: '🇮🇳'
  },
  {
    code: 'CN',
    name: 'China',
    slug: 'china',
    continent: 'Asia',
    languages: [LANGUAGES['zh-CN'], LANGUAGES['en']],
    defaultLanguage: 'zh-CN',
    currency: 'CNY',
    timezone: 'Asia/Shanghai',
    flag: '🇨🇳'
  },

  // Additional key markets
  {
    code: 'AU',
    name: 'Australia',
    slug: 'australia',
    continent: 'Oceania',
    languages: [LANGUAGES['en']],
    defaultLanguage: 'en',
    currency: 'AUD',
    timezone: 'Australia/Sydney',
    flag: '🇦🇺'
  },
  {
    code: 'BR',
    name: 'Brazil',
    slug: 'brazil',
    continent: 'South America',
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
    languages: [LANGUAGES['es'], LANGUAGES['en']],
    defaultLanguage: 'es',
    currency: 'MXN',
    timezone: 'America/Mexico_City',
    flag: '🇲🇽'
  },
  {
    code: 'RU',
    name: 'Russia',
    slug: 'russia',
    continent: 'Europe',
    languages: [LANGUAGES['ru'], LANGUAGES['en']],
    defaultLanguage: 'ru',
    currency: 'RUB',
    timezone: 'Europe/Moscow',
    flag: '🇷🇺'
  },
  {
    code: 'TR',
    name: 'Turkey',
    slug: 'turkey',
    continent: 'Asia',
    languages: [LANGUAGES['tr'], LANGUAGES['en']],
    defaultLanguage: 'tr',
    currency: 'TRY',
    timezone: 'Europe/Istanbul',
    flag: '🇹🇷'
  },
  {
    code: 'ZA',
    name: 'South Africa',
    slug: 'south-africa',
    continent: 'Africa',
    languages: [LANGUAGES['en']],
    defaultLanguage: 'en',
    currency: 'ZAR',
    timezone: 'Africa/Johannesburg',
    flag: '🇿🇦'
  },
];

export const DEFAULT_COUNTRY = 'united-arab-emirates';
export const DEFAULT_LANGUAGE = 'en';

export function getCountryBySlug(slug: string): Country | undefined {
  return COUNTRIES.find(country => country.slug === slug);
}

export function getCountryByCode(code: string): Country | undefined {
  return COUNTRIES.find(country => country.code === code);
}

export function getLanguageByCode(code: string): Language | undefined {
  return LANGUAGES[code];
}

export function getSupportedLocales(): string[] {
  return Object.keys(LANGUAGES);
}

export function getCountriesByContinent(continent: string): Country[] {
  return COUNTRIES.filter(country => country.continent === continent);
}

export const CONTINENTS = [
  'Africa',
  'Asia', 
  'Europe',
  'North America',
  'South America',
  'Oceania'
] as const;
