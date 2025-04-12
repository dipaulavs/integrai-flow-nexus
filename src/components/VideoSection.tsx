
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-glow opacity-50" style={{ top: '30%' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Veja como a <span className="text-cyber-blue">IntegrAI</span> revoluciona processos
          </h2>
          <p className="section-subtitle">
            Nossa tecnologia transforma radicalmente a forma como sua empresa opera, 
            eliminando ineficiências e acelerando resultados.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-cyber-blue/30 shadow-[0_0_30px_rgba(0,98,255,0.15)]">
          <div className="aspect-w-16 aspect-h-9 relative">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=TsWvhK0x92NMqnmS" 
              title="IntegrAI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
