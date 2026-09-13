import React, { useEffect } from 'react';
import { Search, X, LogIn, ChevronRight } from 'lucide-react';
import { NAV_ITEMS, LAB_BRAND } from '../../data/labData.ts';
import { useRouter } from '../../context/RouterContext.tsx';
import { RoutePath } from '../../types/index.ts';
import { Logo } from '../common/Logo.tsx';

export const MobileMenu: React.FC = () => {
  const {
    currentPath,
    navigate,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setIsSearchOpen,
    setIsLoginOpen,
  } = useRouter();

  // Prevent background scrolling and support Escape key while open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  if (!isMobileMenuOpen) return null;

  const handleNavigate = (path: RoutePath) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <div
      className="fixed inset-0 z-50 xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 right-0 w-[88vw] max-w-xs sm:max-w-sm bg-[#060913] border-l border-slate-800/90 shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto z-10">
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-800">
            <Logo size="sm" showTagline={false} onClick={() => handleNavigate('/')} />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="w-9 h-9 rounded-lg bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions (Search & Login) */}
          <div className="grid grid-cols-2 gap-2.5 mt-5 mb-6">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0b1020] border border-slate-800 text-slate-300 text-xs font-semibold hover:border-cyan-500/40 cursor-pointer transition-colors"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Search Lab</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsLoginOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold border border-cyan-400/40 shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer transition-all"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/20 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <span className="tracking-wide">{item.name}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 space-y-1">
          <p className="font-mono text-cyan-400/80">{LAB_BRAND.tagline}</p>
          <p>{LAB_BRAND.copyright}</p>
        </div>
      </div>
    </div>
  );
};
