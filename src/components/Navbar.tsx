
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
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-cyber-blue flex items-center justify-center">
            <span className="text-white font-bold text-xl">Ai</span>
          </div>
          <span className="text-xl font-bold tracking-tight">
            Integr<span className="text-cyber-blue">AI</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#beneficios" className="text-cyber-silver hover:text-cyber-blue-light transition-colors">
            Benefícios
          </a>
          <a href="#como-funciona" className="text-cyber-silver hover:text-cyber-blue-light transition-colors">
            Como Funciona
          </a>
          <a href="#aplicacoes" className="text-cyber-silver hover:text-cyber-blue-light transition-colors">
            Aplicações
          </a>
          <a href="#contato" className="cyber-button inline-block">
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
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#como-funciona"
              className="text-cyber-silver hover:text-cyber-blue-light transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a
              href="#aplicacoes"
              className="text-cyber-silver hover:text-cyber-blue-light transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Aplicações
            </a>
            <a
              href="#contato"
              className="cyber-button inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
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
