import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCountryBySlug, getLanguageByCode } from '../../../src/lib/countries';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    countrySlug: string;
    locale: string;
  }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `LABD L.L.C - Management Consulting in ${country.name}`,
    description: `Professional management consulting services in ${country.name}. Strategic planning, operational excellence, and business transformation solutions.`,
    keywords: [
      'management consulting',
      'business strategy',
      'operational excellence',
      'digital transformation',
      country.name,
      language.name,
    ],
    openGraph: {
      title: `LABD L.L.C - Excellence in ${country.name}`,
      description: `Strategic management consulting services tailored for businesses in ${country.name}.`,
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: `LABD L.L.C - Management Consulting in ${country.name}`,
      description: `Professional consulting services in ${country.name}.`,
    },
    alternates: {
      canonical: `/${countrySlug}/${locale}`,
      languages: Object.fromEntries(
        country.languages.map(lang => [lang.code, `/${countrySlug}/${lang.code}`])
      ),
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    notFound();
  }

  return (
    <>
      {children}
    </>
  );
}
