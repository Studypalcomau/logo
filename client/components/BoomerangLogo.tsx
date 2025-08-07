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
      {/* Authentic Australian boomerang - traditional bent stick shape */}
      <path
        d="M8 20 L18 12 Q20 11, 22 12 L32 8 Q34 7, 36 9 Q37 11, 35 13 L25 17 Q23 18, 22 20 Q21 22, 23 23 L33 27 Q35 28, 34 30 Q32 32, 30 31 L20 27 Q18 26, 18 24 L8 32 Q6 33, 5 31 Q4 29, 6 28 L16 20 Q18 18, 18 16 Q18 14, 16 14 Q14 14, 12 16 L8 20 Z"
        fill={primaryColor}
        stroke={primaryColor}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Wood grain detail */}
      <path
        d="M10 22 Q15 16, 20 18 Q25 20, 30 16"
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12 26 Q17 20, 22 22 Q27 24, 32 20"
        stroke="white"
        strokeWidth="0.6"
        strokeOpacity="0.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Motion arc showing return path */}
      <path
        d="M35 10 Q28 4, 20 8 Q12 12, 8 20 Q6 28, 12 32"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeOpacity="0.4"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="2 3"
      />

      {/* Small motion dots */}
      <circle cx="32" cy="12" r="1" fill={accentColor} fillOpacity="0.6" />
      <circle cx="28" cy="8" r="0.8" fill={accentColor} fillOpacity="0.8" />
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
      <path d="M8 20 L18 12 Q20 11, 22 12 L32 8 Q34 7, 36 9 Q37 11, 35 13 L25 17 Q23 18, 22 20 Q21 22, 23 23 L33 27 Q35 28, 34 30 Q32 32, 30 31 L20 27 Q18 26, 18 24 L8 32 Q6 33, 5 31 Q4 29, 6 28 L16 20 Q18 18, 18 16 Q18 14, 16 14 Q14 14, 12 16 L8 20 Z" fill="${primaryColor}" stroke="${primaryColor}" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 22 Q15 16, 20 18 Q25 20, 30 16" stroke="white" stroke-width="0.8" stroke-opacity="0.3" stroke-linecap="round" fill="none"/>
      <path d="M12 26 Q17 20, 22 22 Q27 24, 32 20" stroke="white" stroke-width="0.6" stroke-opacity="0.2" stroke-linecap="round" fill="none"/>
      <path d="M35 10 Q28 4, 20 8 Q12 12, 8 20 Q6 28, 12 32" stroke="${accentColor}" stroke-width="1.5" stroke-opacity="0.4" stroke-linecap="round" fill="none" stroke-dasharray="2 3"/>
      <circle cx="32" cy="12" r="1" fill="${accentColor}" fill-opacity="0.6"/>
      <circle cx="28" cy="8" r="0.8" fill="${accentColor}" fill-opacity="0.8"/>
    </svg>
  `;
};
