import { Metadata } from 'next';
import { Award, Globe2, Users, Target, CheckCircle, ArrowRight, Building2, Shield, Briefcase, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/config/company';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about LABD L.L.C-FZ, a premier management consultancy firm headquartered in Dubai, delivering excellence across global markets.',
};

export default function AboutPage() {
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
              Licensed Free Zone Company
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold-copper">
              About LABD
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Premier management consultancy firm delivering strategic excellence and operational transformation across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Who We Are</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {COMPANY_INFO.legalName} is a licensed management consultancy firm headquartered in Dubai, UAE. We specialize in transforming enterprises through strategic consulting, operational excellence, and international expansion expertise.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Our practice serves SMEs, scale-ups, family offices, and holdings across MENA, Europe, Asia, and North America, delivering measurable impact through data-driven strategies and hands-on implementation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-lg border border-[var(--primary)]/30">
                    <div className="text-3xl font-bold text-[var(--primary)] mb-2">2020</div>
                    <div className="text-sm text-gray-400">Established</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-lg border border-[var(--primary)]/30">
                    <div className="text-3xl font-bold text-[var(--primary)] mb-2">4+</div>
                    <div className="text-sm text-gray-400">Global Regions</div>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h3 className="text-2xl font-bold text-white mb-6">Company Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                    <span className="text-gray-400">Legal Name</span>
                    <span className="text-white font-semibold">{COMPANY_INFO.legalName}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                    <span className="text-gray-400">License Number</span>
                    <span className="text-[var(--primary)] font-semibold">{COMPANY_INFO.licenseNumber}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                    <span className="text-gray-400">Formation Number</span>
                    <span className="text-[var(--primary)] font-semibold">{COMPANY_INFO.formationNumber}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                    <span className="text-gray-400">Activity Code</span>
                    <span className="text-[var(--primary)] font-semibold">{COMPANY_INFO.activityCode}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                    <span className="text-gray-400">Type</span>
                    <span className="text-white font-semibold">{COMPANY_INFO.type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Headquarters</span>
                    <span className="text-white font-semibold">{COMPANY_INFO.headquarters.city}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Excellence */}
      <section className="py-20 bg-gradient-to-b from-black/70 to-black border-y border-[var(--primary)]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership Excellence</h2>
              <p className="text-xl text-gray-300">{COMPANY_INFO.management.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certifications */}
              <div className="p-8 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-2xl border border-[var(--primary)]/30">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-[var(--primary)]" />
                  <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
                </div>
                <div className="space-y-3">
                  {COMPANY_INFO.management.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-[var(--primary)]/20">
                  <p className="text-[var(--primary)] font-semibold">{COMPANY_INFO.management.experience}</p>
                </div>
              </div>

              {/* Expertise Areas */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-8 h-8 text-[var(--primary)]" />
                  <h3 className="text-2xl font-bold text-white">Core Expertise</h3>
                </div>
                <div className="space-y-3">
                  {COMPANY_INFO.management.expertise.map((skill, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[var(--primary)] rounded-full flex-shrink-0 mt-2" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and client relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Excellence', desc: 'Uncompromising commitment to quality and superior outcomes in every engagement.' },
              { icon: Shield, title: 'Integrity', desc: 'Transparent, ethical practices and honest counsel you can trust.' },
              { icon: Users, title: 'Partnership', desc: 'Collaborative approach, working alongside your team for mutual success.' },
              { icon: TrendingUp, title: 'Results', desc: 'Focus on measurable impact and sustainable value creation.' },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all card-hover text-center">
                  <div className="w-14 h-14 bg-gradient-gold-copper rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gradient-to-b from-black/70 to-black border-y border-[var(--primary)]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Globe2 className="w-16 h-16 text-[var(--primary)] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Global Reach, Local Expertise</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              From our Dubai headquarters, we serve clients across multiple continents, combining global best practices with deep local market knowledge.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { region: 'MENA', desc: 'Middle East & North Africa' },
                { region: 'Europe', desc: 'European Markets' },
                { region: 'Asia', desc: 'Asian Markets' },
                { region: 'Americas', desc: 'North America' },
              ].map((region, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20">
                  <div className="text-2xl font-bold text-[var(--primary)] mb-2">{region.region}</div>
                  <div className="text-sm text-gray-400">{region.desc}</div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Discover how our expertise can help transform your business and achieve your strategic objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#e3af66] text-gray-900 font-bold rounded-lg hover:bg-[#d4a057] hover:shadow-lg transition-all hover:scale-105">
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-lg hover:bg-[var(--primary)] hover:text-gray-900 transition-all">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
