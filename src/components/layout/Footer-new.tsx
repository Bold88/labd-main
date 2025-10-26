'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { COMPANY_INFO } from '@/config/company';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/partner', label: 'Partner' },
    { href: '/contact', label: 'Contact' },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/impressum', label: 'Impressum' },
  ];

  return (
    <footer className="bg-black border-t border-[var(--primary)]/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/labd_logo.png"
                alt={COMPANY_INFO.displayName}
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <div className="text-xl font-bold text-white">
                  {COMPANY_INFO.legalName}
                </div>
                <div className="text-sm text-gray-400">Management Excellence</div>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              {COMPANY_INFO.type} — {COMPANY_INFO.activityDescription}
            </p>

            {/* License Info */}
            <div className="p-4 bg-[var(--primary)]/10 rounded-lg border border-[var(--primary)]/20 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500 text-xs">License Number</div>
                  <div className="text-[var(--primary)] font-semibold">
                    {COMPANY_INFO.licenseNumber}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Formation Number</div>
                  <div className="text-[var(--primary)] font-semibold">
                    {COMPANY_INFO.formationNumber}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Activity Code</div>
                  <div className="text-[var(--primary)] font-semibold">
                    {COMPANY_INFO.activityCode}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Status</div>
                  <div className="text-[var(--primary)] font-semibold">
                    Licensed FZ
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Valid: {COMPANY_INFO.issueDate} - {COMPANY_INFO.expiryDate}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-[var(--primary)] transition-colors"
              >
                <Mail className="w-5 h-5" />
                {COMPANY_INFO.contact.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-[var(--primary)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                {COMPANY_INFO.contact.phoneDisplay}
              </a>
              <a
                href={COMPANY_INFO.headquarters.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-[var(--primary)] transition-colors"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.headquarters.address}<br />
                  {COMPANY_INFO.headquarters.street}<br />
                  {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.country}
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-500 mb-4">Connect</h4>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-[var(--primary)]/20 hover:bg-[var(--primary)] rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[var(--primary)] hover:text-black transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>&copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--primary)] font-semibold">Licensed FZ Company</span>
              <span>•</span>
              <span>{COMPANY_INFO.headquarters.city}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
