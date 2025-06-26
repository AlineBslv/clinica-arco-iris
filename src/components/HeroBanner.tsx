import React from 'react';
import { ArrowDown, Calendar, PartyPopper } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const HeroBanner = () => {
  return <section id="inicio" className="min-h-screen relative overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {/* Slide 1 - Slide principal */}
          <CarouselItem>
            <div className="min-h-screen flex items-center justify-center relative">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img alt="Ambiente acolhedor da Casa Arco Íris" className="w-full h-full object-cover" src="/lovable-uploads/Imagem do banner.png" />
                
              </div>

              {/* Content */}
              <div className="container-custom relative z-10 text-center animate-fade-in">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-gray-800 mb-6">
                    Um centro de <span className="text-[#25488a]">desenvolvimento humano</span>
                    <span className="text-gray-800"> com alma de lar</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-branco-ninho/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-right text-gray-800">Cuidamos de pessoas com excelência técnica, carinho e um ambiente acolhedor</p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in">
                    <a href="https://www.doctoralia.com.br" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 hover-lift">
                      <Calendar className="w-5 h-5" />
                      <span>Agende sua Conversa</span>
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
            </div>
          </CarouselItem>

          {/* Slide 2 - Evento de inauguração */}
          <CarouselItem>
            <div className="min-h-screen flex items-center justify-center relative">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img alt="Evento de inauguração da Casa Arco Íris" className="w-full h-full object-cover" src="/lovable-uploads/60267907-43e2-4141-8e1d-f1e10df53c5f.jpg" />
                
              </div>

              {/* Content */}
              <div className="container-custom relative z-10 text-center animate-fade-in">
                <div className="max-w-4xl mx-auto">
                  <div className="inline-block px-6 py-3 bg-branco-ninho/20 rounded-full mb-6 bg-[25488a] bg-[#25488a]/[0.71]">
                    <span className="text-branco-ninho font-medium">Evento Especial</span>
                  </div>

                  <h1 className="text-branco-ninho mb-6 animate-fade-in">
                    <span className="text-branco-ninho ">Inauguração</span> da Casa Arco Íris
                    <br className="hidden md:block" />
                    <span className="text-branco-ninho">Celebre conosco!</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-branco-ninho/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-right">
                    Venha conhecer nosso espaço, nossa equipe e participar de atividades especiais
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in">
                    <a href="https://forms.google.com/inauguracao-casa-arco-iris" target="_blank" rel="noopener noreferrer" className="bg-azul-confianca text-branco-ninho px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg flex items-center space-x-2 hover-lift">
                      <PartyPopper className="w-5 h-5" />
                      <span>Garantir meu Convite</span>
                    </a>
                    
                    
                  </div>

                  {/* Event Details */}
                  <div className="bg-branco-ninho/10 backdrop-blur-md rounded-xl p-6 max-w-md mx-auto mb-12">
                    <p className="text-branco-ninho/90 text-sm">
                      📅 <strong>Data:</strong> Em breve<br />
                      📍 <strong>Local:</strong> Casa Arco Íris<br />
                      🎉 <strong>Atividades:</strong> Tour guiado, palestras e muito mais
                    </p>
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
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-branco-ninho/20 border-branco-ninho/30 text-branco-ninho hover:bg-branco-ninho/30" />
        <CarouselNext className="right-4 bg-branco-ninho/20 border-branco-ninho/30 text-branco-ninho hover:bg-branco-ninho/30" />
      </Carousel>
    </section>;
};
export default HeroBanner;