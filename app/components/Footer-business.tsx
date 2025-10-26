import React from 'react';
import Image from 'next/image';
import { Country } from '../../src/lib/countries';

interface FooterProps {
  country: Country;
  locale: string;
}

export default function Footer({ country, locale }: FooterProps) {
  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-amber-500/20 py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/labd_logo.png"
                alt="LABD Consulting"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  LABD <span className="text-amber-400">Consulting</span>
                </h3>
                <p className="text-gray-400">Excellence in Management</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Leading management consulting firm delivering strategic solutions and operational excellence 
              across {country.name} and global markets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-black hover:shadow-lg transition-all">
                <span className="text-sm font-bold">Li</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-black hover:shadow-lg transition-all">
                <span className="text-sm">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-black hover:shadow-lg transition-all">
                <span className="text-sm">🌐</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#awards" className="text-gray-300 hover:text-amber-400 transition-colors">Awards</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Strategic Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Education & Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Franchise Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Digital Transformation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 LABD L.L.C. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <span className="text-gray-400">Serving: {country.name}</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">Language: {locale.toUpperCase()}</span>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">Privacy Policy</a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Offices in Dubai & Germany | Global Projects across MENA, Europe, Asia, USA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
