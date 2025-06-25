
import React from 'react';
import { Heart, Users, Home } from 'lucide-react';

const SobreNos = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Acolhimento",
      description: "Cada pessoa é única e merece ser vista em sua totalidade"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusão",
      description: "Especialização em crianças neurodivergentes e suas famílias"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Humanização",
      description: "Um ambiente familiar onde todos se sentem em casa"
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-bege-suave">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo */}
          <div className="animate-on-scroll">
            <div className="inline-block px-4 py-2 bg-terracota/20 rounded-full mb-6">
              <span className="text-terracota font-medium">Quem Somos</span>
            </div>
            
            <h2 className="text-azul-confianca mb-6">
              Mais que uma clínica, uma <span className="text-terracota">casa</span>
            </h2>
            
            <p className="text-cinza-aconchego mb-6">
              A Casa Arco Íris nasceu do sonho de criar um espaço verdadeiramente acolhedor, 
              onde cada pessoa se sinta em casa para cuidar de si mesma. Acreditamos que o 
              ambiente terapêutico deve ser um reflexo do cuidado que oferecemos.
            </p>
            
            <p className="text-cinza-aconchego mb-8">
              Nosso diferencial está na abordagem humanizada e inclusiva, com especial 
              atenção às crianças neurodivergentes e suas famílias. Aqui, a diversidade 
              é celebrada e cada jornada é respeitada em seu tempo único.
            </p>

            {/* Valores */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 animate-on-scroll">
                  <div className="p-3 bg-terracota/10 rounded-lg text-terracota flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-azul-confianca mb-1">
                      {value.title}
                    </h3>
                    <p className="text-cinza-aconchego">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="animate-on-scroll">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80"
                alt="Ambiente acolhedor da Casa Arco Íris"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracota rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-azul-sereno rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
