import { notFound } from "next/navigation";
import Link from "next/link";
import { getCountryBySlug, getLanguageByCode } from "../../../src/data/countries";
import { Button } from "../../components/ui/Button";
import { 
  MenuIcon, 
  CheckIcon, 
  StrategyIcon, 
  GlobeIcon, 
  TechnologyIcon, 
  ConsultingIcon, 
  SystemsIcon, 
  EducationIcon,
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  ScaleIcon,
  TrophyIcon,
  RocketIcon,
  HandshakeIcon
} from "../../components/ui/Icons";

interface PageProps {
  params: Promise<{
    countrySlug: string;
    locale: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    notFound();
  }

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/Background city.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Navigation */}
      <nav className="relative z-10 px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href={`/${countrySlug}/${locale}`} className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-2xl">L</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">LABD L.L.C</h1>
                <p className="text-yellow-500 text-sm font-medium">Management Consulting</p>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8">
              <Link href={`/${countrySlug}/${locale}/services`} className="text-white hover:text-yellow-500 transition-colors font-medium">
                Services
              </Link>
              <Link href={`/${countrySlug}/${locale}/about`} className="text-white hover:text-yellow-500 transition-colors font-medium">
                About
              </Link>
              <Link href={`/${countrySlug}/${locale}/industries`} className="text-white hover:text-yellow-500 transition-colors font-medium">
                Industries
              </Link>
              <Link href={`/${countrySlug}/${locale}/contact`} className="text-white hover:text-yellow-500 transition-colors font-medium">
                Contact
              </Link>
            </div>
            
            <div className="lg:hidden">
              <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 lg:px-12 py-24 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="px-6 py-3 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 font-semibold text-sm tracking-wide">
              Welcome to {country.name} {country.flag}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Excellence in
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent"> Management</span>
            <br />
            Consulting
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Transforming businesses with strategic insights, operational excellence, and innovative solutions across global markets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
              Start Your Transformation
            </Button>
            <Button className="px-10 py-5 border-2 border-yellow-500 text-yellow-500 bg-transparent font-bold rounded-full text-lg hover:bg-yellow-500 hover:text-black transition-all">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="relative z-10 px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Why Choose <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">LABD</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our unique value propositions that set us apart in the consulting industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 h-full hover:border-yellow-500/40 transition-all">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <StrategyIcon className="text-black w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Consulting + Technology</h4>
                <p className="text-white/70 leading-relaxed">
                  Strategy to execution with partner Antrieb 2.0 (Germany) for comprehensive digital transformation.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 h-full hover:border-yellow-500/40 transition-all">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GlobeIcon className="text-black w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Global Expertise, Local Impact</h4>
                <p className="text-white/70 leading-relaxed">
                  Dubai & Germany presence, projects across MENA, Europe, Asia, USA bringing global perspective locally.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 h-full hover:border-yellow-500/40 transition-all">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <EducationIcon className="text-black w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Education & Franchise Focus</h4>
                <p className="text-white/70 leading-relaxed">
                  Specialized in digital transformation for service businesses, education sector, and franchise operations.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 h-full hover:border-yellow-500/40 transition-all">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <SystemsIcon className="text-black w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Systems for Scale</h4>
                <p className="text-white/70 leading-relaxed">
                  We don't just consult — we design processes, tools, and governance to scale your business effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="relative z-10 px-6 lg:px-12 py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A decade of growth, innovation, and strategic transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <RocketIcon className="text-black w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">2020</h4>
              <h5 className="text-xl font-semibold text-yellow-400 mb-4">Foundation</h5>
              <p className="text-white/70 leading-relaxed">
                LABD L.L.C was established with a vision to transform how businesses approach strategic consulting in the digital age.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrophyIcon className="text-black w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">2022</h4>
              <h5 className="text-xl font-semibold text-yellow-400 mb-4">Expansion</h5>
              <p className="text-white/70 leading-relaxed">
                Expanded operations globally, establishing partnerships across MENA, Europe, and Asia with successful project deliveries.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <HandshakeIcon className="text-black w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">2025</h4>
              <h5 className="text-xl font-semibold text-yellow-400 mb-4">Innovation</h5>
              <p className="text-white/70 leading-relaxed">
                Leading the industry with innovative consulting methodologies and strategic technology partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative z-10 px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategic Planning */}
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <StrategyIcon className="text-black w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Strategic Planning</h4>
              <p className="text-white/70 mb-6 leading-relaxed">
                Comprehensive strategic planning and business model innovation for sustainable competitive advantage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Business Strategy & Planning
                </li>
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Market Analysis & Research
                </li>
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Competitive Intelligence
                </li>
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Performance Metrics
                </li>
              </ul>
            </div>

            {/* Operations */}
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <SystemsIcon className="text-black w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Operational Excellence</h4>
              <p className="text-white/70 mb-6 leading-relaxed">
                Optimize operations and build scalable systems for sustainable growth and efficiency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Process Optimization
                </li>
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Supply Chain Management
                </li>
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Quality Systems
                </li>
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Performance Analytics
                </li>
              </ul>
            </div>

            {/* Digital Transformation */}
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <TechnologyIcon className="text-black w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Digital Transformation</h4>
              <p className="text-white/70 mb-6 leading-relaxed">
                Navigate digital transformation with strategic technology integration and innovation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Technology Strategy
                </li>
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Digital Innovation
                </li>
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Change Management
                </li>
                <li className="flex items-center text-white/80">
                  <CheckIcon className="text-yellow-500 mr-3 w-4 h-4" />
                  Digital Culture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="relative z-10 px-6 lg:px-12 py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Global <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-16">
            Delivering excellence across continents with local expertise and global perspective
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
              <div className="w-20 h-20 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <GlobeIcon className="text-black w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">MENA</h4>
              <p className="text-white/70">Middle East & North Africa</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
              <div className="w-20 h-20 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <ScaleIcon className="text-black w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Europe</h4>
              <p className="text-white/70">Strategic Partnerships</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
              <div className="w-20 h-20 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TechnologyIcon className="text-black w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Asia</h4>
              <p className="text-white/70">Innovation Centers</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
              <div className="w-20 h-20 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <RocketIcon className="text-black w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Americas</h4>
              <p className="text-white/70">Market Expansion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Get In <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 text-center hover:border-yellow-500/40 transition-all">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <EmailIcon className="text-black w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Email</h4>
              <a href="mailto:contact@labd.ae" className="text-yellow-400 hover:text-yellow-300 text-lg font-semibold">
                contact@labd.ae
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 text-center hover:border-yellow-500/40 transition-all">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <PhoneIcon className="text-black w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Phone</h4>
              <a href="tel:+971552772899" className="text-yellow-400 hover:text-yellow-300 text-lg font-semibold">
                +971 55 277 2899
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 text-center hover:border-yellow-500/40 transition-all">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <LocationIcon className="text-black w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Office</h4>
              <p className="text-yellow-400 text-lg font-semibold">
                {country.name} {country.flag}
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button className="px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-full text-xl hover:shadow-xl transition-all">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 lg:px-12 py-16 bg-black/80 backdrop-blur-sm border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-black font-bold text-2xl">L</span>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">LABD L.L.C</h4>
                <p className="text-yellow-400 font-medium">Excellence in Management Consulting</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-white/70">
              <div className="flex items-center">
                <EmailIcon className="text-yellow-500 w-4 h-4 mr-2" />
                <span>contact@labd.ae</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="text-yellow-500 w-4 h-4 mr-2" />
                <span>+971 55 277 2899</span>
              </div>
              <div className="flex items-center">
                <LocationIcon className="text-yellow-500 w-4 h-4 mr-2" />
                <span>{country.name} {country.flag}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {country.languages.slice(0, 4).map((lang) => (
                <Link 
                  key={lang.code}
                  href={`/${countrySlug}/${lang.code}`} 
                  className={`text-white/70 hover:text-yellow-400 transition-colors ${
                    lang.code === locale ? 'text-yellow-400 font-semibold' : ''
                  }`}
                >
                  {lang.nativeName}
                </Link>
              ))}
            </div>
            
            <div className="border-t border-yellow-500/20 pt-8">
              <p className="text-white/50">
                © 2025 LABD L.L.C. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
