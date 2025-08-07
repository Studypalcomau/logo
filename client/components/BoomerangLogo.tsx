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
      {/* Bold boomerang with gentle curves - Left arm */}
      <path
        d="M20 22 Q12 16, 6 14 Q4 13, 5 11 Q6 9, 8 10 Q14 12, 20 18"
        fill={primaryColor}
        stroke={primaryColor}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bold boomerang with gentle curves - Right arm */}
      <path
        d="M20 22 Q28 16, 34 14 Q36 13, 35 11 Q34 9, 32 10 Q26 12, 20 18"
        fill={primaryColor}
        stroke={primaryColor}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Smooth connection at center */}
      <circle
        cx="20"
        cy="20"
        r="3"
        fill={primaryColor}
      />

      {/* Bold Aboriginal dot patterns - Left arm */}
      <circle cx="11" cy="13" r="1.2" fill="white" fillOpacity="0.95" />
      <circle cx="15" cy="15" r="0.9" fill="white" fillOpacity="0.9" />
      <circle cx="18" cy="17" r="1.1" fill="white" fillOpacity="0.95" />

      {/* Bold Aboriginal dot patterns - Right arm */}
      <circle cx="29" cy="13" r="1.2" fill="white" fillOpacity="0.95" />
      <circle cx="25" cy="15" r="0.9" fill="white" fillOpacity="0.9" />
      <circle cx="22" cy="17" r="1.1" fill="white" fillOpacity="0.95" />

      {/* Traditional line patterns - more prominent */}
      <path
        d="M9 14 L13 12 M16 16 L17 15"
        stroke="white"
        strokeWidth="1.2"
        strokeOpacity="0.8"
        strokeLinecap="round"
      />

      <path
        d="M31 14 L27 12 M24 16 L23 15"
        stroke="white"
        strokeWidth="1.2"
        strokeOpacity="0.8"
        strokeLinecap="round"
      />

      {/* Accent dots for visual appeal */}
      <circle cx="12" cy="14.5" r="0.4" fill={accentColor} fillOpacity="0.9" />
      <circle cx="16.5" cy="16.5" r="0.4" fill={accentColor} fillOpacity="0.9" />
      <circle cx="28" cy="14.5" r="0.4" fill={accentColor} fillOpacity="0.9" />
      <circle cx="23.5" cy="16.5" r="0.4" fill={accentColor} fillOpacity="0.9" />
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
      <path d="M20 20 L8 12" stroke="${primaryColor}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M20 20 L32 8" stroke="${primaryColor}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <circle cx="11" cy="14" r="1" fill="white" fill-opacity="0.9"/>
      <circle cx="14" cy="16" r="0.7" fill="white" fill-opacity="0.8"/>
      <circle cx="17" cy="18" r="0.9" fill="white" fill-opacity="0.9"/>
      <circle cx="29" cy="10" r="1" fill="white" fill-opacity="0.9"/>
      <circle cx="26" cy="12" r="0.7" fill="white" fill-opacity="0.8"/>
      <circle cx="23" cy="14" r="0.9" fill="white" fill-opacity="0.9"/>
      <path d="M10 15 L12 13 M15 17 L16 16" stroke="white" stroke-width="0.8" stroke-opacity="0.6" stroke-linecap="round"/>
      <path d="M28 11 L30 9 M25 13 L24 14" stroke="white" stroke-width="0.8" stroke-opacity="0.6" stroke-linecap="round"/>
      <circle cx="12" cy="15.5" r="0.3" fill="${accentColor}" fill-opacity="0.8"/>
      <circle cx="15.5" cy="17.5" r="0.3" fill="${accentColor}" fill-opacity="0.8"/>
      <circle cx="27" cy="11.5" r="0.3" fill="${accentColor}" fill-opacity="0.8"/>
      <circle cx="24.5" cy="13.5" r="0.3" fill="${accentColor}" fill-opacity="0.8"/>
      <path d="M30 10 Q35 15, 30 25 Q20 30, 10 25" stroke="${accentColor}" stroke-width="1" stroke-opacity="0.3" stroke-linecap="round" fill="none" stroke-dasharray="1 2"/>
    </svg>
  `;
};
