import { notFound } from 'next/navigation';
import { getCountryBySlug, getLanguageByCode } from '../../../src/lib/countries';
import Image from 'next/image';

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="relative z-20">
        <div className="bg-gradient-to-r from-amber-600 to-yellow-600 py-2 px-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center text-black text-sm font-medium">
            <div className="flex items-center gap-6">
              <span>📍 Serving {country.name} & Global Markets</span>
            </div>
          </div>
        </div>

        <nav className="bg-black/90 backdrop-blur-md border-b border-amber-500/20 py-4 px-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/labd_logo.png"
                alt="LABD Consulting"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">
                  LABD <span className="text-amber-400">Consulting</span>
                </h1>
                <p className="text-xs text-gray-400">Management Excellence</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#about" className="text-white hover:text-amber-400 transition-colors font-medium">
                About Us
              </a>
              <a href="#services" className="text-white hover:text-amber-400 transition-colors font-medium">
                Services
              </a>
              <a href="#contact" className="text-white hover:text-amber-400 transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-12 text-center">
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

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-12 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-amber-400">LABD</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expertise spans across industries and continents, delivering transformational results for businesses in {country.name} and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Consulting + Technology</h3>
              <p className="text-gray-300 leading-relaxed">Strategy to execution with partner Antrieb 2.0 (Germany)</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Expertise, Local Impact</h3>
              <p className="text-gray-300 leading-relaxed">Dubai & Germany presence, projects across MENA, Europe, Asia, USA</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Education & Franchise Focus</h3>
              <p className="text-gray-300 leading-relaxed">Digital Transformation for service businesses</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Systems for Scale</h3>
              <p className="text-gray-300 leading-relaxed">We don't just consult — we design processes, tools, and governance to scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-amber-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to drive growth and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-2xl mr-4">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-white">Strategic Consulting</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Transform your business with data-driven strategies and operational excellence frameworks.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-2xl mr-4">
                  🏫
                </div>
                <h3 className="text-2xl font-bold text-white">Education & Training</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Comprehensive training programs and educational solutions designed to elevate your team's capabilities.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-2xl mr-4">
                  🏢
                </div>
                <h3 className="text-2xl font-bold text-white">Franchise Development</h3>
              </div>
              <p className="text-gray-300 mb-4">
                End-to-end franchise solutions from concept to implementation, helping businesses scale.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-2xl mr-4">
                  💻
                </div>
                <h3 className="text-2xl font-bold text-white">Digital Transformation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Partner with Antrieb 2.0 (Germany) to digitize your operations and create scalable technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-12 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="text-amber-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how LABD can help you achieve excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20">
                <h4 className="text-xl font-bold text-white mb-4">Dubai Headquarters</h4>
                <div className="space-y-2 text-gray-300">
                  <p>📍 Business Bay, Dubai, UAE</p>
                  <p>📧 info@labd-consulting.com</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20">
                <h4 className="text-xl font-bold text-white mb-4">Germany Office</h4>
                <div className="space-y-2 text-gray-300">
                  <p>📍 Partner: Antrieb 2.0, Germany</p>
                  <p>📧 germany@labd-consulting.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                />
                <textarea 
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 border-t border-amber-500/20 py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                LABD <span className="text-amber-400">Consulting</span>
              </h3>
              <p className="text-gray-300">Management Excellence</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-amber-400">About</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-amber-400">Services</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-amber-400">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Global Presence</h4>
              <p className="text-gray-300 text-sm">
                Dubai & Germany<br/>
                MENA | Europe | Asia | USA
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400 text-sm">&copy; 2024 LABD L.L.C. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
