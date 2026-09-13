import React, { useState } from 'react';
import { Search, FileText, Download, ShieldAlert, FolderOpen } from 'lucide-react';
import { DOCUMENTS_DATA } from '../data/labData.ts';
import { DocumentCard } from '../components/cards/DocumentCard.tsx';
import { Badge } from '../components/common/Badge.tsx';

export const DocumentsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Developer Guides', 'Prompt Specs', 'Design Specs', 'PDFs', 'Templates'];

  const filteredDocuments = DOCUMENTS_DATA.filter((doc) => {
    const catLower = selectedCategory.toLowerCase();
    const matchesCategory =
      selectedCategory === 'All' ||
      (catLower === 'developer guides' && doc.category.toLowerCase().includes('guide')) ||
      (catLower === 'prompt specs' && (doc.category.toLowerCase().includes('prompt') || doc.fileName.toLowerCase().includes('prompt'))) ||
      (catLower === 'design specs' && doc.category.toLowerCase().includes('design')) ||
      (catLower === 'pdfs' && doc.type === 'PDF') ||
      (catLower === 'templates' && (doc.category.toLowerCase().includes('template') || doc.type === 'TXT' || doc.type === 'ZIP')) ||
      doc.category.toLowerCase().includes(catLower);

    const matchesSearch =
      doc.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <Badge variant="blue" size="md" className="mb-3">
          KNOWLEDGE & ARTIFACTS
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Documents & Resources
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
          Curated whitepapers, architectural blueprints, prompt syntax cheatsheets, and offline developer documentation ready for review and local reference.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#080d1a] border border-slate-800 mb-10 shadow-lg">
        {/* Categories */}
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

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#060913] border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-blue-500/80 outline-none"
          />
        </div>
      </div>

      {/* Documents Grid */}
      {filteredDocuments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-3xl bg-[#090e1c] border border-slate-800 p-8">
          <FolderOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No documents matched</h3>
          <p className="text-xs text-slate-400 mb-4 max-w-sm mx-auto">
            Try resetting your search query or selecting another document category.
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

      {/* Distribution Protocol Note */}
      <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#090e1d] border border-slate-800 flex items-start gap-4">
        <FolderOpen className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
        <div className="space-y-1">
          <h4 className="text-sm font-display font-bold text-white">
            Lab Resource Distribution Integrity
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            All documents and technical specifications in the directory undergo checksum validation before publication. In upcoming releases, direct cloud drive syncing and real-time offline caching will be available.
          </p>
        </div>
      </div>
    </div>
  );
};
