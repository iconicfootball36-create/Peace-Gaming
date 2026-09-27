import React, { useState } from 'react';
import { peaceGamingProfile, servicesData } from './data/defaultData';
import { ServiceCard } from './types/portfolio';
import { Header } from './components/Header';
import { HeroSimple } from './components/HeroSimple';
import { ServicesClean } from './components/ServicesClean';
import { ProofPage } from './components/ProofPage';
import { ContactSimple } from './components/ContactSimple';
import { FooterSimple } from './components/FooterSimple';

export default function App() {
  const profile = peaceGamingProfile;
  const isProofPage = window.location.pathname === '/proof';
  const [selectedService, setSelectedService] = useState<string>('Basic Package ($20)');

  if (isProofPage) {
    return <ProofPage profile={profile} />;
  }

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (srv: ServiceCard) => {
    setSelectedService(`${srv.title} (${srv.priceStarting})`);
    scrollToContact();
  };

  const handleSelectType = (type: 'youtube' | 'roblox') => {
    if (type === 'youtube') {
      setSelectedService('Basic Package ($20)');
    } else {
      setSelectedService('Custom Roblox Game Development');
    }
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col font-sans selection:bg-red-500/30 selection:text-white">
      {/* Top clean header */}
      <Header
        profile={profile}
        onContactClick={scrollToContact}
      />

      {/* Main Content - Simple, Direct, No Unnecessary Text */}
      <main className="flex-1">
        <HeroSimple
          profile={profile}
          onContactClick={scrollToContact}
          onSelectService={handleSelectType}
        />

        <ServicesClean
          services={servicesData}
          onSelectService={handleSelectService}
        />

        <ContactSimple
          profile={profile}
          preselectedService={selectedService}
        />
      </main>

      {/* Clean Footer */}
      <FooterSimple
        profile={profile}
      />
    </div>
  );
}
