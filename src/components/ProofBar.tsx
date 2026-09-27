import React from 'react';
import { ShieldCheck, Target, Zap, Award, Layers } from 'lucide-react';

export const ProofBar: React.FC = () => {
  const niches = [
    'Tech & AI Software',
    'Personal Finance & Crypto',
    'B2B SaaS & Founders',
    'Documentary & Commentary',
    'Gaming & Esports',
    'Creator Commerce',
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-[#0b0d13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">
                100% Algorithm Safe &amp; Policy Compliant
              </h4>
              <p className="text-xs text-slate-400">
                Zero fake bot views or sketchy SMM panels · Pure audience engineering
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-2 uppercase tracking-wider">
              Niches Mastered:
            </span>
            {niches.map((niche, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md text-xs font-medium bg-[#141722] text-slate-300 border border-white/5"
              >
                {niche}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
