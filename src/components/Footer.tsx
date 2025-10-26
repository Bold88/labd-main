'use client';

import { Country } from '../lib/countries';

interface FooterProps {
  country: Country;
  locale?: string;
}

export default function Footer({ country, locale = 'en' }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 lg:px-12 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src="/labd_logo.png" alt="LABD-consulting" className="h-8 w-auto" />
                        <div className="ml-3">
                            <h4 className="text-lg font-semibold">LABD-consulting</h4>
                            <p className="text-slate-400 text-sm">Excellence in Management Consulting</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                        {country.languages.slice(0, 3).map((lang) => (
                            <a 
                                key={lang.code}
                                href={`/${country.slug}/${lang.code}`} 
                                className={`text-slate-400 hover:text-white transition-colors text-sm ${
                                    lang.code === locale ? 'text-white font-medium' : ''
                                }`}
                            >
                                {lang.nativeName}
                            </a>
                        ))}
                    </div>
                </div>
                
                <div className="border-t border-slate-700 mt-8 pt-8 text-center">
                    <p className="text-slate-400 text-sm">
                        © {currentYear} LABD-consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
