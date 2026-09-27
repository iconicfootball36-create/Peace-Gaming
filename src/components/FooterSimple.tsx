import React from 'react';
import { Youtube, Gamepad2, ArrowUp, Star } from 'lucide-react';
import { PeaceGamingProfile } from '../types/portfolio';

interface FooterSimpleProps {
  profile: PeaceGamingProfile;
}

export const FooterSimple: React.FC<FooterSimpleProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#07080c] border-t border-white/5 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="flex items-center -space-x-1">
            <div className="w-5 h-5 rounded bg-red-600 flex items-center justify-center text-white">
              <Youtube className="w-3 h-3 fill-white" />
            </div>
            <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center text-white">
              <Gamepad2 className="w-3 h-3" />
            </div>
          </div>
          <span className="font-bold text-white">{profile.name}</span>
          <span>·</span>
          <span>YouTube Promotion &amp; Roblox Development</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
