import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyOrbit from './components/WhyOrbit';
import PhoneSimulator from './components/PhoneSimulator';
import AboutSection from './components/AboutSection';
import DownloadSection from './components/DownloadSection';
import TimerModal from './components/TimerModal';
import { 
  Orbit, ArrowDownToLine, MessageSquare, Shield, Zap, Sparkles, 
  ChevronRight, Smartphone, Eye, Heart, Database, Send, Radio
} from 'lucide-react';

export default function App() {
  // Syncs the active layout state of the Interactive Phone Simulator
  // 'feed' | 'messenger' | 'videoplus' | 'studio'
  const [simulatorActiveTab, setSimulatorActiveTab] = useState<string>('feed');
  
  // Timer modal state for download button
  const [showTimer, setShowTimer] = useState(false);

  // Interactive handler from landing page sections or Bento Grid
  const handleSelectFeatureFromGrid = (featureId: string) => {
    switch (featureId) {
      case 'studio':
      case 'boost':
        setSimulatorActiveTab('studio');
        break;
      case 'messenger':
        setSimulatorActiveTab('messenger');
        break;
      case 'videoplus':
        setSimulatorActiveTab('videoplus');
        break;
      case 'translation':
        setSimulatorActiveTab('feed'); // auto translation is embedded in the feed header / cards
        break;
      default:
        setSimulatorActiveTab('feed');
    }

    // Scroll smoothly to simulator section once clicked to see the action!
    const simulatorElement = document.getElementById('simulator');
    if (simulatorElement) {
      simulatorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadClick = () => {
    setShowTimer(true);
  };

  return (
    <div className="min-h-screen relative bg-slate-50 text-slate-800 selection:bg-orbit-accent selection:text-white antialiased">
      {/* Dynamic ambient grid overlay wrapping the entire ecosystem */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),_linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Global Header */}
      <Navbar onDownloadClick={handleDownloadClick} />

      {/* Main launch space */}
      <main className="relative">
        
        {/* Elite hero canvas */}
        <Hero onExploreDemo={() => scrollToSection('simulator')} onDownloadClick={handleDownloadClick} />

        {/* Feature sets (Bento Grid) linked to Simulator */}
        <Features 
          onSelectFeature={handleSelectFeatureFromGrid} 
          activeFeatureInSimulator={
            simulatorActiveTab === 'studio' ? 'studio' :
            simulatorActiveTab === 'messenger' ? 'messenger' : 
            simulatorActiveTab === 'videoplus' ? 'videoplus' : 'translation'
          }
        />

        {/* INTERACTIVE SIMULATOR SECTION - DUAL PRESENTATION PANEL */}
        <section id="simulator" className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-orbit-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Interactive Playground controls explaining sandbox actions */}
              <div className="lg:col-span-6 space-y-8" id="sandbox-instructions-panel">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-orbit-accent/15 border border-indigo-200 text-orbit-accent">
                    <Radio className="w-3.5 h-3.5 animate-pulse text-orbit-accent" />
                    BAC À SABLE LIVE INTERACTIF
                  </span>
                  
                  <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-850 tracking-tight leading-none">
                    Faites l'expérience d'Orbit.
                  </h2>
                  <p className="text-slate-650 font-light text-base sm:text-lg leading-relaxed">
                    Cliquez sur les contrôleurs ci-dessous pour changer le canal ou essayez directement d'interagir avec l'application simulée sur la droite.
                  </p>
                </div>

                {/* Simulated action switchers list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Option 1: Live Feed */}
                  <button
                    onClick={() => setSimulatorActiveTab('feed')}
                    className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                      simulatorActiveTab === 'feed'
                        ? 'bg-white border-orbit-primary shadow-[0_4px_20px_rgba(99,102,241,0.06)] text-slate-800'
                        : 'bg-white/50 border-slate-200 hover:border-slate-350 text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-mono font-bold tracking-widest text-orbit-accent uppercase">Étape 01</span>
                      <Orbit className="w-4 h-4 text-orbit-accent" />
                    </div>
                    <h4 className="font-display font-medium text-sm">Traduire le Flux Direct</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Changez les langues (FR/EN/ES) dans l’en-tête pour tester la traduction automatique.</p>
                  </button>

                  {/* Option 2: Messenger */}
                  <button
                    onClick={() => setSimulatorActiveTab('messenger')}
                    className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                      simulatorActiveTab === 'messenger'
                        ? 'bg-white border-orbit-primary shadow-[0_4px_20px_rgba(99,102,241,0.06)] text-slate-800'
                        : 'bg-white/50 border-slate-200 hover:border-slate-350 text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-mono font-bold tracking-widest text-orbit-accent uppercase">Étape 02</span>
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="font-display font-medium text-sm">Vérifier le Chiffrement</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Ouvrez le chat crypté, écrivez un message et observez le handshake Diffie-Hellman.</p>
                  </button>

                  {/* Option 3: Offline mode */}
                  <button
                    onClick={() => setSimulatorActiveTab('videoplus')}
                    className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                      simulatorActiveTab === 'videoplus'
                        ? 'bg-white border-orbit-primary shadow-[0_4px_20px_rgba(99,102,241,0.06)] text-slate-800'
                        : 'bg-white/50 border-slate-200 hover:border-slate-350 text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-mono font-bold tracking-widest text-orbit-accent uppercase">Étape 03</span>
                      <Zap className="w-4 h-4 text-amber-500" />
                    </div>
                    <h4 className="font-display font-medium text-sm">Mode Couchage Offline</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Coupez le réseau Wi-Fi de simulation de l’appli et lancez un stream vidéo hors-ligne.</p>
                  </button>

                  {/* Option 4: Video Studio */}
                  <button
                    onClick={() => setSimulatorActiveTab('studio')}
                    className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                      simulatorActiveTab === 'studio'
                        ? 'bg-white border-orbit-primary shadow-[0_4px_20px_rgba(99,102,241,0.06)] text-slate-800'
                        : 'bg-white/50 border-slate-200 hover:border-slate-350 text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-mono font-bold tracking-widest text-orbit-accent uppercase">Étape 04</span>
                      <Sparkles className="w-4 h-4 text-purple-600" />
                    </div>
                    <h4 className="font-display font-medium text-sm">Studio de Création</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Créez une nouvelle courte vidéo, appliquez un filtre spatial et publiez en Direct.</p>
                  </button>

                </div>
              </div>

              {/* Right Column: Phone simulator layout */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <PhoneSimulator initialTab={simulatorActiveTab} />
              </div>
            </div>
          </div>
        </section>

        {/* Why Orbit comparison metrics dashboard */}
        <WhyOrbit />

        {/* Refined "About L'Equipe" profile section */}
        <AboutSection onDownloadClick={handleDownloadClick} />

        {/* Installation and QR Code downloads card section */}
        <DownloadSection onDownloadClick={handleDownloadClick} />

      </main>

      {/* Futuristic elegant Footer with deep slate text and dark contrast panel at the very bottom */}
      <footer className="py-12 border-t border-slate-200 bg-white relative overflow-hidden text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-linear-to-tr from-orbit-primary to-orbit-accent flex items-center justify-center">
              <Orbit className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-display font-bold text-slate-800 text-base">Orbit <span className="text-orbit-accent font-medium">Post</span></span>
          </div>

          <p className="text-xs font-light text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Orbit Post. Tous droits réservés. Développé de manière éthique et souveraine par la Orbit Team.
          </p>

          <div className="flex gap-4 text-xs font-mono">
            <button onClick={handleDownloadClick} className="hover:text-orbit-primary transition-colors text-slate-700 font-bold cursor-pointer bg-none border-none p-0">
              APK PACKAGE
            </button>
            <span className="text-slate-300">•</span>
            <a href="mailto:nativereact42@gmail.com" className="hover:text-orbit-primary transition-colors text-slate-700 font-bold">
              SUPPORT CLIENTS
            </a>
          </div>
        </div>
      </footer>

      {/* Timer Modal */}
      <TimerModal isOpen={showTimer} onClose={() => setShowTimer(false)} durationSeconds={3600} />
    </div>
  );
}
