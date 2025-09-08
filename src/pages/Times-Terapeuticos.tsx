// Seção de Time com carrossel horizontal de profissionais
const TimeSection: React.FC<{ time: Time }> = ({ time }) => {
  const colorClasses = getColorClasses(time.cor);
  const Icon = time.icone;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (delta: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    }
  };

  return (
    <section id={time.nome.toLowerCase().replace(/\s/g, '-')} className={`p-8 rounded-2xl shadow-lg ${colorClasses.bgLight}`}>
      {/* Cabeçalho do Time */}
      <div className={`flex items-center gap-4 mb-6 pb-6 border-b-2 ${colorClasses.borderLight}`}>
        <div className={`p-3 rounded-full ${colorClasses.bg} text-white`}>
          <Icon size={28} />
        </div>
        <h2 className={`text-3xl font-bold ${colorClasses.text}`}>{time.nome}</h2>
      </div>

      {/* Introdução e Áreas de Atuação */}
      <div className="space-y-8">
        <div>
          <p className="text-cinza-aconchego leading-relaxed mb-6">
            {time.introducao}
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            {time.areas.map((area) => (
              <li key={area} className="flex items-center gap-2">
                <Heart className={`w-4 h-4 ${colorClasses.text}`} />
                <span className="text-cinza-aconchego">{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Carrossel de Profissionais (uma fileira) */}
        <div className="relative group">
          <button
            type="button"
            aria-label="Anterior"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full w-9 h-9 items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-transparent hover:bg-white/90 shadow"
            onClick={() => scrollByAmount(-320)}
          >
            ‹
          </button>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-hidden scroll-smooth"
          >
            {time.integrantes.map((prof) => (
              <div key={prof.nome} className="min-w-[240px] max-w-[240px]">
                <ProfissionalCard profissional={prof} cor={time.cor} />
              </div>
            ))}
          </div>
          <button
            type="button"
            aria-label="Próximo"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full w-9 h-9 items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-transparent hover:bg-white/90 shadow"
            onClick={() => scrollByAmount(320)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Brain, Users, Heart, TrendingUp, Award, Palette } from 'lucide-react';

// Tipos para os dados
interface Profissional {
  foto: string;
  nome: string;
  especialidade: string;
  link: string;
}

interface Time {
  nome: string;
  introducao: string;
  cor: string;
  icone: React.ElementType;
  areas: string[];
  integrantes: Profissional[];
}

// Dados dos Times Terapêuticos
const timesData: Time[] = [
  {
    nome: "Equipe ABA",
    introducao: "A Equipe ABA é formada por profissionais altamente qualificados e especializados no atendimento a pessoas com Transtorno do Espectro Autista e outras necessidades do desenvolvimento. Nosso trabalho foca na aplicação das melhores práticas da Análise do Comportamento Aplicada (ABA), oferecendo abordagens multidisciplinares que promovem autonomia, comunicação e qualidade de vida para crianças, adolescentes e suas famílias.",
    cor: "azul-confianca",
    icone: Brain,
    areas: [
      "Psicoterapia ABA",
      "Fonoaudiologia Neurofuncional (Método Padovan)",
      "Terapia Ocupacional",
      "Nutricionista ABA (Seletividade Alimentar, Obesidade Infantil)",
      "Avaliação Neuropsicológica",
      "Orientação Parental"
    ],
    integrantes: [
      { foto: "/public/lovable-uploads/Naiade Psicologa.jpg", nome: "Naiade Cristina Camilo", especialidade: "Psicologia ABA", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Naiade" },
      { foto: "/public/lovable-uploads/Sabrina neuropsicologa.jpg", nome: "Sabrina Neri de Assis", especialidade: "Neuropsicologia e Psicologia", link: "https://api.whatsapp.com/send?phone=511944694777&text=Quero+agendar+com+a+Sabrina" },
      { foto: "/public/lovable-uploads/Fernanda Grava Pedagoga.jpg", nome: "Fernanda Grava", especialidade: "Psicopedagogia ABA", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Fernanda" },
      { foto: "/public/lovable-uploads/Alessandra fono.jpg", nome: "Alessandra Sant'Anna", especialidade: "Fonoaudiologia Neurofuncional", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Alessandra" },
      { foto: "/public/lovable-uploads/Yu Terapia Ocupacional.jpg", nome: "Yu Yun Ting", especialidade: "Terapia Ocupacional", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Yu" },
      { foto: "/public/lovable-uploads/Thamyris nutricao.jpg", nome: "Thamyris Marcelino", especialidade: "Nutrição infantil", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Thamyris" }
    ]
  },
  {
    nome: "Educação e Crescimento",
    introducao: "O time Educação e Crescimento é dedicado a apoiar o desenvolvimento global de crianças e adolescentes, promovendo habilidades cognitivas, emocionais e sociais. A integração de diferentes áreas do cuidado – da fonoaudiologia à psicopedagogia – proporciona acompanhamento completo para superar desafios escolares, familiares e pessoais, sempre com foco no potencial e na singularidade de cada indivíduo.",
    cor: "verde-salvia",
    icone: Users,
    areas: [
      "Fonoaudiologia",
      "Psicoterapia",
      "Psicopedagogia",
      "Terapia Ocupacional",
      "Orientação Parental",
      "Avaliação Neuropsicológica"
    ],
    integrantes: [
      { foto: "/public/lovable-uploads/Andressa Fernanda Psico.jpg", nome: "Andressa Fernanda", especialidade: "Psicoterapia", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Andressa" },
      { foto: "/public/lovable-uploads/Fernanda Grava Pedagoga.jpg", nome: "Fernanda Grava", especialidade: "Pedagogia e Psicopedagogia", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Fernanda" },
      { foto: "/public/lovable-uploads/Naiade Psicologa.jpg", nome: "Naiade Cristina Camilo", especialidade: "Psicologia", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Naiade" },
      { foto: "/public/lovable-uploads/Barbara fonoa.jpg", nome: "Barbara Sousa", especialidade: "Fonoaudiologia", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Barbara" },
      { foto: "/public/lovable-uploads/Alessandra fono.jpg", nome: "Alessandra Sant'Anna", especialidade: "Fonoaudiologia Neurofuncional", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Alessandra" },
      { foto: "/public/lovable-uploads/Sabrina neuropsicologa.jpg", nome: "Sabrina Neri de Assis", especialidade: "Neuropsicologia e Psicologia", link: "https://api.whatsapp.com/send?phone=511944694777&text=Quero+agendar+com+a+Sabrina" },
      { foto: "/public/lovable-uploads/Yu Terapia Ocupacional.jpg", nome: "Yu Yun Ting", especialidade: "Terapia Ocupacional", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Yu" }
    ]
  },
  {
    nome: "Time Performance",
    introducao: "O Time Performance reúne especialistas em saúde, bem-estar e desenvolvimento pessoal para quem busca alta performance física, mental e financeira. Profissionais experientes em nutrição esportiva, educação física, fonoaudiologia, coaching e consultoria financeira unem forças para impulsionar resultados, fortalecer competências e promover equilíbrio em todos os níveis da vida.",
    cor: "laranja-principal",
    icone: TrendingUp,
    areas: [
      "Nutricionista esportiva",
      "Consultoria Financeira",
      "Psicoterapia",
      "Fonoaudiologia Voz (Oratória e comunicação)",
      "Fonoaudiologia Estética",
      "Massoterapia",
      "Farmácia Estética",
      "Educação Física",
      "Coaching"
    ],
    integrantes: [
      { foto: "/public/lovable-uploads/Imagem Michele Nutricionista.jpg", nome: "Michele Degan", especialidade: "Nutricão Esportiva", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Michele" },
      { foto: "/public/lovable-uploads/Edu Consultoria Financeira.jpg", nome: "Eduardo Ângelo Galli", especialidade: "Consultoria Financeira", link: "https://api.whatsapp.com/send?phone=5511944694777&4&text=Quero+agendar+com+o+Eduardo" },
      { foto: "/public/lovable-uploads/Maria Educaçao Fisica.jpg", nome: "Maria Julia Garcia Reis", especialidade: "Educação Física", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Maria+Julia" },
      { foto: "/public/lovable-uploads/Thamyres Traynard Estetiscista.jpg", nome: "Thamyres Traynard", especialidade: "Farmácia Estética", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Thamyres" },
      { foto: "/public/lovable-uploads/Michele Sousa Estética.jpg", nome: "Michele Sousa", especialidade: "Estética e Massoterapia", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Michele+Sousa" },
      { foto: "/public/lovable-uploads/Tamara Massoterapia.jpg", nome: "Tamara Chiyoda Bezerra", especialidade: "Massoterapia", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+o+Tamara" },
      { foto: "/public/lovable-uploads/Andressa Fernanda Psico.jpg", nome: "Andressa Fernanda", especialidade: "Psicologia", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Andressa" },
      { foto: "/public/lovable-uploads/Barbara fonoa.jpg", nome: "Barbara Sousa", especialidade: "Fonoaudiologia", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Barbara" }
    ]
  },
  {
    nome: "Classic Wellness",
    introducao: "Classic Wellness é o nosso núcleo dedicado ao cuidado integral, relaxamento e estética. Com um time multidisciplinar, oferecemos serviços que promovem saúde física, equilíbrio emocional e autoestima. De massagens e estética facial ao yoga e acupuntura, nosso objetivo é restaurar, energizar e valorizar quem você é, em um ambiente de acolhimento e excelência.",
    cor: "violeta-lavanda",
    icone: Palette,
    areas: [
      "Estética Clássica",
      "Massoterapia",
      "Massagem Oriental",
      "Massagem Relaxante",
      "Drenagem Linfática",
      "Consultoria Skincare e tratamentos faciais",
      "Microagulhamento",
      "Tratamentos capilares",
      "Microcorrentes",
      "Peeling",
      "Limpeza de Pele",
      "Fono Estética",
      "Ed. Física",
      "Psicoterapia",
      "Acupuntura",
      "Nutricionista",
      "Yoga"
    ],
    integrantes: [
      { foto: "/public/lovable-uploads/Yu Terapia Ocupacional.jpg", nome: "Yu Yun Ting", especialidade: "Massagem Oriental", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Yu" },
      { foto: "/public/lovable-uploads/Imagem Michele Nutricionista.jpg", nome: "Michele Degan", especialidade: "Nutricão Esportiva", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Michele" },
      { foto: "/public/lovable-uploads/Tamara Massoterapia.jpg", nome: "Tamara Chiyoda Bezerra", especialidade: "Massoterapia", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+o+Tamara" },
      { foto: "/public/lovable-uploads/Michele Sousa Estética.jpg", nome: "Michele Sousa", especialidade: "Estética e Massoterapia", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Michele+Sousa" },
      { foto: "/public/lovable-uploads/Thamyres Traynard Estetiscista.jpg", nome: "Thamyres Traynard", especialidade: "Farmácia Estética", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Thamyres" },
      { foto: "/public/lovable-uploads/Maria Educaçao Fisica.jpg", nome: "Maria Julia Garcia Reis", especialidade: "Educação Física", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Maria+Julia" },
      { foto: "/public/lovable-uploads/Andressa Fernanda Psico.jpg", nome: "Andressa Fernanda", especialidade: "Psicoterapia", link: "https://api.whatsapp.com/send?phone=5511944694777&text=Quero+agendar+com+a+Andressa" }
    ]
  }
];

// Componente do Card do Profissional
const ProfissionalCard: React.FC<{ profissional: Profissional; cor: string }> = ({ profissional, cor }) => {
  const colorClasses = getColorClasses(cor);
  return (
    <div className={`bg-white rounded-lg shadow-md p-3 text-center transition-transform duration-300 hover:scale-102 border-t-4 ${colorClasses.border}`}>
      <img 
        src={profissional.foto} 
        alt={`Foto de ${profissional.nome}`}
        className={`w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 ${colorClasses.borderLight}`}
      />
      <h4 className="text-base font-bold text-cinza-aconchego">{profissional.nome}</h4>
      <p className={`text-xs md:text-sm ${colorClasses.text} font-medium mb-3`}>{profissional.especialidade}</p>
      <a 
        href={profissional.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full text-white text-sm px-3 py-2 rounded-lg transition-colors duration-300 ${colorClasses.bg} hover:opacity-90`}
      >
        Agendar
      </a>
    </div>
  );
};

// Mapeamento de cores (simplificado para o exemplo)
const getColorClasses = (cor: string) => {
  const colorMap: { [key: string]: { border: string; bg: string; text: string; bgLight: string; borderLight: string; } } = {
    'azul-confianca': { border: 'border-azul-confianca', bg: 'bg-azul-confianca', text: 'text-azul-confianca', bgLight: 'bg-azul-confianca/10', borderLight: 'border-azul-confianca/20' },
    'verde-salvia': { border: 'border-verde-salvia', bg: 'bg-verde-salvia', text: 'text-verde-salvia', bgLight: 'bg-verde-salvia/10', borderLight: 'border-verde-salvia/20' },
    'laranja-principal': { border: 'border-laranja-principal', bg: 'bg-laranja-principal', text: 'text-laranja-principal', bgLight: 'bg-laranja-principal/10', borderLight: 'border-laranja-principal/20' },
    'violeta-lavanda': { border: 'border-violeta-lavanda', bg: 'bg-violeta-lavanda', text: 'text-violeta-lavanda', bgLight: 'bg-violeta-lavanda/10', borderLight: 'border-violeta-lavanda/20' },
  };
  return colorMap[cor] || colorMap['azul-confianca'];
};

const TimesTerapeuticos = () => {
  useScrollAnimation();
  return (
    <div className="min-h-screen bg-branco-ninho">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-azul-confianca">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h1 className="text-white mb-6">
              Times <span className="text-white">Terapêuticos</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Aqui, equipes multidisciplinares trabalham em harmonia para 
              entregar excelência e bem-estar em cada jornada
            </p>
          </div>
        </div>
      </section>

      {/* Seção dos Times */}
      <main className="py-20">
        <div className="container-custom space-y-20">
          {timesData.map((time) => (
            <TimeSection key={time.nome} time={time} />
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 bg-azul-confianca">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conheça Nossos Profissionais
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Cada membro de nossos times é altamente qualificado e comprometido 
            com o desenvolvimento e bem-estar de nossos pacientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/equipe" 
              className="btn-secondary bg-white text-azul-confianca hover:bg-white/90"
            >
              Ver Nossa Equipe
            </a>
            <a 
              href="/contato" 
              className="btn-primary bg-laranja-principal hover:bg-laranja-principal/90"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TimesTerapeuticos;
