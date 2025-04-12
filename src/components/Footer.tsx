
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-cyber-black border-t border-cyber-blue/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="w-8 h-8 rounded-md bg-cyber-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">Ai</span>
            </div>
            <span className="text-lg font-bold tracking-tight">
              Integr<span className="text-cyber-blue">AI</span>
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-cyber-silver hover:text-cyber-blue-light transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-cyber-silver hover:text-cyber-blue-light transition-colors">
              Twitter
            </a>
            <a href="#" className="text-cyber-silver hover:text-cyber-blue-light transition-colors">
              YouTube
            </a>
            <a href="#" className="text-cyber-silver hover:text-cyber-blue-light transition-colors">
              Blog
            </a>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-medium mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    Notícias
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Soluções</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    IntegrAI para Finanças
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    IntegrAI para Logística
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    IntegrAI para Atendimento
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    IntegrAI para Manufatura
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    Casos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    Whitepapers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cyber-silver/70 hover:text-cyber-blue-light transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyber-silver/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} IntegrAI. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-cyber-silver/50 hover:text-cyber-blue-light transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-cyber-silver/50 hover:text-cyber-blue-light transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-cyber-silver/50 hover:text-cyber-blue-light transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
