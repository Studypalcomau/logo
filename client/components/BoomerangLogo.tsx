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
      <path d="M8 14 Q12 10, 18 12 Q22 14, 20 20 Q18 26, 12 28 Q8 30, 6 26 Q8 22, 12 20 Q16 18, 18 16 Q16 14, 12 16 Q10 18, 8 14 Z" fill="${primaryColor}" stroke="${primaryColor}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26 8 Q30 6, 34 12 Q36 16, 32 20 Q28 22, 22 20 Q18 18, 20 14 Q22 10, 26 8 Z" fill="${primaryColor}" stroke="${primaryColor}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 16 Q14 14, 16 18" stroke="white" stroke-width="1" stroke-opacity="0.6" stroke-linecap="round"/>
      <path d="M28 12 Q30 10, 32 14" stroke="white" stroke-width="1" stroke-opacity="0.6" stroke-linecap="round"/>
      <circle cx="14" cy="24" r="1.5" fill="${accentColor}" fill-opacity="0.4"/>
      <circle cx="26" cy="26" r="1" fill="${accentColor}" fill-opacity="0.6"/>
      <circle cx="30" cy="22" r="0.8" fill="${accentColor}" fill-opacity="0.8"/>
    </svg>
  `;
};
