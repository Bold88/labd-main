'use client';

import { Search, Stethoscope, Pen, Cog, Shield } from 'lucide-react';
import { translations, type Language } from '@/i18n/translations';

interface ProcessProps {
  locale: Language;
}

const processIcons = [Search, Stethoscope, Pen, Cog, Shield];

export default function Process({ locale }: ProcessProps) {
  const t = translations[locale].process;

  return (
    <section className="py-20 bg-gradient-to-b from-black/70 to-black/90">
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

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          {t.steps.map((step, index) => {
            const Icon = processIcons[index];
            const isLast = index === t.steps.length - 1;

            return (
              <div key={index} className="relative">
                <div className="flex items-start gap-6 mb-8">
                  {/* Icon & Number */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-gold-copper rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="absolute top-0 right-0 w-6 h-6 bg-black border-2 border-[var(--primary)] rounded-full flex items-center justify-center text-xs font-bold text-[var(--primary)]">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Connector Line */}
                {!isLast && (
                  <div className="ml-8 h-12 w-0.5 bg-gradient-to-b from-[var(--primary)] to-transparent mb-8" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
