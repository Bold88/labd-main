import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | LABD L.L.C-FZ',
    default: 'LABD L.L.C-FZ - Management Consulting Excellence',
  },
  description: 'Premier management consultancy firm headquartered in Dubai, specializing in strategic business solutions across MENA, Europe, Asia, and the USA.',
  keywords: 'management consulting, strategy consulting, business transformation, operational excellence, digital transformation, Dubai, UAE, MENA',
  authors: [{ name: 'LABD L.L.C-FZ' }],
  creator: 'LABD L.L.C-FZ',
  publisher: 'LABD L.L.C-FZ',
  robots: 'index, follow',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://labd-consulting.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://labd.ae',
    siteName: 'LABD L.L.C',
    title: 'LABD L.L.C - Premier Management Consulting Services',
    description: 'Leading management consulting firm providing strategic solutions and operational excellence across global markets.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LABD L.L.C - Management Consulting Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LABD L.L.C - Premier Management Consulting Services',
    description: 'Leading management consulting firm providing strategic solutions and operational excellence.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'msapplication-TileColor': '#f59e0b',
    'theme-color': '#000000',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL || 'https://labd-consulting.com'} />
      </head>
      <body
        className={`${inter.variable} antialiased min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
