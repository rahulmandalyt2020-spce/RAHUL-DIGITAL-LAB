import React from 'react';
import { Image as ImageIcon, Video, Smartphone, FileText, Code2, Sparkles } from 'lucide-react';

export interface AssetPlaceholderProps {
  label?: string;
  sublabel?: string;
  iconType?: 'image' | 'video' | 'app' | 'document' | 'code' | 'sparkle';
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto';
  className?: string;
}

export const AssetPlaceholder: React.FC<AssetPlaceholderProps> = ({
  label = 'Preview Coming Soon',
  sublabel = 'Rahul Digital Lab • Media Asset Staged',
  iconType = 'image',
  aspectRatio = 'auto',
  className = '',
}) => {
  const getIcon = () => {
    switch (iconType) {
      case 'video':
        return <Video className="w-8 h-8 text-cyan-400" />;
      case 'app':
        return <Smartphone className="w-8 h-8 text-blue-400" />;
      case 'document':
        return <FileText className="w-8 h-8 text-purple-400" />;
      case 'code':
        return <Code2 className="w-8 h-8 text-cyan-300" />;
      case 'sparkle':
        return <Sparkles className="w-8 h-8 text-amber-400" />;
      default:
        return <ImageIcon className="w-8 h-8 text-cyan-400" />;
    }
  };

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'video':
        return 'aspect-video';
      case 'square':
        return 'aspect-square';
      case 'portrait':
        return 'aspect-3/4';
      case 'wide':
        return 'aspect-16/9';
      case 'auto':
      default:
        return 'w-full h-full min-h-[160px]';
    }
  };

  return (
    <div
      id={`placeholder-${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
      className={`relative w-full ${getAspectClass()} rounded-2xl overflow-hidden bg-[#070b16] border border-slate-800/80 flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
    >
      {/* Background Cybernetic Ambient Glow & Grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/15 via-[#070b16] to-[#040711] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Decorative Corner Accents */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-cyan-500/40" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-cyan-500/40" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-cyan-500/40" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-cyan-500/40" />

      {/* Center Icon & Copy */}
      <div className="relative z-10 flex flex-col items-center space-y-2.5 max-w-xs">
        <div className="w-14 h-14 rounded-2xl bg-[#0b1226] border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex items-center justify-center mb-1">
          {getIcon()}
        </div>

        <span className="text-sm font-display font-bold text-white tracking-wide">
          {label}
        </span>

        {sublabel && (
          <span className="text-[11px] font-mono text-slate-400 leading-relaxed block">
            {sublabel}
          </span>
        )}

        <div className="pt-1">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-[10px] font-mono text-cyan-300">
            ASSET STAGING READY
          </span>
        </div>
      </div>
    </div>
  );
};
