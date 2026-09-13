import React from 'react';
import { ArrowRight, Layers, CheckCircle2, Code2, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../../types/index.ts';
import { Badge } from '../common/Badge.tsx';
import { Button } from '../common/Button.tsx';
import { SafeImage } from '../common/SafeImage.tsx';
import { useRouter } from '../../context/RouterContext.tsx';

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const { navigate, showToast, openModal } = useRouter();

  return (
    <div
      className={`rounded-2xl bg-[#090e1c] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl overflow-hidden group flex flex-col justify-between hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.18)] ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Cover Image */}
      <div className="relative aspect-16/9 w-full overflow-hidden bg-black">
        <SafeImage
          src={project.coverImage}
          alt={project.title}
          fallbackTitle={project.title}
          fallbackCategory={project.category}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-[#090e1c]/40 to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <Badge variant="blue" size="sm">
            {project.category}
          </Badge>
          <Badge
            variant={project.status === 'Completed' ? 'emerald' : 'purple'}
            size="sm"
          >
            {project.status}
          </Badge>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {project.description}
          </p>

          {/* Key Result / Challenge */}
          {project.results && project.results.length > 0 && (
            <div className="mt-4 p-3 rounded-xl bg-[#050811] border border-slate-800/80 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                CORE DELIVERABLE
              </span>
              <p className="text-xs text-slate-300 flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{project.results[0]}</span>
              </p>
            </div>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#0f162c] text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              {project.timeline}
            </span>

            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                openModal('project', project);
              }}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
