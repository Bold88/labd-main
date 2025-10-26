import { COUNTRIES, LANGUAGES, getCountryBySlug, getLanguageByCode } from '../../../../src/lib/countries';
import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    countrySlug: string;
    locale: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  return {
    title: `Business Insights & Articles - LABD L.L.C Management Consulting | ${country?.name || 'Global'}`,
    description: `Latest business insights, management consulting articles, and industry analysis from LABD L.L.C experts in ${country?.name || 'your region'}. Strategic business intelligence and thought leadership.`,
    keywords: [
      'business insights',
      'management consulting articles',
      'business strategy',
      'industry analysis',
      'thought leadership',
      'business intelligence',
      'consulting expertise',
      country?.name || 'global',
    ].join(', '),
    openGraph: {
      title: `Business Insights - LABD L.L.C | ${country?.name || 'Global'}`,
      description: `Latest business insights and thought leadership from LABD L.L.C management consulting experts in ${country?.name || 'your region'}.`,
      type: 'website',
      locale: locale,
      siteName: 'LABD L.L.C Management Consulting',
    },
    alternates: {
      canonical: `https://labd-consulting.com/${countrySlug}/${locale}/insights`,
      languages: country?.languages.reduce((acc, lang) => {
        acc[lang.code] = `https://labd-consulting.com/${countrySlug}/${lang.code}/insights`;
        return acc;
      }, {} as Record<string, string>) || {},
    },
  };
}

export default async function InsightsPage({ params }: PageProps) {
  const { countrySlug, locale } = await params;
  const country = getCountryBySlug(countrySlug);
  const language = getLanguageByCode(locale);

  if (!country || !language) {
    return <div>Country or language not found</div>;
  }

  // Sample insights data - in a real application, this would come from a CMS or database
  const insights = [
    {
      id: 1,
      title: "Digital Transformation in Post-Pandemic Business Environment",
      excerpt: "How companies in " + country.name + " are leveraging digital technologies to create resilient and agile business models.",
      date: "2025-01-15",
      category: "Digital Innovation",
      readTime: "8 min read",
      author: "Dr. Sarah Johnson",
      tags: ["Digital Strategy", "Business Resilience", "Technology"]
    },
    {
      id: 2,
      title: "ESG Implementation: A Strategic Imperative for Modern Businesses",
      excerpt: "Practical approaches to implementing Environmental, Social, and Governance frameworks for sustainable business growth.",
      date: "2025-01-10",
      category: "Sustainability",
      readTime: "12 min read",
      author: "Michael Chen",
      tags: ["ESG", "Sustainability", "Corporate Governance"]
    },
    {
      id: 3,
      title: "The Future of Leadership: Adaptive Management in Volatile Markets",
      excerpt: "Key leadership competencies and strategies for navigating uncertainty and driving organizational transformation.",
      date: "2025-01-05",
      category: "Leadership",
      readTime: "10 min read",
      author: "Emma Rodriguez",
      tags: ["Leadership Development", "Change Management", "Strategic Planning"]
    },
    {
      id: 4,
      title: "Operational Excellence Through Data-Driven Decision Making",
      excerpt: "Leveraging analytics and business intelligence to optimize operations and improve performance metrics.",
      date: "2024-12-28",
      category: "Operations",
      readTime: "9 min read",
      author: "Dr. James Wilson",
      tags: ["Operations Management", "Data Analytics", "Performance Optimization"]
    },
    {
      id: 5,
      title: "Market Entry Strategies for Emerging Economies",
      excerpt: "Comprehensive guide to successful market expansion and localization strategies for global businesses.",
      date: "2024-12-20",
      category: "Strategy",
      readTime: "15 min read",
      author: "Lisa Park",
      tags: ["Market Entry", "Global Strategy", "Business Development"]
    },
    {
      id: 6,
      title: "Financial Restructuring: Turning Crisis into Opportunity",
      excerpt: "Strategic approaches to financial restructuring and business turnaround in challenging economic conditions.",
      date: "2024-12-15",
      category: "Finance",
      readTime: "11 min read",
      author: "Robert Martinez",
      tags: ["Financial Strategy", "Business Turnaround", "Crisis Management"]
    }
  ];

  const categories = ["All", "Strategy", "Digital Innovation", "Leadership", "Operations", "Sustainability", "Finance"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Header */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href={`/${countrySlug}/${locale}`} className="flex items-center space-x-4">
              <img src="/labd_logo.png" alt="LABD L.L.C" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-white">LABD L.L.C</h1>
                <p className="text-xs text-gray-300">Management Consulting</p>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href={`/${countrySlug}/${locale}`} className="text-white/80 hover:text-amber-400 transition-colors font-medium">Home</Link>
              <Link href={`/${countrySlug}/${locale}/about`} className="text-white/80 hover:text-amber-400 transition-colors font-medium">About</Link>
              <Link href={`/${countrySlug}/${locale}/services`} className="text-white/80 hover:text-amber-400 transition-colors font-medium">Services</Link>
              <Link href={`/${countrySlug}/${locale}/insights`} className="text-amber-400 font-medium">Insights</Link>
              <Link href={`/${countrySlug}/${locale}/contact`} className="text-white/80 hover:text-amber-400 transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Business Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Latest thought leadership, industry analysis, and strategic insights from our management consulting experts in {country.name}.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white/10 text-white hover:bg-amber-500 hover:text-black border border-white/20"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-amber-500 text-black text-xs font-semibold rounded-full">FEATURED</span>
                    <span className="text-amber-400 text-sm">{insights[0].category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {insights[0].title}
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    {insights[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{insights[0].author}</span>
                      <span>•</span>
                      <span>{insights[0].readTime}</span>
                      <span>•</span>
                      <span>{new Date(insights[0].date).toLocaleDateString()}</span>
                    </div>
                    <button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-full font-semibold transition-colors">
                      Read Article
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center">
                    <svg className="w-16 h-16 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3v-.5a2 2 0 00-2-2H6a2 2 0 00-2 2v.5m16 5v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3m16 0H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.slice(1).map((article) => (
                <article
                  key={article.id}
                  className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-500/20 to-gray-700/20 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                    <svg className="w-8 h-8 text-gray-400 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-500/30">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      <div>{article.author}</div>
                      <div>{new Date(article.date).toLocaleDateString()}</div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our insights newsletter and receive the latest business strategy articles, 
                industry analysis, and management consulting expertise delivered to your inbox.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Monthly insights • No spam • Unsubscribe anytime
                </p>
              </div>
            </div>
          </section>

          {/* Industry Focus */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Focus Areas</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Technology", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
                { name: "Healthcare", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                { name: "Financial Services", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" },
                { name: "Manufacturing", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" }
              ].map((industry) => (
                <div
                  key={industry.name}
                  className="bg-white/5 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/30 transition-colors">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                    {industry.name}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <img src="/labd_logo.png" alt="LABD L.L.C" className="h-10 w-auto" />
                <div>
                  <h3 className="text-xl font-bold text-white">LABD L.L.C</h3>
                  <p className="text-xs text-gray-300">Management Consulting</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Professional management consulting services for {country.name}. 
                Driving business excellence through strategic guidance and operational optimization.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href={`/${countrySlug}/${locale}/insights`} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Business Insights</Link></li>
                <li><Link href={`/${countrySlug}/${locale}/services`} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Our Services</Link></li>
                <li><Link href={`/${countrySlug}/${locale}/about`} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Location</h4>
              <p className="text-gray-400 text-sm">
                {country.name} {country.flag}<br />
                Language: {language.nativeName}<br />
                Timezone: {country.timezone}
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 LABD L.L.C. All rights reserved. | Management Consulting Services in {country.name}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
