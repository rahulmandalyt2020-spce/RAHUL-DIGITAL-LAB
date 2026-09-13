import React from 'react';
import { Calendar, GraduationCap, Plus, ArrowRight, Download, Sparkles } from 'lucide-react';
import { AppItem } from '../../types/index.ts';
import { Badge } from '../common/Badge.tsx';
import { Button } from '../common/Button.tsx';
import { useRouter } from '../../context/RouterContext.tsx';

interface AppCardProps {
  app?: AppItem;
  isComingSoon?: boolean;
}

export const AppCard: React.FC<AppCardProps> = ({ app, isComingSoon = false }) => {
  const { navigate, showToast, openModal } = useRouter();

  if (isComingSoon || !app) {
    return (
      <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#090e1c] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-xl group">
        <div className="space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#12192d] border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all">
            <Plus className="w-7 h-7" />
          </div>

          <div>
            <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
              More Apps Coming Soon
            </h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Stay tuned for more amazing apps, intelligent utilities and creative digital tools currently in the laboratory pipeline.
            </p>
          </div>
        </div>

        <div className="pt-6 mt-4 border-t border-slate-800/60">
          <Button
            variant="secondary"
            fullWidth
            onClick={() => navigate('/projects')}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Explore Projects
          </Button>
        </div>
      </div>
    );
  }

  const renderIcon = () => {
    if (app.iconType === 'calendar') {
      return (
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-lg shadow-blue-500/20 flex-shrink-0">
          <div className="w-full h-full bg-[#0c1427] rounded-[14px] flex flex-col items-center justify-center p-2 text-cyan-400">
            <div className="w-full bg-red-500 h-2.5 rounded-t-sm mb-1 opacity-90" />
            <Calendar className="w-6 h-6 text-white" />
          </div>
        </div>
      );
    }
    if (app.iconType === 'study') {
      return (
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 shadow-lg shadow-emerald-500/20 flex-shrink-0">
          <div className="w-full h-full bg-[#091a18] rounded-[14px] flex items-center justify-center text-emerald-400">
            <GraduationCap className="w-7 h-7 text-emerald-300" />
          </div>
        </div>
      );
    }
    return (
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-0.5 shadow-lg shadow-purple-500/20 flex-shrink-0">
        <div className="w-full h-full bg-[#120d24] rounded-[14px] flex items-center justify-center text-purple-300">
          <Sparkles className="w-7 h-7" />
        </div>
      </div>
    );
  };

  const handleDownload = () => {
    if (app.status === 'In Development') {
      showToast(`${app.name} is in development. Registration open for beta builds.`);
      openModal('app', app);
    } else {
      showToast(`${app.name} (${app.version}): Web client active. Install package staged.`);
      openModal('app', app);
    }
  };

  const handleViewDetails = () => {
    openModal('app', app);
  };

  return (
    <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#090e1c] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]">
      <div className="space-y-4">
        {/* Header with App Icon and Badges */}
        <div className="flex items-start justify-between gap-4">
          {renderIcon()}
          <div className="flex flex-wrap gap-1.5 justify-end">
            {app.badges.map((badge, idx) => (
              <Badge
                key={badge}
                variant={idx === 0 ? 'blue' : 'slate'}
                size="sm"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        {/* Title and Description */}
        <div>
          <h3 className="text-xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors">
            {app.name}
          </h3>
          <p className="text-sm text-slate-300/90 mt-2 leading-relaxed">
            {app.description}
          </p>
        </div>

        {/* Feature Highlights if in detail mode */}
        {app.features && app.features.length > 0 && (
          <ul className="text-xs text-slate-400 space-y-1.5 pt-1">
            {app.features.slice(0, 2).map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Card Action Buttons (View Details & Download) matching reference */}
      <div className="grid grid-cols-2 gap-3 pt-6 mt-4 border-t border-slate-800/80">
        <Button
          variant="primary"
          size="sm"
          onClick={handleViewDetails}
        >
          View Details
        </Button>

        <Button
          variant="secondary"
          size="sm"
          onClick={handleDownload}
          icon={<Download className="w-3.5 h-3.5" />}
        >
          Download
        </Button>
      </div>
    </div>
  );
};
