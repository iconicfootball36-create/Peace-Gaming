import React, { useEffect, useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  Maximize2, 
  Minimize2,
} from 'lucide-react';
import { ProofScreenshot } from '../types/portfolio';
import { ExactScreenshotView } from './ExactScreenshotView';

interface ProofLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ProofScreenshot[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  onContactClick: () => void;
}

export const ProofLightboxModal: React.FC<ProofLightboxModalProps> = ({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onNavigate,
  onContactClick,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const current = screenshots[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % screenshots.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, screenshots.length, onClose, onNavigate]);

  if (!isOpen || !current) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % screenshots.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Lightbox container */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[95vh] rounded-3xl bg-[#0f111a] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-colors shadow-lg"
          aria-label="Close proof popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: High-Fidelity Exact Smartphone Screenshot Render */}
        <div className="flex-1 bg-[#08090e] p-4 sm:p-6 flex flex-col items-center justify-center relative overflow-y-auto min-h-[380px] md:min-h-[580px]">
          
          {/* Navigation Controls (Arrows) */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/90 hover:bg-red-600 text-white border border-white/10 transition-all z-20 shadow-xl"
            title="Previous screenshot (Left arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/90 hover:bg-red-600 text-white border border-white/10 transition-all z-20 shadow-xl"
            title="Next screenshot (Right arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Device Mockup with Exact Screenshot Content */}
          <div className={`transition-all duration-300 w-full ${isZoomed ? 'max-w-[420px]' : 'max-w-[340px]'} shadow-2xl`}>
            <ExactScreenshotView screenId={current.id} isZoomed={isZoomed} />
          </div>

          {/* Zoom toggle button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="mt-3 px-3 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1.5 transition-colors"
          >
            {isZoomed ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>{isZoomed ? 'Reset Zoom' : 'Zoom In Screenshot'}</span>
          </button>

        </div>

        {/* Right Side: Proof Details & Direct Action */}
        <div className="w-full md:w-80 p-6 md:p-8 bg-[#12141e] border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between">
          
          <div>
            {/* Screen Counter & Badge */}
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="font-mono text-slate-400">
                Screenshot {currentIndex + 1} of {screenshots.length}
              </span>
              <span className="font-bold text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded-full text-[11px]">
                {current.badge}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-white leading-tight">
              {current.title}
            </h3>

            <p className="text-xs text-slate-400 mt-1 font-medium">
              {current.subtitle}
            </p>

            <p className="text-xs text-slate-300 mt-4 leading-relaxed">
              {current.description}
            </p>

            {/* Key stats pill grid */}
            <div className="mt-5 space-y-2">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="flex justify-between items-center p-2 rounded-lg bg-[#181b28] border border-white/5 text-xs">
                  <span className="text-slate-400">{m.label}</span>
                  <span className="font-bold text-white font-mono">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Thumbnail dots */}
            <div className="mt-6 flex items-center gap-1.5 justify-center">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-red-500' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Jump to screenshot ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Action Call to Action */}
          <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hire Peace Gaming</span>
            </button>

            <div className="flex items-center justify-center gap-1 text-[11px] text-emerald-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Policy-Safe &amp; Real Growth</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
