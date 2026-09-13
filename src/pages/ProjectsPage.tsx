import React, { useState } from 'react';
import { Layers, CheckCircle2, Cpu, ExternalLink, Calendar, Code, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/labData.ts';
import { ProjectCard } from '../components/cards/ProjectCard.tsx';
import { Badge } from '../components/common/Badge.tsx';
import { Button } from '../components/common/Button.tsx';
import { useRouter } from '../context/RouterContext.tsx';
import { ProjectItem } from '../types/index.ts';

export const ProjectsPage: React.FC = () => {
  const { showToast } = useRouter();
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(PROJECTS_DATA[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <Badge variant="cyan" size="md" className="mb-3">
          PORTFOLIO OF INVENTIONS
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Featured Engineering Projects
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
          From full-stack production deployments to advanced multimodal AI architectures and custom desktop productivity frameworks.
        </p>
      </div>

      {/* Projects Grid Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              setSelectedProject(project);
              const element = document.getElementById('project-deep-dive');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cursor-pointer"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Deep-Dive Architecture Showcase for Selected Project */}
      <div
        id="project-deep-dive"
        className="rounded-3xl bg-[#090e1d] border border-cyan-500/30 p-6 sm:p-10 lg:p-12 shadow-[0_0_40px_rgba(6,182,212,0.12)] space-y-10"
      >
        <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="cyan" size="sm">
                SELECTED CASE STUDY
              </Badge>
              <Badge variant="slate" size="sm">
                {selectedProject.timeline}
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {selectedProject.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              {selectedProject.description}
            </p>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() =>
              showToast(`Access repository for ${selectedProject.title}: Private branch verified.`)
            }
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Repository Access
          </Button>
        </div>

        {/* 3 Pillars: Challenge, Concept & Design, Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-[#060913] border border-slate-800/90 space-y-2">
            <span className="text-[11px] font-mono uppercase text-rose-400 font-bold tracking-wider">
              01 • THE CHALLENGE
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedProject.challenge}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#060913] border border-slate-800/90 space-y-2">
            <span className="text-[11px] font-mono uppercase text-cyan-400 font-bold tracking-wider">
              02 • CONCEPT & ARCHITECTURE
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedProject.concept}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#060913] border border-slate-800/90 space-y-2">
            <span className="text-[11px] font-mono uppercase text-purple-400 font-bold tracking-wider">
              03 • WORKFLOW & EXECUTION
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedProject.workflow}
            </p>
          </div>
        </div>

        {/* Measurable Results & Technology Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800/80">
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-3">
              Measurable Outcomes & Deliverables
            </h4>
            <ul className="space-y-2">
              {selectedProject.results.map((res, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-3">
              Production Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#0c1427] text-cyan-300 border border-slate-700 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
