import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowDownToLine, Menu, X, Orbit } from 'lucide-react';

interface NavbarProps {
  onDownloadClick?: () => void;
}

export default function Navbar({ onDownloadClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 border-b border-slate-200 backdrop-blur-md shadow-md/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-tr from-orbit-primary to-orbit-accent shadow-md shadow-indigo-100">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-[-4px] rounded-full border border-dashed border-orbit-accent/40 group-hover:border-orbit-glow/80"
            />
            <Orbit className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-800 group-hover:text-orbit-primary transition-all">
              Orbit <span className="text-orbit-accent font-medium text-lg">Post</span>
            </span>
            <div className="text-[9px] font-mono tracking-widest text-[#a855f7]/85 uppercase -mt-1 scale-90 origin-left">
              v1.4 - SECURE
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8" id="nav-desktop-menu">
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium text-slate-600 hover:text-orbit-primary transition-colors cursor-pointer"
          >
            Fonctionnalités
          </button>
          <button
            onClick={() => scrollToSection('why-orbit')}
            className="text-sm font-medium text-slate-600 hover:text-orbit-primary transition-colors cursor-pointer"
          >
            Pourquoi Orbit
          </button>
          <button
            onClick={() => scrollToSection('simulator')}
            className="text-sm font-medium text-slate-600 hover:text-orbit-primary transition-colors cursor-pointer"
          >
            Démo Interactive
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-slate-600 hover:text-orbit-primary transition-colors cursor-pointer"
          >
            Concepteur
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onDownloadClick}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold font-mono text-white bg-linear-to-r from-orbit-primary to-orbit-accent overflow-hidden group shadow-[0_4px_20px_rgba(99,102,241,0.2)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.35)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <div className="absolute inset-0 bg-linear-to-r from-orbit-accent to-orbit-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ArrowDownToLine className="w-4 h-4 relative z-10 animate-bounce group-hover:animate-none" />
            <span className="relative z-10 uppercase tracking-wider">Installer APK</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <button
                onClick={() => scrollToSection('features')}
                className="text-base font-medium text-slate-700 hover:text-slate-900 text-left py-2"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection('why-orbit')}
                className="text-base font-medium text-slate-700 hover:text-slate-900 text-left py-2"
              >
                Pourquoi Orbit
              </button>
              <button
                onClick={() => scrollToSection('simulator')}
                className="text-base font-medium text-slate-700 hover:text-slate-900 text-left py-2"
              >
                Démo Interactive
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-base font-medium text-slate-700 hover:text-slate-900 text-left py-2"
              >
                Concepteur
              </button>
              <div className="h-px bg-slate-100 my-1" />
              <button
                onClick={onDownloadClick}
                className="w-full text-center py-3 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-orbit-primary to-orbit-accent flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 cursor-pointer border-none"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>TÉLÉCHARGER L'APK (EXPO)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
