import React from 'react';
import { Sparkles, Terminal, Palette, Lightbulb, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import { LAB_BRAND, HERO_IMAGE } from '../data/labData.ts';
import { Badge } from '../components/common/Badge.tsx';
import { Button } from '../components/common/Button.tsx';
import { SafeImage } from '../components/common/SafeImage.tsx';
import { useRouter } from '../context/RouterContext.tsx';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  const corePillars = [
    {
      title: 'Apps',
      subtitle: 'Native & Progressive Software',
      desc: 'Crafting responsive, high-speed applications like CALENDAR lite and STUDY AI that eliminate digital friction from daily life.',
      icon: Terminal,
      accent: 'text-cyan-400',
      border: 'border-cyan-500/30',
    },
    {
      title: 'AI',
      subtitle: 'Generative Models & Prompting',
      desc: 'Deep exploration of large language models and diffusion networks to uncover optimal prompts, system instructions, and workflows.',
      icon: Sparkles,
      accent: 'text-purple-400',
      border: 'border-purple-500/30',
    },
    {
      title: 'Creativity',
      subtitle: 'Cinematic Visual Synthesis',
      desc: 'Merging computational precision with photographic eye to create evocative cyberpunk, natural, and architectural digital art.',
      icon: Palette,
      accent: 'text-rose-400',
      border: 'border-rose-500/30',
    },
    {
      title: 'Innovation',
      subtitle: 'Autonomous Systems & Tools',
      desc: 'Testing new paradigms across local-first data, responsive layouts, and modern web architectures.',
      icon: Lightbulb,
      accent: 'text-blue-400',
      border: 'border-blue-500/30',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <Badge variant="cyan" size="md" className="mb-3">
          LAB MANIFESTO & IDENTITY
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          About Rahul Digital Lab
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-sans">
          &ldquo;{LAB_BRAND.tagline}&rdquo; — An independent creative engineering laboratory exploring the frontiers of software, artificial intelligence, and visual storytelling.
        </p>
      </div>

      {/* Hero Narrative with Studio Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 sm:mb-24">
        <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            A Creative Technology Space for Useful Ideas
          </h2>
          <p className="text-slate-200">
            {LAB_BRAND.description}
          </p>
          <p>
            Serving as both a personal laboratory and a public showcase, the lab documents working applications, generative prompts, visual studies, and technical specifications designed to be practical, reliable, and openly accessible.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <div className="p-3 rounded-xl bg-[#090e1c] border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              STATUS: Active Laboratory • Continuous R&D
            </div>
            <div className="p-3 rounded-xl bg-[#090e1c] border border-purple-500/30 text-purple-300 text-xs font-mono">
              DISCIPLINE: Clean Engineering & Prompt Architecture
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-4/5 rounded-3xl overflow-hidden border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.2)] bg-[#070b15]">
            <SafeImage
              src={HERO_IMAGE}
              alt="Rahul Digital Lab Workspace"
              fallbackTitle="Digital Laboratory Workspace"
              fallbackCategory="Engineering Studio"
              aspectRatio="4:5"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-slate-800 text-xs font-mono text-cyan-300">
              Rahul Digital Lab • Where Ideas Become Digital Reality.
            </div>
          </div>
        </div>
      </div>

      {/* Creator Philosophy & Focus Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 sm:mb-24">
        <div className="p-8 rounded-3xl bg-[#090e1c] border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-widest block">
            CREATOR PHILOSOPHY & DIRECTION
          </span>
          <h3 className="text-xl font-display font-bold text-white">
            From Concepts to Concrete Reality
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
              <span><strong className="text-white">Ideas to Reality:</strong> Moving rapidly from conceptual sketches to tangible interactive software.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
              <span><strong className="text-white">Clean Engineering:</strong> Lean client-side architectures with zero unnecessary bloat or telemetry.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
              <span><strong className="text-white">Creative Exploration:</strong> Pushing generative diffusion and language models to their optical limits.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
              <span><strong className="text-white">Useful Outputs:</strong> Delivering tools, prompts, and resources that provide immediate daily value.</span>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-[#090e1c] border border-slate-800 shadow-xl space-y-4">
          <span className="text-xs font-mono uppercase text-purple-400 font-bold tracking-widest block">
            LAB FOCUS AREAS
          </span>
          <h3 className="text-xl font-display font-bold text-white">
            Active Research & Production Disciplines
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
              <span><strong className="text-white">Productivity Tools:</strong> High-efficiency utilities engineered for speed and distraction-free workflows.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
              <span><strong className="text-white">Prompt Systems:</strong> Standardized parameter matrices, token weight schemas, and camera optics syntax.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
              <span><strong className="text-white">Visual Generative Art:</strong> High-detail cinematic imagery spanning futuristic, portrait, and architectural themes.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
              <span><strong className="text-white">Documented Workflows:</strong> Open cheat sheets, technical specifications, and setup templates.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="space-y-8 mb-16">
        <div>
          <h2 className="text-2xl font-display font-bold text-white">
            The Four Core Pillars
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Every project in the lab is anchored in at least one of these disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-6 rounded-2xl bg-[#090e1c] border ${pillar.border} shadow-lg space-y-3 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-[#060913] border border-slate-800 flex items-center justify-center ${pillar.accent} mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white">
                    {pillar.title}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400 block mb-2">
                    {pillar.subtitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-cyan-950/40 border border-slate-800 p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-2xl font-display font-bold text-white">
          Have an idea or want to collaborate?
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Rahul Digital Lab is always open to innovative experiments, custom tooling inquiries, and creative partnerships.
        </p>
        <div className="pt-2">
          <Button
            variant="primary"
            onClick={() => navigate('/contact')}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};
