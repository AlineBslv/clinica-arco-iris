
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      pergunta: "Como funciona a primeira consulta?",
      resposta: "A primeira consulta é um momento de acolhimento e conhecimento mútuo. Durante essa conversa inicial, buscamos compreender suas necessidades, objetivos e expectativas. É um espaço seguro para tirar dúvidas e alinhar o melhor caminho terapêutico para você ou seu filho."
    },
    {
      pergunta: "Quais planos de saúde são aceitos?",
      resposta: "Trabalhamos com os principais convênios médicos e também oferecemos atendimento particular. Nossa equipe pode auxiliar com questões de reembolso e documentação necessária. Entre em contato para verificar se seu plano está em nossa rede credenciada."
    },
    {
      pergunta: "O que é terapia ocupacional e como pode ajudar?",
      resposta: "A terapia ocupacional foca no desenvolvimento de habilidades necessárias para as atividades do dia a dia. Para crianças neurodivergentes, trabalhamos aspectos como coordenação motora, integração sensorial, autonomia e habilidades sociais, sempre respeitando o ritmo e as particularidades de cada criança."
    },
    {
      pergunta: "A Casa Arco Íris atende adultos também?",
      resposta: "Sim! Embora tenhamos especialização em crianças neurodivergentes, oferecemos atendimento para todas as idades. Nosso ambiente acolhedor e abordagem humanizada beneficiam pessoas de diferentes faixas etárias que buscam desenvolvimento pessoal e bem-estar."
    },
    {
      pergunta: "Como é o ambiente da clínica?",
      resposta: "Nossa 'casa' foi pensada para ser um espaço verdadeiramente acolhedor. Temos ambientes com luz natural, decoração que transmite calma, e até a presença de pets terapêuticos. Queremos que você se sinta em casa desde o primeiro momento."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-azul-claro/10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-block px-4 py-2 bg-azul-claro/20 rounded-full mb-6">
              <span className="text-azul-claro font-medium">Dúvidas Comuns</span>
            </div>
            
            <h2 className="text-azul-claro mb-6">
              Perguntas <span className="text-azul-principal">Frequentes</span>
            </h2>
            
            <p className="text-cinza-texto">
              Esclarecemos as principais dúvidas sobre nossos serviços e abordagem terapêutica
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-branco rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg animate-on-scroll"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="font-lora font-semibold text-lg text-azul-claro pr-4">
                    {faq.pergunta}
                  </h3>
                  <div className="flex-shrink-0 text-azul-claro">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-cinza-texto leading-relaxed">
                      {faq.resposta}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-cinza-texto mb-6">
              Não encontrou a resposta que procurava?
            </p>
            <a
              href="#contato"
              className="btn-primary hover-lift"
            >
              Entre em Contato Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
