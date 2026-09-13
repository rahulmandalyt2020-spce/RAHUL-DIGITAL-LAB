import React, { useState } from 'react';
import { Video, Film, SlidersHorizontal, Sparkles } from 'lucide-react';
import { VIDEO_PROMPTS_DATA } from '../data/labData.ts';
import { VideoPromptCard } from '../components/cards/VideoPromptCard.tsx';
import { Badge } from '../components/common/Badge.tsx';

export const VideoPromptsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'UGC / Product Advertisement',
    'Cinematic Motion',
    'Commercial & Product',
    'Sci-Fi & Urban',
    'Anime & Stylized',
  ];

  const filteredPrompts = VIDEO_PROMPTS_DATA.filter((prompt) => {
    if (selectedCategory === 'All') return true;
    const catLower = selectedCategory.toLowerCase();
    const matchesCat = prompt.category ? prompt.category.toLowerCase().includes(catLower) : false;
    const matchesGenre = prompt.genre ? prompt.genre.toLowerCase().includes(catLower) : false;
    return matchesCat || matchesGenre;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <Badge variant="purple" size="md" className="mb-3">
          GENERATIVE MOTION DIRECTIVES
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Video Prompts Architecture
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
          Engineered camera choreography, lighting states, pacing vectors, and cinematic staging built specifically for text-to-video engines such as Runway Gen-3, OpenAI Sora, Kling AI, and Luma Dream Machine.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 p-3.5 rounded-2xl bg-[#080d1a] border border-slate-800 mb-10 shadow-lg">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                : 'bg-[#0e1424] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Prompts Grid */}
      {filteredPrompts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredPrompts.map((item) => (
            <VideoPromptCard key={item.id} prompt={item} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-3xl bg-[#090e1c] border border-slate-800 p-8">
          <Film className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No video prompts in this category</h3>
          <p className="text-xs text-slate-400 mb-4 max-w-sm mx-auto">
            Choose a different category or view all video prompt directives.
          </p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-semibold hover:bg-purple-500/30 transition-colors"
          >
            Show All Video Prompts
          </button>
        </div>
      )}

      {/* Camera Grammar Cheat Guide */}
      <div className="mt-16 p-8 rounded-3xl bg-[#090e1d] border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-rose-400 text-sm font-mono font-bold">
          <Film className="w-5 h-5" />
          <span>VIDEO DIRECTIVE STANDARD & SYNTAX</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          In generative video prompting, specifying exact lens focal lengths (e.g., 35mm anamorphic), camera trajectories (orbital, dolly push, low tracking), and physical light sources produces significantly more cohesive frame-to-frame temporal stability.
        </p>
      </div>
    </div>
  );
};
