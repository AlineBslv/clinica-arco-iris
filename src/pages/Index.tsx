
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import SobreNos from '../components/SobreNos';
import Terapias from '../components/Terapias';
import FAQ from '../components/FAQ';
import Contato from '../components/Contato';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <SobreNos />
      <Terapias />
      <FAQ />
      <Contato />
      <Footer />
    </div>
  );
};

export default Index;
