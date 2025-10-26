import { Metadata } from 'next';
import { Briefcase, Building, TrendingUp, Rocket, Target, Users, CheckCircle, ArrowRight, Shield, Layers, Globe2, Award } from 'lucide-react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/config/company';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive management consulting services including strategic advisory, operating model design, business structuring, and international expansion.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: Briefcase,
      title: 'Management Consulting',
      description: 'Strategic advisory for business transformation, performance optimization, and sustainable growth across all organizational levels.',
      features: [
        'Strategic Planning & Roadmapping',
        'Performance Management Systems',
        'Change Management & Transformation',
        'Executive Advisory & Board Consulting',
        'Business Model Innovation',
        'Digital Transformation Strategy',
      ],
      benefits: [
        'Data-driven decision making',
        'Accelerated growth trajectory',
        'Enhanced organizational agility',
        'Sustainable competitive advantage',
      ],
    },
    {
      icon: Building,
      title: 'Operating Model & Governance',
      description: 'Design and implementation of effective organizational structures, processes, and governance frameworks for optimal performance.',
      features: [
        'Operating Model Design & Architecture',
        'Corporate Governance Frameworks',
        'Process Architecture & Optimization',
        'Risk Management Systems',
        'Internal Controls & Compliance',
        'Organizational Design & Structure',
      ],
      benefits: [
        'Improved operational efficiency',
        'Clear accountability structures',
        'Reduced operational risks',
        'Enhanced regulatory compliance',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Business Structuring',
      description: 'Setup and restructuring of companies with optimal legal, tax, and operational frameworks for maximum efficiency.',
      features: [
        'Company Formation & Registration',
        'Corporate Restructuring',
        'Free Zone Establishment',
        'Holding Structure Design',
        'Tax Optimization Strategies',
        'Legal Entity Management',
      ],
      benefits: [
        'Optimized tax efficiency',
        'Streamlined legal structures',
        'Asset protection',
        'Improved capital allocation',
      ],
    },
    {
      icon: Rocket,
      title: 'International Expansion',
      description: 'Market entry strategies, M&A readiness, and cross-border growth planning for successful global expansion.',
      features: [
        'Market Analysis & Entry Strategy',
        'Cross-Border M&A Advisory',
        'Partnership Development',
        'International Joint Ventures',
        'Market Due Diligence',
        'Global Footprint Optimization',
      ],
      benefits: [
        'Reduced market entry risks',
        'Accelerated international growth',
        'Strategic partnerships',
        'Global market presence',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Long-term strategic roadmaps aligned with your vision and market dynamics.',
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Executive coaching and leadership capability building programs.',
    },
    {
      icon: Shield,
      title: 'Risk & Compliance',
      description: 'Comprehensive risk assessment and regulatory compliance frameworks.',
    },
    {
      icon: Layers,
      title: 'Process Excellence',
      description: 'End-to-end process optimization and operational excellence initiatives.',
    },
    {
      icon: Globe2,
      title: 'Market Intelligence',
      description: 'In-depth market research and competitive intelligence services.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Quality management systems and certification support.',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black/90 to-black/70">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url(/Background\\ city.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gradient-gold-copper rounded-full text-black font-semibold text-sm">
              <CheckCircle className="w-4 h-4" />
              Comprehensive Management Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold-copper">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              End-to-end management consulting services designed to transform your business, optimize operations, and drive sustainable growth across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="sticky top-24">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-gold-copper rounded-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-black" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                      </div>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="p-6 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-xl border border-[var(--primary)]/30">
                        <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                        <div className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                      <h3 className="text-2xl font-bold text-white mb-6">What We Deliver</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-colors">
                            <div className="w-2 h-2 bg-[var(--primary)] rounded-full flex-shrink-0 mt-2" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-black/70 to-black border-y border-[var(--primary)]/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Additional Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complementary services to support your comprehensive business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all card-hover">
                  <div className="w-12 h-12 bg-gradient-gold-copper rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Approach</h2>
              <p className="text-xl text-gray-300">A proven methodology for delivering exceptional results</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Comprehensive assessment of your current state and objectives' },
                { step: '02', title: 'Strategy', desc: 'Tailored solutions aligned with your business goals' },
                { step: '03', title: 'Implementation', desc: 'Hands-on execution with your team' },
                { step: '04', title: 'Optimization', desc: 'Continuous improvement and value realization' },
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-[var(--primary)]/20 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{phase.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[var(--primary)] to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black/70 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-3xl border border-[var(--primary)]/30">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our services can help you achieve your business objectives and unlock new growth opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#e3af66] text-gray-900 font-bold rounded-lg hover:bg-[#d4a057] hover:shadow-lg transition-all hover:scale-105">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-lg hover:bg-[var(--primary)] hover:text-gray-900 transition-all">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
