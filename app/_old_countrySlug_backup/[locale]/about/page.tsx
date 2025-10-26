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
      title: 'About Not Found',
    };
  }

  return {
    title: `About LABD L.L.C - Leading Management Consulting in ${country.name}`,
    description: `Learn about LABD L.L.C, a premier management consulting firm serving ${country.name} since 2009. Our mission, vision, team, and commitment to excellence in strategic consulting.`,
    keywords: [
      'LABD LLC about',
      'management consulting company',
      'business consulting firm',
      'strategic consulting',
      country.name,
      'consulting expertise',
      'company history',
      'leadership team',
    ],
    openGraph: {
      title: `About LABD L.L.C - Premier Consulting in ${country.name}`,
      description: `Discover our story, mission, and expertise in transforming businesses across ${country.name} and beyond.`,
      type: 'website',
      locale: locale,
    },
    alternates: {
      canonical: `/${countrySlug}/${locale}/about`,
      languages: Object.fromEntries(
        country.languages.map(lang => [lang.code, `/${countrySlug}/${lang.code}/about`])
      ),
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    notFound();
  }

  const milestones = [
    {
      year: '2009',
      title: 'Foundation',
      description: 'LABD L.L.C was founded with a vision to transform businesses through strategic consulting.'
    },
    {
      year: '2012',
      title: 'Regional Expansion',
      description: `Extended operations across ${country.name} and neighboring markets, establishing local expertise.`
    },
    {
      year: '2015',
      title: 'Digital Transformation',
      description: 'Pioneered digital consulting services, helping clients navigate the digital revolution.'
    },
    {
      year: '2018',
      title: 'Global Recognition',
      description: 'Achieved international recognition for excellence in management consulting and client satisfaction.'
    },
    {
      year: '2021',
      title: 'Sustainability Focus',
      description: 'Launched comprehensive ESG and sustainability consulting services.'
    },
    {
      year: '2025',
      title: 'AI & Innovation',
      description: 'Leading the integration of AI and innovative technologies in business transformation.'
    }
  ];

  const team = [
    {
      name: 'Dr. Ahmed Al-Mansouri',
      position: 'Founder & CEO',
      expertise: 'Strategic Planning, Regional Markets',
      description: 'Over 20 years of experience in management consulting across the Middle East and global markets.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Managing Partner - Operations',
      expertise: 'Operational Excellence, Process Optimization',
      description: 'Former McKinsey consultant with extensive experience in operational transformation.'
    },
    {
      name: 'Dr. Raj Patel',
      position: 'Head of Digital Innovation',
      expertise: 'Digital Transformation, Technology Strategy',
      description: 'Tech entrepreneur and consultant specializing in digital business transformation.'
    },
    {
      name: 'Maria Rodriguez',
      position: 'Director of Sustainability',
      expertise: 'ESG Strategy, Sustainability Consulting',
      description: 'Leading expert in corporate sustainability and environmental strategy.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering exceptional results that exceed client expectations.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We operate with the highest standards of ethics and transparency in all our business relationships.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace innovation and cutting-edge solutions to solve complex business challenges.'
    },
    {
      icon: '🌍',
      title: 'Global Perspective',
      description: 'We combine global best practices with deep local market knowledge and cultural understanding.'
    },
    {
      icon: '📈',
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes and sustainable value creation for our clients.'
    },
    {
      icon: '🤖',
      title: 'Future-Ready',
      description: 'We help organizations prepare for and thrive in the rapidly evolving business landscape.'
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
              <Link href={`/${countrySlug}/${locale}/about`} className="text-amber-400 font-medium">About</Link>
              <Link href={`/${countrySlug}/${locale}/services`} className="text-white/80 hover:text-amber-400 transition-colors font-medium">Services</Link>
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
              <span className="block text-white mb-4">ABOUT</span>
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                LABD L.L.C
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transforming businesses across <span className="text-amber-400 font-semibold">{country.name}</span> since 2009
            </p>
            
            <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto">
              Excellence • Innovation • Integrity • Results
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-16 mb-24">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  To empower businesses in {country.name} and beyond with innovative strategies, 
                  operational excellence, and sustainable growth solutions that create lasting value 
                  for all stakeholders.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl">🚀</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  To be the leading management consulting firm in {country.name}, recognized globally 
                  for our expertise, integrity, and exceptional client success in driving business transformation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl">💎</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Purpose</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  To bridge the gap between ambitious business goals and practical implementation, 
                  enabling organizations to thrive in an increasingly complex and dynamic marketplace.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                Our <span className="text-amber-400">Values</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                The principles that guide every decision and action at LABD L.L.C
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                Our <span className="text-amber-400">Journey</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                From a vision to transform businesses in {country.name} to becoming a trusted partner in global markets
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-yellow-600"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-amber-500/20 backdrop-blur-sm">
                      <div className="text-3xl font-black text-amber-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-4">{milestone.title}</h3>
                      <p className="text-white/70 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full border-4 border-black"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                Our <span className="text-amber-400">Leadership</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Experienced professionals dedicated to delivering excellence in {country.name} and beyond
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {team.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">{member.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-amber-400 font-semibold mb-2">{member.position}</p>
                      <p className="text-white/60 text-sm mb-4">{member.expertise}</p>
                      <p className="text-white/70 leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-24 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-black">
                Our Impact in {country.name}
              </h2>
              <p className="text-xl text-black/80 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-black/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-5xl font-black text-black mb-4">15+</div>
                <h3 className="text-xl font-bold text-black mb-2">Years of Excellence</h3>
                <p className="text-black/70">Serving businesses in {country.name} since 2009</p>
              </div>
              
              <div className="text-center bg-black/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-5xl font-black text-black mb-4">500+</div>
                <h3 className="text-xl font-bold text-black mb-2">Projects Completed</h3>
                <p className="text-black/70">Successful transformations delivered</p>
              </div>
              
              <div className="text-center bg-black/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-5xl font-black text-black mb-4">95%</div>
                <h3 className="text-xl font-bold text-black mb-2">Client Satisfaction</h3>
                <p className="text-black/70">Consistently exceeding expectations</p>
              </div>
              
              <div className="text-center bg-black/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-5xl font-black text-black mb-4">50+</div>
                <h3 className="text-xl font-bold text-black mb-2">Countries Served</h3>
                <p className="text-black/70">Global reach, local expertise</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
              Ready to Work with <span className="text-amber-400">LABD L.L.C</span>?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Experience the difference that expertise, integrity, and innovation can make for your business in {country.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href={`/${countrySlug}/${locale}/contact`}
                className="px-12 py-6 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold text-xl rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link 
                href={`/${countrySlug}/${locale}/services`}
                className="px-12 py-6 border-2 border-amber-500 text-amber-500 font-bold text-xl rounded-full hover:bg-amber-500 hover:text-black transition-all transform hover:scale-105"
              >
                Explore Our Services
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
                    href={`/${countrySlug}/${lang.code}/about`} 
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
              © 2025 LABD L.L.C. All rights reserved. | Premier Management Consulting in {country.name}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
