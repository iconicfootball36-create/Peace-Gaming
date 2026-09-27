import React from 'react';
import { ZoomIn, CheckCircle } from 'lucide-react';
import { ProofScreenshot } from '../types/portfolio';
import { ExactScreenshotView } from './ExactScreenshotView';

interface ProofScreenshotCardProps {
  screenshot: ProofScreenshot;
  onClick: () => void;
}

export const ProofScreenshotCard: React.FC<ProofScreenshotCardProps> = ({ screenshot, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-2xl bg-[#0f1118] border border-white/10 hover:border-red-500/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-950/30 flex flex-col justify-between"
    >
      {/* Top Card Label */}
      <div className="p-3 bg-[#141724] border-b border-white/5 flex items-center justify-between text-xs">
        <span className="font-bold text-white flex items-center gap-1.5 truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          {screenshot.title}
        </span>
        <span className="text-[10px] font-semibold text-red-400 bg-red-500/10 px-2 py-0.5 rounded shrink-0">
          {screenshot.badge}
        </span>
      </div>

      {/* Realistic Mobile Screenshot Mockup inside card */}
      <div className="p-3 bg-[#0a0c12] relative overflow-hidden flex items-center justify-center">
        
        {/* Subtle hover overlay with "Click to view full screenshot" */}
        <div className="absolute inset-0 bg-red-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity z-20 flex flex-col items-center justify-center gap-2 text-white">
          <div className="p-3 rounded-full bg-red-600 shadow-lg shadow-red-600/40 transform group-hover:scale-110 transition-transform">
            <ZoomIn className="w-5 h-5 text-white" />
          </div>
          <span className="text-xs font-bold tracking-wide">Click to Enlarge Full Screenshot</span>
        </div>

        {/* High-Fidelity Exact Mobile Screenshot Mockup */}
        <div className="w-full max-w-[270px]">
          <ExactScreenshotView screenId={screenshot.id} />
        </div>

      </div>

      {/* Card Footer Summary */}
      <div className="p-3 bg-[#12141e] border-t border-white/5">
        <p className="text-xs text-slate-300 leading-snug line-clamp-1">
          {screenshot.description}
        </p>
        <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
          <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[10px]">
            <CheckCircle className="w-3 h-3" /> Authentic Screen
          </span>
          <span className="font-bold text-red-400 group-hover:underline text-[11px]">
            Click to pop up ↗
          </span>
        </div>
      </div>
    </div>
  );
};
