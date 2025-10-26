import { notFound } from "next/navigation";
import Link from "next/link";
import { getCountryBySlug, getLanguageByCode } from "../../../src/data/countries";
import { getTranslation, interpolate } from "../../../src/utils/translations";

interface PageProps {
  params: Promise<{
    countrySlug: string;
    locale: string;
  }>;
}

export default async function HomePage({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  
  const country = getCountryBySlug(countrySlug);
  if (!country) {
    notFound();
  }
  
  const language = getLanguageByCode(locale);
  if (!language) {
    notFound();
  }

  const t = getTranslation(locale);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href={`/${countrySlug}/${locale}`} className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold text-white">LABD</span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8">
              <Link href={`/${countrySlug}/${locale}/services`} className="text-white hover:text-yellow-500 transition-colors">
                {t.nav.services}
              </Link>
              <Link href={`/${countrySlug}/${locale}/about`} className="text-white hover:text-yellow-500 transition-colors">
                {t.nav.about}
              </Link>
              <Link href={`/${countrySlug}/${locale}/contact`} className="text-white hover:text-yellow-500 transition-colors">
                {t.nav.contact}
              </Link>
              <Link
                href={`/${countrySlug}/${locale}/consultation`}
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-full hover:shadow-lg transition-all"
              >
                {t.nav.consultation}
              </Link>
            </div>
            
            <div className="lg:hidden">
              <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="18" height="2" fill="currentColor" />
                  <rect x="3" y="11" width="18" height="2" fill="currentColor" />
                  <rect x="3" y="16" width="18" height="2" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-5xl mx-auto leading-relaxed font-light">
              {t.hero.subtitle}
            </h2>
            <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto">
              {interpolate(t.hero.description, { country: country.name })}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href={`/${countrySlug}/${locale}/consultation`}
                className="px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-full hover:shadow-2xl transition-all text-xl"
              >
                {t.hero.cta1}
              </Link>
              <Link
                href={`/${countrySlug}/${locale}/services`}
                className="px-12 py-6 border-2 border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-black transition-all text-xl"
              >
                {t.hero.cta2}
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">10+</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">{t.hero.stats.experience}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">4</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">{t.hero.stats.continents}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">100+</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">{t.hero.stats.projects}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">2</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">{t.hero.stats.offices}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="relative z-10 py-24 px-6 lg:px-12">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                {t.usps.title}
              </span>
            </h3>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              {t.usps.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 h-full hover:border-yellow-500/40 transition-all">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl font-bold">⚡</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{t.usps.consulting.title}</h4>
                <p className="text-white/70 leading-relaxed">
                  {t.usps.consulting.description}
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 h-full hover:border-yellow-500/40 transition-all">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl font-bold">🌍</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{t.usps.global.title}</h4>
                <p className="text-white/70 leading-relaxed">
                  {t.usps.global.description}
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 h-full hover:border-yellow-500/40 transition-all">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl font-bold">📚</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{t.usps.education.title}</h4>
                <p className="text-white/70 leading-relaxed">
                  {t.usps.education.description}
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 h-full hover:border-yellow-500/40 transition-all">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl font-bold">⚙️</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{t.usps.systems.title}</h4>
                <p className="text-white/70 leading-relaxed">
                  {t.usps.systems.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-24 px-6 lg:px-12">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                {t.services.title}
              </span>
            </h3>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 h-full hover:border-yellow-500/40 transition-all hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl font-bold">🎯</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{t.services.strategic.title}</h4>
                <p className="text-white/70 leading-relaxed mb-6">
                  {t.services.strategic.description}
                </p>
                <ul className="space-y-2">
                  {t.services.strategic.items.map((item, index) => (
                    <li key={index} className="flex items-center text-white/60">
                      <span className="text-yellow-500 mr-3">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 h-full hover:border-yellow-500/40 transition-all hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl font-bold">💻</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{t.services.systems.title}</h4>
                <p className="text-white/70 leading-relaxed mb-6">
                  {t.services.systems.description}
                </p>
                <ul className="space-y-2">
                  {t.services.systems.items.map((item, index) => (
                    <li key={index} className="flex items-center text-white/60">
                      <span className="text-yellow-500 mr-3">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 h-full hover:border-yellow-500/40 transition-all hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl font-bold">📈</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{t.services.industry.title}</h4>
                <p className="text-white/70 leading-relaxed mb-6">
                  {t.services.industry.description}
                </p>
                <ul className="space-y-2">
                  {t.services.industry.items.map((item, index) => (
                    <li key={index} className="flex items-center text-white/60">
                      <span className="text-yellow-500 mr-3">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Journey Section */}
      <section className="relative z-10 py-24 px-6 lg:px-12">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                {t.about.journey.title}
              </span>
            </h3>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              {t.about.journey.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl font-bold">🚀</span>
                </div>
                <h4 className="text-2xl font-bold text-yellow-500 mb-4">{t.about.journey.phase1.title}</h4>
                <p className="text-white/70 leading-relaxed">
                  {t.about.journey.phase1.description}
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl font-bold">🤝</span>
                </div>
                <h4 className="text-2xl font-bold text-yellow-500 mb-4">{t.about.journey.phase2.title}</h4>
                <p className="text-white/70 leading-relaxed">
                  {t.about.journey.phase2.description}
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl font-bold">🏆</span>
                </div>
                <h4 className="text-2xl font-bold text-yellow-500 mb-4">{t.about.journey.phase3.title}</h4>
                <p className="text-white/70 leading-relaxed">
                  {t.about.journey.phase3.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6 lg:px-12">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            </h3>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              {interpolate(t.contact.subtitle, { country: country.name })}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all h-full">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl">📧</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Kontakt</h4>
                <p className="text-yellow-500 font-semibold">{t.contact.email}</p>
                <p className="text-white/60 text-sm mt-2">E-Mail</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all h-full">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl">📞</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Telefon</h4>
                <p className="text-yellow-500 font-semibold">{t.contact.phone}</p>
                <p className="text-white/60 text-sm mt-2">Direkter Kontakt</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all h-full">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl">📍</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Büro</h4>
                <p className="text-yellow-500 font-semibold">{t.contact.office}</p>
                <p className="text-white/60 text-sm mt-2">Standort</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link
              href={`/${countrySlug}/${locale}/consultation`}
              className="inline-block px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-full hover:shadow-2xl transition-all text-xl"
            >
              {t.contact.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative">
        <div className="absolute inset-0 bg-black/95"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center">
                  <span className="text-black font-bold text-xl">L</span>
                </div>
                <span className="text-2xl font-bold text-white">LABD</span>
              </div>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                {t.footer.description}
              </p>
              <div className="text-sm text-white/50">
                Sprache: {language.nativeName}
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-4">Services</h5>
              <ul className="space-y-2">
                <li>
                  <Link href={`/${countrySlug}/${locale}/services`} className="text-white/60 hover:text-yellow-500 transition-colors">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link href={`/${countrySlug}/${locale}/services`} className="text-white/60 hover:text-yellow-500 transition-colors">
                    Systems Design
                  </Link>
                </li>
                <li>
                  <Link href={`/${countrySlug}/${locale}/services`} className="text-white/60 hover:text-yellow-500 transition-colors">
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link href={`/${countrySlug}/${locale}/services`} className="text-white/60 hover:text-yellow-500 transition-colors">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-4">Unternehmen</h5>
              <ul className="space-y-2">
                <li>
                  <Link href={`/${countrySlug}/${locale}/about`} className="text-white/60 hover:text-yellow-500 transition-colors">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href={`/${countrySlug}/${locale}/contact`} className="text-white/60 hover:text-yellow-500 transition-colors">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link href={`/${countrySlug}/${locale}/privacy`} className="text-white/60 hover:text-yellow-500 transition-colors">
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link href={`/${countrySlug}/${locale}/cookies`} className="text-white/60 hover:text-yellow-500 transition-colors">
                    {t.footer.cookies}
                  </Link>
                </li>
                <li>
                  <Link href={`/${countrySlug}/${locale}/terms`} className="text-white/60 hover:text-yellow-500 transition-colors">
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-white/60">
              © 2025 LABD. {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
