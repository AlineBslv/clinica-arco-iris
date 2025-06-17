
import React from 'react';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Nossos Serviços', href: '#terapias' },
    { name: 'Contato', href: '#contato' }
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/casa.arcoiris', icon: <Instagram className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/casaarcoiris', icon: <Facebook className="w-5 h-5" /> },
    { name: 'E-mail', href: 'mailto:contato@casaarcoiris.com.br', icon: <Mail className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-branco-ninho text-azul-confianca">
      <div className="container-custom">
        {/* Conteúdo Principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                alt="Casa Arco-Íris - Centro de desenvolvimento humano" 
                className="h-12 w-auto" 
                src="/lovable-uploads/86655b52-126d-4353-9f16-056829646735.png" 
              />
              <div>
                <h3 className="font-lora font-semibold text-xl text-azul-confianca">Casa Arco-Íris</h3>
                <p className="text-azul-confianca/80 text-sm">Centro de desenvolvimento humano</p>
              </div>
            </div>
            
            <p className="text-azul-confianca/90 leading-relaxed mb-6 max-w-md">
              Um espaço interdisciplinar voltado ao desenvolvimento humano integral de crianças, adolescentes e adultos. 
              Nosso cuidado une terapias clássicas e complementares em um ambiente com cara de casa.
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-azul-confianca/10 rounded-lg text-azul-confianca hover:bg-azul-confianca/20 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menu de Navegação */}
          <div>
            <h4 className="font-lora font-semibold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-azul-confianca/80 hover:text-azul-confianca transition-colors duration-300 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-lora font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <a 
                href="tel:+5511999999999" 
                className="flex items-center space-x-3 text-azul-confianca/80 hover:text-azul-confianca transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(11) 9XXXX-XXXX</span>
              </a>
              
              <a 
                href="mailto:contato@casaarcoiris.com.br" 
                className="flex items-center space-x-3 text-azul-confianca/80 hover:text-azul-confianca transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@casaarcoiris.com.br</span>
              </a>
              
              <div className="flex items-start space-x-3 text-azul-confianca/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Rua [endereço completo]<br />
                  São Paulo/SP
                </span>
              </div>

              <div className="pt-2">
                <p className="text-azul-confianca/80 text-sm">
                  🌐 www.casaarcoiris.com.br<br />
                  📸 @casa.arcoiris
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-azul-confianca/20"></div>
      </div>

      {/* Copyright - Largura Total */}
      <div className="py-6 px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-sm text-branco-ninho/70 bg-azul-confianca w-full">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span>© 2025 Casa Arco Íris. Todos os direitos reservados.</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span>Feito com</span>
          <Heart className="w-4 h-4 text-terracota" />
          <span>para cuidar de você</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
