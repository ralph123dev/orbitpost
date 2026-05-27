import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownToLine, Smartphone, Check, HelpCircle, ShieldAlert, Award } from 'lucide-react';

export default function DownloadSection() {
  const [selectedOS, setSelectedOS] = useState<'android' | 'ios'>('android');
  const [copiedLink, setCopiedLink] = useState(false);

  const apkUrl = "https://expo.dev/artifacts/eas/fzWc1UycisqQeKoPvz3XwL.apk";

  const handleCopy = () => {
    navigator.clipboard.writeText(apkUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="download" className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-orbit-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 relative overflow-hidden shadow-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Call-to-action */}
            <div className="md:col-span-8 space-y-6" id="download-cta-block">
              <span className="text-xs font-mono font-bold tracking-widest text-[#a855f7] uppercase px-3 py-1 bg-purple-50 rounded-full border border-purple-100 inline-block">
                S'INSTALLER EN 2 MINUTES
              </span>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
                Prêt à rejoindre l'orbite ?
              </h2>
              
              <p className="text-slate-600 font-light text-base leading-relaxed">
                Rejoignez des milliers d'utilisateurs qui ont déjà fait le choix de la souveraineté numérique et de la liberté d'expression.
              </p>

              {/* Dynamic OS Tabs */}
              <div className="flex gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200 max-w-[280px]">
                <button
                  onClick={() => setSelectedOS('android')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedOS === 'android' ? 'bg-white text-slate-800 shadow-sm border border-slate-250 font-mono' : 'text-slate-550 hover:text-slate-850'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Android (APK)</span>
                </button>
                <button
                  onClick={() => setSelectedOS('ios')}
                  className={`flex-1 py-1 px-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedOS === 'ios' ? 'bg-white text-slate-800 shadow-sm border border-slate-250 font-mono' : 'text-slate-550 hover:text-slate-850'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>iOS Expo Go</span>
                </button>
              </div>

              {/* Action buttons list */}
              {selectedOS === 'android' ? (
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-2xl font-semibold font-mono text-xs uppercase tracking-wider text-white bg-linear-to-r from-orbit-primary to-orbit-accent hover:opacity-95 shadow-md flex items-center gap-2"
                    >
                      <ArrowDownToLine className="w-4 h-4 animate-bounce" />
                      <span>Télécharger l'APK officiel</span>
                    </a>

                    <button
                      onClick={handleCopy}
                      className="px-5 py-3.5 rounded-2xl font-semibold font-mono text-xs uppercase tracking-wider text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      {copiedLink ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Lien Copié !</span>
                        </>
                      ) : (
                        <span>Copier l'URL de téléchargement</span>
                      )}
                    </button>
                  </div>

                  {/* Installation Help Guides */}
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-205 flex gap-3 text-xs text-amber-800 font-light leading-relaxed max-w-2xl">
                    <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong>Note d'installation Android :</strong> L'application est un binaire officiel compilé de manière sécurisée par Expo EAS. Lors de l'installation, si le système vous avertit "Source inconnue", autorisez simplement le navigateur ou le gestionnaire de fichiers à installer le package. L'application est certifiée sans traqueurs.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 pt-2">
                  <p className="text-sm text-slate-600">
                    Pour démarrer immédiatement l'orbite sur iOS, installez l'utilitaire gratuit <strong className="text-slate-850">Expo Go</strong> depuis l'App Store, puis ouvrez le serveur depuis votre compte développeur ou scannez notre Manifest de développement.
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-550">
                    <ol className="list-decimal pl-4 space-y-1.5 font-light">
                      <li>Installez <strong>Expo Go</strong> depuis l'App Store d'Apple</li>
                      <li>Inscrivez-vous sur Expo ou copiez l'ID du projet</li>
                      <li>Recherchez le projet <strong>"Orbit Post"</strong> pour lancer le pipeline</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Mini Simulated QR Code for Desktop to Mobile hand-off */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 border border-slate-200" id="download-qrcode-block">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-3">Scanner pour mobile</span>
              
              {/* Sleek SVG simulated QR Code linking to APK */}
              <div className="w-36 h-36 bg-white p-2.5 rounded-xl flex items-center justify-center relative shadow-xs">
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900">
                  {/* Outer corner boxes */}
                  <rect x="0" y="0" width="25" height="25" fill="currentColor" />
                  <rect x="3" y="3" width="19" height="19" fill="white" />
                  <rect x="7" y="7" width="11" height="11" fill="currentColor" />
                  
                  <rect x="75" y="0" width="25" height="25" fill="currentColor" />
                  <rect x="78" y="3" width="19" height="19" fill="white" />
                  <rect x="82" y="7" width="11" height="11" fill="currentColor" />

                  <rect x="0" y="75" width="25" height="25" fill="currentColor" />
                  <rect x="3" y="78" width="19" height="19" fill="white" />
                  <rect x="7" y="82" width="11" height="11" fill="currentColor" />

                  {/* Center branding icon */}
                  <rect x="42" y="42" width="16" height="16" fill="currentColor" rx="2" />
                  <circle cx="50" cy="50" r="3" fill="white" />

                  {/* Simulated random QR pixels scatter */}
                  <rect x="35" y="5" width="5" height="15" fill="currentColor" />
                  <rect x="45" y="10" width="10" height="5" fill="currentColor" />
                  <rect x="60" y="5" width="5" height="5" fill="currentColor" />
                  <rect x="65" y="15" width="10" height="10" fill="currentColor" />

                  <rect x="35" y="75" width="15" height="5" fill="currentColor" />
                  <rect x="40" y="85" width="5" height="10" fill="currentColor" />
                  <rect x="55" y="80" width="15" height="5" fill="currentColor" />
                  <rect x="65" y="70" width="5" height="10" fill="currentColor" />

                  <rect x="5" y="35" width="15" height="5" fill="currentColor" />
                  <rect x="15" y="45" width="5" height="15" fill="currentColor" />
                  <rect x="5" y="60" width="10" height="5" fill="currentColor" />

                  <rect x="75" y="35" width="10" height="10" fill="currentColor" />
                  <rect x="85" y="50" width="10" height="5" fill="currentColor" />
                  <rect x="80" y="60" width="15" height="10" fill="currentColor" />
                </svg>
              </div>

              <span className="text-[10px] font-mono text-orbit-accent mt-3 uppercase tracking-wider font-bold">Lien Direct APK</span>
              <p className="text-[8px] text-slate-500 text-center mt-1">Expo Artifact EAS Package</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
