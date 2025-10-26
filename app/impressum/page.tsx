import { Metadata } from 'next';
import { Building2, MapPin, Mail, Phone, Shield, FileText } from 'lucide-react';
import { COMPANY_INFO } from '@/config/company';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Legal information and company details for LABD L.L.C-FZ.',
};

export default function ImpressumPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold-copper">
              Impressum
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Legal information and company details
            </p>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Company Information */}
            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-[var(--primary)]" />
                <h2 className="text-3xl font-bold text-white">Company Information</h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Legal Name</div>
                    <div className="text-lg text-white font-semibold">{COMPANY_INFO.legalName}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Trade Name</div>
                    <div className="text-lg text-white font-semibold">{COMPANY_INFO.displayName}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Company Type</div>
                    <div className="text-lg text-white font-semibold">{COMPANY_INFO.type}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Jurisdiction</div>
                    <div className="text-lg text-white font-semibold">{COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.country}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Details */}
            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-[var(--primary)]" />
                <h2 className="text-3xl font-bold text-white">Registration Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-black/40 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">License Number</div>
                  <div className="text-xl text-[var(--primary)] font-bold">{COMPANY_INFO.licenseNumber}</div>
                </div>
                <div className="p-4 bg-black/40 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Formation Number</div>
                  <div className="text-xl text-[var(--primary)] font-bold">{COMPANY_INFO.formationNumber}</div>
                </div>
                <div className="p-4 bg-black/40 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Activity Code</div>
                  <div className="text-xl text-[var(--primary)] font-bold">{COMPANY_INFO.activityCode}</div>
                </div>
                <div className="p-4 bg-black/40 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Activity Description</div>
                  <div className="text-lg text-white font-semibold">{COMPANY_INFO.activityDescription}</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Issue Date</div>
                    <div className="text-white">{COMPANY_INFO.issueDate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Expiry Date</div>
                    <div className="text-white">{COMPANY_INFO.expiryDate}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-[var(--primary)]" />
                <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Registered Address</div>
                    <div className="text-white">
                      {COMPANY_INFO.headquarters.address}<br />
                      {COMPANY_INFO.headquarters.street}<br />
                      {COMPANY_INFO.headquarters.city}<br />
                      {COMPANY_INFO.headquarters.country}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-white hover:text-[var(--primary)] transition-colors">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Phone</div>
                    <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-white hover:text-[var(--primary)] transition-colors">
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Management */}
            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-[var(--primary)]" />
                <h2 className="text-3xl font-bold text-white">Management</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Managing Director</div>
                  <div className="text-lg text-white font-semibold">{COMPANY_INFO.management.title}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Professional Credentials</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {COMPANY_INFO.management.certifications.slice(0, 4).map((cert, index) => (
                      <div key={index} className="text-white flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-8 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-2xl border border-[var(--primary)]/20">
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The content of this website is for general information purposes only and does not constitute professional advice. 
                  While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, 
                  express or implied, about the completeness, accuracy, reliability, suitability or availability of the information.
                </p>
                <p>
                  Any reliance you place on such information is therefore strictly at your own risk. We recommend that you seek 
                  professional advice before taking any action based on the information provided on this website.
                </p>
                <p>
                  {COMPANY_INFO.legalName} is a licensed Free Zone Company registered in Dubai, United Arab Emirates, 
                  operating under the regulatory framework of the UAE Free Zones.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20 text-center">
              <p className="text-gray-300">
                &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</Link>
                <span className="text-gray-400">•</span>
                <Link href="/terms" className="text-[var(--primary)] hover:underline">Terms & Conditions</Link>
                <span className="text-gray-400">•</span>
                <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
