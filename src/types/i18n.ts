export interface TranslationStatus {
  status: 'complete' | 'draft' | 'missing';
  lastUpdated: string;
  translatedBy?: 'human' | 'machine' | 'hybrid';
}

export interface LocaleMessages {
  translationStatus: TranslationStatus;
  nav: {
    home: string;
    about: string;
    services: string;
    awards: string;
    contact: string;
    blog: string;
    partners: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: {
      projects: string;
      countries: string;
      successRate: string;
    };
    scrollText: string;
  };
  about: {
    headline: string;
    blurb: string;
    established: string;
    principles: {
      title: string;
      strategicClarity: {
        title: string;
        description: string;
      };
      globalPerspective: {
        title: string;
        description: string;
      };
      sustainableGrowth: {
        title: string;
        description: string;
      };
    };
    approach: {
      title: string;
      analysis: {
        title: string;
        description: string;
      };
      planning: {
        title: string;
        description: string;
      };
      implementation: {
        title: string;
        description: string;
      };
    };
    companyFacts: {
      title: string;
      headquarters: string;
      management: string;
      globalReach: string;
    };
    cta: {
      text: string;
      button: string;
    };
  };
  services: {
    headline: string;
    categories: {
      strategic: {
        title: string;
        items: string[];
      };
      businessDev: {
        title: string;
        items: string[];
      };
      marketAnalysis: {
        title: string;
        items: string[];
      };
      digitalTransformation: {
        title: string;
        items: string[];
      };
      leadership: {
        title: string;
        items: string[];
      };
      riskFinance: {
        title: string;
        items: string[];
      };
    };
    metrics: {
      categories: string;
      countriesServed: string;
      successRate: string;
    };
    cta: {
      headline: string;
      text: string;
      buttons: {
        consultation: string;
        quote: string;
      };
    };
  };
  awards: {
    headline: string;
    year2025: {
      bestConsultancy: {
        title: string;
        organization: string;
        description: string;
      };
      internationalBusiness: {
        title: string;
        organization: string;
        description: string;
      };
      strategicInnovation: {
        title: string;
        organization: string;
        description: string;
      };
      consultingExcellence: {
        title: string;
        organization: string;
        description: string;
      };
    };
    impactKpis: {
      projects: string;
      clients: string;
      countries: string;
      satisfaction: string;
    };
    certifications: {
      title: string;
      iso9001: string;
      iso14001: string;
      dubaiChamber: string;
    };
  };
  contact: {
    headline: string;
    cta: string;
    address: {
      title: string;
      street: string;
    };
    email: string;
    phone: string;
    businessHours: {
      title: string;
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    form: {
      fullName: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      required: string;
      optional: string;
    };
    map: {
      label: string;
    };
    success: string;
    error: string;
  };
  partners: {
    headline: string;
    antrieb: {
      title: string;
      country: string;
      description: string;
    };
  };
  footer: {
    tagline: string;
    quickLinks: {
      title: string;
      about: string;
      services: string;
      awards: string;
      contact: string;
    };
    servicesList: {
      title: string;
      strategic: string;
      businessDev: string;
      digital: string;
      risk: string;
    };
    legal: {
      copyright: string;
      privacy: string;
      terms: string;
      cookies: string;
    };
  };
  legal: {
    privacy: {
      title: string;
      description: string;
      lastUpdated: string;
    };
    terms: {
      title: string;
      description: string;
      lastUpdated: string;
    };
    cookies: {
      title: string;
      description: string;
      lastUpdated: string;
    };
  };
  blog: {
    title: string;
    description: string;
    readMore: string;
    publishedOn: string;
    author: string;
    tags: string;
    categories: {
      all: string;
      strategy: string;
      digital: string;
      leadership: string;
      market: string;
      sustainability: string;
    };
  };
  common: {
    loading: string;
    error: string;
    retry: string;
    close: string;
    readMore: string;
    learnMore: string;
    getStarted: string;
    contactUs: string;
  };
}

export type LocaleCode = 
  | 'en' | 'de' | 'fr' | 'es' | 'it' | 'pt' | 'nl' | 'sv' | 'no' | 'da' 
  | 'fi' | 'pl' | 'cs' | 'sk' | 'ro' | 'hu' | 'tr' | 'ar-AE' | 'ru' | 'zh-CN';

export interface I18nConfig {
  defaultLocale: LocaleCode;
  locales: LocaleCode[];
  messages: Record<LocaleCode, LocaleMessages>;
}
