import { notFound } from 'next/navigation';
import { getCountryBySlug, COUNTRIES } from '../../src/lib/countries';

export async function generateStaticParams() {
  return COUNTRIES.map((country) => ({
    countrySlug: country.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ countrySlug: string }> }) {
  const { countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);
  
  if (!country) {
    return {};
  }

  return {
    title: `LABD L.L.C - Management Consulting in ${country.name}`,
    description: `Professional management consulting services in ${country.name}. Strategic business solutions and operational excellence.`,
    openGraph: {
      title: `LABD L.L.C - Management Consulting in ${country.name}`,
      description: `Professional management consulting services in ${country.name}. Strategic business solutions and operational excellence.`,
      url: `/${countrySlug}`,
      siteName: 'LABD L.L.C',
      images: [
        {
          url: '/labd_logo.png',
          width: 800,
          height: 600,
          alt: 'LABD L.L.C Logo',
        },
      ],
    },
  };
}

export default async function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ countrySlug: string }>;
}) {
  const { countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  );
}
