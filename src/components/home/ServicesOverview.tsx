'use client';

import Link from 'next/link';
import { Briefcase, Building, TrendingUp, Rocket, ArrowRight } from 'lucide-react';
import { translations, type Language } from '@/i18n/translations';

interface ServicesOverviewProps {
  locale: Language;
}

const serviceIcons = [Briefcase, Building, TrendingUp, Rocket];

export default function ServicesOverview({ locale }: ServicesOverviewProps) {
  const t = translations[locale].services;

  return (
    <section id="services" className="py-20 bg-black/90">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.overview.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-gold-copper rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center text-[var(--primary)] font-semibold hover:text-[var(--primary-light)] transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold-copper text-black font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
