import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Sparkles,
  Camera,
  Compass,
  Sun,
  Volume2,
  MessageSquare,
  Eye,
  Sliders,
  Users,
  ShieldCheck,
  Clapperboard,
  Film,
} from 'lucide-react';
import { PromptItem, VideoPromptItem } from '../../types/index.ts';
import { Badge } from '../common/Badge.tsx';
import { Button } from '../common/Button.tsx';
import { SafeImage } from '../common/SafeImage.tsx';
import { copyToClipboard } from '../../utils/clipboard.ts';

interface PromptDetailModalProps {
  prompt: PromptItem | VideoPromptItem;
  onClose: () => void;
  onCopySuccess?: (msg: string) => void;
}

export const PromptDetailModal: React.FC<PromptDetailModalProps> = ({
  prompt,
  onClose,
  onCopySuccess,
}) => {
  const [copied, setCopied] = useState(false);

  // Compute primary text to copy
  const copyContent =
    prompt.promptText ||
    ('cinematicDescription' in prompt ? prompt.cinematicDescription : '') ||
    prompt.description ||
    '';

  const handleCopy = async () => {
    const success = await copyToClipboard(copyContent);
    if (success) {
      setCopied(true);
      if (onCopySuccess) {
        onCopySuccess('Copied ✓ Full prompt saved to clipboard');
      }
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const isVideoPrompt = 'recommendedEngines' in prompt || 'cameraMovement' in prompt;
  const videoItem = isVideoPrompt ? (prompt as VideoPromptItem) : null;
  const promptItem = !isVideoPrompt ? (prompt as PromptItem) : null;

  const referenceImg = prompt.referenceImage || prompt.previewImage;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Prompt details: ${prompt.title}`}
    >
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#070b15] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.25)] z-10 flex flex-col">
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 bg-[#090e1d] border-b border-slate-800/90 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="purple" size="sm">
              {prompt.category || 'AI Prompt'}
            </Badge>
            {prompt.subcategory && (
              <Badge variant="cyan" size="sm">
                {prompt.subcategory}
              </Badge>
            )}
            {prompt.aspectRatio && (
              <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800">
                Aspect: {prompt.aspectRatio}
              </span>
            )}
            {videoItem?.duration && (
              <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800">
                Duration: {videoItem.duration}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-black text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center cursor-pointer transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
          {/* Title & Overview */}
          <div>
            <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase block mb-1">
              PROMPT SPECIFICATION & ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {prompt.title}
            </h2>
            <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
              {prompt.description || prompt.shortDescription}
            </p>
          </div>

          {/* Reference Image Preview (if present) */}
          {referenceImg && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  Reference Asset Preview
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Approved Lab Visual Reference
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#050811] shadow-lg max-h-[380px] flex items-center justify-center">
                <SafeImage
                  src={referenceImg}
                  alt={prompt.title}
                  fallbackTitle={prompt.title}
                  fallbackCategory={prompt.category}
                  className="w-full h-full max-h-[380px] object-contain"
                />
              </div>
            </div>
          )}

          {/* Core Full Prompt Box */}
          <div className="p-5 rounded-2xl bg-[#050811] border border-cyan-500/30 space-y-3 relative group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-purple-400 font-bold tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                FULL GENERATIVE PROMPT
              </span>
              <button
                onClick={handleCopy}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold font-mono transition-all cursor-pointer ${
                  copied
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400'
                    : 'bg-[#10172c] hover:bg-[#1a2444] text-slate-200 border border-slate-800'
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
            <p className="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed select-all bg-[#080d1a] p-4 rounded-xl border border-slate-800/80">
              &ldquo;{copyContent}&rdquo;
            </p>
          </div>

          {/* Use Case (For Character Setup / General Prompts) */}
          {prompt.useCase && (
            <div className="p-4 rounded-2xl bg-[#090e1c] border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider block">
                RECOMMENDED USE CASES
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {prompt.useCase}
              </p>
            </div>
          )}

          {/* Detailed Video Prompt Breakdown Directives */}
          {videoItem && (
            <div className="space-y-4 pt-2">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider block">
                CINEMATIC DIRECTIVES & PRODUCTION BREAKDOWN
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {videoItem.backgroundLocation && (
                  <div className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 text-xs space-y-1">
                    <span className="text-slate-400 font-mono uppercase font-bold block">
                      Background & Location
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {videoItem.backgroundLocation}
                    </p>
                  </div>
                )}

                {videoItem.modelStyling && (
                  <div className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 text-xs space-y-1">
                    <span className="text-slate-400 font-mono uppercase font-bold block">
                      Model & Styling Continuity
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {videoItem.modelStyling}
                    </p>
                  </div>
                )}

                {videoItem.camera && (
                  <div className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 text-xs space-y-1">
                    <span className="text-slate-400 font-mono uppercase font-bold block flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-cyan-400" />
                      Camera & Framing
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {videoItem.camera}
                    </p>
                  </div>
                )}

                {videoItem.lighting && (
                  <div className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 text-xs space-y-1">
                    <span className="text-slate-400 font-mono uppercase font-bold block flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      Lighting Specification
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {videoItem.lighting}
                    </p>
                  </div>
                )}

                {videoItem.performance && (
                  <div className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 text-xs space-y-1">
                    <span className="text-slate-400 font-mono uppercase font-bold block">
                      Performance & Action
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {videoItem.performance}
                    </p>
                  </div>
                )}

                {videoItem.audioTone && (
                  <div className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 text-xs space-y-1">
                    <span className="text-slate-400 font-mono uppercase font-bold block flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-purple-400" />
                      Audio Tone & Atmosphere
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {videoItem.audioTone}
                    </p>
                  </div>
                )}
              </div>

              {/* Dialogue Box */}
              {videoItem.dialogue && (
                <div className="p-4 rounded-xl bg-[#060913] border border-cyan-500/30 flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <span className="font-mono text-cyan-400 font-bold uppercase block">
                      Voiceover / Dialogue Track
                    </span>
                    <p className="text-slate-200 italic font-mono">
                      &ldquo;{videoItem.dialogue}&rdquo;
                    </p>
                  </div>
                </div>
              )}

              {videoItem.visualQuality && (
                <div className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 text-xs space-y-1">
                  <span className="text-slate-400 font-mono uppercase font-bold block">
                    Visual Quality Benchmarks
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {videoItem.visualQuality}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Model Flexibility Rule Notice */}
          {prompt.modelFlexibilityRule && (
            <div className="p-5 rounded-2xl bg-[#0a1126] border border-indigo-500/40 space-y-2.5">
              <div className="flex items-center gap-2 text-indigo-300 text-xs font-mono font-bold">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>MODEL FLEXIBILITY & CASTING RULE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {prompt.modelFlexibilityRule}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px] font-mono">
                <div className="p-2.5 rounded-lg bg-[#060913] border border-indigo-500/20 text-slate-300">
                  <span className="text-cyan-400 font-bold block mb-0.5">Option A • Model Replacement</span>
                  Replace male model with adult female model while keeping exact scene, lighting, camera direction & action.
                </div>
                <div className="p-2.5 rounded-lg bg-[#060913] border border-indigo-500/20 text-slate-300">
                  <span className="text-purple-400 font-bold block mb-0.5">Option B • Two-Person Composition</span>
                  Add adult female model beside male model when concept benefits from dual-character framing.
                </div>
              </div>
            </div>
          )}

          {/* Tags & Recommended Engines */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-slate-500 font-mono uppercase block mb-1.5 text-[10px]">
                  RECOMMENDED MODELS & ENGINES
                </span>
                <span className="text-cyan-300 font-mono font-semibold">
                  {prompt.recommendedModel ||
                    videoItem?.recommendedEngines.join(' • ') ||
                    'Midjourney • FLUX • Runway Gen-3'}
                </span>
              </div>
              <div>
                <span className="text-slate-500 font-mono uppercase block mb-1.5 text-[10px]">
                  CATEGORY CLASSIFICATION
                </span>
                <span className="text-slate-200 font-mono">
                  {prompt.category} {prompt.subcategory ? `• ${prompt.subcategory}` : ''}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {prompt.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-[#0d1428] text-slate-400 border border-slate-800 font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 sm:p-6 bg-[#060914] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-500">
            Rahul Digital Lab • AI Prompt Repository
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleCopy}
              className="w-full sm:w-auto"
              icon={
                copied ? (
                  <Check className="w-4 h-4 text-cyan-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )
              }
            >
              {copied ? 'Copied ✓' : 'Copy Prompt'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
