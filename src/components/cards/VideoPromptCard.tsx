import React, { useState } from 'react';
import { Copy, Check, Video, Clapperboard, Compass, Sun, Clock, UserCheck, Eye } from 'lucide-react';
import { VideoPromptItem } from '../../types/index.ts';
import { Badge } from '../common/Badge.tsx';
import { SafeImage } from '../common/SafeImage.tsx';
import { useRouter } from '../../context/RouterContext.tsx';
import { copyToClipboard } from '../../utils/clipboard.ts';

interface VideoPromptCardProps {
  prompt: VideoPromptItem;
}

export const VideoPromptCard: React.FC<VideoPromptCardProps> = ({ prompt }) => {
  const { showToast, openModal } = useRouter();
  const [copied, setCopied] = useState(false);

  const fullPromptText =
    prompt.promptText ||
    `${prompt.cinematicDescription} --camera: ${prompt.cameraMovement} --lens: ${prompt.cameraDirection} --lighting: ${prompt.lighting} --environment: ${prompt.environment}`;

  const handleCopy = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const success = await copyToClipboard(fullPromptText);
    if (success) {
      setCopied(true);
      showToast('Copied ✓ Video motion directive saved to clipboard');
      setTimeout(() => setCopied(false), 2200);
    } else {
      showToast('Copy failed. Please manually select the prompt text.');
    }
  };

  const handleOpenDetail = () => {
    openModal('video-prompt', prompt);
  };

  const referenceImg = prompt.referenceImage || prompt.previewImage;

  return (
    <div
      onClick={handleOpenDetail}
      className="flex flex-col justify-between p-6 rounded-2xl bg-[#090e1c] border border-slate-800/80 hover:border-rose-500/40 transition-all duration-300 shadow-xl group hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.18)] cursor-pointer"
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider block">
                {prompt.category}
              </span>
              {prompt.subcategory && (
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-800/60">
                  {prompt.subcategory}
                </span>
              )}
            </div>
            <h3 className="text-lg font-display font-extrabold text-white group-hover:text-rose-300 transition-colors">
              {prompt.title}
            </h3>
          </div>
          <div className="flex gap-1.5">
            <Badge variant="purple" size="sm">
              {prompt.aspectRatio}
            </Badge>
            <Badge variant="slate" size="sm">
              {prompt.duration}
            </Badge>
          </div>
        </div>

        {/* Reference Image Thumbnail if available */}
        {referenceImg && (
          <div className="relative rounded-xl overflow-hidden border border-slate-800/90 bg-[#050811] h-40 w-full flex items-center justify-center group-hover:border-rose-500/40 transition-colors">
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

        {/* Cinematic Description */}
        <p className="text-sm text-slate-200 leading-relaxed font-sans line-clamp-3">
          {prompt.cinematicDescription || prompt.description}
        </p>

        {/* Detailed Cinematic Directives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 rounded-xl bg-[#050811] border border-slate-800/80 text-xs">
          <div className="flex items-start gap-2 text-slate-300">
            <Compass className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block text-[10px] font-mono uppercase">
                Camera Movement
              </span>
              <span className="line-clamp-2">{prompt.cameraMovement}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-slate-300">
            <Clapperboard className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block text-[10px] font-mono uppercase">
                Lens & Framing
              </span>
              <span className="line-clamp-2">{prompt.cameraDirection || prompt.camera || 'Cinematic'}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-slate-300">
            <Sun className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block text-[10px] font-mono uppercase">
                Lighting Atmosphere
              </span>
              <span className="line-clamp-2">{prompt.lighting}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-slate-300">
            <UserCheck className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block text-[10px] font-mono uppercase">
                Action / Pacing
              </span>
              <span className="line-clamp-2">{prompt.actionPacing || prompt.performance || 'Natural'}</span>
            </div>
          </div>
        </div>

        {/* Environmental Setting */}
        {prompt.environment && (
          <div className="text-xs text-slate-400">
            <span className="text-slate-500 font-mono text-[10px] uppercase block">
              Environment & Set
            </span>
            <span className="text-slate-300 line-clamp-1">{prompt.environment}</span>
          </div>
        )}

        {/* Target Engine Models */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {prompt.recommendedEngines.map((engine) => (
            <span
              key={engine}
              className="text-[10px] px-2 py-0.5 rounded-md bg-[#12192f] text-cyan-300 border border-slate-800"
            >
              {engine}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOpenDetail();
          }}
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Full Directives</span>
        </button>

        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 cursor-pointer ${
            copied
              ? 'bg-rose-500/20 text-rose-300 border border-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.4)]'
              : 'bg-[#121729] hover:bg-[#1a233e] text-slate-200 hover:text-white border border-slate-800 hover:border-rose-500/50'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-rose-400" />
              <span>COPIED ✓</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-rose-400" />
              <span>Copy Video Prompt</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
