import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, Smartphone, Sparkles, Image as ImageIcon, Layers, FileText, Film, ArrowRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext.tsx';
import {
  APPLICATIONS,
  PROMPTS_DATA,
  CREATIONS_DATA,
  PROJECTS_DATA,
  DOCUMENTS_DATA,
  VIDEO_PROMPTS_DATA,
} from '../../data/labData.ts';
import { RoutePath } from '../../types/index.ts';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigate, openModal } = useRouter();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const apps = APPLICATIONS.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.features.some((f) => f.toLowerCase().includes(q))
    ).map((a) => ({
      id: a.id,
      title: a.name,
      subtitle: `${a.category} • ${a.status}`,
      type: 'App' as const,
      icon: Smartphone,
      path: '/apps' as RoutePath,
      accent: 'text-cyan-400',
      rawData: a,
    }));

    const prompts = PROMPTS_DATA.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.promptText.toLowerCase().includes(q)
    ).map((p) => ({
      id: p.id,
      title: p.title,
      subtitle: `${p.category} • ${p.tags.join(', ')}`,
      type: 'Prompt' as const,
      icon: Sparkles,
      path: '/prompts' as RoutePath,
      accent: 'text-purple-400',
      rawData: p,
    }));

    const creations = CREATIONS_DATA.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.toolsUsed.some((t) => t.toLowerCase().includes(q))
    ).map((c) => ({
      id: c.id,
      title: c.title,
      subtitle: `${c.category} • ${c.creationDate}`,
      type: 'Creation' as const,
      icon: ImageIcon,
      path: '/creations' as RoutePath,
      accent: 'text-teal-400',
      rawData: c,
    }));

    const videoPrompts = VIDEO_PROMPTS_DATA.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q) ||
        v.cinematicDescription.toLowerCase().includes(q) ||
        v.cameraMovement.toLowerCase().includes(q)
    ).map((v) => ({
      id: v.id,
      title: v.title,
      subtitle: `${v.category} • ${v.duration}`,
      type: 'Video Directive' as const,
      icon: Film,
      path: '/video-prompts' as RoutePath,
      accent: 'text-rose-400',
      rawData: v,
    }));

    const projects = PROJECTS_DATA.filter(
      (pr) =>
        pr.title.toLowerCase().includes(q) ||
        pr.category.toLowerCase().includes(q) ||
        pr.description.toLowerCase().includes(q) ||
        pr.technologies.some((t) => t.toLowerCase().includes(q))
    ).map((pr) => ({
      id: pr.id,
      title: pr.title,
      subtitle: `${pr.category} • ${pr.timeline}`,
      type: 'Project' as const,
      icon: Layers,
      path: '/projects' as RoutePath,
      accent: 'text-blue-400',
      rawData: pr,
    }));

    const documents = DOCUMENTS_DATA.filter(
      (d) =>
        d.fileName.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        d.type.toLowerCase().includes(q)
    ).map((d) => ({
      id: d.id,
      title: d.fileName,
      subtitle: `${d.type} • ${d.fileSize} • ${d.category}`,
      type: 'Document' as const,
      icon: FileText,
      path: '/documents' as RoutePath,
      accent: 'text-amber-400',
      rawData: d,
    }));

    return [...apps, ...prompts, ...videoPrompts, ...creations, ...projects, ...documents];
  }, [query]);

  if (!isSearchOpen) return null;

  const handleResultClick = (result: (typeof searchResults)[0]) => {
    setIsSearchOpen(false);
    navigate(result.path);

    if (result.type === 'App') {
      openModal('app', result.rawData);
    } else if (result.type === 'Creation') {
      openModal('creation', result.rawData);
    } else if (result.type === 'Project') {
      openModal('project', result.rawData);
    } else if (result.type === 'Document') {
      openModal('document', result.rawData);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Lab Directory Search"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsSearchOpen(false)}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#090e1c] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden z-10 flex flex-col max-h-[85vh]">
        {/* Search Header Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800 bg-[#060a14]">
          <Search className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search apps, prompts, creations, projects, documents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm sm:text-base outline-none font-sans"
            aria-label="Search query"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white text-xs px-2.5 py-1 bg-slate-800 rounded-md transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            aria-label="Close search dialog"
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-1 flex-1">
          {query.trim() === '' ? (
            <div className="p-6 text-center text-slate-500 text-sm">
              <p>Type to search across the entire Rahul Digital Lab directory</p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                {['CALENDAR lite', 'STUDY AI', 'Cyberpunk', 'Runway', 'Prompt Spec', 'Research'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 cursor-pointer transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-10 text-center text-slate-400 text-sm">
              No results found for &ldquo;{query}&rdquo;. Try another keyword or check category filters.
            </div>
          ) : (
            searchResults.map((result) => {
              const Icon = result.icon;
              return (
                <button
                  key={`${result.type}-${result.id}`}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-[#11182c] border border-transparent hover:border-slate-700/80 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div
                      className={`w-9 h-9 rounded-lg bg-[#060913] flex items-center justify-center border border-slate-800 flex-shrink-0 ${result.accent}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 truncate">
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {result.title}
                      </div>
                      <div className="text-xs text-slate-400 truncate">
                        {result.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {result.type}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-5 py-2.5 bg-[#050811] border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between font-mono flex-shrink-0">
          <span>RAHUL DIGITAL LAB INDEX SEARCH</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
