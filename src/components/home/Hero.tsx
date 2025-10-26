'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { translations, type Language } from '@/i18n/translations';
import { COMPANY_INFO } from '@/config/company';

interface HeroProps {
  locale: Language;
}

export default function Hero({ locale }: HeroProps) {
  const t = translations[locale].hero;

  return (
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
            {t.trustBadge}
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up">
            <span className="text-gradient-gold-copper">
              {t.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            {t.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            {t.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold-copper text-black font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105"
            >
              {t.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-lg hover:bg-[var(--primary)] hover:text-black transition-all"
            >
              {t.ctaSecondary}
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
  );
}
