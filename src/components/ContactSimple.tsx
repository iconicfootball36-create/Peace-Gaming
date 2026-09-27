import React, { useState, useId } from 'react';
import { Send, Mail, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { PeaceGamingProfile } from '../types/portfolio';

interface ContactSimpleProps {
  profile: PeaceGamingProfile;
  preselectedService?: string;
}

export const ContactSimple: React.FC<ContactSimpleProps> = ({ profile, preselectedService }) => {
  const channelLinkId = useId();
  const serviceTypeId = useId();
  const contactInfoId = useId();
  const notesId = useId();

  const [channelLink, setChannelLink] = useState('');
  const [serviceType, setServiceType] = useState(preselectedService || 'YouTube Video Promotion ($14.05)');
  const [contactInfo, setContactInfo] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent('Project Inquiry with Peace Gaming')}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-[#090b10] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header - Simple and Direct */}
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Let’s Grow Your Channel or Build Your Game
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Clear communication, reliable delivery, and fast turnaround. Reach out directly below:
          </p>
        </div>

        {/* Quick Connect Buttons */}
        <div className="mb-8">
          <a
            href={emailComposeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#12141e] hover:bg-[#181a28] border border-white/10 transition-all text-white group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-red-500/10 text-red-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Direct Email</span>
                <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                  {profile.email}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </a>

        </div>

        {/* Quick Project Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12141d] border border-white/10 shadow-xl">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Message Sent!
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Thank you! Peace Gaming will review your channel/project and get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-red-400 underline font-semibold mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={channelLinkId} className="block text-xs font-semibold text-slate-300 mb-1">
                    YouTube Channel / Video / Roblox Link *
                  </label>
                  <input
                    id={channelLinkId}
                    type="text"
                    required
                    placeholder="youtube.com/@channel or video link"
                    value={channelLink}
                    onChange={(e) => setChannelLink(e.target.value)}
                    className="w-full bg-[#181a26] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50"
                  />
                </div>

                <div>
                  <label htmlFor={serviceTypeId} className="block text-xs font-semibold text-slate-300 mb-1">
                    Service Required
                  </label>
                  <select
                    id={serviceTypeId}
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#181a26] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500/50"
                  >
                    <option value="Organic YouTube Video Promotion ($14.05)">Organic YouTube Video Promotion (From $14.05)</option>
                    <option value="Organic USA Channel Promotion ($14.05)">Organic USA Channel Promotion (From $14.05)</option>
                    <option value="Custom Roblox Game Development">Custom Roblox Game Development</option>
                    <option value="Both / Long Term Collaboration">Both / Long Term Collaboration</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor={contactInfoId} className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Email or Discord *
                </label>
                <input
                  id={contactInfoId}
                  type="text"
                  required
                  placeholder="e.g. email@example.com or @handle"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full bg-[#181a26] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50"
                />
              </div>

              <div>
                <label htmlFor={notesId} className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Details / Target Goals
                </label>
                <textarea
                  id={notesId}
                  rows={2}
                  placeholder="Tell me what you want to achieve with your video or game..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#181a26] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-all flex items-center justify-center gap-2 shadow-md shadow-red-600/20 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Send Project Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Fast response · Clear communication · 100% reliable delivery</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
