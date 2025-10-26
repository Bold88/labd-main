import { Metadata } from 'next';
import { COMPANY_INFO, SEO_DEFAULT } from '@/config/company';

export interface SeoMetaData {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    type: string;
    locale: string;
    url: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
  };
  alternates: {
    canonical: string;
    hreflang: Record<string, string>;
  };
}

export function generateSEO(config: {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
} = {}): Metadata {
  const title = config.title || SEO_DEFAULT.title;
  const description = config.description || SEO_DEFAULT.description;
  const ogImage = config.ogImage || SEO_DEFAULT.ogImage;

  return {
    title,
    description,
    keywords: config.keywords || [...SEO_DEFAULT.keywords],
    authors: [{ name: COMPANY_INFO.displayName }],
    robots: config.noindex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      siteName: COMPANY_INFO.displayName,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: config.canonical,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.legalName,
    alternateName: COMPANY_INFO.displayName,
    description: SEO_DEFAULT.description,
    url: 'https://labd-consulting.com',
    logo: 'https://labd-consulting.com/labd_logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.contact.phone,
      contactType: 'customer service',
      email: COMPANY_INFO.contact.email,
      availableLanguage: ['English', 'German', 'Arabic'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY_INFO.headquarters.address}, ${COMPANY_INFO.headquarters.street}`,
      addressLocality: COMPANY_INFO.headquarters.city,
      addressCountry: 'AE',
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY_INFO.displayName,
    image: 'https://labd-consulting.com/labd_logo.png',
    '@id': 'https://labd-consulting.com',
    url: 'https://labd-consulting.com',
    telephone: COMPANY_INFO.contact.phone,
    email: COMPANY_INFO.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY_INFO.headquarters.address}, ${COMPANY_INFO.headquarters.street}`,
      addressLocality: COMPANY_INFO.headquarters.city,
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.1687,
      longitude: 55.3094,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$$$',
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'GeoShape', name: 'MENA Region' },
      { '@type': 'GeoShape', name: 'Europe' },
      { '@type': 'GeoShape', name: 'Asia' },
      { '@type': 'GeoShape', name: 'North America' },
    ],
  };
}

export function generateSeoMeta({
  title,
  description,
  path,
  locale,
  country,
  alternates,
  keywords = []
}: {
  title: string;
  description: string;
  path: string;
  locale: string;
  country: string;
  alternates: Record<string, string>;
  keywords?: string[];
}): SeoMetaData {
  const fullUrl = `https://labd.ae${path}`;
  
  return {
    title: `${title} | LABD - ${country}`,
    description,
    keywords: [...keywords, 'LABD', 'management consulting', 'business strategy'],
    openGraph: {
      title: `${title} | LABD`,
      description,
      type: 'website',
      locale,
      url: fullUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LABD`,
      description,
    },
    alternates: {
      canonical: fullUrl,
      hreflang: alternates,
    },
  };
}

export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LABD',
    url: 'https://labd.ae',
    logo: 'https://labd.ae/labd_logo.png',
    description: 'Management consulting excellence across global markets',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AE',
      addressRegion: 'Dubai',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971552772899',
      contactType: 'customer service',
      email: 'contact@labd.ae',
    },
  };
}

export function generateHreflangAlternates(
  countrySlug: string, 
  path: string, 
  languages: Array<{ code: string; name: string }>
): Record<string, string> {
  const alternates: Record<string, string> = {};
  
  languages.forEach((lang) => {
    alternates[lang.code] = `https://labd.ae/${countrySlug}/${lang.code}${path}`;
  });
  
  return alternates;
}

