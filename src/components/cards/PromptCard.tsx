import React, { useState } from 'react';
import { Copy, Check, Sparkles, Tag, Layers, Eye, ExternalLink } from 'lucide-react';
import { PromptItem } from '../../types/index.ts';
import { Badge } from '../common/Badge.tsx';
import { SafeImage } from '../common/SafeImage.tsx';
import { useRouter } from '../../context/RouterContext.tsx';
import { copyToClipboard } from '../../utils/clipboard.ts';

interface PromptCardProps {
  prompt: PromptItem;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const { showToast, openModal } = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const success = await copyToClipboard(prompt.promptText);
    if (success) {
      setCopied(true);
      showToast('Copied ✓ Prompt text saved to clipboard');
      setTimeout(() => setCopied(false), 2200);
    } else {
      showToast('Copy failed. Please manually select the prompt text.');
    }
  };

  const handleOpenDetail = () => {
    openModal('prompt', prompt);
  };

  const referenceImg = prompt.referenceImage || prompt.previewImage;

  return (
    <div
      onClick={handleOpenDetail}
      className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#090e1c] border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 shadow-xl group hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.18)] cursor-pointer"
    >
      <div className="space-y-3.5">
        {/* Header: Title and Category Badge */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 mb-1">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">
                {prompt.category}
              </span>
              {prompt.subcategory && (
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-800/60">
                  {prompt.subcategory}
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-purple-300 transition-colors">
              {prompt.title}
            </h3>
          </div>
          {prompt.recommendedModel && (
            <Badge variant="purple" size="sm">
              {prompt.recommendedModel.split('/')[0].trim()}
            </Badge>
          )}
        </div>

        {/* Reference Image Thumbnail if available */}
        {referenceImg && (
          <div className="relative rounded-xl overflow-hidden border border-slate-800/90 bg-[#050811] h-36 w-full flex items-center justify-center group-hover:border-purple-500/40 transition-colors">
            <SafeImage
              src={referenceImg}
              alt={prompt.title}
              fallbackTitle={prompt.title}
              fallbackCategory={prompt.category}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 right-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>Reference Asset</span>
            </div>
          </div>
        )}

        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
          {prompt.shortDescription}
        </p>

        {/* Prompt Text Box */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative p-3.5 rounded-xl bg-[#050811] border border-slate-800/90 text-xs font-mono text-slate-300/90 leading-relaxed group-hover:border-slate-700 transition-colors"
        >
          <p className="line-clamp-3 select-all">&ldquo;{prompt.promptText}&rdquo;</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {prompt.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-md bg-[#10162a] text-slate-400 border border-slate-800"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Copy Action Button and View Details */}
      <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOpenDetail();
          }}
          className="text-[11px] text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Details</span>
        </button>

        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all duration-200 cursor-pointer ${
            copied
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
              : 'bg-[#10172c] hover:bg-[#1a2444] text-slate-200 hover:text-white border border-slate-800 hover:border-purple-500/50'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-cyan-400" />
              <span>COPIED ✓</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-purple-400" />
              <span>Copy Prompt</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
