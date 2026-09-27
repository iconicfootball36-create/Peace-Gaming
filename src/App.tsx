import React, { useState } from 'react';
import { peaceGamingProfile, clientReviews, servicesData } from './data/defaultData';
import { ServiceCard } from './types/portfolio';
import { Header } from './components/Header';
import { HeroSimple } from './components/HeroSimple';
import { ServicesClean } from './components/ServicesClean';
import { ProofOfWork } from './components/ProofOfWork';
import { ContactSimple } from './components/ContactSimple';
import { FooterSimple } from './components/FooterSimple';

export default function App() {
  const profile = peaceGamingProfile;
  const [selectedService, setSelectedService] = useState<string>('Organic YouTube Video Promotion ($14.05)');

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
      setSelectedService('Organic YouTube Video Promotion ($14.05)');
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

        <ProofOfWork
          profile={profile}
          reviews={clientReviews}
          onOrderClick={scrollToContact}
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
