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
      title: 'Contact Not Found',
    };
  }

  return {
    title: `Contact LABD L.L.C - Management Consulting in ${country.name}`,
    description: `Get in touch with LABD L.L.C for expert management consulting services in ${country.name}. Contact us for strategic planning, digital transformation, and business excellence solutions.`,
    keywords: [
      'contact LABD LLC',
      'management consulting contact',
      'business consulting inquiry',
      'strategic planning consultation',
      country.name,
      'consulting services contact',
      'business transformation',
      'consultation booking',
    ],
    openGraph: {
      title: `Contact LABD L.L.C - Expert Consulting in ${country.name}`,
      description: `Ready to transform your business? Contact our expert consultants in ${country.name} for strategic solutions.`,
      type: 'website',
      locale: locale,
    },
    alternates: {
      canonical: `/${countrySlug}/${locale}/contact`,
      languages: Object.fromEntries(
        country.languages.map(lang => [lang.code, `/${countrySlug}/${lang.code}/contact`])
      ),
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    notFound();
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      primary: 'contact@labd.ae',
      secondary: 'info@labd.ae',
      description: 'Get detailed responses to your business inquiries',
      action: 'mailto:contact@labd.ae?subject=Business Inquiry from ' + country.name
    },
    {
      icon: '📱',
      title: 'Call Us',
      primary: '+971 55 277 2899',
      secondary: '+971 4 123 4567',
      description: 'Speak directly with our consulting experts',
      action: 'tel:+971552772899'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      primary: '+971 55 277 2899',
      secondary: 'Business WhatsApp',
      description: 'Quick responses via WhatsApp Business',
      action: 'https://wa.me/971552772899?text=Hello, I am interested in consulting services in ' + country.name
    },
    {
      icon: '🌍',
      title: 'Location',
      primary: country.name + ' Office',
      secondary: 'Regional Headquarters',
      description: 'Visit us for in-person consultations',
      action: '#location'
    }
  ];

  const officeHours = [
    { day: 'Monday - Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const services = [
    'Strategic Consulting',
    'Digital Transformation',
    'Operational Excellence',
    'Financial Advisory',
    'Leadership Development',
    'ESG & Sustainability'
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
              <Link href={`/${countrySlug}/${locale}/services`} className="text-white/80 hover:text-amber-400 transition-colors font-medium">Services</Link>
              <Link href={`/${countrySlug}/${locale}/contact`} className="text-amber-400 font-medium">Contact</Link>
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
              <span className="block text-white mb-4">GET IN</span>
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                TOUCH
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business in <span className="text-amber-400 font-semibold">{country.name}</span>? Let's start the conversation.
            </p>
            
            <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto">
              Expert Consultation • Strategic Solutions • Proven Results
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                Contact <span className="text-amber-400">Methods</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Choose your preferred way to connect with our consulting experts in {country.name}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.action}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{method.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">{method.title}</h3>
                  <p className="text-amber-400 font-semibold mb-2">{method.primary}</p>
                  <p className="text-white/60 text-sm mb-4">{method.secondary}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{method.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                Send Us a <span className="text-amber-400">Message</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Tell us about your business challenges and goals. We'll get back to you within 24 hours.
              </p>
            </div>

            <form className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-12 rounded-3xl border border-amber-500/20 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white font-semibold mb-3">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-3">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-3">Company Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-3">Phone Number</label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+971 xx xxx xxxx"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-white font-semibold mb-3">Services of Interest</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service, index) => (
                      <label key={index} className="flex items-center">
                        <input type="checkbox" className="mr-2 text-amber-500 bg-black/50 border-gray-600 rounded focus:ring-amber-500" />
                        <span className="text-white/80 text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-white font-semibold mb-3">Message *</label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your business challenges, goals, and how we can help you in {country.name}..."
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <label className="flex items-center mb-6">
                    <input type="checkbox" required className="mr-3 text-amber-500 bg-black/50 border-gray-600 rounded focus:ring-amber-500" />
                    <span className="text-white/80 text-sm">
                      I agree to the processing of my personal data in accordance with the Privacy Policy *
                    </span>
                  </label>
                  
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-amber-500/30 transition-all transform hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Office Information */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-black mb-8 text-white">
                  Office <span className="text-amber-400">Information</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-2xl border border-amber-500/20">
                    <h3 className="text-xl font-bold text-amber-400 mb-4">LABD L.L.C {country.name} Office</h3>
                    <p className="text-white/80 mb-2">Regional Headquarters</p>
                    <p className="text-white/60 text-sm">
                      Strategic location in the heart of {country.name}'s business district, 
                      providing easy access for our clients across the region.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-2xl border border-amber-500/20">
                    <h3 className="text-xl font-bold text-amber-400 mb-4">Business Hours</h3>
                    <div className="space-y-3">
                      {officeHours.map((hours, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-white/80">{hours.day}</span>
                          <span className="text-white/60">{hours.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-2xl border border-amber-500/20">
                    <h3 className="text-xl font-bold text-amber-400 mb-4">Emergency Contact</h3>
                    <p className="text-white/80 mb-2">24/7 Support Hotline</p>
                    <p className="text-amber-400 font-semibold">+971 55 277 2899</p>
                    <p className="text-white/60 text-sm mt-2">
                      For urgent business matters and emergency consulting needs in {country.name}
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl font-black mb-8 text-white">
                  Why <span className="text-amber-400">Contact Us</span>?
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-black text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Free Initial Consultation</h3>
                      <p className="text-white/70">
                        Get expert advice and insights tailored to your business challenges in {country.name} at no cost.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-black text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Rapid Response</h3>
                      <p className="text-white/70">
                        We respond to all inquiries within 24 hours, often much sooner during business hours.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-black text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Local Expertise</h3>
                      <p className="text-white/70">
                        Deep understanding of {country.name}'s business environment, regulations, and market dynamics.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-black text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Proven Results</h3>
                      <p className="text-white/70">
                        15+ years of successful business transformations and a 95% client satisfaction rate.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-black text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Multilingual Support</h3>
                      <p className="text-white/70">
                        Communication in multiple languages to serve diverse businesses across {country.name}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-black">
              Start Your Transformation Today
            </h2>
            <p className="text-xl text-black/80 mb-12 max-w-2xl mx-auto">
              Every successful business transformation begins with a single conversation. 
              Let's make yours count in {country.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+971552772899"
                className="px-12 py-6 bg-black text-white font-bold text-xl rounded-full hover:bg-gray-900 transition-all transform hover:scale-105"
              >
                Call Now: +971 55 277 2899
              </a>
              <a 
                href="mailto:contact@labd.ae?subject=Business Inquiry from {country.name}"
                className="px-12 py-6 border-2 border-black text-black font-bold text-xl rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105"
              >
                Email Us
              </a>
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
                    href={`/${countrySlug}/${lang.code}/contact`} 
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
              © 2025 LABD L.L.C. All rights reserved. | Contact us for management consulting in {country.name}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
