import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [{
    pergunta: "O que é a Casa Arco-Íris?",
    resposta: "A Casa Arco-Íris é um espaço interdisciplinar voltado ao desenvolvimento humano integral de crianças, adolescentes e adultos. Nosso cuidado une terapias clássicas e complementares em um ambiente com cara de casa: aconchegante, colorido, vivo e sensível."
  }, {
    pergunta: "Quais serviços são oferecidos na Casa Arco-Íris?",
    resposta: "Oferecemos atendimentos interdisciplinares presenciais na casa, online e em escolas nas áreas de Psicologia, Fonoaudiologia, Terapia Ocupacional, Neuropsicologia, Psicopedagogia, Fisioterapia, Nutrição, Terapia ABA, Estética, Massoterapia, Acupuntura e Finanças comportamentais."
  }, {
    pergunta: "Onde a Casa está localizada?",
    resposta: "Estamos localizados na Rua Marechal Malet, 355 - Parque da Vila Prudente, São Paulo - SP, 03140-020, próximo ao Metrô da Vila Prudente, Linha Verde."
  }, {
    pergunta: "Quais são os horários de atendimento?",
    resposta: "Nosso atendimento ocorre de segunda a sexta-feira, das 8h às 18h, e aos sábados, das 8h às 14h. Consulte horários específicos para cada serviço no site ou pelo atendimento."
  }, {
    pergunta: "A Casa atende crianças e adultos?",
    resposta: "Sim! Atendemos todas as idades, desde bebês até idosos, com planos de cuidado personalizados e voltados às necessidades individuais de cada fase da vida."
  }, {
    pergunta: "A Casa Arco-Íris é voltada apenas para pessoas neuro divergentes?",
    resposta: "Não. Atendemos tanto pessoas neurotípicas quanto neuro divergentes. Nosso compromisso é com a singularidade de cada ser humano, independentemente do diagnóstico."
  }, {
    pergunta: "O que é um atendimento interdisciplinar?",
    resposta: "É quando diferentes profissionais trabalham juntos para oferecer um cuidado mais completo e integrado. Aqui, corpo, mente e comportamento são olhados em conjunto, respeitando cada pessoa como um ser único."
  }, {
    pergunta: "Como agendar um atendimento?",
    resposta: "Você pode agendar através do Doctoralia no link fornecido. Também estamos disponíveis para tirar dúvidas sobre o agendamento nos nossos canais no Whatsapp, telefone e e-mail."
  }, {
    pergunta: "Preciso de encaminhamento médico?",
    resposta: "Não. Você pode procurar diretamente a Casa para uma avaliação inicial e nossa equipe ajudará a definir quais profissionais e abordagens são ideais para o seu caso."
  }, {
    pergunta: "A Casa Arco-Íris atende por convênio?",
    resposta: "Atualmente, nossos atendimentos são realizados de forma particular. Oferecemos Nota Fiscal para reembolso junto aos convênios e opções de pacotes com formas de pagamento facilitadas."
  }, {
    pergunta: "Quais são as formas de pagamento aceitas?",
    resposta: "Aceitamos dinheiro, cartões de crédito e débito, Pix e transferências bancárias. Parcelamentos podem ser combinados em alguns casos."
  }, {
    pergunta: "Como funciona o primeiro atendimento?",
    resposta: "O primeiro atendimento é uma avaliação detalhada feita por um dos nossos profissionais, para identificar suas necessidades e traçar um plano de cuidado personalizado."
  }, {
    pergunta: "Posso remarcar ou cancelar uma consulta?",
    resposta: "Sim, solicitamos que remarque ou cancele com pelo menos 24 horas de antecedência, para evitar cobranças de taxa."
  }, {
    pergunta: "A Casa tem estrutura para acompanhantes ou familiares? Como é o ambiente da clínica?",
    resposta: "Sim. Temos um espaço de convivência com jardim, café, coworking e ambiente acolhedor para quem aguarda enquanto o atendimento acontece. Aqui, todos se sentem em casa."
  }, {
    pergunta: "O que é a Terapia de Finanças Comportamentais?",
    resposta: "É uma abordagem exclusiva que une psicologia e educação financeira para ajudar as pessoas a entenderem e mudarem sua relação com o dinheiro, promovendo equilíbrio emocional e autonomia."
  }, {
    pergunta: "Posso participar da comunidade da Casa mesmo sem fazer terapia?",
    resposta: "Sim! Promovemos rodas de conversa, workshops e eventos abertos para toda a comunidade. Acreditamos na construção coletiva de um espaço acolhedor e transformador."
  }, {
    pergunta: "Como posso participar das rodas de conversa, workshops e eventos?",
    resposta: "Divulgamos nossa agenda nas redes sociais e no site, incluindo as rodas de conversas e workshops. Você pode se inscrever diretamente pelos nossos canais ou conversar com a equipe para saber mais."
  }];
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section className="section-padding bg-azul-sereno/10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-block px-4 py-2 bg-azul-sereno/20 rounded-full mb-6">
              <span className="text-azul-confianca font-medium">Dúvidas Comuns</span>
            </div>
            
            <h2 className="text-azul-confianca mb-6">
              Perguntas <span className="text-azul-confianca ">Frequentes</span>
            </h2>
            
            <p className="text-cinza-aconchego">
              Esclarecemos as principais dúvidas sobre nossos serviços e abordagem terapêutica
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => <div key={index} className="bg-branco-ninho rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg animate-on-scroll">
                <button onClick={() => toggleFAQ(index)} className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-bege-suave/50 transition-colors duration-300">
                  <h3 className="font-lora font-semibold text-lg text-azul-confianca pr-4">
                    {faq.pergunta}
                  </h3>
                  <div className="flex-shrink-0 text-azul-sereno">
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <p className="text-cinza-aconchego leading-relaxed">
                      {faq.resposta}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-cinza-aconchego mb-6">
              Não encontrou a resposta que procurava?
            </p>
            <a href="#contato" className="btn-primary hover-lift">
              Entre em Contato Conosco
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQ;