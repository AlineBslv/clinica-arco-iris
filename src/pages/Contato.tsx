import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calendar, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contato = () => {
  useScrollAnimation();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Retornaremos em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-azul-claro-principal">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h1 className="text-branco-ninho mb-6">
              Entre em <span className="text-branco-ninho ">Contato</span>
            </h1>
            <p className="text-xl text-branco-ninho/90 max-w-3xl mx-auto leading-relaxed">
              Estamos à disposição para esclarecer suas dúvidas e 
              agendar uma visita ao nosso espaço.
            </p>
          </div>
        </div>
      </section>

      {/* Formas de Contato */}
      <section className="section-padding bg-branco-ninho">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Agendar Online */}
            <div className="card-custom text-center hover-lift animate-on-scroll">
              <div className="p-4 bg-azul-claro-suave/20 rounded-xl w-fit mx-auto mb-6">
                <Calendar className="w-8 h-8 text-azul-claro-principal" />
              </div>
              <h3 className="text-xl font-semibold text-azul-claro-principal mb-4">
                Agende Online
              </h3>
              <p className="text-cinza-aconchego mb-6">
                Marque sua consulta de forma prática através do Doctoralia.
              </p>
              <a
                href="https://www.doctoralia.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-azul-claro w-full"
              >
                Agendar Consulta
              </a>
            </div>

            {/* WhatsApp */}
            <div className="card-custom text-center hover-lift animate-on-scroll">
              <div className="p-4 bg-azul-claro-suave/20 rounded-xl w-fit mx-auto mb-6">
                <Phone className="w-8 h-8 text-azul-claro-medio" />
              </div>
              <h3 className="text-xl font-semibold text-azul-claro-principal mb-4">
                WhatsApp
              </h3>
              <p className="text-cinza-aconchego mb-6">
                Converse conosco diretamente pelo WhatsApp.
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-azul-claro-principal border-azul-claro-principal hover:bg-azul-claro-principal hover:text-branco-ninho w-full"
              >
                Mandar Mensagem
              </a>
            </div>

            {/* Telefone */}
            <div className="card-custom text-center hover-lift animate-on-scroll">
              <div className="p-4 bg-azul-claro-suave/20 rounded-xl w-fit mx-auto mb-6">
                <Phone className="w-8 h-8 text-azul-claro-medio" />
              </div>
              <h3 className="text-xl font-semibold text-azul-claro-principal mb-4">
                Telefone
              </h3>
              <p className="text-cinza-aconchego mb-6">
                Ligue diretamente para agendar ou 
                tirar dúvidas.
              </p>
              <a
                href="tel:+5511999999999"
                className="btn-secondary text-azul-claro-principal border-azul-claro-principal hover:bg-azul-claro-principal hover:text-branco-ninho w-full"
              >
                (11) 99999-9999
              </a>
            </div>

            {/* Website */}
            <div className="card-custom text-center hover-lift animate-on-scroll">
              <div className="p-4 bg-azul-claro-suave/20 rounded-xl w-fit mx-auto mb-6">
                <Mail className="w-8 h-8 text-azul-claro-medio" />
              </div>
              <h3 className="text-xl font-semibold text-azul-claro-principal mb-4">
                E-mail
              </h3>
              <p className="text-cinza-aconchego mb-6">
                Entre em contato através do e-mail.
              </p>
              <a
                href="https://www.casaarcoiris.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-azul-claro-principal border-azul-claro-principal hover:bg-azul-claro-principal hover:text-branco-ninho w-full"
              >
                Enviar E-mail
              </a>
            </div>
          </div>

          {/* Formulário e Informações */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-semibold text-azul-claro-principal mb-6">
                Envie sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-cinza-aconchego font-medium mb-2">
                      Nome *
                    </label>
                    <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-azul-claro-principal focus:border-azul-claro-principal outline-none transition-colors" placeholder="Seu nome completo" />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-cinza-aconchego font-medium mb-2">
                      Telefone
                    </label>
                    <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-azul-claro-principal focus:border-azul-claro-principal outline-none transition-colors" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-cinza-aconchego font-medium mb-2">
                    E-mail *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-azul-claro-principal focus:border-azul-claro-principal outline-none transition-colors" placeholder="seu@email.com" />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-cinza-aconchego font-medium mb-2">
                    Assunto
                  </label>
                  <select id="assunto" name="assunto" value={formData.assunto} onChange={handleChange} className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-azul-claro-principal focus:border-azul-claro-principal outline-none transition-colors">
                    <option value="">Selecione um assunto</option>
                    <option value="agendamento">Agendamento de Consulta</option>
                    <option value="informacoes">Informações sobre Terapias</option>
                    <option value="planos">Dúvidas sobre Planos</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-cinza-aconchego font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-azul-claro-principal focus:border-azul-claro-principal outline-none transition-colors" placeholder="Como podemos ajudar você?" />
                </div>

                <button
                  type="submit"
                  className="btn-azul-claro w-full flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>

            {/* Informações */}
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-semibold text-azul-claro-principal mb-6">
                Informações Adicionais
              </h2>

              <div className="space-y-6">
                {/* Endereço */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-azul-claro-suave/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-azul-claro-principal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-azul-claro-principal mb-2">Endereço</h3>
                    <p className="text-cinza-aconchego">
                      Rua Marechal Mallet, 355<br />
                      Parque da Vila Prudente<br />
                      São Paulo/SP
                    </p>
                  </div>
                </div>

                {/* Horários */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-azul-claro-suave/20 rounded-lg">
                    <Clock className="w-6 h-6 text-azul-claro-principal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-azul-claro-principal mb-2">Horários de Atendimento</h3>
                    <div className="text-cinza-aconchego space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>

                {/* Mapa */}
                <div className="mt-8">
                  <h3 className="font-semibold text-azul-claro-principal mb-4">Localização</h3>
                  <div className="bg-branco-ninho rounded-lg shadow-lg p-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4067!2d-46.5796!3d-23.5862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c4f3b4b4b4b%3A0x4b4b4b4b4b4b4b4b!2sRua%20Marechal%20Mallet%2C%20355%20-%20Parque%20da%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                      width="100%"
                      height="250"
                      style={{ border: 0, borderRadius: '0.5rem' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da Casa Arco Íris"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
