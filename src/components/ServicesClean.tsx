import React from 'react';
import { Youtube, Gamepad2, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { ServiceCard } from '../types/portfolio';

interface ServicesCleanProps {
  services: ServiceCard[];
  onSelectService: (service: ServiceCard) => void;
}

export const ServicesClean: React.FC<ServicesCleanProps> = ({ services, onSelectService }) => {
  return (
    <section id="services" className="py-16 bg-[#0a0c12] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - Brief & Direct */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Services &amp; Gigs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Affordable, results-focused YouTube promotion and custom Roblox game engineering.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Policy-Safe &amp; Real Engagement</span>
          </div>
        </div>

        {/* 3 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 border ${
                srv.category === 'youtube'
                  ? 'bg-gradient-to-b from-[#131520] to-[#0c0e14] border-white/10 hover:border-red-500/40'
                  : 'bg-gradient-to-b from-[#141524] to-[#0d0e18] border-white/10 hover:border-indigo-500/40'
              }`}
            >
              <div>
                {/* Header Icon + Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${
                    srv.category === 'youtube' ? 'bg-red-500/10 text-red-500' : 'bg-indigo-500/10 text-indigo-400'
                  }`}>
                    {srv.category === 'youtube' ? <Youtube className="w-5 h-5 fill-current" /> : <Gamepad2 className="w-5 h-5" />}
                  </div>
                  <span className="font-display text-lg font-extrabold text-white">
                    {srv.priceStarting}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pb-6 border-b border-white/5">
                  {srv.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className={`w-3.5 h-3.5 shrink-0 ${
                        srv.category === 'youtube' ? 'text-red-400' : 'text-indigo-400'
                      }`} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => onSelectService(srv)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 shadow-md ${
                    srv.category === 'youtube'
                      ? 'bg-red-600 hover:bg-red-500 shadow-red-600/20'
                      : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20'
                  }`}
                >
                  <span>{srv.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
