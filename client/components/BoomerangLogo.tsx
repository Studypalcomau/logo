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
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2Fdd7cf42c421a43aeaebe1762f190d508%2F9322846fc88647689b814181a06af82a?format=webp&width=800"
      alt="Boomerang"
      className={`${sizeClasses[size]} w-auto object-contain`}
    />
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
      <path d="M20 30 Q14 26, 10 20 Q8 14, 6 10 Q5 8, 4 8 Q2 8, 3 10 Q5 16, 12 24 Q16 28, 20 30" fill="${primaryColor}" stroke="${primaryColor}" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 30 Q26 26, 30 20 Q32 14, 34 10 Q35 8, 36 8 Q38 8, 37 10 Q35 16, 28 24 Q24 28, 20 30" fill="${primaryColor}" stroke="${primaryColor}" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="8" cy="15" r="1.2" fill="#DC2626" fill-opacity="0.9"/>
      <circle cx="10" cy="18" r="0.8" fill="#FBBF24" fill-opacity="0.9"/>
      <circle cx="12" cy="21" r="1" fill="white" fill-opacity="0.9"/>
      <circle cx="14" cy="24" r="0.9" fill="#DC2626" fill-opacity="0.9"/>
      <circle cx="16" cy="26" r="0.7" fill="#FBBF24" fill-opacity="0.9"/>
      <circle cx="32" cy="15" r="1.2" fill="#DC2626" fill-opacity="0.9"/>
      <circle cx="30" cy="18" r="0.8" fill="#FBBF24" fill-opacity="0.9"/>
      <circle cx="28" cy="21" r="1" fill="white" fill-opacity="0.9"/>
      <circle cx="26" cy="24" r="0.9" fill="#DC2626" fill-opacity="0.9"/>
      <circle cx="24" cy="26" r="0.7" fill="#FBBF24" fill-opacity="0.9"/>
      <circle cx="9" cy="16.5" r="0.4" fill="white" fill-opacity="0.8"/>
      <circle cx="11" cy="19.5" r="0.4" fill="#DC2626" fill-opacity="0.8"/>
      <circle cx="13" cy="22.5" r="0.4" fill="white" fill-opacity="0.8"/>
      <circle cx="15" cy="25" r="0.4" fill="#FBBF24" fill-opacity="0.8"/>
      <circle cx="31" cy="16.5" r="0.4" fill="white" fill-opacity="0.8"/>
      <circle cx="29" cy="19.5" r="0.4" fill="#DC2626" fill-opacity="0.8"/>
      <circle cx="27" cy="22.5" r="0.4" fill="white" fill-opacity="0.8"/>
      <circle cx="25" cy="25" r="0.4" fill="#FBBF24" fill-opacity="0.8"/>
    </svg>
  `;
};
