import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyOrbit from './components/WhyOrbit';
import PhoneSimulator from './components/PhoneSimulator';
import AboutSection from './components/AboutSection';
import DownloadSection from './components/DownloadSection';
import { 
  Orbit, ArrowDownToLine, MessageSquare, Shield, Zap, Sparkles, 
  ChevronRight, Smartphone, Eye, Heart, Database, Send, Radio
} from 'lucide-react';

export default function App() {
  
  const [simulatorActiveTab, setSimulatorActiveTab] = useState<string>('feed');
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const [showMaintenanceMessage, setShowMaintenanceMessage] = useState<boolean>(false);
  
  const apkUrl = "https://expo.dev/artifacts/eas/VMlWyFPqypZtR9_RSYhJC7txAZmcNkXQNLydSe9CngU.apk";
  const webUrl = "https://weborbit-mu.vercel.app/";

  const handleOpenWebVersion = () => {
    try {
      window.open(webUrl, '_blank', 'noopener,noreferrer');
    } catch (e) {
      // ignore popup errors
    }
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
    setShowMaintenanceMessage(true);
  };

  return (
    <div className="min-h-screen position-relative bg-light text-dark antialiased">
      {/* Dynamic ambient grid overlay wrapping the entire ecosystem */}
      <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),_linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)] pointer-events-none z-n1" />

      {/* Global Header */}
      <Navbar onDownloadClick={handleDownloadClick} />

      {/* Main launch space */}
      <main className="position-relative">
        
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
        <section id="simulator" className="py-5 position-relative overflow-hidden bg-light border-top border-secondary-subtle">
          <div className="position-absolute top-50 start-25 w-[500px] h-[300px] bg-orbit-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container py-4 position-relative z-1">
            <div className="row align-items-center g-5">
              
              {/* Left Column: Interactive Playground controls explaining sandbox actions */}
              <div className="col-12 col-lg-6" id="sandbox-instructions-panel">
                <div className="d-flex flex-column gap-3 mb-4">
                  <div>
                    <span className="inline-flex align-items-center gap-2 px-3 py-1 rounded-pill text-[10px] font-mono fw-bold uppercase tracking-wider bg-orbit-accent-15 border border-indigo-200 text-orbit-accent">
                      <Radio className="w-3.5 h-3.5 animate-pulse text-orbit-accent" />
                      BAC À SABLE LIVE INTERACTIF
                    </span>
                  </div>
                  
                  <h2 className="font-display h1 fw-bold text-dark tracking-tight">
                    Faites l'expérience d'Orbit.
                  </h2>
                  <p className="text-secondary fw-light fs-5">
                    Cliquez sur les contrôleurs ci-dessous pour changer le canal ou essayez directement d'interagir avec l'application simulée sur la droite.
                  </p>
                </div>

                {/* Simulated action switchers list */}
                <div className="row g-3">
                  
                  {/* Option 1: Live Feed */}
                  <div className="col-12 col-sm-6">
                    <button
                      onClick={() => setSimulatorActiveTab('feed')}
                      className={`p-4 rounded-4 border text-start w-100 transition-all ${
                        simulatorActiveTab === 'feed'
                          ? 'bg-white border-primary shadow-sm text-dark'
                          : 'bg-white bg-opacity-50 border-secondary-subtle text-muted'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-xs font-mono fw-bold text-orbit-accent uppercase">Étape 01</span>
                        <Orbit className="w-4 h-4 text-orbit-accent" />
                      </div>
                      <h4 className="font-display fw-semibold fs-6 mb-1">Traduire le Flux Direct</h4>
                      <p className="small text-secondary mb-0">Changez les langues (FR/EN/ES) dans l’en-tête pour tester la traduction automatique.</p>
                    </button>
                  </div>

                  {/* Option 2: Messenger */}
                  <div className="col-12 col-sm-6">
                    <button
                      onClick={() => setSimulatorActiveTab('messenger')}
                      className={`p-4 rounded-4 border text-start w-100 transition-all ${
                        simulatorActiveTab === 'messenger'
                          ? 'bg-white border-primary shadow-sm text-dark'
                          : 'bg-white bg-opacity-50 border-secondary-subtle text-muted'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-xs font-mono fw-bold text-orbit-accent uppercase">Étape 02</span>
                        <MessageSquare className="w-4 h-4 text-success" />
                      </div>
                      <h4 className="font-display fw-semibold fs-6 mb-1">Vérifier le Chiffrement</h4>
                      <p className="small text-secondary mb-0">Ouvrez le chat crypté, écrivez un message et observez le handshake Diffie-Hellman.</p>
                    </button>
                  </div>

                  {/* Option 3: offline mode */}
                  <div className="col-12 col-sm-6">
                    <button
                      onClick={() => setSimulatorActiveTab('videoplus')}
                      className={`p-4 rounded-4 border text-start w-100 transition-all ${
                        simulatorActiveTab === 'videoplus'
                          ? 'bg-white border-primary shadow-sm text-dark'
                          : 'bg-white bg-opacity-50 border-secondary-subtle text-muted'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-xs font-mono fw-bold text-orbit-accent uppercase">Étape 03</span>
                        <Zap className="w-4 h-4 text-warning" />
                      </div>
                      <h4 className="font-display fw-semibold fs-6 mb-1">Mode Couchage Offline</h4>
                      <p className="small text-secondary mb-0">Coupez le réseau Wi-Fi de simulation de l’appli et lancez un stream vidéo hors-ligne.</p>
                    </button>
                  </div>

                  {/* Option 4: Video Studio */}
                  <div className="col-12 col-sm-6">
                    <button
                      onClick={() => setSimulatorActiveTab('studio')}
                      className={`p-4 rounded-4 border text-start w-100 transition-all ${
                        simulatorActiveTab === 'studio'
                          ? 'bg-white border-primary shadow-sm text-dark'
                          : 'bg-white bg-opacity-50 border-secondary-subtle text-muted'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-xs font-mono fw-bold text-orbit-accent uppercase">Étape 04</span>
                        <Sparkles className="w-4 h-4 text-purple-600" />
                      </div>
                      <h4 className="font-display fw-semibold fs-6 mb-1">Studio de Création</h4>
                      <p className="small text-secondary mb-0">Créez une nouvelle courte vidéo, appliquez un filtre spatial et publiez en Direct.</p>
                    </button>
                  </div>

                </div>
              </div>

              {/* Right Column: Phone simulator layout */}
              <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
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
      <footer className="py-5 border-top border-secondary-subtle bg-white position-relative overflow-hidden text-secondary">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 position-relative z-1">
          <div className="d-flex align-items-center gap-2">
            <div className="w-6 h-6 rounded-circle bg-gradient-orbit d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
              <Orbit className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-display fw-bold text-dark fs-5">Orbit <span className="text-orbit-accent fw-normal">Post</span></span>
          </div>

          <p className="small mb-0 text-center text-md-start fw-light">
            © {new Date().getFullYear()} Orbit Post. Tous droits réservés. Développé de manière éthique et souveraine par la Orbit Team.
          </p>

          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-end gap-3 small font-mono">
            <button onClick={handleDownloadClick} className="btn btn-link text-decoration-none p-0 text-dark fw-bold" style={{ fontSize: '13px' }}>
              Télécharger
            </button>
            <span className="text-secondary opacity-50">•</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center gap-1 text-decoration-none text-dark fw-bold">
              <ion-icon name="logo-facebook"></ion-icon>
              Facebook
            </a>
            <span className="text-secondary opacity-50">•</span>
            <a href="https://www.instagram.com/ralph_deveveloppeur/" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center gap-1 text-decoration-none text-dark fw-bold">
              <ion-icon name="logo-instagram"></ion-icon>
              Instagram
            </a>
            <span className="text-secondary opacity-50">•</span>
            <a href="https://wa.me/237689476780" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center gap-1 text-decoration-none text-dark fw-bold">
              <ion-icon name="logo-whatsapp"></ion-icon>
              WhatsApp
            </a>
            <span className="text-secondary opacity-50">•</span>
            <a href="mailto:nativereact42@gmail.com" className="text-decoration-none text-dark fw-bold">
              SUPPORT CLIENTS
            </a>
          </div>
        </div>
      </footer>

      {showPopup ? (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 z-3 p-4" style={{ backdropFilter: 'blur(8px)' }}>
          <div className="card border-0 shadow-lg p-4 rounded-4 w-100" style={{ maxWidth: '440px' }}>
            <div className="card-body text-center p-2">
              <div className="mx-auto h-14 w-14 rounded-circle bg-orbit-accent-15 text-orbit-accent d-flex align-items-center justify-content-center fs-3 mb-3" style={{ width: '60px', height: '60px' }}>
                🌐
              </div>
              <h2 className="fs-3 font-display fw-bold mb-2" style={{ color: '#0f172a' }}>Bienvenue sur Orbit</h2>
              <p className="mb-4" style={{ color: '#475569' }}>Choisissez une option pour visiter la version web ou télécharger l’application sur Android.</p>
              
              <div className="d-flex flex-column gap-2">
                <button
                  onClick={handleOpenWebVersion}
                  className="btn btn-orbit-gradient py-2.5 rounded-3 fw-semibold text-sm"
                >
                  Visiter la version web
                </button>
                <button
                  onClick={() => {
                    handleDownloadClick();
                    handleClosePopup();
                  }}
                  className="btn btn-outline-secondary py-2.5 rounded-3 fw-semibold text-sm"
                >
                  Télécharger l'application
                </button>
              </div>

              <button
                onClick={handleClosePopup}
                className="btn btn-link text-decoration-none mt-4 text-secondary small fw-medium text-uppercase tracking-wider"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showMaintenanceMessage ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75 z-3 p-4" 
          style={{ backdropFilter: 'blur(12px)' }}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="card border-0 shadow-lg p-5 rounded-4 w-100 position-relative overflow-hidden" 
            style={{ maxWidth: '440px', background: 'linear-gradient(to bottom right, #ffffff, #f8fafc)' }}
          >
            {/* Background decorative glow */}
            <div className="position-absolute top-0 end-0 w-100 h-100 bg-orbit-primary opacity-5 blur-[80px] pointer-events-none rounded-circle translate-middle-y" style={{ transform: 'translate(30%, -30%)' }} />

            <div className="card-body text-center p-2 position-relative z-1">
              <div className="mx-auto rounded-circle bg-warning bg-opacity-10 text-warning d-flex align-items-center justify-content-center fs-3 mb-4 shadow-sm" style={{ width: '70px', height: '70px', border: '1px solid rgba(255, 193, 7, 0.2)' }}>
                <ion-icon name="build-outline" style={{ fontSize: '32px' }}></ion-icon>
              </div>
              <h2 className="fs-3 font-display fw-bold mb-3" style={{ color: '#0f172a' }}>Application en Maintenance</h2>
              <p className="mb-4 fs-6 lh-base" style={{ color: '#475569' }}>L'application mobile est actuellement en maintenance pour vous offrir une meilleure expérience. Vous pouvez utiliser notre version web en attendant.</p>
              
              <div className="d-flex flex-column gap-3">
                <button
                  onClick={() => {
                    setShowMaintenanceMessage(false);
                    handleOpenWebVersion();
                  }}
                  className="btn btn-orbit-gradient w-100 py-3 rounded-3 fw-semibold text-sm shadow-sm d-flex justify-content-center align-items-center gap-2"
                >
                  <span>Continuer vers la version web</span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
                <button
                  onClick={() => setShowMaintenanceMessage(false)}
                  className="btn btn-link text-decoration-none text-secondary small fw-medium text-uppercase tracking-wider"
                >
                  Annuler
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  );
}
