import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X } from 'lucide-react';
const Equipe = () => {
  useScrollAnimation();
  const [modalAberto, setModalAberto] = useState(false);
  const [membroSelecionado, setMembroSelecionado] = useState(null);
  const equipe = [{
    nome: "Naiade Cristina Camilo",
    especialidade: "Psicóloga - Especialista em ABA",
    registro: "CRP 06/158361",
    foto: "/lovable-uploads/Naiade Psicologa.jpeg",
    biografia: "Psicóloga especializada em ABA para TEA e Desenvolvimento Atípico, formada pelo Instituto Par. Atuo em clínica de neurodiversidade e desenvolvimento infantil, integrando equipe multiprofissional. Com experiência em intervenções eficazes, meu trabalho promove o crescimento e bem-estar de cada indivíduo.",
    formacao: ["Graduação em Psicologia - Uninove", "Especialização em Análise do Comportamento Aplicada ao Transtorno do Espectro Autista - Instituto Par", "Entendendo o Protocolo VB-MAPP - IEAC", "Guia para Criação do Plano de Ensino Individualizado (PEI) - IEAC"],
    areas: ["TEA e ABA", "Consultoria Parental", "Integração Multidisciplinar", "Consultoria Escolar"]
  }, {
    nome: "Alessandra Sant'Anna de Siqueira",
    especialidade: "Fonoaudiologa",
    registro: "CRFa 2-21684",
    foto: "/lovable-uploads/Alessandra fono.jpg",
    biografia: "Psicólogo clínico formado pela UMESP, com extensão em psicanálise pela USP. Meu foco é em saúde integral, trabalhando com crianças e adultos. Tenho experiência em ansiedade, depressão, transtornos do humor e atendimentos especializados para vítimas de violência e o público LGBTQINAP. Vamos juntos explorar o inconsciente e promover bem-estar biopsicossocial.",
    formacao: ["Graduação em Psicologia - UMESP", "Extensão em Psicanálise - USP", "Pós graduação em Neurociência, Comportamento e Psicopatologia - PUC-PR e Artmed"],
    areas: ["Psicanálise", "Saúde Mental", "Apoio a Vítimas de Violência", "Inclusão LGBTQINAP"]
  }, {
    nome: "Paulo Clécio Silva de Souza",
    especialidade: "Psicólogo - Especialista em Psicanálise",
    registro: "CRP 06/175800",
    foto: "/lovable-uploads/Paulo Clécio Psicologo.jpeg",
    biografia: "Psicólogo clínico formado pela UMESP, com extensão em psicanálise pela USP. Meu foco é em saúde integral, trabalhando com crianças e adultos. Tenho experiência em ansiedade, depressão, transtornos do humor e atendimentos especializados para vítimas de violência e o público LGBTQINAP. Vamos juntos explorar o inconsciente e promover bem-estar biopsicossocial. Agende sua sessão!",
    formacao: ["Graduação em Psicologia - UMESP", "Extensão em Psicanálise - USP", "Pós graduação em Neurociência, Comportamento e Psicopatologia - PUC-PR e Artmed"],
    areas: ["Psicanálise", "Saúde Mental", "Apoio a Vítimas de Violência", "Inclusão LGBTQINAP"]
  }, {
    nome: "Fernanda Grava",
    especialidade: "Pedagoga e Psicopedagoga",
    registro: "ABPP 496",
    foto: "/lovable-uploads/Fernanda Grava Pedagoga.jpeg",
    biografia: "Especialista em TEA e ciência ABA, com foco em educação especial e inclusiva. Desde 2017, atuo clinicamente e em escolas, oferecendo suporte multidisciplinar para crianças com dificuldades de aprendizagem. Dedico-me a promover inclusão e facilitar o sucesso educacional de cada aluno.",
    formacao: ["Graduação em Pedagogia - Unisantana", "Formação em Psicopedagogia Clínica e Institucional - Unicsul", "Especialização em Transtorno do Espectro Autista - Famesc-RJ", "Especialização em ABA e estratégias naturalistas - Instituto Singular"],
    areas: ["TEA e ABA", "Consultoria Inclusiva", "Alfabetização e Aprendizagem", "Equipe Multidisciplinar"]
  }, {
    nome: "Yu Yun Ting",
    especialidade: "Psicóloga",
    registro: "CRP 06/216782",
    foto: "/lovable-uploads/Andressa Fernanda Psico.jpeg",
    biografia: "Psicóloga especializada em saúde mental, focada em mulheres e idosos. Com base na TCC e na Terapia Sócio-Histórica, ofereço atendimento humanizado e personalizado. Promovo autonomia, resolução de conflitos e saúde emocional, com ênfase na psicologia do envelhecimento e qualidade de vida.",
    formacao: ["Graduação em Psicologia - PUC-SP", "Especialização em TCC - Instituto Beck", "Formação em Ludoterapia - Instituto Play", "Curso de Neuropsicologia Infantil"],
    areas: ["Saúde Mental", "Psicologia Cognitivo-Comportamental", "Psicologia do Envelhecimento", "Atendimento Humanizado"]
  }, {
    nome: "Andressa Fernanda da Costa Alencar",
    especialidade: "Psicóloga",
    registro: "CRP 06/216782",
    foto: "/lovable-uploads/Andressa Fernanda Psico.jpeg",
    biografia: "Psicóloga especializada em saúde mental, focada em mulheres e idosos. Com base na TCC e na Terapia Sócio-Histórica, ofereço atendimento humanizado e personalizado. Promovo autonomia, resolução de conflitos e saúde emocional, com ênfase na psicologia do envelhecimento e qualidade de vida.",
    formacao: ["Graduação em Psicologia - PUC-SP", "Especialização em TCC - Instituto Beck", "Formação em Ludoterapia - Instituto Play", "Curso de Neuropsicologia Infantil"],
    areas: ["Saúde Mental", "Psicologia Cognitivo-Comportamental", "Psicologia do Envelhecimento", "Atendimento Humanizado"]
  }, {
    nome: "Michele Degan",
    especialidade: "Nutricionista",
    registro: "CRN-3 52851",
    foto: "/lovable-uploads/Imagem Michele Nutricionista.jpeg",
    biografia: "Especialista em Oncologia, Personal Diet, Nutrição Esportiva e Estética, com mais de sete anos de experiência em ambiente hospitalar e cinco anos em consultório. Focada em emagrecimento, hipertrofia e reeducação alimentar, ela oferece atendimento personalizado e acessível. Sua abordagem transforma hábitos alimentares com metas simples, ajudando clientes a atingir objetivos de saúde e bem-estar de forma eficaz.",
    formacao: ["Graduação em Psicologia - PUC-SP", "Especialização em TCC - Instituto Beck", "Formação em Ludoterapia - Instituto Play", "Curso de Neuropsicologia Infantil"],
    areas: ["Nutrição Oncológica", "Nutrição Esportiva", "Nutrição Estética", "Educação Alimentar"]
  }, {
    nome: "Thamyres Traynard",
    especialidade: "Estética Avançada",
    registro: "CRF-SP 101643",
    foto: "/lovable-uploads/Thamyres Traynard Estetiscista.jpeg",
    biografia: "Farmacêutica com pós-graduação em Estética Avançada pela Universidade São Camilo, especializada em rejuvenescimento, melasma e acne. Foco na estética regenerativa e na filosofia “tratar sem agredir”, promovendo bem-estar e integridade cutânea. Ofereço atendimento personalizado, humanizado e guiado por evidências, priorizando a saúde e autoestima dos pacientes.",
    formacao: ["Graduação em Psicologia - PUC-SP", "Especialização em TCC - Instituto Beck", "Formação em Ludoterapia - Instituto Play", "Curso de Neuropsicologia Infantil"],
    areas: ["Rejuvenescimento", "Tratamento de Melasma", "Tratanento de Acne", "Estética Regenerativa"]
  }, {
    nome: "Andressa Fernanda da Costa Alencar",
    especialidade: "Psicóloga",
    registro: "CRP 06/216782",
    foto: "/lovable-uploads/Andressa Fernanda Psico.jpeg",
    biografia: "Psicóloga especializada em saúde mental, focada em mulheres e idosos. Com base na TCC e na Terapia Sócio-Histórica, ofereço atendimento humanizado e personalizado. Promovo autonomia, resolução de conflitos e saúde emocional, com ênfase na psicologia do envelhecimento e qualidade de vida.",
    formacao: ["Graduação em Psicologia - PUC-SP", "Especialização em TCC - Instituto Beck", "Formação em Ludoterapia - Instituto Play", "Curso de Neuropsicologia Infantil"],
    areas: ["Saúde Mental", "Psicologia Cognitivo-Comportamental", "Psicologia do Envelhecimento", "Atendimento Humanizado"]
  }];
  const abrirModal = membro => {
    setMembroSelecionado(membro);
    setModalAberto(true);
  };
  const fecharModal = () => {
    setModalAberto(false);
    setMembroSelecionado(null);
  };
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-laranja-principal">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h1 className="text-branco-ninho mb-6 text-gray-800">
              Nossa <span className="text-branco-ninho text-gray-800">Equipe</span>
            </h1>
            <p className="text-xl text-branco-ninho max-w-3xl mx-auto leading-relaxed text-gray-800">
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
            {equipe.map((membro, index) => <div key={index} className="card-custom hover-lift animate-on-scroll cursor-pointer" onClick={() => abrirModal(membro)}>
                <div className="relative mb-6">
                  <img src={membro.foto} alt={membro.nome} className="w-full h-64 object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-laranja-principal/50 to-transparent rounded-xl"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-azul-confianca mb-2">
                  {membro.nome}
                </h3>
                
                <p className="text-laranja-principal font-medium mb-2">
                  {membro.especialidade}
                </p>
                
                <p className="text-cinza-aconchego text-sm mb-4">
                  {membro.registro}
                </p>

                <div className="flex flex-wrap gap-2">
                  {membro.areas.slice(0, 2).map((area, idx) => <span key={idx} className="px-2 py-1 bg-laranja-principal/20 text-laranja-principal text-xs rounded-full">
                      {area}
                    </span>)}
                  {membro.areas.length > 2 && <span className="px-2 py-1 bg-cinza-aconchego/20 text-cinza-aconchego text-xs rounded-full">
                      +{membro.areas.length - 2} mais
                    </span>}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalAberto && membroSelecionado && <div className="fixed inset-0 bg-azul-confianca/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-branco-ninho rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-bege-suave flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-azul-confianca">
                {membroSelecionado.nome}
              </h2>
              <button onClick={fecharModal} className="p-2 hover:bg-bege-suave rounded-lg transition-colors">
                <X className="w-5 h-5 text-cinza-aconchego" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <img src={membroSelecionado.foto} alt={membroSelecionado.nome} className="w-full h-48 object-cover rounded-xl mb-4" />
                  <p className="text-laranja-principal font-medium mb-1">
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
                    {membroSelecionado.formacao.map((item, idx) => <li key={idx} className="text-cinza-aconchego text-sm flex items-start">
                        <span className="w-2 h-2 bg-laranja-principal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>)}
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-azul-confianca mb-3">
                    Áreas de Atuação
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {membroSelecionado.areas.map((area, idx) => <span key={idx} className="px-3 py-1 bg-laranja-principal/20 text-laranja-principal text-sm rounded-full">
                        {area}
                      </span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}

      <Footer />
    </div>;
};
export default Equipe;