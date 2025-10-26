import { Metadata } from 'next';
import { Shield, Lock, Eye, FileText, Database, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/config/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for LABD L.L.C-FZ Management Consulting Services',
  robots: 'noindex, nofollow',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <Shield className="w-16 h-16 text-[var(--primary)] mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-gradient-gold-copper mb-4">Privacy Policy</h1>
              <p className="text-gray-400">Last updated: January 1, 2025</p>
            </div>

            <div className="space-y-8">
              {/* Section 1 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[var(--primary)]" />
                  1. Information We Collect
                </h2>
                <p className="text-gray-300 mb-4">
                  {COMPANY_INFO.legalName} ("we," "our," or "us") collects information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Contact us through our website or email</li>
                  <li>Request consulting services or information</li>
                  <li>Subscribe to our newsletters or communications</li>
                  <li>Participate in surveys or feedback sessions</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Database className="w-6 h-6 text-[var(--primary)]" />
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-300 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Provide, maintain, and improve our consulting services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you technical notices, updates, and administrative messages</li>
                  <li>Communicate with you about services, offers, and events</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-[var(--primary)]" />
                  3. Information Sharing
                </h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or protect our rights</li>
                  <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                  <li>In connection with business transfers or corporate restructuring</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-[var(--primary)]" />
                  4. Data Security
                </h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </div>

              {/* Section 5 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-[var(--primary)]" />
                  5. Your Rights
                </h2>
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-300 mb-4">
                  We may use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
                </p>
              </div>

              {/* Section 7 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4">7. International Data Transfers</h2>
                <p className="text-gray-300 mb-4">
                  As we operate internationally, your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </div>

              {/* Section 8 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
                <p className="text-gray-300 mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              {/* Contact */}
              <div className="p-8 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-2xl border border-[var(--primary)]/30">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[var(--primary)] hover:underline">{COMPANY_INFO.contact.email}</a></p>
                  <p><strong>Address:</strong> {COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
