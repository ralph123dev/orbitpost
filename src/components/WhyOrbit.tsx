import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, ShieldCheck, RefreshCw, Sparkles, Check, X, Orbit, EyeOff, Radio } from 'lucide-react';

interface ComparisonMetric {
  id: string;
  name: string;
  traditionalScore: number;
  orbitScore: number;
  traditionalDetail: string;
  orbitDetail: string;
}

const COMPARISON_METRICS: ComparisonMetric[] = [
  {
    id: 'privacy',
    name: 'Vie Privée & Tracking',
    traditionalScore: 12,
    orbitScore: 100,
    traditionalDetail: 'Traqueurs publicitaires tiers permanents, revente de métadonnées de chat et analyse d\'historique.',
    orbitDetail: 'Zéro cookie publicitaire, stockage de clés cryptographiques entièrement local, anonymat natif.'
  },
  {
    id: 'algorithm',
    name: 'Liberté de l\'Algorithme',
    traditionalScore: 30,
    orbitScore: 95,
    traditionalDetail: 'Optimisé pour le temps de rétention maximal à travers des contenus de type clic-appât et polarisants.',
    orbitDetail: 'Moteur de recommandation open-source favorisant la découverte naturelle et intellectuelle.'
  },
  {
    id: 'network',
    name: 'Mode Hors-ligne (Autonomie)',
    traditionalScore: 5,
    orbitScore: 100,
    traditionalDetail: 'Absence totale de réseau bloque le flux, fige l\'interactivité et vide le cache immédiatement.',
    orbitDetail: 'Video Plus met automatiquement en cache vos centres d\'intérêt pour les revisionner en sous-sol ou sans data.'
  },
  {
    id: 'translation',
    name: 'Traduction Inter-frontières',
    traditionalScore: 45,
    orbitScore: 98,
    traditionalDetail: 'Traductions machinales pixelisées payantes ou erratiques nécessitant de quitter l\'écran principal.',
    orbitDetail: 'Traduction neuronale instantanée contextuelle intégrée sans frais additionnels dans tout le système.'
  }
];

export default function WhyOrbit() {
  const [selectedMetric, setSelectedMetric] = useState<string>('privacy');

  const currentMetric = COMPARISON_METRICS.find(m => m.id === selectedMetric) || COMPARISON_METRICS[0];

  return (
    <section id="why-orbit" className="py-5 position-relative overflow-hidden bg-space-950">
      {/* Background Orbits Decors */}
      <div className="position-absolute top-25 start-50 translate-middle-x w-[800px] h-[300px] bg-gradient-orbit opacity-5 rounded-circle blur-[100px] pointer-events-none" />

      <div className="container py-4 position-relative z-1">
        
        {/* Header Block */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h2 className="font-display text-uppercase text-xs fw-bold tracking-widest text-orbit-accent mb-2">
            S'affranchir des géants du web
          </h2>
          <p className="font-display h1 fw-bold text-dark mb-2">
            Pourquoi Orbit Post ?
          </p>
          <p className="text-secondary fw-light fs-5 mt-2">
            Contrairement aux réseaux sociaux traditionnels, nous plaçons l'utilisateur au premier plan de l'architecture.
          </p>
          <div className="bg-gradient-orbit mx-auto mt-3 rounded-pill" style={{ height: '6px', width: '60px' }} />
        </div>

        {/* Master Comparison Control Panel */}
        <div className="row g-4 align-items-stretch">
          
          {/* Left Side: Metric Selectors */}
          <div className="col-12 col-lg-5 d-flex flex-column gap-3">
            <h3 className="text-uppercase font-mono fw-bold text-orbit-primary small mb-2 d-flex align-items-center gap-2 pl-2">
              <Radio className="w-3.5 h-3.5 animate-pulse text-orbit-glow" />
              Dimensions de Souveraineté
            </h3>
            
            {COMPARISON_METRICS.map(m => {
              const isSelected = m.id === selectedMetric;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMetric(m.id)}
                  className={`p-4 rounded-4 border text-start transition-all d-flex align-items-center justify-content-between ${
                    isSelected
                      ? 'bg-white border-primary shadow-sm text-dark'
                      : 'bg-white bg-opacity-50 border-secondary-subtle text-secondary'
                  }`}
                  style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                >
                  <div className="d-flex flex-column">
                    <span className="font-display fw-semibold fs-6">
                      {m.name}
                    </span>
                    <span className="small text-muted font-mono" style={{ fontSize: '11px' }}>
                      {isSelected ? 'Analyse active' : 'Cliquez pour comparer'}
                    </span>
                  </div>
                  
                  <div className={`rounded-circle bg-light d-flex align-items-center justify-content-center ${
                    isSelected ? 'bg-primary text-white' : 'text-secondary'
                  }`} style={{ width: '36px', height: '36px' }}>
                    <Orbit className={`w-4 h-4 ${isSelected ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Visual Rating Analytics Board */}
          <div className="col-12 col-lg-7">
            <div className="card h-100 border border-secondary-subtle p-4 p-md-5 rounded-4 position-relative overflow-hidden shadow-sm bg-white">
              
              <div className="position-absolute top-0 end-0 w-[176px] h-[176px] bg-orbit-accent/5 rounded-circle blur-[80px] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMetric.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="d-flex flex-column h-full justify-content-between gap-4"
                >
                  <div>
                    <h4 className="font-display h3 fw-bold text-dark mb-4">
                      {currentMetric.name}
                    </h4>

                    {/* Traditional Platforms */}
                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-center text-sm font-semibold mb-2">
                        <span className="text-danger d-flex align-items-center gap-1 font-mono">
                          <X className="w-4 h-4" />
                          Réseaux Traditionnels
                        </span>
                        <span className="font-mono text-danger">{currentMetric.traditionalScore}% Efficacité</span>
                      </div>
                      <div className="progress bg-danger bg-opacity-10" style={{ height: '8px' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${currentMetric.traditionalScore}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="progress-bar bg-danger"
                        />
                      </div>
                      <p className="small text-secondary mt-2 fw-light fst-italic">
                        {currentMetric.traditionalDetail}
                      </p>
                    </div>

                    {/* Orbit Post */}
                    <div>
                      <div className="d-flex justify-content-between align-items-center text-sm font-semibold mb-2">
                        <span className="text-success d-flex align-items-center gap-1 font-mono">
                          <Check className="w-4 h-4" />
                          Orbit Post
                        </span>
                        <span className="font-mono text-success d-flex align-items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-orbit-accent animate-pulse" />
                          {currentMetric.orbitScore}% Souverain
                        </span>
                      </div>
                      <div className="progress bg-success bg-opacity-10" style={{ height: '8px' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${currentMetric.orbitScore}%` }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                          className="progress-bar bg-success"
                        />
                      </div>
                      <p className="small text-secondary mt-2 fw-light">
                        {currentMetric.orbitDetail}
                      </p>
                    </div>
                  </div>

                  {/* Footer Insight tagline */}
                  <div className="pt-4 border-top border-secondary-subtle d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-start align-items-sm-center text-xs font-mono">
                    <span className="text-muted">INDICATEURS CERTIFIÉS SECURE AUDIT 2026</span>
                    <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 border border-success border-opacity-25 rounded-pill text-uppercase">
                      Souveraineté Native
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Why Orbit Quick-Cards under blocks */}
        <div className="row g-4 mt-5">
          <div className="col-12 col-md-4">
            <div className="card border border-secondary-subtle p-4 rounded-4 shadow-sm h-100 bg-white">
              <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-1.5 rounded-pill font-mono align-self-start">
                SÉCURITÉ MILITAIRE
              </span>
              <p className="font-display fw-bold fs-5 mt-3 mb-2">Vie Privée Native</p>
              <p className="small text-secondary fw-light mb-0">
                Pas de tracking publicitaire intrusif. Vos données n'appartiennent à personne d'autre qu'à vous-même.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card border border-secondary-subtle p-4 rounded-4 shadow-sm h-100 bg-white">
              <span className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-1.5 rounded-pill font-mono align-self-start">
                DÉCOUVERTE OBJECTIVE
              </span>
              <p className="font-display fw-bold fs-5 mt-3 mb-2">Liberté de Contenu</p>
              <p className="small text-secondary fw-light mb-0">
                Un algorithme transparent qui favorise la découverte réelle de vos abonnés plutôt que le clic-appât forcé.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card border border-secondary-subtle p-4 rounded-4 shadow-sm h-100 bg-white">
              <span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 px-3 py-1.5 rounded-pill font-mono align-self-start">
                HORS-RÉSEAU PRÊT
              </span>
              <p className="font-display fw-bold fs-5 mt-3 mb-2">Mode Hors-ligne</p>
              <p className="small text-secondary fw-light mb-0">
                Le seul réseau social qui continue de fonctionner de manière fluide quand vous n'avez plus de capteurs réseau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
