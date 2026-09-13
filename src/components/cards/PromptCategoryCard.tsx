import React from 'react';
import {
  Palette,
  Video,
  User,
  Camera,
  Clapperboard,
  Code,
} from 'lucide-react';
import { useRouter } from '../../context/RouterContext.tsx';

export interface PromptCategoryItem {
  id: string;
  title: string;
  subtitle: string;
  iconType: 'palette' | 'video' | 'user' | 'camera' | 'clapperboard' | 'code';
}

interface PromptCategoryCardProps {
  item: PromptCategoryItem;
}

export const PromptCategoryCard: React.FC<PromptCategoryCardProps> = ({ item }) => {
  const { navigate } = useRouter();

  const getIcon = () => {
    switch (item.iconType) {
      case 'palette':
        return <Palette className="w-6 h-6 text-purple-400" />;
      case 'video':
        return <Video className="w-6 h-6 text-rose-400" />;
      case 'user':
        return <User className="w-6 h-6 text-cyan-400" />;
      case 'camera':
        return <Camera className="w-6 h-6 text-teal-400" />;
      case 'clapperboard':
        return <Clapperboard className="w-6 h-6 text-indigo-400" />;
      case 'code':
        return <Code className="w-6 h-6 text-blue-400" />;
      default:
        return <Palette className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <div
      onClick={() => navigate('/prompts')}
      className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#090e1c] hover:bg-[#0f172e] border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.18)] group"
    >
      <div className="w-12 h-12 rounded-xl bg-[#060913] border border-slate-800 flex items-center justify-center mb-3 group-hover:scale-105 group-hover:border-purple-500/50 transition-all shadow-inner">
        {getIcon()}
      </div>

      <h4 className="text-sm sm:text-base font-display font-bold text-white group-hover:text-purple-300 transition-colors">
        {item.title}
      </h4>
      <p className="text-xs text-slate-400 font-sans mt-1">
        {item.subtitle}
      </p>
    </div>
  );
};
