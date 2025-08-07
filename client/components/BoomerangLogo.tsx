import React from 'react';

interface BoomerangLogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
  className?: string;
}

const BoomerangLogo: React.FC<BoomerangLogoProps> = ({
  variant = 'full',
  size = 'md',
  theme = 'light',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16'
  };

  const primaryColor = theme === 'light' ? '#0EA5E9' : '#7DD3FC';
  const accentColor = theme === 'light' ? '#F97316' : '#FB923C';
  const textColor = theme === 'light' ? '#1F2937' : '#F9FAFB';

  const LogoIcon = () => (
    <svg
      viewBox="0 0 40 40"
      className={`${sizeClasses[size]} w-auto`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clean boomerang shape - classic V shape */}
      <path
        d="M8 14 Q12 10, 18 12 Q22 14, 20 20 Q18 26, 12 28 Q8 30, 6 26 Q8 22, 12 20 Q16 18, 18 16 Q16 14, 12 16 Q10 18, 8 14 Z"
        fill={primaryColor}
        stroke={primaryColor}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Second arm of boomerang */}
      <path
        d="M26 8 Q30 6, 34 12 Q36 16, 32 20 Q28 22, 22 20 Q18 18, 20 14 Q22 10, 26 8 Z"
        fill={primaryColor}
        stroke={primaryColor}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Subtle highlight on boomerang arms */}
      <path
        d="M10 16 Q14 14, 16 18"
        stroke="white"
        strokeWidth="1"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M28 12 Q30 10, 32 14"
        stroke="white"
        strokeWidth="1"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />

      {/* Motion trail dots */}
      <circle cx="14" cy="24" r="1.5" fill={accentColor} fillOpacity="0.4" />
      <circle cx="26" cy="26" r="1" fill={accentColor} fillOpacity="0.6" />
      <circle cx="30" cy="22" r="0.8" fill={accentColor} fillOpacity="0.8" />
    </svg>
  );

  const LogoText = () => (
    <div className={`font-bold tracking-tight ${
      size === 'sm' ? 'text-lg' : 
      size === 'md' ? 'text-xl' : 
      size === 'lg' ? 'text-2xl' : 
      'text-3xl'
    }`} style={{ color: textColor }}>
      <div className="flex items-baseline">
        <span>Boomerang</span>
        <span 
          className={`font-medium ml-0.5 ${
            size === 'sm' ? 'text-sm' : 
            size === 'md' ? 'text-base' : 
            size === 'lg' ? 'text-lg' : 
            'text-xl'
          }`}
          style={{ color: primaryColor }}
        >
          .study
        </span>
      </div>
    </div>
  );

  if (variant === 'icon') {
    return <div className={className}><LogoIcon /></div>;
  }

  if (variant === 'text') {
    return <div className={className}><LogoText /></div>;
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <LogoIcon />
      <LogoText />
    </div>
  );
};

export default BoomerangLogo;

// Export individual components for flexibility
export const BoomerangIcon: React.FC<Omit<BoomerangLogoProps, 'variant'>> = (props) => (
  <BoomerangLogo {...props} variant="icon" />
);

export const BoomerangText: React.FC<Omit<BoomerangLogoProps, 'variant'>> = (props) => (
  <BoomerangLogo {...props} variant="text" />
);

// Utility function to get logo as base64 for emails, documents, etc.
export const getBoomerangLogoSVG = (theme: 'light' | 'dark' = 'light', size: number = 40) => {
  const primaryColor = theme === 'light' ? '#0EA5E9' : '#7DD3FC';
  const accentColor = theme === 'light' ? '#F97316' : '#FB923C';
  
  return `
    <svg viewBox="0 0 40 40" width="${size}" height="${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 20 C8 12, 12 8, 20 8 C28 8, 32 12, 32 20 C28 16, 24 16, 20 20 C16 24, 16 28, 20 32 C12 32, 8 28, 8 20 Z" fill="${primaryColor}" fill-opacity="0.1" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 20 C12 14, 14 12, 20 12 C26 12, 28 14, 28 20 C26 18, 24 18, 20 20 C18 22, 18 24, 20 28 C14 28, 12 26, 12 20 Z" fill="${accentColor}" fill-opacity="0.3"/>
      <path d="M6 16 L10 18" stroke="${accentColor}" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M30 22 L34 24" stroke="${accentColor}" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M22 6 L24 10" stroke="${accentColor}" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="20" cy="20" r="3" fill="${primaryColor}" fill-opacity="0.8"/>
      <rect x="18.5" y="18.5" width="3" height="3" rx="0.5" fill="white" fill-opacity="0.9"/>
      <line x1="19" y1="19.5" x2="21" y2="19.5" stroke="${primaryColor}" stroke-width="0.5"/>
      <line x1="19" y1="20.5" x2="20.5" y2="20.5" stroke="${primaryColor}" stroke-width="0.5"/>
    </svg>
  `;
};
