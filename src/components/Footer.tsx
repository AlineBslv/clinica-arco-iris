import React from 'react';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  const menuItems = [{
    name: 'Início',
    href: '#inicio'
  }, {
    name: 'Sobre Nós',
    href: '#sobre'
  }, {
    name: 'Terapias',
    href: '#terapias'
  }, {
    name: 'Contato',
    href: '#contato'
  }];
  const socialLinks = [{
    name: 'Instagram',
    href: 'https://instagram.com/casaarcoiris',
    icon: <Instagram className="w-5 h-5" />
  }, {
    name: 'Facebook',
    href: 'https://facebook.com/casaarcoiris',
    icon: <Facebook className="w-5 h-5" />
  }, {
    name: 'E-mail',
    href: 'mailto:contato@casaarcoiris.com.br',
    icon: <Mail className="w-5 h-5" />
  }];
  return <footer className="bg-azul-confianca text-branco-ninho">
      <div className="container-custom">
        {/* Conteúdo Principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              
              <div>
                
                
              </div>
            </div>
            
            <p className="text-branco-ninho/90 leading-relaxed mb-6 max-w-md">
              Um espaço de acolhimento e desenvolvimento humano, especializado em 
              atendimento humanizado e inclusivo para crianças neurodivergentes e suas famílias.
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              {socialLinks.map(social => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-branco-ninho/10 rounded-lg text-branco-ninho hover:bg-branco-ninho/20 transition-all duration-300 hover:-translate-y-1" aria-label={social.name}>
                  {social.icon}
                </a>)}
            </div>
          </div>

          {/* Menu de Navegação */}
          <div>
            <h4 className="font-lora font-semibold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {menuItems.map(item => <li key={item.name}>
                  <a href={item.href} className="text-branco-ninho/80 hover:text-branco-ninho transition-colors duration-300 inline-block">
                    {item.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-lora font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <a href="tel:+5511999999999" className="flex items-center space-x-3 text-branco-ninho/80 hover:text-branco-ninho transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(11) 99999-9999</span>
              </a>
              
              <a href="mailto:contato@casaarcoiris.com.br" className="flex items-center space-x-3 text-branco-ninho/80 hover:text-branco-ninho transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@casaarcoiris.com.br</span>
              </a>
              
              <div className="flex items-start space-x-3 text-branco-ninho/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Rua das Flores, 123<br />
                  Jardim Esperança<br />
                  São Paulo/SP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-branco-ninho/20"></div>

        {/* Copyright */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-branco-ninho/70">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span>© 2024 Casa Arco Íris. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-terracota" />
            <span>para cuidar de você</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;