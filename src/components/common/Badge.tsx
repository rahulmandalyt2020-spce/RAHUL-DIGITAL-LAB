import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'emerald' | 'blue' | 'slate' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  className = '',
  icon,
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/50',
    purple: 'bg-purple-950/40 text-purple-300 border-purple-500/30 hover:border-purple-400/50',
    emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/50',
    blue: 'bg-blue-950/40 text-blue-300 border-blue-500/30 hover:border-blue-400/50',
    slate: 'bg-slate-900/60 text-slate-300 border-slate-700/50 hover:border-slate-600',
    amber: 'bg-amber-950/40 text-amber-300 border-amber-500/30 hover:border-amber-400/50',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 rounded-md font-medium tracking-wide',
    md: 'text-xs px-3 py-1 rounded-lg font-medium tracking-wider',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border backdrop-blur-sm transition-all select-none whitespace-nowrap ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
