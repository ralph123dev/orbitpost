import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Shield, Zap, Sparkles, Orbit, Smartphone } from 'lucide-react';

interface HeroProps {
  onExploreDemo: () => void;
}

export default function Hero({ onExploreDemo }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-space-950">
      {/* Dynamic Cosmic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/50 via-space-950 to-space-950 -z-10" />
      
      {/* Decorative Blur Orbits */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orbit-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-orbit-accent/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[150px] rounded-full bg-orbit-glow/8 blur-[130px] pointer-events-none" />

      {/* Futuristic Orbit Ring Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full border border-slate-200/40 absolute -rotate-12 animate-[spin_120s_linear_infinite]" />
        <div className="w-[500px] h-[500px] rounded-full border border-slate-200/50 absolute rotate-45 animate-[spin_80s_linear_infinite]" />
        <div className="w-[300px] h-[300px] rounded-full border border-dashed border-slate-100 absolute -rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-100 bg-indigo-50/50 text-xs font-semibold font-mono text-orbit-primary mb-8 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-orbit-primary animate-pulse" />
            <span>LE RÉSEAU SOCIAL DE DEMAIN</span>
          </motion.div>

          {/* Master Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-800 leading-[1.05]"
          >
            Redéfinissez Votre <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-orbit-accent to-[#059669]">
              Orbite Sociale.
            </span>
          </motion.h1>

          {/* Descriptive Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Partagez, découvrez et connectez-vous avec une liberté totale. 
            <strong className="text-slate-800 font-medium"> Orbit Post</strong> fusionne créativité, sécurité inviolable et accessibilité déconnectée.
          </motion.p>

          {/* Core Interactive Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 justify-center items-center"
          >
            <button
              onClick={onExploreDemo}
              className="px-8 py-4 rounded-full font-semibold text-sm text-white bg-linear-to-r from-orbit-primary to-orbit-accent hover:shadow-lg hover:shadow-indigo-100 hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(99,102,241,0.25)] cursor-pointer flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Tester la Démo Live</span>
            </button>

            <button
              onClick={() => alert('Mise à upgrade en cours sur nos serveurs')}
              className="px-8 py-4 rounded-full font-semibold text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Télécharger l'APK</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </motion.div>

          {/* Highlights Mini Ribbon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 pt-10 border-t border-slate-200 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
          >
            <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-start gap-3 shadow-xs">
              <div className="p-2 rounded-xl bg-indigo-50 text-orbit-primary">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-850 text-sm">Chiffrement E2EE</h4>
                <p className="text-xs text-slate-500 mt-0.5">Discussions 100% privées</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-start gap-3 shadow-xs">
              <div className="p-2 rounded-xl bg-emerald-50 text-orbit-glow">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-850 text-sm">Video Plus</h4>
                <p className="text-xs text-slate-500 mt-0.5">Mode hors-ligne breveté</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-start gap-3 shadow-xs">
              <div className="p-2 rounded-xl bg-indigo-50 text-orbit-accent">
                <Orbit className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-850 text-sm">Découverte Réelle</h4>
                <p className="text-xs text-slate-500 mt-0.5">Algorithme sans traqueurs</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-start gap-3 shadow-xs">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-850 text-sm">App Indépendante</h4>
                <p className="text-xs text-slate-500 mt-0.5">APK Android & iOS ready</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
