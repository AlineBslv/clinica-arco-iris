import React from 'react';
import { Brain, Heart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const TerapiasResumo = () => {
  const terapiasDestaque = [{
    icon: <Brain className="w-8 h-8" />,
    titulo: "Terapia Ocupacional",
    descricao: "Especialização em crianças neurodivergentes, focando no desenvolvimento de habilidades e autonomia.",
    cor: "roxo-principal"
  }, {
    icon: <Heart className="w-8 h-8" />,
    titulo: "Psicoterapia",
    descricao: "Espaço seguro para autoconhecimento e desenvolvimento emocional com abordagem humanizada.",
    cor: "roxo-claro"
  }, {
    icon: <Users className="w-8 h-8" />,
    titulo: "Orientação Familiar",
    descricao: "Suporte especializado para famílias, promovendo estratégias de convivência saudável.",
    cor: "roxo-suave"
  }];
  return <section className="section-padding bg-branco-ninho">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block px-4 py-2 bg-roxo-principal/20 rounded-full mb-6">
            <span className="text-roxo-principal font-medium">O que fazemos</span>
          </div>
          
          <h2 className="text-azul-confianca mb-6">
            Como podemos te ajudar a <span className="text-roxo-principal">florescer?</span>
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
            <span>Ver Todos os Serviços</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>;
};
export default TerapiasResumo;