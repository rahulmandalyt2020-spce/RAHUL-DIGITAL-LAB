import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, Filter, Upload } from 'lucide-react';
import { CREATIONS_DATA } from '../data/labData.ts';
import { CreationCard } from '../components/cards/CreationCard.tsx';
import { Badge } from '../components/common/Badge.tsx';
import { Button } from '../components/common/Button.tsx';
import { useRouter } from '../context/RouterContext.tsx';

export const CreationsPage: React.FC = () => {
  const { showToast } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Portraits', 'Landscape', 'Product', 'Architecture', 'Concept Art'];

  const filteredCreations = CREATIONS_DATA.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
        <div className="max-w-3xl">
          <Badge variant="cyan" size="md" className="mb-3">
            SYNTHETIC AESTHETICS
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Creative Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            High-fidelity generative visual artworks, cinematic concepts, and digital renders crafted with modern diffusion and transformer architectures.
          </p>
        </div>

        {/* Future Upload Preparation Button */}
        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            showToast('Creator Cloud Upload: Secure media intake pipeline will be enabled in future phase')
          }
          icon={<Upload className="w-4 h-4 text-cyan-400" />}
        >
          Submit Artwork (Coming Soon)
        </Button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 p-3.5 rounded-2xl bg-[#080d1a] border border-slate-800 mb-10 shadow-lg">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-[#0e1424] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filteredCreations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCreations.map((item) => (
            <CreationCard key={item.id} creation={item} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-3xl bg-[#090e1c] border border-slate-800 p-8">
          <ImageIcon className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No artworks found in this category</h3>
          <p className="text-xs text-slate-400 mb-4 max-w-sm mx-auto">
            Choose a different category or view all creative renders.
          </p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold hover:bg-cyan-500/30 transition-colors"
          >
            Show All Artworks
          </button>
        </div>
      )}

      {/* Curatorial Note */}
      <div className="mt-16 p-8 rounded-3xl bg-[#090e1d] border border-slate-800 text-center max-w-2xl mx-auto space-y-2">
        <Sparkles className="w-6 h-6 text-cyan-400 mx-auto" />
        <h3 className="text-lg font-display font-bold text-white">
          Prompt Engineering & Model Lineage
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Every artwork generated in the lab undergoes precision seed refinement, custom negative prompting, and latent upscaling. Click any creation card to inspect its exact generative parameter structure.
        </p>
      </div>
    </div>
  );
};
