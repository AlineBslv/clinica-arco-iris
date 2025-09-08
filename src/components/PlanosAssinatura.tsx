import React from 'react';
import { Check, Star, MessageCircle } from 'lucide-react';

interface PlanoAssinaturaProps {
  variant?: 'homepage' | 'especialidades';
}

const PlanosAssinatura: React.FC<PlanoAssinaturaProps> = ({ variant = 'homepage' }) => {
  const planos = [
    {
      nome: "Plano Online",
      beneficios: [
        "Acesso às terapias online semanais",
        "Clube de parcerias",
        "Reembolso de medicamentos (18+)",
        "Assistência funeral familiar",
        "Descontos em terapias"
      ],
      preco: "Pagamento Mensal",
      fidelidade: "6 meses de fidelidade",
      whatsappLink: "https://api.whatsapp.com/send/?phone=5511944694777&text=Olá%2C+vim+pelo+site+e+gostaria+de+saber+mais+sobre+o+Plano+Online",
      cor: "azul-confianca",
      destaque: false
    },
    {
      nome: "Plano Horizonte",
      beneficios: [
        "Sessões semanais + duas sessões mensais complementares",
        "Clube de parcerias",
        "Reembolso de medicamentos (18+)",
        "Assistência funeral familiar",
        "Descontos em produtos"
      ],
      preco: "Pagamento Mensal",
      fidelidade: "6 meses de fidelidade",
      whatsappLink: "https://api.whatsapp.com/send/?phone=5511944694777&text=Olá%2C+vim+pelo+site+e+gostaria+de+saber+mais+sobre+o+Plano+Horizonte",
      cor: "roxo-principal",
      destaque: true,
      badge: "Mais Procurado"
    },
    {
      nome: "Plano Íris",
      beneficios: [
        "Três sessões semanais + quatro sessões mensais complementares",
        "Clube de parcerias",
        "Reembolso de medicamentos (18+)",
        "Assistência funeral familiar",
        "Descontos em terapias"
      ],
      preco: "Pagamento Mensal",
      fidelidade: "6 meses de fidelidade",
      whatsappLink: "https://api.whatsapp.com/send/?phone=5511944694777&text=Olá%2C+vim+pelo+site+e+gostaria+de+saber+mais+sobre+o+Plano+Íris",
      cor: "verde-principal",
      destaque: false
    },
    {
      nome: "Plano Prisma",
      beneficios: [
        "Cinco sessões semanais + oito sessões mensais complementares",
        "Consultoria estética ou avaliação neuropsicológica",
        "Clube de parcerias",
        "Reembolso de medicamentos (18+)",
        "Assistência funeral familiar",
        "Descontos em terapias"
      ],
      preco: "Pagamento Mensal",
      fidelidade: "6 meses de fidelidade",
      whatsappLink: "https://api.whatsapp.com/send/?phone=5511944694777&text=Olá%2C+vim+pelo+site+e+gostaria+de+saber+mais+sobre+o+Plano+Prisma",
      cor: "laranja-principal",
      destaque: false
    }
  ];

  const getSectionTitle = () => {
    if (variant === 'especialidades') {
      return "Nossos Planos de Assinatura";
    }
    return "Planos de Assinatura";
  };

  const getSectionSubtitle = () => {
    if (variant === 'especialidades') {
      return "Escolha o plano que melhor se adapta às necessidades da sua família e tenha acesso a benefícios exclusivos";
    }
    return "Conheça nossos planos de assinatura e tenha acesso a benefícios exclusivos para você e sua família";
  };

  const getGridLayout = () => {
    if (variant === 'homepage') {
      return "grid md:grid-cols-2 lg:grid-cols-4 gap-6";
    }
    return "grid md:grid-cols-2 lg:grid-cols-4 gap-6";
  };

  return (
    <section className="section-padding bg-branco-ninho">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block px-4 py-2 bg-roxo-principal/20 rounded-full mb-6">
            <span className="text-roxo-principal font-medium">Planos de Assinatura</span>
          </div>
          
          <h2 className="text-azul-confianca mb-6">
            {getSectionTitle()}
          </h2>
          
          <p className="text-cinza-aconchego max-w-3xl mx-auto text-lg">
            {getSectionSubtitle()}
          </p>
        </div>

        {/* Planos Grid */}
        <div className={getGridLayout()}>
          {planos.map((plano, index) => (
            <div 
              key={index} 
              className={`card-custom hover-lift animate-on-scroll relative flex flex-col ${
                plano.destaque ? 'ring-2 ring-roxo-principal shadow-xl' : ''
              }`}
            >
              {/* Badge Mais Procurado */}
              {plano.destaque && plano.badge && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-roxo-principal text-branco-ninho px-3 py-2 rounded-full text-xs font-medium flex items-center space-x-1 shadow-lg whitespace-nowrap">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{plano.badge}</span>
                  </div>
                </div>
              )}

              {/* Nome do Plano */}
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto ${
                plano.cor === 'azul-confianca' ? 'bg-azul-confianca/20 text-azul-confianca' :
                plano.cor === 'roxo-principal' ? 'bg-roxo-principal/20 text-roxo-principal' :
                plano.cor === 'verde-principal' ? 'bg-verde-principal/20 text-verde-principal' :
                plano.cor === 'laranja-principal' ? 'bg-laranja-principal/20 text-laranja-principal' :
                'bg-azul-confianca/20 text-azul-confianca'
              }`}>
                {plano.nome}
              </div>

              {/* Preço */}
              <div className="text-2xl font-bold text-azul-confianca mb-2">
                {plano.preco}
              </div>

              {/* Fidelidade */}
              <div className="text-sm text-cinza-aconchego mb-6">
                {plano.fidelidade}
              </div>

              {/* Benefícios */}
              <div className="flex-grow mb-8">
                <h4 className="text-lg font-semibold text-azul-confianca mb-4">
                  Principais Benefícios:
                </h4>
                <ul className="space-y-3">
                  {plano.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 mt-1 flex-shrink-0 ${
                        plano.cor === 'azul-confianca' ? 'text-azul-confianca' :
                        plano.cor === 'roxo-principal' ? 'text-roxo-principal' :
                        plano.cor === 'verde-principal' ? 'text-verde-principal' :
                        plano.cor === 'laranja-principal' ? 'text-laranja-principal' :
                        'text-azul-confianca'
                      }`} />
                      <span className="text-cinza-aconchego text-sm leading-relaxed">
                        {beneficio}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão Saber Mais */}
              <a
                href={plano.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  plano.destaque 
                    ? 'btn-roxo' 
                    : plano.cor === 'azul-confianca' ? 'btn-secondary text-azul-confianca border-azul-confianca hover:bg-azul-confianca hover:text-branco-ninho' :
                      plano.cor === 'roxo-principal' ? 'btn-secondary text-roxo-principal border-roxo-principal hover:bg-roxo-principal hover:text-branco-ninho' :
                      plano.cor === 'verde-principal' ? 'btn-secondary text-verde-principal border-verde-principal hover:bg-verde-principal hover:text-branco-ninho' :
                      plano.cor === 'laranja-principal' ? 'btn-secondary text-laranja-principal border-laranja-principal hover:bg-laranja-principal hover:text-branco-ninho' :
                      'btn-secondary text-azul-confianca border-azul-confianca hover:bg-azul-confianca hover:text-branco-ninho'
                } w-full text-center flex items-center justify-center space-x-2 transition-all duration-300`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Saber mais</span>
              </a>
            </div>
          ))}
        </div>

        {/* Informações Adicionais */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-branco-ninho rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border-2 border-roxo-principal">
            <h3 className="text-xl font-semibold text-azul-confianca mb-4">
              Todos os planos incluem:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-cinza-aconchego">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-verde-principal flex-shrink-0" />
                <span>Sem taxa de adesão</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-verde-principal flex-shrink-0" />
                <span>Atendimento humanizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-verde-principal flex-shrink-0" />
                <span>Suporte via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanosAssinatura;
