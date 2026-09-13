import React from 'react';
import { Youtube, Instagram, Facebook, Twitter, Pin, Heart } from 'lucide-react';
import { Logo } from '../common/Logo.tsx';
import { LAB_BRAND, NAV_ITEMS } from '../../data/labData.ts';
import { useRouter } from '../../context/RouterContext.tsx';
import { RoutePath } from '../../types/index.ts';

export const Footer: React.FC = () => {
  const { navigate, showToast } = useRouter();

  const handleNavClick = (path: RoutePath) => {
    navigate(path);
  };

  const handleSocialClick = (name: string) => {
    showToast(`${name} channel link will be connected soon`);
  };

  return (
    <footer className="w-full bg-[#030509] border-t border-slate-900/90 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/60">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Logo size="md" onClick={() => handleNavClick('/')} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSocialClick('YouTube')}
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-[#080d1a] hover:bg-red-950/40 text-slate-400 hover:text-red-400 border border-slate-800 hover:border-red-500/40 flex items-center justify-center transition-all cursor-pointer"
            >
              <Youtube className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleSocialClick('Instagram')}
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#080d1a] hover:bg-pink-950/40 text-slate-400 hover:text-pink-400 border border-slate-800 hover:border-pink-500/40 flex items-center justify-center transition-all cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleSocialClick('Facebook')}
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-[#080d1a] hover:bg-blue-950/40 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-blue-500/40 flex items-center justify-center transition-all cursor-pointer"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleSocialClick('X (Twitter)')}
              aria-label="X"
              className="w-9 h-9 rounded-full bg-[#080d1a] hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 flex items-center justify-center transition-all cursor-pointer"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleSocialClick('Pinterest')}
              aria-label="Pinterest"
              className="w-9 h-9 rounded-full bg-[#080d1a] hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-500/40 flex items-center justify-center transition-all cursor-pointer"
            >
              <Pin className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>{LAB_BRAND.copyright}</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>for a Smarter, More Creative World.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
