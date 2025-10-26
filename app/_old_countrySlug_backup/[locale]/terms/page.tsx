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
    title: `Terms of Service - LABD L.L.C Management Consulting | ${country?.name || 'Global'}`,
    description: `Terms of service and conditions for LABD L.L.C management consulting services in ${country?.name || 'your region'}. Professional consulting terms and client agreements.`,
    keywords: [
      'terms of service',
      'consulting agreement',
      'management consulting',
      'professional services',
      'client terms',
      'business consulting',
      country?.name || 'global',
    ].join(', '),
    openGraph: {
      title: `Terms of Service - LABD L.L.C | ${country?.name || 'Global'}`,
      description: `Terms of service for LABD L.L.C management consulting services in ${country?.name || 'your region'}.`,
      type: 'website',
      locale: locale,
      siteName: 'LABD L.L.C Management Consulting',
    },
    alternates: {
      canonical: `https://labd-consulting.com/${countrySlug}/${locale}/terms`,
      languages: country?.languages.reduce((acc, lang) => {
        acc[lang.code] = `https://labd-consulting.com/${countrySlug}/${lang.code}/terms`;
        return acc;
      }, {} as Record<string, string>) || {},
    },
  };
}

export default async function TermsPage({ params }: PageProps) {
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional terms and conditions for LABD L.L.C management consulting services.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: January 2025 | Applicable in: {country.name} {country.flag}
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-12">
            {/* Agreement Overview */}
            <section className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Agreement Overview</h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  These Terms of Service ("Terms") govern your use of LABD L.L.C management consulting services 
                  and establish the contractual relationship between you ("Client") and LABD L.L.C ("Company", "we", "us", "our").
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/20">
                    <h3 className="text-xl font-semibold text-amber-400 mb-3">Effective Date</h3>
                    <p>These terms become effective upon engagement of our services or execution of a consulting agreement.</p>
                  </div>
                  
                  <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Jurisdiction</h3>
                    <p>Services are provided in accordance with the laws of {country.name} and applicable international business law.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Terms */}
            <section className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Service Terms</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-amber-400 mb-4">Scope of Services</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                    <ul className="space-y-2">
                      <li>• Strategic planning and business consulting</li>
                      <li>• Operations optimization and process improvement</li>
                      <li>• Digital transformation and innovation advisory</li>
                      <li>• Financial advisory and restructuring</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Leadership development and change management</li>
                      <li>• ESG and sustainability consulting</li>
                      <li>• Market analysis and competitive intelligence</li>
                      <li>• Customized consulting solutions</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-amber-400 mb-4">Service Delivery</h3>
                  <div className="bg-white/5 rounded-xl p-6 text-gray-300">
                    <p className="mb-4">
                      All consulting services are delivered by qualified professionals with relevant industry experience. 
                      We maintain high standards of quality and professionalism in all client engagements.
                    </p>
                    <ul className="space-y-2">
                      <li>• Services are customized to meet specific client needs</li>
                      <li>• Regular progress updates and milestone reporting</li>
                      <li>• Collaborative approach with client teams</li>
                      <li>• Flexible delivery models (on-site, remote, hybrid)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Client Responsibilities */}
            <section className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Client Responsibilities</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-4">Information & Access</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Provide accurate and complete information</li>
                    <li>• Grant necessary access to personnel and systems</li>
                    <li>• Share relevant documentation and data</li>
                    <li>• Communicate changes in scope or objectives</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-4">Collaboration</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Designate key stakeholders and decision-makers</li>
                    <li>• Participate actively in project activities</li>
                    <li>• Provide timely feedback and approvals</li>
                    <li>• Maintain confidentiality of proprietary methods</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Payment Terms</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Fees & Billing</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Transparent pricing structure</li>
                    <li>• Detailed invoicing and time tracking</li>
                    <li>• Milestone-based or hourly billing</li>
                    <li>• No hidden fees or charges</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Payment Schedule</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Net 30 payment terms</li>
                    <li>• Monthly invoicing cycle</li>
                    <li>• Multiple payment methods accepted</li>
                    <li>• Early payment discounts available</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Currency & Tax</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Local currency: {country.currency}</li>
                    <li>• Applicable taxes included</li>
                    <li>• Currency conversion at current rates</li>
                    <li>• Tax compliance maintained</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Confidentiality */}
            <section className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Confidentiality & Intellectual Property</h2>
              
              <div className="space-y-6">
                <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/20">
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Confidentiality Commitment</h3>
                  <p className="text-gray-300 mb-4">
                    We maintain strict confidentiality of all client information, business processes, and proprietary data. 
                    All team members sign comprehensive non-disclosure agreements.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Complete confidentiality of client information</li>
                    <li>• Secure data handling and storage protocols</li>
                    <li>• Limited access on need-to-know basis</li>
                    <li>• Return of confidential materials upon completion</li>
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Client IP Rights</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Client retains ownership of existing IP</li>
                      <li>• Work product ownership as agreed</li>
                      <li>• Clear IP assignment provisions</li>
                      <li>• Protection of trade secrets</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">LABD IP Rights</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Proprietary methodologies and frameworks</li>
                      <li>• Pre-existing tools and templates</li>
                      <li>• General knowledge and experience</li>
                      <li>• Industry best practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Liability & Disputes */}
            <section className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Liability & Dispute Resolution</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-4">Limitation of Liability</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Our liability is limited to the total fees paid for the specific engagement. 
                      We provide professional advice but implementation decisions remain with the client.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Professional indemnity insurance maintained</li>
                      <li>• Liability cap at engagement value</li>
                      <li>• No liability for consequential damages</li>
                      <li>• Force majeure protections</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-4">Dispute Resolution</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We are committed to resolving any disputes amicably through direct communication 
                      and, if necessary, through mediation or arbitration.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Direct negotiation as first step</li>
                      <li>• Mediation through neutral third party</li>
                      <li>• Arbitration in {country.name}</li>
                      <li>• Governing law: Local jurisdiction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact for Terms */}
            <section className="bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Questions About These Terms?</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these terms of service or need clarification on any provisions, please contact us.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href={`/${countrySlug}/${locale}/contact`}
                    className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    Contact Legal Team
                  </Link>
                  <a 
                    href="mailto:legal@labd-consulting.com"
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-colors border border-white/20"
                  >
                    legal@labd-consulting.com
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
