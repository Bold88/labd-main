import { notFound } from "next/navigation";
import Link from "next/link";
import { getCountryBySlug, getLanguageByCode } from "../../../../src/data/countries";

interface PageProps {
  params: Promise<{
    countrySlug: string;
    locale: string;
  }>;
}

export default async function CookiePage({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href={`/${countrySlug}/${locale}`} className="flex items-center">
              <img src="/labd_logo.png" alt="LABD L.L.C-FZ" className="h-12 w-auto" />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-white">LABD L.L.C-FZ</h1>
                <p className="text-yellow-500 text-sm font-medium">Management Consulting</p>
              </div>
            </Link>
            
            <Link href={`/${countrySlug}/${locale}`} className="text-yellow-500 hover:text-yellow-400 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
            Cookie Policy
          </span>
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="text-white/80 leading-relaxed space-y-8">
            <div className="bg-white/5 border border-yellow-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Cookie Usage Overview</h2>
              <p className="mb-4">
                This Cookie Policy explains how LABD L.L.C-FZ uses cookies and similar technologies on our website to enhance your browsing experience and improve our services.
              </p>
              <p className="text-sm text-white/60">Last updated: January 1, 2025</p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold text-yellow-500 mb-4">1. What Are Cookies?</h3>
                <p className="text-white/80 mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. They help us understand how you use our site and improve your experience by remembering your preferences and providing relevant content.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-yellow-500 mb-4">2. Types of Cookies We Use</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/5 border border-yellow-500/20 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-500 mb-2">Essential Cookies</h4>
                    <p className="text-white/80 mb-2">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                    <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                      <li>Session management and security</li>
                      <li>Language and region preferences</li>
                      <li>Form submission and error handling</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-yellow-500/20 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-500 mb-2">Analytics Cookies</h4>
                    <p className="text-white/80 mb-2">
                      These cookies help us understand how visitors interact with our website.
                    </p>
                    <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                      <li>Google Analytics for website performance</li>
                      <li>Page views and user journey tracking</li>
                      <li>Traffic sources and referral information</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-yellow-500/20 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-500 mb-2">Functional Cookies</h4>
                    <p className="text-white/80 mb-2">
                      These cookies enhance functionality and personalization.
                    </p>
                    <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                      <li>User preferences and settings</li>
                      <li>Contact form pre-filling</li>
                      <li>Content personalization</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-yellow-500/20 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-500 mb-2">Marketing Cookies</h4>
                    <p className="text-white/80 mb-2">
                      These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                    </p>
                    <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                      <li>LinkedIn and Facebook pixels</li>
                      <li>Retargeting and remarketing</li>
                      <li>Conversion tracking</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-yellow-500 mb-4">3. Third-Party Cookies</h3>
                <p className="text-white/80 mb-4">
                  We use third-party services that may set their own cookies:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                  <li><strong>LinkedIn:</strong> Professional networking and business insights</li>
                  <li><strong>Facebook:</strong> Social media integration and advertising</li>
                  <li><strong>Antrieb 2.0:</strong> Technology partnership integration</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-yellow-500 mb-4">4. Managing Your Cookie Preferences</h3>
                <p className="text-white/80 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Browser Settings</h4>
                    <p className="text-white/80 mb-2">
                      Most browsers allow you to control cookies through their settings preferences. You can:
                    </p>
                    <ul className="list-disc list-inside text-white/70 space-y-1">
                      <li>Block all cookies</li>
                      <li>Accept only first-party cookies</li>
                      <li>Delete existing cookies</li>
                      <li>Receive notifications when cookies are set</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Opt-Out Links</h4>
                    <ul className="list-disc list-inside text-white/80 space-y-1">
                      <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-yellow-500 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                      <li><a href="https://www.facebook.com/settings?tab=ads" className="text-yellow-500 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
                      <li><a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" className="text-yellow-500 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">LinkedIn Ad Opt-out</a></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-6">
                  <p className="text-yellow-200 text-sm">
                    <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and limit your access to some features.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-yellow-500 mb-4">5. Cookie Retention</h3>
                <p className="text-white/80 mb-4">
                  Different cookies have different lifespans:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain for a specific period (typically 1-24 months)</li>
                  <li><strong>Essential Cookies:</strong> Retained for the duration of your session</li>
                  <li><strong>Analytics Cookies:</strong> Typically retained for 24 months</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-yellow-500 mb-4">6. Updates to This Policy</h3>
                <p className="text-white/80">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-yellow-500 mb-4">7. Contact Us</h3>
                <p className="text-white/80 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-white/5 border border-yellow-500/20 rounded-xl p-6">
                  <p className="text-white/80">
                    <strong>LABD L.L.C-FZ</strong><br />
                    Email: <a href="mailto:privacy@labd-consulting.com" className="text-yellow-500 hover:text-yellow-400">privacy@labd-consulting.com</a><br />
                    Phone: <a href="tel:+971585997356" className="text-yellow-500 hover:text-yellow-400">+971 58 599 7356</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
