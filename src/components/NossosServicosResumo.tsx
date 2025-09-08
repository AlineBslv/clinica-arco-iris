import React from 'react';
import { Brain, MessageCircle, Hand, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const TerapiasResumo = () => {
  const terapiasDestaque = [{
    icon: <Brain className="w-8 h-8" />,
    titulo: "Psicologia",
    descricao: "Apoio emocional para todas as idades, abordando ansiedade, autoestima, relacionamentos e desenvolvimento pessoal com escuta ativa e acolhimento.",
    cor: "roxo-principal"
  }, {
    icon: <MessageCircle className="w-8 h-8" />,
    titulo: "Fonoaudiologia",
    descricao: "Desenvolve comunicação e linguagem, ajudando atrasos na fala, deglutição, voz e audição, essencial para crianças com dificuldades.",
    cor: "roxo-principal"
  }, {
    icon: <Hand className="w-8 h-8" />,
    titulo: "Terapia Ocupacional",
    descricao: "Promove autonomia diária e melhora a qualidade de vida de pessoas com atrasos no desenvolvimento e dificuldades motoras ou sensoriais.",
    cor: "roxo-principal"
  }];
  return <section className="section-padding bg-roxo-suave">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block px-4 py-2 bg-roxo-principal/20 rounded-full mb-6">
            <span className="text-roxo-principal font-medium">O que fazemos</span>
          </div>
          
          <h2 className="text-azul-confianca mb-6">
            Como podemos te ajudar a <span className="text-roxo-principal">cuidar da saúde mental?</span>
          </h2>
          
          <p className="text-cinza-aconchego max-w-2xl mx-auto">Oferecemos atendimentos presenciais, online e em escolas nas áreas de:</p>
        </div>

        {/* Terapias em Destaque */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {terapiasDestaque.map((terapia, index) => <div key={index} className="card-custom hover-lift animate-on-scroll">
              <div className={`p-4 bg-${terapia.cor}/10 rounded-xl w-fit mb-6`}>
                <div className={`text-${terapia.cor}`}>
                  {terapia.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-roxo-principal mb-4">
                {terapia.titulo}
              </h3>
              
              <p className="text-cinza-aconchego leading-relaxed">
                {terapia.descricao}
              </p>
            </div>)}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <Link to="/terapias" className="btn-roxo inline-flex items-center space-x-2 hover-lift">
            <span>Ver Todas as Especialidades</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>;
};
export default TerapiasResumo;