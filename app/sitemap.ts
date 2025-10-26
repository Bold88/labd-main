import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://labd-consulting.com';
  const currentDate = new Date().toISOString();
  
  const locales = ['en', 'de'];
  const pages = [
    '',           // Homepage
    '/about',     // About page
    '/services',  // Services page
    '/partner',   // Partner page
    '/contact',   // Contact page
    '/privacy',   // Privacy policy
    '/terms',     // Terms of service
    '/impressum', // Impressum
  ];
  
  const localePages: MetadataRoute.Sitemap = [];
  
  locales.forEach(locale => {
    pages.forEach(page => {
      localePages.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: currentDate,
        changeFrequency: page === '' ? 'weekly' : 
                        page === '/services' ? 'monthly' : 'yearly',
        priority: page === '' ? 1.0 :
                 page === '/services' ? 0.9 :
                 page === '/about' ? 0.8 :
                 page === '/partner' ? 0.8 :
                 page === '/contact' ? 0.8 :
                 0.5,
      });
    });
  });
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...localePages,
  ];
}
