import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Shield, Zap, Sparkles, Orbit, Smartphone } from 'lucide-react';

interface HeroProps {
  onExploreDemo: () => void;
  onDownloadClick: () => void;
}

export default function Hero({ onExploreDemo, onDownloadClick }: HeroProps) {
  return (
    <section className="position-relative min-vh-100 pt-5 pb-5 d-flex align-items-center justify-content-center overflow-hidden bg-space-950">
      {/* Dynamic Cosmic Background */}
      <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/50 via-space-950 to-space-950 z-n1" />
      
      {/* Decorative Blur Orbits */}
      <div className="position-absolute top-25 start-25 w-[384px] h-[384px] rounded-circle bg-orbit-primary/10 blur-[120px] pointer-events-none" />
      <div className="position-absolute top-33 end-25 w-[320px] h-[320px] rounded-circle bg-orbit-accent/8 blur-[100px] pointer-events-none" />
      <div className="position-absolute bottom-0 start-50 translate-middle-x w-[500px] h-[150px] rounded-circle bg-orbit-glow/8 blur-[130px] pointer-events-none" />

      {/* Futuristic Orbit Ring Graphics */}
      <div className="position-absolute top-0 start-0 end-0 bottom-0 z-0 pointer-events-none d-flex align-items-center justify-content-center">
        <div className="rounded-circle border border-secondary border-opacity-25 position-absolute -rotate-12 animate-[spin_120s_linear_infinite]" style={{ width: '800px', height: '800px' }} />
        <div className="rounded-circle border border-secondary border-opacity-25 position-absolute rotate-45 animate-[spin_80s_linear_infinite]" style={{ width: '500px', height: '500px' }} />
        <div className="rounded-circle border border-dashed border-secondary border-opacity-25 position-absolute -rotate-45" style={{ width: '300px', height: '300px' }} />
      </div>

      <div className="container py-5 position-relative z-1 w-100">
        <div className="text-center mx-auto" style={{ maxWidth: '800px' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill border border-primary-subtle bg-light text-xs fw-bold font-mono text-orbit-primary mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-orbit-primary animate-pulse" />
            <span>LE RÉSEAU SOCIAL DE DEMAIN</span>
          </motion.div>

          {/* Master Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display display-3 fw-bold text-dark tracking-tight mb-4"
          >
            Redéfinissez Votre <br />
            <span className="text-gradient-orbit">
              Orbite Sociale.
            </span>
          </motion.h1>

          {/* Descriptive Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lead text-secondary mx-auto mb-5 fw-light"
            style={{ maxWidth: '650px' }}
          >
            Partagez, découvrez et connectez-vous avec une liberté totale. 
            <strong className="text-dark fw-semibold"> Orbit Post</strong> fusionne créativité, sécurité inviolable et accessibilité déconnectée.
          </motion.p>

          {/* Core Interactive Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="d-flex flex-wrap gap-3 justify-content-center align-items-center mb-5"
          >
            <button
              onClick={() => window.open('https://weborbit-mu.vercel.app/', '_blank', 'noopener,noreferrer')}
              className="btn btn-orbit-gradient rounded-pill px-4 py-3 fw-semibold text-sm d-flex align-items-center gap-2 shadow"
            >
              <Smartphone className="w-4 h-4" />
              <span>Commencer maintenant</span>
            </button>

            <button
              onClick={onDownloadClick}
              className="btn btn-outline-secondary rounded-pill px-4 py-3 fw-semibold text-sm d-flex align-items-center gap-2 bg-white text-dark border-secondary-subtle shadow-sm"
            >
              <span>Télécharger l'APK</span>
              <ArrowUpRight className="w-4 h-4 text-secondary opacity-50" />
            </button>
          </motion.div>

          {/* Highlights Mini Ribbon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="row g-3 mt-5 pt-5 border-top border-secondary-subtle text-start"
          >
            <div className="col-12 col-sm-6 col-md-3">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card border-0 shadow-sm p-3 rounded-4 d-flex flex-row align-items-start gap-3 h-100 bg-white"
                style={{ cursor: 'pointer' }}
              >
                <div className="p-2 rounded-3 bg-light text-orbit-primary">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="fw-semibold text-dark fs-6 mb-1">Chiffrement E2EE</h4>
                  <p className="small text-secondary mb-0">Discussions 100% privées</p>
                </div>
              </motion.div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card border-0 shadow-sm p-3 rounded-4 d-flex flex-row align-items-start gap-3 h-100 bg-white"
                style={{ cursor: 'pointer' }}
              >
                <div className="p-2 rounded-3 bg-light text-orbit-glow">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="fw-semibold text-dark fs-6 mb-1">Video Plus</h4>
                  <p className="small text-secondary mb-0">Mode hors-ligne breveté</p>
                </div>
              </motion.div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card border-0 shadow-sm p-3 rounded-4 d-flex flex-row align-items-start gap-3 h-100 bg-white"
                style={{ cursor: 'pointer' }}
              >
                <div className="p-2 rounded-3 bg-light text-orbit-accent">
                  <Orbit className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="fw-semibold text-dark fs-6 mb-1">Découverte Réelle</h4>
                  <p className="small text-secondary mb-0">Algorithme sans traqueurs</p>
                </div>
              </motion.div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card border-0 shadow-sm p-3 rounded-4 d-flex flex-row align-items-start gap-3 h-100 bg-white"
                style={{ cursor: 'pointer' }}
              >
                <div className="p-2 rounded-3 bg-light text-purple-600">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="fw-semibold text-dark fs-6 mb-1">App Indépendante</h4>
                  <p className="small text-secondary mb-0">APK Android & iOS ready</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
