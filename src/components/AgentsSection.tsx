
import React from 'react';
import { Bot, Network, Workflow, Brain, Database, Lock } from 'lucide-react';

const AgentsSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-cyber-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0062FF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Como Nossos <span className="text-cyber-blue">Agentes de IA</span> Colaboram
          </h2>
          <p className="section-subtitle">
            Um ecossistema inteligente onde cada agente é especializado em uma função, 
            trabalhando em perfeita sincronização para executar processos completos.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Centro - Hub Principal */}
          <div className="cyber-card absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-40 md:h-40 rounded-full z-20 flex items-center justify-center bg-gradient-to-br from-cyber-dark-gray to-cyber-black border-cyber-blue/40 animate-pulse-light">
            <div className="text-center">
              <Network className="h-8 w-8 md:h-12 md:w-12 mx-auto text-cyber-blue mb-1" />
              <span className="text-sm md:text-base font-medium text-white">Hub Central</span>
            </div>
          </div>
          
          {/* Agentes ao redor - Visíveis apenas em telas maiores */}
          <div className="hidden md:block">
            {/* Agente 1 - Análise de Dados */}
            <div className="cyber-card absolute left-0 top-1/4 transform -translate-y-1/2 w-32 h-32 rounded-lg z-10 flex flex-col items-center justify-center animate-float">
              <Database className="h-8 w-8 text-cyber-blue mb-2" />
              <span className="text-sm font-medium text-white text-center">Análise de Dados</span>
            </div>
            
            {/* Agente 2 - Processamento */}
            <div className="cyber-card absolute right-0 top-1/4 transform -translate-y-1/2 w-32 h-32 rounded-lg z-10 flex flex-col items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
              <Workflow className="h-8 w-8 text-cyber-blue mb-2" />
              <span className="text-sm font-medium text-white text-center">Processamento</span>
            </div>
            
            {/* Agente 3 - IA Cognitiva */}
            <div className="cyber-card absolute left-1/4 bottom-0 w-32 h-32 rounded-lg z-10 flex flex-col items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
              <Brain className="h-8 w-8 text-cyber-blue mb-2" />
              <span className="text-sm font-medium text-white text-center">IA Cognitiva</span>
            </div>
            
            {/* Agente 4 - Segurança */}
            <div className="cyber-card absolute right-1/4 bottom-0 w-32 h-32 rounded-lg z-10 flex flex-col items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
              <Lock className="h-8 w-8 text-cyber-blue mb-2" />
              <span className="text-sm font-medium text-white text-center">Segurança</span>
            </div>
            
            {/* Linhas de conexão animadas */}
            <svg className="absolute inset-0 z-0" width="100%" height="100%">
              <line x1="16%" y1="25%" x2="50%" y2="50%" stroke="#0062FF" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.6" className="animate-network-flow" />
              <line x1="84%" y1="25%" x2="50%" y2="50%" stroke="#0062FF" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.6" className="animate-network-flow" style={{ animationDelay: "0.5s" }} />
              <line x1="25%" y1="92%" x2="50%" y2="50%" stroke="#0062FF" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.6" className="animate-network-flow" style={{ animationDelay: "1s" }} />
              <line x1="75%" y1="92%" x2="50%" y2="50%" stroke="#0062FF" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.6" className="animate-network-flow" style={{ animationDelay: "1.5s" }} />
            </svg>
          </div>
          
          {/* Versão responsiva para dispositivos menores */}
          <div className="md:hidden mt-16 grid grid-cols-2 gap-4">
            <div className="cyber-card flex flex-col items-center p-4 text-center">
              <Database className="h-6 w-6 text-cyber-blue mb-2" />
              <span className="text-sm font-medium text-white">Análise de Dados</span>
            </div>
            <div className="cyber-card flex flex-col items-center p-4 text-center">
              <Workflow className="h-6 w-6 text-cyber-blue mb-2" />
              <span className="text-sm font-medium text-white">Processamento</span>
            </div>
            <div className="cyber-card flex flex-col items-center p-4 text-center">
              <Brain className="h-6 w-6 text-cyber-blue mb-2" />
              <span className="text-sm font-medium text-white">IA Cognitiva</span>
            </div>
            <div className="cyber-card flex flex-col items-center p-4 text-center">
              <Lock className="h-6 w-6 text-cyber-blue mb-2" />
              <span className="text-sm font-medium text-white">Segurança</span>
            </div>
          </div>
        </div>
        
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Inteligência Coletiva em Ação
          </h3>
          <p className="text-cyber-silver/80 leading-relaxed mb-8">
            Cada agente possui conhecimento especializado e capacidades únicas. 
            Quando trabalhando juntos sob a coordenação do Hub Central, eles formam 
            uma inteligência coletiva superior à soma das partes, capaz de executar 
            processos empresariais completos com eficiência incomparável.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
