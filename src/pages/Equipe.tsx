import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { useScrollAnimation } from '../hooks/useScrollAnimation'; // Animação desativada para corrigir o bug
import { X, Search } from 'lucide-react';

// Imagens importadas para garantir o funcionamento em produção
import fotoNaiade from "/lovable-uploads/Naiade Psicologa.jpg";
import fotoAlessandra from "/lovable-uploads/Alessandra fono.jpg";
import fotoSabrina from "/lovable-uploads/Sabrina neuropsicologa.jpg";
import fotoFernanda from "/lovable-uploads/Fernanda Grava Pedagoga.jpg";
import fotoAndressa from "/lovable-uploads/Andressa Fernanda Psico.jpg";
import fotoBarbara from "/lovable-uploads/Barbara fonoa.jpg";
import fotoDayse from "/lovable-uploads/Dayse Fono.jpg";
import fotoYu from "/lovable-uploads/Yu Terapia Ocupacional.jpg";
import fotoMicheleD from "/lovable-uploads/Imagem Michele Nutricionista.jpg";
import fotoThamyres from "/lovable-uploads/Thamyres Traynard Estetiscista.jpg";
import fotoMicheleS from "/lovable-uploads/Michele Sousa Estética.jpg";
import fotoEduardo from "/lovable-uploads/Edu Consultoria Financeira.jpg";

const Equipe = () => {
  // A animação foi a causa do bug de invisibilidade, por isso está desativada.
  // useScrollAnimation();
  
  const [modalAberto, setModalAberto] = useState(false);
  const [membroSelecionado, setMembroSelecionado] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Todas as Especialidades');

  const linkGeralAgendamento = "https://consultorio.me/pro/casa-arco-iris";

  // Array da equipe com TODOS os dados completos e os novos campos
  const equipe = [{
    nome: "Naiade Cristina Camilo",
    especialidade: "Psicologia - Especialista em ABA",
    registro: "CRP 06/158361",
    foto: fotoNaiade,
    linkAgendamento: "https://consultorio.me/pro/naiade-cristina-camilo",
    biografia: "Psicóloga especializada em ABA para TEA e Desenvolvimento Atípico, formada pelo Instituto Par. Atuo em clínica de neurodiversidade e desenvolvimento infantil, integrando equipe multiprofissional. Com experiência em intervenções eficazes, meu trabalho promove o crescimento e bem-estar de cada indivíduo.",
    formacao: ["Graduação em Psicologia - Uninove", "Especialização em Análise do Comportamento Aplicada ao Transtorno do Espectro Autista - Instituto Par", "Entendendo o Protocolo VB-MAPP - IEAC", "Guia para Criação do Plano de Ensino Individualizado (PEI) - IEAC"],
    areas: ["TEA e ABA", "Consultoria Parental", "Integração Multidisciplinar", "Consultoria Escolar"]
  }, {
    nome: "Alessandra Sant'Anna de Siqueira",
    especialidade: "Fonoaudiologia Neurofuncional",
    registro: "CRFa 2-21684",
    foto: fotoAlessandra,
    linkAgendamento: "https://consultorio.me/pro/alessandra-santanna-de-siqueira",
    biografia: "",
    formacao: [],
    areas: []
  }, {
    nome: "Sabrina Neri de Assis",
    especialidade: "Neuropsicologia e Psicologia",
    registro: "CRP 06/164156",
    foto: fotoSabrina,
    linkAgendamento: "https://consultorio.me/pro/sabrina-neri-de-assis",
    biografia: "Psicóloga com graduação pela UNIP e mestrado em Psicobiologia (em andamento) na UNIFESP. Especialista em Reabilitação Cognitiva e Neuropsicologia pelo HCFMUSP. Atuo como assistente de Laudo Neuropsicológico e ofereço psicoterapia baseada em evidências. Com experiência em reabilitação neuropsicológica e saúde mental de cuidadores, busco promover bem-estar integral.",
    formacao: ["Graduação em Psicologia - UNIP", "Especialização em Neuropsicologia com formação em Reabilitação Cognitiva HCFMUSP", "Mestrado em Psicobiologia (em andamento) - UNIFESP"],
    areas: ["Avaliação Neuropsicológica", "Transtornos do Neurodesenvolvimento", "Psicoterapia", "Reabilitação Neuropsicológica"]
  }, {
    nome: "Fernanda Grava",
    especialidade: "Pedagogia e Psicopedagogia",
    registro: "ABPP 496",
    foto: fotoFernanda,
    linkAgendamento: "https://consultorio.me/pro/fernanda-grava",
    biografia: "Especialista em TEA e ciência ABA, com foco em educação especial e inclusiva. Desde 2017, atuo clinicamente e em escolas, oferecendo suporte multidisciplinar para crianças com dificuldades de aprendizagem. Dedico-me a promover inclusão e facilitar o sucesso educacional de cada aluno.",
    formacao: ["Graduação em Pedagogia - Unisantana", "Formação em Psicopedagogia Clínica e Institucional - Unicsul", "Especialização em Transtorno do Espectro Autista - Famesc-RJ", "Especialização em ABA e estratégias naturalistas - Instituto Singular"],
    areas: ["TEA e ABA", "Consultoria Inclusiva", "Alfabetização e Aprendizagem", "Equipe Multidisciplinar"]
  }, {
    nome: "Andressa Fernanda da Costa Alencar",
    especialidade: "Psicologia",
    registro: "CRP 06/216782",
    foto: fotoAndressa,
    linkAgendamento: "https://consultorio.me/pro/andressa-fernanda-da-costa-alencar",
    biografia: "Psicóloga especializada em saúde mental, focada em mulheres e pessoas idosas. Com base na TCC e na Terapia Sócio-Histórica, ofereço atendimento humanizado e personalizado. Promovo autonomia, resolução de conflitos e saúde emocional, com ênfase na psicologia do envelhecimento e qualidade de vida.",
    formacao: [],
    areas: ["Saúde Mental", "Psicologia Cognitivo-Comportamental", "Psicologia do Envelhecimento", "Atendimento Humanizado"]
  }, {
    nome: "Barbara Sousa Pereira Freitas",
    especialidade: "Fonoaudiologia Online",
    registro: "CRFa 2-21755",
    foto: fotoBarbara,
    linkAgendamento: "https://consultorio.me/pro/barbara-sousa-pereira-freitas",
    biografia: "Fonoaudióloga especializada em motricidade orofacial, linguagem oral, e TEA. Graduada pela FMU, com pós em Intervenção ABA. Tenho vasta experiência em leitura, escrita e voz, aliada a um compromisso com atendimento humanizado e de qualidade. Sempre em busca de aprimorar meus conhecimentos para oferecer o melhor aos meus clientes.",
    formacao: ["Graduação em Fonoaudiologia - FMU", "Pós-Graduação em Intervenção ABA para Autistas e Deficiência Intelectual- CBI OF MIAMI", "Curso avançado do Protocolo VB- MAPP - Academia do Autismo"],
    areas: ["Motricidade Orofacial", "Linguagem Oral", "Transtorno do Espectro Autista (TEA)", "Leitura e Escrita"]
  }, {
    nome: "Dayse Cristina Spinardi Furmanski",
    especialidade: "Fonoaudiologia",
    registro: "CRFa 2-23990",
    foto: fotoDayse,
    linkAgendamento: "https://consultorio.me/pro/dayse-cristina-spinardi-furmanski",
    biografia: "",
    formacao: [],
    areas: []
  }, {
    nome: "Yu Yun Ting",
    especialidade: "Terapia Ocupacional",
    registro: "CREFITO-3 8404-TO",
    foto: fotoYu,
    linkAgendamento: "https://consultorio.me/pro/yu-yun-ting",
    biografia: "Terapeuta ocupacional especializada em reabilitação neurofuncional e terapia da mão pela UNIFESP. Com expertise em integração sensorial, terapia snoezlen, e formação em dor e contensão induzida, ofereço cuidados personalizados. Pós-graduanda em Acupuntura e medicina chinesa, aplico fotobiomodulação transcraniana e confecciono órteses sob medida.",
    formacao: ["Especialização em Reabilitação Física e Reabilitação do Membro Superior - UNIFESP", "Curso de Formação em Terapia Snoezelen - Snoezelen Brasil", "Formação em terapia de contensão induzida (adulto e pediátrico) - AACD", "Pós graduanda em Acupuntura e medicina chinesa"],
    areas: ["Reabilitação Neurofuncional", "Integração Sensorial", "Terapia da Dor", "Órteses Sob Medida"]
  }, {
    nome: "Michele Degan",
    especialidade: "Nutricão Esportiva",
    registro: "CRN-3 52851",
    foto: fotoMicheleD,
    linkAgendamento: "https://consultorio.me/pro/michele-degan-costa",
    biografia: "Especialista em Oncologia, Personal Diet, Nutrição Esportiva e Estética, com mais de sete anos de experiência em ambiente hospitalar e cinco anos em consultório. Focada em emagrecimento, hipertrofia e reeducação alimentar, ela oferece atendimento personalizado e acessível. Sua abordagem transforma hábitos alimentares com metas simples, ajudando clientes a atingir objetivos de saúde e bem-estar de forma eficaz.",
    formacao: ["Pós-Graduação em Nutrição Esportiva e Estética"],
    areas: ["Nutrição Oncológica", "Nutrição Esportiva", "Nutrição Estética", "Educação Alimentar"]
  }, {
    nome: "Thamyres Traynard",
    especialidade: "Farmácia Estética",
    registro: "CRF-SP 101643",
    foto: fotoThamyres,
    linkAgendamento: "https://consultorio.me/pro/thamyres-rachel-rodrigues-traynard",
    biografia: "Farmacêutica com pós-graduação em Estética Avançada pela Universidade São Camilo, especializada em rejuvenescimento, melasma e acne. Foco na estética regenerativa e na filosofia “tratar sem agredir”, promovendo bem-estar e integridade cutânea. Ofereço atendimento personalizado, humanizado e guiado por evidências, priorizando a saúde e autoestima dos pacientes.",
    formacao: ["Pós-Graduação em Estética Avançada - Universidade São Camilo", "Graduação em Farmácia"],
    areas: ["Rejuvenescimento", "Tratamento de Melasma", "Tratanento de Acne", "Estética Regenerativa"]
  }, {
    nome: "Michele Sousa Arruda de Oliveira",
    especialidade: "Estética e Massoterapia",
    registro: "",
    foto: fotoMicheleS,
    linkAgendamento: "https://consultorio.me/pro/michele-sousa-arruda-de-oliveira",
    biografia: "Esteticista apaixonada por estética facial e corporal, formada em Cosmetologia e Estética pela UNIP. Tenho vasta experiência em tratamentos como radiofrequência, eletrolipólise e drenagem linfática. Meu compromisso é com o bem-estar dos clientes, garantindo um atendimento ético e comunicação eficaz. Atualmente, planejo expandir meus conhecimentos com uma graduação em Biomedicina.",
    formacao: ["Cosmetologia e Estética - UNIP", "Técnico Administrativo - Etec Jorge Street"],
    areas: ["Estética Facial", "Estética Corporal", "Massoterapia", "Tecnologia Estética"]
  }, {
    nome: "Eduardo Ângelo Galli",
    especialidade: "Consultoria Financeira",
    registro: "",
    foto: fotoEduardo,
    linkAgendamento: "https://consultorio.me/pro/eduardo-angelo-galli",
    biografia: "",
    formacao: [],
    areas: []
  }];

  const specialties = useMemo(() => {
    const allSpecialties = equipe.map(membro => membro.especialidade).filter(Boolean);
    return ['Todas as Especialidades', ...new Set(allSpecialties)];
  }, [equipe]);

  let filteredEquipe = [...equipe];
  if (selectedSpecialty && selectedSpecialty !== 'Todas as Especialidades') {
    filteredEquipe = filteredEquipe.filter(membro => membro.especialidade === selectedSpecialty);
  }
  if (searchTerm) {
    filteredEquipe = filteredEquipe.filter(membro => membro.nome.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  const abrirModal = (membro) => {
    setMembroSelecionado(membro);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setMembroSelecionado(null);
  };

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-laranja-principal">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-branco-ninho mb-6 text-gray-800">Nossa <span className="text-gray-800">Equipe</span></h1>
            <p className="text-xl text-branco-ninho max-w-3xl mx-auto leading-relaxed text-gray-800">
              Profissionais especializados e apaixonados por oferecer o melhor cuidado em um ambiente acolhedor e inclusivo
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-branco-ninho">
        <div className="container-custom">
          
          <div className="mb-12 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-1/2">
              <input type="text" placeholder="Pesquisar por nome..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-laranja-principal outline-none transition-colors" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cinza-aconchego" />
            </div>
            <select value={selectedSpecialty} onChange={handleSpecialtyChange} className="w-full md:w-1/2 px-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-laranja-principal outline-none transition-colors">
              {specialties.map(spec => (<option key={spec} value={spec}>{spec}</option>))}
            </select>
          </div>

          {filteredEquipe.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEquipe.map((membro) => (
                <div key={membro.registro || membro.nome} className="card-custom flex flex-col hover-lift cursor-pointer" onClick={() => abrirModal(membro)}>
                  <div className="relative mb-6">
                    <img src={membro.foto} alt={membro.nome} className="w-full h-64 object-cover rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-laranja-principal/50 to-transparent rounded-xl"></div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-azul-confianca mb-2">{membro.nome}</h3>
                    <p className="text-laranja-principal font-medium mb-2">{membro.especialidade}</p>
                    <p className="text-cinza-aconchego text-sm mb-4">{membro.registro}</p>
                    <div className="flex flex-wrap gap-2">
                      {membro.areas.slice(0, 2).map((area, idx) => ( area && <span key={idx} className="px-2 py-1 bg-laranja-principal/20 text-laranja-principal text-xs rounded-full">{area}</span> ))}
                      {membro.areas.length > 2 && (<span className="px-2 py-1 bg-cinza-aconchego/20 text-cinza-aconchego text-xs rounded-full">+{membro.areas.length - 2} mais</span>)}
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <a href={membro.linkAgendamento || linkGeralAgendamento} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="btn-laranja w-full text-center">
                      Agendar com o Profissional
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-cinza-aconchego text-lg py-12">Nenhum profissional encontrado com os filtros aplicados.</p>
          )}
        </div>
      </section>

      {modalAberto && membroSelecionado && (
        <div className="fixed inset-0 bg-azul-confianca/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={fecharModal}>
          <div className="bg-branco-ninho rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-bege-suave flex items-center justify-between sticky top-0 bg-branco-ninho z-10">
              <h2 className="text-2xl font-semibold text-azul-confianca">{membroSelecionado.nome}</h2>
              <button onClick={fecharModal} className="p-2 hover:bg-bege-suave rounded-full transition-colors">
                <X className="w-5 h-5 text-cinza-aconchego" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <img src={membroSelecionado.foto} alt={membroSelecionado.nome} className="w-full h-48 object-cover rounded-xl mb-4" />
                  <p className="text-laranja-principal font-medium mb-1">{membroSelecionado.especialidade}</p>
                  <p className="text-cinza-aconchego text-sm">{membroSelecionado.registro}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-azul-confianca mb-4">Sobre o Profissional</h3>
                  <p className="text-cinza-aconchego leading-relaxed mb-6">{membroSelecionado.biografia}</p>
                  {membroSelecionado.formacao && membroSelecionado.formacao.length > 0 && membroSelecionado.formacao.filter(item => item.trim() !== '').length > 0 && (
                    <>
                      <h4 className="text-lg font-semibold text-azul-confianca mb-3">Formação</h4>
                      <ul className="space-y-2 mb-6">
                        {membroSelecionado.formacao.map((item, idx) => item.trim() && (<li key={idx} className="text-cinza-aconchego text-sm flex items-start"><span className="w-2 h-2 bg-laranja-principal rounded-full mt-2 mr-3 flex-shrink-0"></span>{item}</li>))}
                      </ul>
                    </>
                  )}
                  {membroSelecionado.areas && membroSelecionado.areas.length > 0 && membroSelecionado.areas.filter(item => item.trim() !== '').length > 0 && (
                     <>
                        <h4 className="text-lg font-semibold text-azul-confianca mb-3">Áreas de Atuação</h4>
                        <div className="flex flex-wrap gap-2">
                            {membroSelecionado.areas.map((area, idx) => area.trim() && (<span key={idx} className="px-3 py-1 bg-laranja-principal/20 text-laranja-principal text-sm rounded-full">{area}</span>))}
                        </div>
                     </>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-bege-suave sticky bottom-0 bg-branco-ninho z-10">
                <a href={membroSelecionado.linkAgendamento || linkGeralAgendamento} target="_blank" rel="noopener noreferrer" className="btn-laranja w-full text-center">
                    Agendar com o Profissional
                </a>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Equipe;