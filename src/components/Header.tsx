'use client';

import { Country } from '../lib/countries';

interface HeaderProps {
  country: Country;
}

export default function Header({ country }: HeaderProps) {
    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img src="/labd_logo.png" alt="LABD-consulting" className="h-8 w-auto" />
                        <div className="ml-3">
                            <h1 className="text-xl font-semibold text-slate-900">LABD-consulting</h1>
                            <p className="text-xs text-slate-500">Management & Strategy</p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
                        <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
                        <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
                        <span className="text-sm text-slate-500">{country.name}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
