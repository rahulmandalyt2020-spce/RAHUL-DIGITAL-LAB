import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRouter } from '../../context/RouterContext.tsx';
import { Logo } from '../common/Logo.tsx';
import { Button } from '../common/Button.tsx';

export const LoginModal: React.FC = () => {
  const { isLoginOpen, setIsLoginOpen, showToast } = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!isLoginOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLoginOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLoginOpen, setIsLoginOpen]);

  if (!isLoginOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Login Portal: User authentication will be connected in next phase');
    setIsLoginOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => setIsLoginOpen(false)}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-md bg-[#090e1d] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)] z-10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsLoginOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-slate-900/80 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <Logo size="sm" showTagline={false} />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 mt-4 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>STUDIO PORTAL • PREVIEW</span>
          </div>
          <h3 className="text-xl font-display font-bold text-white">
            Creator & Member Login
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Access your saved prompts, private project repositories, and app licenses.
          </p>
        </div>

        {/* Demo Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
              EMAIL ADDRESS
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="creator@rahuldigitallab.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#060913] border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
              SECURITY KEY / PASSWORD
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#060913] border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 outline-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Sign In to Lab
            </Button>
          </div>
        </form>

        <div className="mt-6 pt-5 border-t border-slate-800/80 text-center">
          <p className="text-[11px] text-slate-500">
            Authentication backend will connect seamlessly via the cloud portal.
          </p>
        </div>
      </div>
    </div>
  );
};
