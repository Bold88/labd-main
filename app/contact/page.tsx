import { Metadata } from 'next';
import { Mail, Phone, MapPin, Calendar, CheckCircle, Send, Building2, Globe2 } from 'lucide-react';
import { COMPANY_INFO } from '@/config/company';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with LABD L.L.C-FZ for management consulting services. Book a consultation or inquire about our services.',
};

export default function ContactPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#e3af66] rounded-full text-gray-900 font-semibold text-sm">
              <CheckCircle className="w-4 h-4" />
              We're Here to Help
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold-copper">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Let's discuss how we can help transform your business and achieve your strategic objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact Information</h2>
                
                {/* Contact Details */}
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20">
                    <div className="w-12 h-12 bg-[#e3af66] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Email</div>
                      <a 
                        href={`mailto:${COMPANY_INFO.contact.email}`}
                        className="text-lg text-white hover:text-[var(--primary)] transition-colors font-semibold"
                      >
                        {COMPANY_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20">
                    <div className="w-12 h-12 bg-[#e3af66] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Phone</div>
                      <a 
                        href={`tel:${COMPANY_INFO.contact.phone}`}
                        className="text-lg text-white hover:text-[var(--primary)] transition-colors font-semibold"
                      >
                        {COMPANY_INFO.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-[var(--primary)]/20">
                    <div className="w-12 h-12 bg-[#e3af66] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Address</div>
                      <a 
                        href={COMPANY_INFO.headquarters.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-white hover:text-[var(--primary)] transition-colors"
                      >
                        {COMPANY_INFO.headquarters.address}<br />
                        {COMPANY_INFO.headquarters.street}<br />
                        {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.country}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <div className="p-6 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-xl border border-[var(--primary)]/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-[var(--primary)]" />
                    <h3 className="text-xl font-bold text-white">Company Details</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Legal Name</span>
                      <span className="text-white font-semibold">{COMPANY_INFO.legalName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">License Number</span>
                      <span className="text-[var(--primary)] font-semibold">{COMPANY_INFO.licenseNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Formation Number</span>
                      <span className="text-[var(--primary)] font-semibold">{COMPANY_INFO.formationNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Activity Code</span>
                      <span className="text-[var(--primary)] font-semibold">{COMPANY_INFO.activityCode}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-[var(--primary)]/20">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-8 h-8 text-[var(--primary)]" />
                    <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
                  </div>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-[var(--primary)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-[var(--primary)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-black/50 border border-[var(--primary)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-black/50 border border-[var(--primary)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 bg-black/50 border border-[var(--primary)]/30 rounded-lg text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="management-consulting">Management Consulting</option>
                        <option value="operating-model">Operating Model & Governance</option>
                        <option value="business-structuring">Business Structuring</option>
                        <option value="international-expansion">International Expansion</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-black/50 border border-[var(--primary)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e3af66] text-gray-900 font-bold rounded-lg hover:bg-[#d4a057] hover:shadow-lg transition-all hover:scale-105"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>

                    <p className="text-sm text-gray-400 text-center">
                      By submitting this form, you agree to our <a href="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                </div>

                {/* Alternative Contact */}
                <div className="mt-8 p-6 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-xl border border-[var(--primary)]/20 text-center">
                  <Globe2 className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
                  <p className="text-gray-300 mb-2">
                    For urgent inquiries, please call us directly or send an email.
                  </p>
                  <p className="text-sm text-gray-400">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-12 bg-gradient-to-b from-black/70 to-black border-y border-[var(--primary)]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-lg border border-[var(--primary)]/20">
                <div className="text-sm text-gray-400 mb-1">Monday - Friday</div>
                <div className="text-lg text-white font-semibold">9:00 AM - 6:00 PM</div>
                <div className="text-sm text-gray-400">GST (UAE Time)</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-lg border border-[var(--primary)]/20">
                <div className="text-sm text-gray-400 mb-1">Saturday</div>
                <div className="text-lg text-white font-semibold">By Appointment</div>
                <div className="text-sm text-gray-400">Contact in Advance</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-lg border border-[var(--primary)]/20">
                <div className="text-sm text-gray-400 mb-1">Sunday</div>
                <div className="text-lg text-white font-semibold">Closed</div>
                <div className="text-sm text-gray-400">Public Holidays</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
