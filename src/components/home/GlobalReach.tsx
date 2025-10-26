'use client';

import { MapPin, Globe } from 'lucide-react';
import { translations, type Language } from '@/i18n/translations';
import { COMPANY_INFO } from '@/config/company';

interface GlobalReachProps {
  locale: Language;
}

export default function GlobalReach({ locale }: GlobalReachProps) {
  const regions = [
    { name: 'MENA Region', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Egypt'] },
    { name: 'Europe', countries: ['Germany', 'UK', 'France', 'Switzerland'] },
    { name: 'Asia', countries: ['Singapore', 'India', 'Hong Kong'] },
    { name: 'North America', countries: ['USA', 'Canada'] },
  ];

  return (
    <section className="py-20 bg-black/90">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Globe className="w-8 h-8 text-[var(--primary)]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Global Reach
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dubai headquarters with worldwide project delivery
          </p>
        </div>

        {/* Headquarters Highlight */}
        <div className="max-w-3xl mx-auto mb-16 p-8 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-2xl border border-[var(--primary)]/30 glass-dark">
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-[var(--primary)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Dubai Headquarters</h3>
              <p className="text-gray-300 mb-4">
                {COMPANY_INFO.headquarters.address}<br />
                {COMPANY_INFO.headquarters.street}<br />
                {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.country}
              </p>
              <a
                href={COMPANY_INFO.headquarters.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-light)] font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4" />
                View on Map
              </a>
            </div>
          </div>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all"
            >
              <h4 className="text-lg font-bold text-[var(--primary)] mb-4">{region.name}</h4>
              <ul className="space-y-2">
                {region.countries.map((country, countryIndex) => (
                  <li key={countryIndex} className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mr-3" />
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
