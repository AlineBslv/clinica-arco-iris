
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Heart, Users, Shield, Star, Coffee, Book, Briefcase, TreePine, Home } from 'lucide-react';

const Sobre = () => {
  useScrollAnimation();

  const servicos = [
    "Psicologia",
    "Fonoaudiologia", 
    "Terapia Ocupacional",
    "Fisioterapia",
    "Nutrição",
    "Terapia ABA",
    "Estética, massoterapia e acupuntura",
    "Terapia de finanças comportamentais (exclusiva)"
  ];

  const espacos = [
    {
      icon: <Coffee className="w-6 h-6" />,
      titulo: "Café, chá e acolhimento logo na entrada"
    },
    {
      icon: <Book className="w-6 h-6" />,
      titulo: "Sala de espera com livros e brinquedos"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      titulo: "Espaço coworking para acompanhantes"
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      titulo: "Parque no quintal, jardim com rede e ambientes terapêuticos livres"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      titulo: "Presença de pets amorosos e calmos para tornar o cuidado ainda mais afetuoso"
    }
  ];

  const valores = [
    "Qualidade técnica e ética profissional",
    "Humanização no cuidado",
    "Pertencimento e escuta ativa",
    "Respeito à diversidade e às singularidades",
    "Ambiente afetuoso e acolhedor"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#55a369]">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h1 className="text-white mb-6">
              Quem Somos - <span className="text-white">Casa Arco Íris</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Um centro de desenvolvimento humano com alma de lar
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="section-padding bg-branco-ninho">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-[#55a369] mb-6">Quem Somos</h2>
              <p className="text-cinza-aconchego text-lg leading-relaxed mb-6">
                A Casa Arco-Íris é um espaço interdisciplinar voltado ao desenvolvimento humano integral de crianças, adolescentes e adultos. Nosso cuidado une terapias clássicas e complementares em um ambiente com cara de casa: aconchegante, colorido, vivo e sensível.
              </p>
            </div>
            <div className="animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80" alt="Nossa equipe acolhedora" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* O que oferecemos */}
      <section className="section-padding bg-[#4c9b60]/[0.17]">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-[#467653] mb-6">O que oferecemos</h2>
            <p className="text-cinza-aconchego max-w-2xl mx-auto mb-8">
              Atendimentos presenciais, online e em escolas nas áreas de:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {servicos.map((servico, index) => (
              <div key={index} className="card-custom text-center hover-lift animate-on-scroll">
                <div className="p-4 bg-terracota/10 rounded-xl w-fit mx-auto mb-4">
                  <div className="text-terracota">
                    <Heart className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-azul-confianca">
                  {servico}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <p className="text-cinza-aconchego text-lg leading-relaxed">
              Além disso, promovemos workshops, rodas de conversa e grupos terapêuticos para mães, pais e cuidadores.
            </p>
          </div>
        </div>
      </section>

      {/* Nosso Espaço */}
      <section className="section-padding bg-branco-ninho">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-[#333333] mb-6">Nosso Espaço</h2>
            <p className="text-cinza-aconchego max-w-2xl mx-auto mb-8">
              Mais do que uma clínica, somos uma casa com alma. Aqui você encontra:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {espacos.map((espaco, index) => (
              <div key={index} className="flex items-start space-x-4 animate-on-scroll">
                <div className="p-3 bg-[#55a369]/10 rounded-lg text-[#55a369] flex-shrink-0">
                  {espaco.icon}
                </div>
                <div>
                  <p className="text-cinza-aconchego leading-relaxed">{espaco.titulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Propósito */}
      <section className="section-padding bg-[#4c9b60]/[0.17]">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-[#467653] mb-6">Nosso Propósito</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Missão */}
            <div className="card-custom text-center hover-lift animate-on-scroll">
              <div className="p-4 bg-terracota/10 rounded-xl w-fit mx-auto mb-6">
                <div className="text-terracota">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-azul-confianca mb-4">
                Missão
              </h3>
              <p className="text-cinza-aconchego leading-relaxed">
                Promover desenvolvimento humano com qualidade, respeito e acolhimento, oferecendo atendimentos terapêuticos em um ambiente que une técnica, escuta e pertencimento.
              </p>
            </div>

            {/* Visão */}
            <div className="card-custom text-center hover-lift animate-on-scroll">
              <div className="p-4 bg-azul-sereno/10 rounded-xl w-fit mx-auto mb-6">
                <div className="text-azul-sereno">
                  <Star className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-azul-confianca mb-4">
                Visão
              </h3>
              <p className="text-cinza-aconchego leading-relaxed">
                Ser o melhor centro de desenvolvimento humano de São Paulo, referência em excelência, cuidado e desejo de pertencer.
              </p>
            </div>

            {/* Valores */}
            <div className="card-custom text-center hover-lift animate-on-scroll">
              <div className="p-4 bg-verde-salvia/10 rounded-xl w-fit mx-auto mb-6">
                <div className="text-verde-salvia">
                  <Users className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-azul-confianca mb-4">
                Valores
              </h3>
              <ul className="text-cinza-aconchego leading-relaxed space-y-2 text-left">
                {valores.map((valor, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-verde-salvia mt-1">•</span>
                    <span>{valor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
