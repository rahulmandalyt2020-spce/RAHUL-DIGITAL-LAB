import React, { useEffect } from 'react';
import {
  X,
  Copy,
  Check,
  Calendar,
  Wrench,
  Sparkles,
  Film,
  Smartphone,
  Layers,
  FileText,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Download,
  Terminal,
  Cpu,
  GraduationCap,
  BellRing,
  ArrowRight,
} from 'lucide-react';
import { useRouter } from '../../context/RouterContext.tsx';
import { Button } from '../common/Button.tsx';
import { Badge } from '../common/Badge.tsx';
import { SafeImage } from '../common/SafeImage.tsx';
import {
  CreationItem,
  AppItem,
  ProjectItem,
  DocumentItem,
  PromptItem,
  VideoPromptItem,
} from '../../types/index.ts';
import { copyToClipboard } from '../../utils/clipboard.ts';
import { PromptDetailModal } from '../cards/PromptDetailModal.tsx';

export const LightboxModal: React.FC = () => {
  const { modal, closeModal, showToast, navigate } = useRouter();

  // Handle body scroll locking and Escape key
  useEffect(() => {
    if (!modal.type) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modal.type, closeModal]);

  if (!modal.type) return null;

  const handleCopyPrompt = async (text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      showToast('Copied ✓ Prompt text saved to clipboard');
    } else {
      showToast('Copy failed. Please manually select the prompt text.');
    }
  };

  // 1. LIGHTBOX FOR CREATIONS / IMAGES
  if (modal.type === 'creation') {
    const item = modal.data as CreationItem;
    if (!item) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10"
        role="dialog"
        aria-modal="true"
        aria-label={`Preview of ${item.title}`}
      >
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
          onClick={closeModal}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#070b15] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.3)] z-10 flex flex-col md:flex-row">
          <button
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white border border-slate-700 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Visual Showcase */}
          <div className="md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden min-h-[280px] max-h-[45vh] md:max-h-[85vh]">
            <SafeImage
              src={item.imageUrl || item.image || item.thumbnail}
              alt={item.title}
              fallbackTitle={item.title}
              fallbackCategory={item.category}
              aspectRatio={item.aspectRatio}
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <div className="absolute top-4 left-4 z-10">
              <Badge variant="cyan" size="md">
                {item.category}
              </Badge>
            </div>
          </div>

          {/* Right: Metadata & Prompt Details */}
          <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#090e1c] border-t md:border-t-0 md:border-l border-slate-800">
            <div className="space-y-5">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase block">
                  AI CREATIVE SHOWCASE
                </span>
                <h3 className="text-2xl font-display font-extrabold text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 block">Created</span>
                  <span className="text-slate-300 font-medium flex items-center gap-1 mt-0.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.creationDate}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Aspect Ratio</span>
                  <span className="text-slate-300 font-medium mt-0.5 block font-mono">
                    {item.aspectRatio}
                  </span>
                </div>
              </div>

              {/* Tools Used */}
              <div>
                <span className="text-xs text-slate-400 block mb-2 flex items-center gap-1.5 font-semibold">
                  <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                  Tools & Models
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prompt Snippet */}
              {item.promptSnippet && (
                <div className="rounded-xl bg-[#060913] border border-slate-800/90 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-400 flex items-center gap-1 font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      GENERATIVE PROMPT
                    </span>
                    <button
                      onClick={() => handleCopyPrompt(item.promptSnippet!)}
                      className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </button>
                  </div>
                  <p className="text-xs text-slate-300 font-mono italic leading-relaxed line-clamp-4">
                    &ldquo;{item.promptSnippet}&rdquo;
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800">
              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  if (item.promptSnippet) {
                    handleCopyPrompt(item.promptSnippet);
                  } else {
                    showToast('Visual asset reference logged');
                  }
                }}
                icon={<Copy className="w-4 h-4" />}
              >
                Copy Prompt Architecture
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. MODAL FOR APP DETAILS
  if (modal.type === 'app') {
    const app = modal.data as AppItem;
    if (!app) return null;

    const isCalendar = app.iconType === 'calendar';
    const isStudy = app.iconType === 'study';

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={`Application Details: ${app.name}`}
      >
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
          onClick={closeModal}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-2xl bg-[#070b15] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.3)] z-10 flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#090e1d] border-b border-slate-800 flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl p-0.5 shadow-lg flex-shrink-0 flex items-center justify-center ${
                  isCalendar
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-cyan-300'
                    : isStudy
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-700 text-emerald-300'
                    : 'bg-gradient-to-br from-purple-600 to-indigo-600 text-purple-300'
                }`}
              >
                <div className="w-full h-full bg-[#090e1c] rounded-[14px] flex items-center justify-center">
                  {isCalendar ? (
                    <Calendar className="w-7 h-7" />
                  ) : isStudy ? (
                    <GraduationCap className="w-7 h-7" />
                  ) : (
                    <Sparkles className="w-7 h-7" />
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="cyan" size="sm">
                    {app.category}
                  </Badge>
                  <Badge
                    variant={
                      app.status === 'Featured'
                        ? 'cyan'
                        : app.status === 'In Development'
                        ? 'purple'
                        : 'amber'
                    }
                    size="sm"
                  >
                    {app.status}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">
                    {app.version}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-extrabold text-white mt-1">
                  {app.name}
                </h3>
              </div>
            </div>

            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-black text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center cursor-pointer transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-2">
                APPLICATION OVERVIEW
              </h4>
              <p className="leading-relaxed text-slate-200">
                {app.longDescription || app.description}
              </p>
            </div>

            {/* Core Capabilities */}
            <div>
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-3">
                ARCHITECTURAL HIGHLIGHTS & CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {app.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#090e1c] border border-slate-800/80 text-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements & Tech Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#090e1c] border border-slate-800">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block mb-2">
                  System Architecture
                </span>
                <ul className="text-xs space-y-1 text-slate-300 font-mono">
                  <li>• Platform: Modern Browsers (Chromium, Safari, Firefox)</li>
                  <li>• Offline Mode: Client-side local persistence</li>
                  <li>• Packaging: PWA installable & native responsive</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#090e1c] border border-slate-800">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block mb-2">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {app.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-[11px] font-mono text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Safe Download & Build Notice */}
            <div className="p-4 rounded-2xl bg-[#090e1c] border border-cyan-500/30 flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <span className="font-bold text-white block">
                  Distribution Status & Availability
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {app.status === 'In Development' || app.status === 'Concept'
                    ? `${app.name} is currently in development and concept exploration within Rahul Digital Lab. Technical specifications and progress updates are cataloged here.`
                    : `${app.name} is a featured web application in the lab, engineered with client-side performance and clean typography.`}
                </p>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-5 sm:p-6 bg-[#060914] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-500">
              Rahul Digital Lab Project
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="secondary"
                size="sm"
                onClick={closeModal}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="w-full sm:w-auto"
                onClick={() => {
                  if (app.status === 'In Development' || app.status === 'Concept') {
                    showToast(`${app.name}: In development. Follow laboratory updates for release.`);
                  } else {
                    showToast(`${app.name} (${app.version}): Featured application active in lab.`);
                  }
                }}
                icon={
                  app.status === 'In Development' || app.status === 'Concept' ? (
                    <Sparkles className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )
                }
              >
                {app.status === 'In Development' || app.status === 'Concept' ? 'Project Status' : 'Explore App'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. MODAL FOR PROJECT CASE STUDY
  if (modal.type === 'project') {
    const project = modal.data as ProjectItem;
    if (!project) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={`Case Study: ${project.title}`}
      >
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
          onClick={closeModal}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-3xl bg-[#070b15] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.3)] z-10 flex flex-col max-h-[90vh]">
          {/* Header Banner */}
          <div className="relative h-48 sm:h-56 w-full bg-black overflow-hidden flex-shrink-0">
            <SafeImage
              src={project.coverImage}
              alt={project.title}
              fallbackTitle={project.title}
              fallbackCategory={project.category}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b15] via-[#070b15]/60 to-transparent pointer-events-none" />

            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white border border-slate-700 flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Badge variant="cyan" size="sm">
                    {project.category}
                  </Badge>
                  <Badge variant="slate" size="sm">
                    {project.timeline}
                  </Badge>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
            <p className="text-base text-slate-200 leading-relaxed font-sans">
              {project.description}
            </p>

            {/* 3 Pillars: Challenge, Concept, Workflow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#090e1c] border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono uppercase text-rose-400 font-bold block">
                  01 • CHALLENGE
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#090e1c] border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono uppercase text-cyan-400 font-bold block">
                  02 • ARCHITECTURE
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.concept || project.conceptDesign}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#090e1c] border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono uppercase text-purple-400 font-bold block">
                  03 • EXECUTION
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.workflow || project.processWorkflow?.join(', ')}
                </p>
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-3">
                TARGET OUTCOMES & CONCEPT RESULTS
              </h4>
              <div className="space-y-2">
                {(project.results || project.measurableResults || []).map((res, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#090e1c] border border-slate-800/80 text-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-2.5">
                PROJECT TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || project.technologyStack || []).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#0d1527] text-cyan-300 border border-slate-800 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 sm:p-6 bg-[#060914] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-500">
              Rahul Digital Lab Case Study
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="secondary"
                size="sm"
                onClick={closeModal}
                className="w-full sm:w-auto"
              >
                Close Case Study
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="w-full sm:w-auto"
                onClick={() => {
                  showToast(`Case study for ${project.title} cataloged in Rahul Digital Lab.`);
                }}
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Lab Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. MODAL FOR DOCUMENT DETAILS / STAGING PREVIEW
  if (modal.type === 'document') {
    const doc = modal.data as DocumentItem;
    if (!doc) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={`Document Resource: ${doc.fileName}`}
      >
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
          onClick={closeModal}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-2xl bg-[#070b15] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.3)] z-10 flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#090e1d] border-b border-slate-800 flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#060913] border border-cyan-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="blue" size="sm">
                    {doc.type}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">
                    {doc.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                  {doc.fileName}
                </h3>
              </div>
            </div>

            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-black text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center cursor-pointer transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-2">
                RESOURCE SYNOPSIS
              </h4>
              <p className="leading-relaxed text-slate-200">
                {doc.description}
              </p>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#090e1c] border border-slate-800 text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Format</span>
                <span className="text-slate-200 font-semibold">{doc.type} Document</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">File Size</span>
                <span className="text-cyan-300 font-semibold">{doc.fileSize}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Release Revision</span>
                <span className="text-slate-200">{doc.lastUpdated || 'Current Release'}</span>
              </div>
            </div>

            {/* Abstract Preview */}
            <div className="p-4 rounded-2xl bg-[#060913] border border-slate-800/80 space-y-2">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold block">
                EXECUTIVE SUMMARY & TABLE OF CONTENTS
              </span>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                {doc.previewExcerpt ||
                  `[Section 01: Conceptual Framework & Architecture] -> [Section 02: Syntactic Rules & Prompt Engineering] -> [Section 03: Production Deployment & Benchmark Results]. Certified lab publication.`}
              </p>
            </div>

            {/* Documentation Status Notice */}
            <div className="p-4 rounded-2xl bg-[#090e1c] border border-cyan-500/30 flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <span className="font-bold text-white block">
                  Documentation Status & Availability
                </span>
                <p className="text-slate-300 leading-relaxed">
                  This technical document is cataloged in the Rahul Digital Lab reference library. Detailed executive summaries, key specifications, and structured outlines are accessible directly in this preview.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 sm:p-6 bg-[#060914] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-500">
              Rahul Digital Lab Reference Document
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="secondary"
                size="sm"
                onClick={closeModal}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="w-full sm:w-auto"
                onClick={() => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(doc.previewExcerpt || doc.description);
                  }
                  showToast(`${doc.fileName}: Summary excerpt copied to clipboard.`);
                }}
                icon={<Copy className="w-4 h-4" />}
              >
                Copy Excerpt
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. MODAL FOR VIDEO WATCH REEL
  if (modal.type === 'video-watch') {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Cinematic Preview Video"
      >
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          onClick={closeModal}
          aria-hidden="true"
        />
        <div className="relative w-full max-w-3xl bg-[#090e1d] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.3)] z-10">
          <button
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800 cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
            <Film className="w-4 h-4" />
            <span>CINEMATIC PREVIEW • RAHUL DIGITAL LAB</span>
          </div>

          <h3 className="text-2xl font-display font-bold text-white mb-2">
            Studio Reel & Creative Showcase
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            Watch how generative AI, code engineering, and visual storytelling come together at Rahul Digital Lab.
          </p>

          <div className="aspect-video w-full rounded-2xl bg-black border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.7)] group-hover:scale-110 transition-transform">
              <Film className="w-7 h-7 ml-0.5" />
            </div>
            <p className="text-xs font-mono text-cyan-300 mt-4 z-10">
              Official 4K Cinematic Reel Stream • Ready for Embed
            </p>
          </div>

          <div className="mt-6 flex justify-end">
            <Button variant="secondary" onClick={closeModal}>
              Close Preview
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 6. MODAL FOR PROMPT AND VIDEO PROMPT DETAILS
  if ((modal.type === 'prompt' || modal.type === 'video-prompt') && modal.data) {
    return (
      <PromptDetailModal
        prompt={modal.data}
        onClose={closeModal}
        onCopySuccess={(msg) => showToast(msg)}
      />
    );
  }

  return null;
};
