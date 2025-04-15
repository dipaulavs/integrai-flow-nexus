import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled 
          ? 'bg-cyber-black/80 backdrop-blur-md border-b border-cyber-blue/10 shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2"
          onClick={(e) => handleSmoothScroll(e, 'root')}
        >
          <div className="w-10 h-10 rounded-md bg-cyber-blue flex items-center justify-center">
            <span className="text-white font-bold text-xl">Ai</span>
          </div>
          <span className="text-xl font-bold tracking-tight">
            Integr<span className="text-cyber-blue">AI</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#beneficios" 
            className="text-cyber-silver hover:text-cyber-blue-light transition-colors"
            onClick={(e) => handleSmoothScroll(e, 'beneficios')}
          >
            Benefícios
          </a>
          <a 
            href="#como-funciona" 
            className="text-cyber-silver hover:text-cyber-blue-light transition-colors"
            onClick={(e) => handleSmoothScroll(e, 'como-funciona')}
          >
            Como Funciona
          </a>
          <a 
            href="#aplicacoes" 
            className="text-cyber-silver hover:text-cyber-blue-light transition-colors"
            onClick={(e) => handleSmoothScroll(e, 'aplicacoes')}
          >
            Aplicações
          </a>
          <a 
            href="#contato" 
            className="text-cyber-silver hover:text-cyber-blue-light transition-colors px-4 py-2 rounded-md transition-all duration-300 hover:bg-cyber-blue/10"
            onClick={(e) => handleSmoothScroll(e, 'contato')}
          >
            Demonstração
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyber-silver hover:text-cyber-blue-light transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cyber-black/95 backdrop-blur-lg border-b border-cyber-blue/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a
              href="#beneficios"
              className="text-cyber-silver hover:text-cyber-blue-light transition-colors py-2"
              onClick={(e) => handleSmoothScroll(e, 'beneficios')}
            >
              Benefícios
            </a>
            <a
              href="#como-funciona"
              className="text-cyber-silver hover:text-cyber-blue-light transition-colors py-2"
              onClick={(e) => handleSmoothScroll(e, 'como-funciona')}
            >
              Como Funciona
            </a>
            <a
              href="#aplicacoes"
              className="text-cyber-silver hover:text-cyber-blue-light transition-colors py-2"
              onClick={(e) => handleSmoothScroll(e, 'aplicacoes')}
            >
              Aplicações
            </a>
            <a
              href="#contato"
              className="text-cyber-silver hover:text-cyber-blue-light transition-colors text-center py-2 rounded-md transition-all duration-300 hover:bg-cyber-blue/10"
              onClick={(e) => handleSmoothScroll(e, 'contato')}
            >
              Demonstração
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
