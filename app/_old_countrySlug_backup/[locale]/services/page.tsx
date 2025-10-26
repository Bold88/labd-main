import { notFound } from 'next/navigation';
import { getCountryBySlug, getLanguageByCode } from '../../../../src/lib/countries';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    countrySlug: string;
    locale: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    return {
      title: 'Services Not Found',
    };
  }

  return {
    title: `Management Consulting Services in ${country.name} | LABD L.L.C`,
    description: `Comprehensive management consulting services in ${country.name}. Strategic planning, digital transformation, operational excellence, and leadership development by LABD L.L.C.`,
    keywords: [
      'management consulting services',
      'strategic planning',
      'digital transformation',
      'operational excellence',
      'leadership development',
      country.name,
      'business consulting',
      'LABD LLC',
    ],
    openGraph: {
      title: `Professional Consulting Services in ${country.name}`,
      description: `Transform your business with our expert consulting services in ${country.name}. Strategic planning, operations, and digital transformation solutions.`,
      type: 'website',
      locale: locale,
    },
    alternates: {
      canonical: `/${countrySlug}/${locale}/services`,
      languages: Object.fromEntries(
        country.languages.map(lang => [lang.code, `/${countrySlug}/${lang.code}/services`])
      ),
    },
  };
}

export default async function ServicesPage({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    notFound();
  }

  const services = [
    {
      id: 'strategic-consulting',
      title: 'Strategic Consulting',
      icon: '📊',
      description: 'Transform your business vision into actionable strategies for sustainable growth.',
      features: [
        'Market Analysis & Research',
        'Competitive Intelligence',
        'Strategic Planning & Roadmaps',
        'Business Model Innovation',
        'Growth Strategy Development',
        'Merger & Acquisition Support'
      ],
      benefits: [
        'Increased market share',
        'Enhanced competitive advantage',
        'Clear strategic direction',
        'Improved decision-making'
      ]
    },
    {
      id: 'operations-excellence',
      title: 'Operations Excellence',
      icon: '⚙️',
      description: 'Optimize processes and systems for maximum efficiency and performance.',
      features: [
        'Process Optimization & Reengineering',
        'Quality Management Systems',
        'Supply Chain Optimization',
        'Performance Management',
        'Cost Reduction Programs',
        'Lean Six Sigma Implementation'
      ],
      benefits: [
        'Reduced operational costs',
        'Improved efficiency',
        'Enhanced quality standards',
        'Streamlined processes'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Innovation',
      icon: '💻',
      description: 'Navigate digital transformation with cutting-edge technology solutions.',
      features: [
        'Digital Strategy Development',
        'Technology Implementation',
        'Data Analytics & Business Intelligence',
        'Automation Solutions',
        'Digital Marketing Strategy',
        'Cybersecurity Consulting'
      ],
      benefits: [
        'Enhanced digital capabilities',
        'Improved customer experience',
        'Data-driven insights',
        'Competitive digital advantage'
      ]
    },
    {
      id: 'financial-advisory',
      title: 'Financial Advisory',
      icon: '💰',
      description: 'Strategic financial guidance for optimal capital structure and growth.',
      features: [
        'Financial Planning & Analysis',
        'Investment Strategy',
        'Risk Management',
        'Cost Management',
        'Financial Modeling',
        'Capital Structure Optimization'
      ],
      benefits: [
        'Improved financial performance',
        'Better risk management',
        'Optimized capital allocation',
        'Enhanced profitability'
      ]
    },
    {
      id: 'leadership-development',
      title: 'Leadership Development',
      icon: '👥',
      description: 'Build exceptional leadership capabilities for organizational success.',
      features: [
        'Executive Coaching',
        'Leadership Training Programs',
        'Team Building & Development',
        'Succession Planning',
        'Change Management',
        'Organizational Development'
      ],
      benefits: [
        'Stronger leadership pipeline',
        'Improved team performance',
        'Enhanced organizational culture',
        'Better change management'
      ]
    },
    {
      id: 'esg-sustainability',
      title: 'ESG & Sustainability',
      icon: '🌱',
      description: 'Integrate sustainability principles for responsible business growth.',
      features: [
        'ESG Strategy Development',
        'Sustainability Reporting',
        'Carbon Footprint Analysis',
        'Corporate Social Responsibility',
        'Environmental Compliance',
        'Stakeholder Engagement'
      ],
      benefits: [
        'Enhanced brand reputation',
        'Regulatory compliance',
        'Risk mitigation',
        'Sustainable growth'
      ]
    }
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href={`/${countrySlug}/${locale}`} className="flex items-center space-x-4">
              <img src="/labd_logo.png" alt="LABD L.L.C" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-white">LABD L.L.C</h1>
                <p className="text-xs text-gray-300">Management Consulting</p>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href={`/${countrySlug}/${locale}`} className="text-white/80 hover:text-amber-400 transition-colors font-medium">Home</Link>
              <Link href={`/${countrySlug}/${locale}/about`} className="text-white/80 hover:text-amber-400 transition-colors font-medium">About</Link>
              <Link href={`/${countrySlug}/${locale}/services`} className="text-amber-400 font-medium">Services</Link>
              <Link href={`/${countrySlug}/${locale}/contact`} className="text-white/80 hover:text-amber-400 transition-colors font-medium">Contact</Link>
              <div className="text-right">
                <p className="text-xs text-gray-300">{country.name} {country.flag}</p>
                <p className="text-xs text-amber-400">{language.nativeName}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-32 flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/Background city.avif')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white mb-4">OUR</span>
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive management consulting solutions designed for businesses in <span className="text-amber-400 font-semibold">{country.name}</span>
            </p>
            
            <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto">
              Strategic Excellence • Operational Innovation • Digital Transformation • Leadership Development
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              {services.map((service, index) => (
                <div key={service.id} className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-12 rounded-3xl border border-amber-500/20 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-[1.02]">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-6 group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">{service.title}</h3>
                      <p className="text-white/70 mt-2">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-amber-400 mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-white/70">
                            <span className="text-amber-400 mr-2 mt-1">→</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-amber-400 mb-4">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-white/70">
                            <span className="text-green-400 mr-2 mt-1">✓</span>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <Link 
                      href={`/${countrySlug}/${locale}/contact`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-lg transition-all"
                    >
                      Get Started
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                Why Choose <span className="text-amber-400">LABD L.L.C</span> in {country.name}?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our expertise, local knowledge, and global perspective make us the ideal partner for your business transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-black text-black">15+</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Years of Excellence</h3>
                <p className="text-white/70">Proven track record in {country.name} and global markets</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-black text-black">500+</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Projects Delivered</h3>
                <p className="text-white/70">Successful transformations across industries</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-black text-black">95%</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Client Satisfaction</h3>
                <p className="text-white/70">Consistently exceeding client expectations</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-black text-black">24/7</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Global Support</h3>
                <p className="text-white/70">Round-the-clock support and expertise</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-black">
              Ready to Transform Your Business in {country.name}?
            </h2>
            <p className="text-xl text-black/80 mb-12 max-w-2xl mx-auto">
              Let's discuss how our expert consulting services can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href={`/${countrySlug}/${locale}/contact`}
                className="px-12 py-6 bg-black text-white font-bold text-xl rounded-full hover:bg-gray-900 transition-all transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                href={`/${countrySlug}/${locale}/about`}
                className="px-12 py-6 border-2 border-black text-black font-bold text-xl rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <Link href={`/${countrySlug}/${locale}`} className="flex items-center mb-6">
                <img src="/labd_logo.png" alt="LABD L.L.C" className="h-12 w-auto" />
                <div className="ml-4">
                  <h4 className="text-2xl font-bold text-white">LABD L.L.C</h4>
                  <p className="text-gray-400">Excellence in Management Consulting</p>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Transforming businesses across {country.name} with strategic insights, 
                operational excellence, and innovative solutions since 2009.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-bold text-white mb-6">Quick Links</h5>
              <ul className="space-y-3">
                <li><Link href={`/${countrySlug}/${locale}`} className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link href={`/${countrySlug}/${locale}/about`} className="text-gray-400 hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link href={`/${countrySlug}/${locale}/services`} className="text-gray-400 hover:text-amber-400 transition-colors">Services</Link></li>
                <li><Link href={`/${countrySlug}/${locale}/contact`} className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-bold text-white mb-6">Languages</h5>
              <div className="space-y-3">
                {country.languages.slice(0, 5).map((lang) => (
                  <Link 
                    key={lang.code}
                    href={`/${countrySlug}/${lang.code}/services`} 
                    className={`block text-gray-400 hover:text-amber-400 transition-colors ${
                      lang.code === locale ? 'text-amber-400 font-semibold' : ''
                    }`}
                  >
                    {lang.nativeName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 LABD L.L.C. All rights reserved. | Management Consulting Services in {country.name}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
