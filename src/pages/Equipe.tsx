
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X } from 'lucide-react';

const Equipe = () => {
  useScrollAnimation();
  const [modalAberto, setModalAberto] = useState(false);
  const [membroSelecionado, setMembroSelecionado] = useState(null);

  const equipe = [
    {
      nome: "Dra. Ana Carolina Silva",
      especialidade: "Terapeuta Ocupacional",
      registro: "CREFITO-3 12345/TO",
      foto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      biografia: "Especialista em Terapia Ocupacional com foco em neurodivergência. Formada pela USP com pós-graduação em Integração Sensorial. Mais de 8 anos de experiência no atendimento a crianças e adolescentes neurodivergentes.",
      formacao: [
        "Graduação em Terapia Ocupacional - USP",
        "Pós-graduação em Integração Sensorial - FMUSP",
        "Certificação em TEA - Instituto Neurosaber",
        "Formação em Comunicação Alternativa"
      ],
      areas: ["Integração Sensorial", "TEA", "TDAH", "Comunicação Alternativa"]
    },
    {
      nome: "Dr. Carlos Eduardo Santos",
      especialidade: "Psicólogo",
      registro: "CRP 06/123456",
      foto: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
      biografia: "Psicólogo clínico especializado em atendimento humanizado a crianças e adolescentes. Formado pela PUC-SP com especialização em Terapia Cognitivo-Comportamental e abordagem lúdica.",
      formacao: [
        "Graduação em Psicologia - PUC-SP",
        "Especialização em TCC - Instituto Beck",
        "Formação em Ludoterapia - Instituto Play",
        "Curso de Neuropsicologia Infantil"
      ],
      areas: ["Ansiedade", "Depressão", "Ludoterapia", "Neuropsicologia"]
    },
    {
      nome: "Dra. Mariana Oliveira",
      especialidade: "Psicopedagoga",
      registro: "ABPp 1234/SP",
      foto: "https://images.unsplash.com/photo-1594824723286-5bf991ae7781?auto=format&fit=crop&w=400&q=80",
      biografia: "Psicopedagoga com especialização em dificuldades de aprendizagem e orientação familiar. Experiência em intervenção escolar e desenvolvimento de estratégias pedagógicas inclusivas.",
      formacao: [
        "Graduação em Pedagogia - UNICAMP",
        "Especialização em Psicopedagogia - PUC-Campinas",
        "Formação em ABA - Instituto ABA",
        "Curso de Orientação Familiar"
      ],
      areas: ["Dificuldades de Aprendizagem", "Orientação Familiar", "ABA", "Inclusão Escolar"]
    }
  ];

  const abrirModal = (membro) => {
    setMembroSelecionado(membro);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setMembroSelecionado(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-mostarda/10 to-bege-suave">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h1 className="text-azul-confianca mb-6">
              Nossa <span className="text-mostarda">Equipe</span>
            </h1>
            <p className="text-xl text-cinza-aconchego max-w-3xl mx-auto leading-relaxed">
              Profissionais especializados e apaixonados por oferecer o melhor 
              cuidado em um ambiente acolhedor e inclusivo
            </p>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="section-padding bg-branco-ninho">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.map((membro, index) => (
              <div 
                key={index} 
                className="card-custom hover-lift animate-on-scroll cursor-pointer"
                onClick={() => abrirModal(membro)}
              >
                <div className="relative mb-6">
                  <img 
                    src={membro.foto}
                    alt={membro.nome}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-azul-confianca/50 to-transparent rounded-xl"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-azul-confianca mb-2">
                  {membro.nome}
                </h3>
                
                <p className="text-mostarda font-medium mb-2">
                  {membro.especialidade}
                </p>
                
                <p className="text-cinza-aconchego text-sm mb-4">
                  {membro.registro}
                </p>

                <div className="flex flex-wrap gap-2">
                  {membro.areas.slice(0, 2).map((area, idx) => (
                    <span key={idx} className="px-2 py-1 bg-mostarda/20 text-mostarda text-xs rounded-full">
                      {area}
                    </span>
                  ))}
                  {membro.areas.length > 2 && (
                    <span className="px-2 py-1 bg-cinza-aconchego/20 text-cinza-aconchego text-xs rounded-full">
                      +{membro.areas.length - 2} mais
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalAberto && membroSelecionado && (
        <div className="fixed inset-0 bg-azul-confianca/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-branco-ninho rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-bege-suave flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-azul-confianca">
                {membroSelecionado.nome}
              </h2>
              <button 
                onClick={fecharModal}
                className="p-2 hover:bg-bege-suave rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-cinza-aconchego" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <img 
                    src={membroSelecionado.foto}
                    alt={membroSelecionado.nome}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <p className="text-mostarda font-medium mb-1">
                    {membroSelecionado.especialidade}
                  </p>
                  <p className="text-cinza-aconchego text-sm">
                    {membroSelecionado.registro}
                  </p>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-azul-confianca mb-4">
                    Sobre o Profissional
                  </h3>
                  <p className="text-cinza-aconchego leading-relaxed mb-6">
                    {membroSelecionado.biografia}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-azul-confianca mb-3">
                    Formação
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {membroSelecionado.formacao.map((item, idx) => (
                      <li key={idx} className="text-cinza-aconchego text-sm flex items-start">
                        <span className="w-2 h-2 bg-mostarda rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-azul-confianca mb-3">
                    Áreas de Atuação
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {membroSelecionado.areas.map((area, idx) => (
                      <span key={idx} className="px-3 py-1 bg-mostarda/20 text-mostarda text-sm rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Equipe;
