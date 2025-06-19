import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
const SobreResumo = () => {
  return <section className="section-padding bg-[#55a369]/[0.12]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="animate-on-scroll">
            <div className="inline-block px-4 py-2 rounded-full mb-6 bg-[#55a369]/[0.13]">
              <span className="font-medium text-[#4da365]">Quem Somos</span>
            </div>
            
            <h2 className="text-azul-confianca mb-6">
              Um espaço de <span className="text-terracota">acolhimento</span> 
              {' '}pensado para você
            </h2>
            
            <p className="text-cinza-aconchego text-lg leading-relaxed mb-6 text-gray-800">A Casa Arco-Íris é um espaço interdisciplinar voltado ao desenvolvimento humano integral de crianças, adolescentes e adultos.


Nosso cuidado une terapias clássicas e complementares em um ambiente com cara de casa: aconchegante, colorido, vivo e sensível.</p>

            

            <Link to="/sobre" className="btn-secondary text-terracota border-terracota hover:bg-terracota hover:text-branco-ninho inline-flex items-center space-x-2">
              <span>Conheça Nossa História</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Imagem */}
          <div className="animate-on-scroll">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80" alt="Ambiente acolhedor da Casa Arco Íris" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
              
              {/* Decoração */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-terracota/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-azul-confianca/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SobreResumo;