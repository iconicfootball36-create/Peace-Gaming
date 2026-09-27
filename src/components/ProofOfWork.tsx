import React, { useState } from 'react';
import { Star, ShieldCheck, Filter, ZoomIn } from 'lucide-react';
import { PeaceGamingProfile } from '../types/portfolio';
import { proofScreenshotsData } from '../data/defaultData';
import { ProofScreenshotCard } from './ProofScreenshotCard';
import { ProofLightboxModal } from './ProofLightboxModal';

interface ProofOfWorkProps {
  profile: PeaceGamingProfile;
  onOrderClick: () => void;
}

export const ProofOfWork: React.FC<ProofOfWorkProps> = ({ profile, onOrderClick }) => {
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Screenshots'>('All');

  const handleOpenScreenshot = (index: number) => {
    setSelectedScreenshotIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedScreenshotIndex(null);
  };

  return (
    <section id="proof" className="py-16 bg-[#090a0f] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Verified Client Proof of Work</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Official Proof Screenshots &amp; Reviews
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Click any screenshot below to pop it up in full view. Real orders, real ratings, real results.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Click any image to pop up</span>
            </span>
          </div>
        </div>

        {/* Detailed Rating Breakdown Card (from screenshots) */}
        <div className="rounded-2xl bg-[#12141d] border border-white/10 p-5 sm:p-6 mb-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            
            {/* Overall Rating Block */}
            <div className="flex items-center gap-4 md:border-r border-white/10 md:pr-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex flex-col items-center justify-center shrink-0">
                <span className="font-display text-2xl font-extrabold text-amber-400">
                  {profile.stats.rating}
                </span>
                <div className="flex text-amber-400 -mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Overall Rating</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {profile.stats.totalReviews} verified reviews
                </p>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Five-Star Track Record</span>
                </div>
              </div>
            </div>

            {/* Quality of delivery */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Quality of Delivery</span>
                <span className="text-white font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  {profile.stats.deliveryQuality}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '98%' }} />
              </div>
            </div>

            {/* Seller Communication */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Seller Communication</span>
                <span className="text-white font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  {profile.stats.communication}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '96%' }} />
              </div>
            </div>

            {/* Value of Delivery */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Value of Delivery</span>
                <span className="text-white font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  {profile.stats.value}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '96%' }} />
              </div>
            </div>

          </div>
        </div>

        {/* Filter View Selector */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" />
            View:
          </span>
          {(['All', 'Screenshots'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === tab
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-900'
              }`}
            >
              {tab === 'All' ? 'All Proof (Screenshots & Reviews)' : tab}
            </button>
          ))}
        </div>

        {/* Proof Screenshots Gallery (Click to pop up) */}
        {(activeFilter === 'All' || activeFilter === 'Screenshots') && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ZoomIn className="w-4 h-4 text-red-500" />
                <span>Proof Screenshots Gallery (Click to Enlarge)</span>
              </h3>
              <span className="text-xs text-slate-400">7 Verified Captures</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {proofScreenshotsData.map((shot, idx) => (
                <ProofScreenshotCard
                  key={shot.id}
                  screenshot={shot}
                  onClick={() => handleOpenScreenshot(idx)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Modal Lightbox Popup when a screenshot is clicked */}
        <ProofLightboxModal
          isOpen={selectedScreenshotIndex !== null}
          onClose={handleCloseLightbox}
          screenshots={proofScreenshotsData}
          currentIndex={selectedScreenshotIndex ?? 0}
          onNavigate={(index) => setSelectedScreenshotIndex(index)}
          onContactClick={onOrderClick}
        />

      </div>
    </section>
  );
};
