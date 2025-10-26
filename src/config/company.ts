/**
 * LABD L.L.C-FZ Company Information
 * Source: Business License
 */

export const COMPANY_INFO = {
  legalName: 'LABD L.L.C-FZ',
  displayName: 'LABD Consulting',
  type: 'Limited Liability Company – Free Zone',
  licenseNumber: '2530123.01',
  formationNumber: '2530123',
  activityCode: '7020.00',
  activityDescription: 'Management consultancy activities',
  
  management: {
    title: 'Senior Leadership Team',
    description: 'Led by certified management consultants with extensive international experience',
    certifications: [
      'Certified Management Consultant (CMC)',
      'Project Management Professional (PMP)',
      'Change Management Certification',
      'Strategic Business Leadership',
      'International Business Development',
      'Corporate Governance Specialist',
    ],
    experience: '15+ years in international consulting',
    expertise: [
      'Strategic Planning & Execution',
      'Organizational Transformation',
      'International Market Entry',
      'M&A Advisory',
      'Process Optimization',
      'Governance Frameworks',
    ],
  },
  
  issueDate: '08/04/2025',
  expiryDate: '07/04/2026',
  
  headquarters: {
    name: 'Dubai HQ',
    address: 'Meydan Grandstand, 6th floor',
    street: 'Meydan Road, Nad Al Sheba',
    city: 'Dubai',
    country: 'United Arab Emirates',
    mapUrl: 'https://maps.google.com/?q=Meydan+Grandstand+Dubai',
  },
  
  contact: {
    email: 'booking@labd-consulting.com',
    phone: '+971 58 599 7356',
    phoneDisplay: '+971 58 599 7356',
  },
  
  partner: {
    name: 'Antrieb 2.0 UG',
    location: 'Bielefeld, Germany',
    services: ['Marketing', 'Software Development', 'Digital Solutions'],
    description: 'Strategic technology and marketing partner for digital transformation',
  },
  
  social: {
    linkedin: '#',
    twitter: '#',
  },
} as const;

export const SEO_DEFAULT = {
  title: 'LABD Consulting | Global Management & Business Structuring Experts',
  description: 'Premium management consulting services in Dubai. Specializing in business structuring, operating models, governance, and international expansion across MENA, Europe, Asia, and North America.',
  keywords: ['management consulting', 'business structuring', 'Dubai consulting', 'free zone company', 'corporate governance', 'international expansion', 'operating model design'],
  ogImage: '/og-image.jpg',
} as const;
