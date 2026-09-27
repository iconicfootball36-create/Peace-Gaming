import React from 'react';
import { Youtube, Gamepad2, Star, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { PeaceGamingProfile } from '../types/portfolio';

interface HeroSimpleProps {
  profile: PeaceGamingProfile;
  onContactClick: () => void;
  onSelectService: (serviceType: 'youtube' | 'roblox') => void;
}

export const HeroSimple: React.FC<HeroSimpleProps> = ({ profile, onContactClick, onSelectService }) => {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Rating summary tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold mb-6">
          <div className="flex items-center text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="ml-1 text-white font-bold">{profile.stats.rating}</span>
          </div>
          <span className="text-slate-500">·</span>
          <span>{profile.stats.totalReviews} Verified Client Reviews</span>
          <span className="text-slate-500">·</span>
          <span className="text-emerald-400 font-medium">100% Organic &amp; Safe</span>
        </div>

        {/* Name & Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Hi, I’m <span className="text-red-500">{profile.name}</span>.
        </h1>
        <p className="mt-3 text-xl sm:text-2xl font-bold text-slate-200">
          Professional YouTube Channel Promoter &amp; Roblox Game Developer
        </p>

        {/* Short, direct bio - no unnecessary fluff */}
        <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          I help creators grow their YouTube channels with smart, organic strategies that drive real subscribers and engagement. I also design and develop custom Roblox games, focusing on clean gameplay, strong retention, and polished player experiences.
        </p>

        {/* 3 Core Commitments */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5">
            <CheckCircle className="w-3.5 h-3.5 text-red-400" />
            <span>Clear Communication</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5">
            <CheckCircle className="w-3.5 h-3.5 text-red-400" />
            <span>Reliable Delivery</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5">
            <CheckCircle className="w-3.5 h-3.5 text-red-400" />
            <span>Results-Focused Work</span>
          </div>
        </div>

        {/* Dual Primary Action Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
          
          {/* Card 1: YouTube Promotion */}
          <div 
            onClick={() => onSelectService('youtube')}
            className="p-5 rounded-2xl bg-gradient-to-b from-[#141620] to-[#0e1017] border border-white/10 hover:border-red-500/50 cursor-pointer transition-all duration-200 group shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center">
                <Youtube className="w-5 h-5 fill-red-500 text-red-500" />
              </div>
              <span className="text-[11px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                From $14.05
              </span>
            </div>
            <h3 className="font-display font-bold text-base text-white group-hover:text-red-400 transition-colors">
              YouTube Channel Promotion
            </h3>
            <p className="mt-1 text-xs text-slate-400 line-clamp-2">
              Organic video &amp; USA channel promotion to gain real viewers and watch time.
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-red-400 group-hover:translate-x-1 transition-transform">
              <span>View Packages &amp; Order</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Roblox Game Dev */}
          <div 
            onClick={() => onSelectService('roblox')}
            className="p-5 rounded-2xl bg-gradient-to-b from-[#141620] to-[#0e1017] border border-white/10 hover:border-indigo-500/50 cursor-pointer transition-all duration-200 group shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="text-[11px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                Custom Games
              </span>
            </div>
            <h3 className="font-display font-bold text-base text-white group-hover:text-indigo-400 transition-colors">
              Roblox Game Development
            </h3>
            <p className="mt-1 text-xs text-slate-400 line-clamp-2">
              Clean Luau gameplay scripting, map design &amp; player retention loops.
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform">
              <span>Discuss Your Game</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
