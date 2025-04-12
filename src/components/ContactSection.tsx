
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 relative overflow-hidden bg-cyber-black">
      <div className="absolute inset-0 bg-blue-glow opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto cyber-card border-cyber-blue/30 p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="section-title glow-text">
              Pronto para transformar sua empresa com a <span className="text-cyber-blue">IntegrAI</span>?
            </h2>
            <p className="text-lg text-cyber-silver/80 max-w-3xl mx-auto mt-4">
              Agende uma demonstração e descubra como nossa solução integrada de 
              agentes de IA pode automatizar processos críticos da sua empresa.
            </p>
          </div>
          
          <form className="max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cyber-silver mb-1">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-cyber-dark-gray/70 border border-cyber-blue/20 rounded-md py-3 px-4 text-cyber-silver focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-cyber-silver mb-1">Empresa</label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-cyber-dark-gray/70 border border-cyber-blue/20 rounded-md py-3 px-4 text-cyber-silver focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50"
                  placeholder="Nome da empresa"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyber-silver mb-1">Email Profissional</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-cyber-dark-gray/70 border border-cyber-blue/20 rounded-md py-3 px-4 text-cyber-silver focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyber-silver mb-1">Como podemos ajudar?</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-cyber-dark-gray/70 border border-cyber-blue/20 rounded-md py-3 px-4 text-cyber-silver focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50"
                  placeholder="Conte-nos sobre os processos que você gostaria de automatizar..."
                ></textarea>
              </div>
              
              <button
                type="button"
                className="cyber-button w-full flex items-center justify-center mt-2 animate-glow"
              >
                Quero automatizar minha empresa
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
