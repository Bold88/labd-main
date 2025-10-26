'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface TestimonialsSectionProps {
  locale: string;
}

export default function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const testimonials: Testimonial[] = [
    {
      name: "Ahmed Al-Mansoori",
      role: "CEO",
      company: "Education Excellence Group",
      content: locale === 'de' 
        ? "LABD hat unsere gesamte Bildungsinfrastruktur transformiert. Ihre strategische Expertise und technologische Implementierung haben unsere Betriebseffizienz um 40% gesteigert."
        : "LABD transformed our entire education infrastructure. Their strategic expertise combined with technological implementation increased our operational efficiency by 40%.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Franchise Director",
      company: "Global Services Network",
      content: locale === 'de'
        ? "Die Franchise-Entwicklungslösung von LABD ermöglichte es uns, innerhalb eines Jahres auf 15 Standorte zu skalieren. Ihr systematischer Ansatz ist unübertroffen."
        : "LABD's franchise development solution enabled us to scale to 15 locations within a year. Their systematic approach is unmatched.",
      rating: 5
    },
    {
      name: "Dr. Mohammed Hassan",
      role: "Director of Operations",
      company: "MENA Training Institute",
      content: locale === 'de'
        ? "Vom strategischen Roadmap bis zur Umsetzung hat LABD außergewöhnliche Beratung geliefert. Ihre Partner in Deutschland brachten modernste Technologielösungen mit."
        : "From strategic roadmap to execution, LABD delivered exceptional consulting. Their Germany partners brought cutting-edge technology solutions.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {locale === 'de' ? 'Was unsere Kunden sagen' : 'What Our Clients Say'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {locale === 'de' 
              ? 'Erfolgsgeschichten von führenden Unternehmen, die LABD vertrauen'
              : 'Success stories from leading organizations who trust LABD'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all hover:transform hover:scale-105"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-700 pt-4">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
                <div className="text-sm text-amber-400">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl border border-amber-500/30">
            <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
            <div className="text-gray-300 text-sm">
              {locale === 'de' ? 'Kundenzufriedenheit' : 'Client Satisfaction'}
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl border border-amber-500/30">
            <div className="text-4xl font-bold text-amber-400 mb-2">150+</div>
            <div className="text-gray-300 text-sm">
              {locale === 'de' ? 'Projekte abgeschlossen' : 'Projects Completed'}
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl border border-amber-500/30">
            <div className="text-4xl font-bold text-amber-400 mb-2">45+</div>
            <div className="text-gray-300 text-sm">
              {locale === 'de' ? 'Globale Kunden' : 'Global Clients'}
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl border border-amber-500/30">
            <div className="text-4xl font-bold text-amber-400 mb-2">10+</div>
            <div className="text-gray-300 text-sm">
              {locale === 'de' ? 'Jahre Erfahrung' : 'Years Experience'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
