import { notFound } from 'next/navigation';
import { getCountryBySlug, getLanguageByCode } from '../../../src/lib/countries';
import Header from '../../../src/components/Header-business';
import About from '../../../src/components/About-business';
import Services from '../../../src/components/Services-business';
import Awards from '../../../src/components/Awards-business';
import Contact from '../../../src/components/Contact-business';
import Footer from '../../../src/components/Footer-business';

interface PageProps {
  params: Promise<{
    countrySlug: string;
    locale: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background City Image */}
      <div 
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("/background-city.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <Header country={country} />
        
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-12 text-center bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                Excellence in Management Consulting
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              LABD L.L.C delivers strategic solutions and operational excellence across {country.name} and global markets.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <button className="px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg transition-all text-lg">
                Start Your Transformation
              </button>
              <button className="px-10 py-5 border-2 border-amber-500 text-amber-500 font-bold rounded-lg hover:bg-amber-500 hover:text-black transition-all text-lg">
                Explore Our Services
              </button>
            </div>
          </div>
        </section>

        <About country={country} />
        <Services country={country} />
        <Awards country={country} />
        <Contact country={country} />
        <Footer country={country} locale={locale} />
      </div>
    </div>
  );
}
