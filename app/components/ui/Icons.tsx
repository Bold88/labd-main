import React from 'react';

// Navigation Icons
export const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="6" width="18" height="2" fill="currentColor" />
    <rect x="3" y="11" width="18" height="2" fill="currentColor" />
    <rect x="3" y="16" width="18" height="2" fill="currentColor" />
  </svg>
);

export const CloseIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Business Icons
export const StrategyIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="strategyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="12" fill="#000000" stroke="url(#strategyGrad)" strokeWidth="2"/>
    <circle cx="20" cy="20" r="6" fill="url(#strategyGrad)"/>
    <circle cx="44" cy="20" r="6" fill="url(#strategyGrad)"/>
    <circle cx="32" cy="44" r="6" fill="url(#strategyGrad)"/>
    <path d="M26 20L38 20M20 26L32 38M44 26L32 38" stroke="url(#strategyGrad)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const GlobeIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="12" fill="#000000" stroke="url(#globeGrad)" strokeWidth="2"/>
    <circle cx="32" cy="32" r="20" stroke="url(#globeGrad)" strokeWidth="2" fill="none"/>
    <path d="M12 32h40M32 12c-8 8-8 24 0 32M32 12c8 8 8 24 0 32" stroke="url(#globeGrad)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="2" fill="url(#globeGrad)"/>
  </svg>
);

export const EducationIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="educationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="12" fill="#000000" stroke="url(#educationGrad)" strokeWidth="2"/>
    <rect x="16" y="18" width="32" height="20" rx="2" stroke="url(#educationGrad)" strokeWidth="2" fill="none"/>
    <path d="M20 24h24M20 28h20M20 32h16" stroke="url(#educationGrad)" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="24" cy="46" r="3" fill="url(#educationGrad)"/>
    <circle cx="32" cy="46" r="3" fill="url(#educationGrad)"/>
    <circle cx="40" cy="46" r="3" fill="url(#educationGrad)"/>
  </svg>
);

export const SystemsIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="systemsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="12" fill="#000000" stroke="url(#systemsGrad)" strokeWidth="2"/>
    <circle cx="22" cy="22" r="4" stroke="url(#systemsGrad)" strokeWidth="2" fill="none"/>
    <circle cx="42" cy="22" r="4" stroke="url(#systemsGrad)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="42" r="4" stroke="url(#systemsGrad)" strokeWidth="2" fill="none"/>
    <rect x="18" y="18" width="8" height="8" rx="2" fill="url(#systemsGrad)"/>
    <rect x="38" y="18" width="8" height="8" rx="2" fill="url(#systemsGrad)"/>
    <rect x="28" y="38" width="8" height="8" rx="2" fill="url(#systemsGrad)"/>
    <path d="M26 22L38 22M22 26L32 38M42 26L32 38" stroke="url(#systemsGrad)" strokeWidth="2"/>
  </svg>
);

// Service Icons
export const ConsultingIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="consultingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="12" fill="#000000" stroke="url(#consultingGrad)" strokeWidth="2"/>
    <rect x="12" y="16" width="40" height="24" rx="4" stroke="url(#consultingGrad)" strokeWidth="2" fill="none"/>
    <circle cx="20" cy="24" r="2" fill="url(#consultingGrad)"/>
    <circle cx="28" cy="24" r="2" fill="url(#consultingGrad)"/>
    <circle cx="36" cy="24" r="2" fill="url(#consultingGrad)"/>
    <circle cx="44" cy="24" r="2" fill="url(#consultingGrad)"/>
    <rect x="16" y="30" width="6" height="6" fill="url(#consultingGrad)"/>
    <rect x="29" y="30" width="6" height="6" fill="url(#consultingGrad)"/>
    <rect x="42" y="30" width="6" height="6" fill="url(#consultingGrad)"/>
    <path d="M32 44L32 52" stroke="url(#consultingGrad)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const TechnologyIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="12" fill="#000000" stroke="url(#techGrad)" strokeWidth="2"/>
    <rect x="14" y="18" width="36" height="22" rx="3" stroke="url(#techGrad)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="29" r="6" stroke="url(#techGrad)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="29" r="3" fill="url(#techGrad)"/>
    <path d="M18 46L46 46" stroke="url(#techGrad)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="22" cy="46" r="1" fill="url(#techGrad)"/>
    <circle cx="42" cy="46" r="1" fill="url(#techGrad)"/>
  </svg>
);

export const ScaleIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="scaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="12" fill="#000000" stroke="url(#scaleGrad)" strokeWidth="2"/>
    <path d="M16 40L32 24L48 40" stroke="url(#scaleGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="16" cy="40" r="4" fill="url(#scaleGrad)"/>
    <circle cx="32" cy="24" r="4" fill="url(#scaleGrad)"/>
    <circle cx="48" cy="40" r="4" fill="url(#scaleGrad)"/>
    <path d="M32 24L32 48" stroke="url(#scaleGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 40L16 48M48 40L48 48" stroke="url(#scaleGrad)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Contact Icons
export const EmailIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="emailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="44" height="44" rx="10" fill="#000000" stroke="url(#emailGrad)" strokeWidth="2"/>
    <rect x="8" y="12" width="32" height="24" rx="2" stroke="url(#emailGrad)" strokeWidth="2" fill="none"/>
    <path d="M8 16L24 26L40 16" stroke="url(#emailGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export const PhoneIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="44" height="44" rx="10" fill="#000000" stroke="url(#phoneGrad)" strokeWidth="2"/>
    <rect x="16" y="8" width="16" height="32" rx="3" stroke="url(#phoneGrad)" strokeWidth="2" fill="none"/>
    <circle cx="24" cy="14" r="1" fill="url(#phoneGrad)"/>
    <rect x="20" y="34" width="8" height="2" rx="1" fill="url(#phoneGrad)"/>
  </svg>
);

export const LocationIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="locationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="44" height="44" rx="10" fill="#000000" stroke="url(#locationGrad)" strokeWidth="2"/>
    <path d="M24 12C20 12 16 16 16 20C16 28 24 36 24 36S32 28 32 20C32 16 28 12 24 12Z" stroke="url(#locationGrad)" strokeWidth="2" fill="none"/>
    <circle cx="24" cy="20" r="3" fill="url(#locationGrad)"/>
  </svg>
);

// Region Icons
export const MenaIcon = ({ className = "w-20 h-20" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none">
    <defs>
      <linearGradient id="menaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="36" fill="#000000" stroke="url(#menaGrad)" strokeWidth="3"/>
    <path d="M20 25C25 20 35 20 40 25C45 20 55 20 60 25C60 35 50 45 40 50C30 45 20 35 20 25Z" fill="url(#menaGrad)"/>
    <circle cx="30" cy="30" r="2" fill="#000000"/>
    <circle cx="50" cy="30" r="2" fill="#000000"/>
    <path d="M35 35L45 35" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const EuropeIcon = ({ className = "w-20 h-20" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none">
    <defs>
      <linearGradient id="europeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="36" fill="#000000" stroke="url(#europeGrad)" strokeWidth="3"/>
    <rect x="24" y="24" width="32" height="32" rx="4" stroke="url(#europeGrad)" strokeWidth="2" fill="none"/>
    <path d="M32 32L48 32M32 40L44 40M32 48L48 48" stroke="url(#europeGrad)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="28" cy="32" r="2" fill="url(#europeGrad)"/>
    <circle cx="28" cy="40" r="2" fill="url(#europeGrad)"/>
    <circle cx="28" cy="48" r="2" fill="url(#europeGrad)"/>
  </svg>
);

export const AsiaIcon = ({ className = "w-20 h-20" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none">
    <defs>
      <linearGradient id="asiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="36" fill="#000000" stroke="url(#asiaGrad)" strokeWidth="3"/>
    <circle cx="40" cy="40" r="20" stroke="url(#asiaGrad)" strokeWidth="2" fill="none"/>
    <path d="M40 20L40 60M20 40L60 40" stroke="url(#asiaGrad)" strokeWidth="2"/>
    <circle cx="40" cy="30" r="3" fill="url(#asiaGrad)"/>
    <circle cx="40" cy="50" r="3" fill="url(#asiaGrad)"/>
    <circle cx="30" cy="40" r="3" fill="url(#asiaGrad)"/>
    <circle cx="50" cy="40" r="3" fill="url(#asiaGrad)"/>
  </svg>
);

export const AmericaIcon = ({ className = "w-20 h-20" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none">
    <defs>
      <linearGradient id="americaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="36" fill="#000000" stroke="url(#americaGrad)" strokeWidth="3"/>
    <path d="M25 25L55 25L55 35L45 35L45 45L55 45L55 55L25 55L25 45L35 45L35 35L25 35Z" stroke="url(#americaGrad)" strokeWidth="2" fill="none"/>
    <rect x="25" y="25" width="10" height="10" fill="url(#americaGrad)"/>
    <rect x="45" y="25" width="10" height="10" fill="url(#americaGrad)"/>
    <rect x="25" y="45" width="10" height="10" fill="url(#americaGrad)"/>
    <rect x="45" y="45" width="10" height="10" fill="url(#americaGrad)"/>
  </svg>
);

// Journey Icons
export const RocketIcon = ({ className = "w-20 h-20" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none">
    <defs>
      <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="36" fill="#000000" stroke="url(#rocketGrad)" strokeWidth="3"/>
    <path d="M40 15L35 35L25 40L35 45L40 65L45 45L55 40L45 35Z" fill="url(#rocketGrad)"/>
    <circle cx="40" cy="30" r="3" fill="#000000"/>
    <path d="M35 50L30 60L35 55L40 60L45 55L50 60L45 50" stroke="url(#rocketGrad)" strokeWidth="2" fill="none"/>
  </svg>
);

export const HandshakeIcon = ({ className = "w-20 h-20" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none">
    <defs>
      <linearGradient id="handshakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="36" fill="#000000" stroke="url(#handshakeGrad)" strokeWidth="3"/>
    <path d="M20 35C20 35 25 30 30 35L40 40L50 35C55 30 60 35 60 35L55 45L45 50L40 45L35 50L25 45Z" stroke="url(#handshakeGrad)" strokeWidth="2" fill="url(#handshakeGrad)"/>
    <circle cx="30" cy="35" r="2" fill="#000000"/>
    <circle cx="50" cy="35" r="2" fill="#000000"/>
  </svg>
);

export const TrophyIcon = ({ className = "w-20 h-20" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none">
    <defs>
      <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="36" fill="#000000" stroke="url(#trophyGrad)" strokeWidth="3"/>
    <path d="M30 20L50 20L50 35C50 42 43 45 40 45C37 45 30 42 30 35Z" fill="url(#trophyGrad)"/>
    <path d="M25 25L30 25L30 30C30 32 28 35 25 35V25Z" fill="url(#trophyGrad)"/>
    <path d="M55 25L50 25L50 30C50 32 52 35 55 35V25Z" fill="url(#trophyGrad)"/>
    <rect x="35" y="45" width="10" height="8" fill="url(#trophyGrad)"/>
    <rect x="30" y="53" width="20" height="4" fill="url(#trophyGrad)"/>
  </svg>
);

// Check Icon
export const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="checkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="#000000" stroke="url(#checkGrad)" strokeWidth="2"/>
    <path d="M8 12L11 15L16 9" stroke="url(#checkGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Social Icons
export const LinkedInIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="linkedinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="44" height="44" rx="10" fill="#000000" stroke="url(#linkedinGrad)" strokeWidth="2"/>
    <rect x="8" y="16" width="6" height="24" fill="url(#linkedinGrad)"/>
    <circle cx="11" cy="11" r="3" fill="url(#linkedinGrad)"/>
    <path d="M18 16V40M18 24C18 20 22 18 26 18C30 18 34 20 34 24V40" stroke="url(#linkedinGrad)" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const TwitterIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="twitterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="44" height="44" rx="10" fill="#000000" stroke="url(#twitterGrad)" strokeWidth="2"/>
    <path d="M36 16C34.5 16.5 33 17 31.5 17C33 16 34 14.5 34.5 13C33 14 31 14.5 29 15C27.5 13.5 25.5 13 23.5 13C19.5 13 16.5 16 16.5 20C16.5 20.5 16.5 21 17 21.5C12 21 7.5 18.5 5 15C4.5 16 4 17 4 18C4 20 5 22 6.5 23C5.5 23 4.5 22.5 4 22C4 26 7 29 10.5 30C10 30 9.5 30 9 30C8.5 30 8 30 7.5 29.5C8.5 33 12 35.5 16 35.5C12.5 38 8.5 39.5 4 39.5C10 43 17 43 23.5 39.5C32 34.5 36 26 36 20V19C37.5 18 38.5 17 39 16" fill="url(#twitterGrad)"/>
  </svg>
);

export const FacebookIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="facebookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="44" height="44" rx="10" fill="#000000" stroke="url(#facebookGrad)" strokeWidth="2"/>
    <path d="M28 8C32 8 35 11 35 15V20H30V15C30 13 29 12 28 12H25V20H30L29 26H25V40H19V26H15V20H19V15C19 11 22 8 26 8H28Z" fill="url(#facebookGrad)"/>
  </svg>
);
