
import React from 'react';
import { 
  MessageSquare, 
  Search, 
  BarChart3, 
  Instagram, 
  FileText, 
  Palette 
} from 'lucide-react';

const applications = [
  {
    icon: <MessageSquare className="h-10 w-10 text-cyber-blue" />,
    title: 'Agente de Atendimento Humanizado no WhatsApp',
    description: 'Inteligência Artificial que responde com empatia, 24 horas por dia.'
  },
  {
    icon: <Search className="h-10 w-10 text-cyber-blue" />,
    title: 'Agente de SEO Estratégico',
    description: 'Seu especialista automatizado para posicionar sua empresa na primeira página do Google.'
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-cyber-blue" />,
    title: 'Agente Gestor de Tráfego para META Ads',
    description: 'Criação e otimização de campanhas com inteligência de performance contínua.'
  },
  {
    icon: <Instagram className="h-10 w-10 text-cyber-blue" />,
    title: 'Agente Criador de Conteúdo Social',
    description: 'Postagens estratégicas para Instagram, TikTok e mais, geradas com criatividade e consistência.'
  },
  {
    icon: <FileText className="h-10 w-10 text-cyber-blue" />,
    title: 'Agente Redator SEO para Blogs',
    description: 'Conteúdos empresariais otimizados com palavras-chave inteligentes e foco em ranqueamento.'
  },
  {
    icon: <Palette className="h-10 w-10 text-cyber-blue" />,
    title: 'Agente Designer de Flyers Promocionais',
    description: 'Criações visuais impactantes e alinhadas com a identidade do seu negócio.'
  }
];

const ApplicationsSection = () => {
  return (
    <section id="aplicacoes" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-gradient"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Aplicações <span className="text-cyber-blue">Empresariais</span>
          </h2>
          <p className="section-subtitle">
            A IntegrAI transforma setores inteiros com soluções adaptadas 
            às necessidades específicas de cada indústria.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((application, index) => (
            <div 
              key={index} 
              className="cyber-card group hover:translate-y-[-5px]"
            >
              <div className="mb-4 p-3 inline-block rounded-full bg-cyber-blue/10 group-hover:bg-cyber-blue/20 transition-colors">
                {application.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyber-blue-light transition-colors">
                {application.title}
              </h3>
              <p className="text-cyber-silver/70 leading-relaxed">
                {application.description}
              </p>
              {index < applications.length - 1 && (
                <div className="mt-6 pt-6 border-t border-cyber-blue/10">
                  <div className="w-full flex justify-center">
                    <div className="text-cyber-blue">⸻</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
