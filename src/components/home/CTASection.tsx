'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { translations, type Language } from '@/i18n/translations';

interface CTASectionProps {
  locale: Language;
}

export default function CTASection({ locale }: CTASectionProps) {
  const t = translations[locale];

  return (
    <section className="py-20 bg-gradient-to-b from-black/70 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-3xl border border-[var(--primary)]/30 glass-dark">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how LABD can help you achieve operational excellence and sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold-copper text-black font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                {t.nav.bookConsultation}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-lg hover:bg-[var(--primary)] hover:text-black transition-all"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
