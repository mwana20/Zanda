import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-red-100 shadow-lg shadow-red-100/60 py-3.5'
            : 'bg-gradient-to-b from-white/90 via-white/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md transition-transform hover:scale-[1.01]"
              aria-label="Zanda Painting Home"
            >
              <Logo size="md" variant="light" />
            </button>

            {/* Desktop Navigation Links - Anti-slop zero pill typography */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`relative text-xs tracking-widest font-semibold transition-colors duration-200 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-orange-500 to-sky-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA & Quick Call */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-medium transition-colors"
                title="Call Zanda Painting Kampala"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="tabular-nums font-mono">{COMPANY_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={() => handleLinkClick('contact')}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-red-500 to-rose-500 hover:from-red-500 hover:via-red-400 hover:to-rose-400 rounded-md shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => handleLinkClick('contact')}
                className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-500 rounded-md shadow-sm"
              >
                Quote
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-slate-950/98 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 border-b border-slate-800 pb-2">
              Menu Navigation
            </div>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex items-center justify-between text-left text-lg font-bold py-3 px-3 rounded-lg transition-colors ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-orange-500/20 to-transparent border-l-4 border-amber-400'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-4">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-orange-500 to-sky-400 shadow-xl"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </button>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 font-mono">
              <span>{COMPANY_INFO.location}</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-amber-400 font-bold hover:underline">
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
