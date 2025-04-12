
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import BenefitsSection from '../components/BenefitsSection';
import AgentsSection from '../components/AgentsSection';
import ApplicationsSection from '../components/ApplicationsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'IntegrAI - Solução Integrada de Agentes de IA';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <AgentsSection />
        <ApplicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
