import React from 'react';
import { Star, ChevronLeft, Menu, Heart } from 'lucide-react';

interface ExactScreenshotViewProps {
  screenId: string;
  isZoomed?: boolean;
}

export const ExactScreenshotView: React.FC<ExactScreenshotViewProps> = ({ screenId, isZoomed = false }) => {
  return (
    <div className={`w-full bg-[#141518] text-[#e5e5e5] font-sans select-none overflow-hidden rounded-2xl border border-[#2a2c33] shadow-2xl ${
      isZoomed ? 'scale-105' : ''
    }`}>
      
      {/* Top Mobile Status Bar */}
      <div className="bg-[#141518] px-5 pt-3 pb-2 flex items-center justify-between text-[11px] text-[#9ca3af] border-b border-white/5">
        <span className="font-semibold text-white">9:41</span>
        <div className="w-16 h-3.5 rounded-full bg-black/60" />
        <div className="flex items-center gap-1.5 text-[10px]">
          <span>5G</span>
          <div className="w-4 h-2 border border-slate-400 rounded-xs p-0.5">
            <div className="w-full h-full bg-slate-300" />
          </div>
        </div>
      </div>

      {/* SCREEN 1: 4.8 Rating Breakdown & Dumpling C Gaming */}
      {(screenId === 'shot-rating-breakdown' || screenId === 'img-7') && (
        <div className="p-4 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#24262f] flex items-center justify-center text-white">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">21 reviews</h3>
                <span className="text-[10px] text-slate-400">4.8 overall rating</span>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#24262f] flex items-center justify-center text-white">
              <Menu className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Rating Scorecard */}
          <div className="p-3.5 rounded-xl bg-[#1c1d22] border border-white/5 space-y-2 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="font-bold text-white text-sm">Overall rating</span>
              <span className="flex items-center gap-1 text-white font-bold text-sm">
                <Star className="w-4 h-4 fill-white text-white" /> 4.8
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-300 text-[11px]">
              <span>Seller communication level</span>
              <span className="flex items-center gap-1 text-white font-semibold">
                <Star className="w-3 h-3 fill-white text-white" /> 4.8
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-300 text-[11px]">
              <span>Quality of delivery</span>
              <span className="flex items-center gap-1 text-white font-semibold">
                <Star className="w-3 h-3 fill-white text-white" /> 4.9
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-300 text-[11px]">
              <span>Value of delivery</span>
              <span className="flex items-center gap-1 text-white font-semibold">
                <Star className="w-3 h-3 fill-white text-white" /> 4.8
              </span>
            </div>
          </div>

          {/* Review 1: joey_1996 */}
          <div className="pt-2 border-t border-white/5 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-800/80 border border-white/20 flex items-center justify-center text-[10px] font-bold">
                  J
                </div>
                <div>
                  <span className="font-bold text-white block leading-tight">joey_1996</span>
                  <span className="text-[10px] text-slate-400">🇺🇸 United States</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-white">
                <Star className="w-3.5 h-3.5 fill-white text-white" /> 5.0
              </div>
            </div>
            <span className="text-[10px] text-slate-500 block">1 week ago</span>
            <p className="text-xs text-slate-200">Great work</p>
          </div>

          {/* Review 2: d_c12323 (Canada) Dumpling C Gaming */}
          <div className="pt-3 border-t border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-pink-700/80 border border-white/20 flex items-center justify-center text-[10px] font-bold">
                  D
                </div>
                <div>
                  <span className="font-bold text-white block leading-tight">d_c12323</span>
                  <span className="text-[10px] text-slate-400">🇨🇦 Canada</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-white">
                <Star className="w-3.5 h-3.5 fill-white text-white" /> 5.0
              </div>
            </div>
            <span className="text-[10px] text-slate-500 block">2 weeks ago</span>
            <p className="text-xs font-bold text-white">VERY KIND AND FAST!</p>

            {/* Dumpling C Gaming channel thumbnail mockup */}
            <div className="p-2 rounded-xl bg-[#1c1d24] border border-white/10 flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-700 flex items-center justify-center text-white font-extrabold text-xs shrink-0 shadow">
                🎮
              </div>
              <div className="min-w-0">
                <span className="font-bold text-xs text-white block truncate">Dumpling C Gaming</span>
                <span className="text-[10px] text-emerald-400 font-medium">YouTube Gaming Partner</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SCREEN 2: Gigs Screen (James B · Gigs Tab) */}
      {(screenId === 'shot-gigs' || screenId === 'img-4') && (
        <div className="p-4 space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <ChevronLeft className="w-5 h-5 text-white" />
              <h3 className="text-sm font-bold text-white">James B</h3>
            </div>
            <div className="w-5 h-5" />
          </div>

          {/* Tabs */}
          <div className="flex border-b border-white/10 text-xs font-semibold text-slate-400">
            <div className="flex-1 py-2 text-center">About</div>
            <div className="flex-1 py-2 text-center text-white border-b-2 border-white">Gigs</div>
            <div className="flex-1 py-2 text-center">Reviews</div>
          </div>

          {/* Gig 1: Medical */}
          <div className="p-2.5 rounded-xl bg-[#1c1d22] border border-white/5 flex gap-3 relative">
            <div className="w-20 h-16 rounded-lg bg-[#0f4c81] p-1.5 flex flex-col justify-between text-white shrink-0">
              <span className="text-[7px] text-blue-200 uppercase font-semibold">Medical</span>
              <span className="text-[8px] font-black leading-tight uppercase">Medical Transcription</span>
              <span className="text-[6px] text-blue-200">15 yrs exp</span>
            </div>
            <div className="flex-1 flex flex-col justify-between py-0.5">
              <span className="text-xs font-medium text-slate-200 leading-tight">Do medical transcription for all languages</span>
              <span className="text-xs text-slate-400">From <strong className="text-white">US$263.75</strong></span>
            </div>
            <Heart className="w-3.5 h-3.5 text-slate-500 absolute top-2.5 right-2.5" />
          </div>

          {/* Gig 2: Organic YouTube Video Promotion (Yellow Megaphone) */}
          <div className="p-2.5 rounded-xl bg-[#22231b] border-2 border-amber-500/70 flex gap-3 relative shadow-lg">
            <div className="w-20 h-16 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 p-1.5 flex flex-col justify-between text-black shrink-0 shadow-md">
              <span className="text-[7px] bg-red-600 text-white font-extrabold px-1 rounded self-start">ORGANIC</span>
              <span className="text-[8px] font-black uppercase tracking-tight leading-none text-slate-900">
                YOUTUBE VIDEO PROMOTION
              </span>
              <span className="text-[7px] font-bold text-red-700">📢 MEGAPHONE PUSH</span>
            </div>
            <div className="flex-1 flex flex-col justify-between py-0.5">
              <div className="flex items-center gap-1 text-[11px] text-amber-400 font-bold">
                <Star className="w-3 h-3 fill-amber-400" />
                <span>4.8 (21)</span>
              </div>
              <span className="text-xs font-bold text-white leading-tight">Do organic youtube video promotion</span>
              <span className="text-xs text-slate-300">From <strong className="text-emerald-400 text-sm font-extrabold">US$14.05</strong></span>
            </div>
            <Heart className="w-3.5 h-3.5 text-slate-500 absolute top-2.5 right-2.5" />
          </div>

          {/* Gig 3: YouTube USA Channel Promotion (USA Flag) */}
          <div className="p-2.5 rounded-xl bg-[#1c1d22] border border-white/5 flex gap-3 relative">
            <div className="w-20 h-16 rounded-lg bg-white p-1.5 flex flex-col justify-between text-red-600 shrink-0">
              <div className="flex justify-between items-center">
                <span className="text-[7px] font-extrabold text-blue-900">USA 🇺🇸</span>
                <span className="text-[6px] text-slate-500">HURRY</span>
              </div>
              <span className="text-[8px] font-black text-blue-900 uppercase leading-none">
                YOUTUBE USA PROMOTION
              </span>
              <span className="text-[6px] text-slate-700 font-semibold">GENUINE GROWTH</span>
            </div>
            <div className="flex-1 flex flex-col justify-between py-0.5">
              <span className="text-xs font-medium text-slate-200 leading-tight">Do organic usa youtube channel promotion</span>
              <span className="text-xs text-slate-300">From <strong className="text-white font-bold">US$14.05</strong></span>
            </div>
            <Heart className="w-3.5 h-3.5 text-slate-500 absolute top-2.5 right-2.5" />
          </div>
        </div>
      )}

      {/* SCREEN 3: Joey Kershinar Music Reviews */}
      {(screenId === 'shot-joey-music' || screenId === 'img-1') && (
        <div className="p-4 space-y-3.5">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#24262f] flex items-center justify-center text-white">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">21 reviews</h3>
                <span className="text-[10px] text-slate-400">4.8 overall rating</span>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#24262f] flex items-center justify-center text-white">
              <Menu className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Joey Review 1 */}
          <div className="space-y-1.5 pb-3 border-b border-white/5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>joey_1996</span>
                <span className="text-[11px] text-slate-400 font-normal">🇺🇸 United States</span>
              </span>
              <span className="flex items-center text-white font-bold text-xs"><Star className="w-3 h-3 fill-white mr-1" />5.0</span>
            </div>
            <span className="text-[10px] text-slate-500 block">1 week ago</span>
            <p className="text-xs text-slate-100 font-medium">Just what I wanted</p>
            {/* Attachment preview: Joey kershinar Radio */}
            <div className="p-2 rounded-lg bg-[#20222a] border border-white/5 flex items-center gap-2">
              <div className="w-10 h-7 rounded bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-[7px] font-bold text-white">
                RADIO
              </div>
              <div className="text-[10px] text-slate-300">Joey Kershinar Radio · 210 plays</div>
            </div>
          </div>

          {/* Kevinsorrell101 Review */}
          <div className="space-y-1.5 pb-3 border-b border-white/5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>kevinsorrell101</span>
                <span className="text-[11px] text-slate-400 font-normal">🇦🇺 Australia</span>
              </span>
              <span className="flex items-center text-white font-bold text-xs"><Star className="w-3 h-3 fill-white mr-1" />3.7</span>
            </div>
            <span className="text-[10px] text-slate-500 block">2 weeks ago</span>
            <p className="text-xs text-slate-200">Seems good, lets see how things go.</p>
            <div className="p-2 rounded-lg bg-[#20222a] border border-white/5 flex items-center gap-2">
              <div className="w-10 h-7 rounded bg-emerald-800 flex items-center justify-center text-[8px] text-white">
                🌿
              </div>
              <div className="text-[10px] text-slate-300">Wildlife &amp; Education Video</div>
            </div>
          </div>

          {/* Joey Review 2 */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>joey_1996</span>
                <span className="text-[11px] text-slate-400 font-normal">🇺🇸 United States</span>
              </span>
              <span className="flex items-center text-white font-bold text-xs"><Star className="w-3 h-3 fill-white mr-1" />5.0</span>
            </div>
            <span className="text-[10px] text-slate-500 block">3 weeks ago</span>
            <p className="text-xs text-slate-100 font-medium">Great results</p>
          </div>
        </div>
      )}

      {/* SCREEN 4: GNeUs & Sound Soul Music (img-3) */}
      {(screenId === 'shot-gneus-sound' || screenId === 'img-3' || screenId === 'img-6') && (
        <div className="p-4 space-y-3.5">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#24262f] flex items-center justify-center text-white">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">21 reviews</h3>
                <span className="text-[10px] text-slate-400">4.8 overall rating</span>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#24262f] flex items-center justify-center text-white">
              <Menu className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* testmusic */}
          <div className="space-y-1.5 pb-3 border-b border-white/5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>testmusic</span>
                <span className="text-[11px] text-slate-400 font-normal">🇺🇸 United States</span>
              </span>
              <span className="flex items-center text-white font-bold text-xs"><Star className="w-3 h-3 fill-white mr-1" />4.7</span>
            </div>
            <span className="text-[10px] text-slate-500 block">1 week ago</span>
            <p className="text-xs text-slate-200">Good progress, delivers what it promises.</p>
            <div className="p-2 rounded-lg bg-[#20222a] border border-white/5 flex items-center gap-2">
              <div className="w-12 h-6 rounded bg-purple-900 border border-purple-500/40 flex items-center justify-center text-[7px] font-black text-pink-300">
                SOUND SOUL
              </div>
              <span className="text-[10px] text-slate-300">Sound Soul Music Channel</span>
            </div>
          </div>

          {/* kevin_sullivan */}
          <div className="space-y-1 pb-3 border-b border-white/5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>kevin_sullivan</span>
                <span className="text-[11px] text-slate-400 font-normal">🇬🇧 United Kingdom</span>
              </span>
              <span className="flex items-center text-white font-bold text-xs"><Star className="w-3 h-3 fill-white mr-1" />4.7</span>
            </div>
            <span className="text-[10px] text-slate-500 block">2 weeks ago</span>
            <p className="text-xs text-slate-200">Excellent work</p>
          </div>

          {/* gneus18 */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>gneus18</span>
                <span className="text-[11px] text-slate-400 font-normal">🇺🇸 United States</span>
              </span>
              <span className="flex items-center text-white font-bold text-xs"><Star className="w-3 h-3 fill-white mr-1" />5.0</span>
            </div>
            <span className="text-[10px] text-slate-500 block">4 weeks ago</span>
            <p className="text-xs font-semibold text-white">He delivered beyond my expectations</p>
            <div className="p-2 rounded-lg bg-[#20222a] border border-white/5 flex items-center gap-2">
              <div className="w-10 h-7 rounded bg-red-900/60 border border-red-500/30 flex items-center justify-center text-[8px] font-bold text-white">
                GNeUs
              </div>
              <span className="text-[10px] text-slate-300">GNeUs YouTube Channel</span>
            </div>
          </div>
        </div>
      )}

      {/* SCREEN 5: Community & Artist Promotion (img-5) */}
      {(screenId === 'shot-community-reach' || screenId === 'img-5') && (
        <div className="p-4 space-y-3.5">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#24262f] flex items-center justify-center text-white">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">21 reviews</h3>
                <span className="text-[10px] text-slate-400">4.8 overall rating</span>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#24262f] flex items-center justify-center text-white">
              <Menu className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* jdthajoixt */}
          <div className="space-y-1.5 pb-3 border-b border-white/5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>jdthajoixt</span>
                <span className="text-[11px] text-slate-400 font-normal">🇺🇸 United States</span>
              </span>
              <span className="flex items-center text-white font-bold text-xs"><Star className="w-3 h-3 fill-white mr-1" />5.0</span>
            </div>
            <span className="text-[10px] text-slate-500 block">1 week ago</span>
            <p className="text-xs text-slate-100 italic">
              "that i have gotten my music to be popular by few people for the whole communites"
            </p>
          </div>

          {/* joey_1996 */}
          <div className="space-y-1 pb-3 border-b border-white/5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>joey_1996</span>
                <span className="text-[11px] text-slate-400 font-normal">🇺🇸 United States</span>
              </span>
              <span className="flex items-center text-white font-bold text-xs"><Star className="w-3 h-3 fill-white mr-1" />5.0</span>
            </div>
            <span className="text-[10px] text-slate-500 block">2 weeks ago</span>
            <p className="text-xs text-slate-200">Good timing and good work</p>
          </div>

          {/* jermainegord333 */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>jermainegord333</span>
                <span className="text-[11px] text-slate-400 font-normal">🇺🇸 United States</span>
              </span>
              <span className="flex items-center text-white font-bold text-xs"><Star className="w-3 h-3 fill-white mr-1" />4.0</span>
            </div>
            <span className="text-[10px] text-slate-500 block">3 weeks ago</span>
            <p className="text-xs text-slate-200">great job..</p>
            <div className="p-2 rounded-lg bg-[#20222a] border border-white/5 flex items-center gap-2">
              <div className="w-12 h-6 rounded bg-slate-900 border border-blue-500/40 flex items-center justify-center text-[7px] font-black text-blue-400">
                KLG RACHI
              </div>
              <span className="text-[10px] text-slate-300">Kashiyfo music group</span>
            </div>
          </div>
        </div>
      )}

      {/* SCREEN 6: Repeat Buyer Timeline (img-2) */}
      {(screenId === 'shot-repeat-trust' || screenId === 'img-2') && (
        <div className="p-4 space-y-3.5">
          {/* Tabs */}
          <div className="flex border-b border-white/10 text-xs font-semibold text-slate-400">
            <div className="flex-1 py-2 text-center">About</div>
            <div className="flex-1 py-2 text-center">Gigs</div>
            <div className="flex-1 py-2 text-center text-white border-b-2 border-white">Reviews</div>
          </div>

          <div className="flex justify-between items-center text-[10px] text-slate-400 pb-1">
            <span>Sorted by</span>
            <span className="text-white font-semibold flex items-center gap-1">Most Relevant ▼</span>
          </div>

          <div className="space-y-2.5">
            <div className="p-2 rounded-lg bg-[#1c1d22] border border-white/5">
              <div className="flex justify-between text-xs font-bold text-white">
                <span>joey_1996 🇺🇸</span>
                <span className="flex items-center"><Star className="w-3 h-3 fill-white mr-1" />5.0</span>
              </div>
              <span className="text-[9px] text-slate-400">1 week ago</span>
              <p className="text-xs text-slate-200 mt-1">Just what I wanted</p>
            </div>

            <div className="p-2 rounded-lg bg-[#1c1d22] border border-white/5">
              <div className="flex justify-between text-xs font-bold text-white">
                <span>joey_1996 🇺🇸</span>
                <span className="flex items-center"><Star className="w-3 h-3 fill-white mr-1" />5.0</span>
              </div>
              <span className="text-[9px] text-slate-400">3 weeks ago</span>
              <p className="text-xs text-slate-200 mt-1">Great results</p>
            </div>

            <div className="p-2 rounded-lg bg-[#1c1d22] border border-white/5">
              <div className="flex justify-between text-xs font-bold text-white">
                <span>joey_1996 🇺🇸</span>
                <span className="flex items-center"><Star className="w-3 h-3 fill-white mr-1" />5.0</span>
              </div>
              <span className="text-[9px] text-slate-400">2 years ago</span>
              <p className="text-xs text-slate-200 mt-1">Very kind and professional</p>
            </div>
          </div>
        </div>
      )}

      {/* Screen Bottom Bar */}
      <div className="px-4 py-2 bg-[#101114] border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
        <span>Verified Fiverr Client Screen</span>
        <span className="text-emerald-400 font-medium">100% Authentic</span>
      </div>

    </div>
  );
};
