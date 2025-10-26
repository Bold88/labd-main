'use client';

import { Country } from '../lib/countries';

interface AboutProps {
  country: Country;
}

export default function About({ country }: AboutProps) {
    return (
        <section id="about" className="py-20 relative overflow-hidden bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                            About LABD L.L.C
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                        Excellence in management consulting across {country.name}
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="bg-gray-800 p-10 rounded-2xl border border-amber-500/20">
                        <h3 className="text-2xl font-bold text-amber-400 mb-6">Our Mission</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            To empower businesses with innovative strategies, operational excellence, and sustainable growth solutions.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-10 rounded-2xl border border-amber-500/20">
                        <h3 className="text-2xl font-bold text-amber-400 mb-6">Our Vision</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            To be the leading management consulting firm recognized for expertise, integrity, and client success.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-10 rounded-2xl border border-amber-500/20">
                        <h3 className="text-2xl font-bold text-amber-400 mb-6">Our Values</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Excellence, Integrity, Innovation, and Collaboration form the foundation of everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
