import React from 'react';
import { Country } from '../../src/lib/countries';

interface AwardsProps {
  country: Country;
}

export default function Awards({ country }: AwardsProps) {
  const achievements = [
    {
      icon: "🏆",
      title: "Excellence in Management Consulting",
      year: "2024",
      description: "Recognized for outstanding strategic consulting services across MENA region"
    },
    {
      icon: "🌟",
      title: "Digital Transformation Leader",
      year: "2024",
      description: "Award for innovative digital solutions in partnership with Antrieb 2.0"
    },
    {
      icon: "🎯",
      title: "Education & Training Excellence",
      year: "2023",
      description: "Outstanding contribution to professional development and training programs"
    },
    {
      icon: "🌍",
      title: "Global Impact Award",
      year: "2023",
      description: "Recognition for successful international projects across Europe, Asia, and USA"
    }
  ];

  const stats = [
    { number: "50+", label: "Successful Projects" },
    { number: "15+", label: "Countries Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="awards" className="py-20 px-6 lg:px-12 bg-black/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Awards & <span className="text-amber-400">Recognition</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and clients across {country.name} and beyond.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg p-6 mb-4">
                <div className="text-3xl md:text-4xl font-bold text-black">{stat.number}</div>
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((award, index) => (
            <div 
              key={index}
              className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                  {award.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{award.title}</h3>
                  <div className="text-amber-400 font-semibold">{award.year}</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>

        {/* Client Testimonial Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl p-8 border border-amber-500/20">
            <div className="text-center">
              <div className="text-6xl text-amber-400 mb-4">"</div>
              <blockquote className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                LABD's strategic approach and execution excellence transformed our operations across multiple markets. 
                Their team's expertise in both consulting and technology implementation delivered results beyond our expectations.
              </blockquote>
              <div className="text-white font-semibold">Leading Franchise Group</div>
              <div className="text-amber-400">{country.name} & Regional Markets</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how LABD can help your business achieve excellence and recognition in {country.name}.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg transition-all">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
}
