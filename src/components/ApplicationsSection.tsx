
import React from 'react';
import { 
  Truck, 
  LineChart, 
  Users, 
  Factory, 
  ShoppingCart, 
  Building2 
} from 'lucide-react';

const applications = [
  {
    icon: <Truck className="h-10 w-10 text-cyber-blue" />,
    title: 'Logística & Supply Chain',
    description: 'Otimize rotas, previsão de demanda e gestão de estoque automatizada com IA.'
  },
  {
    icon: <LineChart className="h-10 w-10 text-cyber-blue" />,
    title: 'Finanças & Contabilidade',
    description: 'Automatize relatórios financeiros, análise de despesas e previsões orçamentárias.'
  },
  {
    icon: <Users className="h-10 w-10 text-cyber-blue" />,
    title: 'Atendimento ao Cliente',
    description: 'Elevada experiência do cliente com atendimento 24/7 e soluções personalizadas.'
  },
  {
    icon: <Factory className="h-10 w-10 text-cyber-blue" />,
    title: 'Manufatura & Produção',
    description: 'Manutenção preditiva, controle de qualidade e otimização de processos industriais.'
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-cyber-blue" />,
    title: 'Varejo & E-commerce',
    description: 'Personalização de experiências, gestão de inventário e previsão de tendências.'
  },
  {
    icon: <Building2 className="h-10 w-10 text-cyber-blue" />,
    title: 'Jurídico & Compliance',
    description: 'Análise automatizada de contratos, monitoramento regulatório e gestão de riscos.'
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
