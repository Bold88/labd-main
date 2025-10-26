'use client';

import { Shield, MapPin, User, Building2 } from 'lucide-react';
import { translations, type Language } from '@/i18n/translations';
import { COMPANY_INFO } from '@/config/company';

interface TrustBarProps {
  locale: Language;
}

export default function TrustBar({ locale }: TrustBarProps) {
  const t = translations[locale].trustBar;

  const items = [
    {
      icon: Shield,
      label: t.license,
      value: COMPANY_INFO.licenseNumber,
    },
    {
      icon: Building2,
      label: t.freeZone,
      value: COMPANY_INFO.type,
    },
    {
      icon: MapPin,
      label: t.location,
      value: COMPANY_INFO.headquarters.city,
    },
    {
      icon: User,
      label: t.management,
      value: 'Certified Consultants',
    },
  ];

  return (
    <section className="py-8 bg-black/90 backdrop-blur-md border-y border-[var(--primary)]/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center text-center lg:justify-start lg:text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-gold-copper flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-xs text-gray-400">{item.label}</div>
                <div className="text-sm font-semibold text-[var(--primary)]">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
