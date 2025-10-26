import { Metadata } from 'next';
import { FileText, Scale, Shield, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/config/company';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms of Service for LABD L.L.C-FZ Management Consulting Services',
  robots: 'noindex, nofollow',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <Scale className="w-16 h-16 text-[var(--primary)] mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-gradient-gold-copper mb-4">Terms & Conditions</h1>
              <p className="text-gray-400">Last updated: January 1, 2025</p>
            </div>

            <div className="space-y-8">
              {/* Section 1 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[var(--primary)]" />
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-300">
                  By accessing and using the services provided by {COMPANY_INFO.legalName} ("Company," "we," "our," or "us"), you accept and agree to be bound by the terms and provisions of this agreement.
                </p>
              </div>

              {/* Section 2 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
                <p className="text-gray-300 mb-4">
                  {COMPANY_INFO.legalName} provides management consulting services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Strategic planning and business development</li>
                  <li>Operational excellence and process optimization</li>
                  <li>Operating model design and governance frameworks</li>
                  <li>Business structuring and company formation</li>
                  <li>International expansion and market entry strategies</li>
                  <li>Leadership development and organizational change</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--primary)]" />
                  3. Client Responsibilities
                </h2>
                <p className="text-gray-300 mb-4">Clients agree to:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Cooperate fully with consulting engagements</li>
                  <li>Make timely payments as agreed</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain confidentiality of proprietary methods</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4">4. Fees and Payment</h2>
                <p className="text-gray-300 mb-4">
                  Professional fees are determined based on the scope of services and will be outlined in engagement letters or service agreements. Payment terms include:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Fees are due as specified in the engagement agreement</li>
                  <li>Late payments may incur interest charges</li>
                  <li>Services may be suspended for non-payment</li>
                  <li>All fees are exclusive of applicable taxes</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[var(--primary)]" />
                  5. Confidentiality
                </h2>
                <p className="text-gray-300 mb-4">
                  Both parties agree to maintain strict confidentiality regarding:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Proprietary business information</li>
                  <li>Strategic plans and recommendations</li>
                  <li>Financial data and projections</li>
                  <li>Trade secrets and methodologies</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                <p className="text-gray-300 mb-4">
                  All methodologies, frameworks, templates, and tools developed by {COMPANY_INFO.displayName} remain our intellectual property. Client-specific deliverables and recommendations become the property of the client upon full payment.
                </p>
              </div>

              {/* Section 7 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-[var(--primary)]" />
                  7. Limitation of Liability
                </h2>
                <p className="text-gray-300 mb-4">
                  Our liability is limited to the fees paid for the specific engagement. We are not liable for:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits or business opportunities</li>
                  <li>Decisions made based on our recommendations</li>
                  <li>Third-party actions or failures</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4">8. Professional Standards</h2>
                <p className="text-gray-300">
                  We adhere to the highest professional and ethical standards in all our engagements. Our recommendations are based on professional judgment, industry best practices, and the information provided by the client.
                </p>
              </div>

              {/* Section 9 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-[var(--primary)]" />
                  9. Termination
                </h2>
                <p className="text-gray-300 mb-4">
                  Either party may terminate an engagement with written notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Client is responsible for fees incurred up to termination date</li>
                  <li>Work in progress will be delivered in current state</li>
                  <li>Confidentiality obligations continue to apply</li>
                  <li>Unpaid invoices remain due and payable</li>
                </ul>
              </div>

              {/* Section 10 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                <p className="text-gray-300">
                  These terms are governed by the laws of the United Arab Emirates and the regulations of the Dubai Free Zones. Any disputes will be resolved through arbitration in Dubai, UAE.
                </p>
              </div>

              {/* Section 11 */}
              <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                <h2 className="text-2xl font-bold text-white mb-4">11. Amendments</h2>
                <p className="text-gray-300">
                  We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </div>

              {/* Contact */}
              <div className="p-8 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-2xl border border-[var(--primary)]/30">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  For questions regarding these terms, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Company:</strong> {COMPANY_INFO.legalName}</p>
                  <p><strong>License:</strong> {COMPANY_INFO.licenseNumber}</p>
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
