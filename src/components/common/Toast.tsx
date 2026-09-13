import React from 'react';
import { CheckCircle, Info } from 'lucide-react';
import { useRouter } from '../../context/RouterContext.tsx';

export const Toast: React.FC = () => {
  const { toast } = useRouter();

  if (!toast.visible) return null;

  const isCopied = toast.message.includes('COPIED') || toast.message.includes('Copied');

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-none">
      <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#090e1d] border border-cyan-500/40 text-white shadow-[0_0_30px_rgba(6,182,212,0.25)] backdrop-blur-xl">
        {isCopied ? (
          <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-400/40 flex-shrink-0">
            <CheckCircle className="w-4 h-4" />
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-400/40 flex-shrink-0">
            <Info className="w-4 h-4" />
          </div>
        )}
        <div className="text-sm font-semibold tracking-wide font-mono text-cyan-200">
          {toast.message}
        </div>
      </div>
    </div>
  );
};
