import React from 'react';
import {
  ArrowRight,
  Play,
  Sparkles,
  Layers,
  ChevronRight,
  Cpu,
  Palette,
  Rocket,
  Lightbulb,
  Terminal,
  FileCheck,
  CheckCircle,
} from 'lucide-react';
import { useRouter } from '../context/RouterContext.tsx';
import { Button } from '../components/common/Button.tsx';
import { Badge } from '../components/common/Badge.tsx';
import { SectionHeader } from '../components/common/SectionHeader.tsx';
import { CategoryCard } from '../components/cards/CategoryCard.tsx';
import { AppCard } from '../components/cards/AppCard.tsx';
import { PromptCategoryCard, PromptCategoryItem } from '../components/cards/PromptCategoryCard.tsx';
import { CreationCard } from '../components/cards/CreationCard.tsx';
import { ProjectCard } from '../components/cards/ProjectCard.tsx';
import { DocumentCard } from '../components/cards/DocumentCard.tsx';
import { SafeImage } from '../components/common/SafeImage.tsx';
import {
  LAB_BRAND,
  STUDIO_STATS,
  EXPLORE_CATEGORIES,
  APPLICATIONS,
  CREATIONS_DATA,
  PROJECTS_DATA,
  DOCUMENTS_DATA,
  HERO_IMAGE,
} from '../data/labData.ts';

const PROMPT_CATEGORIES_HOME: PromptCategoryItem[] = [
  {
    id: 'image-prompts',
    title: 'Image Prompts',
    subtitle: 'Growing Library',
    iconType: 'palette',
  },
  {
    id: 'video-prompts',
    title: 'Video Prompts',
    subtitle: 'Cinematic & Motion',
    iconType: 'video',
  },
  {
    id: 'character-prompts',
    title: 'Character Prompts',
    subtitle: 'Portraits & Figures',
    iconType: 'user',
  },
  {
    id: 'photography-prompts',
    title: 'Photography',
    subtitle: 'Realistic Optics',
    iconType: 'camera',
  },
  {
    id: 'cinematic-prompts',
    title: 'Cinematic',
    subtitle: 'Atmosphere & Scene',
    iconType: 'clapperboard',
  },
  {
    id: 'app-dev-prompts',
    title: 'App Development',
    subtitle: 'UI & Concepts',
    iconType: 'code',
  },
];

const WORKFLOW_STEPS = [
  { step: '01', title: 'Idea', desc: 'Raw sparks and problem identification', icon: Lightbulb },
  { step: '02', title: 'Concept', desc: 'Creative framing & prompt synthesis', icon: Sparkles },
  { step: '03', title: 'Design', desc: 'Aesthetic systems & UI architecture', icon: Palette },
  { step: '04', title: 'Build', desc: 'Code implementation & model tuning', icon: Terminal },
  { step: '05', title: 'Test', desc: 'Quality verification & stress tests', icon: FileCheck },
  { step: '06', title: 'Launch', desc: 'Public deployment to digital reality', icon: Rocket },
];

export const HomePage: React.FC = () => {
  const { navigate, openModal } = useRouter();

  return (
    <div className="w-full min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* ========================================================================= */}
      {/* SECTION A: HERO                                                          */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
              {/* Badge: WELCOME TO RAHUL DIGITAL LAB */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>WELCOME TO RAHUL DIGITAL LAB</span>
              </div>

              {/* Main Headline with Glowing Gradient */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] text-white">
                Where Ideas Become{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.5)]">
                  Digital Reality.
                </span>
              </h1>

              {/* Supporting Pillars */}
              <p className="text-sm sm:text-base font-mono font-medium text-cyan-400/90 tracking-wider">
                {LAB_BRAND.coreIdentity} • Documents • And More
              </p>

              {/* Narrative description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                {LAB_BRAND.description}
              </p>

              {/* CTAs matching reference */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/projects')}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Explore Projects
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openModal('video-watch')}
                  icon={<Play className="w-4 h-4 fill-cyan-400 text-cyan-400" />}
                >
                  Watch Video
                </Button>
              </div>
            </div>

            {/* Right Column: Visual Creator Graphic Area matching approved reference */}
            <div className="lg:col-span-5 relative flex justify-center z-10">
              <div className="relative w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] bg-[#070b15]">
                <SafeImage
                  src={HERO_IMAGE}
                  alt="Rahul Digital Lab Creator"
                  fallbackTitle="Creator Studio"
                  fallbackCategory="Digital Laboratory"
                  aspectRatio="4:5"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-[#060913]/20" />

                {/* Cyber Studio Floating Badge: CREATE BUILD INNOVATE */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/40 text-[10px] font-mono font-bold tracking-widest text-cyan-300 shadow-md">
                    CREATE • BUILD • INNOVATE
                  </div>
                </div>

                {/* Left Tag: A Better Digital Tomorrow */}
                <div className="absolute top-16 left-4">
                  <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-purple-500/40 text-[10px] font-mono text-purple-300 shadow-md">
                    A Better Digital Tomorrow
                  </div>
                </div>

                {/* Overlay Card matching reference: Technology / Creativity / A Better You */}
                <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-[#090e1d]/90 backdrop-blur-md border border-cyan-500/40 shadow-2xl">
                  <div className="space-y-1 text-xs sm:text-sm font-display font-bold tracking-wide">
                    <div className="text-cyan-400 flex items-center justify-between">
                      <span>Technology</span>
                      <span className="text-[10px] font-mono text-slate-400">RDL LAB</span>
                    </div>
                    <div className="text-purple-300">Creativity</div>
                    <div className="text-slate-200">A Better You</div>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION B: STUDIO STATISTICS BAR                                         */}
      {/* ========================================================================= */}
      <section className="border-y border-slate-800/80 bg-[#060913]/90 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {STUDIO_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  idx < STUDIO_STATS.length - 1 ? 'lg:border-r lg:border-slate-800/80' : ''
                }`}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-400 mt-1 font-sans">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION C: EXPLORE THE LAB (6 Category Cards)                            */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Explore the Lab"
            subtitle="Discover everything created and curated inside Rahul Digital Lab."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {EXPLORE_CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION D: FEATURED APPS                                                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#050811]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured Apps"
            subtitle="Innovative apps built for a smarter and easier life."
            actionText="View All Apps"
            actionPath="/apps"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPLICATIONS.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
            <AppCard isComingSoon={true} />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION E: AI PROMPT LIBRARY                                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="AI Prompt Library"
            subtitle="Powerful prompts for your creativity. Copy, use and create amazing results."
            actionText="View All Prompts"
            actionPath="/prompts"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {PROMPT_CATEGORIES_HOME.map((item) => (
              <PromptCategoryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION F: CREATIVE GALLERY                                              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#050811]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured Creations"
            subtitle="A glimpse of AI generated images and creative works."
            actionText="View Gallery"
            actionPath="/creations"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREATIONS_DATA.map((creation) => (
              <CreationCard key={creation.id} creation={creation} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION G: FEATURED PROJECTS                                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured Projects"
            subtitle="End-to-end applications, research experiments, and digital solutions."
            actionText="All Projects"
            actionPath="/projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS_DATA.map((project, idx) => (
              <ProjectCard key={project.id} project={project} featured={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION H: CREATIVE WORKFLOW                                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#050811]/80 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge variant="cyan" size="sm" className="mb-2">
              ENGINEERING METHODOLOGY
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white">
              Creative Workflow
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 font-sans">
              From an initial spark to a robust, scalable digital product in your hands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative p-5 rounded-2xl bg-[#090e1c] border border-slate-800/80 flex flex-col items-center text-center group hover:border-cyan-500/40 transition-all shadow-lg hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.2)]"
                >
                  <span className="text-[10px] font-mono font-bold text-cyan-400 mb-2">
                    PHASE {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#060913] border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:scale-110 transition-all mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION I: DOCUMENTS / RESOURCES                                         */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Documents & Resources"
            subtitle="Technical guides, cheatsheets, prompt collections and research papers."
            actionText="View All Documents"
            actionPath="/documents"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCUMENTS_DATA.map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION J: ABOUT THE LAB OVERVIEW                                        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#050811]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#090e1d] border border-slate-800/90 p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl space-y-6">
              <Badge variant="cyan" size="md">
                ABOUT THE LAB
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white">
                A Creative Space for Digital Ideas & Modern Software.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                RAHUL DIGITAL LAB is a creative technology space focused on building apps, experimenting with AI, developing digital tools, creating visual content, and documenting useful workflows.
              </p>

              {/* 4 Core Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {[
                  { name: 'Apps', desc: 'Smarter daily productivity' },
                  { name: 'AI', desc: 'Prompt engineering & models' },
                  { name: 'Creativity', desc: 'Cinematic visual synthesis' },
                  { name: 'Innovation', desc: 'Full-stack software experiments' },
                ].map((pillar) => (
                  <div
                    key={pillar.name}
                    className="p-3.5 rounded-xl bg-[#050811] border border-slate-800/80"
                  >
                    <div className="text-cyan-400 font-display font-bold text-sm">
                      {pillar.name}
                    </div>
                    <div className="text-slate-400 text-xs mt-0.5">{pillar.desc}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  onClick={() => navigate('/about')}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Read Lab Philosophy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION K: FINAL CTA                                                     */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <Badge variant="purple" size="md">
            JOIN THE EXPERIMENT
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Let&apos;s Build a Creative Future Together
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            New ideas. Better tools. Greater possibilities. Stay connected with{' '}
            <span className="text-cyan-400 font-semibold font-mono">
              RAHUL DIGITAL LAB
            </span>{' '}
            as we turn concepts into digital reality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="gradient-purple"
              size="lg"
              onClick={() => navigate('/contact')}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Join the Journey
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/projects')}
            >
              Explore All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
