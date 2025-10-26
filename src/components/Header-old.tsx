'use client';

import { Country } from '../lib/countries';

interface HeaderProps {
  country: Country;
}

export default function Header({ country }: HeaderProps) {
    return (
        <header className="py-6 px-6 lg:px-12 bg-black/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/labd_logo.png" alt="LABD L.L.C" className="h-12 w-auto" />
                    <div className="ml-4">
                        <h1 className="text-2xl font-bold text-white">LABD L.L.C</h1>
                        <p className="text-gray-400 text-sm">Management Consulting</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-gray-400">Welcome to {country.name} {country.flag}</p>
                    <p className="text-sm text-amber-400">Management Excellence</p>
                </div>
            </div>
        </header>
    );
}
