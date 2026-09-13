import React, { useState } from 'react';
import { Search, Filter, Sparkles, Smartphone, CheckCircle2, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { APPLICATIONS } from '../data/labData.ts';
import { AppCard } from '../components/cards/AppCard.tsx';
import { Badge } from '../components/common/Badge.tsx';
import { Button } from '../components/common/Button.tsx';
import { useRouter } from '../context/RouterContext.tsx';

export const AppsPage: React.FC = () => {
  const { showToast, navigate, openModal } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Productivity', 'Education', 'AI Tools'];

  const filteredApps = APPLICATIONS.filter((app) => {
    const matchesCategory =
      selectedCategory === 'All' || app.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Page Header */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <Badge variant="cyan" size="md" className="mb-3">
          SOFTWARE & UTILITIES
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Applications Directory
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
          Explore native and progressive applications crafted by Rahul Digital Lab. Designed for rapid speed, minimal resource footprints, and effortless digital productivity.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#080d1a] border border-slate-800/80 mb-10 shadow-lg">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                  : 'bg-[#0e1424] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#060913] border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-cyan-500/80 outline-none"
          />
        </div>
      </div>

      {/* Apps Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
          <AppCard isComingSoon={true} />
        </div>
      ) : (
        <div className="py-16 text-center rounded-3xl bg-[#090e1c] border border-slate-800 p-8">
          <Smartphone className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No applications found</h3>
          <p className="text-xs text-slate-400 mb-4 max-w-sm mx-auto">
            Adjust your search terms or category filter to find laboratory applications.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold hover:bg-cyan-500/30 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Detailed App Showcase Breakdown */}
      <div className="mt-16 sm:mt-24 space-y-10">
        <div className="border-t border-slate-800/80 pt-10">
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            Application Architectural Breakdown
          </h2>
          <p className="text-sm text-slate-400">
            Every application engineered in the lab adheres to zero-bloat principles, modern TypeScript engines, and strict user data privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {APPLICATIONS.map((app) => (
            <div
              key={`detail-${app.id}`}
              className="p-6 sm:p-8 rounded-3xl bg-[#090e1d] border border-slate-800 shadow-xl space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      {app.name}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">
                      Version {app.version}
                    </span>
                  </div>
                </div>
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
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {app.description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
                  Engineered Capabilities
                </h4>
                <ul className="space-y-2">
                  {app.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {app.category} • Client-First
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => openModal('app', app)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
