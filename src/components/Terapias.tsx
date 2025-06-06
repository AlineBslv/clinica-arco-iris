
import React from 'react';
import { Brain, Heart, Users, ArrowRight } from 'lucide-react';

const Terapias = () => {
  const terapias = [
    {
      icon: <Brain className="w-8 h-8" />,
      titulo: "Terapia Ocupacional",
      subtitulo: "Especialização em Neurodivergência",
      descricao: "Acompanhamento especializado para crianças neurodivergentes, focando no desenvolvimento de habilidades e autonomia.",
      destaque: true,
      cor: "verde-salvia"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      titulo: "Psicoterapia",
      subtitulo: "Abordagem Humanizada",
      descricao: "Espaço seguro para autoconhecimento e desenvolvimento emocional, respeitando a singularidade de cada pessoa.",
      destaque: false,
      cor: "azul-sereno"
    },
    {
      icon: <Users className="w-8 h-8" />,
      titulo: "Orientação Familiar",
      subtitulo: "Apoio Integral",
      descricao: "Suporte especializado para famílias, promovendo compreensão e estratégias de convivência saudável.",
      destaque: false,
      cor: "violeta-lavanda"
    }
  ];

  const planos = [
    {
      nome: "Plano Horizonte",
      descricao: "Sessões individuais com flexibilidade de horários",
      caracteristicas: ["Consultas individuais", "Agendamento flexível", "Relatórios de evolução"],
      cor: "azul-confianca"
    },
    {
      nome: "Plano Prisma",
      descricao: "Acompanhamento intensivo e multidisciplinar",
      caracteristicas: ["Sessões intensivas", "Equipe multidisciplinar", "Acompanhamento familiar"],
      cor: "terracota"
    }
  ];

  return (
    <section id="terapias" className="section-padding bg-branco-ninho">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block px-4 py-2 bg-verde-salvia/20 rounded-full mb-6">
            <span className="text-verde-salvia font-medium">Nossas Terapias</span>
          </div>
          
          <h2 className="text-azul-confianca mb-6">
            Como podemos te ajudar a <span className="text-verde-salvia">florescer?</span>
          </h2>
          
          <p className="text-cinza-aconchego max-w-2xl mx-auto">
            Oferecemos abordagens terapêuticas especializadas, com foco especial no 
            atendimento humanizado a crianças neurodivergentes e suas famílias.
          </p>
        </div>

        {/* Terapias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {terapias.map((terapia, index) => (
            <div 
              key={index}
              className={`card-custom hover-lift animate-on-scroll ${
                terapia.destaque ? 'ring-2 ring-verde-salvia relative' : ''
              }`}
            >
              {terapia.destaque && (
                <div className="absolute -top-3 left-6 bg-verde-salvia text-branco-ninho px-3 py-1 rounded-full text-sm font-medium">
                  Especialização
                </div>
              )}
              
              <div className={`p-4 bg-${terapia.cor}/10 rounded-xl w-fit mb-6`}>
                <div className={`text-${terapia.cor}`}>
                  {terapia.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-azul-confianca mb-2">
                {terapia.titulo}
              </h3>
              
              <p className={`text-${terapia.cor} font-medium mb-4`}>
                {terapia.subtitulo}
              </p>
              
              <p className="text-cinza-aconchego leading-relaxed">
                {terapia.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Planos */}
        <div className="bg-bege-suave rounded-2xl p-8 md:p-12 animate-on-scroll">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-lora font-semibold text-azul-confianca mb-4">
              Nossos Planos de Atendimento
            </h3>
            <p className="text-cinza-aconchego">
              Escolha o plano que melhor se adapta às suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {planos.map((plano, index) => (
              <div key={index} className="bg-branco-ninho rounded-xl p-6 hover-lift">
                <div className={`inline-block px-3 py-1 bg-${plano.cor}/20 text-${plano.cor} rounded-full text-sm font-medium mb-4`}>
                  {plano.nome}
                </div>
                
                <p className="text-cinza-aconchego mb-6">{plano.descricao}</p>
                
                <ul className="space-y-3">
                  {plano.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${plano.cor} rounded-full`}></div>
                      <span className="text-cinza-aconchego">{caracteristica}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#contato"
              className="btn-primary inline-flex items-center space-x-2 hover-lift"
            >
              <span>Saiba Mais Sobre os Planos</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terapias;
