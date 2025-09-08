import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PlanosAssinatura from '../components/PlanosAssinatura';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Check } from 'lucide-react';

// 1. Importar as imagens para que o sistema de build as gerencie corretamente
import imgPsicologia from '/lovable-uploads/psicoterapia.png';
import imgFono from '/lovable-uploads/Fono.png';
import imgTO from '/lovable-uploads/terapia ocupacional.png';
import imgNeuro from '/lovable-uploads/Neuropsicologo.png';
import imgPsicopedagogia from '/lovable-uploads/Psicopedagogia.png';
import imgFisio from '/lovable-uploads/Fisio.png';
import imgNutricao from '/lovable-uploads/nutriçao.png';
import imgABA from '/lovable-uploads/Terapia ABA.png'; 
import imgMassoterapia from '/lovable-uploads/Massoterapia.png';
import imgEstetica from '/lovable-uploads/Estetica.png';
import imgAcupuntura from '/lovable-uploads/Acumputura.png';
import imgFinancas from '/lovable-uploads/Finanças.png';

const Especialidades = () => {
  useScrollAnimation();

  // 2. Adicionar a propriedade 'imagem' em cada objeto da terapia
  const terapias = [{
    titulo: "🧠 Psicologia",
    subtitulo: "Acolhe emocionalmente crianças, adolescentes e adultos em diferentes fases da vida.",
    descricao: "Apoio emocional especializado com escuta ativa e acolhimento, respeitando a singularidade de cada pessoa e promovendo o bem-estar mental em todas as fases da vida.",
    detalhes: ["Atendimento clínico para ansiedade, depressão e dificuldades emocionais", "Apoio parental e orientação para famílias", "Psicoterapia infantil com abordagem lúdica", "Atendimento a adolescentes com foco em identidade, autoestima e relações", "Psicoterapia para adultos em momentos de transição, luto, burnout ou conflitos internos"],
    cor: "roxo-principal;",
    destaque: true,
    imagem: imgPsicologia
  }, {
    titulo: "🗣️ Fonoaudiologia",
    subtitulo: "Fortalece as habilidades de comunicação e linguagem.",
    descricao: "Desenvolvimento da comunicação e linguagem, essencial para crianças e adultos com dificuldades na fala, deglutição, voz e audição.",
    detalhes: ["Intervenção em atrasos de fala e linguagem", "Tratamento de gagueira, trocas na fala e dificuldades de articulação", "Desenvolvimento da linguagem em crianças neurodivergentes", "Terapia para dificuldades de leitura e escrita (dislexia)", "Treinamento de habilidades auditivas e orais"],
    cor: "roxo-claro",
    destaque: false,
    imagem: imgFono
  }, {
    titulo: "🎯 Terapia Ocupacional",
    subtitulo: "Promove autonomia, organização e bem-estar nas atividades do dia a dia.",
    descricao: "Acompanhamento especializado focando no desenvolvimento de habilidades motoras, cognitivas e sociais para maior autonomia e qualidade de vida.",
    detalhes: ["Estimulação sensorial e motora para crianças", "Desenvolvimento da coordenação motora fina e grossa", "Treinamento de habilidades de vida diária (vestir-se, comer, brincar, organizar)", "Apoio no planejamento de rotina e adaptação escolar", "Intervenções para adultos com estresse ocupacional ou TEA"],
    cor: "roxo-suave",
    destaque: false,
    imagem: imgTO
  }, {
    titulo: "🧩 Neuropsicologia",
    subtitulo: "Avalia e intervém nas funções cognitivas e comportamentais.",
    descricao: "Avaliação e intervenção especializada nas funções cognitivas, oferecendo suporte completo para diferentes necessidades neuropsicológicas.",
    detalhes: ["Avaliações neuropsicológicas completas (TDAH, TEA, dislexia, etc.)", "Relatórios para escola, laudos e encaminhamentos", "Reabilitação cognitiva para memória, atenção e funções executivas", "Apoio à aprendizagem com base no perfil cognitivo da criança", "Suporte a adultos em mudanças cognitivas (ex: pós-COVID, envelhecimento)"],
    cor: "roxo-suave",
    destaque: false,
    imagem: imgNeuro
  }, {
    titulo: "📚 Psicopedagogia",
    subtitulo: "Ajuda no processo de ensino-aprendizagem com estratégias personalizadas.",
    descricao: "Suporte especializado no processo de aprendizagem, desenvolvendo estratégias personalizadas para superar dificuldades escolares.",
    detalhes: ["Intervenção para dificuldades escolares (dislexia, discalculia)", "Organização dos estudos e rotina escolar", "Apoio à alfabetização e letramento", "Atendimento a estudantes com bloqueios ou desmotivação escolar", "Acompanhamento interdisciplinar com escola e família"],
    cor: "roxo-suave",
    destaque: false,
    imagem: imgPsicopedagogia
  }, {
    titulo: "💪 Fisioterapia",
    subtitulo: "Cuida do corpo em movimento com foco na reabilitação e bem-estar.",
    descricao: "Cuidado especializado do corpo em movimento, promovendo reabilitação e bem-estar através de exercícios terapêuticos personalizados.",
    detalhes: ["Estimulação motora precoce para bebês e crianças", "Reabilitação pós-lesão ou cirurgia", "Tratamento de dores musculares e posturais", "Fisioterapia neurológica e ortopédica", "Exercícios terapêuticos personalizados"],
    cor: "roxo-suave",
    destaque: false,
    imagem: imgFisio
  }, {
    titulo: "🥗 Nutrição",
    subtitulo: "Alimenta o corpo e a consciência com respeito e escuta.",
    descricao: "Orientação nutricional personalizada que respeita as necessidades individuais, promovendo hábitos saudáveis sem rigidez.",
    detalhes: ["Planejamento alimentar para crianças e adultos", "Educação nutricional para seletividade alimentar", "Apoio no tratamento de distúrbios alimentares (compulsão, ansiedade alimentar)", "Nutrição materno-infantil e na introdução alimentar", "Promoção de hábitos saudáveis sem dietas rígidas"],
    cor: "roxo-suave",
    destaque: false,
    imagem: imgNutricao
  }, {
    titulo: "🧠 Terapia ABA",
    subtitulo: "Desenvolve habilidades com base em análise do comportamento aplicada.",
    descricao: "Intervenção baseada em análise do comportamento aplicada, desenvolvendo habilidades sociais e de comunicação de forma estruturada.",
    detalhes: ["Treinamento de habilidades sociais e de comunicação", "Reforço positivo para comportamentos funcionais", "Apoio a crianças com TEA e atraso no desenvolvimento", "Envolvimento da família no processo terapêutico", "Intervenções estruturadas com metas claras e mensuráveis"],
    cor: "roxo-suave",
    destaque: false,
    imagem: imgABA
  }, {
    titulo: "💆‍♀️ Massoterapia",
    subtitulo: "Promove relaxamento físico e equilíbrio emocional.",
    descricao: "Técnicas de massagem terapêutica que promovem o relaxamento físico e mental, aliviando tensões e promovendo o bem-estar.",
    detalhes: ["Alívio de tensões e dores musculares", "Redução do estresse e da ansiedade", "Massagem relaxante e terapêutica", "Apoio complementar em processos de reabilitação física ou emocional"],
    cor: "roxo-suave",
    destaque: false,
    imagem: imgMassoterapia
  }, {
    titulo: "💅 Estética",
    subtitulo: "Cuida da autoestima com sensibilidade e escuta.",
    descricao: "Cuidados estéticos com olhar humanizado, promovendo o autocuidado e fortalecendo a autoestima de forma respeitosa.",
    detalhes: ["Limpeza de pele e cuidados faciais", "Procedimentos de bem-estar e relaxamento corporal", "Atendimento estético com olhar humanizado", "Apoio à construção da autoimagem e autocuidado"],
    cor: "roxo-suave",
    destaque: false,
    imagem: imgEstetica
  }, {
    titulo: "🌿 Acupuntura",
    subtitulo: "Equilibra corpo e mente por meio da medicina tradicional chinesa.",
    descricao: "Terapia milenar que promove o equilíbrio energético e emocional através de técnicas da medicina tradicional chinesa.",
    detalhes: ["Alívio de dores físicas crônicas ou agudas", "Tratamento auxiliar para ansiedade, insônia e estresse", "Reequilíbrio energético e emocional", "Estímulo ao bem-estar geral"],
    cor: "roxo-suave",
    destaque: false,
    imagem: imgAcupuntura
  }, {
    titulo: "💰 Terapia de Finanças Comportamentais",
    subtitulo: "Transforma a relação com o dinheiro a partir do autoconhecimento.",
    descricao: "Abordagem exclusiva que une psicologia e educação financeira para transformar a relação com o dinheiro de forma saudável.",
    detalhes: ["Entendimento das emoções que influenciam o consumo", "Planejamento financeiro com abordagem personalizada", "Redução da ansiedade financeira", "Apoio para casais e famílias na organização financeira", "Educação financeira voltada à autonomia e segurança emocional"],
    cor: "roxo-suave",
    destaque: false,
    imagem: imgFinancas
  }];


  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-roxo-principal">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h1 className="text-branco-ninho mb-6">Nossas <span className="text-branco-ninho">Especialidades</span></h1>
            <p className="text-xl text-branco-ninho max-w-3xl mx-auto leading-relaxed">
              Na Casa Arco-Íris, oferecemos atendimentos interdisciplinares que cuidam do ser humano por inteiro. Conheça nossas áreas de atuação e descubra como cada uma pode transformar vidas com carinho, técnica e propósito
            </p>
          </div>
        </div>
      </section>

      {/* Terapias Detalhadas */}
      <section className="section-padding bg-branco-ninho">
        <div className="container-custom">
          <div className="space-y-16">
            {terapias.map((terapia, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`animate-on-scroll ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {terapia.destaque && <div className="inline-block px-3 py-1 bg-roxo-principal text-branco-ninho rounded-full text-sm font-medium mb-4">Serviços Oferecidos</div>}
                  <div className={`p-4 bg-${terapia.cor}/10 rounded-xl w-fit mb-6`}></div>
                  <h2 className="text-2xl md:text-3xl font-lora font-semibold text-azul-confianca mb-4">{terapia.titulo}</h2>
                  <p className={`text-${terapia.cor} font-medium text-lg mb-6`}>{terapia.subtitulo}</p>
                  <h3 className="text-lg font-semibold text-roxo-principal mb-4">O que oferecemos:</h3>
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
                  {/* 3. Usar a propriedade 'imagem' no src, que agora contém o caminho correto */}
                  <img 
                    src={terapia.imagem} 
                    alt={`${terapia.titulo} - Casa Arco Íris`} 
                    className="rounded-2xl shadow-lg w-full h-[400px] object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisor entre Especialidades e Planos */}
      <div className="container-custom">
        <div className="border-t border-bege-suave/70 my-12"></div>
      </div>

      {/* Planos de Assinatura */}
      <PlanosAssinatura variant="especialidades" />

      <Footer />
    </div>
  );
};

export default Especialidades;