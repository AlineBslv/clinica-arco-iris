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
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
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
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-azul-claro-principal">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h1 className="text-branco-ninho mb-6">
              Entre em <span className="text-branco-ninho ">Contato</span>
            </h1>
            <p className="text-xl text-branco-ninho/90 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para acolher você e sua família. Escolha a forma 
              de contato que for mais conveniente
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
              <a href="https://www.doctoralia.com.br" target="_blank" rel="noopener noreferrer" className="btn-azul-claro w-full">
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
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-secondary text-azul-claro-principal border-azul-claro-principal hover:bg-azul-claro-principal hover:text-branco-ninho w-full">
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
                Ligue diretamente para agendar ou tirar dúvidas.
              </p>
              <a href="tel:+5511999999999" className="btn-secondary text-azul-claro-principal border-azul-claro-principal hover:bg-azul-claro-principal hover:text-branco-ninho w-full">
                (11) 99999-9999
              </a>
            </div>

            {/* E-mail */}
            <div className="card-custom text-center hover-lift animate-on-scroll">
              <div className="p-4 bg-azul-claro-suave/20 rounded-xl w-fit mx-auto mb-6">
                <Mail className="w-8 h-8 text-azul-claro-medio" />
              </div>
              <h3 className="text-xl font-semibold text-azul-claro-principal mb-4">
                E-mail
              </h3>
              <p className="text-cinza-aconchego mb-6">
                Envie sua mensagem por e-mail.
              </p>
              <a href="mailto:contato@casaarcoiris.com.br" className="btn-secondary text-azul-claro-principal border-azul-claro-principal hover:bg-azul-claro-principal hover:text-branco-ninho w-full">
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

                <button type="submit" className="btn-azul-claro w-full flex items-center justify-center space-x-2">
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
                      Rua das Flores, 123<br />
                      Jardim Esperança<br />
                      São Paulo/SP - CEP 01234-567
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
                  <div className="bg-azul-claro-suave/10 h-64 rounded-lg flex items-center justify-center border border-azul-claro-suave/30">
                    <p className="text-cinza-aconchego">Mapa do Google Maps será integrado aqui</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contato;