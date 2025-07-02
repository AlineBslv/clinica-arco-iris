import React from 'react';
import { Calendar, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContatoResumo = () => {
  return (
    <section className="section-padding bg-bege-suave">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-block px-4 py-2 bg-azul-sereno/20 rounded-full mb-6">
            <span className="text-azul-confianca font-medium">Entre em Contato</span>
          </div>
          
          <h2 className="text-azul-confianca mb-6">
            Pronto para dar o <span className="text-azul-claro-principal ">primeiro passo?</span>
          </h2>
          
          <p className="text-cinza-aconchego max-w-2xl mx-auto text-gray-800">
            Estamos aqui para acolher você e sua família. Entre em contato e 
            comece sua jornada de cuidado e desenvolvimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Agendar Online */}
          <div className="card-custom text-center hover-lift animate-on-scroll">
            <div className="p-4 bg-verde-salvia/10 rounded-xl w-fit mx-auto mb-6">
              <Calendar className="w-8 h-8 text-verde-salvia" />
            </div>
            <h3 className="text-xl font-semibold text-azul-confianca mb-4">
              Agende Online
            </h3>
            <p className="text-cinza-aconchego mb-6 text-gray-700">Marque sua consulta de forma ágil pelo WhatsApp.</p>
            <a href="https://wa.me/5511988072520?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              Agendar Consulta
            </a>
          </div>

          {/* WhatsApp */}
          <div className="card-custom text-center hover-lift animate-on-scroll">
            <div className="p-4 bg-terracota/10 rounded-xl w-fit mx-auto mb-6">
              <Phone className="w-8 h-8 text-terracota" />
            </div>
            <h3 className="text-xl font-semibold text-azul-confianca mb-4">
              WhatsApp
            </h3>
            <p className="text-cinza-aconchego mb-6 text-gray-700">
              Converse conosco diretamente pelo WhatsApp para tirar dúvidas.
            </p>
            <a href="https://wa.me/5511988072520?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Casa%20Arco-Íris" target="_blank" rel="noopener noreferrer" className="btn-secondary text-terracota border-terracota hover:bg-terracota hover:text-branco-ninho w-full">
              Chamar no WhatsApp
            </a>
          </div>

          {/* E-mail */}
          <div className="card-custom text-center hover-lift animate-on-scroll">
            <div className="p-4 bg-azul-sereno/10 rounded-xl w-fit mx-auto mb-6">
              <Mail className="w-8 h-8 text-azul-sereno" />
            </div>
            <h3 className="text-xl font-semibold text-azul-confianca mb-4">
              E-mail
            </h3>
            <p className="text-cinza-aconchego mb-6 text-gray-700">
              Entre em contato conosco por e-mail para dúvidas e informações.
            </p>
            <a 
              href="mailto:contato@casaarcoiris.com.br" 
              className="btn-secondary text-azul-sereno border-azul-sereno hover:bg-azul-sereno hover:text-branco-ninho w-full"
            >
              Enviar E-mail
            </a>
          </div>
        </div>

        <div className="text-center animate-on-scroll">
          <Link to="/contato" className="btn-secondary text-azul-confianca border-azul-confianca hover:bg-azul-confianca hover:text-branco-ninho inline-flex items-center space-x-2">
            <span>Ver Mais Informações de Contato</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContatoResumo;
