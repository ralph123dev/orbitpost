import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Cpu, Flame, Smartphone, Globe, MessageCircle } from 'lucide-react';
import moiImage from '../../assets/img/moi.jpg';

interface AboutSectionProps {
  onDownloadClick?: () => void;
}

export default function AboutSection({ onDownloadClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-orbit-glow/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orbit-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual signature card */}
          <div className="lg:col-span-5 relative" id="about-visual-card">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs overflow-hidden"
            >
              {/* Overlay glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-orbit-accent to-transparent" />
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-3xl overflow-hidden border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                    <img src={moiImage} alt="Portrait du concepteur Orbit Post" width="80" height="80" loading="lazy" className="w-full h-full object-cover" />
                    <h3 className="font-display font-bold text-xl text-slate-800">Concepteur</h3>
                    <p className="text-xs font-mono text-orbit-accent uppercase tracking-wider">Créateur d'Alternatives</p>
                  </div>
                </div>

                <div className="h-px bg-slate-200" />

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-purple-50 text-orbit-accent mt-1 border border-purple-100">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Philosophie Open Source</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        Chaque ligne de code est auditable pour que la confiance ne soit jamais imposée, mais démontrée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 mt-1 border border-orange-100">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Zéro tracking publicitaire</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        Pas de cookie de reciblage, pas de tracking de pixels, pas de revente à des revendeurs tiers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-200" />

                {/* Developer Stats Indicators */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
                    <span className="text-2xl font-display font-bold text-slate-800 block">100%</span>
                    <span className="text-[10px] font-mono font-medium text-emerald-600 uppercase tracking-wider block mt-1">Sécurisé</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
                    <span className="text-2xl font-display font-bold text-slate-800 block">24/7</span>
                    <span className="text-[10px] font-mono font-medium text-indigo-600 uppercase tracking-wider block mt-1">Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Mission statement write-up */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6" id="about-statement-card">
            <h3 className="text-xs font-mono font-bold tracking-widest text-orbit-accent uppercase">
              Derrière l'Application
            </h3>
            
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-850 tracking-tight leading-tight">
              Reprendre le contrôle de notre espace de connexion.
            </h2>

            <div className="h-1 bg-linear-to-r from-orbit-primary to-orbit-accent w-20 rounded-full" />

            <p className="text-slate-650 font-light text-base sm:text-lg leading-relaxed mt-2">
              « Passionné par le développement et les architectures décentralisées innovantes, j'ai conçu <strong className="text-orbit-accent font-medium">Orbit Post</strong> pour offrir une alternative moderne, sécurisée à l'extrême et entièrement centrée sur l'autonomie de l'utilisateur. Notre objectif ultime est de redéfinir la manière dont nous interagissons en ligne au quotidien sans compromettre nos données. »
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={onDownloadClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold font-mono text-white bg-linear-to-r from-orbit-primary to-orbit-accent hover:opacity-95 transition-opacity duration-200 shadow-xs cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Consulter Version d'essai APK</span>
              </button>

              <a
                href="mailto:nativereact42@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold font-mono text-slate-700 bg-slate-50 border border-slate-205 hover:bg-slate-100 transition-all duration-200 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-slate-500" />
                <span>Contacter le concepteur</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
