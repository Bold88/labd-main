import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, MapPin, User, Building2, Target, Globe2, Layers, Zap, Award, Users, Briefcase, Building, TrendingUp, Rocket, Search, Stethoscope, Pen, Cog, Code, Megaphone, Wrench, Sparkles, Calendar, Globe, Mail, Phone, Linkedin } from 'lucide-react';
import { translations, type Language } from '@/i18n/translations';
import { COMPANY_INFO } from '@/config/company';

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  
  if (!translations[locale as Language]) {
    notFound();
  }

  const t = translations[locale as Language];

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background City Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/Background\\ city.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/labd_logo.png"
                alt="LABD Consulting"
                width={120}
                height={120}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gradient-gold-copper rounded-full text-black font-semibold text-sm">
              <CheckCircle className="w-4 h-4" />
              {t.hero.trustBadge}
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up">
              <span className="text-gradient-gold-copper">
                {t.hero.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold-copper text-black font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-lg hover:bg-[var(--primary)] hover:text-black transition-all"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-[var(--primary)] rounded-full flex justify-center">
            <div className="w-1.5 h-2 bg-[var(--primary)] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-black/90 backdrop-blur-md border-y border-[var(--primary)]/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: t.trustBar.license, value: COMPANY_INFO.licenseNumber },
              { icon: User, label: t.trustBar.management, value: COMPANY_INFO.management.title },
              { icon: MapPin, label: t.trustBar.location, value: COMPANY_INFO.headquarters.city },
              { icon: Building2, label: t.trustBar.freeZone, value: 'Licensed Company' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 justify-center text-center lg:justify-start lg:text-left">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold-copper flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                  <div className="text-sm font-semibold text-[var(--primary)]">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-black/90 to-black/70">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.values.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.values.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.values.items.map((item, index) => {
              const icons = [Target, Globe2, Layers, Zap, Award, Users];
              const Icon = icons[index];
              return (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:transform hover:scale-105 card-hover glass-dark">
                  <div className="w-14 h-14 bg-gradient-gold-copper rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Management Excellence Section */}
      <section className="py-20 bg-black/90 border-y border-[var(--primary)]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {locale === 'en' ? 'Leadership Excellence' : 'Führungs-Exzellenz'}
              </h2>
              <p className="text-xl text-gray-300">
                {COMPANY_INFO.management.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certifications */}
              <div className="p-8 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-2xl border border-[var(--primary)]/30">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-[var(--primary)]" />
                  <h3 className="text-2xl font-bold text-white">
                    {locale === 'en' ? 'Professional Certifications' : 'Professionelle Zertifizierungen'}
                  </h3>
                </div>
                <div className="space-y-3">
                  {COMPANY_INFO.management.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-[var(--primary)]/20">
                  <p className="text-[var(--primary)] font-semibold">
                    {COMPANY_INFO.management.experience}
                  </p>
                </div>
              </div>

              {/* Expertise Areas */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-8 h-8 text-[var(--primary)]" />
                  <h3 className="text-2xl font-bold text-white">
                    {locale === 'en' ? 'Core Expertise' : 'Kernkompetenzen'}
                  </h3>
                </div>
                <div className="space-y-3">
                  {COMPANY_INFO.management.expertise.map((skill, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[var(--primary)] rounded-full flex-shrink-0 mt-2" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust Statement */}
            <div className="mt-12 text-center p-8 bg-gradient-to-r from-black/60 to-gray-900/60 rounded-xl border border-[var(--primary)]/20">
              <p className="text-xl text-gray-300 leading-relaxed">
                {locale === 'en' 
                  ? '"Our leadership team brings decades of combined experience in international consulting, ensuring your business transformation is guided by proven expertise and industry best practices."'
                  : '"Unser Führungsteam bringt jahrzehntelange kombinierte Erfahrung in der internationalen Beratung mit und stellt sicher, dass Ihre Unternehmenstransformation von bewährter Expertise und Best Practices der Branche geleitet wird."'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.services.overview.map((service, index) => {
              const icons = [Briefcase, Building, TrendingUp, Rocket];
              const Icon = icons[index];
              return (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all card-hover">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-gold-copper rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/${locale}/services`} className="inline-flex items-center text-[var(--primary)] font-semibold hover:text-[var(--primary-light)] transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold-copper text-black font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black/70 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-3xl border border-[var(--primary)]/30 glass-dark">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how LABD can help you achieve operational excellence and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold-copper text-black font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105">
                  <Calendar className="w-5 h-5" />
                  {t.nav.bookConsultation}
                </Link>
                <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-lg hover:bg-[var(--primary)] hover:text-black transition-all">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
  ];
}
