'use client';

import { Code, Megaphone, Wrench, Sparkles } from 'lucide-react';
import { translations, type Language } from '@/i18n/translations';
import { COMPANY_INFO } from '@/config/company';

interface PartnerProps {
  locale: Language;
}

const capabilityIcons = [Megaphone, Code, Wrench, Sparkles];

export default function Partner({ locale }: PartnerProps) {
  const t = translations[locale].partner;

  return (
    <section className="py-20 bg-gradient-to-b from-black/90 to-black/70">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.title}
            </h2>
            <h3 className="text-2xl text-[var(--primary)] font-semibold mb-6">
              {t.subtitle}
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index];
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-gold-copper rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-white font-semibold">{capability}</span>
                </div>
              );
            })}
          </div>

          {/* Partner Info Box */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-2xl border border-[var(--primary)]/30 text-center">
            <p className="text-gray-300">
              <span className="text-white font-bold">{COMPANY_INFO.partner.name}</span>
              {' • '}
              <span className="text-[var(--primary)]">{COMPANY_INFO.partner.location}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
