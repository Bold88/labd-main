import { notFound } from 'next/navigation';
import { getCountryBySlug, getLanguageByCode } from '../../../src/lib/countries';

interface PageProps {
  params: Promise<{
    countrySlug: string;
    locale: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main>
        {/* Navigation */}
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <img src="/labd_logo.png" alt="LABD-consulting" className="h-8 w-auto" />
                <div className="ml-3">
                  <h1 className="text-xl font-semibold text-slate-900">LABD-consulting</h1>
                  <p className="text-xs text-slate-500">Management & Strategy</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
                <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
                <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
                <span className="text-sm text-slate-500">{country.name}</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Strategic Consulting for
              <span className="text-blue-600"> Sustainable Growth</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              LABD-consulting delivers evidence-based strategies and operational excellence 
              to drive business transformation in {country.name} and beyond.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive consulting solutions designed to address your business challenges 
                and unlock growth opportunities in {country.name}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Strategic Planning</h4>
                <p className="text-slate-600 mb-4">
                  Comprehensive strategic frameworks to guide sustainable business growth and market positioning.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Market Analysis & Research</li>
                  <li>• Business Model Innovation</li>
                  <li>• Growth Strategy Development</li>
                </ul>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Operational Excellence</h4>
                <p className="text-slate-600 mb-4">
                  Optimize operations for maximum efficiency and sustainable performance improvement.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Process Optimization</li>
                  <li>• Supply Chain Management</li>
                  <li>• Quality Management Systems</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Digital Transformation</h4>
                <p className="text-slate-600 mb-4">
                  Navigate digital transformation with strategic technology adoption and change management.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Technology Strategy</li>
                  <li>• Digital Innovation</li>
                  <li>• Change Management</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Financial Advisory</h4>
                <p className="text-slate-600 mb-4">
                  Strategic financial guidance to optimize capital structure and enhance performance.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Financial Planning & Analysis</li>
                  <li>• Investment Strategy</li>
                  <li>• Risk Management</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Leadership Development</h4>
                <p className="text-slate-600 mb-4">
                  Build strong leadership capabilities for sustainable organizational success.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Executive Coaching</li>
                  <li>• Leadership Training</li>
                  <li>• Succession Planning</li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">ESG & Sustainability</h4>
                <p className="text-slate-600 mb-4">
                  Integrate environmental, social, and governance principles into your business strategy.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• ESG Strategy Development</li>
                  <li>• Sustainability Reporting</li>
                  <li>• Carbon Footprint Assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 lg:px-12 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">About LABD-consulting</h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Your trusted partner in business transformation and strategic growth, 
                serving clients across {country.name} and international markets.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Our Mission</h4>
                <p className="text-slate-600">
                  To empower businesses with innovative strategies, operational excellence, 
                  and sustainable growth solutions that drive measurable results.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Our Vision</h4>
                <p className="text-slate-600">
                  To be the leading management consulting firm recognized globally for expertise, 
                  integrity, and exceptional client success.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Our Values</h4>
                <p className="text-slate-600">
                  Excellence, Integrity, Innovation, and Collaboration form the foundation 
                  of our approach to every client engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h3>
            <p className="text-lg text-slate-600 mb-12">
              Ready to transform your business in {country.name}? Let's discuss how we can help 
              you achieve your strategic objectives.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 border border-slate-200 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Email</h4>
                <a href="mailto:contact@labd-consulting.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  contact@labd-consulting.com
                </a>
              </div>
              
              <div className="p-6 border border-slate-200 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Phone</h4>
                <a href="tel:+971552772899" className="text-blue-600 hover:text-blue-700 font-medium">
                  +971 55 277 2899
                </a>
              </div>

              <div className="p-6 border border-slate-200 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Location</h4>
                <p className="text-slate-600 font-medium">{country.name}</p>
              </div>
            </div>

            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 lg:px-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <img src="/labd_logo.png" alt="LABD-consulting" className="h-8 w-auto" />
                <div className="ml-3">
                  <h4 className="text-lg font-semibold">LABD-consulting</h4>
                  <p className="text-slate-400 text-sm">Excellence in Management Consulting</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                {country.languages.slice(0, 3).map((lang) => (
                  <a 
                    key={lang.code}
                    href={`/${countrySlug}/${lang.code}`} 
                    className={`text-slate-400 hover:text-white transition-colors text-sm ${
                      lang.code === locale ? 'text-white font-medium' : ''
                    }`}
                  >
                    {lang.nativeName}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="border-t border-slate-700 mt-8 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                © 2025 LABD-consulting. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
