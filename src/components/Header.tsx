
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Terapias', href: '#terapias' },
    { name: 'Nossa Equipe', href: '#equipe' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-branco-ninho/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-terracota to-azul-confianca rounded-full flex items-center justify-center">
              <span className="text-branco-ninho font-lora font-semibold text-lg">CA</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-lora font-semibold text-xl text-azul-confianca">
                Casa Arco Íris
              </h1>
              <p className="text-sm text-cinza-aconchego -mt-1">Terapias Especializadas</p>
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-cinza-aconchego hover:text-azul-confianca transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-azul-confianca transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+5511999999999"
              className="text-azul-confianca hover:text-terracota transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://www.doctoralia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-cinza-aconchego hover:text-azul-confianca transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-branco-ninho/95 backdrop-blur-md border-t border-bege-suave shadow-lg animate-fade-in">
            <nav className="container-custom py-6">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-cinza-aconchego hover:text-azul-confianca transition-colors duration-300 font-medium py-2 border-b border-bege-suave"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col space-y-3">
                  <a
                    href="tel:+5511999999999"
                    className="flex items-center space-x-2 text-azul-confianca hover:text-terracota transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Ligar Agora</span>
                  </a>
                  <a
                    href="https://www.doctoralia.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agendar Consulta
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
