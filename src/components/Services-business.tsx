import React from 'react';
import { Country } from '../../src/lib/countries';

interface ServicesProps {
  country: Country;
}

export default function Services({ country }: ServicesProps) {
  const services = [
    {
      icon: "🎯",
      title: "Strategic Consulting",
      description: "Transform your business with data-driven strategies and operational excellence frameworks tailored for " + country.name + " markets.",
      features: ["Market Analysis", "Strategic Planning", "Performance Optimization", "Risk Management"]
    },
    {
      icon: "🏫",
      title: "Education & Training",
      description: "Comprehensive training programs and educational solutions designed to elevate your team's capabilities.",
      features: ["Leadership Development", "Skills Training", "Certification Programs", "E-Learning Solutions"]
    },
    {
      icon: "🏢",
      title: "Franchise Development",
      description: "End-to-end franchise solutions from concept to implementation, helping businesses scale across " + country.name + ".",
      features: ["Franchise Modeling", "Operations Manual", "Training Systems", "Quality Assurance"]
    },
    {
      icon: "💻",
      title: "Digital Transformation",
      description: "Partner with Antrieb 2.0 (Germany) to digitize your operations and create scalable technology solutions.",
      features: ["Process Automation", "Digital Strategy", "Technology Integration", "Change Management"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-gradient-to-b from-black/60 to-gray-900/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-amber-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to drive growth and operational excellence across {country.name} and international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-2xl mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <button className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-2xl border border-amber-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can tailor our services to meet your specific needs in {country.name}.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg transition-all">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
