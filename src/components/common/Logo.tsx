import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
  onClick,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-sm font-bold tracking-wider',
    md: 'text-base sm:text-lg font-bold tracking-wider',
    lg: 'text-xl sm:text-2xl font-black tracking-wider',
  };

  const subSizes = {
    sm: 'text-[10px] tracking-normal',
    md: 'text-[11px] sm:text-xs tracking-wide',
    lg: 'text-xs sm:text-sm tracking-wider',
  };

  return (
    <div
      id="rdl-brand-logo"
      onClick={onClick}
      className={`flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer ${className}`}
    >
      {/* Stylized geometric 'R' Monogram matching the visual reference */}
      <div
        className={`relative ${iconSizes[size]} flex-shrink-0 flex items-center justify-center`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg blur-[6px] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
        >
          {/* Outer Cyber Poly Shape */}
          <path
            d="M6 8C6 5.79086 7.79086 4 10 4H26C31.5228 4 36 8.47715 36 14C36 18.0694 33.5719 21.5724 30.0883 23.0822L36.8579 33.7225C37.5684 34.839 36.7645 36.3125 35.4385 36.3125H28.847C28.026 36.3125 27.271 35.8569 26.8837 35.1325L21.3636 24.8H14V34C14 35.1046 13.1046 36 12 36H8C6.89543 36 6 35.1046 6 34V8Z"
            fill="url(#rdl_blue_grad)"
          />
          {/* Inner Negative Cutout */}
          <path
            d="M14 11H25C26.6569 11 28 12.3431 28 14C28 15.6569 26.6569 17 25 17H14V11Z"
            fill="#060913"
          />
          {/* Futuristic Cyber Diagonal Accent Slash */}
          <path
            d="M9 20L19 9H23L13 20H9Z"
            fill="#67E8F9"
            opacity="0.75"
          />
          <defs>
            <linearGradient
              id="rdl_blue_grad"
              x1="6"
              y1="4"
              x2="36"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E5FF" />
              <stop offset="0.5" stopColor="#0070F3" />
              <stop offset="1" stopColor="#7928CA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight">
        <span
          className={`${titleSizes[size]} text-white font-display uppercase tracking-wide group-hover:text-cyan-300 transition-colors`}
        >
          RAHUL DIGITAL LAB
        </span>
        {showTagline && (
          <span
            className={`${subSizes[size]} text-slate-400 font-sans tracking-wide flex items-center gap-1.5`}
          >
            <span>Apps</span>
            <span className="text-cyan-400/80">•</span>
            <span>AI</span>
            <span className="text-cyan-400/80">•</span>
            <span>Creativity</span>
            <span className="text-cyan-400/80">•</span>
            <span>Innovation</span>
          </span>
        )}
      </div>
    </div>
  );
};
