'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '@/config/company';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/partner', label: 'Partner' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[var(--primary)]/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/labd_logo.png"
              alt={COMPANY_INFO.displayName}
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <div className="text-lg font-bold text-white">
                {COMPANY_INFO.displayName}
              </div>
              <div className="text-xs text-gray-400">Management Excellence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[var(--primary)] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#e3af66] text-gray-900 font-bold rounded-lg hover:bg-[#d4a057] hover:shadow-lg transition-all hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-[var(--primary)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-[var(--primary)]/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[var(--primary)] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-block text-center px-6 py-3 bg-[#e3af66] text-gray-900 font-bold rounded-lg hover:bg-[#d4a057]"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
