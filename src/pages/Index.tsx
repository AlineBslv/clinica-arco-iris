
import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import QuemSomosResumo from '../components/QuemSomosResumo';
import PlanosAssinatura from '../components/PlanosAssinatura';
import NossosServicosResumo from '../components/NossosServicosResumo';
import FAQ from '../components/FAQ';
import ContatoResumo from '../components/ContatoResumo';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <QuemSomosResumo />
      <PlanosAssinatura variant="homepage" />
      <NossosServicosResumo />
      <FAQ />
      <ContatoResumo />
      <Footer />
    </div>
  );
};

export default Index;
