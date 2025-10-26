import React from 'react';
import Image from 'next/image';
import { Country } from '../../src/lib/countries';

interface HeaderProps {
  country: Country;
}

export default function Header({ country }: HeaderProps) {
  return (
    <header className="relative z-20">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 py-2 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-black text-sm font-medium">
          <div className="flex items-center gap-6">
            <span>📍 Serving {country.name} & Global Markets</span>
            <span>📧 info@labd-consulting.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span>🌐 {country.languages.join(' | ')}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black/90 backdrop-blur-md border-b border-amber-500/20 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/labd_logo.png"
              alt="LABD Consulting"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">
                LABD <span className="text-amber-400">Consulting</span>
              </h1>
              <p className="text-xs text-gray-400">Management Excellence</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-white hover:text-amber-400 transition-colors font-medium">
              About Us
            </a>
            <a href="#services" className="text-white hover:text-amber-400 transition-colors font-medium">
              Services
            </a>
            <a href="#awards" className="text-white hover:text-amber-400 transition-colors font-medium">
              Awards
            </a>
            <a href="#contact" className="text-white hover:text-amber-400 transition-colors font-medium">
              Contact
            </a>
            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-white hover:text-amber-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
