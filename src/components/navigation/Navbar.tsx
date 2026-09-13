import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Logo } from '../common/Logo.tsx';
import { NAV_ITEMS } from '../../data/labData.ts';
import { useRouter } from '../../context/RouterContext.tsx';
import { RoutePath } from '../../types/index.ts';

export const Navbar: React.FC = () => {
  const {
    currentPath,
    navigate,
    setIsSearchOpen,
    setIsLoginOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  } = useRouter();

  const handleNavClick = (path: RoutePath) => {
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#05070d]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Monogram & Name */}
        <Logo onClick={() => handleNavClick('/')} size="md" />

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#090e1b]/70 p-1.5 rounded-full border border-slate-800/60 shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Search + Login (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search the lab"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0a0f1d] hover:bg-[#12192d] text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer shadow-sm"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Login Button matching the reference screenshot */}
          <button
            onClick={() => setIsLoginOpen(true)}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-[0_0_20px_-2px_rgba(37,99,235,0.6)] hover:shadow-[0_0_28px_rgba(6,182,212,0.8)] border border-cyan-400/40 transition-all duration-200 cursor-pointer"
          >
            Login
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-[#0a0f1d] text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
