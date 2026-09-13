import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'navy' | 'deep' | 'interactive' | 'outline' | 'glass';
  glowEffect?: 'none' | 'cyan' | 'purple' | 'subtle';
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'navy',
  glowEffect = 'subtle',
  className = '',
  padding = 'md',
  ...props
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  const variantStyles = {
    navy: 'bg-[#090e1a]/95 border border-slate-800/80',
    deep: 'bg-[#060913] border border-slate-800/60',
    interactive:
      'bg-[#090e1a]/95 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0d1424] transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.15)]',
    outline: 'bg-transparent border border-slate-800 hover:border-slate-700',
    glass:
      'bg-[#080d1a]/80 backdrop-blur-md border border-slate-800/60 shadow-xl',
  };

  const glowStyles = {
    none: '',
    subtle: 'shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)]',
    cyan: 'shadow-[0_0_25px_-5px_rgba(6,182,212,0.2)] border-cyan-500/30',
    purple: 'shadow-[0_0_25px_-5px_rgba(168,85,247,0.2)] border-purple-500/30',
  };

  return (
    <div
      className={`rounded-2xl transition-all duration-300 relative overflow-hidden ${variantStyles[variant]} ${glowStyles[glowEffect]} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
