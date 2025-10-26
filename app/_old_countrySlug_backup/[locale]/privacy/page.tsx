import { COUNTRIES, LANGUAGES, getCountryBySlug, getLanguageByCode } from '../../../../src/lib/countries';
import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    countrySlug: string;
    locale: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  return {
    title: `Privacy Policy - LABD L.L.C Management Consulting | ${country?.name || 'Global'}`,
    description: `Privacy policy and data protection information for LABD L.L.C management consulting services in ${country?.name || 'your region'}. Learn how we protect your data and respect your privacy.`,
    keywords: [
      'privacy policy',
      'data protection',
      'GDPR compliance',
      'management consulting',
      'confidentiality',
      'data security',
      country?.name || 'global',
    ].join(', '),
    openGraph: {
      title: `Privacy Policy - LABD L.L.C | ${country?.name || 'Global'}`,
      description: `Privacy policy and data protection for LABD L.L.C management consulting in ${country?.name || 'your region'}.`,
      type: 'website',
      locale: locale,
      siteName: 'LABD L.L.C Management Consulting',
    },
    alternates: {
      canonical: `https://labd-consulting.com/${countrySlug}/${locale}/privacy`,
      languages: country?.languages.reduce((acc, lang) => {
        acc[lang.code] = `https://labd-consulting.com/${countrySlug}/${lang.code}/privacy`;
        return acc;
      }, {} as Record<string, string>) || {},
    },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    return <div>Country or language not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Header */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
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
              <Link href={`/${countrySlug}/${locale}/contact`} className="text-white/80 hover:text-amber-400 transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy outlines how LABD L.L.C collects, uses, and protects your information.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: January 2025 | Effective for: {country.name} {country.flag}
            </div>
          </div>

          {/* Privacy Content */}
          <div className="space-y-12">
            {/* Information We Collect */}
            <section className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Personal Information</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Name, email address, and contact information</li>
                    <li>Business information and company details</li>
                    <li>Professional background and consulting needs</li>
                    <li>Communication preferences and interaction history</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Usage Information</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Website usage patterns and page views</li>
                    <li>Device information and browser type</li>
                    <li>IP address and geographic location</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">How We Use Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-400">Service Delivery</h3>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside">
                    <li>Provide management consulting services</li>
                    <li>Communicate about projects and deliverables</li>
                    <li>Process payments and manage contracts</li>
                    <li>Offer customer support and assistance</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-400">Business Operations</h3>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside">
                    <li>Improve our services and website</li>
                    <li>Send relevant business communications</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Protect against fraud and security threats</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Data Protection & Security</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Encryption</h3>
                    <p className="text-gray-300 text-sm">All data is encrypted in transit and at rest using industry-standard protocols.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Access Control</h3>
                    <p className="text-gray-300 text-sm">Strict access controls ensure only authorized personnel can access your data.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Compliance</h3>
                    <p className="text-gray-300 text-sm">We comply with GDPR, CCPA, and other applicable data protection regulations.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Your Privacy Rights</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-400">Data Rights</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Access your personal information</li>
                    <li>• Correct or update your data</li>
                    <li>• Delete your personal information</li>
                    <li>• Port your data to another service</li>
                    <li>• Restrict processing of your data</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-400">Communication Preferences</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Opt-out of marketing communications</li>
                    <li>• Choose communication frequency</li>
                    <li>• Select preferred contact methods</li>
                    <li>• Update consent preferences</li>
                    <li>• Withdraw consent at any time</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact for Privacy */}
            <section className="bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Privacy Questions?</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this privacy policy or wish to exercise your privacy rights, please contact us.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href={`/${countrySlug}/${locale}/contact`}
                    className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    Contact Privacy Officer
                  </Link>
                  <a 
                    href="mailto:privacy@labd-consulting.com"
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-colors border border-white/20"
                  >
                    privacy@labd-consulting.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <img src="/labd_logo.png" alt="LABD L.L.C" className="h-10 w-auto" />
                <div>
                  <h3 className="text-xl font-bold text-white">LABD L.L.C</h3>
                  <p className="text-xs text-gray-300">Management Consulting</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Professional management consulting services for {country.name}. 
                Driving business excellence through strategic guidance and operational optimization.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href={`/${countrySlug}/${locale}/privacy`} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</Link></li>
                <li><Link href={`/${countrySlug}/${locale}/terms`} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</Link></li>
                <li><Link href={`/${countrySlug}/${locale}/contact`} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Location</h4>
              <p className="text-gray-400 text-sm">
                {country.name} {country.flag}<br />
                Language: {language.nativeName}<br />
                Timezone: {country.timezone}
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 LABD L.L.C. All rights reserved. | Management Consulting Services in {country.name}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
