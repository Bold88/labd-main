import React from 'react';
import { Country } from '../../src/lib/countries';

interface AboutProps {
  country: Country;
}

export default function About({ country }: AboutProps) {
  const features = [
    {
      title: "Consulting + Technology",
      description: "Strategy to execution with partner Antrieb 2.0 (Germany)"
    },
    {
      title: "Global Expertise, Local Impact",
      description: "Dubai & Germany presence, projects across MENA, Europe, Asia, USA"
    },
    {
      title: "Education & Franchise Focus",
      description: "Digital Transformation for service businesses"
    },
    {
      title: "Systems for Scale",
      description: "We don't just consult — we design processes, tools, and governance to scale"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-black/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-amber-400">LABD</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our expertise spans across industries and continents, delivering transformational results for businesses in {country.name} and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-black">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-2xl border border-amber-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join leading companies in {country.name} who trust LABD for their strategic transformation needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg transition-all">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
