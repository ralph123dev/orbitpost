import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Zap, Languages, Rocket, ChevronRight, Eye, Shield } from 'lucide-react';
import { FEATURE_SPOTLIGHTS } from '../mockData';

interface FeaturesProps {
  onSelectFeature: (featureId: string) => void;
  activeFeatureInSimulator: string;
}

const iconMap: Record<string, any> = {
  Sparkles: Sparkles,
  ShieldAlert: Shield,
  Zap: Zap,
  Languages: Languages,
  TrendingUp: Rocket,
};

export default function Features({ onSelectFeature, activeFeatureInSimulator }: FeaturesProps) {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-space-950">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-orbit-primary/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-orbit-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-display text-xs font-semibold tracking-widest text-orbit-primary uppercase mb-3">
            Tout ce dont vous avez besoin pour briller en ligne
          </h2>
          <p className="font-display text-3xl sm:text-5xl font-bold text-slate-800 tracking-tight">
            Fonctionnalités Clés
          </p>
          <div className="h-1.5 w-16 bg-linear-to-r from-orbit-primary to-orbit-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6" id="features-bento-grid">
          {FEATURE_SPOTLIGHTS.map((feat, index) => {
            const Icon = iconMap[feat.iconName] || Sparkles;
            const isLarge = index === 0 || index === 1; // Orbit Studio and Messenger are large highlight cards
            const isActive = activeFeatureInSimulator === feat.id;

            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onSelectFeature(feat.id)}
                className={`relative rounded-3xl p-6 md:p-8 overflow-hidden border transition-all duration-300 group cursor-pointer ${
                  isLarge ? 'md:col-span-3' : 'md:col-span-2'
                } ${
                  isActive
                    ? 'bg-space-900 border-orbit-accent/80 shadow-[0_10px_30px_rgba(99,102,241,0.08)] ring-1 ring-orbit-accent/20'
                    : 'bg-white border-slate-200/70 hover:bg-slate-50/50 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-radial-gradient(circle_at_top,_var(--tw-gradient-stops)) from-[#6366f1]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    {/* Header line & badge */}
                    <div className="flex justify-between items-center mb-6">
                      <div className={`p-3 rounded-2xl bg-linear-to-tr ${feat.color} text-white shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {feat.badge ? (
                        <span className="text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-500">
                          {feat.badge}
                        </span>
                      ) : null}
                    </div>

                    {/* Metadata */}
                    <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">
                      {feat.subtitle}
                    </h4>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800 mb-4 group-hover:text-orbit-primary transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  {/* Connect indicator link */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-slate-800 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-orbit-accent" />
                      Visualiser dans le Simulateur
                    </span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-slate-400 group-hover:text-slate-600" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
