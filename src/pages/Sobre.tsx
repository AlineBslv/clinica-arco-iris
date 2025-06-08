import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Heart, Users, Shield, Star } from 'lucide-react';
const Sobre = () => {
  useScrollAnimation();
  const valores = [{
    icon: <Heart className="w-8 h-8" />,
    titulo: "Acolhimento",
    descricao: "Cada pessoa é recebida com carinho e respeito, em um ambiente seguro e acolhedor."
  }, {
    icon: <Users className="w-8 h-8" />,
    titulo: "Inclusão",
    descricao: "Celebramos a neurodivergência e promovemos práticas inclusivas em todos os atendimentos."
  }, {
    icon: <Shield className="w-8 h-8" />,
    titulo: "Confiança",
    descricao: "Construímos relações baseadas em confiança, transparência e ética profissional."
  }, {
    icon: <Star className="w-8 h-8" />,
    titulo: "Excelência",
    descricao: "Buscamos constantemente a excelência em nossos serviços e atendimento personalizado."
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 from-terracota/10 to-bege-suave bg-[55a3692b] bg-[#55a369]/[0.17]">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h1 className="text-azul-confianca mb-6 text-[#333333]">
              Conheça a <span className="text-terracota">Casa Arco Íris</span>
            </h1>
            <p className="text-xl text-cinza-aconchego max-w-3xl mx-auto leading-relaxed">
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
              <h2 className="text-azul-confianca mb-6 text-[55a369] text-[#55a369]">Nossa História</h2>
              <p className="text-cinza-aconchego text-lg leading-relaxed mb-6">
                A Casa Arco Íris nasceu do sonho de criar um espaço verdadeiramente 
                inclusivo, onde cada pessoa pudesse se sentir acolhida e compreendida. 
                Nossa fundação se baseia na crença de que a diversidade é uma força 
                e que cada indivíduo tem seu próprio caminho de desenvolvimento.
              </p>
              <p className="text-cinza-aconchego leading-relaxed mb-6">
                Especializamo-nos no atendimento a crianças neurodivergentes e suas 
                famílias, oferecendo um ambiente terapêutico que respeita as 
                particularidades de cada um e promove o desenvolvimento integral.
              </p>
              <p className="text-cinza-aconchego leading-relaxed">
                Nosso nome "Arco Íris" simboliza a diversidade e a beleza única 
                de cada pessoa, assim como cada cor do arco íris é especial e 
                contribui para a harmonia do todo.
              </p>
            </div>
            <div className="animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80" alt="Nossa equipe acolhedora" className="rounded-2xl shadow-lg w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="section-padding bg-bege-suave bg-[#55a369]/[0.17]">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-azul-confianca mb-6">Nossos Valores</h2>
            <p className="text-cinza-aconchego max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e definem nossa identidade
            </p>
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
            <h2 className="text-azul-confianca mb-6">Nosso Espaço</h2>
            <p className="text-cinza-aconchego max-w-2xl mx-auto">
              Um ambiente cuidadosamente planejado para proporcionar conforto, 
              segurança e bem-estar durante os atendimentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1631889993959-41b4e9c81d20?auto=format&fit=crop&w=600&q=80" alt="Sala de terapia confortável" className="rounded-xl shadow-lg w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-azul-confianca mb-2">Salas de Terapia</h3>
              <p className="text-cinza-aconchego">Ambientes acolhedores e equipados para diferentes modalidades terapêuticas.</p>
            </div>

            <div className="animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80" alt="Área de convivência" className="rounded-xl shadow-lg w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-azul-confianca mb-2">Área de Convivência</h3>
              <p className="text-cinza-aconchego">Espaço para famílias aguardarem confortavelmente durante os atendimentos.</p>
            </div>

            <div className="animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80" alt="Nossos pets terapêuticos" className="rounded-xl shadow-lg w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-azul-confianca mb-2">Pets Terapêuticos</h3>
              <p className="text-cinza-aconchego">Nossos companheiros de quatro patas que fazem parte da família da Casa.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Sobre;