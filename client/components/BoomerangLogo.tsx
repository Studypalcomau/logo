import React from "react";

interface BoomerangLogoProps {
  variant?: "full" | "icon" | "text";
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark";
  className?: string;
}

const BoomerangLogo: React.FC<BoomerangLogoProps> = ({
  variant = "full",
  size = "md",
  theme = "light",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
    xl: "h-16",
  };

  const primaryColor = theme === "light" ? "#0EA5E9" : "#7DD3FC";
  const accentColor = theme === "light" ? "#F97316" : "#FB923C";
  const textColor = theme === "light" ? "#1F2937" : "#F9FAFB";

  const LogoIcon = () => (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2Fdd7cf42c421a43aeaebe1762f190d508%2F9322846fc88647689b814181a06af82a?format=webp&width=800"
      alt="Boomerang"
      className={`${sizeClasses[size]} w-auto object-contain`}
      style={{
        filter: "hue-rotate(180deg) saturate(1.2) brightness(1.1)",
      }}
    />
  );

  const LogoText = () => (
    <div
      className={`font-bold tracking-tight ${
        size === "sm"
          ? "text-lg"
          : size === "md"
            ? "text-xl"
            : size === "lg"
              ? "text-2xl"
              : "text-3xl"
      }`}
      style={{ color: textColor }}
    >
      <div className="flex items-baseline">
        <span>Boomerang</span>
        <span
          className={`font-medium ml-0.5 ${
            size === "sm"
              ? "text-sm"
              : size === "md"
                ? "text-base"
                : size === "lg"
                  ? "text-lg"
                  : "text-xl"
          }`}
          style={{ color: primaryColor }}
        >
          .study
        </span>
      </div>
    </div>
  );

  if (variant === "icon") {
    return (
      <div className={className}>
        <LogoIcon />
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className={className}>
        <LogoText />
      </div>
    );
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
export const BoomerangIcon: React.FC<Omit<BoomerangLogoProps, "variant">> = (
  props,
) => <BoomerangLogo {...props} variant="icon" />;

export const BoomerangText: React.FC<Omit<BoomerangLogoProps, "variant">> = (
  props,
) => <BoomerangLogo {...props} variant="text" />;

// Utility function to get the boomerang image URL for various uses
export const getBoomerangImageURL = () => {
  return "https://cdn.builder.io/api/v1/image/assets%2Fdd7cf42c421a43aeaebe1762f190d508%2F9322846fc88647689b814181a06af82a?format=webp&width=800";
};

// For backwards compatibility - returns HTML with the image
export const getBoomerangLogoSVG = (
  theme: "light" | "dark" = "light",
  size: number = 40,
) => {
  return `<img src="${getBoomerangImageURL()}" alt="Boomerang" width="${size}" height="${size}" style="object-fit: contain;" />`;
};
