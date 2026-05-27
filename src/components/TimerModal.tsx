import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock } from 'lucide-react';

interface TimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  durationSeconds?: number;
}

export default function TimerModal({ isOpen, onClose, durationSeconds = 3600 }: TimerModalProps) {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(durationSeconds);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, durationSeconds]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const progress = ((durationSeconds - timeLeft) / durationSeconds) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            {/* Main Content */}
            <div className="p-8 text-center space-y-6">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-orbit-accent/10">
                  <Clock className="w-8 h-8 text-orbit-accent animate-pulse" />
                </div>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl font-bold text-slate-800">
                Mise à niveau en cours
              </h2>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm font-light">
                Nos serveurs se mettent à jour. Merci de patienter.
              </p>

              {/* Timer Display */}
              <div className="py-8">
                <div className="text-6xl font-mono font-bold text-orbit-accent tracking-tight">
                  {formatTime(timeLeft)}
                </div>
                <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-mono">
                  Temps restant
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-linear-to-r from-orbit-primary to-orbit-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* CTA */}
              <button
                onClick={onClose}
                className="w-full px-6 py-3 rounded-2xl font-semibold text-sm text-white bg-linear-to-r from-orbit-primary to-orbit-accent hover:opacity-95 transition-opacity cursor-pointer mt-6"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
