import React from 'react';
import { Country } from '../../src/lib/countries';

interface ContactProps {
  country: Country;
}

export default function Contact({ country }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-gradient-to-b from-gray-900/60 to-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-amber-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how LABD can help you achieve excellence in {country.name} and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Offices</h3>
              
              {/* Dubai Office */}
              <div className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🏢</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Dubai Headquarters</h4>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>📍 Business Bay, Dubai, UAE</p>
                  <p>📧 info@labd-consulting.com</p>
                  <p>📱 +971 XX XXX XXXX</p>
                </div>
              </div>

              {/* Germany Office */}
              <div className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🏢</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Germany Office</h4>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>📍 Partner: Antrieb 2.0, Germany</p>
                  <p>📧 germany@labd-consulting.com</p>
                  <p>📱 +49 XXX XXX XXXX</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="p-6 bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-xl border border-amber-500/30">
              <h4 className="text-xl font-bold text-white mb-4">Global Service Coverage</h4>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <div className="font-semibold text-amber-400 mb-2">MENA Region</div>
                  <ul className="space-y-1">
                    <li>• UAE & GCC</li>
                    <li>• Saudi Arabia</li>
                    <li>• Egypt</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-amber-400 mb-2">Europe & Others</div>
                  <ul className="space-y-1">
                    <li>• Germany</li>
                    <li>• Asia</li>
                    <li>• USA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-amber-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Service Interest</label>
                <select className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none">
                  <option>Strategic Consulting</option>
                  <option>Education & Training</option>
                  <option>Franchise Development</option>
                  <option>Digital Transformation</option>
                  <option>Custom Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Prefer Direct Contact?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:info@labd-consulting.com"
              className="px-8 py-4 bg-gray-800 border border-amber-500/30 text-white rounded-lg hover:border-amber-500 transition-all"
            >
              📧 Email Us
            </a>
            <a 
              href="tel:+971XXXXXXXX"
              className="px-8 py-4 bg-gray-800 border border-amber-500/30 text-white rounded-lg hover:border-amber-500 transition-all"
            >
              📱 Call Dubai
            </a>
            <a 
              href="#schedule"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg transition-all"
            >
              📅 Schedule Meeting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
