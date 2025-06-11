import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Brain, Heart, Users, ArrowRight, Check } from 'lucide-react';

const Terapias = () => {
  useScrollAnimation();

  const terapias = [
    {
      icon: <Brain className="w-8 h-8" />,
      titulo: "Terapia Ocupacional",
      subtitulo: "Especialização em Neurodivergência",
      descricao: "Acompanhamento especializado para crianças neurodivergentes, focando no desenvolvimento de habilidades motoras, cognitivas e sociais para maior autonomia e qualidade de vida.",
      detalhes: [
        "Avaliação e intervenção sensorial",
        "Desenvolvimento de habilidades motoras finas e grossas",
        "Treinamento de atividades de vida diária",
        "Adaptações ambientais e de equipamentos",
        "Orientação escolar e familiar"
      ],
      cor: "roxo-principal",
      destaque: true
    },
    {
      icon: <Heart className="w-8 h-8" />,
      titulo: "Psicoterapia",
      subtitulo: "Abordagem Humanizada",
      descricao: "Espaço seguro para autoconhecimento e desenvolvimento emocional, respeitando a singularidade de cada pessoa e promovendo o bem-estar mental.",
      detalhes: [
        "Psicoterapia individual para crianças e adolescentes",
        "Terapia cognitivo-comportamental",
        "Abordagem lúdica e criativa",
        "Desenvolvimento de habilidades emocionais",
        "Acompanhamento de ansiedade e depressão"
      ],
      cor: "roxo-claro",
      destaque: false
    },
    {
      icon: <Users className="w-8 h-8" />,
      titulo: "Orientação Familiar",
      subtitulo: "Apoio Integral",
      descricao: "Suporte especializado para famílias, promovendo compreensão e estratégias de convivência saudável em um ambiente acolhedor.",
      detalhes: [
        "Orientação parental especializada",
        "Grupos de apoio para famílias",
        "Estratégias de manejo comportamental",
        "Comunicação familiar efetiva",
        "Rede de apoio e recursos comunitários"
      ],
      cor: "roxo-suave",
      destaque: false
    }
  ];

  const planos = [
    {
      nome: "Plano Horizonte",
      descricao: "Ideal para acompanhamento regular com flexibilidade",
      preco: "Consulte valores",
      caracteristicas: [
        "Consultas individuais mensais",
        "Agendamento flexível",
        "Relatórios de evolução trimestrais",
        "Orientações familiares",
        "Suporte via WhatsApp"
      ],
      cor: "roxo-claro",
      destaque: false
    },
    {
      nome: "Plano Prisma",
      descricao: "Acompanhamento intensivo e multidisciplinar",
      preco: "Consulte valores",
      caracteristicas: [
        "Sessões semanais intensivas",
        "Equipe multidisciplinar",
        "Acompanhamento familiar contínuo",
        "Relatórios mensais detalhados",
        "Orientação escolar",
        "Suporte de emergência"
      ],
      cor: "roxo-principal",
      destaque: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-roxo-principal">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h1 className="text-branco-ninho mb-6">
              Nossos <span className="text-branco-ninho">Serviços</span>
            </h1>
            <p className="text-xl text-branco-ninho max-w-3xl mx-auto leading-relaxed">
              Abordagens especializadas e humanizadas para promover o desenvolvimento 
              integral de crianças neurodivergentes e apoiar suas famílias
            </p>
          </div>
        </div>
      </section>

      {/* Terapias Detalhadas */}
      <section className="section-padding bg-branco-ninho">
        <div className="container-custom">
          <div className="space-y-16">
            {terapias.map((terapia, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`animate-on-scroll ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {terapia.destaque && (
                    <div className="inline-block px-3 py-1 bg-roxo-principal text-branco-ninho rounded-full text-sm font-medium mb-4">
                      Nossa Especialização
                    </div>
                  )}
                  
                  <div className={`p-4 bg-${terapia.cor}/10 rounded-xl w-fit mb-6`}>
                    <div className={`text-${terapia.cor}`}>
                      {terapia.icon}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-lora font-semibold text-azul-confianca mb-4">
                    {terapia.titulo}
                  </h2>
                  
                  <p className={`text-${terapia.cor} font-semibold text-lg mb-6`}>
                    {terapia.subtitulo}
                  </p>
                  
                  <p className="text-cinza-aconchego text-lg leading-relaxed mb-8">
                    {terapia.descricao}
                  </p>

                  <h3 className="text-lg font-semibold text-azul-confianca mb-4">
                    O que oferecemos:
                  </h3>
                  
                  <ul className="space-y-3">
                    {terapia.detalhes.map((detalhe, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className={`w-5 h-5 text-${terapia.cor} mt-1 flex-shrink-0`} />
                        <span className="text-cinza-aconchego">{detalhe}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`animate-on-scroll ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1576091160399-112ba8d25d1f' : 
                      index === 1 ? '1573496359142-b8d87734a5a2' : 
                      '1609220136736-443140cceacc'
                    }?auto=format&fit=crop&w=800&q=80`}
                    alt={`${terapia.titulo} - Casa Arco Íris`}
                    className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="section-padding bg-gradient-to-br from-roxo-suave/20 to-bege-suave">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-azul-confianca mb-6">Nossos Planos de Atendimento</h2>
            <p className="text-cinza-aconchego max-w-2xl mx-auto">
              Escolha o plano que melhor se adapta às necessidades da sua família
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {planos.map((plano, index) => (
              <div 
                key={index} 
                className={`card-custom hover-lift animate-on-scroll ${
                  plano.destaque ? 'ring-2 ring-roxo-principal relative' : ''
                }`}
              >
                {plano.destaque && (
                  <div className="absolute -top-3 left-6 bg-roxo-principal text-branco-ninho px-4 py-2 rounded-full text-sm font-medium">
                    Mais Procurado
                  </div>
                )}
                
                <div className={`inline-block px-4 py-2 bg-${plano.cor}/20 text-${plano.cor} rounded-full text-sm font-medium mb-6`}>
                  {plano.nome}
                </div>
                
                <p className="text-cinza-aconchego text-lg mb-4">{plano.descricao}</p>
                
                <div className="text-2xl font-bold text-azul-confianca mb-6">{plano.preco}</div>
                
                <ul className="space-y-4 mb-8">
                  {plano.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 text-${plano.cor} mt-1 flex-shrink-0`} />
                      <span className="text-cinza-aconchego">{caracteristica}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://www.doctoralia.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${
                    plano.destaque ? 'btn-roxo' : `btn-secondary text-${plano.cor} border-${plano.cor} hover:bg-${plano.cor} hover:text-branco-ninho`
                  } w-full text-center`}
                >
                  Agendar Consulta
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terapias;
