import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Cpu, Flame, Smartphone, Globe, MessageCircle } from 'lucide-react';
import moiImage from '../../assets/img/moi.jpg';
import ralphImage from '../../assets/img/ralph.jpg';

interface AboutSectionProps {
  onDownloadClick?: () => void;
}

export default function AboutSection({ onDownloadClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-5 position-relative overflow-hidden bg-white border-top border-secondary-subtle">
      <div className="position-absolute top-0 start-25 w-[320px] h-[320px] rounded-circle bg-orbit-glow/5 blur-[100px] pointer-events-none" />
      <div className="position-absolute bottom-10 end-10 w-[384px] h-[384px] rounded-circle bg-orbit-accent/5 blur-[120px] pointer-events-none" />

      <div className="container py-4 position-relative z-1">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Visual signature card */}
          <div className="col-12 col-lg-5 position-relative" id="about-visual-card">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="position-relative"
            >
              <div id="aboutImageCarousel" className="carousel slide shadow-sm rounded-4 overflow-hidden bg-light" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#aboutImageCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#aboutImageCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={moiImage} className="d-block w-100" style={{ maxHeight: '500px', objectFit: 'contain' }} alt="Ralph 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={ralphImage} className="d-block w-100" style={{ maxHeight: '500px', objectFit: 'contain' }} alt="Ralph 2" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#aboutImageCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Précédent</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#aboutImageCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Suivant</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Mission statement write-up */}
          <div className="col-12 col-lg-7 d-flex flex-column gap-3" id="about-statement-card">
            <h3 className="text-uppercase font-mono fw-bold text-orbit-accent small mb-1" style={{ letterSpacing: '0.1em' }}>
              Derrière l'Application
            </h3>
            
            <h2 className="font-display display-5 fw-bold text-dark tracking-tight">
              Reprendre le contrôle de notre espace de connexion.
            </h2>

            <div className="bg-gradient-orbit rounded-pill" style={{ height: '4px', width: '80px' }} />

            <p className="lead text-secondary fw-light my-3">
              « Je suis Ralph, développeur passionné et créateur d'Orbit Post. J'ai conçu cette plateforme pour offrir une alternative moderne et performante, où la sécurité, l'innovation et l'expérience utilisateur sont au cœur de chaque ligne de code. Mon objectif est de redéfinir notre façon de communiquer. »
            </p>

            <div className="d-flex flex-wrap gap-3">
              <button
                onClick={onDownloadClick}
                className="btn btn-orbit-gradient rounded-pill px-4 py-2 text-xs font-mono fw-semibold d-flex align-items-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Consulter Version d'essai APK</span>
              </button>

              <a
                href="https://wa.me/237689476780"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success rounded-pill px-4 py-2 text-xs font-mono fw-semibold d-inline-flex align-items-center gap-2 text-decoration-none shadow-sm"
                style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', color: '#166534' }}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +237 6 89 47 67 80</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
