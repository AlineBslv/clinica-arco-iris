
import React from 'react';
import { ArrowDown, Calendar } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1920&q=80"
          alt="Ambiente acolhedor da Casa Arco Íris"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-azul-confianca/70 to-azul-sereno/50"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-branco-ninho mb-6 animate-fade-in">
            Um espaço de <span className="text-violeta-lavanda">acolhimento</span> e 
            <br className="hidden md:block" />
            <span className="text-terracota"> desenvolvimento humano</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-branco-ninho/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-right">
            Sinta-se em casa para cuidar de você
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in">
            <a
              href="https://www.doctoralia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 hover-lift"
            >
              <Calendar className="w-5 h-5" />
              <span>Agende sua Conversa</span>
            </a>
            
            <a
              href="#sobre"
              className="btn-secondary bg-branco-ninho/10 border-branco-ninho text-branco-ninho hover:bg-branco-ninho hover:text-azul-confianca text-lg px-8 py-4"
            >
              Conhecer a Casa
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a href="#sobre" className="inline-block text-branco-ninho/70 hover:text-branco-ninho transition-colors duration-300">
              <ArrowDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-branco-ninho to-transparent z-10"></div>
    </section>
  );
};

export default HeroBanner;
