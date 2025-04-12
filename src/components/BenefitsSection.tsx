
import React from 'react';
import { 
  Zap, 
  Award, 
  TrendingDown, 
  BarChartHorizontal 
} from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="h-10 w-10 text-cyber-blue" />,
    title: 'Agilidade Exponencial',
    description: 'Processos que levavam dias são concluídos em minutos, com agentes de IA trabalhando 24/7 sem interrupções.'
  },
  {
    icon: <Award className="h-10 w-10 text-cyber-blue" />,
    title: 'Qualidade Superior',
    description: 'Elimine erros humanos com agentes especializados que garantem precisão em cada etapa do processo.'
  },
  {
    icon: <TrendingDown className="h-10 w-10 text-cyber-blue" />,
    title: 'Redução de Custos',
    description: 'Diminua dramaticamente custos operacionais automatizando tarefas repetitivas e complexas.'
  },
  {
    icon: <BarChartHorizontal className="h-10 w-10 text-cyber-blue" />,
    title: 'Escalabilidade Inteligente',
    description: 'Expanda operações sem preocupações - a rede de agentes se adapta automaticamente ao volume de trabalho.'
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 relative overflow-hidden grid-background">
      <div className="absolute inset-0 bg-cyber-black/70 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Benefícios <span className="text-cyber-blue">Transformadores</span>
          </h2>
          <p className="section-subtitle">
            Nossa rede de agentes de IA não apenas automatiza processos, 
            mas transforma fundamentalmente a produtividade do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="cyber-card group hover:translate-y-[-5px]"
            >
              <div className="mb-4 p-3 inline-block rounded-full bg-cyber-blue/10 group-hover:bg-cyber-blue/20 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-cyber-blue-light transition-colors">
                {benefit.title}
              </h3>
              <p className="text-cyber-silver/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
