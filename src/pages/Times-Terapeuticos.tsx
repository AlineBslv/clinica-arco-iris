import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Heart, Brain, Activity, Baby, GraduationCap } from 'lucide-react';

const TimesTerapeuticos = () => {
  const times = [
    {
      nome: "Time de Desenvolvimento Infantil",
      descricao: "Especialistas focados no desenvolvimento integral da criança",
      cor: "azul-confianca",
      icone: Baby,
      especialidades: [
        "Terapia Ocupacional",
        "Fonoaudiologia",
        "Psicopedagogia",
        "Psicologia Infantil"
      ]
    },
    {
      nome: "Time de Reabilitação",
      descricao: "Profissionais dedicados à reabilitação e recuperação",
      cor: "verde-salvia",
      icone: Activity,
      especialidades: [
        "Fisioterapia",
        "Terapia Ocupacional",
        "Fonoaudiologia",
        "Educação Física"
      ]
    },
    {
      nome: "Time de Saúde Mental",
      descricao: "Cuidado especializado para o bem-estar emocional e mental",
      cor: "violeta-lavanda",
      icone: Brain,
      especialidades: [
        "Psicologia",
        "Neuropsicologia",
        "Psicoterapia",
        "Terapia ABA"
      ]
    },
    {
      nome: "Time de Bem-estar",
      descricao: "Promovendo saúde e qualidade de vida",
      cor: "laranja-principal",
      icone: Heart,
      especialidades: [
        "Nutrição",
        "Estética",
        "Massoterapia",
        "Acupuntura"
      ]
    },
    {
      nome: "Time de Educação",
      descricao: "Apoio educacional e desenvolvimento de habilidades",
      cor: "azul-sereno",
      icone: GraduationCap,
      especialidades: [
        "Psicopedagogia",
        "Educação Física",
        "Consultoria Financeira",
        "Orientação Educacional"
      ]
    }
  ];

  const getColorClasses = (cor: string) => {
    const colorMap: { [key: string]: { border: string; bg: string; text: string; bgLight: string; borderLight: string } } = {
      'azul-confianca': {
        border: 'border-azul-confianca',
        bg: 'bg-azul-confianca',
        text: 'text-azul-confianca',
        bgLight: 'bg-azul-confianca/10',
        borderLight: 'border-azul-confianca/20'
      },
      'verde-salvia': {
        border: 'border-verde-salvia',
        bg: 'bg-verde-salvia',
        text: 'text-verde-salvia',
        bgLight: 'bg-verde-salvia/10',
        borderLight: 'border-verde-salvia/20'
      },
      'violeta-lavanda': {
        border: 'border-violeta-lavanda',
        bg: 'bg-violeta-lavanda',
        text: 'text-violeta-lavanda',
        bgLight: 'bg-violeta-lavanda/10',
        borderLight: 'border-violeta-lavanda/20'
      },
      'laranja-principal': {
        border: 'border-laranja-principal',
        bg: 'bg-laranja-principal',
        text: 'text-laranja-principal',
        bgLight: 'bg-laranja-principal/10',
        borderLight: 'border-laranja-principal/20'
      },
      'azul-sereno': {
        border: 'border-azul-sereno',
        bg: 'bg-azul-sereno',
        text: 'text-azul-sereno',
        bgLight: 'bg-azul-sereno/10',
        borderLight: 'border-azul-sereno/20'
      }
    };
    return colorMap[cor] || colorMap['azul-confianca'];
  };

  return (
    <div className="min-h-screen bg-branco-ninho">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-azul-confianca/5 to-verde-salvia/5">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-cinza-aconchego mb-6">
              Nossos Times Terapêuticos
            </h1>
            <p className="text-lg text-cinza-aconchego/80 mb-8 leading-relaxed">
              Trabalhamos com equipes multidisciplinares especializadas, cada uma focada em 
              uma área específica do desenvolvimento humano, garantindo um atendimento 
              completo e personalizado para cada paciente.
            </p>
          </div>
        </div>
      </section>

      {/* Times Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-8 md:gap-12">
            {times.map((time, index) => {
              const IconComponent = time.icone;
              const colorClasses = getColorClasses(time.cor);
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 ${colorClasses.border}`}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className={`p-4 rounded-full ${colorClasses.bgLight} flex-shrink-0`}>
                      <IconComponent className={`w-8 h-8 ${colorClasses.text}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-cinza-aconchego mb-3">
                        {time.nome}
                      </h3>
                      <p className="text-cinza-aconchego/70 mb-4 text-lg">
                        {time.descricao}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {time.especialidades.map((especialidade, espIndex) => (
                          <span 
                            key={espIndex}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses.bgLight} ${colorClasses.text} border ${colorClasses.borderLight}`}
                          >
                            {especialidade}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section className="py-20 bg-gradient-to-r from-azul-confianca/5 to-verde-salvia/5">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cinza-aconchego mb-6">
              Nossa Metodologia de Trabalho
            </h2>
            <p className="text-lg text-cinza-aconchego/80">
              Cada time trabalha de forma integrada, promovendo a comunicação entre 
              profissionais e garantindo um plano de tratamento coeso e eficaz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-azul-confianca/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-azul-confianca" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-aconchego mb-3">
                Trabalho Colaborativo
              </h3>
              <p className="text-cinza-aconchego/70">
                Profissionais de diferentes especialidades trabalham juntos para 
                oferecer o melhor atendimento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-verde-salvia/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-verde-salvia" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-aconchego mb-3">
                Cuidado Personalizado
              </h3>
              <p className="text-cinza-aconchego/70">
                Cada paciente recebe um plano de tratamento único, desenvolvido 
                especificamente para suas necessidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violeta-lavanda/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-violeta-lavanda" />
              </div>
              <h3 className="text-xl font-semibold text-cinza-aconchego mb-3">
                Abordagem Integral
              </h3>
              <p className="text-cinza-aconchego/70">
                Consideramos todos os aspectos do desenvolvimento humano para 
                promover o bem-estar completo.
              </p>
            </div>
          </div>
        </div>
      </section>

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
