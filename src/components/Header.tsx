import React from 'react';
import { Youtube, Gamepad2, Star, MessageSquare } from 'lucide-react';
import { PeaceGamingProfile } from '../types/portfolio';

interface HeaderProps {
  profile: PeaceGamingProfile;
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ profile, onContactClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#090b10]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center -space-x-1.5">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/30">
              <Youtube className="w-4 h-4 fill-white" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30 border-2 border-[#090b10]">
              <Gamepad2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-base text-white tracking-tight">
              {profile.name}
            </span>
            <span className="hidden sm:inline-block ml-2 text-[11px] text-slate-400 font-medium">
              YouTube &amp; Roblox
            </span>
          </div>
        </a>

        {/* Center Rating Badge */}
        <a 
          href="#proof"
          className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold hover:bg-amber-400/20 transition-colors"
        >
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{profile.stats.rating} Rating · 21 Verified Reviews</span>
        </a>

        {/* Nav Links & CTA */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <a href="#services" className="text-slate-300 hover:text-white transition-colors hidden sm:block">
            Services
          </a>
          <a href="#proof" className="text-slate-300 hover:text-white transition-colors hidden sm:block">
            Proof of Work
          </a>
          <button
            onClick={onContactClick}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold transition-all shadow-md shadow-red-600/20 active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get Started</span>
          </button>
        </div>

      </div>
    </header>
  );
};
