import { notFound } from 'next/navigation';
import { getCountryBySlug } from '../../src/lib/countries';
import Header from '../../src/components/Header';
import About from '../../src/components/About';
import Services from '../../src/components/Services';
import Awards from '../../src/components/Awards';
import Contact from '../../src/components/Contact';
import Footer from '../../src/components/Footer';

interface CountryPageProps {
  params: Promise<{
    countrySlug: string;
  }>;
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      <Header country={country} />
      <About country={country} />
      <Services country={country} />
      <Awards country={country} />
      <Contact country={country} />
      <Footer country={country} />
    </main>
  );
}
