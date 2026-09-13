import React, { useState, useMemo } from 'react';
import { Search, Sparkles, SlidersHorizontal, Layers, Check } from 'lucide-react';
import { PROMPTS_DATA } from '../data/labData.ts';
import { PromptCard } from '../components/cards/PromptCard.tsx';
import { Badge } from '../components/common/Badge.tsx';
import { useRouter } from '../context/RouterContext.tsx';

export const PromptsPage: React.FC = () => {
  const { showToast, navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Image Prompts',
    'Video Prompts',
    'Character Prompts',
    'Photography',
    'Cinematic',
    'App Development',
  ];

  const filteredPrompts = useMemo(() => {
    return PROMPTS_DATA.filter((prompt) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        prompt.category.toLowerCase() === selectedCategory.toLowerCase() ||
        (selectedCategory === 'Cinematic' && prompt.category.toLowerCase().includes('cinematic'));
      const matchesSearch =
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.promptText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        prompt.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <Badge variant="purple" size="md" className="mb-3">
          GENERATIVE AI REPOSITORY
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          AI Prompt Library
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
          Production-tested generative prompts crafted for Midjourney, FLUX, Stable Diffusion, Runway, and Claude/GPT code engineering. Copy with one click and create stunning outputs.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#080d1a] border border-slate-800 shadow-lg">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                    : 'bg-[#0e1424] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search prompts or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#060913] border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-purple-500/80 outline-none"
            />
          </div>
        </div>

        {/* Quick jump to Video Prompts */}
        <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#090e1d] border border-slate-800/80 text-xs text-slate-400">
          <span>Looking specifically for motion and cinematic camera directions?</span>
          <button
            onClick={() => navigate('/video-prompts')}
            className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer"
          >
            Go to Dedicated Video Prompts Page &rarr;
          </button>
        </div>
      </div>

      {/* Prompts Grid */}
      {filteredPrompts.length === 0 ? (
        <div className="text-center py-20 bg-[#080d1a] rounded-3xl border border-slate-800">
          <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">No Prompts Found</h3>
          <p className="text-xs text-slate-400 mt-1">
            Try adjusting your search terms or category selection.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </div>
  );
};
