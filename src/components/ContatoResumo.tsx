
import React from 'react';
import { Calendar, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContatoResumo = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-block px-4 py-2 bg-amarelo/20 rounded-full mb-6">
            <span className="text-amarelo font-medium">Entre em Contato</span>
          </div>
          
          <h2 className="text-amarelo mb-6">
            Pronto para dar o <span className="text-azul-principal">primeiro passo?</span>
          </h2>
          
          <p className="text-cinza-texto max-w-2xl mx-auto">
            Estamos aqui para acolher você e sua família. Entre em contato e 
            comece sua jornada de cuidado e desenvolvimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Agendar Online */}
          <div className="card-custom text-center hover-lift animate-on-scroll">
            <div className="p-4 bg-amarelo/10 rounded-xl w-fit mx-auto mb-6">
              <Calendar className="w-8 h-8 text-amarelo" />
            </div>
            <h3 className="text-xl font-semibold text-amarelo mb-4">
              Agende Online
            </h3>
            <p className="text-cinza-texto mb-6">
              Marque sua consulta de forma prática e rápida através do Doctoralia.
            </p>
            <a
              href="https://www.doctoralia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              Agendar Consulta
            </a>
          </div>

          {/* WhatsApp */}
          <div className="card-custom text-center hover-lift animate-on-scroll">
            <div className="p-4 bg-amarelo/10 rounded-xl w-fit mx-auto mb-6">
              <Phone className="w-8 h-8 text-amarelo" />
            </div>
            <h3 className="text-xl font-semibold text-amarelo mb-4">
              WhatsApp
            </h3>
            <p className="text-cinza-texto mb-6">
              Converse conosco diretamente pelo WhatsApp para tirar dúvidas.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-amarelo border-amarelo hover:bg-amarelo hover:text-branco w-full"
            >
              Chamar no WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="card-custom text-center hover-lift animate-on-scroll">
            <div className="p-4 bg-amarelo/10 rounded-xl w-fit mx-auto mb-6">
              <Mail className="w-8 h-8 text-amarelo" />
            </div>
            <h3 className="text-xl font-semibold text-amarelo mb-4">
              E-mail
            </h3>
            <p className="text-cinza-texto mb-6">
              Envie sua mensagem por e-mail e retornaremos em breve.
            </p>
            <a
              href="mailto:contato@casaarcoiris.com.br"
              className="btn-secondary text-amarelo border-amarelo hover:bg-amarelo hover:text-branco w-full"
            >
              Enviar E-mail
            </a>
          </div>
        </div>

        <div className="text-center animate-on-scroll">
          <Link
            to="/contato"
            className="btn-secondary text-amarelo border-amarelo hover:bg-amarelo hover:text-branco inline-flex items-center space-x-2"
          >
            <span>Ver Mais Informações de Contato</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContatoResumo;
