'use client';

import { Country } from '../lib/countries';

interface ContactProps {
  country: Country;
}

export default function Contact({ country }: ContactProps) {
    return (
        <section className="py-24 px-6 lg:px-12 bg-gray-900">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                        Get In Touch
                    </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
                    Ready to transform your business in {country.name}? Let's discuss how we can help.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-gray-800 p-8 rounded-2xl border border-amber-500/20">
                        <h3 className="text-xl font-bold text-white mb-4">Email</h3>
                        <a href="mailto:contact@labd.ae" className="text-amber-400 hover:text-amber-300 text-lg font-semibold">
                            contact@labd.ae
                        </a>
                    </div>
                    
                    <div className="bg-gray-800 p-8 rounded-2xl border border-amber-500/20">
                        <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
                        <a href="tel:+971552772899" className="text-amber-400 hover:text-amber-300 text-lg font-semibold">
                            +971 55 277 2899
                        </a>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-2xl border border-amber-500/20">
                        <h3 className="text-xl font-bold text-white mb-4">Office</h3>
                        <p className="text-amber-400 text-lg">
                            {country.name} {country.flag}
                        </p>
                    </div>
                </div>

                <button className="px-12 py-6 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-xl transition-all text-xl">
                    Schedule a Consultation
                </button>
            </div>
        </section>
    );
}
