
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    // Resetar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contatos = [
    {
      icon: <Phone className="w-6 h-6" />,
      titulo: "Telefone",
      info: "(11) 99999-9999",
      link: "tel:+5511999999999",
      cor: "azul-sereno"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      titulo: "Website",
      info: "www.casaarcoiris.com.br",
      link: "https://www.casaarcoiris.com.br",
      cor: "verde-salvia"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      titulo: "Endereço",
      info: "Rua Marechal Mallet, 355 - Parque da Vila Prudente - São Paulo/SP",
      link: "https://maps.google.com/?q=Rua+Marechal+Mallet+355+Parque+da+Vila+Prudente+São+Paulo",
      cor: "terracota"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      titulo: "Horário",
      info: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      link: "",
      cor: "violeta-lavanda"
    }
  ];

  return (
    <section id="contato" className="section-padding bg-bege-suave">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block px-4 py-2 bg-azul-sereno/20 rounded-full mb-6">
            <span className="text-azul-sereno font-medium">Contato</span>
          </div>
          
          <h2 className="text-azul-confianca mb-6">
            Vamos conversar sobre seu <span className="text-azul-sereno">cuidado?</span>
          </h2>
          
          <p className="text-cinza-aconchego max-w-2xl mx-auto">
            Estamos aqui para acolher você e sua família. Entre em contato e descubra 
            como podemos ajudar em sua jornada de desenvolvimento e bem-estar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Informações de Contato */}
          <div className="animate-on-scroll">
            {/* CTA Principal */}
            <div className="bg-azul-confianca rounded-2xl p-8 mb-8 text-center">
              <h3 className="text-2xl font-lora font-semibold text-branco-ninho mb-4">
                Agende sua Consulta
              </h3>
              <p className="text-branco-ninho/90 mb-6">
                Use nossa plataforma online para escolher o melhor horário
              </p>
              <a
                href="https://www.doctoralia.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-branco-ninho text-azul-confianca hover:bg-bege-suave inline-flex items-center space-x-2 hover-lift"
              >
                <span>Agendar pelo Doctoralia</span>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-verde-salvia/10 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-azul-confianca mb-3">
                Atendimento via WhatsApp
              </h3>
              <p className="text-cinza-aconchego mb-4">
                Tire suas dúvidas rapidamente pelo nosso WhatsApp
              </p>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Casa Arco Íris."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-verde-salvia hover:bg-verde-salvia/90 hover-lift"
              >
                Conversar no WhatsApp
              </a>
            </div>

            {/* Informações de Contato */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contatos.map((contato, index) => (
                <div 
                  key={index}
                  className="bg-branco-ninho rounded-xl p-6 hover-lift"
                >
                  <div className={`p-3 bg-${contato.cor}/10 rounded-lg w-fit mb-4`}>
                    <div className={`text-${contato.cor}`}>
                      {contato.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-azul-confianca mb-2">
                    {contato.titulo}
                  </h4>
                  {contato.link ? (
                    <a 
                      href={contato.link}
                      target={contato.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contato.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-cinza-aconchego hover:text-azul-confianca transition-colors duration-300 text-sm"
                    >
                      {contato.info}
                    </a>
                  ) : (
                    <p className="text-cinza-aconchego text-sm">{contato.info}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div className="animate-on-scroll">
            <div className="bg-branco-ninho rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-lora font-semibold text-azul-confianca mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-cinza-aconchego font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:outline-none focus:ring-2 focus:ring-azul-confianca focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-cinza-aconchego font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:outline-none focus:ring-2 focus:ring-azul-confianca focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-cinza-aconchego font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:outline-none focus:ring-2 focus:ring-azul-confianca focus:border-transparent transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-cinza-aconchego font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:outline-none focus:ring-2 focus:ring-azul-confianca focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Como podemos ajudar você?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 hover-lift"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-branco-ninho rounded-2xl p-2 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4067!2d-46.5796!3d-23.5862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c4f3b4b4b4b%3A0x4b4b4b4b4b4b4b4b!2sRua%20Marechal%20Mallet%2C%20355%20-%20Parque%20da%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Casa Arco Íris - Rua Marechal Mallet, 355"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
