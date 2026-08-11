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
    <section id="features" className="py-5 position-relative overflow-hidden bg-space-950">
      {/* Decorative background gradients */}
      <div className="position-absolute top-50 start-0 w-[384px] h-[384px] rounded-circle bg-orbit-primary/5 blur-[130px] pointer-events-none" />
      <div className="position-absolute bottom-0 end-0 w-[400px] h-[400px] rounded-circle bg-orbit-accent/5 blur-[150px] pointer-events-none" />

      <div className="container py-4 position-relative z-1">
        
        {/* Header Block */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h2 className="font-display text-uppercase text-xs fw-bold tracking-widest text-orbit-primary mb-2">
            Tout ce dont vous avez besoin pour briller en ligne
          </h2>
          <p className="font-display h1 fw-bold text-dark mb-2">
            Fonctionnalités Clés
          </p>
          <div className="bg-gradient-orbit mx-auto mt-3 rounded-pill" style={{ height: '6px', width: '60px' }} />
        </div>

        {/* Bento Grid layout using Bootstrap row/col */}
        <div className="row g-4" id="features-bento-grid">
          {FEATURE_SPOTLIGHTS.map((feat, index) => {
            const Icon = iconMap[feat.iconName] || Sparkles;
            const isLarge = index === 0 || index === 1; // Orbit Studio and Messenger are large highlight cards
            const isActive = activeFeatureInSimulator === feat.id;

            return (
              <div
                key={feat.id}
                className={isLarge ? 'col-12 col-md-6' : 'col-12 col-md-4'}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => onSelectFeature(feat.id)}
                  className={`card h-100 border-0 p-4 rounded-4 position-relative overflow-hidden ${
                    isActive
                      ? 'border border-primary shadow-sm bg-white'
                      : 'border border-secondary-subtle shadow-sm bg-white'
                  }`}
                  style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                >
                  <div className="d-flex flex-column h-full justify-content-between position-relative z-1">
                    <div>
                      {/* Header line & badge */}
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className={`p-2.5 rounded-3 bg-gradient-orbit text-white shadow-sm`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        
                        {feat.badge ? (
                          <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-2.5 py-1 border border-danger border-opacity-25 text-uppercase" style={{ fontSize: '10px' }}>
                            {feat.badge}
                          </span>
                        ) : null}
                      </div>

                      {/* Metadata */}
                      <h4 className="text-uppercase text-muted font-mono small mb-1" style={{ letterSpacing: '0.1em', fontSize: '10px' }}>
                        {feat.subtitle}
                      </h4>
                      <h3 className="font-display h4 fw-bold text-dark mb-3">
                        {feat.title}
                      </h3>
                      <p className="small text-secondary fw-light mb-0">
                        {feat.description}
                      </p>
                    </div>

                    {/* Connect indicator link */}
                    <div className="mt-4 pt-3 border-top border-secondary-subtle d-flex align-items-center justify-content-between text-xs font-mono text-secondary">
                      <span className="d-flex align-items-center gap-2">
                        <Eye className="w-3.5 h-3.5 text-orbit-accent" />
                        Visualiser dans le Simulateur
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
