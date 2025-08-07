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
      {/* Authentic Australian boomerang - V shape with two arms */}
      {/* Left arm */}
      <path
        d="M20 20 L8 12"
        stroke={primaryColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right arm */}
      <path
        d="M20 20 L32 8"
        stroke={primaryColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Aboriginal dot painting on left arm */}
      <circle cx="11" cy="14" r="1" fill="white" fillOpacity="0.9" />
      <circle cx="14" cy="16" r="0.7" fill="white" fillOpacity="0.8" />
      <circle cx="17" cy="18" r="0.9" fill="white" fillOpacity="0.9" />

      {/* Aboriginal dot painting on right arm */}
      <circle cx="29" cy="10" r="1" fill="white" fillOpacity="0.9" />
      <circle cx="26" cy="12" r="0.7" fill="white" fillOpacity="0.8" />
      <circle cx="23" cy="14" r="0.9" fill="white" fillOpacity="0.9" />

      {/* Traditional line patterns on left arm */}
      <path
        d="M10 15 L12 13 M15 17 L16 16"
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />

      {/* Traditional line patterns on right arm */}
      <path
        d="M28 11 L30 9 M25 13 L24 14"
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />

      {/* Small accent dots */}
      <circle cx="12" cy="15.5" r="0.3" fill={accentColor} fillOpacity="0.8" />
      <circle cx="15.5" cy="17.5" r="0.3" fill={accentColor} fillOpacity="0.8" />
      <circle cx="27" cy="11.5" r="0.3" fill={accentColor} fillOpacity="0.8" />
      <circle cx="24.5" cy="13.5" r="0.3" fill={accentColor} fillOpacity="0.8" />

      {/* Motion trail showing boomerang return path */}
      <path
        d="M30 10 Q35 15, 30 25 Q20 30, 10 25"
        stroke={accentColor}
        strokeWidth="1"
        strokeOpacity="0.3"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="1 2"
      />
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
      <path d="M6 22 Q12 16, 20 18 Q28 20, 34 14" stroke="${primaryColor}" stroke-width="4" stroke-linecap="round" fill="none"/>
      <circle cx="10" cy="20" r="1.2" fill="white" fill-opacity="0.9"/>
      <circle cx="14" cy="18.5" r="0.8" fill="white" fill-opacity="0.8"/>
      <circle cx="18" cy="18" r="1" fill="white" fill-opacity="0.9"/>
      <circle cx="22" cy="18.5" r="0.8" fill="white" fill-opacity="0.8"/>
      <circle cx="26" cy="18" r="1.2" fill="white" fill-opacity="0.9"/>
      <circle cx="30" cy="16.5" r="0.8" fill="white" fill-opacity="0.8"/>
      <path d="M8 21 L12 19 M16 18.5 L20 18.5 M24 18.5 L28 17" stroke="white" stroke-width="0.8" stroke-opacity="0.7" stroke-linecap="round"/>
      <circle cx="11" cy="18" r="0.4" fill="${accentColor}" fill-opacity="0.8"/>
      <circle cx="17" cy="16.5" r="0.4" fill="${accentColor}" fill-opacity="0.8"/>
      <circle cx="23" cy="16.5" r="0.4" fill="${accentColor}" fill-opacity="0.8"/>
      <circle cx="29" cy="15" r="0.4" fill="${accentColor}" fill-opacity="0.8"/>
      <path d="M32 16 Q28 12, 22 14 Q16 16, 12 20" stroke="${accentColor}" stroke-width="1" stroke-opacity="0.3" stroke-linecap="round" fill="none" stroke-dasharray="1 2"/>
    </svg>
  `;
};
