import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowDownToLine, Menu, X, Orbit } from 'lucide-react';
import logoImg from '../../assets/img/logo.png';

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
      className={`position-fixed top-0 start-0 end-0 z-3 transition-all ${
        scrolled
          ? 'bg-white bg-opacity-95 border-bottom border-secondary-subtle py-3 shadow-sm'
          : 'bg-transparent py-4'
      }`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="d-flex align-items-center gap-3 cursor-pointer"
          style={{ cursor: 'pointer' }}
          id="nav-logo"
        >
          <img 
            src={logoImg} 
            alt="Orbit Post Logo" 
            width="40"
            height="40"
            className="img-fluid"
            style={{ width: '40px', height: '40px' }}
          />
          <div>
            <span className="font-display fw-bold fs-5 text-dark">
              Orbit <span className="text-orbit-accent fw-normal fs-6">Post</span>
            </span>
            <div className="text-uppercase font-mono text-purple small" style={{ fontSize: '9px', letterSpacing: '0.1em', marginTop: '-3px' }}>
              v1.4 - SECURE
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="d-none d-md-flex align-items-center gap-4" id="nav-desktop-menu">
          <button
            onClick={() => scrollToSection('features')}
            className="btn btn-link text-decoration-none text-secondary hover-text-primary fw-semibold py-0"
            style={{ cursor: 'pointer' }}
          >
            Fonctionnalités
          </button>
          <button
            onClick={() => scrollToSection('why-orbit')}
            className="btn btn-link text-decoration-none text-secondary hover-text-primary fw-semibold py-0"
            style={{ cursor: 'pointer' }}
          >
            Pourquoi Orbit
          </button>
          <button
            onClick={() => scrollToSection('simulator')}
            className="btn btn-link text-decoration-none text-secondary hover-text-primary fw-semibold py-0"
            style={{ cursor: 'pointer' }}
          >
            Démo Interactive
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="btn btn-link text-decoration-none text-secondary hover-text-primary fw-semibold py-0"
            style={{ cursor: 'pointer' }}
          >
            Concepteur
          </button>
        </nav>

        {/* Action Button */}
        <div className="d-none d-md-flex align-items-center">
          <button
            onClick={onDownloadClick}
            className="btn btn-orbit-gradient rounded-pill px-4 py-2 text-xs font-mono fw-semibold d-flex align-items-center gap-2"
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span className="text-uppercase tracking-wider">Installer APK</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn btn-link text-secondary p-2 d-md-none border-0 shadow-none"
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
            className="d-md-none border-bottom border-secondary-subtle bg-white bg-opacity-95"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <div className="p-4 d-flex flex-column gap-3">
              <button
                onClick={() => scrollToSection('features')}
                className="btn btn-link text-decoration-none text-dark fw-semibold text-start py-2"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection('why-orbit')}
                className="btn btn-link text-decoration-none text-dark fw-semibold text-start py-2"
              >
                Pourquoi Orbit
              </button>
              <button
                onClick={() => scrollToSection('simulator')}
                className="btn btn-link text-decoration-none text-dark fw-semibold text-start py-2"
              >
                Démo Interactive
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="btn btn-link text-decoration-none text-dark fw-semibold text-start py-2"
              >
                Concepteur
              </button>
              <hr className="my-1 text-secondary opacity-25" />
              <button
                onClick={onDownloadClick}
                className="btn btn-orbit-gradient w-100 py-3 rounded-3 fw-bold text-sm d-flex align-items-center justify-content-center gap-2"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span className="text-uppercase">Télécharger l'APK (Expo)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
