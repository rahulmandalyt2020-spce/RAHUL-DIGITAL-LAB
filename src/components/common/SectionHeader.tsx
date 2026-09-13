import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RoutePath } from '../../types/index.ts';
import { useRouter } from '../../context/RouterContext.tsx';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  actionText?: string;
  actionPath?: RoutePath;
  onActionClick?: () => void;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  badgeText,
  actionText,
  actionPath,
  onActionClick,
  className = '',
  align = 'left',
}) => {
  const { navigate } = useRouter();

  const handleAction = () => {
    if (onActionClick) {
      onActionClick();
    } else if (actionPath) {
      navigate(actionPath);
    }
  };

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 ${
        align === 'center' ? 'text-center sm:text-center sm:items-center' : ''
      } ${className}`}
    >
      <div className="space-y-1.5 max-w-2xl">
        {badgeText && (
          <div className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 mb-2">
            {badgeText}
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && (
        <button
          onClick={handleAction}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-[#0a0f1d] hover:bg-[#131b32] border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group cursor-pointer shadow-sm"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
};
