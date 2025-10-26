'use client';

import { Country } from '../lib/countries';

interface ServicesProps {
  country: Country;
}

export default function Services({ country }: ServicesProps) {
    return (
        <section className="py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                            Our Services
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                        Comprehensive consulting solutions tailored for businesses in {country.name}.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-900 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                        <h3 className="text-xl font-bold text-amber-400 mb-4">Strategic Planning</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Comprehensive strategic frameworks to guide your business growth and market positioning.
                        </p>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>• Market Analysis & Research</li>
                            <li>• Business Model Innovation</li>
                            <li>• Growth Strategy Development</li>
                        </ul>
                    </div>
                    
                    <div className="bg-gray-900 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                        <h3 className="text-xl font-bold text-amber-400 mb-4">Operational Excellence</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Optimize your operations for maximum efficiency and sustainable performance.
                        </p>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>• Process Optimization</li>
                            <li>• Supply Chain Management</li>
                            <li>• Quality Management Systems</li>
                        </ul>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                        <h3 className="text-xl font-bold text-amber-400 mb-4">Digital Transformation</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Navigate the digital landscape with confidence and strategic insight.
                        </p>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>• Technology Strategy</li>
                            <li>• Digital Innovation</li>
                            <li>• Change Management</li>
                        </ul>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                        <h3 className="text-xl font-bold text-amber-400 mb-4">Financial Advisory</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Strategic financial guidance to optimize capital structure and performance.
                        </p>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>• Financial Planning</li>
                            <li>• Investment Strategy</li>
                            <li>• Risk Management</li>
                        </ul>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                        <h3 className="text-xl font-bold text-amber-400 mb-4">Leadership Development</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Build strong leadership capabilities for sustainable organizational success.
                        </p>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>• Executive Coaching</li>
                            <li>• Leadership Training</li>
                            <li>• Succession Planning</li>
                        </ul>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                        <h3 className="text-xl font-bold text-amber-400 mb-4">ESG & Sustainability</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Integrate environmental, social, and governance principles into your strategy.
                        </p>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>• ESG Strategy</li>
                            <li>• Sustainability Reporting</li>
                            <li>• Carbon Footprint</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
