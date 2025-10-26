import { notFound } from 'next/navigation';
import { getCountryBySlug } from '../../../src/lib/countries';

interface CountryLocalPageProps {
  params: Promise<{
    countrySlug: string;
    locale: string;
  }>;
}

export default async function CountryLocalePage({ params }: CountryLocalPageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) {
    notFound();
  }

  if (!country.languages.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <title>LABD L.L.C - {country.name}</title>
        <meta name="description" content="Premier management consulting firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="min-h-screen bg-black text-white">
        <main>
          {/* Header */}
          <header className="py-6 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center">
                <img src="/labd_logo.png" alt="LABD L.L.C" className="h-12 w-auto" />
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-white">LABD L.L.C</h1>
                  <p className="text-gray-400 text-sm">Management Consulting</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-400">Welcome to {country.name}</p>
                <p className="text-sm">Language: {locale.toUpperCase()}</p>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="py-20 px-6 lg:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                  Excellence in Management Consulting
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                LABD L.L.C delivers strategic solutions and operational excellence across global markets.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg transition-all">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-black transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-20 px-6 lg:px-12 bg-gray-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                    About LABD L.L.C
                  </span>
                </h3>
                <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                  Your trusted partner in business transformation and strategic growth in {country.name}.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-8 rounded-xl border border-amber-500/20">
                  <h4 className="text-xl font-bold text-amber-400 mb-4">Our Mission</h4>
                  <p className="text-gray-300">
                    To empower businesses with innovative strategies, operational excellence, and sustainable growth solutions.
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl border border-amber-500/20">
                  <h4 className="text-xl font-bold text-amber-400 mb-4">Our Vision</h4>
                  <p className="text-gray-300">
                    To be the leading management consulting firm recognized for expertise, integrity, and client success.
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl border border-amber-500/20">
                  <h4 className="text-xl font-bold text-amber-400 mb-4">Our Values</h4>
                  <p className="text-gray-300">
                    Excellence, Integrity, Innovation, and Collaboration form the foundation of everything we do.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                    Our Services
                  </span>
                </h3>
                <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                  Comprehensive consulting solutions tailored to your business needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-900 p-8 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                  <h4 className="text-xl font-bold text-amber-400 mb-4">Strategic Planning</h4>
                  <p className="text-gray-300 mb-4">
                    Comprehensive strategic frameworks to guide your business growth and market positioning.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Market Analysis & Research</li>
                    <li>• Business Model Innovation</li>
                    <li>• Growth Strategy Development</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900 p-8 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                  <h4 className="text-xl font-bold text-amber-400 mb-4">Operational Excellence</h4>
                  <p className="text-gray-300 mb-4">
                    Optimize your operations for maximum efficiency and sustainable performance.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Process Optimization</li>
                    <li>• Supply Chain Management</li>
                    <li>• Quality Management Systems</li>
                  </ul>
                </div>

                <div className="bg-gray-900 p-8 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                  <h4 className="text-xl font-bold text-amber-400 mb-4">Digital Transformation</h4>
                  <p className="text-gray-300 mb-4">
                    Navigate the digital landscape with confidence and strategic insight.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Technology Strategy</li>
                    <li>• Digital Innovation</li>
                    <li>• Change Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-6 lg:px-12 bg-gray-900">
            <div className="max-w-7xl mx-auto text-center">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                Ready to transform your business in {country.name}? Let's discuss how we can help.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">@</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:contact@labd.ae" className="text-amber-400 hover:text-amber-300">
                      contact@labd.ae
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">📞</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:+971552772899" className="text-amber-400 hover:text-amber-300">
                      +971 55 277 2899
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 lg:px-12 bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <img src="/labd_logo.png" alt="LABD L.L.C" className="h-10 w-auto" />
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-white">LABD L.L.C</h4>
                  <p className="text-gray-400 text-sm">Excellence in Management Consulting</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <a href="/uae/en" className="text-gray-400 hover:text-amber-400">UAE</a>
                <a href="/germany/de" className="text-gray-400 hover:text-amber-400">Deutschland</a>
                <a href="/usa/en" className="text-gray-400 hover:text-amber-400">USA</a>
                <a href="/uk/en" className="text-gray-400 hover:text-amber-400">UK</a>
              </div>
              
              <p className="text-gray-400 text-sm">
                © 2025 LABD L.L.C. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
