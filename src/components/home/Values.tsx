'use client';

import { Target, Globe2, Layers, Zap, Award, Users } from 'lucide-react';
import { translations, type Language } from '@/i18n/translations';

interface ValuesProps {
  locale: Language;
}

const icons = [Target, Globe2, Layers, Zap, Award, Users];

export default function Values({ locale }: ValuesProps) {
  const t = translations[locale].values;

  return (
    <section className="py-20 bg-gradient-to-b from-black/90 to-black/70">
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

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all hover:transform hover:scale-105 card-hover glass-dark"
              >
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
  );
}
