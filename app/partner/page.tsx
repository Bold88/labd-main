import { Metadata } from 'next';
import { Code, Rocket, Globe2, Users, CheckCircle, ArrowRight, Zap, Monitor, Smartphone, Database, Shield, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Strategic Partner',
  description: 'Our strategic partnership with Antrieb 2.0 UG provides digital marketing and software development capabilities to complement our management consulting services.',
};

export default function PartnerPage() {
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
              Strategic Digital Partnership
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold-copper">
              Our Strategic Partner
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Combining management consulting excellence with cutting-edge digital capabilities through our partnership with Antrieb 2.0 UG.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Overview */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Antrieb 2.0 UG</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Our strategic partnership with Antrieb 2.0 UG, a Germany-based digital solutions provider, enables us to offer comprehensive digital transformation services alongside our core management consulting capabilities.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  This collaboration ensures our clients benefit from integrated strategies that combine strategic advisory, operational excellence, and digital enablement — all essential for competing in today's marketplace.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-lg border border-[var(--primary)]/30">
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white font-semibold">Germany</div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-lg border border-[var(--primary)]/30">
                    <div className="text-sm text-gray-400">Focus</div>
                    <div className="text-white font-semibold">Digital Solutions</div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-lg border border-[var(--primary)]/30">
                    <div className="text-sm text-gray-400">Partnership</div>
                    <div className="text-white font-semibold">Strategic Alliance</div>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <div className="flex items-center gap-4 mb-6">
                  <Rocket className="w-12 h-12 text-[var(--primary)]" />
                  <h3 className="text-2xl font-bold text-white">Partnership Benefits</h3>
                </div>
                <div className="space-y-4">
                  {[
                    'Integrated management and digital solutions',
                    'End-to-end transformation capabilities',
                    'European and Middle Eastern market expertise',
                    'Comprehensive technology implementation',
                    'Marketing and brand development support',
                    'Continuous innovation and improvement',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Capabilities */}
      <section className="py-20 bg-gradient-to-b from-black/70 to-black border-y border-[var(--primary)]/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Digital Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to support your business transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Software Development',
                description: 'Custom software solutions, web applications, and enterprise systems development.',
                features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
              },
              {
                icon: Rocket,
                title: 'Digital Marketing',
                description: 'Strategic marketing services to build your brand and reach your target audience.',
                features: ['Brand Strategy', 'Content Marketing', 'SEO & SEM', 'Social Media'],
              },
              {
                icon: Monitor,
                title: 'Web Solutions',
                description: 'Professional websites and digital platforms optimized for performance and conversion.',
                features: ['Website Design', 'E-commerce', 'CMS Solutions', 'UI/UX Design'],
              },
              {
                icon: Database,
                title: 'Data Solutions',
                description: 'Data analytics, business intelligence, and data-driven decision support.',
                features: ['Analytics', 'BI Dashboards', 'Data Integration', 'Reporting'],
              },
              {
                icon: Shield,
                title: 'Digital Security',
                description: 'Cybersecurity and data protection solutions to safeguard your digital assets.',
                features: ['Security Audits', 'Compliance', 'Data Protection', 'Risk Management'],
              },
              {
                icon: Zap,
                title: 'Automation',
                description: 'Process automation and digital workflow optimization solutions.',
                features: ['Workflow Automation', 'RPA', 'Integration', 'Optimization'],
              },
            ].map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all card-hover">
                  <div className="w-12 h-12 bg-gradient-gold-copper rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Integrated Approach</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How we combine strategic consulting with digital excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Strategic Planning',
                  description: 'LABD defines the business strategy, objectives, and roadmap for transformation.',
                },
                {
                  icon: Zap,
                  title: 'Digital Implementation',
                  description: 'Antrieb 2.0 builds and implements the digital solutions and platforms.',
                },
                {
                  icon: Users,
                  title: 'Continuous Optimization',
                  description: 'Joint ongoing support, optimization, and innovation for sustained success.',
                },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="p-8 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-2xl border border-[var(--primary)]/30 text-center">
                      <div className="w-16 h-16 bg-gradient-gold-copper rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[var(--primary)] to-transparent -translate-y-1/2" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Partnership Works */}
      <section className="py-20 bg-gradient-to-b from-black/70 to-black border-y border-[var(--primary)]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Globe2 className="w-16 h-16 text-[var(--primary)] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why This Partnership Works</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                In today's business environment, success requires both strategic vision and digital execution. Our partnership ensures you receive:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Unified Vision', desc: 'One cohesive strategy bridging management and technology' },
                { title: 'Seamless Delivery', desc: 'Coordinated implementation without vendor conflicts' },
                { title: 'Best-in-Class', desc: 'Top-tier expertise in both domains' },
                { title: 'Cost Efficiency', desc: 'Integrated solutions without duplication' },
                { title: 'Speed to Market', desc: 'Faster transformation through collaboration' },
                { title: 'Long-term Support', desc: 'Ongoing partnership for continuous improvement' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-lg border border-[var(--primary)]/20">
                  <CheckCircle className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-3xl border border-[var(--primary)]/30">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Experience the power of integrated management consulting and digital solutions for comprehensive business transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#e3af66] text-gray-900 font-bold rounded-lg hover:bg-[#d4a057] hover:shadow-lg transition-all hover:scale-105">
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-lg hover:bg-[var(--primary)] hover:text-gray-900 transition-all">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
