import React from 'react';
import {
  Smartphone,
  Sparkles,
  Image as ImageIcon,
  Video,
  FileText,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { ExploreCategory } from '../../types/index.ts';
import { useRouter } from '../../context/RouterContext.tsx';

interface CategoryCardProps {
  category: ExploreCategory;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { navigate } = useRouter();

  const getIcon = () => {
    switch (category.iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Image':
        return <ImageIcon className="w-5 h-5 text-teal-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-rose-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div
      onClick={() => navigate(category.path)}
      className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#090e1c] hover:bg-[#0e162c] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.2)]"
    >
      <div className="flex items-center gap-3.5 sm:gap-4">
        {/* Icon Container with glowing background */}
        <div className="w-11 h-11 rounded-xl bg-[#060913] border border-slate-800/90 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/50 transition-all flex-shrink-0 shadow-inner">
          {getIcon()}
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
            {category.title}
          </h3>
          <p className="text-xs text-slate-400 font-sans tracking-wide">
            {category.subtitle}
          </p>
        </div>
      </div>

      {/* Right chevron arrow */}
      <div className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
        <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  );
};
