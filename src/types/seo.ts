export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  robots?: string;
  openGraph?: OpenGraphMeta;
  twitter?: TwitterMeta;
  alternates?: AlternateMeta;
}

export interface OpenGraphMeta {
  title: string;
  description: string;
  url: string;
  siteName: string;
  images?: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
  locale: string;
  type: 'website' | 'article' | 'profile';
}

export interface TwitterMeta {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  title: string;
  description: string;
  images?: string[];
  creator?: string;
  site?: string;
}

export interface AlternateMeta {
  canonical: string;
  languages: Record<string, string>;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  alternates?: Array<{
    href: string;
    hreflang: string;
  }>;
}
