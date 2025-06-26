import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Heart, Users, Shield, Star, BrainCogIcon, MedalIcon, Handshake } from 'lucide-react';
const Sobre = () => {
  useScrollAnimation();
  const valores = [{
    icon: <Handshake className="w-8 h-8" />,
    titulo: "Qualidade Técnica e Ética Profissional",
    descricao: "Comprometimento com a excelência e integridade em cada detalhe."
  }, {
    icon: <Users className="w-8 h-8" />,
    titulo: "Pertencimento e Escuta Ativa",
    descricao: "Construímos um espaço onde cada voz é ouvida e respeitada."
  }, {
    icon: <Shield className="w-8 h-8" />,
    titulo: "Respeito à Diversidade e às Singularidades",
    descricao: "Celebramos a individualidade e abraçamos todas as diferenças."
  }, {
    icon: <Star className="w-8 h-8" />,
    titulo: "Ambiente Afetuoso e Acolhedor",
    descricao: "Transformamos o cuidado em um abraço caloroso, onde todos se sentem em casa."
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 from-terracota/10 to-bege-suave bg-[55a3692b] bg-[#55a369]">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h1 className="text-azul-confianca mb-6 text-white">
              Quem Somos - <span className="text-white">Casa Arco Íris</span>
            </h1>
            <p className="text-xl text-cinza-aconchego max-w-3xl mx-auto leading-relaxed text-white">
              Um espaço pensado com carinho para oferecer terapias especializadas 
              em um ambiente acolhedor e inclusivo
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-padding bg-branco-ninho">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-azul-confianca mb-6 text-[55a369] text-[#55a369]">Bem-vindo à Casa Arco-Íris</h2>
              <p className="text-cinza-aconchego text-lg leading-relaxed mb-6">Somos um centro de desenvolvimento humano pensado para acolher, cuidar e transformar. Aqui, o cuidado vai além da terapia — é uma experiência sensorial e emocional que começa já na chegada: um ambiente com cara de casa, café quentinho, jardim com rede, espaço lúdico e terapias em cada canto.
            </p>
              <p className="text-cinza-aconchego leading-relaxed mb-6">Oferecemos atendimentos interdisciplinares para pessoas neurotípicas e neurodivergentes, com foco em corpo, mente e finanças. Nossa equipe reúne especialistas em Psicologia, Fonoaudiologia, Terapia Ocupacional, Fisioterapia, Nutrição, Terapia ABA, além de terapias complementares como massagens, acupuntura, estética e a exclusiva Terapia de Finanças Comportamentais.</p>
              <p className="text-cinza-aconchego leading-relaxed mb-6">Mais do que clientes, aqui você é parte de uma comunidade. Criamos canais de escuta ativa, caixa de sugestões e grupos de troca para que famílias, profissionais e colaboradores participem da evolução da Casa. Todos são convidados a cocriar este espaço com a gente.
            </p>
              <p className="text-cinza-aconchego leading-relaxed mb-6">Seja para cuidar dos filhos ou de si mesmo, trabalhar no nosso coworking enquanto a terapia acontece, descansar no quintal ou participar de nossos workshops e rodas de conversa — a Casa Arco-Íris existe para cuidar com excelência, acolher com afeto e transformar com propósito.</p>
              <p className="text-azul-confianca leading-relaxed">Aqui, o cuidado é real, personalizado e humano. Aqui, você pertence.</p>
            </div>
            <div className="animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80" alt="Nossa equipe acolhedora" className="rounded-2xl shadow-lg w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="section-padding bg-[#55a369]/10">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-azul-confianca mb-6 text-[#467653]">Nosso Propósito</h2>
            <p className="text-cinza-aconchego max-w-2xl mx-auto text-gray-700">Promover desenvolvimento humano com qualidade, respeito e acolhimento, oferecendo atendimentos terapêuticos em um ambiente que une técnica, escuta e pertencimento.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => <div key={index} className="card-custom text-center hover-lift animate-on-scroll">
                <div className="p-4 bg-terracota/10 rounded-xl w-fit mx-auto mb-6">
                  <div className="text-terracota">
                    {valor.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-azul-confianca mb-4">
                  {valor.titulo}
                </h3>
                <p className="text-cinza-aconchego leading-relaxed">
                  {valor.descricao}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Nosso Espaço */}
      <section className="section-padding bg-branco-ninho">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-azul-confianca mb-6 text-[#333333]">Nosso Espaço</h2>
            <p className="text-cinza-aconchego max-w-2xl mx-auto">Mais do que uma clínica, somos uma casa com alma. Aqui você encontra:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1631889993959-41b4e9c81d20?auto=format&fit=crop&w=600&q=80" alt="Sala de terapia confortável" className="rounded-xl shadow-lg w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-azul-confianca mb-2">Sala de Espera Aconchegante</h3>
              <p className="text-cinza-aconchego">Sala de espera com livros, brinquedos, café, chá e acolhimento logo na entrada.</p>
            </div>

            <div className="animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80" alt="Área de convivência" className="rounded-xl shadow-lg w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-azul-confianca mb-2.5 text-[#55a369]">Área de Convivência</h3>
              <p className="text-cinza-aconchego">Espaço coworking para acompanhantes. Parque no quintal, jardim com rede e ambientes terapêuticos livres.</p>
            </div>

            <div className="animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80" alt="Nossos pets terapêuticos" className="rounded-xl shadow-lg w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-azul-confianca mb-2 text-[#55a369]">Pets Terapêuticos</h3>
              <p className="text-cinza-aconchego">Presença de pets amorosos e calmos para tornar o cuidado ainda mais afetuoso.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Sobre;