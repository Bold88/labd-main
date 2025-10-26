export interface Translation {
  // Navigation
  nav: {
    about: string;
    services: string;
    industries: string;
    contact: string;
    consultation: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta1: string;
    cta2: string;
    stats: {
      experience: string;
      continents: string;
      projects: string;
      offices: string;
    };
  };
  
  // USPs Section
  usps: {
    title: string;
    subtitle: string;
    consulting: {
      title: string;
      description: string;
    };
    global: {
      title: string;
      description: string;
    };
    education: {
      title: string;
      description: string;
    };
    systems: {
      title: string;
      description: string;
    };
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    journey: {
      title: string;
      description: string;
      phase1: {
        title: string;
        description: string;
      };
      phase2: {
        title: string;
        description: string;
      };
      phase3: {
        title: string;
        description: string;
      };
    };
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
    strategic: {
      title: string;
      description: string;
      items: string[];
    };
    systems: {
      title: string;
      description: string;
      items: string[];
    };
    industry: {
      title: string;
      description: string;
      items: string[];
    };
  };
  
  // Global Reach Section
  globalReach: {
    title: string;
    subtitle: string;
    mena: {
      title: string;
      description: string;
    };
    europe: {
      title: string;
      description: string;
    };
    asia: {
      title: string;
      description: string;
    };
    america: {
      title: string;
      description: string;
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    office: string;
    cta: string;
  };
  
  // Footer
  footer: {
    tagline: string;
    description: string;
    quickLinks: string;
    contactInfo: string;
    location: string;
    copyright: string;
    privacy: string;
    terms: string;
    cookies: string;
  };
}

export const translations: Record<string, Translation> = {
  'en': {
    nav: {
      about: 'About',
      services: 'Services',
      industries: 'Industries',
      contact: 'Contact',
      consultation: 'Free Consultation'
    },
    hero: {
      title: 'Strategy to Execution',
      subtitle: 'Global expertise meets local impact. We design systems for scale, not just strategies for today.',
      description: 'Serving {country} and global markets with consulting excellence since 2015 • Founded 2025',
      cta1: 'Start Your Transformation',
      cta2: 'View Case Studies',
      stats: {
        experience: 'Years Experience',
        continents: 'Continents',
        projects: 'Projects',
        offices: 'Global Offices'
      }
    },
    usps: {
      title: 'Why Choose LABD',
      subtitle: 'We don\'t just consult — we design systems that enable sustainable growth and operational excellence.',
      consulting: {
        title: 'Consulting + Technology',
        description: 'Strategy to execution with our partner Antrieb 2.0 (Germany). We combine strategic thinking with technological implementation.'
      },
      global: {
        title: 'Global Expertise, Local Impact',
        description: 'Dubai & Germany presence with projects across MENA, Europe, Asia, and USA. Local insights, global standards.'
      },
      education: {
        title: 'Education & Franchise Focus',
        description: 'Specialized in digital transformation for service businesses, education sector, and franchise operations.'
      },
      systems: {
        title: 'Systems for Scale',
        description: 'We don\'t just consult — we design processes, tools, and governance frameworks that enable sustainable growth.'
      }
    },
    about: {
      title: 'About LABD L.L.C-FZ',
      subtitle: 'Founded in 2025 with a management team operating since 2015, we bridge the gap between strategy and execution with our unique consulting + technology approach.',
      journey: {
        title: 'Our Journey',
        description: 'A decade of strategic consulting excellence with continuous innovation in business transformation and operational excellence.',
        phase1: {
          title: '2015 - The Foundation',
          description: 'Our management team began operating, building expertise across global markets and diverse industries.'
        },
        phase2: {
          title: '2020 - Strategic Partnership',
          description: 'Formed alliance with Antrieb 2.0 (Germany) to combine consulting with cutting-edge technology solutions.'
        },
        phase3: {
          title: '2025 - Official Launch',
          description: 'LABD L.L.C-FZ officially founded, bringing decade of experience to the UAE market with global reach.'
        }
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'From strategy to execution, we deliver comprehensive solutions that drive sustainable growth and operational excellence.',
      strategic: {
        title: 'Strategic Consulting',
        description: 'Comprehensive strategic planning and business model innovation for sustainable competitive advantage.',
        items: [
          'Business Strategy & Planning',
          'Market Analysis & Research',
          'Growth Strategy Development',
          'Digital Transformation Strategy'
        ]
      },
      systems: {
        title: 'Systems for Scale',
        description: 'Process design, tools implementation, and governance frameworks that enable sustainable scaling.',
        items: [
          'Process Optimization & Design',
          'Technology Implementation',
          'Governance Frameworks',
          'Quality Management Systems'
        ]
      },
      industry: {
        title: 'Industry Specialization',
        description: 'Deep expertise in education, franchising, and service business digital transformation.',
        items: [
          'Education Sector Transformation',
          'Franchise Operations',
          'Service Business Digitalization',
          'Leadership Development'
        ]
      }
    },
    globalReach: {
      title: 'Global Reach, Local Impact',
      subtitle: 'Projects delivered across four continents with deep local market understanding.',
      mena: {
        title: 'MENA Region',
        description: 'Strategic hub in Dubai serving Gulf markets with local expertise'
      },
      europe: {
        title: 'Europe',
        description: 'German partnership enabling advanced technology integration'
      },
      asia: {
        title: 'Asia Pacific',
        description: 'Growing markets with rapid digital transformation needs'
      },
      america: {
        title: 'North America',
        description: 'Innovation-driven projects with cutting-edge methodologies'
      }
    },
    contact: {
      title: 'Ready to Scale?',
      subtitle: 'Let\'s design systems that enable your business to scale sustainably in {country} and beyond.',
      email: 'Email',
      phone: 'Phone',
      office: 'Office',
      cta: 'Schedule Your Consultation'
    },
    footer: {
      tagline: 'Excellence in Management Consulting',
      description: 'From strategy to execution, we design systems that enable sustainable business growth and operational excellence.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      location: 'Location',
      copyright: '© 2025 LABD L.L.C-FZ. All rights reserved. | Proudly serving {country}',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy'
    }
  },
  
  'de': {
    nav: {
      about: 'Über uns',
      services: 'Dienstleistungen',
      industries: 'Branchen',
      contact: 'Kontakt',
      consultation: 'Kostenlose Beratung'
    },
    hero: {
      title: 'Von der Strategie zur Umsetzung',
      subtitle: 'Globale Expertise trifft auf lokale Wirkung. Wir entwickeln Systeme für Skalierung, nicht nur Strategien für heute.',
      description: 'Wir bedienen {country} und globale Märkte mit Beratungsexzellenz seit 2015 • Gegründet 2025',
      cta1: 'Starten Sie Ihre Transformation',
      cta2: 'Fallstudien ansehen',
      stats: {
        experience: 'Jahre Erfahrung',
        continents: 'Kontinente',
        projects: 'Projekte',
        offices: 'Globale Büros'
      }
    },
    usps: {
      title: 'Warum LABD wählen',
      subtitle: 'Wir beraten nicht nur — wir entwickeln Systeme, die nachhaltiges Wachstum und operative Exzellenz ermöglichen.',
      consulting: {
        title: 'Beratung + Technologie',
        description: 'Von der Strategie zur Umsetzung mit unserem Partner Antrieb 2.0 (Deutschland). Wir verbinden strategisches Denken mit technologischer Implementierung.'
      },
      global: {
        title: 'Globale Expertise, lokale Wirkung',
        description: 'Präsenz in Dubai & Deutschland mit Projekten in MENA, Europa, Asien und USA. Lokale Einblicke, globale Standards.'
      },
      education: {
        title: 'Bildung & Franchise-Fokus',
        description: 'Spezialisiert auf digitale Transformation für Dienstleistungsunternehmen, Bildungssektor und Franchise-Betrieb.'
      },
      systems: {
        title: 'Systeme für Skalierung',
        description: 'Wir beraten nicht nur — wir entwickeln Prozesse, Tools und Governance-Frameworks für nachhaltiges Wachstum.'
      }
    },
    about: {
      title: 'Über LABD L.L.C-FZ',
      subtitle: 'Gegründet 2025 mit einem Management-Team, das seit 2015 tätig ist, überbrücken wir die Lücke zwischen Strategie und Umsetzung mit unserem einzigartigen Beratung + Technologie-Ansatz.',
      journey: {
        title: 'Unsere Reise',
        description: 'Ein Jahrzehnt strategischer Beratungsexzellenz mit kontinuierlicher Innovation in Geschäftstransformation und operativer Exzellenz.',
        phase1: {
          title: '2015 - Das Fundament',
          description: 'Unser Management-Team begann zu arbeiten und baute Expertise in globalen Märkten und verschiedenen Branchen auf.'
        },
        phase2: {
          title: '2020 - Strategische Partnerschaft',
          description: 'Allianz mit Antrieb 2.0 (Deutschland) gebildet, um Beratung mit modernsten Technologielösungen zu verbinden.'
        },
        phase3: {
          title: '2025 - Offizieller Start',
          description: 'LABD L.L.C-FZ offiziell gegründet, bringt ein Jahrzehnt Erfahrung in den UAE-Markt mit globaler Reichweite.'
        }
      }
    },
    services: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Von der Strategie zur Umsetzung liefern wir umfassende Lösungen, die nachhaltiges Wachstum und operative Exzellenz vorantreiben.',
      strategic: {
        title: 'Strategische Beratung',
        description: 'Umfassende strategische Planung und Geschäftsmodellinnovation für nachhaltigen Wettbewerbsvorteil.',
        items: [
          'Geschäftsstrategie & Planung',
          'Marktanalyse & Forschung',
          'Wachstumsstrategie-Entwicklung',
          'Digitale Transformationsstrategie'
        ]
      },
      systems: {
        title: 'Systeme für Skalierung',
        description: 'Prozessdesign, Tool-Implementierung und Governance-Frameworks für nachhaltiges Skalieren.',
        items: [
          'Prozessoptimierung & Design',
          'Technologie-Implementierung',
          'Governance-Frameworks',
          'Qualitätsmanagementsysteme'
        ]
      },
      industry: {
        title: 'Branchenspezialisierung',
        description: 'Tiefe Expertise in Bildung, Franchising und digitaler Transformation von Dienstleistungsunternehmen.',
        items: [
          'Bildungssektor-Transformation',
          'Franchise-Betrieb',
          'Digitalisierung von Dienstleistungen',
          'Führungskräfteentwicklung'
        ]
      }
    },
    globalReach: {
      title: 'Globale Reichweite, lokale Wirkung',
      subtitle: 'Projekte auf vier Kontinenten mit tiefem lokalen Marktverständnis durchgeführt.',
      mena: {
        title: 'MENA-Region',
        description: 'Strategisches Zentrum in Dubai bedient Golf-Märkte mit lokaler Expertise'
      },
      europe: {
        title: 'Europa',
        description: 'Deutsche Partnerschaft ermöglicht fortschrittliche Technologieintegration'
      },
      asia: {
        title: 'Asien-Pazifik',
        description: 'Wachsende Märkte mit schnellen digitalen Transformationsbedürfnissen'
      },
      america: {
        title: 'Nordamerika',
        description: 'Innovationsgetriebene Projekte mit modernsten Methodologien'
      }
    },
    contact: {
      title: 'Bereit zu skalieren?',
      subtitle: 'Lassen Sie uns Systeme entwickeln, die es Ihrem Unternehmen ermöglichen, nachhaltig in {country} und darüber hinaus zu skalieren.',
      email: 'E-Mail',
      phone: 'Telefon',
      office: 'Büro',
      cta: 'Planen Sie Ihre Beratung'
    },
    footer: {
      tagline: 'Exzellenz in Unternehmensberatung',
      description: 'Von der Strategie zur Umsetzung entwickeln wir Systeme, die nachhaltiges Geschäftswachstum und operative Exzellenz ermöglichen.',
      quickLinks: 'Schnelllinks',
      contactInfo: 'Kontaktinformationen',
      location: 'Standort',
      copyright: '© 2025 LABD L.L.C-FZ. Alle Rechte vorbehalten. | Stolz im Dienst von {country}',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
      cookies: 'Cookie-Richtlinie'
    }
  },
  
  'fr': {
    nav: {
      about: 'À propos',
      services: 'Services',
      industries: 'Industries',
      contact: 'Contact',
      consultation: 'Consultation gratuite'
    },
    hero: {
      title: 'De la stratégie à l\'exécution',
      subtitle: 'L\'expertise mondiale rencontre l\'impact local. Nous concevons des systèmes pour l\'échelle, pas seulement des stratégies pour aujourd\'hui.',
      description: 'Au service de {country} et des marchés mondiaux avec l\'excellence en conseil depuis 2015 • Fondé en 2025',
      cta1: 'Commencez votre transformation',
      cta2: 'Voir les études de cas',
      stats: {
        experience: 'Années d\'expérience',
        continents: 'Continents',
        projects: 'Projets',
        offices: 'Bureaux mondiaux'
      }
    },
    usps: {
      title: 'Pourquoi choisir LABD',
      subtitle: 'Nous ne faisons pas que conseiller — nous concevons des systèmes qui permettent une croissance durable et l\'excellence opérationnelle.',
      consulting: {
        title: 'Conseil + Technologie',
        description: 'De la stratégie à l\'exécution avec notre partenaire Antrieb 2.0 (Allemagne). Nous combinons la réflexion stratégique avec l\'implémentation technologique.'
      },
      global: {
        title: 'Expertise mondiale, impact local',
        description: 'Présence à Dubaï et en Allemagne avec des projets en MENA, Europe, Asie et USA. Perspectives locales, standards mondiaux.'
      },
      education: {
        title: 'Focus éducation et franchise',
        description: 'Spécialisé dans la transformation numérique pour les entreprises de services, le secteur éducatif et les opérations de franchise.'
      },
      systems: {
        title: 'Systèmes pour l\'échelle',
        description: 'Nous ne faisons pas que conseiller — nous concevons des processus, des outils et des cadres de gouvernance pour une croissance durable.'
      }
    },
    about: {
      title: 'À propos de LABD L.L.C-FZ',
      subtitle: 'Fondé en 2025 avec une équipe de direction opérant depuis 2015, nous comblons l\'écart entre stratégie et exécution avec notre approche unique conseil + technologie.',
      journey: {
        title: 'Notre parcours',
        description: 'Une décennie d\'excellence en conseil stratégique avec innovation continue dans la transformation d\'entreprise et l\'excellence opérationnelle.',
        phase1: {
          title: '2015 - La fondation',
          description: 'Notre équipe de direction a commencé à opérer, développant une expertise sur les marchés mondiaux et diverses industries.'
        },
        phase2: {
          title: '2020 - Partenariat stratégique',
          description: 'Alliance formée avec Antrieb 2.0 (Allemagne) pour combiner le conseil avec des solutions technologiques de pointe.'
        },
        phase3: {
          title: '2025 - Lancement officiel',
          description: 'LABD L.L.C-FZ officiellement fondé, apportant une décennie d\'expérience au marché des EAU avec une portée mondiale.'
        }
      }
    },
    services: {
      title: 'Nos services',
      subtitle: 'De la stratégie à l\'exécution, nous livrons des solutions complètes qui favorisent la croissance durable et l\'excellence opérationnelle.',
      strategic: {
        title: 'Conseil stratégique',
        description: 'Planification stratégique complète et innovation de modèle d\'affaires pour un avantage concurrentiel durable.',
        items: [
          'Stratégie et planification d\'entreprise',
          'Analyse et recherche de marché',
          'Développement de stratégie de croissance',
          'Stratégie de transformation numérique'
        ]
      },
      systems: {
        title: 'Systèmes pour l\'échelle',
        description: 'Conception de processus, implémentation d\'outils et cadres de gouvernance qui permettent une mise à l\'échelle durable.',
        items: [
          'Optimisation et conception de processus',
          'Implémentation technologique',
          'Cadres de gouvernance',
          'Systèmes de gestion de la qualité'
        ]
      },
      industry: {
        title: 'Spécialisation industrielle',
        description: 'Expertise approfondie en éducation, franchise et transformation numérique d\'entreprises de services.',
        items: [
          'Transformation du secteur éducatif',
          'Opérations de franchise',
          'Numérisation d\'entreprises de services',
          'Développement du leadership'
        ]
      }
    },
    globalReach: {
      title: 'Portée mondiale, impact local',
      subtitle: 'Projets livrés sur quatre continents avec une compréhension profonde du marché local.',
      mena: {
        title: 'Région MENA',
        description: 'Hub stratégique à Dubaï servant les marchés du Golfe avec une expertise locale'
      },
      europe: {
        title: 'Europe',
        description: 'Partenariat allemand permettant une intégration technologique avancée'
      },
      asia: {
        title: 'Asie-Pacifique',
        description: 'Marchés en croissance avec des besoins rapides de transformation numérique'
      },
      america: {
        title: 'Amérique du Nord',
        description: 'Projets axés sur l\'innovation avec des méthodologies de pointe'
      }
    },
    contact: {
      title: 'Prêt à évoluer ?',
      subtitle: 'Concevons des systèmes qui permettent à votre entreprise d\'évoluer durablement en {country} et au-delà.',
      email: 'E-mail',
      phone: 'Téléphone',
      office: 'Bureau',
      cta: 'Planifiez votre consultation'
    },
    footer: {
      tagline: 'Excellence en conseil en gestion',
      description: 'De la stratégie à l\'exécution, nous concevons des systèmes qui permettent une croissance d\'entreprise durable et l\'excellence opérationnelle.',
      quickLinks: 'Liens rapides',
      contactInfo: 'Informations de contact',
      location: 'Emplacement',
      copyright: '© 2025 LABD L.L.C-FZ. Tous droits réservés. | Fièrement au service de {country}',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions de service',
      cookies: 'Politique de cookies'
    }
  },
  
  'es': {
    nav: {
      about: 'Acerca de',
      services: 'Servicios',
      industries: 'Industrias',
      contact: 'Contacto',
      consultation: 'Consulta gratuita'
    },
    hero: {
      title: 'De la estrategia a la ejecución',
      subtitle: 'La experiencia global se encuentra con el impacto local. Diseñamos sistemas para escalar, no solo estrategias para hoy.',
      description: 'Sirviendo a {country} y mercados globales con excelencia en consultoría desde 2015 • Fundada en 2025',
      cta1: 'Inicia tu transformación',
      cta2: 'Ver casos de estudio',
      stats: {
        experience: 'Años de experiencia',
        continents: 'Continentes',
        projects: 'Proyectos',
        offices: 'Oficinas globales'
      }
    },
    usps: {
      title: 'Por qué elegir LABD',
      subtitle: 'No solo asesoramos — diseñamos sistemas que permiten crecimiento sostenible y excelencia operacional.',
      consulting: {
        title: 'Consultoría + Tecnología',
        description: 'De la estrategia a la ejecución con nuestro socio Antrieb 2.0 (Alemania). Combinamos pensamiento estratégico con implementación tecnológica.'
      },
      global: {
        title: 'Experiencia global, impacto local',
        description: 'Presencia en Dubái y Alemania con proyectos en MENA, Europa, Asia y EE.UU. Perspectivas locales, estándares globales.'
      },
      education: {
        title: 'Enfoque en educación y franquicias',
        description: 'Especializado en transformación digital para empresas de servicios, sector educativo y operaciones de franquicia.'
      },
      systems: {
        title: 'Sistemas para escalar',
        description: 'No solo asesoramos — diseñamos procesos, herramientas y marcos de gobernanza para crecimiento sostenible.'
      }
    },
    about: {
      title: 'Acerca de LABD L.L.C-FZ',
      subtitle: 'Fundada en 2025 con un equipo directivo operando desde 2015, cerramos la brecha entre estrategia y ejecución con nuestro enfoque único de consultoría + tecnología.',
      journey: {
        title: 'Nuestro viaje',
        description: 'Una década de excelencia en consultoría estratégica con innovación continua en transformación empresarial y excelencia operacional.',
        phase1: {
          title: '2015 - La fundación',
          description: 'Nuestro equipo directivo comenzó a operar, construyendo experiencia en mercados globales e industrias diversas.'
        },
        phase2: {
          title: '2020 - Asociación estratégica',
          description: 'Alianza formada con Antrieb 2.0 (Alemania) para combinar consultoría con soluciones tecnológicas de vanguardia.'
        },
        phase3: {
          title: '2025 - Lanzamiento oficial',
          description: 'LABD L.L.C-FZ oficialmente fundada, trayendo una década de experiencia al mercado de EAU con alcance global.'
        }
      }
    },
    services: {
      title: 'Nuestros servicios',
      subtitle: 'De la estrategia a la ejecución, entregamos soluciones integrales que impulsan crecimiento sostenible y excelencia operacional.',
      strategic: {
        title: 'Consultoría estratégica',
        description: 'Planificación estratégica integral e innovación de modelos de negocio para ventaja competitiva sostenible.',
        items: [
          'Estrategia y planificación empresarial',
          'Análisis e investigación de mercado',
          'Desarrollo de estrategia de crecimiento',
          'Estrategia de transformación digital'
        ]
      },
      systems: {
        title: 'Sistemas para escalar',
        description: 'Diseño de procesos, implementación de herramientas y marcos de gobernanza que permiten escalamiento sostenible.',
        items: [
          'Optimización y diseño de procesos',
          'Implementación tecnológica',
          'Marcos de gobernanza',
          'Sistemas de gestión de calidad'
        ]
      },
      industry: {
        title: 'Especialización industrial',
        description: 'Experiencia profunda en educación, franquicias y transformación digital de empresas de servicios.',
        items: [
          'Transformación del sector educativo',
          'Operaciones de franquicia',
          'Digitalización de empresas de servicios',
          'Desarrollo de liderazgo'
        ]
      }
    },
    globalReach: {
      title: 'Alcance global, impacto local',
      subtitle: 'Proyectos entregados en cuatro continentes con profundo entendimiento del mercado local.',
      mena: {
        title: 'Región MENA',
        description: 'Hub estratégico en Dubái sirviendo mercados del Golfo con experiencia local'
      },
      europe: {
        title: 'Europa',
        description: 'Asociación alemana que permite integración tecnológica avanzada'
      },
      asia: {
        title: 'Asia-Pacífico',
        description: 'Mercados en crecimiento con necesidades rápidas de transformación digital'
      },
      america: {
        title: 'América del Norte',
        description: 'Proyectos impulsados por innovación con metodologías de vanguardia'
      }
    },
    contact: {
      title: '¿Listo para escalar?',
      subtitle: 'Diseñemos sistemas que permitan a tu empresa escalar sosteniblemente en {country} y más allá.',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      office: 'Oficina',
      cta: 'Programa tu consulta'
    },
    footer: {
      tagline: 'Excelencia en consultoría de gestión',
      description: 'De la estrategia a la ejecución, diseñamos sistemas que permiten crecimiento empresarial sostenible y excelencia operacional.',
      quickLinks: 'Enlaces rápidos',
      contactInfo: 'Información de contacto',
      location: 'Ubicación',
      copyright: '© 2025 LABD L.L.C-FZ. Todos los derechos reservados. | Orgullosamente sirviendo a {country}',
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
      cookies: 'Política de cookies'
    }
  },
  
  'it': {
    nav: {
      about: 'Chi siamo',
      services: 'Servizi',
      industries: 'Settori',
      contact: 'Contatto',
      consultation: 'Consulenza gratuita'
    },
    hero: {
      title: 'Dalla strategia all\'esecuzione',
      subtitle: 'L\'esperienza globale incontra l\'impatto locale. Progettiamo sistemi per la scalabilità, non solo strategie per oggi.',
      description: 'Al servizio di {country} e dei mercati globali con eccellenza consultiva dal 2015 • Fondata nel 2025',
      cta1: 'Inizia la tua trasformazione',
      cta2: 'Visualizza casi di studio',
      stats: {
        experience: 'Anni di esperienza',
        continents: 'Continenti',
        projects: 'Progetti',
        offices: 'Uffici globali'
      }
    },
    usps: {
      title: 'Perché scegliere LABD',
      subtitle: 'Non solo consultiamo — progettiamo sistemi che abilitano crescita sostenibile ed eccellenza operativa.',
      consulting: {
        title: 'Consulenza + Tecnologia',
        description: 'Dalla strategia all\'esecuzione con il nostro partner Antrieb 2.0 (Germania). Combiniamo pensiero strategico con implementazione tecnologica.'
      },
      global: {
        title: 'Esperienza globale, impatto locale',
        description: 'Presenza a Dubai e Germania con progetti in MENA, Europa, Asia e USA. Intuizioni locali, standard globali.'
      },
      education: {
        title: 'Focus su educazione e franchising',
        description: 'Specializzati nella trasformazione digitale per aziende di servizi, settore educativo e operazioni di franchising.'
      },
      systems: {
        title: 'Sistemi per la scalabilità',
        description: 'Non solo consultiamo — progettiamo processi, strumenti e framework di governance per crescita sostenibile.'
      }
    },
    about: {
      title: 'Chi è LABD L.L.C-FZ',
      subtitle: 'Fondata nel 2025 con un team di gestione operativo dal 2015, colmiamo il divario tra strategia ed esecuzione con il nostro approccio unico consulenza + tecnologia.',
      journey: {
        title: 'Il nostro percorso',
        description: 'Un decennio di eccellenza nella consulenza strategica con innovazione continua nella trasformazione aziendale ed eccellenza operativa.',
        phase1: {
          title: '2015 - Le fondamenta',
          description: 'Il nostro team dirigenziale ha iniziato a operare, costruendo competenze su mercati globali e industrie diverse.'
        },
        phase2: {
          title: '2020 - Partnership strategica',
          description: 'Alleanza formata con Antrieb 2.0 (Germania) per combinare consulenza con soluzioni tecnologiche all\'avanguardia.'
        },
        phase3: {
          title: '2025 - Lancio ufficiale',
          description: 'LABD L.L.C-FZ ufficialmente fondata, portando un decennio di esperienza nel mercato UAE con portata globale.'
        }
      }
    },
    services: {
      title: 'I nostri servizi',
      subtitle: 'Dalla strategia all\'esecuzione, forniamo soluzioni complete che guidano crescita sostenibile ed eccellenza operativa.',
      strategic: {
        title: 'Consulenza strategica',
        description: 'Pianificazione strategica completa e innovazione del modello di business per vantaggio competitivo sostenibile.',
        items: [
          'Strategia e pianificazione aziendale',
          'Analisi e ricerca di mercato',
          'Sviluppo strategia di crescita',
          'Strategia di trasformazione digitale'
        ]
      },
      systems: {
        title: 'Sistemi per la scalabilità',
        description: 'Design di processi, implementazione di strumenti e framework di governance che abilitano scalabilità sostenibile.',
        items: [
          'Ottimizzazione e design di processi',
          'Implementazione tecnologica',
          'Framework di governance',
          'Sistemi di gestione qualità'
        ]
      },
      industry: {
        title: 'Specializzazione settoriale',
        description: 'Esperienza profonda in educazione, franchising e trasformazione digitale di aziende di servizi.',
        items: [
          'Trasformazione settore educativo',
          'Operazioni di franchising',
          'Digitalizzazione aziende di servizi',
          'Sviluppo leadership'
        ]
      }
    },
    globalReach: {
      title: 'Portata globale, impatto locale',
      subtitle: 'Progetti consegnati su quattro continenti con profonda comprensione del mercato locale.',
      mena: {
        title: 'Regione MENA',
        description: 'Hub strategico a Dubai che serve i mercati del Golfo con esperienza locale'
      },
      europe: {
        title: 'Europa',
        description: 'Partnership tedesca che abilita integrazione tecnologica avanzata'
      },
      asia: {
        title: 'Asia-Pacifico',
        description: 'Mercati in crescita con rapide esigenze di trasformazione digitale'
      },
      america: {
        title: 'Nord America',
        description: 'Progetti guidati dall\'innovazione con metodologie all\'avanguardia'
      }
    },
    contact: {
      title: 'Pronto a scalare?',
      subtitle: 'Progettiamo sistemi che permettano alla tua azienda di scalare sostenibilmente in {country} e oltre.',
      email: 'Email',
      phone: 'Telefono',
      office: 'Ufficio',
      cta: 'Pianifica la tua consulenza'
    },
    footer: {
      tagline: 'Eccellenza nella consulenza manageriale',
      description: 'Dalla strategia all\'esecuzione, progettiamo sistemi che abilitano crescita aziendale sostenibile ed eccellenza operativa.',
      quickLinks: 'Link rapidi',
      contactInfo: 'Informazioni di contatto',
      location: 'Ubicazione',
      copyright: '© 2025 LABD L.L.C-FZ. Tutti i diritti riservati. | Orgogliosamente al servizio di {country}',
      privacy: 'Politica sulla privacy',
      terms: 'Termini di servizio',
      cookies: 'Politica sui cookie'
    }
  },
  
  'ar-AE': {
    nav: {
      about: 'نبذة عنا',
      services: 'خدماتنا',
      industries: 'الصناعات',
      contact: 'اتصل بنا',
      consultation: 'استشارة مجانية'
    },
    hero: {
      title: 'من الاستراتيجية إلى التنفيذ',
      subtitle: 'الخبرة العالمية تلتقي بالتأثير المحلي. نحن نصمم أنظمة للنمو، وليس فقط استراتيجيات لليوم.',
      description: 'نخدم {country} والأسواق العالمية بامتياز استشاري منذ 2015 • تأسست 2025',
      cta1: 'ابدأ تحولك',
      cta2: 'اطلع على دراسات الحالة',
      stats: {
        experience: 'سنوات الخبرة',
        continents: 'القارات',
        projects: 'المشاريع',
        offices: 'المكاتب العالمية'
      }
    },
    usps: {
      title: 'لماذا تختار LABD',
      subtitle: 'نحن لا نقدم الاستشارة فقط — نصمم أنظمة تمكن النمو المستدام والتميز التشغيلي.',
      consulting: {
        title: 'الاستشارة + التكنولوجيا',
        description: 'من الاستراتيجية إلى التنفيذ مع شريكنا Antrieb 2.0 (ألمانيا). نجمع بين التفكير الاستراتيجي والتنفيذ التكنولوجي.'
      },
      global: {
        title: 'خبرة عالمية، تأثير محلي',
        description: 'وجود في دبي وألمانيا مع مشاريع عبر منطقة الشرق الأوسط وشمال أفريقيا وأوروبا وآسيا والولايات المتحدة. رؤى محلية، معايير عالمية.'
      },
      education: {
        title: 'التركيز على التعليم والامتياز التجاري',
        description: 'متخصصون في التحول الرقمي لشركات الخدمات وقطاع التعليم وعمليات الامتياز التجاري.'
      },
      systems: {
        title: 'أنظمة للنمو',
        description: 'نحن لا نقدم الاستشارة فقط — نصمم العمليات والأدوات وأطر الحوكمة التي تمكن النمو المستدام.'
      }
    },
    about: {
      title: 'نبذة عن LABD L.L.C-FZ',
      subtitle: 'تأسست في 2025 مع فريق إدارة يعمل منذ 2015، نسد الفجوة بين الاستراتيجية والتنفيذ بنهجنا الفريد في الاستشارة + التكنولوجيا.',
      journey: {
        title: 'رحلتنا',
        description: 'عقد من التميز الاستشاري الاستراتيجي مع الابتكار المستمر في تحويل الأعمال والتميز التشغيلي.',
        phase1: {
          title: '2015 - الأساس',
          description: 'بدأ فريق الإدارة لدينا العمل، وبناء الخبرة عبر الأسواق العالمية والصناعات المتنوعة.'
        },
        phase2: {
          title: '2020 - الشراكة الاستراتيجية',
          description: 'تشكيل تحالف مع Antrieb 2.0 (ألمانيا) لدمج الاستشارة مع حلول التكنولوجيا المتطورة.'
        },
        phase3: {
          title: '2025 - الإطلاق الرسمي',
          description: 'تأسيس LABD L.L.C-FZ رسمياً، جلب عقد من الخبرة إلى السوق الإماراتي مع نطاق عالمي.'
        }
      }
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'من الاستراتيجية إلى التنفيذ، نقدم حلولاً شاملة تدفع النمو المستدام والتميز التشغيلي.',
      strategic: {
        title: 'الاستشارة الاستراتيجية',
        description: 'التخطيط الاستراتيجي الشامل وابتكار نموذج الأعمال للميزة التنافسية المستدامة.',
        items: [
          'استراتيجية وتخطيط الأعمال',
          'تحليل وبحث السوق',
          'تطوير استراتيجية النمو',
          'استراتيجية التحول الرقمي'
        ]
      },
      systems: {
        title: 'أنظمة للنمو',
        description: 'تصميم العمليات وتنفيذ الأدوات وأطر الحوكمة التي تمكن النمو المستدام.',
        items: [
          'تحسين وتصميم العمليات',
          'تنفيذ التكنولوجيا',
          'أطر الحوكمة',
          'أنظمة إدارة الجودة'
        ]
      },
      industry: {
        title: 'التخصص الصناعي',
        description: 'خبرة عميقة في التعليم والامتياز التجاري والتحول الرقمي لشركات الخدمات.',
        items: [
          'تحويل القطاع التعليمي',
          'عمليات الامتياز التجاري',
          'رقمنة شركات الخدمات',
          'تطوير القيادة'
        ]
      }
    },
    globalReach: {
      title: 'نطاق عالمي، تأثير محلي',
      subtitle: 'مشاريع منفذة عبر أربع قارات مع فهم عميق للسوق المحلي.',
      mena: {
        title: 'منطقة الشرق الأوسط وشمال أفريقيا',
        description: 'مركز استراتيجي في دبي يخدم أسواق الخليج بخبرة محلية'
      },
      europe: {
        title: 'أوروبا',
        description: 'شراكة ألمانية تمكن التكامل التكنولوجي المتقدم'
      },
      asia: {
        title: 'آسيا والمحيط الهادئ',
        description: 'أسواق نامية مع احتياجات سريعة للتحول الرقمي'
      },
      america: {
        title: 'أمريكا الشمالية',
        description: 'مشاريع مدفوعة بالابتكار مع منهجيات متطورة'
      }
    },
    contact: {
      title: 'مستعد للنمو؟',
      subtitle: 'دعنا نصمم أنظمة تمكن عملك من النمو بشكل مستدام في {country} وما بعدها.',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      office: 'المكتب',
      cta: 'احجز استشارتك'
    },
    footer: {
      tagline: 'التميز في الاستشارات الإدارية',
      description: 'من الاستراتيجية إلى التنفيذ، نصمم أنظمة تمكن نمو الأعمال المستدام والتميز التشغيلي.',
      quickLinks: 'روابط سريعة',
      contactInfo: 'معلومات الاتصال',
      location: 'الموقع',
      copyright: '© 2025 LABD L.L.C-FZ. جميع الحقوق محفوظة. | نخدم {country} بفخر',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      cookies: 'سياسة ملفات تعريف الارتباط'
    }
  }
};
