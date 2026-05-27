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
    <section id="why-orbit" className="py-24 relative overflow-hidden bg-space-950">
      {/* Background Orbits Decors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-linear-to-r from-orbit-glow/5 to-orbit-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-xs font-semibold tracking-widest text-orbit-accent uppercase mb-3">
            S'affranchir des géants du web
          </h2>
          <p className="font-display text-3xl sm:text-5xl font-bold text-slate-800 tracking-tight">
            Pourquoi Orbit Post ?
          </p>
          <p className="text-slate-600 font-light text-base mt-4">
            Contrairement aux réseaux sociaux traditionnels, nous plaçons l'utilisateur au premier plan de l'architecture.
          </p>
          <div className="h-1.5 w-16 bg-linear-to-r from-orbit-primary to-orbit-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Master Comparison Control Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Metric Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-orbit-primary uppercase mb-1 flex items-center gap-1.5 pl-2">
              <Radio className="w-3.5 h-3.5 animate-pulse text-orbit-glow" />
              Dimensions de Souveraineté
            </h3>
            
            {COMPARISON_METRICS.map(m => {
              const isSelected = m.id === selectedMetric;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMetric(m.id)}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-orbit-primary shadow-[0_4px_20px_rgba(99,102,241,0.08)] text-slate-800'
                      : 'bg-white/50 border-slate-200/70 text-slate-500 hover:text-slate-800 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display font-medium text-base sm:text-lg">
                      {m.name}
                    </span>
                    <span className="text-xs font-mono opacity-60">
                      {isSelected ? 'Analyse active' : 'Cliquez pour comparer'}
                    </span>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isSelected ? 'bg-orbit-primary text-white' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'
                  }`}>
                    <Orbit className={`w-4 h-4 ${isSelected ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Visual Rating Analytics Board */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xs">
            
            <div className="absolute top-0 right-0 w-44 h-44 bg-orbit-accent/5 rounded-full blur-[80px] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMetric.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between gap-10"
              >
                <div>
                  <h4 className="font-display text-2xl font-bold text-slate-800 mb-6">
                    {currentMetric.name}
                  </h4>

                  {/* Traditional Platforms */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center text-sm font-semibold mb-2">
                      <span className="text-rose-500 flex items-center gap-1.5 font-mono">
                        <X className="w-4 h-4" />
                        Réseaux Traditionnels
                      </span>
                      <span className="font-mono text-rose-500">{currentMetric.traditionalScore}% Efficacité</span>
                    </div>
                    <div className="h-2 rounded-full bg-rose-100 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentMetric.traditionalScore}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-linear-to-r from-rose-500 to-rose-600 rounded-full"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-2 font-light italic">
                      {currentMetric.traditionalDetail}
                    </p>
                  </div>

                  {/* Orbit Post */}
                  <div>
                    <div className="flex justify-between items-center text-sm font-semibold mb-2">
                      <span className="text-emerald-600 flex items-center gap-1.5 font-mono">
                        <Check className="w-4 h-4" />
                        Orbit Post
                      </span>
                      <span className="font-mono text-emerald-600 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-orbit-accent animate-pulse" />
                        {currentMetric.orbitScore}% Souverain
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-emerald-100 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentMetric.orbitScore}%` }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        className="h-full bg-linear-to-r from-emerald-500 to-[#10b981] rounded-full"
                      />
                    </div>
                    <p className="text-xs text-slate-600 mt-2 font-light">
                      {currentMetric.orbitDetail}
                    </p>
                  </div>
                </div>

                {/* Footer Insight tagline */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-xs font-mono">
                  <span className="text-slate-400">INDICATEURS CERTIFIÉS SECURE AUDIT 2026</span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-55 border-emerald-100 text-emerald-600 font-bold uppercase tracking-wider">
                    Souveraineté Native
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Why Orbit Quick-Cards under blocks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs">
            <span className="font-mono text-xs font-bold px-3 py-1 bg-violet-50 text-violet-600 border border-violet-100 rounded-full">
              SÉCURITÉ MILITAIRE
            </span>
            <p className="font-display font-bold text-lg text-slate-800 mt-4 mb-2">Vie Privée Native</p>
            <p className="text-sm text-slate-650 font-light leading-relaxed">
              Pas de tracking publicitaire intrusif. Vos données n'appartiennent à personne d'autre qu'à vous-même.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs">
            <span className="font-mono text-xs font-bold px-3 py-1 bg-cyan-50 text-cyan-600 border border-cyan-100 rounded-full">
              DÉCOUVERTE OBJECTIVE
            </span>
            <p className="font-display font-bold text-lg text-slate-800 mt-4 mb-2">Liberté de Contenu</p>
            <p className="text-sm text-slate-650 font-light leading-relaxed">
              Un algorithme transparent qui favorise la découverte réelle de vos abonnés plutôt que le clic-appât forcé.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs">
            <span className="font-mono text-xs font-bold px-3 py-1 bg-amber-50 text-amber-650 border border-amber-100 rounded-full">
              HORS-RÉSEAU PRÊT
            </span>
            <p className="font-display font-bold text-lg text-slate-800 mt-4 mb-2">Mode Hors-ligne</p>
            <p className="text-sm text-slate-650 font-light leading-relaxed">
              Le seul réseau social qui continue de fonctionner de manière fluide quand vous n'avez plus de capteurs réseau.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
