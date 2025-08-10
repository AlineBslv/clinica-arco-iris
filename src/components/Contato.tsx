
import React, { useState } from 'react';
import axios from 'axios'; // 📦 Importamos o axios
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calendar, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contato = () => {
  useScrollAnimation();

  // Sua chave de acesso do Web3Forms que você gerou
  const ACCESS_KEY = 'dbc14553-82e3-49ba-a6f6-2ced34e9210f';

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  // Novos estados para controlar o envio e a mensagem de resposta
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Lógica de envio com async/await e axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMessage('');

    const data = {
      ...formData,
      access_key: ACCESS_KEY,
      subject: `Nova mensagem de ${formData.nome} - Contato Site`,
      from_name: "Casa Arco Íris",
    };

    try {
      const res = await axios.post('https://api.web3forms.com/submit', data);

      if (res.data.success) {
        setResponseMessage('✅ Mensagem enviada com sucesso! Retornaremos em breve.');
        // Limpa o formulário
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        });
      } else {
        setResponseMessage('❌ Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro no envio do formulário:', error);
      setResponseMessage('❌ Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* O resto do seu JSX permanece igual... */}
      <section className="pt-32 pb-16 bg-azul-claro-principal">
        {/* ... */}
      </section>

      <section className="section-padding bg-branco-ninho">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Seus cards de contato aqui... */}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-semibold text-azul-claro-principal mb-6">Envie sua Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inputs do formulário aqui... */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-cinza-aconchego font-medium mb-2">Nome *</label>
                    <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-azul-claro-principal focus:border-azul-claro-principal outline-none transition-colors" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-cinza-aconchego font-medium mb-2">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-azul-claro-principal focus:border-azul-claro-principal outline-none transition-colors" placeholder="(11) 99999-9999" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-cinza-aconchego font-medium mb-2">E-mail *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-azul-claro-principal focus:border-azul-claro-principal outline-none transition-colors" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-cinza-aconchego font-medium mb-2">Assunto</label>
                  <select id="assunto" name="assunto" value={formData.assunto} onChange={handleChange} className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-azul-claro-principal focus:border-azul-claro-principal outline-none transition-colors">
                    <option value="">Selecione um assunto</option>
                    <option value="agendamento">Agendamento de Consulta</option>
                    <option value="informacoes">Informações sobre Terapias</option>
                    <option value="planos">Dúvidas sobre Planos</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-cinza-aconchego font-medium mb-2">Mensagem *</label>
                  <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-bege-suave rounded-lg focus:ring-2 focus:ring-azul-claro-principal focus:border-azul-claro-principal outline-none transition-colors" placeholder="Como podemos ajudar você?" />
                </div>
                
                <button
                  type="submit"
                  disabled={isSending} // Desabilita o botão durante o envio
                  className="btn-azul-claro w-full flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSending ? 'Enviando...' : 'Enviar Mensagem'}</span>
                </button>
                
                {/* Exibe a mensagem de sucesso ou erro */}
                {responseMessage && <p className="mt-4 text-center text-cinza-aconchego">{responseMessage}</p>}
              </form>
            </div>
            <div className="animate-on-scroll">
              {/* Suas informações adicionais aqui... */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;