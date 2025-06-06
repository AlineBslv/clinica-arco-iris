
import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import SobreResumo from '../components/SobreResumo';
import TerapiasResumo from '../components/TerapiasResumo';
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
      <SobreResumo />
      <TerapiasResumo />
      <FAQ />
      <ContatoResumo />
      <Footer />
    </div>
  );
};

export default Index;
