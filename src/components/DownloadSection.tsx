import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownToLine, Smartphone, Check, HelpCircle, ShieldAlert, Award } from 'lucide-react';

interface DownloadSectionProps {
  onDownloadClick?: () => void;
}

export default function DownloadSection({ onDownloadClick }: DownloadSectionProps) {
  const [selectedOS, setSelectedOS] = useState<'android' | 'ios'>('android');
  const [copiedLink, setCopiedLink] = useState(false);

  const apkUrl = "https://expo.dev/artifacts/eas/B0W56-mT2vSQ9-4inXdbcZ-wiIhkap__qSSJ8cOjUFc.apk";

  const handleCopy = () => {
    navigator.clipboard.writeText(apkUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="download" className="py-5 position-relative overflow-hidden bg-light border-top border-secondary-subtle">
      <div className="position-absolute top-50 start-50 translate-middle w-[700px] h-[300px] bg-orbit-accent/10 rounded-circle blur-[120px] pointer-events-none" />

      <div className="container py-4 position-relative z-1">
        <div className="card border border-secondary-subtle p-4 p-md-5 rounded-4 position-relative overflow-hidden shadow-sm mx-auto bg-white" style={{ maxWidth: '900px' }}>
          
          <div className="row align-items-center g-4">
            
            {/* Left Column: Call-to-action */}
            <div className="col-12 col-md-8 d-flex flex-column gap-3" id="download-cta-block">
              <span className="badge bg-purple bg-opacity-10 text-purple border border-purple border-opacity-25 px-3 py-1.5 rounded-pill font-mono align-self-start text-uppercase" style={{ fontSize: '11px' }}>
                S'INSTALLER EN 2 MINUTES
              </span>
              
              <h2 className="font-display h2 fw-bold text-dark mb-1">
                Prêt à rejoindre l'orbite ?
              </h2>
              
              <p className="text-secondary fw-light fs-6">
                Rejoignez des milliers d'utilisateurs qui ont déjà fait le choix de la souveraineté numérique et de la liberté d'expression.
              </p>

              {/* Dynamic OS Tabs */}
              <div className="d-flex gap-2 p-1 bg-light rounded-3 border border-secondary-subtle" style={{ maxWidth: '280px' }}>
                <button
                  onClick={() => setSelectedOS('android')}
                  className={`flex-grow-1 py-1.5 rounded-2 text-xs fw-bold transition-all border-0 ${
                    selectedOS === 'android' ? 'bg-white text-dark shadow-sm fw-bold border border-secondary-subtle font-mono' : 'bg-transparent text-secondary'
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  <Smartphone className="w-3.5 h-3.5 d-inline mr-1" />
                  <span>Android (APK)</span>
                </button>
                <button
                  onClick={() => setSelectedOS('ios')}
                  className={`flex-grow-1 py-1.5 rounded-2 text-xs fw-bold transition-all border-0 ${
                    selectedOS === 'ios' ? 'bg-white text-dark shadow-sm fw-bold border border-secondary-subtle font-mono' : 'bg-transparent text-secondary'
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  <Smartphone className="w-3.5 h-3.5 d-inline mr-1" />
                  <span>iOS Expo Go</span>
                </button>
              </div>

              {/* Action buttons list */}
              {selectedOS === 'android' ? (
                <div className="d-flex flex-column gap-3 pt-2">
                  <div className="d-flex flex-wrap gap-3">
                    <button
                      onClick={onDownloadClick}
                      className="btn btn-orbit-gradient rounded-pill px-4 py-2.5 text-xs font-mono fw-semibold d-flex align-items-center gap-2"
                    >
                      <ArrowDownToLine className="w-4 h-4" />
                      <span>Télécharger l'APK officiel</span>
                    </button>

                    <button
                      onClick={handleCopy}
                      className="btn btn-outline-secondary rounded-pill px-4 py-2.5 text-xs font-mono fw-semibold bg-light text-dark border-secondary-subtle d-inline-flex align-items-center gap-2"
                    >
                      {copiedLink ? (
                        <>
                          <Check className="w-4 h-4 text-success" />
                          <span>Lien Copié !</span>
                        </>
                      ) : (
                        <span>Copier l'URL de téléchargement</span>
                      )}
                    </button>
                  </div>

                  {/* Installation Help Guides */}
                  <div className="alert alert-warning border border-warning border-opacity-25 p-3 rounded-3 d-flex gap-3 text-xs text-dark mb-0">
                    <ShieldAlert className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                    <div>
                      <strong>Note d'installation Android :</strong> L'application est un binaire officiel compilé de manière sécurisée par Expo EAS. Lors de l'installation, si le système vous avertit "Source inconnue", autorisez simplement le navigateur ou le gestionnaire de fichiers à installer le package. L'application est certifiée sans traqueurs.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-flex flex-column gap-3 pt-2">
                  <p className="small text-secondary mb-0">
                    Pour démarrer immédiatement l'orbite sur iOS, installez l'utilitaire gratuit <strong className="text-dark">Expo Go</strong> depuis l'App Store, puis ouvrez le serveur depuis votre compte développeur ou scannez notre Manifest de développement.
                  </p>
                  <div className="p-3 rounded-3 bg-light border border-secondary-subtle text-xs text-secondary">
                    <ol className="list-decimal pl-3 mb-0 space-y-1 fw-light">
                      <li>Installez <strong>Expo Go</strong> Apple App Store</li>
                      <li>Inscrivez-vous sur Expo ou copiez l'ID du projet</li>
                      <li>Recherchez le projet <strong>"Orbit Post"</strong> pour lancer le pipeline</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Mini Simulated QR Code for Desktop to Mobile hand-off */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center p-4 rounded-4 bg-light border border-secondary-subtle" id="download-qrcode-block">
              <span className="text-[9px] font-mono text-secondary text-uppercase tracking-widest mb-3" style={{ fontSize: '9px', letterSpacing: '0.1em' }}>Scanner pour mobile</span>
              
              {/* Sleek SVG simulated QR Code linking to APK */}
              <div className="bg-white p-2 rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '150px', height: '150px' }}>
                <svg viewBox="0 0 100 100" className="w-100 h-100 text-dark">
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
 
              <span className="text-[10px] font-mono text-orbit-accent mt-3 text-uppercase font-bold" style={{ fontSize: '10px' }}>Lien Direct APK</span>
              <p className="font-mono text-secondary text-center mt-1 mb-0" style={{ fontSize: '8px' }}>Expo Artifact EAS Package</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
