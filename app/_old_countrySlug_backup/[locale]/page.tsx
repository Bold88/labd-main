import React from 'react';
import { notFound } from 'next/navigation';
import { getCountryBySlug } from '../../../src/lib/countries';
import { translations } from '../../../src/data/translations';
import Header from '../../../src/components/Header-business';
import Footer from '../../../src/components/Footer-business';
import TestimonialsSection from '../../../src/components/TestimonialsSection';
import FAQSection from '../../../src/components/FAQSection';
import IndustryShowcase from '../../../src/components/IndustryShowcase';
import { Award, Target, Globe2, BookOpen, TrendingUp, Link2, Settings, Building2, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

interface PageProps {
  params: Promise<{
    countrySlug: string;
    locale: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  
  if (!country) {
    notFound();
  }

  const t = translations[locale] || translations['en'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/background-city.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Header country={country} />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {t.hero.description.replace('{country}', country.name)}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-white">{t.hero.title.split(' ').slice(0, -1).join(' ')}</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                    {t.hero.title.split(' ').slice(-1)}
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {t.hero.subtitle}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all transform hover:scale-105">
                    {t.hero.cta1}
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                    {t.hero.cta2}
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-400">10+</div>
                    <div className="text-sm text-gray-400 mt-1">{t.hero.stats.experience}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-400">4</div>
                    <div className="text-sm text-gray-400 mt-1">{t.hero.stats.continents}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-400">150+</div>
                    <div className="text-sm text-gray-400 mt-1">{t.hero.stats.projects}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-400">2</div>
                    <div className="text-sm text-gray-400 mt-1">{t.hero.stats.offices}</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Visual Element */}
              <div className="relative">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-8">
                    <div className="h-full flex flex-col justify-between">
                      {/* Trust Indicators */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg backdrop-blur-sm">
                          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                            <Target className="w-6 h-6 text-black" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">Strategic Excellence</div>
                            <div className="text-gray-400 text-sm">Proven frameworks</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg backdrop-blur-sm">
                          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                            <Globe2 className="w-6 h-6 text-black" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">Global Reach</div>
                            <div className="text-gray-400 text-sm">4 continents, local expertise</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg backdrop-blur-sm">
                          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                            <Settings className="w-6 h-6 text-black" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">Technology Partner</div>
                            <div className="text-gray-400 text-sm">Antrieb 2.0 (Germany)</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg backdrop-blur-sm">
                          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-black" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">Industry Focus</div>
                            <div className="text-gray-400 text-sm">Education & Franchise</div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Badge */}
                      <div className="text-center p-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-lg border border-amber-500/30">
                        <div className="text-amber-400 font-bold text-lg">Trusted by Leading Organizations</div>
                        <div className="text-gray-300 text-sm mt-1">Across {country.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USPs Section */}
        <section id="about" className="py-20 px-6 lg:px-12 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.usps.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t.usps.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* USP 1 */}
              <div className="group p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Link2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t.usps.consulting.title}</h3>
                <p className="text-gray-300 leading-relaxed">{t.usps.consulting.description}</p>
              </div>

              {/* USP 2 */}
              <div className="group p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Globe2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t.usps.global.title}</h3>
                <p className="text-gray-300 leading-relaxed">{t.usps.global.description}</p>
              </div>

              {/* USP 3 */}
              <div className="group p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <BookOpen className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t.usps.education.title}</h3>
                <p className="text-gray-300 leading-relaxed">{t.usps.education.description}</p>
              </div>

              {/* USP 4 */}
              <div className="group p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t.usps.systems.title}</h3>
                <p className="text-gray-300 leading-relaxed">{t.usps.systems.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.about.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t.about.subtitle}
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 via-yellow-500 to-amber-500"></div>

              <div className="space-y-12">
                {/* Phase 1 */}
                <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="inline-block p-8 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all">
                      <div className="text-amber-400 font-bold text-sm mb-2">2015</div>
                      <h3 className="text-2xl font-bold text-white mb-4">{t.about.journey.phase1.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{t.about.journey.phase1.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full border-4 border-black hidden lg:block"></div>
                </div>

                {/* Phase 2 */}
                <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                  <div className="hidden lg:block"></div>
                  <div className="lg:text-left">
                    <div className="inline-block p-8 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all">
                      <div className="text-amber-400 font-bold text-sm mb-2">2020</div>
                      <h3 className="text-2xl font-bold text-white mb-4">{t.about.journey.phase2.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{t.about.journey.phase2.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full border-4 border-black hidden lg:block"></div>
                </div>

                {/* Phase 3 */}
                <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="inline-block p-8 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all">
                      <div className="text-amber-400 font-bold text-sm mb-2">2025</div>
                      <h3 className="text-2xl font-bold text-white mb-4">{t.about.journey.phase3.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{t.about.journey.phase3.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full border-4 border-black hidden lg:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 lg:px-12 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.services.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t.services.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Strategic Consulting */}
              <div className="p-8 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.services.strategic.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{t.services.strategic.description}</p>
                <ul className="space-y-3">
                  {t.services.strategic.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Systems for Scale */}
              <div className="p-8 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.services.systems.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{t.services.systems.description}</p>
                <ul className="space-y-3">
                  {t.services.systems.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industry Specialization */}
              <div className="p-8 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.services.industry.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{t.services.industry.description}</p>
                <ul className="space-y-3">
                  {t.services.industry.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.globalReach.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t.globalReach.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl border border-amber-500/30 hover:border-amber-500/50 transition-all">
                <div className="mb-4">
                  <Globe2 className="w-10 h-10 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.globalReach.mena.title}</h3>
                <p className="text-gray-400 text-sm">{t.globalReach.mena.description}</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl border border-amber-500/30 hover:border-amber-500/50 transition-all">
                <div className="mb-4">
                  <Globe2 className="w-10 h-10 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.globalReach.europe.title}</h3>
                <p className="text-gray-400 text-sm">{t.globalReach.europe.description}</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl border border-amber-500/30 hover:border-amber-500/50 transition-all">
                <div className="mb-4">
                  <Globe2 className="w-10 h-10 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.globalReach.asia.title}</h3>
                <p className="text-gray-400 text-sm">{t.globalReach.asia.description}</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl border border-amber-500/30 hover:border-amber-500/50 transition-all">
                <div className="mb-4">
                  <Globe2 className="w-10 h-10 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.globalReach.america.title}</h3>
                <p className="text-gray-400 text-sm">{t.globalReach.america.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Showcase */}
        <IndustryShowcase locale={locale} />

        {/* Testimonials */}
        <TestimonialsSection locale={locale} />

        {/* FAQ Section */}
        <FAQSection locale={locale} />

        {/* Contact CTA */}
        <section id="contact" className="py-20 px-6 lg:px-12 bg-gradient-to-r from-amber-500/10 to-yellow-500/10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {t.contact.subtitle.replace('{country}', country.name)}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-black/40 rounded-xl backdrop-blur-sm">
                <div className="text-amber-400 mb-3">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="text-white font-semibold mb-1">{t.contact.email}</div>
                <div className="text-gray-400 text-sm">info@labd-consulting.com</div>
              </div>

              <div className="p-6 bg-black/40 rounded-xl backdrop-blur-sm">
                <div className="text-amber-400 mb-3">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="text-white font-semibold mb-1">{t.contact.phone}</div>
                <div className="text-gray-400 text-sm">+971 XX XXX XXXX</div>
              </div>

              <div className="p-6 bg-black/40 rounded-xl backdrop-blur-sm">
                <div className="text-amber-400 mb-3">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="text-white font-semibold mb-1">{t.contact.office}</div>
                <div className="text-gray-400 text-sm">Dubai, {country.name}</div>
              </div>
            </div>

            <button className="px-12 py-5 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all transform hover:scale-105">
              {t.contact.cta}
            </button>
          </div>
        </section>

        <Footer country={country} locale={locale} />
      </div>
    </div>
  );
}
