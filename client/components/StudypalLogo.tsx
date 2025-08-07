import React from 'react';

interface StudypalLogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
  className?: string;
}

const StudypalLogo: React.FC<StudypalLogoProps> = ({
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

  const iconColor = theme === 'light' ? '#4F46E5' : '#A5B4FC';
  const textColor = theme === 'light' ? '#1F2937' : '#F9FAFB';

  const LogoIcon = () => (
    <svg
      viewBox="0 0 40 40"
      className={`${sizeClasses[size]} w-auto`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Book base */}
      <rect
        x="8"
        y="12"
        width="24"
        height="20"
        rx="2"
        fill={iconColor}
        fillOpacity="0.1"
        stroke={iconColor}
        strokeWidth="2"
      />
      
      {/* Book spine */}
      <rect
        x="8"
        y="12"
        width="4"
        height="20"
        fill={iconColor}
      />
      
      {/* Pages */}
      <line x1="16" y1="18" x2="28" y2="18" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="16" y1="22" x2="26" y2="22" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="16" y1="26" x2="24" y2="26" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Study buddy/pal element - lightbulb */}
      <circle
        cx="30"
        cy="10"
        r="6"
        fill={iconColor}
        fillOpacity="0.2"
        stroke={iconColor}
        strokeWidth="2"
      />
      <path
        d="M27 10 L29 8 L31 10 L33 8"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
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
      <span>Study</span>
      <span style={{ color: iconColor }}>pal</span>
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

export default StudypalLogo;

// Export individual components for flexibility
export const StudypalIcon: React.FC<Omit<StudypalLogoProps, 'variant'>> = (props) => (
  <StudypalLogo {...props} variant="icon" />
);

export const StudypalText: React.FC<Omit<StudypalLogoProps, 'variant'>> = (props) => (
  <StudypalLogo {...props} variant="text" />
);

// Utility function to get logo as base64 for emails, documents, etc.
export const getStudypalLogoSVG = (theme: 'light' | 'dark' = 'light', size: number = 40) => {
  const iconColor = theme === 'light' ? '#4F46E5' : '#A5B4FC';
  
  return `
    <svg viewBox="0 0 40 40" width="${size}" height="${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="24" height="20" rx="2" fill="${iconColor}" fill-opacity="0.1" stroke="${iconColor}" stroke-width="2"/>
      <rect x="8" y="12" width="4" height="20" fill="${iconColor}"/>
      <line x1="16" y1="18" x2="28" y2="18" stroke="${iconColor}" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="16" y1="22" x2="26" y2="22" stroke="${iconColor}" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="16" y1="26" x2="24" y2="26" stroke="${iconColor}" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="30" cy="10" r="6" fill="${iconColor}" fill-opacity="0.2" stroke="${iconColor}" stroke-width="2"/>
      <path d="M27 10 L29 8 L31 10 L33 8" stroke="${iconColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>
  `;
};
