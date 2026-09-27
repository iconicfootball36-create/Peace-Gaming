import React from 'react';
import { PeaceGamingProfile } from '../types/portfolio';
import { Header } from './Header';
import { ProofOfWork } from './ProofOfWork';
import { FooterSimple } from './FooterSimple';

interface ProofPageProps {
  profile: PeaceGamingProfile;
}

export const ProofPage: React.FC<ProofPageProps> = ({ profile }) => {
  const handleContactClick = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col font-sans selection:bg-red-500/30 selection:text-white">
      <Header
        profile={profile}
        onContactClick={handleContactClick}
      />

      <main className="flex-1">
        <ProofOfWork
          profile={profile}
          onOrderClick={handleContactClick}
        />
      </main>

      <FooterSimple profile={profile} />
    </div>
  );
};
