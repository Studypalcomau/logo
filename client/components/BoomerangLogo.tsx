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
      {/* Authentic curved boomerang - Left arm (smooth upward curve like reference) */}
      <path
        d="M20 30 Q14 26, 10 20 Q8 14, 6 10 Q5 8, 4 8 Q2 8, 3 10 Q5 16, 12 24 Q16 28, 20 30"
        fill={primaryColor}
        stroke={primaryColor}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Authentic curved boomerang - Right arm (smooth upward curve) */}
      <path
        d="M20 30 Q26 26, 30 20 Q32 14, 34 10 Q35 8, 36 8 Q38 8, 37 10 Q35 16, 28 24 Q24 28, 20 30"
        fill={primaryColor}
        stroke={primaryColor}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Aboriginal dot painting patterns - Left arm (red/yellow style like reference) */}
      <circle cx="8" cy="15" r="1.2" fill="#DC2626" fillOpacity="0.9" />
      <circle cx="10" cy="18" r="0.8" fill="#FBBF24" fillOpacity="0.9" />
      <circle cx="12" cy="21" r="1" fill="white" fillOpacity="0.9" />
      <circle cx="14" cy="24" r="0.9" fill="#DC2626" fillOpacity="0.9" />
      <circle cx="16" cy="26" r="0.7" fill="#FBBF24" fillOpacity="0.9" />

      {/* Aboriginal dot painting patterns - Right arm */}
      <circle cx="32" cy="15" r="1.2" fill="#DC2626" fillOpacity="0.9" />
      <circle cx="30" cy="18" r="0.8" fill="#FBBF24" fillOpacity="0.9" />
      <circle cx="28" cy="21" r="1" fill="white" fillOpacity="0.9" />
      <circle cx="26" cy="24" r="0.9" fill="#DC2626" fillOpacity="0.9" />
      <circle cx="24" cy="26" r="0.7" fill="#FBBF24" fillOpacity="0.9" />

      {/* Traditional Aboriginal connecting dots */}
      <circle cx="9" cy="16.5" r="0.4" fill="white" fillOpacity="0.8" />
      <circle cx="11" cy="19.5" r="0.4" fill="#DC2626" fillOpacity="0.8" />
      <circle cx="13" cy="22.5" r="0.4" fill="white" fillOpacity="0.8" />
      <circle cx="15" cy="25" r="0.4" fill="#FBBF24" fillOpacity="0.8" />

      <circle cx="31" cy="16.5" r="0.4" fill="white" fillOpacity="0.8" />
      <circle cx="29" cy="19.5" r="0.4" fill="#DC2626" fillOpacity="0.8" />
      <circle cx="27" cy="22.5" r="0.4" fill="white" fillOpacity="0.8" />
      <circle cx="25" cy="25" r="0.4" fill="#FBBF24" fillOpacity="0.8" />
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
      <path d="M20 26 Q16 20, 12 12 Q11 8, 9 8 Q7 8, 8 10 Q10 14, 18 24" fill="${primaryColor}" stroke="${primaryColor}" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 26 Q24 20, 28 12 Q29 8, 31 8 Q33 8, 32 10 Q30 14, 22 24" fill="${primaryColor}" stroke="${primaryColor}" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="13" cy="16" r="1" fill="white" fill-opacity="0.9"/>
      <circle cx="15" cy="20" r="0.8" fill="white" fill-opacity="0.8"/>
      <circle cx="17" cy="23" r="0.9" fill="white" fill-opacity="0.9"/>
      <circle cx="27" cy="16" r="1" fill="white" fill-opacity="0.9"/>
      <circle cx="25" cy="20" r="0.8" fill="white" fill-opacity="0.8"/>
      <circle cx="23" cy="23" r="0.9" fill="white" fill-opacity="0.9"/>
      <path d="M11 14 L14 18 M16 21 L18 22" stroke="white" stroke-width="1" stroke-opacity="0.7" stroke-linecap="round"/>
      <path d="M29 14 L26 18 M24 21 L22 22" stroke="white" stroke-width="1" stroke-opacity="0.7" stroke-linecap="round"/>
      <circle cx="14" cy="18" r="0.3" fill="${accentColor}" fill-opacity="0.8"/>
      <circle cx="16" cy="21.5" r="0.3" fill="${accentColor}" fill-opacity="0.8"/>
      <circle cx="26" cy="18" r="0.3" fill="${accentColor}" fill-opacity="0.8"/>
      <circle cx="24" cy="21.5" r="0.3" fill="${accentColor}" fill-opacity="0.8"/>
    </svg>
  `;
};
