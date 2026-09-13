import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient-purple' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  glow = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] outline-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5 font-medium',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2 font-semibold',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5 font-bold',
  };

  const variantStyles = {
    // Electric blue button matching reference "Explore Projects" & "View Details"
    primary:
      'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_20px_-3px_rgba(37,99,235,0.45)] hover:shadow-[0_0_28px_0_rgba(6,182,212,0.6)] border border-cyan-400/30',
    // Dark pill button matching "Watch Video" & "Download"
    secondary:
      'bg-[#0a0f1d] hover:bg-[#121a30] text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 shadow-sm',
    outline:
      'bg-transparent hover:bg-cyan-950/20 text-cyan-400 hover:text-cyan-300 border border-cyan-500/40 hover:border-cyan-400',
    ghost:
      'bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white',
    // Violet-blue gradient matching "Join the Journey"
    'gradient-purple':
      'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-[0_0_25px_-2px_rgba(99,102,241,0.5)] border border-purple-400/30',
    subtle:
      'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800/80',
  };

  const glowStyle = glow ? 'animate-pulse ring-2 ring-cyan-500/50' : '';
  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${glowStyle} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};
