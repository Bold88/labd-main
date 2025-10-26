'use client';

import React from 'react';
import { GraduationCap, Store, Briefcase, Users, CircleDot } from 'lucide-react';

interface IndustryShowcaseProps {
  locale: string;
}

export default function IndustryShowcase({ locale }: IndustryShowcaseProps) {
  const industries = [
    {
      icon: GraduationCap,
      title: locale === 'de' ? "Bildungssektor" : "Education Sector",
      description: locale === 'de' 
        ? "Transformation von Bildungseinrichtungen mit digitalen Lösungen, Lehrplanentwicklung und operativer Exzellenz."
        : "Transforming educational institutions with digital solutions, curriculum development, and operational excellence.",
      achievements: [
        locale === 'de' ? "40+ Bildungseinrichtungen transformiert" : "40+ educational institutions transformed",
        locale === 'de' ? "Digitale Lernplattformen implementiert" : "Digital learning platforms implemented",
        locale === 'de' ? "Verbesserung der Lehrerleistung um 35%" : "35% improvement in teacher performance"
      ]
    },
    {
      icon: Store,
      title: locale === 'de' ? "Franchise-Operationen" : "Franchise Operations",
      description: locale === 'de'
        ? "End-to-End-Franchise-Entwicklung von der Konzeption bis zur Multi-Unit-Expansion."
        : "End-to-end franchise development from concept to multi-unit expansion.",
      achievements: [
        locale === 'de' ? "25+ erfolgreiche Franchise-Modelle" : "25+ successful franchise models",
        locale === 'de' ? "Skalierung auf 150+ Standorte" : "Scaled to 150+ locations",
        locale === 'de' ? "Standardisierte operative Systeme" : "Standardized operational systems"
      ]
    },
    {
      icon: Briefcase,
      title: locale === 'de' ? "Dienstleistungsunternehmen" : "Service Businesses",
      description: locale === 'de'
        ? "Digitalisierung von Dienstleistungen mit Prozessautomatisierung und Technologieintegration."
        : "Digitizing service businesses with process automation and technology integration.",
      achievements: [
        locale === 'de' ? "60+ Dienstleistungsunternehmen digitalisiert" : "60+ service businesses digitized",
        locale === 'de' ? "Effizienzsteigerung um 50%" : "50% efficiency improvements",
        locale === 'de' ? "Kundenzufriedenheit um 45% gestiegen" : "45% increase in customer satisfaction"
      ]
    },
    {
      icon: Users,
      title: locale === 'de' ? "Unternehmensführung" : "Corporate Leadership",
      description: locale === 'de'
        ? "Entwicklungsprogramme für Führungskräfte und Organisationstransformation für nachhaltiges Wachstum."
        : "Executive development programs and organizational transformation for sustainable growth.",
      achievements: [
        locale === 'de' ? "1000+ Führungskräfte geschult" : "1000+ executives trained",
        locale === 'de' ? "Entwicklung von Führungspipelines" : "Leadership pipeline development",
        locale === 'de' ? "Kulturelle Transformationsinitiativen" : "Cultural transformation initiatives"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-black/40 to-gray-900/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {locale === 'de' ? 'Branchen, die wir bedienen' : 'Industries We Serve'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {locale === 'de'
              ? 'Tiefe Expertise und nachgewiesene Ergebnisse in wichtigen Sektoren'
              : 'Deep expertise and proven results across key sectors'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mr-6 group-hover:rotate-12 transition-transform">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{industry.description}</p>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6 space-y-3">
                  {industry.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start">
                      <CircleDot className="w-4 h-4 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Study CTA */}
        <div className="text-center p-12 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl border border-amber-500/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            {locale === 'de' ? 'Sehen Sie unsere Erfolgsgeschichten' : 'See Our Success Stories'}
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {locale === 'de'
              ? 'Entdecken Sie, wie wir führenden Organisationen geholfen haben, ihre Transformationsziele zu erreichen.'
              : 'Discover how we\'ve helped leading organizations achieve their transformation goals.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all transform hover:scale-105">
              {locale === 'de' ? 'Fallstudien ansehen' : 'View Case Studies'}
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              {locale === 'de' ? 'Beratung buchen' : 'Schedule Consultation'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
