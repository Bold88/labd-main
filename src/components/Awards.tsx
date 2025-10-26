'use client';

import { Country } from '../lib/countries';

interface AwardsProps {
  country: Country;
}

export default function Awards({ country }: AwardsProps) {
    return (
        <section className="py-24 px-6 lg:px-12 bg-gray-900">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                        Recognition & Excellence
                    </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
                    Our commitment to excellence has been recognized by industry leaders across {country.name}
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-8 rounded-2xl border border-amber-500/20">
                        <h3 className="text-xl font-bold text-amber-400 mb-4">Industry Leadership</h3>
                        <p className="text-gray-300">
                            Recognized for innovative consulting methodologies and client success
                        </p>
                    </div>
                    
                    <div className="bg-gray-800 p-8 rounded-2xl border border-amber-500/20">
                        <h3 className="text-xl font-bold text-amber-400 mb-4">Global Excellence</h3>
                        <p className="text-gray-300">
                            Award-winning strategies that drive sustainable business growth
                        </p>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-2xl border border-amber-500/20">
                        <h3 className="text-xl font-bold text-amber-400 mb-4">Client Success</h3>
                        <p className="text-gray-300">
                            Outstanding results in business transformation and operational excellence
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
