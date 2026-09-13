import React from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { CreationItem } from '../../types/index.ts';
import { Badge } from '../common/Badge.tsx';
import { SafeImage } from '../common/SafeImage.tsx';
import { useRouter } from '../../context/RouterContext.tsx';

interface CreationCardProps {
  creation: CreationItem;
}

export const CreationCard: React.FC<CreationCardProps> = ({ creation }) => {
  const { openModal } = useRouter();

  return (
    <div
      onClick={() => openModal('creation', creation)}
      className="group relative rounded-2xl overflow-hidden bg-[#070b16] border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 shadow-xl cursor-pointer hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.25)] flex flex-col"
    >
      {/* Visual Thumbnail */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-black">
        <SafeImage
          src={creation.imageUrl || creation.image || creation.thumbnail}
          alt={creation.title}
          fallbackTitle={creation.title}
          fallbackCategory={creation.category}
          aspectRatio={creation.aspectRatio}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090e1d] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="cyan" size="sm">
            {creation.category}
          </Badge>
        </div>

        {/* Quick View Icon */}
        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white border border-slate-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <Eye className="w-4 h-4 text-cyan-400" />
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#090e1c]">
        <div>
          <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
            {creation.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2">
            {creation.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            {creation.toolsUsed[0]}
          </span>
          <span>{creation.aspectRatio}</span>
        </div>
      </div>
    </div>
  );
};
